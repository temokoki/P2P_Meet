import { useEffect, useRef, useState } from "react"
import { joinRoom, selfId, type Room } from "trystero"
import { EffectsPipeline } from "longpipe"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Camera,
  CameraOff,
  Check,
  Copy,
  LogOut,
  Maximize2,
  Mic,
  MicOff,
  MonitorUp,
  MonitorX,
  VideoOff,
  Image,
  ImageOff,
  SquarePlay,
  Ellipsis,
  GripHorizontal,
  Grip,
  Ban,
} from "lucide-react"

/* ════════════════════════════════════════════════════════════════════════════
   Constants & Types
   ════════════════════════════════════════════════════════════════════════════ */

const APP_ID = "p2p-meet-temo_koki"
const CAMERA_CONSTRAINTS: MediaTrackConstraints = {
  facingMode: "user",
  width: { ideal: 1280 },
  height: { ideal: 720 },
}
const MEDIA_READY_EVENTS = ["loadedmetadata", "loadeddata", "canplay"] as const
const PLAYBACK_RETRY_EVENTS = ["pointerdown", "touchstart", "keydown"] as const

type TileKind = "camera" | "screen"
type PermissionTarget = "camera" | "mic" | "both"

interface MediaIssue {
  title: string
  message: string
}

interface PeerTile {
  id: string
  peerId: string
  stream: MediaStream | null
  kind: TileKind
  isVideoOn: boolean
}

function makeRoomId(): string {
  return Math.random().toString(36).slice(2, 12).toUpperCase()
}

function getMediaLabel(target: PermissionTarget): string {
  if (target === "mic") return "Microphone"
  if (target === "camera") return "Camera"
  return "Camera and microphone"
}

function getMediaIssue(error: unknown, target: PermissionTarget): MediaIssue {
  const label = getMediaLabel(target)
  const errorName = error instanceof DOMException ? error.name : ""

  if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) {
    return {
      title: `${label} access is unavailable`,
      message: "Camera and microphone access requires HTTPS or localhost.",
    }
  }

  if (errorName === "NotAllowedError" || errorName === "SecurityError") {
    return {
      title: `${label} access is blocked`,
      message: "The browser is blocking this site. Click the camera icon in the address bar or open site settings, allow camera and microphone access, then try again.",
    }
  }

  if (errorName === "NotFoundError" || errorName === "DevicesNotFoundError") {
    return {
      title: `${label} not found`,
      message: "Check that your device is connected, enabled in your operating system, and available to this browser.",
    }
  }

  if (errorName === "NotReadableError" || errorName === "TrackStartError") {
    return {
      title: `${label} is busy`,
      message: "Another app or browser tab may be using it. Close the other app, then try again.",
    }
  }

  return {
    title: `${label} did not start`,
    message: "Check your browser and operating system permissions, make sure the device is connected, then try again.",
  }
}

/* ════════════════════════════════════════════════════════════════════════════
   Hook — audio-activity detection (remote streams only)
   ════════════════════════════════════════════════════════════════════════════ */

function useAudioActivity(stream: MediaStream | null): boolean {
  const [speaking, setSpeaking] = useState(false)
  const [hasAudio, setHasAudio] = useState(false)

  // Setup listeners to track when the audio stream is ready
  useEffect(() => {
    if (!stream) {
      setHasAudio(false)
      return
    }

    const checkAudioTracks = () => setHasAudio(stream.getAudioTracks().length > 0)
    checkAudioTracks()

    stream.addEventListener("addtrack", checkAudioTracks)
    stream.addEventListener("removetrack", checkAudioTracks)
    return () => {
      stream.removeEventListener("addtrack", checkAudioTracks)
      stream.removeEventListener("removetrack", checkAudioTracks)
    }
  }, [stream])

  // Detects audio activity in the remote stream to show if the user is speaking
  useEffect(() => {
    if (!stream || !hasAudio) {
      setSpeaking(false)
      return
    }

    // Setup audio graph to detect audio activity
    let interval: number
    let ctx: AudioContext | null = null
    let src: MediaStreamAudioSourceNode | null = null
    let analyser: AnalyserNode | null = null
    let buf: Uint8Array | null = null

    const initAudioGraph = () => {
      if (!ctx || ctx.state !== "running" || src) return
      try {
        src = ctx.createMediaStreamSource(stream)
        analyser = ctx.createAnalyser()
        analyser.fftSize = 256
        analyser.smoothingTimeConstant = 0.4
        src.connect(analyser)
        buf = new Uint8Array(analyser.frequencyBinCount)
      } catch (e) {
        console.error("Audio graph init failed:", e)
      }
    }

    const removeListeners = () => {
      window.removeEventListener("click", resumeCtx)
      window.removeEventListener("pointerdown", resumeCtx)
      window.removeEventListener("keydown", resumeCtx)
    }

    // Resume audio context if suspended
    const resumeCtx = () => {
      if (ctx?.state === "running") {
        initAudioGraph()
        removeListeners()
      } else if (ctx?.state === "suspended") {
        ctx.resume().then(() => {
          if (ctx?.state === "running") {
            initAudioGraph()
            removeListeners()
          }
        }).catch(() => { })
      }
    }

    // Attempt to create audio context and initialize graph
    try {
      ctx = new AudioContext()

      if (ctx.state === "suspended") {
        window.addEventListener("click", resumeCtx)
        window.addEventListener("pointerdown", resumeCtx)
        window.addEventListener("keydown", resumeCtx)
      } else {
        initAudioGraph()
      }

      // Check for audio activity and update speaking state periodically
      interval = window.setInterval(() => {
        if (ctx?.state === "running" && !src) {
          initAudioGraph()
        }

        // Update speaking state based on audio activity
        if (analyser && buf) {
          analyser.getByteFrequencyData(buf as any)
          let sum = 0
          for (let i = 0; i < buf.length; i++) sum += buf[i]
          setSpeaking(sum / buf.length > 12)
        }
      }, 100)
    } catch {
      return
    }

    return () => {
      window.clearInterval(interval)
      removeListeners()
      ctx?.close().catch(() => { })
    }
  }, [stream, hasAudio])

  return speaking
}

/* ════════════════════════════════════════════════════════════════════════════
   VideoTile — individual peer video card
   ════════════════════════════════════════════════════════════════════════════ */

function VideoTile({ tile, isLocal, localVideoActive }: { tile: PeerTile, isLocal: boolean, localVideoActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isSpeaking = useAudioActivity(isLocal ? null : tile.stream)
  const [videoReady, setVideoReady] = useState(false)

  const showVideo = isLocal ? localVideoActive : videoReady && tile.isVideoOn

  // Setup listeners to track when the video stream is ready to be shown
  useEffect(() => {
    const stream = tile.stream
    if (!stream) { setVideoReady(false); return }

    const updateReady = () => setVideoReady(stream.getVideoTracks().some(t => t.readyState === "live" && t.enabled))
    updateReady()

    stream.addEventListener("addtrack", updateReady)
    stream.addEventListener("removetrack", updateReady)
    stream.getVideoTracks().forEach((track) => {
      track.addEventListener("ended", updateReady)
    })

    return () => {
      stream.removeEventListener("addtrack", updateReady)
      stream.removeEventListener("removetrack", updateReady)
      stream.getVideoTracks().forEach((track) => {
        track.removeEventListener("ended", updateReady)
      })
    }
  }, [tile.stream])

  // Auto-play video stream
  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.muted = true
      video.playsInline = true
      if (video.srcObject !== tile.stream) video.srcObject = tile.stream
    }

    if (!tile.stream) return

    let playPromise: Promise<void> | null = null

    const tryPlay = () => {
      if (!video || !video.srcObject || playPromise) return

      // Local video is always muted to prevent echo
      if (isLocal) {
        video.muted = true
        if (video.paused) {
          playPromise = video.play()
          playPromise?.finally(() => { playPromise = null }).catch(() => { })
        }
        return
      }

      // Remote video: try to play with sound, fallback to muted
      if (video.paused) {
        video.muted = false
        playPromise = video.play()
          .catch(() => {
            video.muted = true
            return video.play()
          })
          .catch((error) => {
            console.warn("Video play failed", {
              peerId: tile.peerId,
              kind: tile.kind,
              name: error?.name,
              message: error?.message,
            });
          })
          .finally(() => {
            playPromise = null;
          });
      } else if (video.muted) {
        video.muted = false
      }
    }

    tryPlay()
    const raf = requestAnimationFrame(tryPlay)

    // Listeners to trigger autoplay
    MEDIA_READY_EVENTS.forEach((eventName) => {
      video?.addEventListener(eventName, tryPlay)
    })
    PLAYBACK_RETRY_EVENTS.forEach((eventName) => {
      window.addEventListener(eventName, tryPlay)
    })
    tile.stream.getTracks().forEach((track) => {
      track.addEventListener("unmute", tryPlay)
    })

    return () => {
      cancelAnimationFrame(raf)
      MEDIA_READY_EVENTS.forEach((eventName) => {
        video?.removeEventListener(eventName, tryPlay)
      })
      PLAYBACK_RETRY_EVENTS.forEach((eventName) => {
        window.removeEventListener(eventName, tryPlay)
      })
      tile.stream?.getTracks().forEach((track) => {
        track.removeEventListener("unmute", tryPlay)
      })
    }
  }, [isLocal, tile])

  const handleFullscreen = () => videoRef.current?.requestFullscreen?.().catch(() => { })

  return (
    <Card
      className={cn(
        "relative overflow-hidden p-0 [--card-spacing:0] transition-shadow duration-300",
        isSpeaking &&
        "ring-3 ring-emerald-500/70 shadow-lg shadow-emerald-500/30",
      )}
    >
      <div className="relative aspect-video overflow-hidden bg-muted/10">
        {tile.stream && (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
              showVideo ? "opacity-100" : "opacity-0",
            )}
          />
        )}

        {/* "Video off" placeholder */}
        {!showVideo && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <VideoOff className="size-14 text-muted-foreground/60" />
          </div>
        )}
      </div>

      {/* Fullscreen button */}
      {showVideo && (
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                variant="ghost"
                size="icon-sm"
                className="absolute top-3 right-3 bg-background/60 backdrop-blur-md hover:bg-background/80"
                onClick={handleFullscreen}
              />
            }
          >
            <Maximize2 className="size-4" />
          </TooltipTrigger>
          <TooltipContent>Fullscreen</TooltipContent>
        </Tooltip>
      )}
    </Card>
  )
}

/* ════════════════════════════════════════════════════════════════════════════
   App — main component
   ════════════════════════════════════════════════════════════════════════════ */

export default function App() {
  /* ── state ── */
  const [roomInput, setRoomInput] = useState("")
  const [joinedRoomId, setJoinedRoomId] = useState<string | null>(null)
  const [tiles, setTiles] = useState<PeerTile[]>([])
  const [isJoining, setIsJoining] = useState(false)
  const [isMicOn, setIsMicOn] = useState(false)
  const [isCameraOn, setIsCameraOn] = useState(false)
  const [isScreenSharing, setIsScreenSharing] = useState(false)
  const [copied, setCopied] = useState(false)
  const [mediaIssue, setMediaIssue] = useState<MediaIssue | null>(null)
  const [cameraEffect, setCameraEffect] = useState("none")

  /* ── refs ── */
  const roomRef = useRef<Room | null>(null)
  const localCameraStreamRef = useRef<MediaStream | null>(null)
  const localScreenStreamRef = useRef<MediaStream | null>(null)
  const currentVideoTrackRef = useRef<MediaStreamTrack | null>(null)
  const cameraWasOnRef = useRef(false)
  const isCameraOnRef = useRef(false)
  const isScreenSharingRef = useRef(false)
  const autoJoinHandledRef = useRef(false)
  const screenShareCleanupRef = useRef<() => void>(() => { })
  const sendCamStateRef = useRef<((data: { isOn: boolean }, target?: string) => void) | null>(null)
  const cameraEffectsRef = useRef<EffectsPipeline | null>(null)
  const cameraEffectsImageInputRef = useRef<HTMLInputElement>(null);
  const cameraEffectsVideoInputRef = useRef<HTMLInputElement>(null);

  const inMeeting = joinedRoomId !== null

  // Keep refs synced with state for use in callbacks
  isCameraOnRef.current = isCameraOn
  isScreenSharingRef.current = isScreenSharing

  const handleCameraEffectsFileSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file)

      if (file.type.startsWith('image/'))
        cameraEffectsRef.current?.setBackground({ image: fileUrl })
      else if (file.type.startsWith('video/'))
        cameraEffectsRef.current?.setBackground({ video: fileUrl })

      event.target.value = ''
    }
  }

  /* ── tile helpers ── */

  const addTile = (
    peerId: string,
    stream: MediaStream | null,
    kind: TileKind,
    isVideoOn = false,
  ) => {
    setTiles(cur => {
      const tile = cur.find(t => t.peerId === peerId)
      if (!tile) return [...cur, { id: `${peerId}-${kind}`, peerId, stream, kind, isVideoOn }]
      if (tile.stream === stream && tile.kind === kind) return cur
      return cur.map(t => t === tile ? { ...t, id: `${peerId}-${kind}`, stream, kind, isVideoOn } : t)
    })
  }

  const removeTilesForPeer = (peerId: string) => setTiles(cur => cur.filter(t => t.peerId !== peerId))

  /* ── local media stream ── */

  // Ensure local media stream exists when device access is not available initially
  const ensureLocalMediaStream = (): MediaStream => {
    if (!localCameraStreamRef.current) {
      cameraEffectsRef.current = new EffectsPipeline(new MediaStream(), { background: 'none' })
      localCameraStreamRef.current = cameraEffectsRef.current.stream
    }
    return localCameraStreamRef.current
  }

  // Request initial media stream with both audio and video
  const requestInitialMedia = async (): Promise<MediaStream> => {
    localCameraStreamRef.current?.getTracks().forEach(track => track.stop())
    localCameraStreamRef.current = null

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: CAMERA_CONSTRAINTS,
    })

    cameraEffectsRef.current = new EffectsPipeline(stream, { background: 'none' })
    localCameraStreamRef.current = cameraEffectsRef.current.stream
    return localCameraStreamRef.current
  }

  // Request specific device (mic or camera)
  const requestDevice = async (target: PermissionTarget) => {
    try {
      const requestedStream = await navigator.mediaDevices.getUserMedia(target === "mic" ? { audio: true } : { video: CAMERA_CONSTRAINTS })
      const newTrack = target === "mic" ? requestedStream.getAudioTracks()[0] : requestedStream.getVideoTracks()[0]

      if (!newTrack) throw new DOMException("No media track was returned.", "NotFoundError")

      const stream = ensureLocalMediaStream()
      const oldTrack = target === "mic" ? stream.getAudioTracks()[0] : stream.getVideoTracks()[0]

      // Update existing track or add new one
      if (oldTrack) {
        roomRef.current?.replaceTrack(oldTrack, newTrack)
        stream.removeTrack(oldTrack)
        oldTrack.stop()
        stream.addTrack(newTrack)
      } else {
        stream.addTrack(newTrack)
        if (stream.getTracks().length === 1) {
          // This is the very first track! Broadcast the entire stream.
          roomRef.current?.addStream(stream, { metadata: { kind: "camera" } })
        } else {
          // The stream was already broadcasted, just append the new track natively.
          const options = target === "camera" ? { metadata: { kind: "camera" } } : undefined
          roomRef.current?.addTrack(newTrack, stream, options)
        }
      }

      if (target === "mic") {
        setIsMicOn(true)
      } else {
        // Update video track and add tile if it's a new track
        currentVideoTrackRef.current = newTrack
        if (!oldTrack) addTile(selfId, stream, "camera")
        setIsCameraOn(true)
        sendCamStateRef.current?.({ isOn: true })
      }

      setMediaIssue(null)
    } catch (error) {
      console.warn(`${target} media request failed`, error)
      setMediaIssue(getMediaIssue(error, target))
    }
  }

  /* ── join / leave ── */

  const joinMeeting = async (targetRoomId: string) => {
    let roomId = targetRoomId.trim()
    if (!roomId) return

    // Auto-parse if user accidentally pasted a full URL
    try {
      const url = new URL(roomId)
      const r = url.searchParams.get("ROOM")
      if (r) roomId = r.trim()
    } catch {
      // Not a URL, use as is
    }

    setIsJoining(true)
    setMediaIssue(null)

    let stream: MediaStream
    try {
      stream = await requestInitialMedia()
    } catch (error) {
      console.warn("Initial media request failed", error)
      // Do not block joining. Start with an empty stream.
      stream = ensureLocalMediaStream()
    }
    const hasVideo = stream.getVideoTracks().some(track => track.readyState === "live" && track.enabled)
    const hasAudio = stream.getAudioTracks().some(track => track.readyState === "live" && track.enabled)

    currentVideoTrackRef.current = stream.getVideoTracks()[0] ?? null

    const room = joinRoom({ appId: APP_ID }, roomId)
    roomRef.current = room

    // Setup action to sync camera state
    const camAction = room.makeAction<{ isOn: boolean }>("cam-state")
    const sendCam = (data: { isOn: boolean }, target?: string) => {
      camAction.send(data, target ? { target } : undefined)
    }
    sendCamStateRef.current = sendCam

    camAction.onMessage = (data, { peerId }) => {
      setTiles(cur => {
        const tile = cur.find(t => t.peerId === peerId)
        if (tile?.isVideoOn === data.isOn) return cur
        return cur.map(t => t === tile ? { ...t, isVideoOn: data.isOn } : t)
      })
    }

    // Add video tile for new peer and send our video stream
    room.onPeerJoin = (peerId: string) => {
      addTile(peerId, null, "camera")
      const isVideoActive = currentVideoTrackRef.current?.enabled ?? false
      sendCam({ isOn: isVideoActive }, peerId)

      const activeStream = isScreenSharingRef.current
        ? localScreenStreamRef.current
        : localCameraStreamRef.current
      if (activeStream && activeStream.getTracks().length > 0) {
        room.addStream(activeStream, {
          target: peerId,
          metadata: { kind: isScreenSharingRef.current ? "screen" : "camera", },
        })
      }
    }

    room.onPeerLeave = (peerId: string) => {
      removeTilesForPeer(peerId)
    }

    // Update video tile for remote peer
    room.onPeerStream = (
      remoteStream: MediaStream,
      peerId: string,
      metadata?: any,
    ) => {
      const kind: TileKind = metadata?.kind === "screen" ? "screen" : "camera"
      addTile(peerId, remoteStream, kind, true)
    }

    // Add local camera tile (always visible in meeting)
    addTile(selfId, stream, "camera", true)
    setIsCameraOn(hasVideo)
    setIsMicOn(hasAudio)
    setRoomInput(roomId)
    setJoinedRoomId(roomId)
    setIsJoining(false)
    window.history.replaceState({}, "", `?room=${roomId}`)
  }

  const leaveRoom = async () => {
    await roomRef.current?.leave();
    window.location.href = window.location.href.split('?')[0];
  }

  const startNewMeeting = () => joinMeeting(makeRoomId())

  /* ── mic toggle ── */

  const toggleMic = async () => {
    const stream = localCameraStreamRef.current
    const audioTracks = stream?.getAudioTracks() ?? []
    const liveAudioTracks = audioTracks.filter(track => track.readyState === "live")

    if (isMicOn) {
      // Mute
      liveAudioTracks.forEach(t => (t.enabled = false))
      setIsMicOn(false)
    } else if (liveAudioTracks.length > 0) {
      // Unmute existing tracks
      liveAudioTracks.forEach(t => (t.enabled = true))
      setIsMicOn(true)
    } else {
      await requestDevice("mic")
    }
  }

  /* ── camera toggle ── */

  const toggleCamera = async () => {
    if (isScreenSharing) return
    const stream = localCameraStreamRef.current
    const videoTracks = stream?.getVideoTracks() ?? []
    const liveVideoTracks = videoTracks.filter(track => track.readyState === "live")

    if (isCameraOn) {
      // Turn OFF: disable tracks
      liveVideoTracks.forEach(t => (t.enabled = false))
      setIsCameraOn(false)
      sendCamStateRef.current?.({ isOn: false })
    } else if (liveVideoTracks.length > 0) {
      // Turn ON: re-enable existing tracks
      liveVideoTracks.forEach(t => (t.enabled = true))
      const videoTrack = liveVideoTracks[0]
      currentVideoTrackRef.current = videoTrack ?? null
      setIsCameraOn(!!videoTrack)
      sendCamStateRef.current?.({ isOn: !!videoTrack })
    } else {
      await requestDevice("camera")
    }
  }

  /* ── screen share ── */

  const stopScreenShare = () => {
    const screenVideoTrack = localScreenStreamRef.current?.getVideoTracks()[0]
    const camVideoTrack = localCameraStreamRef.current?.getVideoTracks()[0]

    // Restore the camera track in peer connections via replaceTrack
    if (screenVideoTrack && camVideoTrack) {
      roomRef.current?.replaceTrack(screenVideoTrack, camVideoTrack)
    } else if (localScreenStreamRef.current) {
      // No camera track to restore — remove the screen stream entirely
      try { roomRef.current?.removeStream(localScreenStreamRef.current) } catch { }
    }

    // Stop screen tracks
    localScreenStreamRef.current?.getTracks().forEach(t => t.stop())
    localScreenStreamRef.current = null
    setIsScreenSharing(false)

    // Restore camera state
    const restoreCamera = cameraWasOnRef.current && !!camVideoTrack
    if (restoreCamera) {
      camVideoTrack!.enabled = true
      currentVideoTrackRef.current = camVideoTrack!
    }
    setIsCameraOn(restoreCamera)
    sendCamStateRef.current?.({ isOn: restoreCamera })

    // ALWAYS restore local tile to the camera stream (shows "video off" if camera is off)
    if (localCameraStreamRef.current) {
      addTile(selfId, localCameraStreamRef.current, "camera")
    }
  }

  // Keep ref current so the browser "ended" listener always calls latest version
  screenShareCleanupRef.current = stopScreenShare

  const startScreenShare = async () => {
    try {
      const screen = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      })
      localScreenStreamRef.current = screen
      cameraWasOnRef.current = isCameraOn

      const camVideoTrack = currentVideoTrackRef.current
      const screenVideoTrack = screen.getVideoTracks()[0]

      if (camVideoTrack && screenVideoTrack) {
        // Use replaceTrack for seamless switching (no renegotiation)
        camVideoTrack.enabled = false
        roomRef.current?.replaceTrack(camVideoTrack, screenVideoTrack)
      } else if (screenVideoTrack) {
        // No camera track — add screen as a new stream
        roomRef.current?.addStream(screen, { metadata: { kind: "screen" } })
      }

      currentVideoTrackRef.current = screenVideoTrack
      setIsCameraOn(false)
      setIsScreenSharing(true)
      sendCamStateRef.current?.({ isOn: true }) // tell peers video is active (it's the screen now)

      // Update local tile to show screen content
      addTile(selfId, screen, "camera")

      // Handle browser-initiated stop (user clicks "Stop sharing" in browser)
      screenVideoTrack?.addEventListener("ended", () => screenShareCleanupRef.current())
    } catch {
      // User cancelled the picker — no action needed
    }
  }

  const toggleScreenShare = () => {
    if (isScreenSharing) stopScreenShare()
    else startScreenShare()
  }

  /* ── copy invite link ── */

  const copyRoomLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  /* ── copy invite link ── */

  // Auto-join from URL ?room=…
  useEffect(() => {
    const r = new URLSearchParams(window.location.search)
      .get("room")
      ?.trim()
    if (r && !autoJoinHandledRef.current) {
      autoJoinHandledRef.current = true
      setRoomInput(r)
      joinMeeting(r)
    }
  }, [])

  // Clean up streams & room on unmount
  useEffect(
    () => () => {
      try { roomRef.current?.leave() } catch { }
      localCameraStreamRef.current?.getTracks().forEach(t => t.stop())
      localScreenStreamRef.current?.getTracks().forEach(t => t.stop())
    },
    [],
  )

  /* ── grid tiles ── */

  const remoteTiles = tiles.filter(t => t.peerId !== selfId)
  const visibleTiles = remoteTiles.length > 0 ? remoteTiles : tiles
  const localCameraTile = tiles.find(t => t.peerId === selfId)

  const gridCols =
    visibleTiles.length <= 1
      ? "grid-cols-1 max-w-7xl"
      : visibleTiles.length === 2
        ? "grid-cols-1 sm:grid-cols-2"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"

  /* ══════════════════════════════════════════════════════════════════════════
     Render
     ══════════════════════════════════════════════════════════════════════════ */

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TooltipProvider>
        <main className="min-h-dvh bg-background text-foreground transition-colors duration-300">
          {!inMeeting ? (
            /* ───────────── Landing Page ───────────── */
            <div className="flex min-h-dvh flex-col items-center justify-center px-4">
              <div className="flex w-full max-w-md flex-col items-center gap-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
                {/* Header */}
                <div className="flex w-full items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight">
                      P2P Meet
                    </h1>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Secure, peer-to-peer meetings with end-to-end
                      encryption. No central servers, no tracking — just direct
                      connections.
                    </p>
                  </div>
                  <ModeToggle />
                </div>

                <Separator />

                {/* Actions */}
                <div className="flex w-full flex-col gap-3">
                  <Button
                    className="w-full"
                    size="lg"
                    onClick={startNewMeeting}
                    disabled={isJoining}
                  >
                    Start New Meeting
                  </Button>

                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Separator className="flex-1" />
                    <span>or join existing</span>
                    <Separator className="flex-1" />
                  </div>

                  <div className="flex gap-2">
                    <Input
                      value={roomInput}
                      onChange={e => setRoomInput(e.target.value.toUpperCase())}
                      placeholder="Enter Room ID"
                      className="flex-1"
                      onKeyDown={e => {
                        if (e.key === "Enter" && roomInput.trim())
                          joinMeeting(roomInput)
                      }}
                    />
                    <Button
                      variant="outline"
                      onClick={() => joinMeeting(roomInput)}
                      disabled={isJoining || !roomInput.trim()}
                    >
                      Join
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* ───────────── Meeting View ───────────── */
            <div className="flex min-h-dvh flex-col animate-in fade-in-0 duration-300">
              {/* Header */}
              <header className="flex items-center justify-between px-4 py-3 sm:px-6">
                {/* Left: title */}
                <div className="flex flex-1 items-center justify-start min-w-0">
                  <div className="truncate">
                    <h1 className="text-lg font-semibold tracking-tight">
                      P2P Meet
                    </h1>
                    <p className="hidden text-xs text-muted-foreground truncate sm:block">
                      Secure peer-to-peer · end-to-end encrypted
                    </p>
                  </div>
                </div>

                {/* Center: room ID + copy link */}
                <div className="flex shrink-0 items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-1.5 sm:px-3 py-1 sm:py-1.5">
                    <span className="font-mono text-sm font-medium tracking-widest ">
                      {joinedRoomId}
                    </span>
                    <Separator orientation="vertical" />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 gap-1.5 rounded-full px-1.5 text-xs"
                      onClick={copyRoomLink}
                    >
                      {copied ? (<Check className="size-3.5 text-emerald-500" />) : (<Copy className="size-3.5" />)}
                      {copied ? "Copied!" : "Copy Link"}
                    </Button>
                  </div>
                </div>

                {/* Right: theme toggle */}
                <div className="flex flex-1 items-center justify-end min-w-0">
                  <ModeToggle />
                </div>
              </header>

              <Separator />

              {/* Video grid */}
              <div className="flex flex-1 items-center justify-center px-3 pb-24 pt-3 sm:px-6 sm:pt-6">
                <div className={cn("mx-auto grid w-full gap-3", gridCols)}                >
                  {visibleTiles.map(tile => (
                    <VideoTile
                      key={tile.id}
                      tile={tile}
                      isLocal={tile.peerId === selfId}
                      localVideoActive={isCameraOn || isScreenSharing}
                    />
                  ))}
                </div>
              </div>

              {/* Custom Mini Self-View (App-level PiP) */}
              {remoteTiles.length > 0 && localCameraTile && (
                <div className="fixed bottom-24 sm:bottom-6 right-3 sm:right-6 z-40 w-48 sm:w-64 animate-in slide-in-from-bottom-8 fade-in-0 duration-500 bg-transparent">
                  <VideoTile
                    tile={localCameraTile}
                    isLocal={true}
                    localVideoActive={isCameraOn || isScreenSharing}
                  />
                </div>
              )}

              {/* ── Control bar (floating glassmorphic pill) ── */}
              <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-center px-4 pb-5">
                <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-border/50 bg-background/80 px-3 py-2.5 shadow-2xl backdrop-blur-xl">
                  {/* Mic */}
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Button
                          variant={isMicOn ? "ghost" : "destructive"}
                          size="icon"
                          onClick={() => toggleMic()}
                        />
                      }
                    >
                      {isMicOn ? (<Mic className="size-4.5" />) : (<MicOff className="size-4.5" />)}
                    </TooltipTrigger>
                    <TooltipContent>
                      {isMicOn ? "Mute" : "Unmute"}
                    </TooltipContent>
                  </Tooltip>

                  {/* Camera */}
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Button
                          size="icon"
                          variant={isCameraOn ? "ghost" : "destructive"}
                          className={isScreenSharing ? "opacity-50" : ""}
                          onClick={e => { if (isScreenSharing) { e.preventDefault(); return; } return toggleCamera() }}
                        />
                      }
                    >
                      {isCameraOn ? (<Camera className="size-4.5" />) : (<CameraOff className="size-4.5" />)}
                    </TooltipTrigger>
                    <TooltipContent>
                      {isScreenSharing
                        ? "Camera disabled while sharing screen"
                        : isCameraOn
                          ? "Turn off camera"
                          : "Turn on camera"}
                    </TooltipContent>
                  </Tooltip>

                  {/* Camera Effects */}
                  <DropdownMenu>
                    <Tooltip>
                      <DropdownMenuTrigger
                        render={
                          <TooltipTrigger
                            render={
                              <Button
                                size="icon"
                                variant={isCameraOn ? "ghost" : "destructive"}
                                className={!isCameraOn ? "opacity-50" : ""}
                                onClick={e => { if (!isCameraOn) e.preventDefault() }}
                                onPointerDown={e => { if (!isCameraOn) e.preventDefault() }}
                              />
                            }
                          >
                            {isCameraOn ? (<Image className="size-4.5" />) : (<ImageOff className="size-4.5" />)}
                          </TooltipTrigger>
                        }
                      />
                      <TooltipContent>
                        {isScreenSharing
                          ? "Camera effects disabled while sharing screen"
                          : isCameraOn
                            ? "Camera effects"
                            : "Camera effects disabled while camera is off"}
                      </TooltipContent>
                    </Tooltip>
                    <DropdownMenuContent>
                      <DropdownMenuRadioGroup value={cameraEffect} onValueChange={setCameraEffect}>
                        <DropdownMenuGroup>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger><Grip />Blur</DropdownMenuSubTrigger>
                            <DropdownMenuPortal>
                              <DropdownMenuSubContent>
                                <DropdownMenuRadioItem value="blurLow" onClick={() => cameraEffectsRef.current?.setBackground({ blur: { strength: 'low' } })}>
                                  <Ellipsis />Low
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="blurMedium" onClick={() => cameraEffectsRef.current?.setBackground({ blur: { strength: 'medium' } })}>
                                  <GripHorizontal />Medium
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="blurHigh" onClick={() => cameraEffectsRef.current?.setBackground({ blur: { strength: 'high' } })}>
                                  <Grip />High
                                </DropdownMenuRadioItem>
                              </DropdownMenuSubContent>
                            </DropdownMenuPortal>
                          </DropdownMenuSub>
                          <DropdownMenuRadioItem value="image" onClick={() => cameraEffectsImageInputRef.current?.click()}>
                            <input type="file" accept="image/*" ref={cameraEffectsImageInputRef} onChange={handleCameraEffectsFileSelection} style={{ display: 'none' }} />
                            <Image />
                            Image
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="video" onClick={() => cameraEffectsVideoInputRef.current?.click()}>
                            <input type="file" accept="video/*" ref={cameraEffectsVideoInputRef} onChange={handleCameraEffectsFileSelection} style={{ display: 'none' }} />
                            <SquarePlay />
                            Video
                          </DropdownMenuRadioItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuRadioItem value="none" onClick={() => cameraEffectsRef.current?.setBackground('none')}>
                            <Ban />
                            None
                          </DropdownMenuRadioItem>
                        </DropdownMenuGroup>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Screen share */}
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Button
                          variant={isScreenSharing ? "secondary" : "ghost"}
                          size="icon"
                          onClick={toggleScreenShare}
                        />
                      }
                    >
                      {isScreenSharing ? (<MonitorX className="size-4.5" />) : (<MonitorUp className="size-4.5" />)}
                    </TooltipTrigger>
                    <TooltipContent>
                      {isScreenSharing
                        ? "Stop sharing"
                        : "Share screen"}
                    </TooltipContent>
                  </Tooltip>

                  <Separator orientation="vertical" />

                  {/* Leave */}
                  <Tooltip>
                    <TooltipTrigger
                      render={
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={leaveRoom}
                        />
                      }
                    >
                      <LogOut className="size-4.5" />
                    </TooltipTrigger>
                    <TooltipContent>Leave meeting</TooltipContent>
                  </Tooltip>
                </div>
              </div>
            </div>
          )}
        </main>

        <Dialog
          open={mediaIssue !== null}
          onOpenChange={open => { if (!open) setMediaIssue(null) }}
        >
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                {mediaIssue?.title}
              </DialogTitle>
              <DialogDescription className="text-base pt-2">
                {mediaIssue?.message}
              </DialogDescription>
            </DialogHeader>
            <div className="flex justify-end pt-4">
              <Button onClick={() => setMediaIssue(null)}>
                Got it
              </Button>
            </div>
          </DialogContent>
        </Dialog>

      </TooltipProvider>
    </ThemeProvider >
  )
}
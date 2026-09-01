import { useRef, useState } from 'react'
import { asset } from '../lib/assets.js'

const formatTime = (seconds) =>
  `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`

export default function MusicPlayer() {
  const audio = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [time, setTime] = useState('0:00')

  const togglePlayback = () => {
    const player = audio.current
    if (player.paused) player.play()
    else player.pause()
  }

  return (
    <div className={`player ${playing ? '' : 'paused'}`}>
      <audio
        ref={audio}
        src={asset('Moonstruck.mp3')}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onTimeUpdate={(event) => {
          const player = event.currentTarget
          setProgress(player.duration ? (player.currentTime / player.duration) * 100 : 0)
          setTime(formatTime(player.currentTime))
        }}
      />
      <div className="music-head">
        <div><span className="music-kicker">NOW PLAYING</span><strong>Moonstruck</strong><small>ENHYPEN</small></div>
        <span className="music-eq"><i /><i /><i /><i /></span>
      </div>
      <div
        className="track"
        onClick={(event) => {
          const bounds = event.currentTarget.getBoundingClientRect()
          if (audio.current.duration) audio.current.currentTime = ((event.clientX - bounds.left) / bounds.width) * audio.current.duration
        }}
      >
        <div className="track-fill" style={{ width: `${progress}%` }} />
        <div className="track-dot" style={{ left: `${progress}%` }} />
      </div>
      <div className="controls premium-controls">
        <button className="mini-control" aria-label="Reiniciar canción" onClick={() => { audio.current.currentTime = 0; audio.current.play() }}>↶</button>
        <button className="play-btn" aria-label={playing ? 'Pausar canción' : 'Reproducir canción'} onClick={togglePlayback}>
          {playing ? 'Ⅱ' : <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7-11-7Z" /></svg>}
        </button>
        <button className="mini-control" aria-label={muted ? 'Activar sonido' : 'Silenciar'} onClick={() => { audio.current.muted = !muted; setMuted(!muted) }}>{muted ? '🔇' : '🔊'}</button>
      </div>
      <div className="music-meta"><span>{time}</span><span>Audio integrado · inicia desde 0:00</span></div>
    </div>
  )
}

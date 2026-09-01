import { useState } from 'react'
import { asset } from '../lib/assets.js'
import './Cover.css'

export default function Cover({ open, opening }) {
  const [revealed, setRevealed] = useState(false)

  const handleMirror = () => {
    if (opening || revealed) return
    setRevealed(true)
    window.setTimeout(open, 1650)
  }

  return (
    <div id="cover" className={`mirror-cover${revealed ? ' mirror-is-revealed' : ''}${opening ? ' cover-is-opening' : ''}`}>
      <span className="mirror-sparkle mirror-sparkle-one" aria-hidden="true">âœ¦</span>
      <span className="mirror-sparkle mirror-sparkle-two" aria-hidden="true">âœ§</span>
      <span className="mirror-sparkle mirror-sparkle-three" aria-hidden="true">Â·</span>

      <p className="mirror-kicker">UN DÍA Â· UNA HISTORIA Â· UN RECUERDO</p>

      <button
        className="magic-mirror"
        type="button"
        aria-label="Reflejar la magia y abrir la invitaciÃ³n de Danna"
        aria-expanded={revealed}
        disabled={opening || revealed}
        onClick={handleMirror}
      >
        <span className="mirror-aura" aria-hidden="true" />
        <img className="mirror-art" src={asset('magic-mirror.png')} alt="" width="658" height="1514" decoding="async" fetchPriority="high" />
        <span className="mirror-glass" aria-hidden="true">
          <span className="mirror-haze" />
          <span className="mirror-reflection" />
          <span className="mirror-invitation">
            <strong>Danna</strong>
            <small>Mis quince aÃ±os</small>
            <span className="mirror-rule" />
            <time dateTime="2026-12-27">27 Â· DICIEMBRE Â· 2026</time>
          </span>
        </span>
      </button>

      <button className="mirror-action" type="button" disabled={opening || revealed} onClick={handleMirror}>
        <span>{revealed ? 'ABRIENDO LA INVITACIÃ“N' : 'TOCÃ PARA REFLEJAR LA MAGIA'}</span>
        <i aria-hidden="true" />
      </button>

      <p className="mirror-hint" aria-live="polite">
        {revealed ? 'La magia ya estÃ¡ por comenzar âœ¦' : 'Un dÃ­a para recordar âœ¦'}
      </p>
    </div>
  )
}

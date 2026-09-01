import { useState } from 'react'

import { asset, outfitImages as imgs } from '../lib/assets.js'

export default function Dress() {
  let [g, setG] = useState()
  let list = g === 'w' ? imgs(16) : [...imgs(26), '/assets/image-32.webp']

  return (
    <div className="card">
      <img className="section-sprinkle dress-sprinkle-a" src={asset('decor-bow-disco.webp')} alt="" loading="lazy" decoding="async" />
      <img className="section-sprinkle dress-sprinkle-b" src={asset('decor-cherries.webp')} alt="" loading="lazy" decoding="async" />
      <div className="icon silver-icon">✦</div>

      <h4>Dress code</h4>

      <p className="addr">TOTAL WHITE 🤍</p>

      <p className="sub">
        El código de vestimenta es <strong>solo blanco</strong>.
      </p>

      <div className="swatches">
        <span
          className="swatch"
          style={{ background: '#ffffff', border: '1px solid #ccc' }}
        />
      </div>

      <p className="sub outfit-only">
        Todo el outfit debe ser blanco.
      </p>

      <p className="sub outfit-only">
        También hay pileta, así que pueden llevar traje de baño,
        <strong> pero también debe ser blanco.</strong>
      </p>

      <div className="outfit-toggle">
        <button
          className={`outfit-btn ${g === 'w' ? 'active' : ''}`}
          onClick={() => setG(g === 'w' ? null : 'w')}
        >
          Ideas para ellas
        </button>

        <button
          className={`outfit-btn ${g === 'm' ? 'active' : ''}`}
          onClick={() => setG(g === 'm' ? null : 'm')}
        >
          Ideas para ellos
        </button>
      </div>

      {g && (
        <div className="outfit-gallery open">
          {list.map((x) => (
            <img
              src={x}
              key={x}
              loading="lazy"
              decoding="async"
              alt={
                g === 'w'
                  ? 'Ideas de outfit blanco para ellas'
                  : 'Ideas de outfit blanco para ellos'
              }
            />
          ))}
        </div>
      )}
    </div>
  )
}

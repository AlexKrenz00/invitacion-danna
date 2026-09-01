import { useEffect, useState } from 'react'
import { asset } from '../lib/assets.js'

const targetDate = new Date('2026-12-27T00:00:00')

function calculateTime() {
  const difference = Math.max(0, targetDate - new Date())
  return [Math.floor(difference / 864e5), Math.floor(difference / 36e5) % 24, Math.floor(difference / 6e4) % 60, Math.floor(difference / 1e3) % 60].map((value) => String(value).padStart(2, '0'))
}

export default function Countdown() {
  const [values, setValues] = useState(calculateTime)
  useEffect(() => { const timer = window.setInterval(() => setValues(calculateTime()), 1000); return () => window.clearInterval(timer) }, [])
  return <section className="countdown"><img className="section-sprinkle countdown-sprinkle-a" src={asset('decor-bow-heart.webp')} alt="" loading="lazy" decoding="async" /><img className="section-sprinkle countdown-sprinkle-b" src={asset('decor-lily-disco.webp')} alt="" loading="lazy" decoding="async" /><h3>Faltan</h3><div className="cd-grid">{['Días', 'Horas', 'Minutos', 'Segundos'].map((label, index) => <div className="cd-item" key={label}><div className="n">{values[index]}</div><div className="l">{label}</div></div>)}</div></section>
}

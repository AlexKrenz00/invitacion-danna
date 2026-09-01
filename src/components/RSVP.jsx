import { useState } from 'react'
import { asset } from '../lib/assets.js'

const formAction = 'https://script.google.com/macros/s/AKfycbz8mvD5Wwpvz5Mad73hcc5J2vAucQr7XfC1s70TDW_RDtOHZCWu5uX7zqxHB-zn1h8_/exec'

export default function RSVP() {
  const [name, setName] = useState('')
  const [answer, setAnswer] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState('idle')

  const send = async (event) => {
    event.preventDefault()
    if (!name.trim() || !answer) {
      setStatus('incomplete')
      return
    }

    setStatus('sending')
    const data = new URLSearchParams({
      name: name.trim(),
      attendance: answer,
      message: message.trim(),
      website: '',
    })

    try {
      await fetch(formAction, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data,
      })
      setName('')
      setAnswer('')
      setMessage('')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="rsvp">
      <img className="section-sprinkle rsvp-sprinkle-a" src={asset('decor-lily-disco.webp')} alt="" loading="lazy" decoding="async" />
      <img className="section-sprinkle rsvp-sprinkle-b" src={asset('decor-bow-heart.webp')} alt="" loading="lazy" decoding="async" />
      <div className="seal2">✉</div>
      <h3>Confirmación de asistencia</h3>
      <p>¡Espero que seas parte de esta gran celebración!</p>
      <form className="rsvp-form" onSubmit={send}>
        <input value={name} onChange={(event) => setName(event.target.value)} aria-label="Nombre y apellido" placeholder="Tu nombre y apellido" autoComplete="name" maxLength={120} required />
        <select value={answer} onChange={(event) => setAnswer(event.target.value)} aria-label="Confirmación de asistencia" required>
          <option value="">¿Vas a poder venir?</option>
          <option value="Sí">Sí, ahí estaré</option>
          <option value="No">No voy a poder ir</option>
        </select>
        <textarea value={message} onChange={(event) => setMessage(event.target.value)} aria-label="Mensaje adicional" placeholder="Mensaje adicional (opcional)" rows={3} maxLength={500} />
        <button type="submit" className="btn whatsapp confirm-button" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando…' : 'Enviar confirmación'}</button>
      </form>
      {status === 'success' && <p className="rsvp-feedback success" role="status">¡Gracias! Tu respuesta quedó guardada.</p>}
      {status === 'incomplete' && <p className="rsvp-feedback error" role="alert">Completá tu nombre y si vas a poder venir.</p>}
      {status === 'error' && <p className="rsvp-feedback error" role="alert">No se pudo enviar. Revisá tu conexión e intentá nuevamente.</p>}
      <p className="rsvp-help">Tu respuesta se guarda de forma privada en la lista de invitados.</p>
      <p className="rsvp-note">Danna</p>
    </section>
  )
}

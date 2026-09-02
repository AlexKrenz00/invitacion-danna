import { asset } from '../lib/assets.js'
import MusicPlayer from './MusicPlayer.jsx'
import Countdown from './Countdown.jsx'
import RSVP from './RSVP.jsx'
import DressCode from './DressCode.jsx'

export default function Invitation() {
  return <div id="invite">
    <div className="ambient-glow glow-a" /><div className="ambient-glow glow-b" />
    <section className="hero">
      <img className="invite-sticker-frame invite-sticker-hero" src={asset('pink-sticker-frame.webp')} alt="" width="700" height="1244" loading="lazy" decoding="async" />
      <p className="neon">Danna Cortes</p><p className="years">15 <span>años</span></p><MusicPlayer />
      <div className="portrait"><img src={asset('danna-portrait.webp')} alt="Danna" decoding="async" fetchPriority="high" /></div>
      <div className="floral-divider" aria-hidden="true">❀ · ✦ · ❀</div>
      <p className="message">Quiero compartir con vos un dia lleno de emoción,<br />alegría y recuerdos inolvidables. Sos parte de mi historia<br />y me haría muy feliz que estuvieras junto a mí.</p>
      <div className="memory-photo"><img src={asset('danna-memory.webp')} alt="Un recuerdo de Danna" loading="lazy" decoding="async" /></div>
      <div className="date-row"><div className="line" /><div className="day">Domingo</div><div className="line" /><div className="big"><div className="num">27</div><div className="month">Diciembre</div></div><div className="line" /><div className="day">2026</div><div className="line" /></div>
    <p className="event-time">12 HS</p>
    </section>
    <Countdown />
    <DressCode />

    <section className="cards">
      <img className="section-sprinkle cards-sprinkle-a" src={asset('decor-lily-disco.webp')} alt="" loading="lazy" decoding="async" />
      <img className="section-sprinkle cards-sprinkle-b" src={asset('decor-cherries.webp')} alt="" loading="lazy" decoding="async" />

      <div className="card venue-card">
        <img className="section-sprinkle venue-sprinkle" src={asset('decor-bow-heart.webp')} alt="" loading="lazy" decoding="async" />
        <div className="icon rose-icon">⌖</div>

        <h4>Quinta Lucía</h4>

        <p className="sub">
          Celebramos los quince de Danna
        </p>

        <a
          className="btn location-button"
          href="https://maps.app.goo.gl/AqDfs8WjFG61sJvX7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver ubicación
        </a>
      </div>

      <div className="card">
        <img className="section-sprinkle gift-sprinkle" src={asset('decor-bow-disco.webp')} alt="" loading="lazy" decoding="async" />
        <div className="icon rose-icon"></div>

        <h4>¿Un regalito?</h4>

        <p className="sub">
          Lo más importante es que vengas a celebrar conmigo.
          <br />
          Pero si querés hacerme un regalo y no tenés ideas,
          podés hacerlo por transferencia.
        </p>

        <p className="sub">
          <strong>Alias:</strong>
        </p>

        <p className="addr gift-alias">
          ddenhypen30
        </p>
      </div>

    </section>

    <RSVP />

    <footer>
      Hecho por IG: @quimey_f_b · Contacto: 1151399549
    </footer>
  </div>
}

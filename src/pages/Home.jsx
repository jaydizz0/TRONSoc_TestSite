import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const menuCards = [
  { num: '01 / HOME',      label: 'Home',      desc: 'The mission, the people, the why.',       cta: 'Enter',          to: '/' },
  { num: '02 / EVENTS',    label: 'Events',    desc: 'Workshops, builds & the full archive.',   cta: 'View calendar',  to: '/events' },
  { num: '03 / EXEC TEAM', label: 'Exec Team', desc: 'Meet the people running the show.',       cta: 'Get in touch',   to: '/exec' },
  { num: '04 / SHOP',      label: 'Shop',      desc: 'Merch, gear & circuit-orange threads.',   cta: 'Browse store',   to: '/shop' },
]

function useReveal(delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.transitionDelay = `${delay}s`
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('in') },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay])
  return ref
}

function Reveal({ children, delay = 0 }) {
  const ref = useReveal(delay)
  return <div ref={ref} className="reveal">{children}</div>
}

export default function Home() {
  return (
    <>
      {/* ── RULE 3: 100vh orange hero ── */}
      <header className="hero">
        <div className="hero__content">
          <img src={logo} alt="TRONSoc Logo" className="hero__logo" />
          <h1 className="hero__title">TRONSoc</h1>
          <p className="hero__sub">Carleton Mechatronics Society</p>
        </div>
        <a href="#about" className="scroll-cue" aria-label="Scroll down">
          <span>Scroll</span>
          <span className="chev" />
        </a>
      </header>

      {/* Orange → black fade */}
      <div className="fade-bridge" />

      {/* ── ABOUT ── */}
      <section className="about" id="about">
        <div className="container">
          <div className="about__grid">
            <Reveal>
              <span className="eyebrow">Who We Are</span>
              <h2 className="section-title">
                TRON<span className="dim">Soc</span>
              </h2>
              <p className="about__mono">// MECHANICAL × ELECTRICAL × SOFTWARE</p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="about__body">
                <p>
                  TRONSoc is Carleton University's newest engineering community — built for the students who live at the intersection of{' '}
                  <strong>mechanics, electronics, and code</strong>.
                </p>
                <p>
                  Mechatronics is the discipline of making things{' '}
                  <strong>move, sense, and think</strong>. We're here to give that discipline a home: hands-on builds, workshops, competitions, and a network of people who'd rather prototype than read about it.
                </p>
                <p>
                  Whether you're soldering your first board or tuning a control loop at 2 a.m., there's a bench here with your name on it.
                </p>
                <div className="stats">
                  {[['01', 'Founding Year'], ['3', 'Disciplines United'], ['∞', 'Things To Build']].map(([num, lbl]) => (
                    <div key={lbl}>
                      <div className="stats__num">{num}</div>
                      <div className="stats__lbl">{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* ── RULE 4: Menu grid with gap: 2rem ── */}
          <div className="menu-grid">
            {menuCards.map(({ num, label, desc, cta, to }, i) => (
              <Reveal key={to} delay={i * 0.08}>
                <Link to={to} className="menu-card">
                  <span className="menu-card__num">{num}</span>
                  <div className="menu-card__body">
                    <h3>{label}</h3>
                    <p>{desc}</p>
                    <span className="menu-card__cta">{cta} →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

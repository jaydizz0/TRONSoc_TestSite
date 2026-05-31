import { useState } from 'react'

const pastEvents = {
  '2025–2026': [
    {
      title: 'Founding Year — Launch Term',
      meta: 'Fall 2025 · Carleton University',
      items: [
        { name: 'Inaugural Info Night', desc: 'Introduced TRONSoc to the engineering faculty and signed up our founding members.' },
        { name: 'Intro to Soldering Workshop', desc: 'Hands-on session building a simple blinky-LED badge from scratch.' },
        { name: 'Arduino & Sensors Crash Course', desc: 'From "what\'s a microcontroller" to a working ultrasonic distance sensor.' },
        { name: 'End-of-Term Build Social', desc: 'Demo night, pizza, and planning for the winter robotics challenge.' },
      ],
    },
    {
      title: 'Winter Build Season',
      meta: 'Winter 2026 · Mechatronics Lab',
      items: [
        { name: 'Line-Follower Robot Sprint', desc: 'Teams designed, built, and raced autonomous bots over two weeks.' },
        { name: 'PCB Design 101', desc: 'KiCad fundamentals and submitting a first board for fabrication.' },
        { name: 'Industry Coffee Chat', desc: 'Casual Q&A with co-op alumni working in robotics and automation.' },
      ],
    },
  ],
  '2026–2027': [
    {
      title: 'Coming Soon',
      meta: 'Next chapter loading…',
      items: [
        { name: 'TBD', desc: 'Bigger builds, a hackathon team, and our first inter-society competition. Watch this space.' },
      ],
    },
  ],
}

function AccItem({ title, meta, items, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen || false)
  return (
    <div className={`acc-item ${open ? 'open' : ''}`}>
      <button className="acc-head" onClick={() => setOpen(!open)}>
        <span>
          <span className="acc-head__title">{title}</span>
          <span className="acc-head__meta">{meta}</span>
        </span>
        <span className="acc-head__plus">+</span>
      </button>
      <div className="acc-body" style={{ maxHeight: open ? '600px' : '0' }}>
        <div className="acc-body__inner">
          <ul>
            {items.map(({ name, desc }) => (
              <li key={name}>
                <span className="acc-dot" />
                <span><strong>{name}</strong> — {desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Events() {
  return (
    <>
      {/* ── RULE 5: padded page header ── */}
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">What's Happening</span>
          <h1>Events</h1>
          <p>From soldering nights to full robot builds — here's what's coming up, and everything we've shipped so far.</p>
        </div>
      </div>

      {/* Calendar */}
      <section>
        <div className="container">
          <span className="eyebrow">Upcoming</span>
          <h2 className="section-title">The <span className="dim">Calendar</span></h2>
          <div className="cal-wrap">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=en.canadian%23holiday%40group.v.calendar.google.com&ctz=America%2FToronto&mode=AGENDA"
              title="TRONSoc events calendar"
              loading="lazy"
            />
          </div>
          <p className="cal-note">// Replace the iframe src with the official TRONSoc Google Calendar embed link once it's live.</p>
        </div>
      </section>

      {/* Timeline archive */}
      <section>
        <div className="container container--flush-top">
          <span className="eyebrow">The Archive</span>
          <h2 className="section-title">Past <span className="dim">Events</span></h2>
          <div className="timeline">
            {Object.entries(pastEvents).map(([year, events], yi) => (
              <div key={year}>
                <div className="tl-year">
                  <div className="tl-year__node">{year.replace('–', '\n')}</div>
                </div>
                <div className="accordion-list">
                  {events.map((ev, i) => (
                    <AccItem key={ev.title} {...ev} defaultOpen={yi === 0 && i === 0} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

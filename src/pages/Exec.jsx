const team = [
  { initials: 'AB', name: 'Alex Bennett',   role: 'President',    bio: 'Fourth-year Mechatronics. Keeps the vision pointed forward and the lab stocked with solder.',                             email: 'president@tronsoc.ca' },
  { initials: 'JL', name: 'Jordan Lee',     role: 'VP Technical', bio: 'Lives in firmware and control loops. Runs the build nights and breaks things so you don\'t have to.',                  email: 'tech@tronsoc.ca' },
  { initials: 'SM', name: 'Sam Mehta',      role: 'VP Events',    bio: 'Turns ideas into actual scheduled events with rooms, food, and people who show up.',                                   email: 'events@tronsoc.ca' },
  { initials: 'RC', name: 'Riley Chen',     role: 'Treasurer',    bio: 'Guards the budget and somehow always finds room for one more sensor kit order.',                                       email: 'finance@tronsoc.ca' },
  { initials: 'TP', name: 'Taylor Park',    role: 'VP Marketing', bio: 'Owns the circuit-orange brand, the socials, and the reason you\'ve heard of us at all.',                              email: 'media@tronsoc.ca' },
  { initials: 'MO', name: 'Morgan Okafor',  role: 'VP Outreach',  bio: 'Connects TRONSoc with industry, alumni, and the other societies worth knowing.',                                      email: 'outreach@tronsoc.ca' },
]

export default function Exec() {
  return (
    <>
      {/* ── RULE 5: padded page header ── */}
      <div className="page-header">
        <div className="container">
          <span className="eyebrow">The People</span>
          <h1>Exec Team</h1>
          <p>The builders, organizers, and caffeine-powered engineers keeping TRONSoc running. Reach out — we don't bite.</p>
        </div>
      </div>

      <section>
        <div className="container">
          {/* ── RULE 4: exec grid with gap: 2rem ── */}
          <div className="exec-grid">
            {team.map(({ initials, name, role, bio, email }) => (
              <article className="exec-card" key={name}>
                <div className="exec-card__photo">{initials}</div>
                <h3>{name}</h3>
                <span className="exec-card__role">{role}</span>
                <p className="exec-card__bio">{bio}</p>
                <div className="exec-card__actions">
                  <a href={`mailto:${email}`} className="exec-link">Email</a>
                  <a href="#" className="exec-link">LinkedIn</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

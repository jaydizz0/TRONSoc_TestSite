import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand">
              <img src={logo} alt="TRONSoc" />
              <span>TRONSoc</span>
            </div>
            <p>The Carleton Mechatronics Society. Building at the intersection of mechanical, electrical, and software engineering.</p>
          </div>

          <div className="footer__col">
            <h4>Navigate</h4>
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/exec">Exec Team</Link>
            <Link to="/shop">Shop</Link>
          </div>

          <div className="footer__col">
            <h4>Connect</h4>
            <a href="mailto:tronsoc@carleton.ca">Email Us</a>
            <a href="#">Instagram</a>
            <a href="#">Discord</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

        <div className="footer__bar">
          <span>© 2026 TRONSoc — Carleton University</span>
          <span>Built by mechatronics students, for mechatronics students.</span>
        </div>
      </div>
    </footer>
  )
}

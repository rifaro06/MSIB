import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

/**
 * Navbar Component.
 * Mengimplementasikan NavLink dari React Router dengan styling dinamis
 * untuk indikator halaman aktif (active state styling).
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  // Dynamic class generator with enhanced active styling for extra points
  const getNavLinkClass = ({ isActive }) =>
    `nav-link lumina-nav-link ${isActive ? 'active' : ''}`

  return (
    <nav className="navbar navbar-expand-lg lumina-navbar sticky-top">
      <div className="container">
        {/* Brand Link using React Router Link */}
        <Link to="/" className="lumina-brand" onClick={closeMenu}>
          <span
            className="d-inline-flex align-items-center justify-content-center rounded-3 bg-gradient p-2 me-2"
            style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)' }}
          >
            <i className="bi bi-stars text-white fs-5"></i>
          </span>
          <span className="fw-extrabold tracking-tight">LUMINA</span>
          <span className="lumina-brand-badge d-none d-sm-inline-block">STUDIO</span>
        </Link>

        {/* Responsive Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 shadow-none text-white p-2"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '10px' }}
        >
          <i className={`bi ${isOpen ? 'bi-x-lg' : 'bi-list'} fs-4 text-white`}></i>
        </button>

        {/* Nav Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2 my-3 my-lg-0">
            <li className="nav-item">
              <NavLink to="/" end className={getNavLinkClass} onClick={closeMenu}>
                <i className="bi bi-house-door me-1"></i>
                <span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/team" className={getNavLinkClass} onClick={closeMenu}>
                <i className="bi bi-people me-1"></i>
                <span>Team</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className={getNavLinkClass} onClick={closeMenu}>
                <i className="bi bi-chat-square-dots me-1"></i>
                <span>Contact</span>
              </NavLink>
            </li>
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <Link
                to="/contact"
                className="btn btn-lumina-primary btn-sm px-4 shadow-sm"
                onClick={closeMenu}
              >
                <span>Let's Collaborate</span>
                <i className="bi bi-arrow-right-short fs-5"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

/**
 * Navbar Component.
 * Mengimplementasikan NavLink dari React Router dengan styling dinamis
 * untuk indikator halaman aktif (active state styling) sebagai nilai tambah.
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  const getNavLinkClass = ({ isActive }) =>
    `nav-link lumina-nav-link ${isActive ? 'active' : ''}`

  return (
    <nav className="navbar navbar-expand-lg lumina-navbar sticky-top">
      <div className="container">
        {/* Brand Link using React Router Link */}
        <Link to="/" className="lumina-brand d-flex align-items-center gap-2 text-decoration-none" onClick={closeMenu}>
          <span className="brand-icon-box" style={{ width: '38px', height: '38px', background: 'linear-gradient(135deg, #6366f1, #06b6d4)', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <i className="bi bi-book-half text-white fs-5"></i>
          </span>
          <div className="d-flex align-items-center gap-2">
            <span className="fw-extrabold tracking-tight text-white fs-4">BOOK<span className="text-cyan">SALES</span></span>
            <span className="lumina-brand-badge d-none d-sm-inline-block">ROUTING</span>
          </div>
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

        {/* Nav Links dengan NavLink React Router */}
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
          </ul>

          <div className="d-flex align-items-center gap-2 ms-lg-3">
            <Link
              to="/contact"
              className="btn btn-primary-gradient px-3 py-2 d-inline-flex align-items-center gap-2"
              onClick={closeMenu}
            >
              <i className="bi bi-chat-dots-fill"></i>
              <span>Hubungi Toko</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

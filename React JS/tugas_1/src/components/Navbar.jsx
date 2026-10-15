import { useState } from 'react'

function Navbar({ currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = (page) => {
    onNavigate(page)
    setIsOpen(false)
  }

  return (
    <nav className="navbar navbar-expand-lg lumina-navbar sticky-top">
      <div className="container">
        <a
          className="lumina-brand"
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick('home')
          }}
        >
          <span className="d-inline-flex align-items-center justify-content-center rounded-3 bg-gradient p-2 me-2" style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)' }}>
            <i className="bi bi-stars text-white fs-5"></i>
          </span>
          <span className="fw-extrabold tracking-tight">LUMINA</span>
          <span className="lumina-brand-badge d-none d-sm-inline-block">STUDIO</span>
        </a>

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

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2 my-3 my-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link lumina-nav-link ${currentPage === 'home' ? 'active' : ''}`}
                href="#home"
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick('home')
                }}
              >
                <i className="bi bi-house-door me-1"></i> Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link lumina-nav-link ${currentPage === 'team' ? 'active' : ''}`}
                href="#team"
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick('team')
                }}
              >
                <i className="bi bi-people me-1"></i> Team
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link lumina-nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick('contact')
                }}
              >
                <i className="bi bi-chat-square-dots me-1"></i> Contact
              </a>
            </li>
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <a
                className="btn btn-lumina-primary btn-sm px-4 shadow-sm"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick('contact')
                }}
              >
                <span>Let's Collaborate</span>
                <i className="bi bi-arrow-right-short fs-5"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

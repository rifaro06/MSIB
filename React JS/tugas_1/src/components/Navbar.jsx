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
          className="lumina-brand d-flex align-items-center gap-2 text-decoration-none"
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick('home')
          }}
        >
          <span className="brand-icon-box">
            <i className="bi bi-book-half text-white fs-5"></i>
          </span>
          <div className="d-flex align-items-center gap-2">
            <span className="fw-extrabold tracking-tight text-white fs-4">BOOK<span className="text-cyan">SALES</span></span>
            <span className="lumina-brand-badge d-none d-sm-inline-block">BOOKSTORE</span>
          </div>
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
          </ul>

          <div className="d-flex align-items-center gap-2 ms-lg-3">
            <a
              href="#contact"
              className="btn btn-primary-gradient px-3 py-2 d-inline-flex align-items-center gap-2"
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick('contact')
              }}
            >
              <i className="bi bi-chat-dots-fill"></i>
              <span>Hubungi Toko</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

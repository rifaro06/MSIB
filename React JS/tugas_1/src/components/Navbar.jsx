import { useState } from 'react'

function Navbar({ currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = (page) => {
    onNavigate(page)
    setIsOpen(false)
  }

  return (
    <nav className="navbar navbar-expand-lg custom-navbar sticky-top shadow-sm">
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center text-primary"
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            handleLinkClick('home')
          }}
        >
          <i className="bi bi-code-slash fs-3 me-2 text-primary"></i>
          <span>
            ReactEdu<span className="text-secondary fw-normal fs-6 ms-1">| Tugas 1</span>
          </span>
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-1 my-2 my-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
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
                className={`nav-link ${currentPage === 'team' ? 'active' : ''}`}
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
                className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick('contact')
                }}
              >
                <i className="bi bi-envelope me-1"></i> Contact
              </a>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a
                className="btn btn-primary btn-sm px-3 rounded-pill d-inline-flex align-items-center shadow-sm"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick('contact')
                }}
              >
                <i className="bi bi-send me-1"></i> Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

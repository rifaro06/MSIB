import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

/**
 * Component Navbar.
 * Menyediakan navigasi utama aplikasi BookSales dengan komponen NavLink
 * dan tombol aksi cepat untuk memicu modal penambahan buku.
 * 
 * @param {Object} props
 * @param {Function} props.onOpenAddModal - Handler untuk membuka modal tambah buku
 * @param {number} props.bookCount - Jumlah buku yang sedang ada di state
 */
export default function Navbar({ onOpenAddModal, bookCount }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg lumina-navbar sticky-top">
      <div className="container">
        {/* Brand Logo */}
        <Link className="lumina-brand d-flex align-items-center gap-2 text-decoration-none" to="/" onClick={handleLinkClick}>
          <span className="brand-icon-box">
            <i className="bi bi-book-half text-white fs-5"></i>
          </span>
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center gap-2">
              <span className="fw-extrabold tracking-tight text-white fs-4">BOOK<span className="text-cyan">SALES</span></span>
              <span className="lumina-brand-badge d-none d-sm-inline-block">TECH BOOKS</span>
            </div>
          </div>
        </Link>

        {/* Toggler Mobile */}
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

        {/* Navbar Links */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-1 my-3 my-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) => `nav-link lumina-nav-link ${isActive ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                <i className="bi bi-house-door me-1"></i> Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/books"
                className={({ isActive }) => `nav-link lumina-nav-link ${isActive ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                <i className="bi bi-collection me-1"></i> Book Catalog
                {bookCount !== undefined && (
                  <span className="badge rounded-pill bg-cyan bg-opacity-20 text-cyan ms-2 border border-info border-opacity-25" style={{ fontSize: '0.7rem' }}>
                    {bookCount}
                  </span>
                )}
              </NavLink>
            </li>
          </ul>

          {/* Action CTA: Tambah Data Buku (Hooks) */}
          <div className="d-flex align-items-center gap-2 ms-lg-3">
            <button
              type="button"
              className="btn btn-primary-gradient px-3 py-2 d-inline-flex align-items-center gap-2"
              onClick={() => {
                setIsOpen(false);
                onOpenAddModal();
              }}
            >
              <i className="bi bi-plus-circle-fill"></i>
              <span>Tambah Buku</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

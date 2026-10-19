import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="lumina-footer mt-auto pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <span className="brand-icon-box me-2" style={{ width: '38px', height: '38px', background: 'linear-gradient(135deg, #6366f1, #06b6d4)', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="bi bi-book-half text-white fs-5"></i>
              </span>
              <span className="fw-extrabold text-white fs-4 tracking-tight">BOOK<span className="text-cyan">SALES</span></span>
              <span className="lumina-brand-badge ms-2">ROUTING</span>
            </div>
            <p className="text-secondary small mb-4" style={{ lineHeight: '1.7' }}>
              Toko buku teknologi online modern. Mengimplementasikan arsitektur navigasi declarative routing
              React Router 7 untuk pengalaman belanja buku pemrograman yang cepat, rapi, dan terstruktur.
            </p>
            <div className="d-flex gap-2">
              <span className="badge" style={{ background: 'rgba(99,102,241,0.15)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.3)' }}>React 19</span>
              <span className="badge" style={{ background: 'rgba(236,72,153,0.15)', color: '#f472b6', border: '1px solid rgba(236,72,153,0.3)' }}>React Router 7</span>
              <span className="badge" style={{ background: 'rgba(6,182,212,0.15)', color: '#67e8f9', border: '1px solid rgba(6,182,212,0.3)' }}>Vite 8</span>
              <span className="badge" style={{ background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.3)' }}>Bootstrap 5</span>
            </div>
          </div>

          <div className="col-lg-2 col-6">
            <h6 className="text-white text-uppercase fw-bold mb-3 small tracking-wider" style={{ letterSpacing: '1px' }}>Navigasi</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <Link to="/" className="text-secondary text-decoration-none">
                  <i className="bi bi-chevron-right me-1 text-primary small"></i> Home
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-secondary text-decoration-none">
                  <i className="bi bi-chevron-right me-1 text-primary small"></i> Tim Toko
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary text-decoration-none">
                  <i className="bi bi-chevron-right me-1 text-primary small"></i> Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-6">
            <h6 className="text-white text-uppercase fw-bold mb-3 small tracking-wider" style={{ letterSpacing: '1px' }}>Kategori Buku</h6>
            <ul className="list-unstyled small text-secondary d-flex flex-column gap-2 mb-0">
              <li>&bull; Web Development &amp; JavaScript</li>
              <li>&bull; React &amp; Frontend Modern</li>
              <li>&bull; Node.js &amp; Cloud Backend</li>
              <li>&bull; UI/UX &amp; Software Design</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="text-white text-uppercase fw-bold mb-3 small tracking-wider" style={{ letterSpacing: '1px' }}>Identitas Proyek</h6>
            <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
              <div className="small text-white fw-bold mb-1">Riez Rafa Roro</div>
              <div className="small text-secondary mb-1">NIM: 0110224034</div>
              <div className="small text-secondary mb-2">STT Terpadu Nurul Fikri &bull; MSIB 2026</div>
              <a
                href="https://github.com/rifaro06/MSIB"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light btn-sm w-100 d-inline-flex align-items-center justify-content-center gap-2 mt-2"
                style={{ borderRadius: '8px', fontSize: '0.8rem' }}
              >
                <i className="bi bi-github"></i>
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.08)' }} />

        <div className="row align-items-center text-center text-md-start small text-secondary">
          <div className="col-md-6 mb-2 mb-md-0">
            &copy; {CURRENT_YEAR} Book Sales. All rights reserved. Tugas 2 Pemrograman React JS.
          </div>
          <div className="col-md-6 text-md-end text-light">
            Pengembang: <span className="text-white fw-semibold">Riez Rafa Roro</span> &bull; STT Terpadu Nurul Fikri
          </div>
        </div>
      </div>
    </footer>
  )
}

const CURRENT_YEAR = 2026

export default Footer

import { Link } from 'react-router-dom';

/**
 * Component Footer.
 * Menyediakan informasi penutup aplikasi terpadu Book Sales, tautan navigasi,
 * serta identitas mahasiswa penanggung jawab tugas MSIB.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="lumina-footer pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Brand Info */}
          <div className="col-lg-5">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="brand-icon-box">
                <i className="bi bi-book-half text-white fs-5"></i>
              </span>
              <span className="fw-extrabold tracking-tight text-white fs-4">
                BOOK<span className="text-cyan">SALES</span>
              </span>
            </div>
            <p className="text-secondary small mb-3" style={{ maxWidth: '380px' }}>
              Aplikasi terpadu katalog dan toko buku pemrograman modern yang mengintegrasikan
              Tugas 1 (Bootstrap &amp; Pages), Tugas 2 (Declarative Routing), dan Tugas 3 (Dataset &amp; React Hooks).
            </p>
            <div className="d-flex flex-wrap gap-2">
              <span className="badge tech-badge"><i className="bi bi-code-slash me-1"></i> React 19</span>
              <span className="badge tech-badge"><i className="bi bi-lightning-charge me-1"></i> Vite</span>
              <span className="badge tech-badge"><i className="bi bi-bootstrap me-1"></i> Bootstrap 5</span>
              <span className="badge tech-badge"><i className="bi bi-signpost-split me-1"></i> Router 7</span>
              <span className="badge tech-badge"><i className="bi bi-magic me-1"></i> Hooks</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h6 className="fw-bold text-white mb-3 tracking-wide">Navigasi Halaman</h6>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li>
                <Link to="/" className="text-secondary text-decoration-none hover-cyan d-inline-flex align-items-center gap-2">
                  <i className="bi bi-chevron-right text-cyan" style={{ fontSize: '0.75rem' }}></i>
                  <span>Home (Beranda)</span>
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-secondary text-decoration-none hover-cyan d-inline-flex align-items-center gap-2">
                  <i className="bi bi-chevron-right text-cyan" style={{ fontSize: '0.75rem' }}></i>
                  <span>Books (Katalog Buku)</span>
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-secondary text-decoration-none hover-cyan d-inline-flex align-items-center gap-2">
                  <i className="bi bi-chevron-right text-cyan" style={{ fontSize: '0.75rem' }}></i>
                  <span>Team (Tim Kurator)</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary text-decoration-none hover-cyan d-inline-flex align-items-center gap-2">
                  <i className="bi bi-chevron-right text-cyan" style={{ fontSize: '0.75rem' }}></i>
                  <span>Contact (Kontak Toko)</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/rifaro06/MSIB"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary text-decoration-none hover-cyan d-inline-flex align-items-center gap-2"
                >
                  <i className="bi bi-github text-cyan" style={{ fontSize: '0.75rem' }}></i>
                  <span>GitHub Repository MSIB</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Student Identity */}
          <div className="col-lg-4 col-md-6">
            <h6 className="fw-bold text-white mb-3 tracking-wide">Identitas Mahasiswa</h6>
            <div className="glass-card p-3 rounded-3" style={{ background: 'rgba(255, 255, 255, 0.03)' }}>
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="bi bi-person-badge text-cyan fs-5"></i>
                <span className="fw-bold text-white small">Riez Rafa Roro</span>
              </div>
              <p className="text-secondary small mb-1">
                <strong>NIM:</strong> 0110224034
              </p>
              <p className="text-secondary small mb-1">
                <strong>Program:</strong> MSIB Batch 2026
              </p>
              <p className="text-secondary small mb-1">
                <strong>Mata Kuliah:</strong> Pemrograman React JS
              </p>
              <p className="text-secondary small mb-0">
                <strong>Perguruan Tinggi:</strong> STT Terpadu Nurul Fikri
              </p>
            </div>
          </div>
        </div>

        <div className="pt-4 border-top border-secondary border-opacity-25 d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2 text-secondary small">
          <div>
            &copy; {currentYear} <strong>Book Sales Project</strong> &bull; Pemrograman React JS (Tugas 1–3 Terpadu).
          </div>
          <div className="text-cyan">
            React 19 &bull; React Router 7 &bull; Bootstrap 5 &bull; Array.map() &bull; useState
          </div>
        </div>
      </div>
    </footer>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer className="lumina-footer mt-auto">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <span className="d-inline-flex align-items-center justify-content-center rounded-3 bg-gradient p-2 me-2" style={{ background: 'linear-gradient(135deg, #6366f1, #d946ef)' }}>
                <i className="bi bi-stars text-white fs-5"></i>
              </span>
              <span className="fw-extrabold text-white fs-4 tracking-tight">LUMINA</span>
              <span className="lumina-brand-badge">STUDIO</span>
            </div>
            <p className="text-secondary small mb-4" style={{ lineHeight: '1.7' }}>
              Studio teknologi &amp; kreatif digital terdepan. Kami merancang arsitektur web modern,
              antarmuka imersif, dan sistem digital berkinerja tinggi untuk brand &amp; produk visioner.
            </p>
            <div className="d-flex gap-2">
              <span className="badge" style={{ background: 'rgba(99,102,241,0.15)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.3)' }}>React 19</span>
              <span className="badge" style={{ background: 'rgba(6,182,212,0.15)', color: '#67e8f9', border: '1px solid rgba(6,182,212,0.3)' }}>Vite 8</span>
              <span className="badge" style={{ background: 'rgba(236,72,153,0.15)', color: '#f472b6', border: '1px solid rgba(236,72,153,0.3)' }}>Bootstrap 5</span>
              <span className="badge" style={{ background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', border: '1px solid rgba(16,185,129,0.3)' }}>Glassmorphism</span>
            </div>
          </div>

          <div className="col-lg-2 col-6">
            <h6 className="text-white text-uppercase fw-bold mb-3 small tracking-wider" style={{ letterSpacing: '1px' }}>Navigasi</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate('home')
                  }}
                >
                  <i className="bi bi-chevron-right me-1 text-primary small"></i> Home
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate('team')
                  }}
                >
                  <i className="bi bi-chevron-right me-1 text-primary small"></i> Our Collective
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate('contact')
                  }}
                >
                  <i className="bi bi-chevron-right me-1 text-primary small"></i> Start A Project
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-6">
            <h6 className="text-white text-uppercase fw-bold mb-3 small tracking-wider" style={{ letterSpacing: '1px' }}>Layanan Studio</h6>
            <ul className="list-unstyled small text-secondary d-flex flex-column gap-2 mb-0">
              <li>&bull; Modern Web Architecture</li>
              <li>&bull; Immersive UI/UX &amp; Motion</li>
              <li>&bull; Enterprise React Engineering</li>
              <li>&bull; AI Workflows &amp; Automation</li>
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
            &copy; {CURRENT_YEAR} LUMINA Studio. All rights reserved. Tugas 1 Pemrograman React JS.
          </div>
          <div className="col-md-6 text-md-end text-light">
            Architected by <span className="text-white fw-semibold">Riez Rafa Roro</span> &bull; STT Terpadu Nurul Fikri
          </div>
        </div>
      </div>
    </footer>
  )
}

const CURRENT_YEAR = 2026

export default Footer

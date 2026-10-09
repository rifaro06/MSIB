function Footer({ onNavigate }) {
  return (
    <footer className="mt-auto py-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white d-flex align-items-center mb-3">
              <i className="bi bi-code-slash text-primary me-2 fs-4"></i>
              ReactEdu Platform
            </h5>
            <p className="text-secondary small mb-3">
              Implementasi tugas pemrograman React JS yang menggabungkan konsep komponen modular,
              state-driven UI, dan desain responsif menggunakan Bootstrap 5.
            </p>
            <div className="d-flex gap-2">
              <span className="badge bg-secondary-subtle text-light border border-secondary">React 19</span>
              <span className="badge bg-secondary-subtle text-light border border-secondary">Vite 8</span>
              <span className="badge bg-secondary-subtle text-light border border-secondary">Bootstrap 5</span>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h6 className="text-white text-uppercase fw-semibold mb-3">Navigasi</h6>
            <ul className="list-unstyled small d-flex flex-column gap-2 mb-0">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault()
                    onNavigate('home')
                  }}
                >
                  <i className="bi bi-chevron-right me-1 small"></i> Home
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
                  <i className="bi bi-chevron-right me-1 small"></i> Meet Our Team
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
                  <i className="bi bi-chevron-right me-1 small"></i> Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="text-white text-uppercase fw-semibold mb-3">Identitas Tugas</h6>
            <ul className="list-unstyled small text-secondary d-flex flex-column gap-2 mb-0">
              <li>
                <span className="text-white fw-semibold">Mata Kuliah:</span> Pemrograman React JS
              </li>
              <li>
                <span className="text-white fw-semibold">Mahasiswa:</span> Riez Rafa Roro
              </li>
              <li>
                <span className="text-white fw-semibold">NIM:</span> 0110224034
              </li>
              <li>
                <span className="text-white fw-semibold">Instansi:</span> STT Terpadu Nurul Fikri
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h6 className="text-white text-uppercase fw-semibold mb-3">Repository & Mentor</h6>
            <p className="text-secondary small mb-2">
              Proyek ini terintegrasi dengan GitHub untuk penilaian tugas kuliah dan kolaborasi mentor.
            </p>
            <a
              href="https://github.com/rifaro06/MSIB"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-light btn-sm w-100 d-inline-flex align-items-center justify-content-center gap-2"
            >
              <i className="bi bi-github fs-6"></i>
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="row align-items-center text-center text-md-start small text-secondary">
          <div className="col-md-6 mb-2 mb-md-0">
            &copy; {CURRENT_YEAR} ReactEdu. Tugas 1 Pemrograman React JS.
          </div>
          <div className="col-md-6 text-md-end">
            Dibuat dengan dedikasi oleh Riez Rafa Roro &bull; STT Terpadu Nurul Fikri
          </div>
        </div>
      </div>
    </footer>
  )
}

const CURRENT_YEAR = new Date().getFullYear()

export default Footer

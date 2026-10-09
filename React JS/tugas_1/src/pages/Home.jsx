import heroIllustration from '../assets/hero-illustration.svg'

function Home({ onNavigate }) {
  const features = [
    {
      icon: 'bi-grid-1x2',
      color: 'text-primary bg-primary-subtle',
      title: 'Komponen Modular & Reusable',
      description:
        'Struktur kode disusun rapi dengan memisahkan Navbar, Footer, serta halaman-halaman utama ke dalam komponen terpisah yang mudah dirawat dan diperluas.',
    },
    {
      icon: 'bi-phone',
      color: 'text-success bg-success-subtle',
      title: 'Desain Responsif & Modern',
      description:
        'Memanfaatkan sistem grid, flexbox, dan utilitas Bootstrap 5 sehingga antarmuka nyaman diakses dari smartphone, tablet, maupun monitor desktop.',
    },
    {
      icon: 'bi-lightning-charge',
      color: 'text-warning bg-warning-subtle',
      title: 'Performa Cepat & Interaktif',
      description:
        'Didukung Vite sebagai bundler modern dan React 19 dengan Hot Module Replacement (HMR) untuk pengalaman pengembangan dan rendering UI yang optimal.',
    },
  ]

  const stats = [
    { value: '3+', label: 'Halaman Utama', desc: 'Home, Team, Contact' },
    { value: '100%', label: 'Responsif', desc: 'Desktop & Mobile View' },
    { value: 'React 19', label: 'Framework Utama', desc: 'Modern Functional UI' },
    { value: 'Bootstrap 5', label: 'Design System', desc: 'Clean Component Styling' },
  ]

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-7 text-center text-lg-start">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3 rounded-pill bg-primary-subtle text-primary border border-primary-subtle small fw-semibold">
                <i className="bi bi-mortarboard-fill"></i>
                <span>Tugas 1 &bull; Pemrograman React JS</span>
              </div>
              <h1 className="display-4 fw-bold text-dark lh-sm mb-3">
                Membangun Antarmuka Modern dengan{' '}
                <span className="text-primary">React JS &amp; Bootstrap</span>
              </h1>
              <p className="lead text-secondary mb-4 pe-lg-4">
                Selamat datang di platform percontohan Tugas 1 React JS. Website ini mengimplementasikan
                arsitektur komponen modern, navigasi responsif, halaman profil tim kolaboratif, serta
                formulir kontak interaktif.
              </p>
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                <button
                  type="button"
                  className="btn btn-primary btn-lg px-4 rounded-pill shadow-sm d-inline-flex align-items-center gap-2"
                  onClick={() => onNavigate('team')}
                >
                  <i className="bi bi-people-fill"></i>
                  <span>Kenali Tim Kami</span>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-lg px-4 rounded-pill d-inline-flex align-items-center gap-2"
                  onClick={() => onNavigate('contact')}
                >
                  <i className="bi bi-chat-dots-fill"></i>
                  <span>Kirim Pesan</span>
                </button>
              </div>
            </div>

            <div className="col-lg-5 text-center">
              <div className="p-2 p-md-3 bg-white rounded-4 shadow-sm border border-light-subtle">
                <img
                  src={heroIllustration}
                  alt="Ilustrasi Pengembangan React JS dan Bootstrap"
                  className="img-fluid rounded-3"
                  style={{ maxHeight: '360px', width: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="py-5 bg-white">
        <div className="container py-lg-4">
          <div className="text-center max-w-700 mx-auto mb-5">
            <span className="text-primary fw-semibold text-uppercase small tracking-wide">
              Arsitektur &amp; Keunggulan
            </span>
            <h2 className="fw-bold text-dark mt-1">Fondasi Pengembangan Aplikasi</h2>
            <p className="text-secondary">
              Tiga pilar utama yang diterapkan dalam penyusunan tugas kuliah ini untuk menghasilkan
              kode yang rapi dan terstandar.
            </p>
          </div>

          <div className="row g-4">
            {features.map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 p-4 feature-card shadow-sm border-0">
                  <div className="card-body p-0 d-flex flex-column">
                    <div className={`icon-badge ${feature.color} mb-3`}>
                      <i className={`bi ${feature.icon}`}></i>
                    </div>
                    <h5 className="card-title fw-bold text-dark mb-2">{feature.title}</h5>
                    <p className="card-text text-secondary small flex-grow-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats / Tech Stack */}
      <section className="py-5 bg-light border-top border-bottom">
        <div className="container">
          <div className="row g-4 text-center">
            {stats.map((item, idx) => (
              <div className="col-6 col-lg-3" key={idx}>
                <div className="p-3 bg-white rounded-3 shadow-sm border h-100">
                  <div className="fs-2 fw-bold text-primary mb-1">{item.value}</div>
                  <div className="fw-semibold text-dark small">{item.label}</div>
                  <div className="text-secondary small mt-1" style={{ fontSize: '0.8rem' }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="p-4 p-md-5 rounded-4 bg-primary text-white text-center text-lg-start position-relative overflow-hidden shadow">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h3 className="fw-bold mb-2">Ingin Berkolaborasi atau Memberikan Masukan?</h3>
                <p className="mb-0 text-white-50">
                  Kunjungi halaman Team untuk melihat profil pengembang atau hubungi kami melalui formulir kontak.
                </p>
              </div>
              <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-2">
                  <button
                    type="button"
                    className="btn btn-light px-4 py-2 rounded-pill fw-semibold shadow-sm"
                    onClick={() => onNavigate('team')}
                  >
                    Profil Tim
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-light px-4 py-2 rounded-pill fw-semibold"
                    onClick={() => onNavigate('contact')}
                  >
                    Formulir Kontak
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

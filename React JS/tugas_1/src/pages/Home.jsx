import heroIllustration from '../assets/hero-illustration.svg'
import FeatureCard from '../components/FeatureCard'

function Home({ onNavigate }) {
  const capabilities = [
    {
      icon: 'bi-cpu',
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      tag: 'ARCHITECTURE',
      title: 'Next-Gen Web Architecture',
      description:
        'Membangun aplikasi Single Page Application (SPA) berkinerja tinggi dengan arsitektur modular React 19, aliran data deklaratif, dan waktu muat di bawah 50 milidetik.',
    },
    {
      icon: 'bi-gem',
      gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      tag: 'INTERFACE',
      title: 'Immersive UI/UX & Glassmorphism',
      description:
        'Merancang estetika antarmuka modern dengan kedalaman visual, glassmorphism bercahaya, tipografi elegan, dan mikro-interaksi yang memikat sejak pandangan pertama.',
    },
    {
      icon: 'bi-stars',
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      tag: 'AI & SCALING',
      title: 'AI Workflows & Cloud Innovation',
      description:
        'Mengintegrasikan kemampuan kecerdasan buatan, otomatisasi cerdas, dan tooling modern Vite serta Bootstrap untuk menghadirkan skalabilitas produk digital masa depan.',
    },
  ]

  const metrics = [
    { value: '120+', label: 'Digital Products Launched', desc: 'Produk Web & Mobile Skala Global' },
    { value: '99.8%', label: 'Client Satisfaction Rate', desc: 'Ulasan Kepercayaan Mitra Bisnis' },
    { value: '42ms', label: 'Ultra-Fast Render Time', desc: 'Optimasi Performa React 19 & Vite' },
    { value: '18+', label: 'Design & Code Awards', desc: 'Pengakuan Standar Industri Digital' },
  ]

  const techEcosystem = [
    'React 19',
    'Vite 8',
    'Bootstrap 5',
    'JavaScript ES6+',
    'Glassmorphic UI',
    'Figma Studio',
    'REST & GraphQL',
    'Responsive Grid',
  ]

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-7 text-center text-lg-start">
              <div className="hero-pill">
                <i className="bi bi-stars text-warning"></i>
                <span>LUMINA CREATIVE &bull; NEXT-GEN DIGITAL STUDIO</span>
              </div>

              <h1 className="hero-heading">
                We Architect <span className="text-gradient">Digital Futures</span> &amp; Immersive Realities
              </h1>

              <p className="hero-lead mb-4 pe-lg-3">
                Lumina Studio adalah studio kreatif dan laboratorium teknologi digital mutakhir.
                Kami merancang antarmuka web masa depan, arsitektur frontend berperforma tinggi,
                serta pengalaman visual imersif untuk brand dan kreator visioner.
              </p>

              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                <button
                  type="button"
                  className="btn btn-lumina-primary btn-lg"
                  onClick={() => onNavigate('team')}
                >
                  <i className="bi bi-people-fill"></i>
                  <span>Meet Our Creators</span>
                </button>
                <button
                  type="button"
                  className="btn btn-lumina-glass btn-lg"
                  onClick={() => onNavigate('contact')}
                >
                  <i className="bi bi-chat-quote-fill"></i>
                  <span>Start A Project</span>
                </button>
              </div>

              {/* Quick Tech Badge Bar */}
              <div className="mt-5 pt-3 border-top" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <span className="small text-secondary text-uppercase fw-semibold me-3 d-block d-sm-inline-block mb-2 mb-sm-0" style={{ letterSpacing: '1px', fontSize: '0.72rem' }}>
                  Core Tech Stack:
                </span>
                <div className="d-inline-flex flex-wrap gap-2">
                  {techEcosystem.slice(0, 5).map((tech, idx) => (
                    <span key={idx} className="skill-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-5 text-center">
              <div className="p-2 p-md-3 rounded-4 position-relative">
                <img
                  src={heroIllustration}
                  alt="Lumina Studio Digital Canvas"
                  className="img-fluid"
                  style={{ maxHeight: '420px', width: '100%', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="py-5 position-relative">
        <div className="container py-lg-4">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '680px' }}>
            <span className="badge rounded-pill px-3 py-2 mb-2" style={{ background: 'rgba(99,102,241,0.15)', color: '#a5b4fc', border: '1px solid rgba(99,102,241,0.3)', letterSpacing: '1px', fontSize: '0.75rem' }}>
              WHAT WE DO &bull; CORE CAPABILITIES
            </span>
            <h2 className="display-6 fw-bold text-white mt-2" style={{ letterSpacing: '-0.5px' }}>
              Dirancang untuk Melampaui <span className="text-gradient-primary">Ekspektasi Modern</span>
            </h2>
            <p className="text-secondary small mt-2">
              Tiga pilar layanan utama yang menggerakkan setiap produk digital yang kami rilis ke pasar global.
            </p>
          </div>

          <div className="row g-4">
            {capabilities.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <FeatureCard
                  icon={item.icon}
                  gradient={item.gradient}
                  tag={item.tag}
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Metrics / Studio Impact */}
      <section className="py-5" style={{ background: 'rgba(15, 23, 42, 0.4)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div className="row g-4 text-center">
            {metrics.map((m, idx) => (
              <div className="col-6 col-lg-3" key={idx}>
                <div className="p-4 glass-card h-100">
                  <div className="display-5 fw-extrabold text-gradient-primary mb-1">
                    {m.value}
                  </div>
                  <div className="text-white fw-semibold small mb-1">{m.label}</div>
                  <div className="text-secondary small" style={{ fontSize: '0.78rem' }}>
                    {m.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase / CTA Banner */}
      <section className="py-5 my-3">
        <div className="container">
          <div
            className="p-4 p-md-5 rounded-4 text-center text-lg-start position-relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(139, 92, 246, 0.35) 50%, rgba(6, 182, 212, 0.2) 100%)',
              border: '1px solid rgba(139, 92, 246, 0.4)',
              backdropFilter: 'blur(20px)',
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-8">
                <span className="badge rounded-pill px-3 py-1 mb-3" style={{ background: 'rgba(255,255,255,0.12)', color: '#ffffff', fontSize: '0.75rem' }}>
                  ✨ READY TO ELEVATE YOUR VISION
                </span>
                <h3 className="display-6 fw-bold text-white mb-2" style={{ letterSpacing: '-0.5px' }}>
                  Siap Membangun Produk Digital Impian Bersama Lumina?
                </h3>
                <p className="text-light mb-0 small" style={{ opacity: 0.85, lineHeight: '1.6' }}>
                  Diskusikan arsitektur aplikasi Anda, eksplorasi profil tim kreator kami, atau kirimkan
                  pesan konsultasi langsung melalui halaman Contact.
                </p>
              </div>

              <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
                <div className="d-flex flex-wrap justify-content-center justify-content-lg-end gap-3">
                  <button
                    type="button"
                    className="btn btn-lumina-primary"
                    onClick={() => onNavigate('contact')}
                  >
                    <span>Hubungi Studio</span>
                    <i className="bi bi-arrow-right"></i>
                  </button>
                  <button
                    type="button"
                    className="btn btn-lumina-glass"
                    onClick={() => onNavigate('team')}
                  >
                    <span>Kreator Kami</span>
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

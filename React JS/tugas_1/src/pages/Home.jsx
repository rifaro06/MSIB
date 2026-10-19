import heroIllustration from '../assets/hero-illustration.svg'
import FeatureCard from '../components/FeatureCard'

function Home({ onNavigate }) {
  const capabilities = [
    {
      icon: 'bi-book-half',
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      tag: 'KURASI RESMI',
      title: 'Buku Teknologi & Coding Terlengkap',
      description:
        'Koleksi komprehensif mulai dari dasar pemrograman, JavaScript, React modern, hingga arsitektur cloud dan kecerdasan buatan.',
    },
    {
      icon: 'bi-shield-check',
      gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      tag: 'KUALITAS ASLI',
      title: '100% Original & Bergaransi',
      description:
        'Seluruh buku dijamin asli langsung dari penerbit terpercaya dengan kemasan ekstra aman dan pengiriman cepat ke seluruh Indonesia.',
    },
    {
      icon: 'bi-people-fill',
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      tag: 'KOMUNITAS',
      title: 'Komunitas & Bedah Buku Digital',
      description:
        'Dapatkan akses ke sesi diskusi bersama penulis, bedah kode sampel langsung, dan forum pembaca teknologi Book Sales.',
    },
  ]

  const metrics = [
    { value: '10.000+', label: 'Buku Terjual', desc: 'Distribusi ke Pembaca Seluruh Indonesia' },
    { value: '99.8%', label: 'Kepuasan Pelanggan', desc: 'Ulasan Positif dari Mahasiswa & Developer' },
    { value: '100+', label: 'Judul Best Seller', desc: 'Kurasi Khusus Coding & Desain Modern' },
    { value: '4.9/5', label: 'Rating Toko Online', desc: 'Layanan Cepat dan Responsif' },
  ]

  const sampleBooks = [
    {
      title: 'Belajar JavaScript Dasar',
      author: 'Andi Prasetyo (2021)',
      price: 'Rp 95.000',
      tag: 'Best Seller',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'React untuk Pemula',
      author: 'Dina Sari (2022)',
      price: 'Rp 115.000',
      tag: 'Populer',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Arsitektur Antarmuka UI/UX Modern',
      author: 'Riez Rafa Roro (2024)',
      price: 'Rp 135.000',
      tag: 'Rekomendasi',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80',
    },
  ]

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-7 text-center text-lg-start">
              <div className="hero-pill">
                <i className="bi bi-book text-cyan"></i>
                <span>BOOKSALES &bull; TOKO BUKU TEKNOLOGI ONLINE</span>
              </div>

              <h1 className="hero-heading">
                Pusat Belanja &amp; Eksplorasi <span className="text-gradient">Buku Pemrograman</span> Terlengkap
              </h1>

              <p className="hero-lead mb-4 pe-lg-3">
                Book Sales adalah platform toko buku online modern yang menyediakan referensi terlengkap
                untuk mahasiswa, praktisi, dan antusias teknologi. Temukan buku impian Anda dengan kurasi
                berstandar industri dan harga terjangkau.
              </p>

              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
                <button
                  type="button"
                  className="btn btn-lumina-primary"
                  onClick={() => onNavigate('team')}
                >
                  <i className="bi bi-people-fill me-2"></i>
                  <span>Kenali Tim Kami</span>
                </button>
                <button
                  type="button"
                  className="btn btn-lumina-secondary"
                  onClick={() => onNavigate('contact')}
                >
                  <i className="bi bi-envelope-fill me-2"></i>
                  <span>Hubungi Book Sales</span>
                </button>
              </div>

              {/* Status / Trust Badges */}
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-4 pt-2 text-secondary small">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-patch-check-fill text-cyan"></i>
                  <span>Buku 100% Original</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-truck text-cyan"></i>
                  <span>Pengiriman Seluruh Nusantara</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-shield-lock-fill text-cyan"></i>
                  <span>Transaksi Aman</span>
                </div>
              </div>
            </div>

            <div className="col-lg-5 text-center">
              <div className="hero-visual-card">
                <img
                  src={heroIllustration}
                  alt="Book Sales Hero Illustration"
                  className="img-fluid hero-illustration"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Book Showcase Section */}
      <section className="py-5" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge category-badge px-3 py-2 mb-2">REKOMENDASI BUKU</span>
            <h2 className="section-title">Koleksi Buku Pilihan Minggu Ini</h2>
            <p className="text-secondary small">Buku-buku best seller yang paling banyak dibaca oleh pengembang web dan mahasiswa.</p>
          </div>

          <div className="row g-4">
            {sampleBooks.map((item, idx) => (
              <div key={idx} className="col-md-4">
                <div className="card h-100 book-card border-0 p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-3 w-100 mb-3"
                    style={{ height: '180px', objectFit: 'cover' }}
                  />
                  <span className="badge category-badge align-self-start mb-2">{item.tag}</span>
                  <h5 className="fw-bold text-white mb-1">{item.title}</h5>
                  <p className="text-secondary small mb-3">{item.author}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto pt-2 border-top border-secondary border-opacity-25">
                    <span className="fw-bold text-cyan">{item.price}</span>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-cyan"
                      onClick={() => onNavigate('contact')}
                    >
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keunggulan Toko (Feature Cards) */}
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge category-badge px-3 py-2 mb-2">KEUNGGULAN KAMI</span>
            <h2 className="section-title">Mengapa Memilih Book Sales?</h2>
            <p className="text-secondary small">Komitmen kami dalam menghadirkan pengalaman literasi teknologi terbaik.</p>
          </div>

          <div className="row g-4">
            {capabilities.map((cap, index) => (
              <div key={index} className="col-md-4">
                <FeatureCard
                  icon={cap.icon}
                  gradient={cap.gradient}
                  tag={cap.tag}
                  title={cap.title}
                  description={cap.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrik Toko */}
      <section className="py-5 border-top border-secondary border-opacity-10">
        <div className="container">
          <div className="row g-4">
            {metrics.map((m, index) => (
              <div key={index} className="col-6 col-lg-3 text-center">
                <div className="p-4 rounded-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="display-6 fw-extrabold text-cyan mb-1">{m.value}</div>
                  <div className="fw-bold text-white small mb-1">{m.label}</div>
                  <div className="text-secondary small" style={{ fontSize: '0.75rem' }}>{m.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-5">
        <div className="container">
          <div className="p-5 rounded-4 text-center position-relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(6,182,212,0.15))', border: '1px solid rgba(6,182,212,0.3)' }}>
            <h3 className="fw-bold text-white mb-2">Butuh Bantuan Memilih Buku Terbaik?</h3>
            <p className="text-secondary small mb-4 mx-auto" style={{ maxWidth: '500px' }}>
              Tim kurator Book Sales siap membantu memberikan rekomendasi buku sesuai jalur belajar pemrograman Anda.
            </p>
            <button
              type="button"
              className="btn btn-primary-gradient px-4 py-2"
              onClick={() => onNavigate('contact')}
            >
              <i className="bi bi-chat-dots me-1"></i> Konsultasi Buku Gratis
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

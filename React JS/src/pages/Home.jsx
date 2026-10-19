import { useOutletContext, Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import FeatureCard from '../components/FeatureCard';

/**
 * Halaman Home (Beranda).
 * Memenuhi kriteria Tugas 1 (Konten Toko Buku Book Sales, Bootstrap Grid, Gambar & Teks Rapi),
 * Tugas 2 (Navigasi Link Declarative Routing), dan
 * Tugas 3 (Koleksi Buku di-render dinamis menggunakan Array.map() dan tombol Hooks).
 */
export default function Home() {
  const { books, onOpenAddModal } = useOutletContext();

  const features = [
    {
      icon: 'bi-patch-check-fill',
      gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      tag: '100% Original',
      title: 'Kurasi Literatur Resmi',
      description: 'Setiap judul buku pemrograman dan arsitektur teknologi dikurasi langsung oleh kurator profesional berstandar industri modern.'
    },
    {
      icon: 'bi-lightning-charge-fill',
      gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
      tag: 'Pengiriman Cepat',
      title: 'Akses & Logistik Cepat',
      description: 'Pesanan buku fisik dikemas rapi dalam kemasan anti-rusak dengan garansi sampai dan tracking pengiriman transparan.'
    },
    {
      icon: 'bi-people-fill',
      gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
      tag: 'Komunitas MSIB',
      title: 'Bedah Buku & Diskusi',
      description: 'Dapatkan akses eksklusif ke sesi bedah buku, grup diskusi teknologi, dan forum tanya jawab bersama sesama pembaca.'
    }
  ];

  return (
    <div className="home-page">
      {/* ================= HERO SECTION ================= */}
      <section className="hero-section position-relative py-5 overflow-hidden">
        <div className="hero-glow-bg position-absolute top-0 start-50 translate-middle-x"></div>

        <div className="container position-relative z-1 py-4">
          <div className="row align-items-center g-5">
            <div className="col-lg-7 text-center text-lg-start">
              {/* Badge Tagline */}
              <div className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill hero-badge mb-3">
                <i className="bi bi-stars text-cyan"></i>
                <span className="small fw-semibold text-white tracking-wide">
                  BOOKSALES &bull; ONLINE BOOKSTORE &amp; TECH CATALOG
                </span>
              </div>

              {/* Headline */}
              <h1 className="hero-title fw-extrabold text-white mb-3">
                Pusat Belanja &amp; Eksplorasi <span className="gradient-text">Buku Pemrograman</span> Terlengkap
              </h1>

              {/* Subtitle */}
              <p className="hero-lead text-secondary mb-4">
                Tingkatkan kompetensi rekayasa perangkat lunak Anda bersama Book Sales.
                Temukan buku referensi terbaik mulai dari JavaScript fundamental, React modern, UI/UX Glassmorphism, Node.js, hingga Data Science &amp; AI.
              </p>

              {/* CTA Buttons */}
              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start mb-4">
                <Link to="/books" className="btn btn-primary-gradient btn-lg px-4 py-3 d-inline-flex align-items-center gap-2">
                  <i className="bi bi-collection-play-fill fs-5"></i>
                  <span>Buka Katalog Buku ({books.length})</span>
                </Link>

                <button
                  type="button"
                  className="btn btn-glass-cyan btn-lg px-4 py-3 d-inline-flex align-items-center gap-2"
                  onClick={onOpenAddModal}
                >
                  <i className="bi bi-plus-circle-fill fs-5 text-cyan"></i>
                  <span>+ Tambah Buku (Hooks)</span>
                </button>
              </div>

              {/* Mini Highlights */}
              <div className="d-flex flex-wrap gap-4 justify-content-center justify-content-lg-start text-secondary small">
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-cyan"></i>
                  <span>10+ Buku Teknologi Terkurasi</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-cyan"></i>
                  <span>Dinamis dengan Array.map()</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-cyan"></i>
                  <span>React useState Hook</span>
                </div>
              </div>
            </div>

            {/* Hero Visual Showcase */}
            <div className="col-lg-5">
              <div className="hero-visual-card glass-card p-4 position-relative">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="dot dot-red"></span>
                    <span className="dot dot-yellow"></span>
                    <span className="dot dot-green"></span>
                    <span className="text-secondary small ms-2 font-monospace">booksales-hub.jsx</span>
                  </div>
                  <span className="badge bg-primary bg-opacity-20 text-cyan border border-info border-opacity-25">
                    Live Reactive
                  </span>
                </div>

                {/* Featured Highlight Card */}
                {books.length > 0 && (
                  <div className="p-3 rounded-3 bg-dark bg-opacity-50 border border-secondary border-opacity-25 mb-3">
                    <div className="d-flex gap-3 align-items-center">
                      <img
                        src={books[0].image}
                        alt={books[0].title}
                        className="rounded-2"
                        style={{ width: '80px', height: '100px', objectFit: 'cover' }}
                      />
                      <div className="overflow-hidden">
                        <span className="badge category-badge mb-1" style={{ fontSize: '0.68rem' }}>
                          Buku Pilihan Utama
                        </span>
                        <h6 className="fw-bold text-white text-truncate mb-1">{books[0].title}</h6>
                        <p className="text-secondary small mb-1">{books[0].author} ({books[0].year})</p>
                        <span className="fw-bold text-cyan">{books[0].price}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Live Counter Grid */}
                <div className="row g-2 text-center">
                  <div className="col-6">
                    <div className="p-3 rounded-3 bg-dark bg-opacity-40 border border-secondary border-opacity-25">
                      <div className="fw-extrabold text-white fs-4">{books.length}</div>
                      <div className="text-secondary small" style={{ fontSize: '0.75rem' }}>Total Buku Aktif</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="p-3 rounded-3 bg-dark bg-opacity-40 border border-secondary border-opacity-25">
                      <div className="fw-extrabold text-cyan fs-4">4.9/5</div>
                      <div className="text-secondary small" style={{ fontSize: '0.75rem' }}>Rating Kepuasan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEUNGGULAN TOKO (FEATURE CARDS) ================= */}
      <section className="features-section py-5 border-top border-secondary border-opacity-10">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: '680px' }}>
            <span className="badge rounded-pill bg-cyan bg-opacity-15 text-cyan border border-info border-opacity-25 px-3 py-2 mb-2">
              <i className="bi bi-shield-check me-1"></i> Standar Keunggulan
            </span>
            <h2 className="fw-bold text-white mb-2">Mengapa Memilih Book Sales?</h2>
            <p className="text-secondary small mb-0">
              Komitmen kami menghadirkan pengalaman berbelanja dan membaca buku teknologi yang menyenangkan, terpercaya, dan bermutu tinggi.
            </p>
          </div>

          <div className="row g-4">
            {features.map((feat, idx) => (
              <div key={idx} className="col-lg-4 col-md-6">
                <FeatureCard {...feat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED BOOKS SECTION (.map()) ================= */}
      <section className="featured-section py-5 border-top border-secondary border-opacity-10">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
            <div>
              <span className="badge rounded-pill bg-cyan bg-opacity-15 text-cyan border border-info border-opacity-25 px-3 py-2 mb-2">
                <i className="bi bi-grid-3x3-gap-fill me-1"></i> Rendered with Array.map()
              </span>
              <h2 className="fw-bold text-white mb-1">
                Koleksi Pilihan &amp; Rekomendasi Teratas
              </h2>
              <p className="text-secondary small mb-0">
                Menampilkan 6 buku unggulan terpilih secara dinamis dari dataset <code>books.js</code>.
              </p>
            </div>

            <div className="mt-3 mt-md-0">
              <Link to="/books" className="btn btn-outline-cyan px-4 py-2 d-inline-flex align-items-center gap-2">
                <span>Lihat Semua ({books.length})</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>

          {/* Grid Render Buku dengan Metode .map() */}
          <div className="row g-4">
            {books.slice(0, 6).map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          {/* Banner Ajakan Buka Tim & Kontak */}
          <div className="mt-5 p-4 p-md-5 rounded-4 glass-card position-relative overflow-hidden">
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <h3 className="fw-bold text-white mb-2">
                  Kenali Tim Kurator &amp; Konsultasikan Kebutuhan Buku Anda
                </h3>
                <p className="text-secondary small mb-0">
                  Tim kami siap membantu Anda memilih buku pemrograman yang tepat sesuai target karir Anda.
                  Jelajahi halaman profil tim atau hubungi customer service kami melalui formulir kontak interaktif.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end d-flex flex-wrap gap-2 justify-content-lg-end">
                <Link to="/team" className="btn btn-outline-cyan px-4 py-2">
                  <i className="bi bi-people me-1"></i> Halaman Team
                </Link>
                <Link to="/contact" className="btn btn-primary-gradient px-4 py-2">
                  <i className="bi bi-envelope me-1"></i> Hubungi Toko
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

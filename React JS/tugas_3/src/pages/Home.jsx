import { useOutletContext, Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

/**
 * Halaman Home (Beranda).
 * Menampilkan hero showcase, metrik perpustakaan, serta daftar buku unggulan
 * yang di-render secara dinamis menggunakan metode .map().
 */
export default function Home() {
  const { books, onOpenAddModal } = useOutletContext();

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
                  BOOKSALES &bull; MODERN TECH LIBRARY
                </span>
              </div>

              {/* Headline */}
              <h1 className="hero-title fw-extrabold text-white mb-3">
                Jelajahi Khazanah <span className="gradient-text">Buku Pemrograman</span> & Arsitektur Teknologi
              </h1>

              {/* Subtitle */}
              <p className="hero-lead text-secondary mb-4">
                Tingkatkan keahlian rekayasa perangkat lunak Anda melalui koleksi buku berkualitas tinggi. 
                Mulai dari fundamental JavaScript, React modern, UI/UX Glassmorphism, arsitektur Cloud, hingga Data Science & AI.
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
                  <span>Minimal 9+ Buku Beragam</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill text-cyan"></i>
                  <span>Metode .map() Dinamis</span>
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
                    <span className="text-secondary small ms-2 font-monospace">booksales-showcase.jsx</span>
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
                          Buku Unggulan
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
                      <div className="text-secondary small" style={{ fontSize: '0.75rem' }}>Rating Pembaca</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURED BOOKS SECTION (.map()) ================= */}
      <section className="featured-section py-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end mb-4">
            <div>
              <span className="badge rounded-pill bg-cyan bg-opacity-15 text-cyan border border-info border-opacity-25 px-3 py-2 mb-2">
                <i className="bi bi-grid-3x3-gap-fill me-1"></i> Rendered with Array.map()
              </span>
              <h2 className="fw-bold text-white mb-1">
                Koleksi Pilihan & Rekomendasi Teratas
              </h2>
              <p className="text-secondary small mb-0">
                Menampilkan daftar buku terpilih menggunakan metode JavaScript <code>books.map()</code> pada React.
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

          {/* Banner Ajakan Buka Katalog */}
          <div className="mt-5 p-4 p-md-5 rounded-4 glass-card text-center position-relative overflow-hidden">
            <div className="position-relative z-1">
              <h3 className="fw-bold text-white mb-2">
                Ingin Menjelajahi Lebih Banyak Buku?
              </h3>
              <p className="text-secondary small mb-4 mx-auto" style={{ maxWidth: '540px' }}>
                Kunjungi halaman katalog lengkap untuk mencari buku berdasarkan kategori, judul, atau menambahkan buku baru secara interaktif.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link to="/books" className="btn btn-primary-gradient px-4 py-2">
                  <i className="bi bi-book me-1"></i> Buka Halaman Book Catalog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

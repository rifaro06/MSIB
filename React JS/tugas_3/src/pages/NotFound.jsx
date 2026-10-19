import { Link } from 'react-router-dom';

/**
 * Halaman 404 Not Found.
 * Menangani rute wildcard (*) yang tidak terdaftar.
 */
export default function NotFound() {
  return (
    <div className="container py-5 my-5 text-center">
      <div className="glass-card p-5 mx-auto" style={{ maxWidth: '580px' }}>
        <div className="display-1 fw-extrabold text-cyan mb-2">404</div>
        <h2 className="fw-bold text-white mb-3">Halaman Tidak Ditemukan</h2>
        <p className="text-secondary small mb-4">
          Halaman atau rute buku yang Anda tuju tidak terdaftar di sistem BookSales.
        </p>
        <Link to="/" className="btn btn-primary-gradient px-4 py-2">
          <i className="bi bi-house-door me-2"></i> Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

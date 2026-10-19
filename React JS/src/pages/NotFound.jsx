import { Link } from 'react-router-dom';

/**
 * Halaman NotFound (404).
 * Menangani rute URL yang tidak terdaftar pada aplikasi Book Sales.
 */
export default function NotFound() {
  return (
    <div className="notfound-page py-5 my-auto text-center animate-fade-in">
      <div className="container py-5">
        <div className="glass-card p-5 mx-auto" style={{ maxWidth: '600px' }}>
          <div className="display-1 fw-extrabold text-cyan mb-2">404</div>
          <h2 className="fw-bold text-white mb-3">Halaman Tidak Ditemukan</h2>
          <p className="text-secondary small mb-4">
            Alamat URL atau rute yang Anda tuju tidak terdaftar pada katalog aplikasi Book Sales.
            Silakan kembali ke halaman Beranda untuk melanjutkan eksplorasi buku.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/" className="btn btn-primary-gradient px-4 py-2">
              <i className="bi bi-house-door me-1"></i> Kembali ke Beranda
            </Link>
            <Link to="/books" className="btn btn-outline-cyan px-4 py-2">
              <i className="bi bi-collection me-1"></i> Buka Katalog Buku
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

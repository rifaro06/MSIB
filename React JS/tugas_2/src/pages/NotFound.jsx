import { Link } from 'react-router-dom'

/**
 * NotFound Component.
 * Halaman 404 untuk rute yang tidak terdaftar (wildcard path="*").
 */
function NotFound() {
  return (
    <div className="not-found-page py-5 animate-fade-in text-center my-auto">
      <div className="container py-5">
        <div className="hero-pill mb-3">
          <i className="bi bi-exclamation-triangle-fill text-warning"></i>
          <span>ERROR 404 &bull; PAGE NOT FOUND</span>
        </div>

        <h1 className="display-1 fw-extrabold text-gradient-primary mb-3">
          404
        </h1>

        <h2 className="display-6 fw-bold text-white mb-3" style={{ letterSpacing: '-0.5px' }}>
          Halaman Tidak Ditemukan
        </h2>

        <p className="text-secondary small mx-auto mb-4" style={{ maxWidth: '520px', lineHeight: '1.6' }}>
          Rute URL yang Anda tuju tidak terdaftar di dalam sistem routing Lumina Studio.
          Silakan kembali ke halaman utama atau gunakan navigasi yang tersedia.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <Link to="/" className="btn btn-lumina-primary">
            <i className="bi bi-house-door-fill me-1"></i>
            <span>Kembali ke Beranda</span>
          </Link>
          <Link to="/contact" className="btn btn-lumina-glass">
            <i className="bi bi-chat-quote me-1"></i>
            <span>Hubungi Kami</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound

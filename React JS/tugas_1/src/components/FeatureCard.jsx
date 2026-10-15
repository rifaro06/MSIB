/**
 * Component FeatureCard.
 * Menampilkan kartu kapabilitas/layanan studio menggunakan React Props.
 *
 * @param {Object} props
 * @param {string} props.icon - Class icon Bootstrap Icons
 * @param {string} props.gradient - Background gradient style untuk icon
 * @param {string} props.tag - Badge kategori kecil
 * @param {string} props.title - Judul layanan/kapabilitas
 * @param {string} props.description - Penjelasan komprehensif
 */
function FeatureCard({ icon, gradient, tag, title, description }) {
  return (
    <div className="glass-card service-card">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="service-icon-box" style={{ background: gradient }}>
          <i className={`bi ${icon} text-white`}></i>
        </div>
        {tag && (
          <span
            className="badge rounded-pill"
            style={{
              background: 'rgba(255,255,255,0.06)',
              color: '#cbd5e1',
              border: '1px solid rgba(255,255,255,0.12)',
              fontSize: '0.7rem',
              letterSpacing: '0.5px',
            }}
          >
            {tag}
          </span>
        )}
      </div>

      <h4 className="fw-bold text-white mb-2" style={{ letterSpacing: '-0.3px' }}>
        {title}
      </h4>
      <p className="text-secondary small mb-0 flex-grow-1" style={{ lineHeight: '1.65' }}>
        {description}
      </p>

      <div className="pt-3 mt-3 border-top" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <span className="text-primary small fw-semibold d-inline-flex align-items-center gap-1" style={{ cursor: 'pointer' }}>
          <span>Pelajari Selengkapnya</span>
          <i className="bi bi-arrow-right"></i>
        </span>
      </div>
    </div>
  )
}

export default FeatureCard

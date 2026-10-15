import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState(null)

  const validate = () => {
    const errs = {}
    if (!formData.name.trim()) {
      errs.name = 'Nama lengkap wajib diisi.'
    } else if (formData.name.trim().length < 3) {
      errs.name = 'Nama minimal berisi 3 karakter.'
    }

    if (!formData.email.trim()) {
      errs.email = 'Alamat email wajib diisi.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Format alamat email tidak valid (contoh: user@gmail.com).'
    }

    if (!formData.subject.trim()) {
      errs.subject = 'Kategori layanan/proyek wajib dipilih.'
    }

    if (!formData.message.trim()) {
      errs.message = 'Detail pesan/kebutuhan proyek tidak boleh kosong.'
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Pesan minimal berisi 10 karakter agar kebutuhan tersampaikan jelas.'
    }

    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const timestamp = new Date().toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    setSubmittedData({
      ...formData,
      timestamp,
    })
    setIsSubmitted(true)
    setErrors({})
  }

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
    setIsSubmitted(false)
    setSubmittedData(null)
    setErrors({})
  }

  return (
    <div className="contact-page py-5 animate-fade-in">
      <div className="container py-lg-4">
        {/* Header */}
        <div className="text-center mx-auto mb-5" style={{ maxWidth: '720px' }}>
          <div className="hero-pill">
            <i className="bi bi-chat-quote-fill text-warning"></i>
            <span>GET IN TOUCH &bull; START A COLLABORATION</span>
          </div>
          <h1 className="display-5 fw-extrabold text-white mt-1" style={{ letterSpacing: '-0.5px' }}>
            Mari Membangun <span className="text-gradient">Karya Luar Biasa</span>
          </h1>
          <p className="text-secondary small mt-2" style={{ lineHeight: '1.6' }}>
            Diskusikan visi produk digital, arsitektur antarmuka baru, atau ajukan pertanyaan Anda
            kepada tim Lumina Studio melalui formulir di bawah ini.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Left Column: Studio Headquarters */}
          <div className="col-lg-5">
            <div className="glass-card p-4 p-md-5 h-100 d-flex flex-column">
              <h4 className="fw-bold text-white mb-2 d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt-fill text-primary"></i>
                <span>Studio Headquarters</span>
              </h4>
              <p className="text-secondary small mb-4">
                Informasi di bawah ini merupakan data representasi studio percontohan (<em>placeholder</em>)
                yang disiapkan untuk rancangan halaman kontak profesional.
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="service-icon-box mb-0" style={{ width: '42px', height: '42px', fontSize: '1.2rem', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', flexShrink: 0 }}>
                      <i className="bi bi-building"></i>
                    </div>
                    <div>
                      <div className="fw-bold text-white small">Studio &amp; Kampus</div>
                      <div className="text-secondary small mt-1" style={{ fontSize: '0.82rem' }}>
                        STT Terpadu Nurul Fikri &bull; Lumina Studio Lab, Jl. Raya Lenteng Agung No. 20, Jakarta Selatan 12640
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="service-icon-box mb-0" style={{ width: '42px', height: '42px', fontSize: '1.2rem', background: 'linear-gradient(135deg, #06b6d4, #3b82f6)', flexShrink: 0 }}>
                      <i className="bi bi-envelope-at"></i>
                    </div>
                    <div>
                      <div className="fw-bold text-white small">Email Korespondensi</div>
                      <div className="text-secondary small mt-1" style={{ fontSize: '0.82rem' }}>
                        <a href="mailto:riezrafaroro@gmail.com" className="text-decoration-none text-info">
                          riezrafaroro@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="service-icon-box mb-0" style={{ width: '42px', height: '42px', fontSize: '1.2rem', background: 'linear-gradient(135deg, #ec4899, #8b5cf6)', flexShrink: 0 }}>
                      <i className="bi bi-telephone-inbound"></i>
                    </div>
                    <div>
                      <div className="fw-bold text-white small">Saluran Konsultasi</div>
                      <div className="text-secondary small mt-1" style={{ fontSize: '0.82rem' }}>
                        +62 812-3456-7890 (Direct Hotline / Sample)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="service-icon-box mb-0" style={{ width: '42px', height: '42px', fontSize: '1.2rem', background: 'linear-gradient(135deg, #10b981, #059669)', flexShrink: 0 }}>
                      <i className="bi bi-clock-history"></i>
                    </div>
                    <div>
                      <div className="fw-bold text-white small">Jam Operasional Studio</div>
                      <div className="text-secondary small mt-1" style={{ fontSize: '0.82rem' }}>
                        Senin &ndash; Jumat, 09:00 &ndash; 18:00 WIB
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="p-3 rounded-3 mt-auto small"
                style={{
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  color: '#c7d2fe',
                }}
              >
                <i className="bi bi-shield-check me-1 fw-bold"></i>
                <strong>SLA Respon:</strong> Tim kami merespons setiap inquiry dalam kurun waktu kurang dari 24 jam kerja.
              </div>
            </div>
          </div>

          {/* Right Column: Consultation Form */}
          <div className="col-lg-7">
            <div className="glass-card p-4 p-md-5">
              <h4 className="fw-bold text-white mb-1" style={{ letterSpacing: '-0.3px' }}>
                Kirimkan Brief Proyek Anda
              </h4>
              <p className="text-secondary small mb-4">
                Isi rincian kebutuhan Anda di bawah ini untuk memulai sesi konsultasi digital.
              </p>

              {isSubmitted && submittedData ? (
                <div className="animate-fade-in">
                  <div
                    className="p-4 rounded-4 mb-4"
                    style={{
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.35)',
                    }}
                  >
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <div className="rounded-circle d-flex align-items-center justify-content-center p-2 text-success" style={{ background: 'rgba(16, 185, 129, 0.2)', width: '44px', height: '44px' }}>
                        <i className="bi bi-check-circle-fill fs-4"></i>
                      </div>
                      <div>
                        <h5 className="fw-bold text-white mb-0">Inquiry Berhasil Diterima!</h5>
                        <div className="small text-secondary">Waktu: {submittedData.timestamp}</div>
                      </div>
                    </div>
                    <p className="small text-light mb-2 mt-3" style={{ lineHeight: '1.6' }}>
                      Terima kasih, <strong>{submittedData.name}</strong>! Pesan Anda mengenai{' '}
                      <strong>{submittedData.subject}</strong> telah berhasil diproses oleh state komponen React.
                    </p>
                    <div className="small text-secondary border-top pt-2 mt-2" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                      <em>Catatan:</em> Karena proyek berfokus pada frontend React tanpa backend server,
                      pengiriman ini disimulasikan secara aman dan transparan pada state lokal aplikasi.
                    </div>
                  </div>

                  <div className="p-3 rounded-3 mb-4" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <h6 className="fw-bold text-white border-bottom pb-2 mb-3 small" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                      Ringkasan Brief yang Dikirim:
                    </h6>
                    <div className="row g-2 small">
                      <div className="col-sm-4 text-secondary">Nama Pengirim:</div>
                      <div className="col-sm-8 fw-semibold text-white">{submittedData.name}</div>
                      <div className="col-sm-4 text-secondary">Email Bisnis:</div>
                      <div className="col-sm-8 fw-semibold text-white">{submittedData.email}</div>
                      <div className="col-sm-4 text-secondary">Kategori Layanan:</div>
                      <div className="col-sm-8 fw-semibold text-info">{submittedData.subject}</div>
                      <div className="col-sm-4 text-secondary">Detail Kebutuhan:</div>
                      <div className="col-sm-8 text-white p-2 rounded" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        {submittedData.message}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-lumina-glass w-100 justify-content-center"
                    onClick={handleReset}
                  >
                    <i className="bi bi-arrow-clockwise me-1"></i>
                    <span>Kirim Pesan / Brief Lainnya</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Nama */}
                  <div className="mb-3">
                    <label htmlFor="nameInput" className="lumina-label">
                      Nama Lengkap <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text lumina-input border-end-0">
                        <i className="bi bi-person text-secondary"></i>
                      </span>
                      <input
                        type="text"
                        className={`form-control lumina-input border-start-0 ${errors.name ? 'is-invalid' : ''}`}
                        id="nameInput"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Contoh: Riez Rafa Roro"
                      />
                    </div>
                    {errors.name && <div className="text-danger small mt-1">{errors.name}</div>}
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="emailInput" className="lumina-label">
                      Email Bisnis / Pribadi <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text lumina-input border-end-0">
                        <i className="bi bi-envelope text-secondary"></i>
                      </span>
                      <input
                        type="email"
                        className={`form-control lumina-input border-start-0 ${errors.email ? 'is-invalid' : ''}`}
                        id="emailInput"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                      />
                    </div>
                    {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
                  </div>

                  {/* Kategori Layanan */}
                  <div className="mb-3">
                    <label htmlFor="subjectSelect" className="lumina-label">
                      Kategori Layanan / Kebutuhan <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text lumina-input border-end-0">
                        <i className="bi bi-stars text-secondary"></i>
                      </span>
                      <select
                        className={`form-select lumina-input border-start-0 ${errors.subject ? 'is-invalid' : ''}`}
                        id="subjectSelect"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        style={{ color: formData.subject ? '#ffffff' : '#64748b' }}
                      >
                        <option value="" style={{ background: '#0f172a', color: '#64748b' }}>-- Pilih Layanan Lumina Studio --</option>
                        <option value="Modern Web & React Architecture" style={{ background: '#0f172a', color: '#ffffff' }}>Modern Web &amp; React Architecture</option>
                        <option value="Immersive UI/UX & Glassmorphism Design" style={{ background: '#0f172a', color: '#ffffff' }}>Immersive UI/UX &amp; Glassmorphism Design</option>
                        <option value="AI Workflows & Cloud Product Engineering" style={{ background: '#0f172a', color: '#ffffff' }}>AI Workflows &amp; Cloud Product Engineering</option>
                        <option value="Konsultasi Proyek & Kolaborasi Umum" style={{ background: '#0f172a', color: '#ffffff' }}>Konsultasi Proyek &amp; Kolaborasi Umum</option>
                      </select>
                    </div>
                    {errors.subject && <div className="text-danger small mt-1">{errors.subject}</div>}
                  </div>

                  {/* Pesan */}
                  <div className="mb-4">
                    <label htmlFor="messageInput" className="lumina-label">
                      Detail Kebutuhan Proyek <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className={`form-control lumina-input ${errors.message ? 'is-invalid' : ''}`}
                      id="messageInput"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Jelaskan kebutuhan proyek, fitur utama yang diinginkan, atau pertanyaan Anda..."
                    ></textarea>
                    {errors.message && <div className="text-danger small mt-1">{errors.message}</div>}
                    <div className="d-flex justify-content-between small text-secondary mt-1" style={{ fontSize: '0.78rem' }}>
                      <span>Karakter minimal: 10</span>
                      <span>Saat ini: {formData.message.length}</span>
                    </div>
                  </div>

                  {/* Tombol Kirim & Bersihkan */}
                  <div className="d-flex gap-3">
                    <button
                      type="submit"
                      className="btn btn-lumina-primary flex-grow-1 justify-content-center"
                    >
                      <i className="bi bi-send-fill"></i>
                      <span>Kirim Inquiry (Simulasi)</span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-lumina-glass px-4"
                      onClick={() => {
                        setFormData({ name: '', email: '', subject: '', message: '' })
                        setErrors({})
                      }}
                    >
                      Reset
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

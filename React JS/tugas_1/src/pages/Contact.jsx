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
      errs.subject = 'Kategori pertanyaan wajib dipilih.'
    }

    if (!formData.message.trim()) {
      errs.message = 'Detail pertanyaan atau pesan tidak boleh kosong.'
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Pesan minimal berisi 10 karakter agar informasi tersampaikan jelas.'
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
      setIsSubmitted(false)
      return
    }

    setSubmittedData({
      ...formData,
      timestamp: new Date().toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
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
            <i className="bi bi-chat-dots-fill text-cyan"></i>
            <span>BOOKSALES &bull; CUSTOMER SUPPORT &amp; INQUIRY</span>
          </div>
          <h1 className="display-5 fw-extrabold text-white mt-1" style={{ letterSpacing: '-0.5px' }}>
            Hubungi Tim <span className="text-gradient">Book Sales</span>
          </h1>
          <p className="text-secondary small mt-2" style={{ lineHeight: '1.6' }}>
            Ada pertanyaan seputar ketersediaan buku, rekomendasi belajar pemrograman, atau pemesanan dalam jumlah banyak?
            Kirimkan pesan Anda melalui formulir di bawah ini.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Left Column: Bookstore Headquarters */}
          <div className="col-lg-5">
            <div className="glass-card p-4 p-md-5 h-100 d-flex flex-column">
              <h4 className="fw-bold text-white mb-2 d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt-fill text-primary"></i>
                <span>Toko Pusat Book Sales</span>
              </h4>
              <p className="text-secondary small mb-4">
                Informasi di bawah ini merupakan data representasi toko buku percontohan (<em>placeholder</em>)
                yang disiapkan untuk rancangan halaman kontak profesional.
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="p-3 rounded-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="d-flex align-items-start gap-3">
                    <div className="service-icon-box mb-0" style={{ width: '42px', height: '42px', fontSize: '1.2rem', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', flexShrink: 0 }}>
                      <i className="bi bi-shop"></i>
                    </div>
                    <div>
                      <div className="fw-bold text-white small">Lokasi Toko &amp; Kampus</div>
                      <div className="text-secondary small mt-1" style={{ fontSize: '0.82rem' }}>
                        STT Terpadu Nurul Fikri &bull; Book Sales Hub, Jl. Raya Lenteng Agung No. 20, Jakarta Selatan 12640
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
                      <div className="fw-bold text-white small">Email Layanan Pelanggan</div>
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
                      <div className="fw-bold text-white small">Saluran Konsultasi Buku</div>
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
                      <div className="fw-bold text-white small">Jam Operasional Toko</div>
                      <div className="text-secondary small mt-1" style={{ fontSize: '0.82rem' }}>
                        Senin &ndash; Sabtu, 08:00 &ndash; 20:00 WIB
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
                <strong>SLA Respon Cepat:</strong> Tim kurator Book Sales merespons setiap pertanyaan dalam waktu kurang dari 24 jam kerja.
              </div>
            </div>
          </div>

          {/* Right Column: Book Inquiry Form */}
          <div className="col-lg-7">
            <div className="glass-card p-4 p-md-5">
              <h4 className="fw-bold text-white mb-1" style={{ letterSpacing: '-0.3px' }}>
                Kirimkan Pertanyaan atau Pesanan
              </h4>
              <p className="text-secondary small mb-4">
                Isi formulir berikut untuk menanyakan rekomendasi atau ketersediaan buku impian Anda.
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
                        <h5 className="fw-bold text-white mb-0">Pertanyaan Berhasil Dikirim!</h5>
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
                      Ringkasan Pesan yang Dikirim:
                    </h6>
                    <div className="row g-2 small">
                      <div className="col-sm-4 text-secondary">Nama Pengirim:</div>
                      <div className="col-sm-8 fw-semibold text-white">{submittedData.name}</div>
                      <div className="col-sm-4 text-secondary">Email:</div>
                      <div className="col-sm-8 fw-semibold text-white">{submittedData.email}</div>
                      <div className="col-sm-4 text-secondary">Kategori Pertanyaan:</div>
                      <div className="col-sm-8 fw-semibold text-info">{submittedData.subject}</div>
                      <div className="col-sm-4 text-secondary">Detail Pesan:</div>
                      <div className="col-sm-8 text-white p-2 rounded" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        {submittedData.message}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-outline-secondary text-white btn-sm"
                    onClick={handleReset}
                  >
                    <i className="bi bi-arrow-clockwise me-1"></i> Kirim Pesan Baru
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="name" className="form-label text-white small fw-semibold">
                        Nama Lengkap <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-dark border-secondary border-opacity-25 text-secondary">
                          <i className="bi bi-person"></i>
                        </span>
                        <input
                          type="text"
                          className={`form-control lumina-input ${errors.name ? 'is-invalid' : ''}`}
                          id="name"
                          name="name"
                          placeholder="Contoh: Riez Rafa Roro"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.name && <div className="text-danger small mt-1">{errors.name}</div>}
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label text-white small fw-semibold">
                        Email Aktif <span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-dark border-secondary border-opacity-25 text-secondary">
                          <i className="bi bi-envelope"></i>
                        </span>
                        <input
                          type="email"
                          className={`form-control lumina-input ${errors.email ? 'is-invalid' : ''}`}
                          id="email"
                          name="email"
                          placeholder="name@company.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      {errors.email && <div className="text-danger small mt-1">{errors.email}</div>}
                    </div>

                    <div className="col-12">
                      <label htmlFor="subject" className="form-label text-white small fw-semibold">
                        Kategori Pertanyaan <span className="text-danger">*</span>
                      </label>
                      <select
                        className={`form-select lumina-input ${errors.subject ? 'is-invalid' : ''}`}
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="">-- Pilih Topik Pertanyaan Book Sales --</option>
                        <option value="Pemesanan Buku / Order">Pemesanan Buku / Order</option>
                        <option value="Ketersediaan Stok Judul Tertentu">Ketersediaan Stok Judul Tertentu</option>
                        <option value="Rekomendasi Buku Coding & Framework">Rekomendasi Buku Coding &amp; Framework</option>
                        <option value="Pengadaan Buku Komunitas / Kampus">Pengadaan Buku Komunitas / Kampus</option>
                        <option value="Kerjasama Publikasi Penulis">Kerjasama Publikasi Penulis</option>
                      </select>
                      {errors.subject && <div className="text-danger small mt-1">{errors.subject}</div>}
                    </div>

                    <div className="col-12">
                      <label htmlFor="message" className="form-label text-white small fw-semibold">
                        Detail Pesan <span className="text-danger">*</span>
                      </label>
                      <textarea
                        className={`form-control lumina-input ${errors.message ? 'is-invalid' : ''}`}
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Tuliskan judul buku yang Anda cari atau pertanyaan yang ingin disampaikan..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && <div className="text-danger small mt-1">{errors.message}</div>}
                    </div>

                    <div className="col-12 d-flex flex-wrap gap-2 pt-2">
                      <button type="submit" className="btn btn-lumina-primary px-4 py-2">
                        <i className="bi bi-send-fill me-2"></i> Kirim Pesan
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-secondary text-white px-3 py-2"
                        onClick={handleReset}
                      >
                        Reset Form
                      </button>
                    </div>
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

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
  const [submissionHistory, setSubmissionHistory] = useState(null)

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
      errs.subject = 'Subjek pesan wajib dipilih atau diisi.'
    }

    if (!formData.message.trim()) {
      errs.message = 'Isi pesan tidak boleh kosong.'
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Pesan minimal berisi 10 karakter agar maksud tersampaikan jelas.'
    }

    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for current field when user types
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

    // Set success feedback state (Frontend simulation)
    const timestamp = new Date().toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
    setSubmissionHistory({
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
    setSubmissionHistory(null)
    setErrors({})
  }

  return (
    <div className="contact-page py-5 animate-fade-in">
      <div className="container py-lg-3">
        {/* Header */}
        <div className="text-center max-w-700 mx-auto mb-5">
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-2 rounded-pill bg-primary-subtle text-primary border border-primary-subtle small fw-semibold">
            <i className="bi bi-envelope-paper-fill"></i>
            <span>Contact Us</span>
          </div>
          <h1 className="display-5 fw-bold text-dark mt-1">Hubungi Kami</h1>
          <p className="lead text-secondary">
            Kirimkan tanggapan, pertanyaan, atau pesan kolaborasi Anda melalui formulir di bawah ini.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Left Column: Contact Info Cards */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-sm rounded-4 p-4 contact-card h-100">
              <h4 className="fw-bold text-dark mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-geo-alt-fill text-primary"></i>
                <span>Informasi Kontak</span>
              </h4>
              <p className="text-secondary small mb-4">
                Informasi di bawah ini merupakan data contoh (<em>placeholder</em>) yang disediakan
                sebagai pelengkap rancangan halaman kontak.
              </p>

              <div className="d-flex flex-column gap-3 mb-4">
                <div className="d-flex align-items-start gap-3 p-3 bg-light rounded-3">
                  <div className="icon-badge bg-primary text-white rounded-circle p-2 fs-5 mb-0" style={{ width: '42px', height: '42px' }}>
                    <i className="bi bi-building"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark">Alamat Kampus</h6>
                    <p className="text-secondary small mb-0">
                      STT Terpadu Nurul Fikri, Jl. Raya Lenteng Agung No. 20, Jakarta Selatan, DKI Jakarta 12640
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 p-3 bg-light rounded-3">
                  <div className="icon-badge bg-success text-white rounded-circle p-2 fs-5 mb-0" style={{ width: '42px', height: '42px' }}>
                    <i className="bi bi-envelope-at"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark">Email Mahasiswa</h6>
                    <p className="text-secondary small mb-0">
                      <a href="mailto:riezrafaroro@gmail.com" className="text-decoration-none text-secondary">
                        riezrafaroro@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 p-3 bg-light rounded-3">
                  <div className="icon-badge bg-warning text-dark rounded-circle p-2 fs-5 mb-0" style={{ width: '42px', height: '42px' }}>
                    <i className="bi bi-telephone-inbound"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark">Nomor Telepon</h6>
                    <p className="text-secondary small mb-0">+62 812-3456-7890 (Contoh)</p>
                  </div>
                </div>

                <div className="d-flex align-items-start gap-3 p-3 bg-light rounded-3">
                  <div className="icon-badge bg-info text-dark rounded-circle p-2 fs-5 mb-0" style={{ width: '42px', height: '42px' }}>
                    <i className="bi bi-clock-history"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1 text-dark">Waktu Operasional</h6>
                    <p className="text-secondary small mb-0">Senin &ndash; Jumat, 08:00 &ndash; 17:00 WIB</p>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-primary-subtle text-primary border border-primary-subtle rounded-3 small mt-auto">
                <i className="bi bi-shield-check me-1 fw-bold"></i>
                <strong>Catatan Validasi:</strong> Formulir dilengkapi validasi React state untuk
                memastikan nama, email, subjek, dan panjang pesan valid sebelum dikirim.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form & Simulated Submission */}
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm rounded-4 p-4 contact-card">
              <h4 className="fw-bold text-dark mb-1">Kirimkan Pesan Anda</h4>
              <p className="text-secondary small mb-4">
                Lengkapi seluruh kolom formulir di bawah ini dengan benar.
              </p>

              {isSubmitted && submissionHistory ? (
                <div className="animate-fade-in">
                  <div className="alert alert-success border-success-subtle shadow-sm rounded-3 p-3 mb-4">
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <i className="bi bi-check-circle-fill fs-4 text-success"></i>
                      <h5 className="alert-heading fw-bold mb-0">Pesan Simulasi Berhasil Terkirim!</h5>
                    </div>
                    <p className="small mb-2 text-dark">
                      Terima kasih, <strong>{submissionHistory.name}</strong>. Pesan Anda telah berhasil
                      diproses oleh state aplikasi React pada pukul <strong>{submissionHistory.timestamp}</strong>.
                    </p>
                    <div className="small text-body-secondary border-top pt-2">
                      <em>Catatan:</em> Karena proyek berfokus pada frontend React tanpa backend server,
                      pengiriman ini disimulasikan secara aman pada state lokal komponen.
                    </div>
                  </div>

                  <div className="card bg-light border p-3 rounded-3 mb-4">
                    <h6 className="fw-bold text-dark border-bottom pb-2 mb-3">Ringkasan Data Terkirim:</h6>
                    <div className="row g-2 small">
                      <div className="col-sm-4 text-secondary">Nama Pengirim:</div>
                      <div className="col-sm-8 fw-semibold text-dark">{submissionHistory.name}</div>
                      <div className="col-sm-4 text-secondary">Email:</div>
                      <div className="col-sm-8 fw-semibold text-dark">{submissionHistory.email}</div>
                      <div className="col-sm-4 text-secondary">Subjek:</div>
                      <div className="col-sm-8 fw-semibold text-dark">{submissionHistory.subject}</div>
                      <div className="col-sm-4 text-secondary">Isi Pesan:</div>
                      <div className="col-sm-8 text-dark bg-white p-2 rounded border">{submissionHistory.message}</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-outline-primary rounded-pill w-100"
                    onClick={handleReset}
                  >
                    <i className="bi bi-arrow-clockwise me-1"></i>
                    Kirim Pesan Lainnya (Reset Form)
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Nama Lengkap */}
                  <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label fw-semibold small text-dark">
                      Nama Lengkap <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light text-secondary">
                        <i className="bi bi-person"></i>
                      </span>
                      <input
                        type="text"
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="nameInput"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Masukkan nama lengkap Anda"
                      />
                      {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label fw-semibold small text-dark">
                      Alamat Email <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light text-secondary">
                        <i className="bi bi-envelope"></i>
                      </span>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="emailInput"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="contoh@gmail.com"
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="form-text small">Email digunakan untuk simulasi konfirmasi balasan.</div>
                  </div>

                  {/* Subjek */}
                  <div className="mb-3">
                    <label htmlFor="subjectSelect" className="form-label fw-semibold small text-dark">
                      Subjek Pesan <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-light text-secondary">
                        <i className="bi bi-chat-quote"></i>
                      </span>
                      <select
                        className={`form-select ${errors.subject ? 'is-invalid' : ''}`}
                        id="subjectSelect"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      >
                        <option value="">-- Pilih Kategori Subjek --</option>
                        <option value="Pertanyaan Tugas React JS">Pertanyaan Tugas React JS</option>
                        <option value="Kolaborasi Proyek Frontend">Kolaborasi Proyek Frontend</option>
                        <option value="Masukan dan Feedback Website">Masukan dan Feedback Website</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                      {errors.subject && <div className="invalid-feedback">{errors.subject}</div>}
                    </div>
                  </div>

                  {/* Pesan */}
                  <div className="mb-4">
                    <label htmlFor="messageInput" className="form-label fw-semibold small text-dark">
                      Isi Pesan <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      id="messageInput"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tuliskan pesan atau pertanyaan Anda di sini (minimal 10 karakter)..."
                    ></textarea>
                    {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                    <div className="form-text small">
                      Jumlah karakter saat ini: {formData.message.length}
                    </div>
                  </div>

                  {/* Tombol Kirim & Reset */}
                  <div className="d-flex gap-2">
                    <button
                      type="submit"
                      className="btn btn-primary px-4 py-2 rounded-pill shadow-sm d-inline-flex align-items-center gap-2 flex-grow-1 justify-content-center"
                    >
                      <i className="bi bi-send-fill"></i>
                      <span>Kirim Pesan (Simulasi)</span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-secondary px-3 py-2 rounded-pill"
                      onClick={() => {
                        setFormData({ name: '', email: '', subject: '', message: '' })
                        setErrors({})
                      }}
                    >
                      Bersihkan
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

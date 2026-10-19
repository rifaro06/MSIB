import { useState } from 'react';

/**
 * Component AddBookModal.
 * Mengimplementasikan form penambahan data buku memanfaatkan React Hooks (useState)
 * untuk memenuhi instruksi poin 7 (Nilai Tambahan).
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Status visibilitas modal
 * @param {Function} props.onClose - Handler menutup modal
 * @param {Function} props.onAddBook - Handler menambahkan objek buku baru ke state
 */
export default function AddBookModal({ isOpen, onClose, onAddBook }) {
  // 1. Deklarasi React Hooks (useState) untuk mengelola form input
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState(new Date().getFullYear());
  const [category, setCategory] = useState('Web Development');
  const [price, setPrice] = useState('Rp 120.000');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  // Preset gambar teknologi untuk kemudahan pengujian
  const imagePresets = [
    { label: 'Coding / JS', url: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&w=600&q=80' },
    { label: 'React / Tech', url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=600&q=80' },
    { label: 'Design UI/UX', url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80' },
    { label: 'Cloud / Data', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80' },
  ];

  const validate = () => {
    const err = {};
    if (!title.trim() || title.trim().length < 3) {
      err.title = 'Judul buku minimal 3 karakter.';
    }
    if (!author.trim() || author.trim().length < 3) {
      err.author = 'Nama penulis minimal 3 karakter.';
    }
    const yearNum = Number(year);
    if (!year || isNaN(yearNum) || yearNum < 1900 || yearNum > 2099) {
      err.year = 'Tahun terbit harus antara 1900 - 2099.';
    }
    if (!description.trim() || description.trim().length < 10) {
      err.description = 'Deskripsi buku minimal 10 karakter.';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Buat objek data buku baru
    const newBook = {
      id: Date.now(),
      title: title.trim(),
      author: author.trim(),
      year: Number(year),
      category,
      price: price.trim() || 'Rp 100.000',
      rating: 5.0,
      description: description.trim(),
      image: image.trim() || imagePresets[0].url
    };

    // Panggil handler penambahan data pada state utama
    onAddBook(newBook);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      // Reset form input
      setTitle('');
      setAuthor('');
      setYear(new Date().getFullYear());
      setCategory('Web Development');
      setPrice('Rp 120.000');
      setDescription('');
      setImage('');
      setErrors({});
      onClose();
    }, 900);
  };

  return (
    <div className="modal-backdrop-custom d-flex justify-content-center align-items-center p-3">
      <div className="modal-card-custom glass-card p-4 p-md-5 position-relative">
        {/* Tombol Tutup */}
        <button
          type="button"
          className="btn-close btn-close-white position-absolute top-0 end-0 m-4"
          onClick={onClose}
          aria-label="Close"
        ></button>

        <div className="d-flex align-items-center gap-2 mb-2">
          <span className="badge rounded-pill bg-primary bg-opacity-25 text-primary px-3 py-2 border border-primary border-opacity-25">
            <i className="bi bi-magic me-1"></i> React Hooks (useState)
          </span>
          <span className="badge rounded-pill bg-success bg-opacity-25 text-success px-3 py-2 border border-success border-opacity-25">
            Nilai Tambah
          </span>
        </div>

        <h3 className="fw-bold text-white mb-1">Tambah Koleksi Buku Baru</h3>
        <p className="text-secondary small mb-4">
          Data yang ditambahkan akan langsung dimasukkan ke dalam state array buku menggunakan hooks secara reaktif.
        </p>

        {isSuccess && (
          <div className="alert alert-success border-0 bg-success bg-opacity-25 text-success d-flex align-items-center gap-2 py-2 mb-3">
            <i className="bi bi-check-circle-fill fs-5"></i>
            <div><strong>Berhasil!</strong> Buku baru telah ditambahkan ke katalog.</div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <div className="row g-3">
            {/* Judul Buku */}
            <div className="col-md-8">
              <label className="form-label text-white small fw-semibold">
                Judul Buku <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control lumina-input ${errors.title ? 'is-invalid' : ''}`}
                placeholder="Contoh: Belajar Next.js & Server Actions"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors.title && <div className="invalid-feedback">{errors.title}</div>}
            </div>

            {/* Tahun Terbit */}
            <div className="col-md-4">
              <label className="form-label text-white small fw-semibold">
                Tahun Terbit <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className={`form-control lumina-input ${errors.year ? 'is-invalid' : ''}`}
                placeholder="2024"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
              {errors.year && <div className="invalid-feedback">{errors.year}</div>}
            </div>

            {/* Penulis */}
            <div className="col-md-6">
              <label className="form-label text-white small fw-semibold">
                Penulis / Pengarang <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className={`form-control lumina-input ${errors.author ? 'is-invalid' : ''}`}
                placeholder="Contoh: Riez Rafa Roro"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
              {errors.author && <div className="invalid-feedback">{errors.author}</div>}
            </div>

            {/* Kategori */}
            <div className="col-md-6">
              <label className="form-label text-white small fw-semibold">
                Kategori Buku
              </label>
              <select
                className="form-select lumina-input"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Web Development">Web Development</option>
                <option value="Frontend Framework">Frontend Framework</option>
                <option value="Backend Development">Backend Development</option>
                <option value="Design & UX">Design & UX</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Database & Cloud">Database & Cloud</option>
                <option value="Data Science & AI">Data Science & AI</option>
              </select>
            </div>

            {/* Harga */}
            <div className="col-md-6">
              <label className="form-label text-white small fw-semibold">
                Harga
              </label>
              <input
                type="text"
                className="form-control lumina-input"
                placeholder="Rp 120.000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            {/* URL Gambar */}
            <div className="col-md-6">
              <label className="form-label text-white small fw-semibold">
                URL Gambar Cover (Opsional)
              </label>
              <input
                type="url"
                className="form-control lumina-input"
                placeholder="https://..."
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

            {/* Preset Pilihan Gambar */}
            <div className="col-12">
              <span className="text-secondary small d-block mb-2">Atau pilih preset cover cepat:</span>
              <div className="d-flex flex-wrap gap-2">
                {imagePresets.map((preset, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`btn btn-sm ${image === preset.url ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
                    style={{ fontSize: '0.75rem' }}
                    onClick={() => setImage(preset.url)}
                  >
                    <i className="bi bi-image me-1"></i> {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Deskripsi */}
            <div className="col-12">
              <label className="form-label text-white small fw-semibold">
                Deskripsi Singkat Buku <span className="text-danger">*</span>
              </label>
              <textarea
                className={`form-control lumina-input ${errors.description ? 'is-invalid' : ''}`}
                rows="3"
                placeholder="Tuliskan rangkuman isi dan topik yang dibahas dalam buku ini..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
              {errors.description && <div className="invalid-feedback">{errors.description}</div>}
            </div>
          </div>

          <div className="d-flex justify-content-end gap-2 mt-4 pt-3 border-top border-secondary border-opacity-25">
            <button
              type="button"
              className="btn btn-outline-secondary text-white px-4 py-2"
              onClick={onClose}
            >
              Batal
            </button>
            <button
              type="submit"
              className="btn btn-primary-gradient px-4 py-2 d-inline-flex align-items-center gap-2"
            >
              <i className="bi bi-plus-lg"></i>
              <span>Simpan Buku (useState)</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

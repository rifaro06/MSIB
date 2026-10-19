import { useState, useMemo } from 'react';
import { useOutletContext } from 'react-router-dom';
import BookCard from '../components/BookCard';

/**
 * Halaman Book (Katalog Buku).
 * Menampilkan seluruh koleksi buku menggunakan metode array .map()
 * serta menyediakan tombol aksi untuk menambahkan buku baru via React Hooks (useState).
 */
export default function Books() {
  const { books, onOpenAddModal } = useOutletContext();

  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Kategori unik yang tersedia dari data buku
  const categories = useMemo(() => {
    const cats = ['Semua'];
    books.forEach((b) => {
      if (b.category && !cats.includes(b.category)) {
        cats.push(b.category);
      }
    });
    return cats;
  }, [books]);

  // Filter buku berdasarkan kategori dan pencarian judul/penulis
  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchCat = selectedCategory === 'Semua' || book.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchQuery =
        book.title.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        (book.description && book.description.toLowerCase().includes(q));
      return matchCat && matchQuery;
    });
  }, [books, selectedCategory, searchQuery]);

  return (
    <div className="books-page py-5">
      <div className="container">
        {/* Header Halaman */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
          <div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="badge rounded-pill bg-primary bg-opacity-20 text-cyan border border-info border-opacity-25 px-3 py-2">
                <i className="bi bi-book-half me-1"></i> Halaman Book / Katalog Lengkap
              </span>
              <span className="badge rounded-pill bg-dark border border-secondary border-opacity-25 text-white px-3 py-2">
                {books.length} Buku Terdaftar
              </span>
            </div>
            <h1 className="fw-bold text-white mb-1">
              Katalog Koleksi Buku Pemrograman
            </h1>
            <p className="text-secondary small mb-0">
              Menampilkan data buku secara komprehensif menggunakan metode <code>books.map()</code> dengan dukungan state interaktif.
            </p>
          </div>

          {/* Tombol Nilai Tambah: Tambah Buku dengan Hooks */}
          <div>
            <button
              type="button"
              className="btn btn-primary-gradient px-4 py-3 d-inline-flex align-items-center gap-2 shadow-lg"
              onClick={onOpenAddModal}
            >
              <i className="bi bi-plus-circle-fill fs-5"></i>
              <span>+ Tambah Buku (Hooks)</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="glass-card p-3 p-md-4 mb-4">
          <div className="row g-3 align-items-center">
            {/* Input Pencarian */}
            <div className="col-md-5">
              <div className="input-group">
                <span className="input-group-text bg-dark border-secondary border-opacity-25 text-secondary">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control lumina-input"
                  placeholder="Cari judul buku, penulis, atau topik..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button
                    className="btn btn-dark border-secondary border-opacity-25 text-secondary"
                    type="button"
                    onClick={() => setSearchQuery('')}
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                )}
              </div>
            </div>

            {/* Kategori Filter Tabs */}
            <div className="col-md-7">
              <div className="d-flex flex-wrap gap-2 justify-content-md-end">
                {categories.map((cat, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`btn btn-sm ${
                      selectedCategory === cat ? 'btn-primary-gradient' : 'btn-dark border-secondary border-opacity-25 text-secondary'
                    }`}
                    style={{ fontSize: '0.8rem' }}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Ringkasan Hasil Filter */}
        <div className="d-flex justify-content-between align-items-center mb-3 text-secondary small">
          <div>
            Menampilkan <strong>{filteredBooks.length}</strong> dari total <strong>{books.length}</strong> buku.
          </div>
          {selectedCategory !== 'Semua' && (
            <div>
              Kategori aktif: <span className="text-cyan fw-semibold">{selectedCategory}</span>
            </div>
          )}
        </div>

        {/* Grid Render Data Buku Menggunakan Metode .map() */}
        {filteredBooks.length > 0 ? (
          <div className="row g-4">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="glass-card p-5 text-center my-4">
            <i className="bi bi-inbox text-secondary fs-1 d-block mb-3"></i>
            <h4 className="fw-bold text-white mb-2">Buku Tidak Ditemukan</h4>
            <p className="text-secondary small mb-4">
              Tidak ada buku yang sesuai dengan kriteria pencarian &quot;{searchQuery}&quot;.
            </p>
            <button
              type="button"
              className="btn btn-outline-cyan px-4 py-2"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Semua');
              }}
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

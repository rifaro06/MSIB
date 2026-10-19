import { useState } from 'react';

/**
 * Component BookCard.
 * Menampilkan kartu data buku yang di-render secara modular menggunakan metode .map().
 * 
 * @param {Object} props
 * @param {Object} props.book - Objek informasi buku
 * @param {Function} [props.onSelect] - Callback ketika kartu diklik
 */
export default function BookCard({ book, onSelect }) {
  const [imgError, setImgError] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Fallback image SVG jika gambar gagal dimuat
  const fallbackImg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect fill="%231e1b4b" width="600" height="400"/><text fill="%23a5b4fc" font-family="sans-serif" font-size="28" font-weight="bold" x="50%" y="45%" text-anchor="middle">BookSales</text><text fill="%23c7d2fe" font-family="sans-serif" font-size="16" x="50%" y="60%" text-anchor="middle">${encodeURIComponent(book.title)}</text></svg>`;

  return (
    <div className="col-lg-4 col-md-6">
      <div className="card h-100 book-card border-0">
        {/* Cover Image Container */}
        <div className="book-cover-wrapper position-relative overflow-hidden">
          <img
            src={imgError ? fallbackImg : book.image}
            alt={book.title}
            className="book-cover-img w-100"
            onError={() => setImgError(true)}
            loading="lazy"
          />
          {/* Overlay Gradient */}
          <div className="book-cover-overlay"></div>

          {/* Badges Top Left & Right */}
          <div className="position-absolute top-0 start-0 m-3 z-2">
            <span className="badge category-badge">
              <i className="bi bi-tag-fill me-1"></i>
              {book.category || 'Teknologi'}
            </span>
          </div>

          <div className="position-absolute top-0 end-0 m-3 z-2">
            <button
              type="button"
              className={`btn btn-bookmark-icon ${isBookmarked ? 'active text-warning' : 'text-white'}`}
              onClick={(e) => {
                e.stopPropagation();
                setIsBookmarked(!isBookmarked);
              }}
              title={isBookmarked ? 'Hapus dari Tersimpan' : 'Simpan Buku'}
              aria-label="Bookmark buku"
            >
              <i className={`bi ${isBookmarked ? 'bi-bookmark-star-fill' : 'bi-bookmark'}`}></i>
            </button>
          </div>

          {/* Year Badge Bottom Right */}
          <div className="position-absolute bottom-0 end-0 m-3 z-2">
            <span className="badge year-badge">
              <i className="bi bi-calendar-event me-1"></i>
              {book.year}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="card-body d-flex flex-column p-4">
          {/* Author & Rating */}
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="book-author text-truncate">
              <i className="bi bi-person-circle me-1 text-cyan"></i>
              {book.author}
            </span>
            <span className="book-rating badge bg-dark text-warning border border-secondary border-opacity-25">
              <i className="bi bi-star-fill me-1 text-warning"></i>
              {book.rating ? book.rating.toFixed(1) : '4.8'}
            </span>
          </div>

          {/* Title */}
          <h5 className="book-title fw-bold text-white mb-2" title={book.title}>
            {book.title}
          </h5>

          {/* Description */}
          <p className="book-description text-secondary small flex-grow-1 mb-3">
            {book.description}
          </p>

          {/* Footer Card: Price & Action */}
          <div className="d-flex justify-content-between align-items-center pt-3 mt-auto border-top border-secondary border-opacity-25">
            <div>
              <span className="text-secondary d-block" style={{ fontSize: '0.72rem' }}>Harga Buku</span>
              <span className="book-price fw-bold text-cyan">
                {book.price || 'Rp 99.000'}
              </span>
            </div>

            <button
              type="button"
              className="btn btn-sm btn-primary-gradient px-3 py-2 d-inline-flex align-items-center gap-1"
              onClick={() => onSelect && onSelect(book)}
            >
              <i className="bi bi-cart-plus"></i>
              <span>Pesan</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

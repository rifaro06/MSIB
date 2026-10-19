import { useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import AddBookModal from '../components/AddBookModal';
import initialBooks from '../Utils/books';

/**
 * RootLayout: Layout pembungkus utama aplikasi Book Sales.
 * Menyediakan Navbar terpadu, Outlet untuk perenderan rute anak,
 * modal penambahan buku, auto scroll-to-top, dan Footer penutup.
 */
export default function RootLayout() {
  const [books, setBooks] = useState(initialBooks);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchParams] = useSearchParams();

  const isModalActive = isAddModalOpen || searchParams.get('modal') === 'true';

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [newBook, ...prevBooks]);
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-obsidian text-white">
      <ScrollToTop />

      {/* Navigasi Utama */}
      <Navbar
        onOpenAddModal={() => setIsAddModalOpen(true)}
        bookCount={books.length}
      />

      {/* Konten Halaman (Child Routes) via Outlet context */}
      <main className="flex-grow-1">
        <Outlet
          context={{
            books,
            onAddBook: handleAddBook,
            onOpenAddModal: () => setIsAddModalOpen(true)
          }}
        />
      </main>

      {/* Modal Tambah Buku (React Hooks: useState) */}
      <AddBookModal
        isOpen={isModalActive}
        onClose={() => setIsAddModalOpen(false)}
        onAddBook={handleAddBook}
      />

      {/* Footer Penutup */}
      <Footer />
    </div>
  );
}

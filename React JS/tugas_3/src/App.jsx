import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Books from './pages/Books';
import NotFound from './pages/NotFound';

/**
 * Komponen Utama App.
 * Menyediakan struktur Declarative Routing untuk halaman Home dan Book
 * serta rute 404 penampung.
 */
export default function App() {
  return (
    <Routes>
      {/* 1. Layout Route: Menyediakan Navbar, Outlet, dan Footer */}
      <Route element={<RootLayout />}>
        {/* 2. Index Route: Halaman utama beranda saat path adalah "/" */}
        <Route index element={<Home />} />

        {/* 3. Child Routes: Halaman katalog buku (mendukung /books dan /book) */}
        <Route path="books" element={<Books />} />
        <Route path="book" element={<Books />} />

        {/* 4. Wildcard Catch-All Route: Penanganan 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

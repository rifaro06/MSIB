import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Books from './pages/Books';
import Team from './pages/Team';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

/**
 * Komponen Utama App — Book Sales.
 * Menyediakan struktur Declarative Routing (React Router 7) terpadu:
 * 1. Layout Route: <RootLayout /> (Navbar, Outlet, Modal Hooks, Footer)
 * 2. Index Route: <Home /> (/)
 * 3. Child Routes:
 *    - <Books /> (/books & /book)
 *    - <Team /> (/team)
 *    - <Contact /> (/contact)
 * 4. Wildcard Catch-All Route: <NotFound /> (*)
 */
export default function App() {
  return (
    <Routes>
      {/* 1. Layout Route */}
      <Route element={<RootLayout />}>
        {/* 2. Index Route */}
        <Route index element={<Home />} />

        {/* 3. Child Routes */}
        <Route path="books" element={<Books />} />
        <Route path="book" element={<Books />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />

        {/* 4. Wildcard Catch-All Route (404) */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

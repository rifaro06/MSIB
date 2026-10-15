import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Team from './pages/Team'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import './App.css'

/**
 * App Component.
 * Mengimplementasikan Declarative Routing berbasis React Router 7.
 * Mengikuti panduan resmi: https://reactrouter.com/start/declarative/routing
 *
 * Struktur Rute:
 * - Layout Route: RootLayout (Navbar + Outlet + Footer + ScrollToTop)
 *   ├── index ("/") -> Halaman Home
 *   ├── "team" ("/team") -> Halaman Team (Meet Our Creators)
 *   ├── "contact" ("/contact") -> Halaman Contact (Start A Project)
 *   └── "*" (Wildcard) -> Halaman 404 NotFound
 */
function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* Rute Utama / Beranda */}
        <Route index element={<Home />} />

        {/* Rute Halaman Team */}
        <Route path="team" element={<Team />} />

        {/* Rute Halaman Contact */}
        <Route path="contact" element={<Contact />} />

        {/* Wildcard 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

/**
 * RootLayout Component.
 * Mengimplementasikan Layout Route sesuai panduan resmi Declarative Routing React Router.
 * Layout membungkus Navbar, konten dinamis via <Outlet />, dan Footer.
 */
function RootLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Scroll to top otomatis saat rute berpindah */}
      <ScrollToTop />

      {/* Header / Navigasi Global */}
      <Navbar />

      {/* Area Konten Dinamis yang Dirender oleh Route Anak */}
      <main className="flex-grow-1">
        <Outlet />
      </main>

      {/* Footer Global */}
      <Footer />
    </div>
  )
}

export default RootLayout

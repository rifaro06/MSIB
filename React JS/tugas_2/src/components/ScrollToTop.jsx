import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * ScrollToTop Component.
 * Memastikan posisi window otomatis kembali ke atas (top: 0)
 * setiap kali URL pathname berpindah halaman.
 */
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return null
}

export default ScrollToTop

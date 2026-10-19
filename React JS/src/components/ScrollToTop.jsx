import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop helper component.
 * Secara otomatis menggulirkan viewport ke posisi teratas (x:0, y:0)
 * setiap kali rute berpindah halaman pada Single Page Application (SPA).
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
}

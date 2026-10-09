import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Team from './pages/Team'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').toLowerCase()
    if (['home', 'team', 'contact'].includes(hash)) {
      return hash
    }
    return 'home'
  }

  const [currentPage, setCurrentPage] = useState(getInitialPage)

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase()
      if (['home', 'team', 'contact'].includes(hash)) {
        setCurrentPage(hash)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.location.hash = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="flex-grow-1">
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'team' && <Team onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <Contact onNavigate={handleNavigate} />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  )
}

export default App

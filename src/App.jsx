import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Memberships from './components/Memberships'
import Equipment from './components/Equipment'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-dark text-white">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Memberships />
      <Equipment />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

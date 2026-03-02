import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDumbbell, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Membresías', href: '#membresias' },
    { name: 'Máquinas', href: '#maquinas' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen ? 'bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#inicio"
            className="flex items-center space-x-2 text-xl sm:text-2xl font-heading font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <FaDumbbell className="text-primary text-2xl sm:text-3xl" />
            <span className="text-gradient">ALPHA</span>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-primary transition-colors duration-300 font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300"
            >
              Únete Ahora
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 overflow-hidden bg-dark/90 backdrop-blur-md rounded-lg px-4"
            >
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-gray-300 hover:text-primary transition-colors text-base"
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="w-full mt-4 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Únete Ahora
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar

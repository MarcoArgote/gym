import { motion } from 'framer-motion'
import { FaDumbbell, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    
    
  };

  const socialMedia = [
    { icon: FaFacebook, href: '#', color: 'hover:text-blue-500' },
    { icon: FaInstagram, href: '#', color: 'hover:text-pink-500' },
    { icon: FaTwitter, href: '#', color: 'hover:text-blue-400' },
    { icon: FaYoutube, href: '#', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-dark-lighter border-t border-dark-light relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <FaDumbbell className="text-primary text-2xl sm:text-3xl" />
              <span className="text-xl sm:text-2xl font-heading font-bold text-gradient">ALPHA</span>
            </div>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">
              Transformando vidas a través del fitness desde 2014. Tu mejor versión te espera.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 ${social.color} transition-colors duration-300`}
                >
                  <social.icon className="text-xl sm:text-2xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-lg sm:text-xl font-heading font-bold mb-4 text-primary capitalize">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-dark-light text-center"
        >
          <p className="text-gray-400 flex flex-col sm:flex-row items-center justify-center gap-2 flex-wrap text-xs sm:text-sm px-4">
            <span>© {currentYear} ALPHA by team FERREL. Todos los derechos reservados.</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              Hecho con <FaHeart className="text-primary" /> para nuestra comunidad
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaTimes } from 'react-icons/fa'

const Contact = () => {
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Ubicación',
      info: 'Cochabamba, Bolivia',
      color: 'from-red-500 to-orange-500',
      action: () => window.open('https://www.google.com/maps/place/ALPHA+by+team+FERREL/@-17.363178,-66.170613,19z', '_blank')
    },
    {
      icon: FaPhone,
      title: 'Teléfono',
      info: '+591 4 123 4567',
      color: 'from-orange-500 to-yellow-500',
      action: () => window.open('https://wa.me/59141234567', '_blank')
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      info: 'info@alphaferrel.com',
      color: 'from-yellow-500 to-green-500',
      action: null
    },
    {
      icon: FaClock,
      title: 'Horario',
      info: 'Lun-Vie: 06:00-22:00 | Sáb: 08:00-16:00',
      color: 'from-green-500 to-teal-500',
      action: () => setShowScheduleModal(true)
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-20 bg-dark relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-4 px-4">
            <span className="text-gradient">CONTÁCTANOS</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4">Estamos aquí para ayudarte a comenzar tu transformación</p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              onClick={item.action}
              className={`bg-dark-light rounded-xl p-6 text-center border border-dark-lighter hover:border-primary transition-all duration-300 ${
                item.action ? 'cursor-pointer' : ''
              }`}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}
              >
                <item.icon className="text-white text-2xl" />
              </motion.div>
              <h3 className="font-bold text-base sm:text-lg mb-2">{item.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm break-words">{item.info}</p>
              {item.action && (
                <p className="text-primary text-xs mt-2 font-semibold">Click aquí</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-6">Envíanos un Mensaje</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu Nombre"
                  required
                  className="w-full bg-dark-light border border-dark-lighter focus:border-primary rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Tu Email"
                  required
                  className="w-full bg-dark-light border border-dark-lighter focus:border-primary rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Tu Teléfono"
                  className="w-full bg-dark-light border border-dark-lighter focus:border-primary rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tu Mensaje"
                  required
                  rows="5"
                  className="w-full bg-dark-light border border-dark-lighter focus:border-primary rounded-lg px-4 py-3 text-white placeholder-gray-500 transition-colors duration-300 focus:outline-none resize-none"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-primary to-orange-500 text-white py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300"
              >
                <FaPaperPlane />
                Enviar Mensaje
              </motion.button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden border-2 sm:border-4 border-dark-light"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327.47704830499214!2d-66.17061290593246!3d-17.36317761083561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e375da879e7529%3A0x65ddbdd4a85c5b7e!2sALPHA%20by%20team%20FERREL!5e0!3m2!1ses!2sbo!4v1772452054481!5m2!1ses!2sbo" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del gimnasio"
            />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(255, 107, 0, 0.3)",
                "0 0 40px rgba(255, 107, 0, 0.6)",
                "0 0 20px rgba(255, 107, 0, 0.3)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block bg-dark-light rounded-2xl p-6 sm:p-8 border border-primary/30 mx-4"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-4">
              ¿Listo para transformar tu vida?
            </h3>
            <p className="text-gray-400 mb-6 text-sm sm:text-base">Visítanos hoy y obtén tu primera semana gratis</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-orange-500 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300"
            >
              Reserva tu Visita
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Schedule Modal */}
      <AnimatePresence>
        {showScheduleModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowScheduleModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-dark-lighter rounded-2xl p-8 max-w-lg w-full border-2 border-primary relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowScheduleModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors"
              >
                <FaTimes className="text-2xl" />
              </button>

              {/* Title */}
              <div className="text-center mb-8">
                <FaClock className="text-primary text-5xl mx-auto mb-4" />
                <h3 className="text-3xl font-heading font-bold text-gradient">
                  Nuestros Horarios
                </h3>
              </div>

              {/* Schedule Items */}
              <div className="space-y-6">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="bg-dark rounded-xl p-6 border border-dark-light hover:border-primary transition-colors"
                >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl">🕕</span>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg">Lunes a Viernes</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">Días regulares</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right ml-8 sm:ml-0">
                    <p className="text-primary font-bold text-lg sm:text-xl">06:00 - 22:00</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-dark rounded-xl p-6 border border-dark-light hover:border-primary transition-colors"
                >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl">🕗</span>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg">Sábados</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">Fin de semana</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right ml-8 sm:ml-0">
                    <p className="text-primary font-bold text-lg sm:text-xl">08:00 - 16:00</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-dark rounded-xl p-6 border border-dark-light hover:border-primary transition-colors"
                >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl">🕘</span>
                    <div>
                      <h4 className="font-bold text-base sm:text-lg">Feriados</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">Días especiales</p>
                    </div>
                  </div>
                  <div className="text-left sm:text-right ml-8 sm:ml-0">
                    <p className="text-primary font-bold text-lg sm:text-xl">09:00 - 13:00</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Footer */}
              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm">
                  ¡Te esperamos en nuestro horario de atención!
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Contact

import { motion } from 'framer-motion'
import { useState } from 'react'

const Equipment = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const equipment = [
    {
      name: 'Mancuernas',
      description: 'Set completo de 5kg a 50kg',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
      category: 'Pesas Libres'
    },
    {
      name: 'Press de Banca',
      description: 'Estación profesional de press',
      image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&h=400&fit=crop',
      category: 'Fuerza'
    },
    {
      name: 'Poleas Ajustables',
      description: 'Sistema de poleas de última generación',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop',
      category: 'Máquinas'
    },
    {
      name: 'Rack de Sentadillas',
      description: 'Power rack profesional',
      image: 'https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=600&h=400&fit=crop',
      category: 'Fuerza'
    },
    {
      name: 'Caminadoras',
      description: 'Pantallas táctiles y programas personalizados',
      image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=400&fit=crop',
      category: 'Cardio'
    },
    {
      name: 'Bicicletas Spinning',
      description: 'Bike profesionales para spinning',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&h=400&fit=crop',
      category: 'Cardio'
    },
    {
      name: 'Máquina de Remo',
      description: 'Remo profesional con monitor',
      image: 'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?w=600&h=400&fit=crop',
      category: 'Cardio'
    },
    {
      name: 'Smith Machine',
      description: 'Máquina Smith multifuncional',
      image: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=600&h=400&fit=crop',
      category: 'Máquinas'
    },
    {
      name: 'Leg Press',
      description: 'Prensa de piernas 45 grados',
      image: 'https://images.unsplash.com/photo-1579758629938-03607ccdbaba?w=600&h=400&fit=crop',
      category: 'Piernas'
    },
    {
      name: 'Barras Olímpicas',
      description: 'Barras certificadas 20kg',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
      category: 'Pesas Libres'
    },
    {
      name: 'TRX y Funcional',
      description: 'Área de entrenamiento funcional',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop',
      category: 'Funcional'
    },
    {
      name: 'Banco Ajustable',
      description: 'Bancos profesionales multiángulo',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop',
      category: 'Accesorios'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="maquinas" className="py-20 bg-dark relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
          }}
          transition={{
            duration: 8,
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
            NUESTRAS <span className="text-gradient">MÁQUINAS</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4">El equipamiento más moderno para tu entrenamiento</p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto px-4"
        >
          {equipment.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(item)}
            >
              <div className="relative overflow-hidden rounded-xl bg-dark-lighter border-2 border-dark-light group-hover:border-primary transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                    <span className="bg-primary px-2 sm:px-3 py-1 rounded-full text-xs font-bold">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold mb-1 text-white">
                    {item.name}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Hover effect shine */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mt-20 px-4"
        >
          {[
            
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <motion.div
                className="text-3xl sm:text-4xl md:text-5xl font-black text-gradient mb-2"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255, 107, 0, 0.5)",
                    "0 0 40px rgba(255, 107, 0, 0.8)",
                    "0 0 20px rgba(255, 107, 0, 0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400 font-semibold text-xs sm:text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for full image view */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 sm:-top-12 right-0 text-white text-3xl sm:text-4xl hover:text-primary transition-colors z-10"
            >
              ×
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              className="w-full h-auto rounded-xl"
            />
            <div className="bg-dark-lighter rounded-b-xl p-4 sm:p-6 -mt-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold mb-2">{selectedImage.name}</h3>
              <p className="text-gray-400 text-sm sm:text-base">{selectedImage.description}</p>
              <span className="inline-block mt-4 bg-primary px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold">
                {selectedImage.category}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Equipment

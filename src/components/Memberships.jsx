import { motion } from 'framer-motion'
import { FaCheck, FaCrown, FaFire, FaStar } from 'react-icons/fa'

const Memberships = () => {
  const plans = [
    {
      name: 'BÁSICO',
      price: '200',
      icon: FaFire,
      color: 'from-gray-600 to-gray-800',
      features: [
        'Acceso al gimnasio',
        'Vestuarios y duchas',
        'Área de cardio',
        'Pesas libres',
        'Lun-Vie: 06:00-22:00'
      ],
      popular: false
    },
    {
      name: 'PRO',
      price: '350',
      icon: FaCrown,
      color: 'from-primary to-orange-600',
      features: [
        'Todo lo del plan Básico',
        'Clases grupales ilimitadas',
        'Entrenador personal 2x/mes',
        'Acceso a zona premium',
        'Nutricionista incluido',
        'Acceso todos los días'
      ],
      popular: true
    },
    {
      name: 'ÉLITE',
      price: '550',
      icon: FaStar,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Todo lo del plan Pro',
        'Entrenador personal ilimitado',
        'Plan nutricional personalizado',
        'Masajes deportivos',
        'Acceso a spa y sauna',
        'Estacionamiento VIP',
        'Invitados gratis 4x/mes'
      ],
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
    <section id="membresias" className="py-20 bg-dark-light relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
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
            NUESTRAS <span className="text-gradient">MEMBRESÍAS</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4">Elige el plan perfecto para ti</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ 
                y: -20,
                transition: { duration: 0.3 }
              }}
              className={`relative bg-dark-lighter rounded-2xl p-6 sm:p-8 ${
                plan.popular ? 'md:scale-105 lg:scale-110 md:z-10 border-2 border-primary' : 'border border-dark-light'
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm"
                >
                  MÁS POPULAR
                </motion.div>
              )}

              <div className="text-center mb-8">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-block p-4 rounded-full bg-gradient-to-br ${plan.color} mb-4`}
                >
                  <plan.icon className="text-white text-4xl" />
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2">{plan.name}</h3>
                <div className="flex items-center justify-center">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-gradient">Bs {plan.price}</span>
                  <span className="text-gray-400 ml-2 text-sm sm:text-base">/mes</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * idx }}
                    className="flex items-start"
                  >
                    <FaCheck className="text-primary flex-shrink-0 mt-1 mr-3 text-sm" />
                    <span className="text-gray-300 text-sm sm:text-base">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: plan.popular ? "0 0 30px rgba(255, 107, 0, 0.6)" : "0 0 20px rgba(255, 107, 0, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-full font-bold text-lg transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-orange-500 text-white'
                    : 'bg-dark border-2 border-primary text-primary hover:bg-primary hover:text-white'
                }`}
              >
                Seleccionar Plan
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">Sin compromisos • Cancela cuando quieras • Primera semana gratis</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Memberships

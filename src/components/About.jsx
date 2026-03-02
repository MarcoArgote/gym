import { motion } from 'framer-motion'
import { FaTrophy, FaUsers, FaAward, FaHeart } from 'react-icons/fa'

const About = () => {
  const values = [
    {
      icon: FaTrophy,
      title: 'Excelencia',
      description: 'Nos esforzamos por ofrecer la mejor experiencia en fitness'
    },
    {
      icon: FaUsers,
      title: 'Comunidad',
      description: 'Creamos un ambiente inclusivo y motivador para todos'
    },
    {
      icon: FaAward,
      title: 'Profesionalismo',
      description: 'Entrenadores certificados y personal altamente calificado'
    },
    {
      icon: FaHeart,
      title: 'Pasión',
      description: 'Amamos lo que hacemos y te ayudamos a amar el fitness'
    }
  ];

  const achievements = [
    { number: '10+', text: 'Años de experiencia' },
    { number: '5000+', text: 'Miembros activos' },
    { number: '30+', text: 'Entrenadores certificados' },
    { number: '98%', text: 'Satisfacción del cliente' }
  ];

  return (
    <section id="nosotros" className="py-20 bg-dark-light relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 rounded-full filter blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-4 px-4">
            SOBRE <span className="text-gradient">NOSOTROS</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
            Más que un gimnasio, somos tu compañero en el viaje hacia una vida más saludable
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative">
              <motion.div
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-primary to-transparent"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              />
              <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-4">Nuestra Historia</h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                Fundado en 2014, ALPHA by team FERREL nació de la visión de crear un espacio donde las personas 
                pudieran transformar no solo sus cuerpos, sino también sus mentes y estilos de vida.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                Comenzamos con un pequeño local y la gran pasión de nuestros fundadores. Hoy, somos 
                uno de los gimnasios más reconocidos de la región, con miles de historias de éxito 
                que nos motivan cada día.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Nuestro compromiso es proporcionar las mejores instalaciones, el mejor equipo y el 
                mejor ambiente para que alcances tus metas, sin importar cuál sea tu punto de partida.
              </p>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255, 107, 0, 0.3)"
                }}
                className="bg-dark rounded-xl p-6 border border-dark-lighter hover:border-primary transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block p-3 bg-primary/20 rounded-lg mb-4"
                >
                  <value.icon className="text-primary text-3xl" />
                </motion.div>
                <h4 className="text-lg sm:text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-gray-400 text-xs sm:text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto px-4"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.text}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.1 }}
              className="text-center p-4 sm:p-6 bg-dark rounded-xl border border-dark-lighter"
            >
              <motion.div
                className="text-3xl sm:text-4xl md:text-5xl font-black text-gradient mb-2"
                animate={{
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
              >
                {achievement.number}
              </motion.div>
              <div className="text-gray-400 font-semibold text-xs sm:text-sm">{achievement.text}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
         
        
        </motion.div>
      </div>
    </section>
  )
}

export default About

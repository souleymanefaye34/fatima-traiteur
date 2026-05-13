import { motion } from 'framer-motion'

const services = [
  {
    title: 'Traiteur Événementiel',
    desc: 'Mariages, baptêmes et cérémonies.',
    image:
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop',
  },

  {
    title: 'Déjeuners',
    desc: 'Menus variés chaque jour.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  },

  {
    title: 'Petit Déjeuner',
    desc: 'Disponible tous les jours dès 8h30.',
    image:
      'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1200&auto=format&fit=crop',
  },

  {
    title: 'Cocktails',
    desc: 'Boissons et cocktails pour événements.',
    image:
      'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop',
  },

  {
    title: 'Buffets',
    desc: 'Buffets modernes et élégants.',
    image:
      'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop',
  },

  {
    title: 'Réservations',
    desc: 'Réservez vos événements facilement.',
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 px-6 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-20">
          
          <p className="uppercase tracking-[6px] text-orange-500 mb-4 font-semibold">
            NOS SERVICES
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
            Une expérience
            <span className="text-orange-500"> unique</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[30px] bg-white shadow-xl hover:shadow-2xl transition duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden h-72">
                <img
                  src={service.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
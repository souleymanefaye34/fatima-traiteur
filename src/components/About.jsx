import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="rounded-[40px] shadow-2xl object-cover h-[600px] w-full"
          />

          <div className="absolute -bottom-8 -right-8 bg-orange-500 text-white p-8 rounded-3xl shadow-2xl">
            <h3 className="text-5xl font-black">8h30</h3>
            <p>Ouverture tous les jours</p>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[6px] text-orange-500 mb-4 font-semibold">
            À PROPOS
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-8">
            Une passion pour la
            <span className="text-orange-500"> cuisine</span>
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Fatima Traiteur vous accompagne dans vos événements avec des plats savoureux, des menus variés et un service professionnel.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Nous proposons également des déjeuners et petits déjeuners tous les jours dans une ambiance chaleureuse et conviviale.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-orange-50 p-6 rounded-3xl">
              <h3 className="text-4xl font-black text-orange-500 mb-2">
                +500
              </h3>

              <p className="text-gray-700 font-medium">
                Clients satisfaits
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-3xl">
              <h3 className="text-4xl font-black text-orange-500 mb-2">
                +100
              </h3>

              <p className="text-gray-700 font-medium">
                Événements réalisés
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
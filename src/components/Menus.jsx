import { motion } from 'framer-motion'

export default function Menus() {
  return (
    <section
      id="menus"
      className="py-28 px-6 bg-gradient-to-br from-orange-500 to-orange-700 text-white"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[5px] text-orange-200 mb-4">
            Menus Variés
          </p>

          <h2 className="text-5xl font-black leading-tight mb-8">
            Des plats différents chaque jour
          </h2>

          <p className="text-orange-100 text-lg leading-relaxed mb-8">
            Chez Fatima Traiteur, nous proposons des menus variés du lundi au vendredi ainsi qu’un service de petit déjeuner disponible tous les jours dès 8h30.
          </p>

          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl">
              🍽️ Déjeuners variés chaque jour
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl">
              ☕ Petit déjeuner disponible tous les jours
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl">
              🎉 Service traiteur pour événements
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="rounded-3xl shadow-2xl"
          />

          <div className="absolute -bottom-8 -left-8 bg-white text-orange-600 p-6 rounded-3xl shadow-2xl">
            <p className="text-4xl font-black">8h30</p>
            <p className="font-medium">Ouverture Tous Les Jours</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
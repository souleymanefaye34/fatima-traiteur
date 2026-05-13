import { CalendarDays, Coffee } from 'lucide-react'
import { motion } from 'framer-motion'

export default function EventSection() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-950 via-gray-900 to-orange-950 overflow-hidden">
      
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
        
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-orange-500 to-orange-700 p-8 md:p-10 text-white shadow-2xl"
        >
          {/* Glow */}
          <div className="absolute -top-16 -right-16 w-52 h-52 bg-white/10 rounded-full"></div>

          {/* Icon */}
          <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">
            <CalendarDays size={30} />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
            Organisez vos événements
          </h2>

          {/* Description */}
          <p className="text-orange-100 text-base md:text-lg leading-relaxed mb-6">
            Mariages, baptêmes, anniversaires, séminaires et cérémonies.
            Fatima Traiteur vous accompagne avec des prestations
            professionnelles et des menus adaptés.
          </p>

          {/* List */}
          <ul className="space-y-3 text-base mb-8">
            <li>• Menus personnalisés</li>
            <li>• Service traiteur professionnel</li>
            <li>• Buffets et cocktails</li>
            <li>• Organisation d’événements</li>
          </ul>

          {/* Button */}
          <button className="bg-white text-orange-600 px-6 py-3 rounded-full text-base font-bold shadow-xl hover:scale-105 transition duration-300">
            Réserver un événement
          </button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-orange-400 via-orange-500 to-amber-600 p-8 md:p-10 text-white shadow-2xl"
        >
          {/* Glow */}
          <div className="absolute -bottom-16 -left-16 w-52 h-52 bg-white/10 rounded-full"></div>

          {/* Icon */}
          <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-8">
            <Coffee size={30} />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
            Déjeuners & Petit déjeuner
          </h2>

          {/* Description */}
          <p className="text-orange-100 text-base md:text-lg leading-relaxed mb-6">
            Profitez chaque jour de menus variés et savoureux ainsi qu’un
            service de petit déjeuner disponible dès 8h30.
          </p>

          {/* List */}
          <ul className="space-y-3 text-base mb-8">
            <li>• Menus variés chaque jour</li>
            <li>• Jus naturels</li>
            <li>• Petit déjeuner complet</li>
            <li>• Service rapide et chaleureux</li>
          </ul>

          {/* Button */}
          <button className="bg-white text-orange-600 px-6 py-3 rounded-full text-base font-bold shadow-xl hover:scale-105 transition duration-300">
            Commander maintenant
          </button>
        </motion.div>
      </div>
    </section>
  )
}
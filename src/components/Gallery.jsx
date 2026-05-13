import { motion } from 'framer-motion'

const images = [
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="galerie" className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-20">
          <p className="text-4xl md:text-5xl text-orange-500">
            Galerie
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
            Nos Réalisations
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Découvrez quelques aperçus de nos plats, buffets et événements.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl shadow-xl group"
            >
              <img
                src={image}
                alt=""
                className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
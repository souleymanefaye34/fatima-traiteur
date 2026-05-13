import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

import { motion } from 'framer-motion'

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1600&auto=format&fit=crop',
    title: 'Fatima Traiteur',
    subtitle: 'Une différence dans la qualité',
    text: 'Déjeuners, petits déjeuners et services traiteur pour tous vos événements.',
  },

  {
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop',
    title: 'Menus Variés',
    subtitle: 'Chaque jour une nouvelle expérience',
    text: 'Découvrez des plats savoureux préparés avec passion.',
  },

  {
    image:
      'https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1600&auto=format&fit=crop',
    title: 'Service Traiteur',
    subtitle: 'Mariages • Baptêmes • Événements',
    text: 'Nous vous accompagnons dans tous vos événements avec professionnalisme.',
  },
]

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            
            <div
              className="h-screen bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
                
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="max-w-5xl"
                >
                  <p className="uppercase tracking-[6px] text-orange-400 mb-6 text-sm md:text-base font-semibold">
                    {slide.subtitle}
                  </p>

                  <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-2xl text-gray-200 leading-relaxed mb-10">
                    {slide.text}
                  </p>

                  <div className="flex flex-col md:flex-row gap-5 justify-center">
                    
                    <a
                      href="#contact"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-2xl transition duration-300"
                    >
                      Commander Maintenant
                    </a>

                    <a
                      href="#services"
                      className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-full text-lg font-bold transition duration-300"
                    >
                      Découvrir Nos Services
                    </a>

                  </div>
                </motion.div>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
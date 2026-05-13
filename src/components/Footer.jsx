import logo from '../assets/logo fatima 2.png'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-700 via-orange-600 to-amber-500 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <div className="bg-white inline-block p-3 rounded-2xl mb-4 shadow-lg">
            <img
              src={logo}
              alt="Fatima Traiteur"
              className="w-40 h-40 object-contain"
            />
          </div>

          <p className="text-orange-100 leading-relaxed max-w-sm">
            L'art culinaire au service de vos événements.
            Une cuisine raffinée et authentique pour des moments inoubliables.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Liens rapides
          </h3>

          <div className="flex flex-col gap-3 text-orange-100">
            <a
              href="#accueil"
              className="hover:text-white transition duration-300"
            >
              Accueil
            </a>

            <a
              href="#services"
              className="hover:text-white transition duration-300"
            >
              Services
            </a>

            <a
              href="#galerie"
              className="hover:text-white transition duration-300"
            >
              Galerie
            </a>

            <a
              href="#menus"
              className="hover:text-white transition duration-300"
            >
              Menus
            </a>

            <a
              href="#contact"
              className="hover:text-white transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Contact
          </h3>

          <div className="space-y-3 text-orange-100">
            <p>📍 Sacré-Cœur 2 IPG</p>
            <p>📞 +221 77 517 35 39</p>
            <p>📞 +221 78 674 33 10</p>
          </div>
        </div>

        {/* Horaires */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            Horaires
          </h3>

          <p className="text-orange-100">
            Ouvert tous les jours à partir de 8h30.
          </p>
        </div>
      </div>

      <div className="border-t border-orange-300/30 mt-12 pt-8 text-center text-orange-100">
        © 2026 julio34 — Tous droits réservés
      </div>
    </footer>
  )
}
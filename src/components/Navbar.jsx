import { Menu } from 'lucide-react'
import logo from '../assets/logo fatima 2.png'
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
       <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="Fatima Traiteur"
    className="w-24 h-24 object-contain"
  />

  
</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <a href="#accueil" className="hover:text-orange-500 transition">
              Accueil
            </a>

            <a href="#services" className="hover:text-orange-500 transition">
              Services
            </a>

            <a href="#galerie" className="hover:text-orange-500 transition">
              Galerie
            </a>

            <a href="#menus" className="hover:text-orange-500 transition">
              Menus
            </a>

            <a href="#contact" className="hover:text-orange-500 transition">
              Contact
            </a>
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/221775173539"
              target="_blank"
              className="hidden md:flex bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full shadow-lg transition"
            >
              Commander
            </a>

            {/* Mobile Menu */}
            <button className="md:hidden">
              <Menu size={30} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
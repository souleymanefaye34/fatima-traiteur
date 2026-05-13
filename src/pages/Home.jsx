import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import Menus from '../components/Menus'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import EventSection from '../components/EventSection'
import About from '../components/About'
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <EventSection />  
      <Gallery />
<Menus />
<CTA />
<Footer />
<WhatsAppButton />
    </>
  )
}
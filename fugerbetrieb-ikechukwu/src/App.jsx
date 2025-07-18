import './App.scss'
import NavBar from './components/nav-bar'
import HeroSection from './sections/hero'
import AboutSection from './sections/mini-list'
import PortfolioSection from './sections/portfolio'
import ServicesSection from './sections/services'
import TestimonialsSection from './sections/testimonials'
import Footer from './components/footer'

function App() {

  return (
    <>
      <NavBar/>
      <main>
        <HeroSection/>
        <AboutSection/>
        <ServicesSection/>
        <PortfolioSection/>
        <TestimonialsSection/>
      </main>
      <Footer/>
    </>
  )
}

export default App

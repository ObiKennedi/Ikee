import './App.scss'
import NavBar from './components/nav-bar'
import HeroSection from './sections/hero'
import AboutSection from './sections/mini-list'
import ServicesSection from './sections/services'
import TestimonialsSection from './sections/testimonials'
import Footer from './components/footer'
import WhyChooseUs from './components/why-choose-us'
import ProjectsSection from './sections/portfolio'
import ContactSection from './sections/contact'

function App() {

  return (
    <>
      <NavBar/>
      <main>
        <HeroSection/>
        <WhyChooseUs/>
        <AboutSection/>
        <ServicesSection/>
        <ProjectsSection/>
        <TestimonialsSection/>
        <ContactSection/>
      </main>
      <Footer/>
    </>
  )
}

export default App

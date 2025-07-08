import './App.css'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import HowItWorksSection from './components/HowItWorksSection.jsx'
import Tournaments from './components/Tournaments.jsx'
import Footer from './components/Footer.jsx'


function App() {

  return (
    <>
      <div>
          <Header />
          <Hero />
          <HowItWorksSection />
          <Tournaments />
          <Footer />
      </div>
    </>
  )
}

export default App

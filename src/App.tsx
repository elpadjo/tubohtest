import Appointment from './components/Appointment'
import Header from './components/Header'
import Hero from './components/Hero'
import CategoryBased from './components/category/CategoryBased'
import HealthConcerns from './components/health_concerns/HealthConcerns'
import HowItWorks from './components/how_it_works/HowItWorks'
import Partners from './components/partners/Partners'
import TopBookedTests from './components/top_booked_tests/TopBookedTests'

function App() {

  return (
    <main className="text-primary text-sm">
      <Header />
      <Hero />
      <HowItWorks />
      <HealthConcerns />
      <CategoryBased />
      <TopBookedTests />
      <Partners />
      <Appointment />
    </main>
  )
}

export default App

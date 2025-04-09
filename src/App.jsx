import Hero from './components/Hero'
import Features from './components/Features'
import LogoSlider from './components/LogoSlider'
import BusinessSteps from './components/BusinessSteps'
import Testimonial from './components/Testimonial'
import NetworkStats from './components/NetworkStats'
import Dashboard from './components/Dashboard'
import Vision from './components/Vision'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import Review from './components/Review'
import SocialProof from './components/SocialProof'

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Patterns */}
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="circle-pattern circle-1"></div>
          <div className="circle-pattern circle-2"></div>
          <div className="circle-pattern circle-3"></div>
          <div className="circle-pattern circle-4"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-radial"></div>
      </div>

      <Navigation />
      <Hero />
      <LogoSlider />
      <Profile />
      <Features />
      <Review />
      <NetworkStats />
      <Dashboard />
      <BusinessSteps />
      <Vision />
      <SocialProof />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
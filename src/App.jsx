import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Hero from './components/Hero';
import Features from './components/Features';
import LogoSlider from './components/LogoSlider';
import BusinessSteps from './components/BusinessSteps';
import Testimonial from './components/Testimonial';
import NetworkStats from './components/NetworkStats';
import Dashboard from './components/Dashboard';
import Vision from './components/Vision';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import Review from './components/Review';
import SocialProof from './components/SocialProof';
import Login from './components/Login';
import PersonalInfo from './components/PersonalInfo';
import ProfilePicture from './components/ProfilePicture';
import SelectRole from './components/onboarding/SelectRole';
import LookingFor from './components/onboarding/LookingFor';
import BusinessStage from './components/onboarding/BusinessStage';
import Interests from './components/onboarding/Interests';
import Skills from './components/onboarding/Skills';
import HomeFeed from './components/home/HomeFeed';
import FindCoFounder from './components/FindCoFounder';
import FindAdvisor from './components/FindAdvisor';
import Messages from './components/Messages';
import MessageChat from './components/MessageChat';
import Notifications from './components/Notifications';
import Settings from './components/Settings';
import Explore from './components/Explore';
import Premium from './components/Premium';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-black text-white overflow-hidden">
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
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding/founder" element={<PersonalInfo />} />
        <Route path="/onboarding/picture" element={<ProfilePicture />} />
        <Route path="/onboarding/role" element={<SelectRole />} />
        <Route path="/onboarding/looking-for" element={<LookingFor />} />
        <Route path="/onboarding/business-stage" element={<BusinessStage />} />
        <Route path="/onboarding/interests" element={<Interests />} />
        <Route path="/onboarding/skills" element={<Skills />} />
        <Route path="/home" element={<Navigate to="/explore" replace />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/find-cofounder" element={<FindCoFounder />} />
        <Route path="/find-advisor" element={<FindAdvisor />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages/chat/:id" element={<MessageChat />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </Router>
  );
}

export default App;
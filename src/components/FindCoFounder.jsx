import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Header from './home/Header';
import LeftSidebar from './home/LeftSidebar';
import ConnectModal from './ConnectModal';

const generateFounder = (id) => ({
  id,
  name: [
    "Gabriel Tomescu", "Marie Eric", "Larry Gordon", "Vivek Wairy",
    "Saviour Eking", "Jeetu Prajapati", "Abdul Bashir", "Sal Harsha",
    "Mustafa Troan", "Riley Bell", "Rajesh Sharma", "Damien Huzard",
    "Sarah Chen", "Michael Rodriguez", "Emily Watson"
  ][id % 15],
  title: [
    "Design Leader Interested ...",
    "Founder & CEO of Eddie P...",
    "There Is No Success Witho...",
    "Passionate About Startups...",
    "Building The Future Of...",
    "Tech Innovator & Entre...",
    "Blockchain Developer Se...",
    "AI Researcher Looking...",
    "Product Manager With...",
    "Serial Entrepreneur In..."
  ][id % 10],
  image: `https://i.pravatar.cc/150?img=${id + 10}`,
  verified: Math.random() > 0.5
});

const founders = Array.from({ length: 20 }, (_, i) => generateFounder(i + 1));

export default function FindCoFounder() {
  const [showConnectModal, setShowConnectModal] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState(null);
  const navigate = useNavigate();

  const handleConnect = (founder) => {
    setSelectedFounder(founder);
    setShowConnectModal(true);
  };

  const handleMessage = (founder) => {
    navigate(`/messages/chat/${founder.id}`, { state: { conversation: founder } });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />

      <div className="max-w-7xl mx-auto px-4 pt-20">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="hidden lg:block w-1/4 sticky top-20 h-[calc(100vh-5rem)]">
            <LeftSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Find Your CoFounder</h1>
              <button className="px-4 py-1 bg-transparent border border-gray-600 rounded-full text-sm hover:border-[#0475DC]">
                Reset
              </button>
            </div>

            {/* Filter Pills */}
            <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
              <button className="px-6 py-2 bg-[#0475DC] rounded-full text-sm font-medium whitespace-nowrap">
                Roles
              </button>
              <button className="px-6 py-2 bg-[#1A1A1A] rounded-full text-sm font-medium hover:bg-[#2A2A2A] whitespace-nowrap">
                Location
              </button>
              <button className="px-6 py-2 bg-[#1A1A1A] rounded-full text-sm font-medium hover:bg-[#2A2A2A] whitespace-nowrap">
                Startup Stage
              </button>
              <button className="px-6 py-2 bg-[#1A1A1A] rounded-full text-sm font-medium hover:bg-[#2A2A2A] whitespace-nowrap">
                Skills
              </button>
            </div>

            {/* Role Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-[#1A1A1A] p-6 rounded-lg flex flex-col items-center justify-center hover:bg-[#2A2A2A] cursor-pointer">
                <div className="text-4xl mb-2">👤</div>
                <div className="text-lg font-medium">Founder</div>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg flex flex-col items-center justify-center hover:bg-[#2A2A2A] cursor-pointer">
                <div className="text-4xl mb-2">💼</div>
                <div className="text-lg font-medium">Investor</div>
              </div>
              <div className="bg-[#1A1A1A] p-6 rounded-lg flex flex-col items-center justify-center hover:bg-[#2A2A2A] cursor-pointer">
                <div className="text-4xl mb-2">🎓</div>
                <div className="text-lg font-medium">Intern</div>
              </div>
            </div>

            {/* Founders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {founders.map(founder => (
                <motion.div
                  key={founder.id}
                  className="bg-[#1A1A1A] rounded-lg p-4 hover:bg-[#2A2A2A]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-12 h-12 rounded-full"
                      />
                      {founder.verified && (
                        <div className="absolute -top-1 -right-1 bg-[#0475DC] rounded-full w-4 h-4 flex items-center justify-center">
                          <span className="text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">{founder.name}</h3>
                      <p className="text-gray-400 text-xs">{founder.title}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleMessage(founder)}
                      className="flex-1 px-3 py-1.5 bg-transparent border border-gray-600 rounded-full text-xs hover:border-[#0475DC]"
                    >
                      Message
                    </button>
                    <button
                      onClick={() => handleConnect(founder)}
                      className="flex-1 px-3 py-1.5 bg-[#0475DC] rounded-full text-xs hover:bg-[#0475DC]/90"
                    >
                      Connect
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-8 mb-8">
              <button className="text-gray-400 hover:text-white">Previous</button>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-[#0475DC] text-white">1</button>
                <button className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white hover:bg-[#2A2A2A]">2</button>
                <button className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white hover:bg-[#2A2A2A]">3</button>
                <button className="w-8 h-8 rounded-full bg-[#1A1A1A] text-white hover:bg-[#2A2A2A]">4</button>
              </div>
              <button className="text-[#0475DC] hover:text-[#0475DC]/80">Next</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <ConnectModal
        isOpen={showConnectModal}
        onClose={() => setShowConnectModal(false)}
        userName={selectedFounder?.name || ''}
      />
    </div>
  );
}
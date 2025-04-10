import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Header from './home/Header';
import LeftSidebar from './home/LeftSidebar';

const categories = [
  'Artificial Intelligence',
  'Telecommunications',
  'Startups',
  'Mobile Communications',
  'Digital Marketing',
  'Business Strategy'
];

const advisors = [
  {
    id: 1,
    name: "Jason Lim",
    title: "AI Tech Developer",
    expertise: "Artificial Intelligence & More",
    image: "https://i.pravatar.cc/150?img=21",
    hourlyRate: "$150/hour",
    verified: true
  },
  {
    id: 2,
    name: "Rohit Singh",
    title: "CMO at Nextflow",
    expertise: "Startups & More",
    image: "https://i.pravatar.cc/150?img=22",
    hourlyRate: "$200/hour",
    verified: true
  },
  {
    id: 3,
    name: "Bung",
    title: "Analyst",
    expertise: "Startups & More",
    image: "https://i.pravatar.cc/150?img=23",
    hourlyRate: "$175/hour",
    verified: true
  },
  {
    id: 4,
    name: "Manas Luthra",
    title: "Founding Engineer",
    expertise: "Mobile Development & More",
    image: "https://i.pravatar.cc/150?img=24",
    hourlyRate: "$180/hour",
    verified: true
  },
  {
    id: 5,
    name: "Nikhil Kassetty",
    title: "Software Engineer at Tesla Inc",
    expertise: "AI & Machine Learning",
    image: "https://i.pravatar.cc/150?img=25",
    hourlyRate: "$250/hour",
    verified: true
  },
  {
    id: 6,
    name: "Ab Sunil",
    title: "Co-Founder at airCFO",
    expertise: "Business Strategy & More",
    image: "https://i.pravatar.cc/150?img=26",
    hourlyRate: "$220/hour",
    verified: true
  }
];

export default function FindAdvisor() {
  const [selectedCategory, setSelectedCategory] = useState('Artificial Intelligence');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />

      {/* Mobile Menu Button */}
      <button
        className="fixed bottom-4 right-4 lg:hidden z-50 bg-[#0475DC] p-3 rounded-full shadow-lg"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-black/90 z-40 lg:hidden">
          <div className="p-4 h-full overflow-y-auto">
            <LeftSidebar />
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 pt-20">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="hidden lg:block w-1/4 sticky top-20 h-[calc(100vh-5rem)]">
            <LeftSidebar />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold mb-2">Book The World's Most In-Demand Experts</h1>
                <p className="text-gray-400">Connect with industry leaders and accelerate your growth</p>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-1 bg-[#0475DC] rounded-full text-sm">
                  Sort By
                </button>
                <button className="px-4 py-1 bg-transparent border border-gray-600 rounded-full text-sm hover:border-[#0475DC]">
                  Reset
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="flex overflow-x-auto gap-4 pb-4 mb-8 scrollbar-hide">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full whitespace-nowrap ${selectedCategory === category
                    ? 'bg-[#0475DC] text-white'
                    : 'bg-[#1A1A1A] text-gray-300 hover:bg-[#2A2A2A]'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Advisors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advisors.map(advisor => (
                <motion.div
                  key={advisor.id}
                  className="bg-[#1A1A1A] rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <img
                        src={advisor.image}
                        alt={advisor.name}
                        className="w-16 h-16 rounded-full"
                      />
                      {advisor.verified && (
                        <div className="absolute -top-1 -right-1 bg-[#0475DC] rounded-full w-4 h-4 flex items-center justify-center">
                          <span className="text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{advisor.name}</h3>
                      <p className="text-gray-400 text-sm">{advisor.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300 mb-4">{advisor.expertise}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0475DC] font-medium">{advisor.hourlyRate}</span>
                    <button className="px-6 py-2 bg-[#0475DC] text-white rounded-full hover:bg-[#0475DC]/90">
                      Book Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-8 mb-8">
              <button className="text-gray-400 hover:text-white">Previous</button>
              <div className="hidden sm:flex gap-2">
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
    </div>
  );
}
import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Header from './home/Header';
import LeftSidebar from './home/LeftSidebar';

const founders = [
  {
    id: 1,
    name: "Gabriel Tomescu",
    title: "Design Leader Interested ...",
    image: "https://i.pravatar.cc/150?img=11",
    verified: true
  },
  {
    id: 2,
    name: "Marie Eric",
    title: "Founder & CEO of Eddie P...",
    image: "https://i.pravatar.cc/150?img=12",
    verified: true
  },
  {
    id: 3,
    name: "Larry Gordon",
    title: "There Is No Success Witho...",
    image: "https://i.pravatar.cc/150?img=13",
    verified: true
  },
  {
    id: 4,
    name: "Vivek Wairy",
    title: "Passionate About Startups...",
    image: "https://i.pravatar.cc/150?img=14",
    verified: true
  },
  {
    id: 5,
    name: "Saviour Eking",
    title: "I'm Here To Build And Les...",
    image: "https://i.pravatar.cc/150?img=15",
    verified: true
  },
  {
    id: 6,
    name: "Jeetu Prajapati",
    title: "My Name Is Jeetu Prajapat...",
    image: "https://i.pravatar.cc/150?img=16",
    verified: true
  },
  {
    id: 7,
    name: "Abdul Bashir Abdul Zahir",
    title: "Building The Future, Sca...",
    image: "https://i.pravatar.cc/150?img=17",
    verified: true
  },
  {
    id: 8,
    name: "Sal Harsha",
    title: "Best Defensive For A Bran...",
    image: "https://i.pravatar.cc/150?img=18",
    verified: true
  },
  {
    id: 9,
    name: "Mustafa Troan",
    title: "Communication In Harm...",
    image: "https://i.pravatar.cc/150?img=19",
    verified: true
  },
  {
    id: 10,
    name: "Riley Bell",
    title: "Searching For CTO Co-Foun...",
    image: "https://i.pravatar.cc/150?img=20",
    verified: true
  },
  {
    id: 11,
    name: "Rajesh Sharma",
    title: "Building Travel Products ...",
    image: "https://i.pravatar.cc/150?img=21",
    verified: true
  },
  {
    id: 12,
    name: "Damien Huzard",
    title: "The All-In-One Solution F...",
    image: "https://i.pravatar.cc/150?img=22",
    verified: true
  }
];

export default function FindCoFounder() {
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
                    <button className="flex-1 px-3 py-1.5 bg-transparent border border-gray-600 rounded-full text-xs hover:border-[#0475DC]">
                      Message
                    </button>
                    <button className="flex-1 px-3 py-1.5 bg-[#0475DC] rounded-full text-xs hover:bg-[#0475DC]/90">
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
    </div>
  );
}
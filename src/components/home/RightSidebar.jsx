import { motion } from 'framer-motion';

export default function RightSidebar() {
  const suggestedConnections = [
    {
      name: 'Sarah Chen',
      role: 'Product Designer',
      avatar: 'https://i.pravatar.cc/150?u=sarah',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Full Stack Developer',
      avatar: 'https://i.pravatar.cc/150?u=michael',
    },
    {
      name: 'Emily Watson',
      role: 'Marketing Specialist',
      avatar: 'https://i.pravatar.cc/150?u=emily',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Premium Banner */}
      <motion.div
        className="bg-gradient-to-r from-[#0475DC] to-[#0056A4] rounded-lg p-6 text-white"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="font-semibold text-lg mb-2">Upgrade to Premium</h3>
        <p className="text-sm mb-4">Get access to exclusive features and connect with more founders</p>
        <button className="bg-white text-[#0475DC] px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90">
          Learn More
        </button>
      </motion.div>

      {/* Suggested Connections */}
      <div className="bg-[#1A1A1A] rounded-lg p-4">
        <h3 className="font-semibold mb-4">Suggested Connections</h3>
        <div className="space-y-4">
          {suggestedConnections.map((connection) => (
            <motion.div
              key={connection.name}
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              <img
                src={connection.avatar}
                alt={connection.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <h4 className="font-medium">{connection.name}</h4>
                <p className="text-sm text-gray-400">{connection.role}</p>
              </div>
              <button className="text-[#0475DC] hover:bg-[#0475DC]/10 p-2 rounded-full">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Trending Topics */}
      <div className="bg-[#1A1A1A] rounded-lg p-4">
        <h3 className="font-semibold mb-4">Trending Topics</h3>
        <div className="space-y-3">
          {['#StartupLife', '#TechInnovation', '#Entrepreneurship', '#VentureCapital'].map((topic) => (
            <motion.div
              key={topic}
              className="flex items-center justify-between hover:bg-[#2A2A2A] p-2 rounded-lg cursor-pointer"
              whileHover={{ x: 5 }}
            >
              <span>{topic}</span>
              <span className="text-sm text-gray-400">1.2k posts</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
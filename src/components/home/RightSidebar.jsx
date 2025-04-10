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
    <div className="space-y-6 overflow-y-auto h-full pr-4 -mr-4 sidebar-scroll">
      {/* Premium Banner */}
      <motion.div
        className="bg-gradient-to-r from-[#0475DC] to-[#0056A4] rounded-lg p-6 text-white backdrop-blur-lg border border-white/5"
        whileHover={{ scale: 1.02 }}
      >
        <h3 className="font-semibold text-lg mb-2">Upgrade to Premium</h3>
        <p className="text-sm mb-4">Get access to exclusive features and connect with more founders</p>
        <button className="bg-white text-[#0475DC] px-4 py-2 rounded-full text-sm font-medium hover:bg-opacity-90">
          Learn More
        </button>
      </motion.div>

      {/* Advertisement */}
      <motion.div
        className="bg-[#1A1A1A] rounded-lg overflow-hidden backdrop-blur-lg border border-white/5"
        whileHover={{ scale: 1.02 }}
      >
        <div className="relative">
          <img
            src="https://picsum.photos/seed/ad/400/200"
            alt="Advertisement"
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
            <div>
              <h3 className="text-lg font-semibold">Startup Conference 2025</h3>
              <p className="text-sm text-gray-300">Join the biggest startup event of the year</p>
            </div>
          </div>
        </div>
        <div className="p-4">
          <button className="w-full bg-[#0475DC] text-white py-2 rounded-lg hover:bg-[#0475DC]/90">
            Register Now
          </button>
        </div>
      </motion.div>

      {/* Suggested Connections */}
      <div className="bg-[#1A1A1A] rounded-lg p-6 backdrop-blur-lg border border-white/5">
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
      <div className="bg-[#1A1A1A] rounded-lg p-6 backdrop-blur-lg border border-white/5">
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

      {/* Recent Activity */}
      <div className="bg-[#1A1A1A] rounded-lg p-6 backdrop-blur-lg border border-white/5">
        <h3 className="font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            {
              user: 'Alex Morgan',
              action: 'liked your post',
              time: '2h ago',
              avatar: 'https://i.pravatar.cc/150?u=alex'
            },
            {
              user: 'Jessica Lee',
              action: 'commented on your post',
              time: '4h ago',
              avatar: 'https://i.pravatar.cc/150?u=jessica'
            },
            {
              user: 'David Kim',
              action: 'shared your post',
              time: '6h ago',
              avatar: 'https://i.pravatar.cc/150?u=david'
            }
          ].map((activity, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              whileHover={{ x: 5 }}
            >
              <img
                src={activity.avatar}
                alt={activity.user}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm">
                  <span className="font-medium">{activity.user}</span>
                  {' '}{activity.action}
                </p>
                <span className="text-xs text-gray-400">{activity.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
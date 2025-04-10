import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

export default function LeftSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: '🔍', label: 'Explore', count: null, path: '/explore' },
    { icon: '👥', label: 'Find a CoFounder', count: null, path: '/find-cofounder' },
    { icon: '👨‍💼', label: 'Find an Advisor', count: null, path: '/find-advisor' },
    { icon: '💬', label: 'Messages', count: 3, path: '/messages' },
    { icon: '🔔', label: 'Notifications', count: 5, path: '/notifications' },
    { icon: '⚙️', label: 'Settings', count: null, path: '/settings' },
  ];

  return (
    <div className="bg-[#1A1A1A] rounded-lg p-4">
      {/* Profile Section */}
      <div className="text-center mb-6">
        <img
          src="https://i.pravatar.cc/150?u=user"
          alt="Profile"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h3 className="font-semibold text-lg">John Doe</h3>
        <p className="text-gray-400 text-sm">Founder & Developer</p>
      </div>

      {/* Stats */}
      <div className="flex justify-around mb-6 text-center">
        <div>
          <p className="font-semibold">28</p>
          <p className="text-gray-400 text-sm">Connections</p>
        </div>
        <div>
          <p className="font-semibold">12</p>
          <p className="text-gray-400 text-sm">Views</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="space-y-2">
        {menuItems.map((item) => (
          <motion.button
            key={item.label}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${location.pathname === item.path
              ? 'bg-[#0475DC] text-white'
              : 'hover:bg-[#2A2A2A] text-gray-300'
              }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </div>
            {item.count && (
              <span className={`text-xs px-2 py-1 rounded-full ${location.pathname === item.path
                ? 'bg-white/20'
                : 'bg-[#0475DC]'
                }`}>
                {item.count}
              </span>
            )}
          </motion.button>
        ))}
      </nav>
    </div>
  );
}
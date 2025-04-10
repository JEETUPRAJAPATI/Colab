import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function LeftSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeFilters, setActiveFilters] = useState({});

  const menuItems = [
    { icon: '🔍', label: 'Explore', count: null, path: '/explore' },
    { icon: '👥', label: 'Find a CoFounder', count: null, path: '/find-cofounder' },
    { icon: '👨‍💼', label: 'Find an Advisor', count: null, path: '/find-advisor' },
    { icon: '💬', label: 'Messages', count: 3, path: '/messages' },
    { icon: '🔔', label: 'Notifications', count: 5, path: '/notifications' },
    { icon: '⚙️', label: 'Settings', count: null, path: '/settings' },
  ];

  const filters = [
    {
      name: 'Role',
      options: [
        { id: 'founder', label: 'Founder' },
        { id: 'investor', label: 'Investor' },
        { id: 'advisor', label: 'Advisor' },
        { id: 'developer', label: 'Developer' }
      ]
    },
    {
      name: 'Location',
      options: [
        { id: 'us', label: 'United States' },
        { id: 'europe', label: 'Europe' },
        { id: 'asia', label: 'Asia' },
        { id: 'remote', label: 'Remote' }
      ]
    },
    {
      name: 'Industry',
      options: [
        { id: 'tech', label: 'Technology' },
        { id: 'health', label: 'Healthcare' },
        { id: 'finance', label: 'Finance' },
        { id: 'education', label: 'Education' }
      ]
    },
    {
      name: 'Stage',
      options: [
        { id: 'idea', label: 'Idea' },
        { id: 'mvp', label: 'MVP' },
        { id: 'growth', label: 'Growth' },
        { id: 'scale', label: 'Scale' }
      ]
    }
  ];

  const toggleFilter = (category, id) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [id]: !prev[category]?.[id]
      }
    }));
  };

  const isFilterActive = (category, id) => {
    return activeFilters[category]?.[id] || false;
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters).reduce((count, category) => {
      return count + Object.values(category || {}).filter(Boolean).length;
    }, 0);
  };

  return (
    <div className="space-y-6 overflow-y-auto h-full pr-4 -mr-4">
      {/* Profile Section */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 backdrop-blur-lg border border-white/5">
        <div className="text-center mb-6">
          <div className="relative inline-block">
            <img
              src="https://i.pravatar.cc/150?u=user"
              alt="Profile"
              className="w-20 h-20 rounded-full ring-4 ring-[#0475DC]/20"
            />
            <div className="absolute bottom-0 right-0 bg-[#0475DC] w-6 h-6 rounded-full flex items-center justify-center text-sm border-2 border-[#1A1A1A]">
              ✓
            </div>
          </div>
          <h3 className="font-semibold text-lg mt-4">John Doe</h3>
          <p className="text-gray-400 text-sm">Founder & Developer</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white/5 rounded-lg p-3 text-center backdrop-blur-lg">
            <p className="font-semibold text-xl">28</p>
            <p className="text-gray-400 text-sm">Connections</p>
          </div>
          <div className="bg-white/5 rounded-lg p-3 text-center backdrop-blur-lg">
            <p className="font-semibold text-xl">12</p>
            <p className="text-gray-400 text-sm">Views</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <motion.button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${location.pathname === item.path
                ? 'bg-gradient-to-r from-[#0475DC] to-[#0475DC]/80 text-white shadow-lg shadow-[#0475DC]/20'
                : 'hover:bg-white/5 text-gray-300'
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

      {/* Filters Section */}
      <div className="bg-[#1A1A1A] rounded-xl p-6 backdrop-blur-lg border border-white/5">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold">Filters</h3>
          {getActiveFilterCount() > 0 && (
            <span className="text-xs bg-[#0475DC] px-2 py-1 rounded-full">
              {getActiveFilterCount()} active
            </span>
          )}
        </div>

        <div className="space-y-6">
          {filters.map((filter) => (
            <div key={filter.name} className="space-y-3">
              <h4 className="text-sm font-medium text-gray-400">{filter.name}</h4>
              <div className="flex flex-wrap gap-2">
                {filter.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => toggleFilter(filter.name, option.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${isFilterActive(filter.name, option.id)
                      ? 'bg-[#0475DC] text-white shadow-lg shadow-[#0475DC]/20'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                      }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <div className="flex gap-2 pt-4 border-t border-white/5">
            <button
              onClick={() => setActiveFilters({})}
              className="flex-1 py-2 px-4 rounded-lg bg-white/5 text-sm hover:bg-white/10 transition-colors"
            >
              Reset
            </button>
            <button
              className="flex-1 py-2 px-4 rounded-lg bg-[#0475DC] text-sm hover:bg-[#0475DC]/90 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
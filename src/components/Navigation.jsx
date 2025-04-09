import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();
  
  return (
    <nav className="fixed w-full top-0 z-50 bg-transparent py-6">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/assets/images/home-page/logo.png"
            alt="Logo"
            className="h-8"
          />
        </div>
        <div className="flex gap-4 items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/login')}
            className="px-6 py-2 text-white/80 hover:text-white font-medium transition-colors"
          >
            Login
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/find-cofounder')}
            className="px-6 py-2 bg-transparent border border-[#FF6B6B] text-white rounded-full hover:bg-[#FF6B6B] transition-all duration-300 font-medium"
          >
            Find a CoFounder
          </motion.button>
        </div>
      </div>
    </nav>
  );
}
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(360deg, rgba(185, 8, 118, 0.21), rgba(3, 1, 2, 0))',
            }}
          />
          
          {/* Animated circles */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 border border-purple-500/20 rounded-full"
              initial={{
                width: '100%',
                height: '100%',
                x: '-50%',
                y: '-50%',
                opacity: 0,
                scale: 1,
              }}
              animate={{
                opacity: [0, 0.5, 0],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: 8,
                delay: i * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="px-6 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <motion.img
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              src="/assets/images/home-page/logo.png"
              alt="Logo"
              className="h-8"
            />
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={() => navigate('/login')}
              className="px-6 py-2 text-white bg-transparent border border-purple-500 rounded-full hover:bg-purple-500/20 transition-all duration-300"
            >
              Login
            </motion.button>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="flex-grow container mx-auto px-6 flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Where developers{' '}
              <span className="text-pink-500">suffer together</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8"
            >
              We know how hard it is to be a developer. It doesn't have to be.
              Personalized news feed, dev community and search, much better than what's out there.
              Maybe ;)
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <button
                onClick={() => navigate('/login')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:from-purple-700 hover:to-pink-600 transition-all duration-300"
              >
                Get Started
              </button>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
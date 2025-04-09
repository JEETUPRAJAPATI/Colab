import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const stages = [
  { id: 'exit', icon: '💰', title: 'Exit' },
  { id: 'pre-revenue', icon: '📊', title: 'Pre-revenue' },
  { id: 'launch', icon: '🚀', title: 'Launch' },
  { id: 'early', icon: '🌱', title: 'Early' },
  { id: 'traction', icon: '📈', title: 'Traction' },
  { id: 'scale', icon: '🎯', title: 'Scale' },
  { id: 'concept', icon: '💡', title: 'Concept and Research' },
  { id: 'growth', icon: '📊', title: 'Growth' }
];

export default function BusinessStage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleSave = () => {
    if (selected) {
      navigate('/onboarding/interests');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-4"
         style={{
           background: 'linear-gradient(360deg, rgba(185, 8, 118, 0.21), rgba(3, 1, 2, 0))'
         }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full space-y-8 text-center"
      >
        <img
          src="/assets/images/home-page/logo.png"
          alt="CoFoundersLab"
          className="h-12 mx-auto"
        />

        <h2 className="text-4xl font-bold text-white mt-8">
          What Is Your Current Business Stage?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {stages.map((stage) => (
            <motion.button
              key={stage.id}
              onClick={() => setSelected(stage.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                selected === stage.id
                  ? 'border-[#0475DC] bg-[#0475DC]/10'
                  : 'border-gray-700 hover:border-gray-500'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-4xl mb-2">{stage.icon}</div>
              <div className="text-white font-medium">{stage.title}</div>
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={handleSave}
          disabled={!selected}
          className={`w-full max-w-md mx-auto mt-8 py-3 px-8 rounded-full text-white font-medium transition-all duration-300 ${
            selected
              ? 'bg-[#0475DC] hover:bg-[#0475DC]/90'
              : 'bg-gray-700 cursor-not-allowed'
          }`}
          whileHover={selected ? { scale: 1.02 } : {}}
          whileTap={selected ? { scale: 0.98 } : {}}
        >
          Save
        </motion.button>

        <div className="text-center mt-4">
          <a href="#" className="text-sm text-[#0475DC] hover:text-[#0475DC]/80">
            Something went wrong? Logout
          </a>
        </div>
      </motion.div>
    </div>
  );
}
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const options = [
  { id: 'team-member', icon: '👥', title: 'Team Member' },
  { id: 'cofounder', icon: '🤝', title: 'CoFounder' },
  { id: 'intern', icon: '🎓', title: 'Intern' },
  { id: 'startups', icon: '🚀', title: 'Startups' },
  { id: 'investor', icon: '💰', title: 'Investor' },
  { id: 'advisor', icon: '👨‍💼', title: 'Advisor' }
];

export default function LookingFor() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleSave = () => {
    if (selected) {
      navigate('/onboarding/business-stage');
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
        className="max-w-3xl w-full space-y-8 text-center"
      >
        <img
          src="/assets/images/home-page/logo.png"
          alt="CoFoundersLab"
          className="h-12 mx-auto"
        />

        <h2 className="text-4xl font-bold text-white mt-8">
          What Are You Looking For?
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {options.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => setSelected(option.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                selected === option.id
                  ? 'border-[#0475DC] bg-[#0475DC]/10'
                  : 'border-gray-700 hover:border-gray-500'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-4xl mb-2">{option.icon}</div>
              <div className="text-white font-medium">{option.title}</div>
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
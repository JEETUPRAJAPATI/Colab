import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const interests = [
  { id: 'mentorship', icon: '👥', title: 'Mentorship' },
  { id: 'networking', icon: '🤝', title: 'Networking' },
  { id: 'investment', icon: '💰', title: 'Investment' },
  { id: 'education', icon: '📚', title: 'Education' }
];

export default function Interests() {
  const navigate = useNavigate();
  const [selectedInterests, setSelectedInterests] = useState(new Set());

  const toggleInterest = (id) => {
    const newSelected = new Set(selectedInterests);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedInterests(newSelected);
  };

  const handleSave = () => {
    if (selectedInterests.size > 0) {
      navigate('/onboarding/skills');
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
        className="max-w-2xl w-full space-y-8 text-center"
      >
        <img
          src="/assets/images/home-page/logo.png"
          alt="CoFoundersLab"
          className="h-12 mx-auto"
        />

        <h2 className="text-4xl font-bold text-white mt-8">
          Interests
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {interests.map((interest) => (
            <motion.button
              key={interest.id}
              onClick={() => toggleInterest(interest.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                selectedInterests.has(interest.id)
                  ? 'border-[#0475DC] bg-[#0475DC]/10'
                  : 'border-gray-700 hover:border-gray-500'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-4xl mb-2">{interest.icon}</div>
              <div className="text-white font-medium">{interest.title}</div>
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={handleSave}
          disabled={selectedInterests.size === 0}
          className={`w-full max-w-md mx-auto mt-8 py-3 px-8 rounded-full text-white font-medium transition-all duration-300 ${
            selectedInterests.size > 0
              ? 'bg-[#0475DC] hover:bg-[#0475DC]/90'
              : 'bg-gray-700 cursor-not-allowed'
          }`}
          whileHover={selectedInterests.size > 0 ? { scale: 1.02 } : {}}
          whileTap={selectedInterests.size > 0 ? { scale: 0.98 } : {}}
        >
          Jump in!
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
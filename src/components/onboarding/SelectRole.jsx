import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const roles = [
  { id: 'founder', icon: '👤', title: 'Founder' },
  { id: 'investor', icon: '💼', title: 'Investor' },
  { id: 'intern', icon: '🎓', title: 'Intern' }
];

export default function SelectRole() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleSave = () => {
    if (selectedRole) {
      navigate('/onboarding/looking-for');
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
          What Is Your Role?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {roles.map((role) => (
            <motion.button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                selectedRole === role.id
                  ? 'border-[#0475DC] bg-[#0475DC]/10'
                  : 'border-gray-700 hover:border-gray-500'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-4xl mb-2">{role.icon}</div>
              <div className="text-white font-medium">{role.title}</div>
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={handleSave}
          disabled={!selectedRole}
          className={`w-full max-w-md mx-auto mt-8 py-3 px-8 rounded-full text-white font-medium transition-all duration-300 ${
            selectedRole
              ? 'bg-[#0475DC] hover:bg-[#0475DC]/90'
              : 'bg-gray-700 cursor-not-allowed'
          }`}
          whileHover={selectedRole ? { scale: 1.02 } : {}}
          whileTap={selectedRole ? { scale: 0.98 } : {}}
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
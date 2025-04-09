import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Common professional skills list
const SKILLS_LIST = [
  { id: '1', name: 'JavaScript' },
  { id: '2', name: 'Python' },
  { id: '3', name: 'React' },
  { id: '4', name: 'Node.js' },
  { id: '5', name: 'Product Management' },
  { id: '6', name: 'UI/UX Design' },
  { id: '7', name: 'Digital Marketing' },
  { id: '8', name: 'Data Analysis' },
  { id: '9', name: 'Project Management' },
  { id: '10', name: 'Business Development' },
  { id: '11', name: 'Sales' },
  { id: '12', name: 'Content Writing' },
  { id: '13', name: 'SEO' },
  { id: '14', name: 'Social Media Marketing' },
  { id: '15', name: 'Leadership' }
];

export default function Skills() {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (searchTerm.length >= 2) {
      const filteredSkills = SKILLS_LIST.filter(skill =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSkills(filteredSkills);
    } else {
      setSkills([]);
    }
  }, [searchTerm]);

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => 
      prev.find(s => s.id === skill.id)
        ? prev.filter(s => s.id !== skill.id)
        : [...prev, skill]
    );
  };

  const handleSave = () => {
    if (selectedSkills.length > 0) {
      navigate('/home'); // Changed from '/dashboard' to '/home'
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
          What Specific Skills Do You Have?
        </h2>

        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Type to search skills..."
            className="w-full p-4 rounded-lg bg-[#1A1A1A] border-2 border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-[#0475DC]"
          />
          
          {searchTerm.length >= 2 && skills.length > 0 && (
            <div className="absolute z-10 w-full mt-2 bg-[#1A1A1A] border-2 border-gray-700 rounded-lg max-h-60 overflow-y-auto">
              {skills.map((skill) => (
                <button
                  key={skill.id}
                  onClick={() => toggleSkill(skill)}
                  className={`w-full p-3 text-left hover:bg-[#0475DC]/10 ${
                    selectedSkills.find(s => s.id === skill.id) ? 'bg-[#0475DC]/20 text-[#0475DC]' : 'text-white'
                  }`}
                >
                  {skill.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {selectedSkills.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {selectedSkills.map((skill) => (
              <motion.span
                key={skill.id}
                className="px-3 py-1 bg-[#0475DC]/20 text-[#0475DC] rounded-full flex items-center gap-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >
                {skill.name}
                <button
                  onClick={() => toggleSkill(skill)}
                  className="hover:text-white"
                >
                  ×
                </button>
              </motion.span>
            ))}
          </div>
        )}

        <motion.button
          onClick={handleSave}
          disabled={selectedSkills.length === 0}
          className={`w-full max-w-md mx-auto mt-8 py-3 px-8 rounded-full text-white font-medium transition-all duration-300 ${
            selectedSkills.length > 0
              ? 'bg-[#0475DC] hover:bg-[#0475DC]/90'
              : 'bg-gray-700 cursor-not-allowed'
          }`}
          whileHover={selectedSkills.length > 0 ? { scale: 1.02 } : {}}
          whileTap={selectedSkills.length > 0 ? { scale: 0.98 } : {}}
        >
          Continue
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
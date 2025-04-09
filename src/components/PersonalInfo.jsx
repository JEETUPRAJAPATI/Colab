import { motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PersonalInfo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    pronouns: '',
    city: '',
    tagline: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/onboarding/picture');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full space-y-8"
      >
        <div className="text-center">
          <img
            src="/assets/images/home-page/logo.png"
            className="h-12 w-auto mx-auto"
            alt="CoFoundersLab"
          />
          <h2 className="mt-6 text-3xl font-bold text-white">
            Personal Information
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className="mt-1 block w-full rounded-md bg-[#1A1A1A] border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className="mt-1 block w-full rounded-md bg-[#1A1A1A] border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
                required
              />
            </div>

            <div>
              <label htmlFor="pronouns" className="block text-sm font-medium text-gray-300">
                Pronouns
              </label>
              <select
                id="pronouns"
                value={formData.pronouns}
                onChange={(e) => setFormData({ ...formData, pronouns: e.target.value })}
                className="mt-1 block w-full rounded-md bg-[#1A1A1A] border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
              >
                <option value="">Select an option</option>
                <option value="he/him">He/Him</option>
                <option value="she/her">She/Her</option>
                <option value="they/them">They/Them</option>
              </select>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-300">
                City
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="mt-1 block w-full rounded-md bg-[#1A1A1A] border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
                required
              />
            </div>

            <div>
              <label htmlFor="tagline" className="block text-sm font-medium text-gray-300">
                Tagline
              </label>
              <input
                type="text"
                id="tagline"
                value={formData.tagline}
                onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
                placeholder="Enter a Unique and Catchy Tagline"
                className="mt-1 block w-full rounded-md bg-[#1A1A1A] border border-gray-700 text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4285F4]"
                required
              />
            </div>
          </div>

          <div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#4285F4] hover:bg-[#357ABD] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4285F4]"
            >
              Save
            </motion.button>
          </div>
        </form>

        <div className="text-center">
          <a href="#" className="text-sm text-[#4285F4] hover:text-[#357ABD]">
            Something went wrong? Logout
          </a>
        </div>
      </motion.div>
    </div>
  );
}
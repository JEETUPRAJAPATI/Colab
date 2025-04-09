import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePicture() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImageSelect(file);
    }
  };

  const handleImageSelect = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      handleImageSelect(e.target.files[0]);
    }
  };

  const handleSave = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-xl w-full space-y-8 text-center"
      >
        <div>
          <img
            src="/assets/images/home-page/logo.png"
            className="h-12 w-auto mx-auto"
            alt="CoFoundersLab"
          />
          <h2 className="mt-6 text-3xl font-bold text-white">
            Upload Your Profile Picture
          </h2>
        </div>

        <div
          className={`mt-8 p-8 border-2 border-dashed rounded-lg transition-colors ${
            isDragging ? 'border-[#4285F4] bg-[#4285F4]/10' : 'border-gray-700 hover:border-gray-500'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          {selectedImage ? (
            <div className="space-y-4">
              <img
                src={selectedImage}
                alt="Preview"
                className="w-48 h-48 rounded-full mx-auto object-cover"
              />
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-sm text-[#4285F4] hover:text-[#357ABD]"
                >
                  Choose another photo
                </button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSave}
                  className="px-4 py-2 bg-[#4285F4] text-white rounded-md hover:bg-[#357ABD]"
                >
                  Save
                </motion.button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => fileInputRef.current?.click()}
                className="px-6 py-3 bg-[#4285F4] text-white rounded-md hover:bg-[#357ABD] flex items-center justify-center mx-auto"
              >
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Upload
              </motion.button>
              <p className="text-sm text-gray-400">
                Upload a file or drag and drop PNG, JPG, GIF up to 10MB
              </p>
            </div>
          )}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>

        <div className="text-center">
          <a href="#" className="text-sm text-[#4285F4] hover:text-[#357ABD]">
            Something went wrong? Logout
          </a>
        </div>
      </motion.div>
    </div>
  );
}
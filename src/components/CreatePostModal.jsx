import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CreatePostModal({ isOpen, onClose }) {
    const [content, setContent] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle post creation
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-[#1A1A1A] rounded-lg w-full max-w-2xl mx-4"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-700">
                            <div className="flex items-center gap-3">
                                <img
                                    src="https://i.pravatar.cc/150?u=user"
                                    alt="User"
                                    className="w-10 h-10 rounded-full"
                                />
                                <div>
                                    <h3 className="font-semibold">Jeetu Prajapati</h3>
                                    <p className="text-sm text-gray-400">Blending Style with Personality</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-white"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Content */}
                        <form onSubmit={handleSubmit}>
                            <div className="p-4">
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="What's happening?"
                                    className="w-full h-32 bg-transparent text-white placeholder-gray-500 resize-none focus:outline-none"
                                />

                                {/* Media Preview */}
                                {(selectedImage || selectedVideo) && (
                                    <div className="relative mt-4">
                                        {selectedImage && (
                                            <img
                                                src={URL.createObjectURL(selectedImage)}
                                                alt="Selected"
                                                className="w-full rounded-lg"
                                            />
                                        )}
                                        {selectedVideo && (
                                            <video
                                                src={URL.createObjectURL(selectedVideo)}
                                                controls
                                                className="w-full rounded-lg"
                                            />
                                        )}
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSelectedImage(null);
                                                setSelectedVideo(null);
                                            }}
                                            className="absolute top-2 right-2 bg-black/50 rounded-full p-1 hover:bg-black/75"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between p-4 border-t border-gray-700">
                                <div className="flex gap-4">
                                    <label className="cursor-pointer text-[#0475DC] hover:bg-[#0475DC]/10 p-2 rounded-full">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => {
                                                if (e.target.files?.[0]) {
                                                    setSelectedImage(e.target.files[0]);
                                                    setSelectedVideo(null);
                                                }
                                            }}
                                        />
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </label>
                                    <label className="cursor-pointer text-[#0475DC] hover:bg-[#0475DC]/10 p-2 rounded-full">
                                        <input
                                            type="file"
                                            accept="video/*"
                                            className="hidden"
                                            onChange={(e) => {
                                                if (e.target.files?.[0]) {
                                                    setSelectedVideo(e.target.files[0]);
                                                    setSelectedImage(null);
                                                }
                                            }}
                                        />
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </label>
                                    <button
                                        type="button"
                                        className="text-[#0475DC] hover:bg-[#0475DC]/10 p-2 rounded-full"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                </div>
                                <button
                                    type="submit"
                                    disabled={!content.trim() && !selectedImage && !selectedVideo}
                                    className="px-6 py-2 bg-[#0475DC] text-white rounded-full hover:bg-[#0475DC]/90 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Post
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
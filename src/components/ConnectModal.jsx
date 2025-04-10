import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ConnectModal({ isOpen, onClose, userName }) {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle connection request
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
                        className="bg-[#1A1A1A] rounded-lg p-6 w-full max-w-md mx-4"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-[#0475DC]/20 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-[#0475DC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                </div>
                                <h2 className="text-lg font-semibold text-white">Invite {userName} to connect</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-white"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <p className="text-gray-400 text-sm mb-4">
                            CoFoundersLab members are more likely to respond when a personal note is included
                        </p>

                        <form onSubmit={handleSubmit}>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="I would like to connect because..."
                                className="w-full h-32 bg-[#2A2A2A] border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#0475DC]"
                            />

                            <div className="flex gap-3 mt-4">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="flex-1 py-2 bg-[#2A2A2A] text-white rounded-lg hover:bg-[#3A3A3A]"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 py-2 bg-[#0475DC] text-white rounded-lg hover:bg-[#0475DC]/90"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
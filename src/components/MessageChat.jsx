import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './home/Header';
import LeftSidebar from './home/LeftSidebar';

const messages = [
    {
        id: 1,
        sender: "AYUSMAN SAHOO",
        message: "hello, how much sells are you getting right now.",
        timestamp: "9:17 PM",
        isUser: false
    },
    {
        id: 2,
        sender: "Jeetu Prajapati",
        message: "Currently startup fresh.",
        timestamp: "9:19 PM",
        isUser: true
    },
    {
        id: 3,
        sender: "Jeetu Prajapati",
        message: "Sir",
        timestamp: "9:19 PM",
        isUser: true
    },
    {
        id: 4,
        sender: "AYUSMAN SAHOO",
        message: "okay",
        timestamp: "9:23 PM",
        isUser: false
    }
];

export default function MessageChat() {
    const location = useLocation();
    const navigate = useNavigate();
    const { conversation } = location.state || {};
    const [newMessage, setNewMessage] = useState('');

    const handleBack = () => {
        navigate('/messages');
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
            // Add message handling logic here
            setNewMessage('');
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white">
            <Header />

            <div className="max-w-7xl mx-auto px-4 pt-20">
                <div className="flex gap-8">
                    {/* Left Sidebar */}
                    <div className="hidden lg:block w-1/4 sticky top-20 h-[calc(100vh-5rem)]">
                        <LeftSidebar />
                    </div>

                    {/* Chat Area */}
                    <div className="flex-1">
                        {/* Chat Header */}
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <button onClick={handleBack} className="text-gray-400 hover:text-white">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <div className="flex items-center gap-3">
                                    <img
                                        src={conversation?.avatar}
                                        alt={conversation?.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <div>
                                        <h2 className="font-medium">{conversation?.name}</h2>
                                        <p className="text-sm text-gray-400">Founder</p>
                                    </div>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-white">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="bg-[#1A1A1A] rounded-lg p-4 h-[calc(100vh-15rem)] flex flex-col">
                            <div className="flex-1 overflow-y-auto space-y-4">
                                {messages.map((message) => (
                                    <motion.div
                                        key={message.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div className={`max-w-[70%] rounded-lg p-3 ${message.isUser ? 'bg-[#0475DC]' : 'bg-[#2A2A2A]'
                                            }`}>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm font-medium">{message.sender}</span>
                                                <span className="text-xs opacity-75">{message.timestamp}</span>
                                            </div>
                                            <p className="text-sm">{message.message}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Message Input */}
                            <form onSubmit={handleSendMessage} className="mt-4 flex items-center gap-2">
                                <button type="button" className="text-gray-400 hover:text-white p-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </button>
                                <button type="button" className="text-gray-400 hover:text-white p-2">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                    </svg>
                                </button>
                                <input
                                    type="text"
                                    value={newMessage}
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-[#2A2A2A] rounded-lg px-4 py-2 text-sm focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    disabled={!newMessage.trim()}
                                    className="text-[#0475DC] hover:text-[#0475DC]/80 disabled:text-gray-500 p-2"
                                >
                                    <svg className="w-6 h-6 transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
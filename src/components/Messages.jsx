import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from './home/Header';
import LeftSidebar from './home/LeftSidebar';

const conversations = [
  {
    id: 1,
    name: "Wang W.",
    avatar: "https://i.pravatar.cc/150?img=1",
    message: "Hello I hope you're doing well! I'm reaching out because I'm looking for a long-term business partne...",
    timestamp: "07 Apr 25",
    timeAgo: "2 days ago",
    isNew: true
  },
  {
    id: 2,
    name: "Sophia J.",
    message: "ok",
    avatar: "https://i.pravatar.cc/150?img=2",
    timestamp: "07 Apr 25",
    timeAgo: "2 days ago"
  },
  {
    id: 3,
    name: "AYUSMAN S.",
    avatar: "https://i.pravatar.cc/150?img=3",
    message: "9512087057 this is my whatsapp number message me to discussion related to idea.",
    timestamp: "07 Apr 25",
    timeAgo: "2 days ago"
  },
  {
    id: 4,
    name: "Chirag S.",
    avatar: "https://i.pravatar.cc/150?img=4",
    message: "okay.",
    timestamp: "06 Apr 25",
    timeAgo: "3 days ago"
  }
];

export default function Messages() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const handleChatClick = (conversation) => {
    navigate(`/messages/chat/${conversation.id}`, { state: { conversation } });
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

          {/* Messages List */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Message</h1>
              <div className="flex gap-2">
                <button className="px-4 py-1 bg-[#0475DC] rounded-full text-sm">
                  Refresh
                </button>
              </div>
            </div>

            <div className="relative mb-6">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Messages"
                className="w-full bg-[#1A1A1A] border border-gray-700 rounded-lg py-2 px-4 pl-10 text-sm"
              />
              <svg
                className="absolute left-3 top-2.5 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div className="flex gap-2 mb-6">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm ${filter === 'all' ? 'bg-[#0475DC] text-white' : 'bg-[#1A1A1A] text-gray-300'}`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('unread')}
                className={`px-4 py-2 rounded-lg text-sm ${filter === 'unread' ? 'bg-[#0475DC] text-white' : 'bg-[#1A1A1A] text-gray-300'}`}
              >
                Unread
              </button>
            </div>

            <div className="space-y-2">
              {conversations
                .filter(conv => filter === 'all' || conv.isNew)
                .map((conversation) => (
                  <motion.div
                    key={conversation.id}
                    onClick={() => handleChatClick(conversation)}
                    className="bg-[#1A1A1A] p-4 rounded-lg cursor-pointer hover:bg-[#2A2A2A]"
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={conversation.avatar}
                        alt={conversation.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{conversation.name}</span>
                            {conversation.isNew && (
                              <span className="bg-[#0475DC] text-xs px-2 py-0.5 rounded-full">
                                NEW
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-gray-400">{conversation.timestamp}</span>
                        </div>
                        <p className="text-sm text-gray-400 line-clamp-1 mt-1">
                          {conversation.message}
                        </p>
                        <span className="text-xs text-gray-500 mt-1 block">
                          {conversation.timeAgo}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './home/Header';

const conversations = [
  {
    id: 1,
    user: {
      name: "Wang W.",
      avatar: "https://i.pravatar.cc/150?img=1",
      isNew: true,
      lastMessage: "Hello I hope you're doing well! I'm reaching out because I'm looking for a long-term business partne...",
      timestamp: "07 Apr 25",
      timeAgo: "2 days ago"
    }
  },
  {
    id: 2,
    user: {
      name: "Sophia J.",
      avatar: "https://i.pravatar.cc/150?img=2",
      lastMessage: "ok",
      timestamp: "07 Apr 25",
      timeAgo: "2 days ago"
    }
  },
  {
    id: 3,
    user: {
      name: "AYUSMAN S.",
      avatar: "https://i.pravatar.cc/150?img=3",
      lastMessage: "You: 9512087057 this is my whatsapp number message me to discussion related to idea.",
      timestamp: "07 Apr 25",
      timeAgo: "2 days ago"
    }
  },
  {
    id: 4,
    user: {
      name: "Chirag S.",
      avatar: "https://i.pravatar.cc/150?img=4",
      lastMessage: "okay.",
      timestamp: "06 Apr 25",
      timeAgo: "3 days ago"
    }
  },
  {
    id: 5,
    user: {
      name: "Prashant J.",
      avatar: "https://i.pravatar.cc/150?img=5",
      lastMessage: "You: 9512087057 free then tell me this is my number connect. Discussion",
      timestamp: "06 Apr 25",
      timeAgo: "3 days ago"
    }
  },
  {
    id: 6,
    user: {
      name: "Daniel M.",
      avatar: "https://i.pravatar.cc/150?img=6",
      isNew: true,
      lastMessage: "Hi. Obtain a tax clearance document and claim $32 million. Please get in touch with...",
      timestamp: "06 Apr 25",
      timeAgo: "3 days ago"
    }
  }
];

const dummyMessages = [
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
    message: "Currently startup fesh.",
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
  },
  {
    id: 5,
    sender: "Jeetu Prajapati",
    message: "9512087057 this is my whatsapp number message me to discussion related to idea.",
    timestamp: "9:19 AM",
    isUser: true,
    date: "April 07"
  }
];

export default function Messages() {
  const [selectedChat, setSelectedChat] = useState(conversations[2]); // Set AYUSMAN S. as default selected
  const [searchTerm, setSearchTerm] = useState('');
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (messageText.trim()) {
      setMessageText('');
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 pt-20">
        <div className="flex h-[calc(100vh-5rem)]">
          {/* Left Sidebar */}
          <div className="w-1/3 border-r border-gray-800">
            <div className="p-4">
              <h2 className="text-xl font-bold mb-4">Message</h2>
              <div className="relative mb-4">
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <div className="flex gap-2 mb-4">
                <button className="px-4 py-2 bg-[#0475DC] text-white rounded-lg text-sm">All</button>
                <button className="px-4 py-2 bg-[#1A1A1A] text-gray-300 rounded-lg text-sm">Unread</button>
              </div>
            </div>

            <div className="overflow-y-auto h-[calc(100vh-13rem)]">
              {conversations.map((conv) => (
                <motion.button
                  key={conv.id}
                  onClick={() => setSelectedChat(conv)}
                  className={`w-full p-4 flex items-start gap-3 hover:bg-[#1A1A1A] ${
                    selectedChat?.id === conv.id ? 'bg-[#1A1A1A]' : ''
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <img
                    src={conv.user.avatar}
                    alt={conv.user.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1 text-left">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{conv.user.name}</span>
                        {conv.user.isNew && (
                          <span className="bg-[#0475DC] text-xs px-2 py-0.5 rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-gray-400">{conv.timestamp}</span>
                    </div>
                    <p className="text-sm text-gray-400 line-clamp-2 mt-1">{conv.user.lastMessage}</p>
                    <span className="text-xs text-gray-500 mt-1 block">{conv.user.timeAgo}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Chat Window */}
          <div className="flex-1 flex flex-col bg-[#0A0A0A]">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={selectedChat.user.avatar}
                      alt={selectedChat.user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">{selectedChat.user.name}</h3>
                      <p className="text-sm text-gray-400">Founder</p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4">
                  {dummyMessages.map((message, index) => (
                    <div key={message.id} className="mb-6">
                      {message.date && (
                        <div className="text-center text-sm text-gray-500 my-4">
                          {message.date}
                        </div>
                      )}
                      <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} items-end gap-2`}>
                        {!message.isUser && (
                          <img
                            src={selectedChat.user.avatar}
                            alt={message.sender}
                            className="w-8 h-8 rounded-full"
                          />
                        )}
                        <div className={`max-w-[70%] ${message.isUser ? 'bg-[#0475DC]' : 'bg-[#1A1A1A]'} rounded-lg p-3`}>
                          {!message.isUser && (
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm">{message.sender}</span>
                              <span className="text-xs text-gray-400">{message.timestamp}</span>
                            </div>
                          )}
                          <p className="text-sm">{message.message}</p>
                          {message.isUser && (
                            <div className="flex items-center justify-between mt-1">
                              <span className="text-xs text-white/70">{message.timestamp}</span>
                              <span className="text-xs font-medium">{message.sender}</span>
                            </div>
                          )}
                        </div>
                        {message.isUser && (
                          <img
                            src="https://i.pravatar.cc/150?u=user"
                            alt="You"
                            className="w-8 h-8 rounded-full"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-800">
                  <div className="flex items-center gap-2">
                    <button type="button" className="text-gray-400 hover:text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </button>
                    <button type="button" className="text-gray-400 hover:text-white">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                    </button>
                    <input
                      type="text"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      placeholder="Type Your Message..."
                      className="flex-1 bg-[#1A1A1A] border border-gray-700 rounded-lg py-2 px-4 text-sm focus:outline-none focus:border-[#0475DC]"
                    />
                    <button
                      type="submit"
                      disabled={!messageText.trim()}
                      className="text-[#0475DC] hover:text-[#0475DC]/80 disabled:text-gray-500"
                    >
                      <svg className="w-6 h-6 transform rotate-90" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <p>Select a conversation to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
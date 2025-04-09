import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PostCard({ post }) {
  const [showComments, setShowComments] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [showReactions, setShowReactions] = useState(false);

  const reactions = [
    { emoji: '👍', name: 'like' },
    { emoji: '❤️', name: 'love' },
    { emoji: '😮', name: 'wow' },
    { emoji: '😢', name: 'sad' }
  ];

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction);
    setShowReactions(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1A1A1A] rounded-lg p-4"
    >
      {/* Post Header */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-medium">{post.author.name}</h3>
            {post.author.verified && (
              <svg className="w-4 h-4 text-[#0475DC]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <p className="text-sm text-gray-400">
            {new Date(post.timestamp).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Post Content */}
      <p className="mb-4">{post.content}</p>
      {post.image && (
        <img
          src={post.image}
          alt="Post content"
          className="rounded-lg mb-4 w-full"
        />
      )}

      {/* Post Actions */}
      <div className="flex items-center gap-6 border-t border-gray-700 pt-4">
        <div className="relative">
          <button
            className="flex items-center gap-2 hover:text-[#0475DC]"
            onMouseEnter={() => setShowReactions(true)}
            onMouseLeave={() => setShowReactions(false)}
          >
            {selectedReaction ? reactions.find(r => r.name === selectedReaction)?.emoji : '👍'}
            <span>{post.likes}</span>
          </button>

          <AnimatePresence>
            {showReactions && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute bottom-full left-0 mb-2 flex gap-2 bg-[#2A2A2A] p-2 rounded-full shadow-lg"
                onMouseEnter={() => setShowReactions(true)}
                onMouseLeave={() => setShowReactions(false)}
              >
                {reactions.map((reaction) => (
                  <button
                    key={reaction.name}
                    onClick={() => handleReactionClick(reaction.name)}
                    className="text-xl hover:scale-125 transition-transform"
                  >
                    {reaction.emoji}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          className="flex items-center gap-2 hover:text-[#0475DC]"
          onClick={() => setShowComments(!showComments)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span>{post.comments}</span>
        </button>
      </div>

      {/* Comments Section */}
      <AnimatePresence>
        {showComments && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mt-4 border-t border-gray-700 pt-4"
          >
            <div className="flex gap-4 mb-4">
              <img
                src="https://i.pravatar.cc/150?u=user"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <input
                type="text"
                placeholder="Write a comment..."
                className="bg-[#2A2A2A] rounded-full py-2 px-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0475DC]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import PostCard from './PostCard';
import PostSkeleton from './PostSkeleton';

// Dummy data generator for posts
const generateDummyPost = (id) => ({
  id,
  author: {
    id: `user-${id}`,
    name: `User ${id}`,
    avatar: `https://i.pravatar.cc/150?u=${id}`,
    verified: Math.random() > 0.5,
  },
  content: `This is post ${id} with some example content about startups and entrepreneurship. #startup #entrepreneurship`,
  timestamp: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
  likes: Math.floor(Math.random() * 100),
  comments: Math.floor(Math.random() * 20),
  image: Math.random() > 0.5 ? `https://picsum.photos/seed/${id}/600/400` : null,
});

export default function HomeFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // Simulate loading initial posts
  useEffect(() => {
    loadMorePosts();
  }, []);

  // Infinite scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1000) {
        loadMorePosts();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [page]);

  const loadMorePosts = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const newPosts = Array.from({ length: 5 }, (_, i) => 
        generateDummyPost(page * 5 + i)
      );
      setPosts(prev => [...prev, ...newPosts]);
      setPage(prev => prev + 1);
      setLoading(false);
    }, 1500);
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

          {/* Main Content */}
          <div className="flex-1 lg:w-2/4 space-y-6">
            {/* Create Post */}
            <div className="bg-[#1A1A1A] rounded-lg p-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://i.pravatar.cc/150?u=user"
                  alt="User"
                  className="w-10 h-10 rounded-full"
                />
                <input
                  type="text"
                  placeholder="What's happening?"
                  className="bg-[#2A2A2A] rounded-full py-2 px-4 w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0475DC]"
                />
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex gap-4">
                  <button className="text-[#0475DC] hover:bg-[#0475DC]/10 p-2 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button className="text-[#0475DC] hover:bg-[#0475DC]/10 p-2 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <button className="text-[#0475DC] hover:bg-[#0475DC]/10 p-2 rounded-full">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>
                <button className="bg-[#0475DC] text-white px-4 py-1 rounded-full hover:bg-[#0475DC]/90">
                  Post
                </button>
              </div>
            </div>

            {/* Posts */}
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}

            {/* Loading Skeletons */}
            {loading && (
              <>
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
              </>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="hidden lg:block w-1/4 sticky top-20 h-[calc(100vh-5rem)]">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
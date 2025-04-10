import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './home/Header';
import LeftSidebar from './home/LeftSidebar';
import RightSidebar from './home/RightSidebar';
import PostCard from './home/PostCard';
import Footer from './Footer';
import CreatePostModal from './CreatePostModal';

const generateDummyPost = (id) => ({
    id,
    author: {
        id: `user-${id}`,
        name: `User ${id}`,
        avatar: `https://i.pravatar.cc/150?img=${id}`,
        title: ['Founder', 'CEO', 'CTO', 'Product Manager', 'Designer', 'Developer'][Math.floor(Math.random() * 6)],
        verified: Math.random() > 0.5
    },
    content: [
        "Looking for a technical co-founder for my AI startup! #startup #cofounder",
        "Just launched our beta product and looking for early users! Check it out 🚀",
        "Seeking advice on fundraising strategies for SaaS startups. Any tips? 💡",
        "Great meeting with potential investors today! The future looks bright ✨",
        "Working on revolutionizing the fintech space. DM if interested in collaboration!",
        "Need recommendations for startup accelerators in the Bay Area 🌉",
        "Just hit our first 1000 users milestone! Thanks to this amazing community 🙏",
        "Looking for mentors in the e-commerce space. Any experts here? 🛍️",
        "Sharing our startup journey - from idea to MVP in 3 months! Thread below 🧵",
        "Excited to announce our seed funding round! More details coming soon 🎉"
    ][Math.floor(Math.random() * 10)],
    timestamp: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    likes: Math.floor(Math.random() * 100),
    comments: Math.floor(Math.random() * 20),
    image: Math.random() > 0.5 ? `https://picsum.photos/seed/${id}/600/400` : null
});

const posts = Array.from({ length: 25 }, (_, i) => generateDummyPost(i + 1));

export default function Explore() {
    const [showCreatePost, setShowCreatePost] = useState(false);

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
                    <div className="flex-1 space-y-6">
                        {/* Create Post */}
                        <div className="bg-[#1A1A1A] rounded-lg p-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src="https://i.pravatar.cc/150?u=user"
                                    alt="User"
                                    className="w-10 h-10 rounded-full"
                                />
                                <button
                                    onClick={() => setShowCreatePost(true)}
                                    className="flex-1 bg-[#2A2A2A] rounded-full py-2 px-4 text-left text-gray-400 hover:bg-[#3A3A3A]"
                                >
                                    What's happening?
                                </button>
                            </div>
                            <div className="flex justify-between mt-4">
                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setShowCreatePost(true)}
                                        className="text-[#0475DC] hover:bg-[#0475DC]/10 p-2 rounded-full"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => setShowCreatePost(true)}
                                        className="text-[#0475DC] hover:bg-[#0475DC]/10 p-2 rounded-full"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={() => setShowCreatePost(true)}
                                        className="text-[#0475DC] hover:bg-[#0475DC]/10 p-2 rounded-full"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                </div>
                                <button
                                    onClick={() => setShowCreatePost(true)}
                                    className="bg-[#0475DC] text-white px-4 py-1 rounded-full hover:bg-[#0475DC]/90"
                                >
                                    Post
                                </button>
                            </div>
                        </div>

                        {/* Posts */}
                        {posts.map(post => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>

                    {/* Right Sidebar */}
                    <div className="hidden lg:block w-1/4 sticky top-20 h-[calc(100vh-5rem)]">
                        <RightSidebar />
                    </div>
                </div>
            </div>

            <Footer />

            <CreatePostModal
                isOpen={showCreatePost}
                onClose={() => setShowCreatePost(false)}
            />
        </div>
    );
}
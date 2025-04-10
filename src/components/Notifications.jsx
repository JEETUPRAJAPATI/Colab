import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from './home/Header';
import LeftSidebar from './home/LeftSidebar';
import RightSidebar from './home/RightSidebar';

const notifications = [
    {
        id: 1,
        type: 'connection',
        user: {
            name: 'Wang Wei',
            avatar: 'https://i.pravatar.cc/150?img=1',
            time: '3 days ago'
        }
    },
    {
        id: 2,
        type: 'connection',
        user: {
            name: 'Daniel Mansour',
            avatar: 'https://i.pravatar.cc/150?img=2',
            time: '3 days ago'
        }
    },
    {
        id: 3,
        type: 'connection',
        user: {
            name: 'Prashant Jasoliya',
            avatar: 'https://i.pravatar.cc/150?img=3',
            time: '5 days ago'
        }
    },
    {
        id: 4,
        type: 'connection',
        user: {
            name: 'Chirag Sharma',
            avatar: 'https://i.pravatar.cc/150?img=4',
            time: '5 days ago'
        }
    },
    {
        id: 5,
        type: 'post',
        user: {
            name: 'Trinity Law',
            avatar: 'https://i.pravatar.cc/150?img=5',
            time: '10 days ago'
        }
    },
    {
        id: 6,
        type: 'post',
        user: {
            name: 'Tedashi Amano',
            avatar: 'https://i.pravatar.cc/150?img=6',
            time: '21 days ago'
        }
    }
];

export default function Notifications() {
    const [filter, setFilter] = useState('all');
    const navigate = useNavigate();

    const filteredNotifications = notifications.filter(notification => {
        if (filter === 'all') return true;
        if (filter === 'requests') return notification.type === 'connection';
        if (filter === 'posts') return notification.type === 'post';
        return true;
    });

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
                    <div className="flex-1">
                        <div className="bg-[#1A1A1A] rounded-lg p-6">
                            <h1 className="text-2xl font-bold mb-6">Notifications</h1>

                            {/* Filter Tabs */}
                            <div className="flex gap-4 mb-6 border-b border-gray-700">
                                <button
                                    onClick={() => setFilter('all')}
                                    className={`pb-4 px-4 ${filter === 'all' ? 'text-[#0475DC] border-b-2 border-[#0475DC]' : 'text-gray-400'}`}
                                >
                                    All
                                </button>
                                <button
                                    onClick={() => setFilter('requests')}
                                    className={`pb-4 px-4 ${filter === 'requests' ? 'text-[#0475DC] border-b-2 border-[#0475DC]' : 'text-gray-400'}`}
                                >
                                    Requests
                                </button>
                                <button
                                    onClick={() => setFilter('posts')}
                                    className={`pb-4 px-4 ${filter === 'posts' ? 'text-[#0475DC] border-b-2 border-[#0475DC]' : 'text-gray-400'}`}
                                >
                                    Posts
                                </button>
                            </div>

                            {/* Notifications List */}
                            <div className="space-y-4">
                                {filteredNotifications.map((notification) => (
                                    <motion.div
                                        key={notification.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center justify-between p-4 hover:bg-[#2A2A2A] rounded-lg transition-colors"
                                    >
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={notification.user.avatar}
                                                alt={notification.user.name}
                                                className="w-12 h-12 rounded-full"
                                            />
                                            <div>
                                                <p className="text-sm">
                                                    <span className="font-medium">{notification.user.name}</span>
                                                    {notification.type === 'connection' ? ' sent you a connection request' : ' created a new post!'}
                                                </p>
                                                <p className="text-xs text-gray-400">{notification.user.time}</p>
                                            </div>
                                        </div>
                                        {notification.type === 'connection' ? (
                                            <div className="flex gap-2">
                                                <button className="px-4 py-1 text-sm bg-[#2A2A2A] hover:bg-[#3A3A3A] rounded-full">
                                                    Ignore
                                                </button>
                                                <button className="px-4 py-1 text-sm bg-[#0475DC] hover:bg-[#0475DC]/90 rounded-full">
                                                    Accept
                                                </button>
                                            </div>
                                        ) : (
                                            <button className="px-4 py-1 text-sm bg-[#0475DC] hover:bg-[#0475DC]/90 rounded-full">
                                                View Post
                                            </button>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
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
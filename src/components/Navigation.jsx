import { motion } from 'framer-motion';

export default function NetworkStats() {
    return (
        <>
            {/* Navigation */}
            <nav className="fixed w-full top-0 z-50 bg-transparent py-6">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="flex items-center">
                        <img
                            src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop"
                            alt="Logo"
                            className="h-8"
                        />
                    </div>
                    <div className="flex gap-4 items-center">
                        <button className="px-6 py-2 text-white/80 hover:text-white font-medium transition-colors">
                            Login
                        </button>
                        <button className="px-6 py-2 bg-transparent border border-[#FF6B6B] text-white rounded-full hover:bg-[#FF6B6B] transition-all duration-300 font-medium">
                            Find a CoFounder
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}

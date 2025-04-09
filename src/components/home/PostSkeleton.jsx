import { motion } from 'framer-motion';

export default function PostSkeleton() {
  return (
    <div className="bg-[#1A1A1A] rounded-lg p-4 animate-pulse">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
        <div>
          <div className="h-4 w-24 bg-gray-700 rounded"></div>
          <div className="h-3 w-16 bg-gray-700 rounded mt-2"></div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
      </div>
      <div className="h-48 bg-gray-700 rounded-lg mt-4"></div>
      <div className="flex gap-6 mt-4 pt-4 border-t border-gray-700">
        <div className="h-5 w-16 bg-gray-700 rounded"></div>
        <div className="h-5 w-16 bg-gray-700 rounded"></div>
      </div>
    </div>
  );
}
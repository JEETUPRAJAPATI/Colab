import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './home/Header';
import LeftSidebar from './home/LeftSidebar';
import RightSidebar from './home/RightSidebar';

export default function Settings() {
    const [personalInfo, setPersonalInfo] = useState({
        firstName: 'Jeetu',
        lastName: 'Prajapati',
        pronouns: 'He/Him',
        email: 'jeetu.mt33@gmail.com',
        location: 'Surat, GJ, India',
        tagline: 'Blending Style with Personality',
        linkedinUrl: 'LinkedIn URL (https://linkedin.com/)',
        twitterUrl: 'Twitter URL (https://twitter.com/)',
        role: 'Founder',
        lookingFor: 'CoFounder',
        businessStage: 'Launch',
        skills: ['Business Planning / Processes / Systems', 'Human Resources', 'Change Management', 'Leadership'],
        interests: ['Mentorship']
    });

    const handleSave = (section) => {
        // Handle saving the specific section
        console.log('Saving section:', section);
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
                    <div className="flex-1">
                        <div className="space-y-6">
                            {/* Profile Section */}
                            <div className="bg-[#1A1A1A] rounded-lg p-6">
                                <h2 className="text-xl font-semibold mb-6">Profile</h2>

                                {/* Profile Picture */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Profile picture</label>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src="https://i.pravatar.cc/150?img=1"
                                            alt="Profile"
                                            className="w-16 h-16 rounded-full"
                                        />
                                        <button className="px-4 py-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] rounded-lg text-sm">
                                            Change
                                        </button>
                                    </div>
                                </div>

                                {/* Profile Banner */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-400 mb-2">Profile Banner</label>
                                    <div className="flex items-center gap-4">
                                        <div className="w-32 h-16 bg-[#2A2A2A] rounded-lg"></div>
                                        <button className="px-4 py-2 bg-[#2A2A2A] hover:bg-[#3A3A3A] rounded-lg text-sm">
                                            Change
                                        </button>
                                    </div>
                                </div>

                                {/* Personal Information */}
                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-2">First name</label>
                                            <input
                                                type="text"
                                                value={personalInfo.firstName}
                                                className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-2">Last name</label>
                                            <input
                                                type="text"
                                                value={personalInfo.lastName}
                                                className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-2"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Pronouns</label>
                                        <select className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-2">
                                            <option value="he/him">He/Him</option>
                                            <option value="she/her">She/Her</option>
                                            <option value="they/them">They/Them</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Email address</label>
                                        <input
                                            type="email"
                                            value={personalInfo.email}
                                            className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-2"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Location</label>
                                        <input
                                            type="text"
                                            value={personalInfo.location}
                                            className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-2"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Tagline</label>
                                        <input
                                            type="text"
                                            value={personalInfo.tagline}
                                            className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-2"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">LinkedIn URL</label>
                                        <input
                                            type="text"
                                            value={personalInfo.linkedinUrl}
                                            className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-2"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Twitter URL</label>
                                        <input
                                            type="text"
                                            value={personalInfo.twitterUrl}
                                            className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-2"
                                        />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button
                                        onClick={() => handleSave('personal')}
                                        className="px-6 py-2 bg-[#0475DC] hover:bg-[#0475DC]/90 rounded-lg"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>

                            {/* Professional Information */}
                            <div className="bg-[#1A1A1A] rounded-lg p-6">
                                <h2 className="text-xl font-semibold mb-6">Professional Information</h2>

                                <div className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-2">Role</label>
                                            <select className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-2">
                                                <option value="founder">Founder</option>
                                                <option value="investor">Investor</option>
                                                <option value="advisor">Advisor</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-2">Looking For</label>
                                            <select className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-2">
                                                <option value="cofounder">CoFounder</option>
                                                <option value="investor">Investor</option>
                                                <option value="advisor">Advisor</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Current Business Stage</label>
                                        <select className="w-full bg-[#2A2A2A] border border-gray-700 rounded-lg px-4 py-2">
                                            <option value="launch">Launch</option>
                                            <option value="growth">Growth</option>
                                            <option value="scale">Scale</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Skills</label>
                                        <div className="flex flex-wrap gap-2">
                                            {personalInfo.skills.map((skill, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-[#2A2A2A] rounded-full text-sm flex items-center gap-2"
                                                >
                                                    {skill}
                                                    <button className="text-gray-400 hover:text-white">×</button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Interests</label>
                                        <div className="flex flex-wrap gap-2">
                                            {personalInfo.interests.map((interest, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-[#2A2A2A] rounded-full text-sm flex items-center gap-2"
                                                >
                                                    {interest}
                                                    <button className="text-gray-400 hover:text-white">×</button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button
                                        onClick={() => handleSave('professional')}
                                        className="px-6 py-2 bg-[#0475DC] hover:bg-[#0475DC]/90 rounded-lg"
                                    >
                                        Save
                                    </button>
                                </div>
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
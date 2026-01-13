import React from 'react';
import {
    User, Code2, Rocket, Award,
    Gamepad2, Film, Plane,
    Layers, Video, Languages,
    Briefcase, GraduationCap,
    ExternalLink, Mail, Phone, MapPin,
    Calendar
} from 'lucide-react';
import profileImg from '../assets/profile.png';

const About = () => {
    return (
        <section className="relative min-h-screen bg-[#000000] py-20 px-4 md:px-10 overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto flex flex-col gap-6">

                {/* Top Section: Profile and Bio */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Profile Card */}
                    <div className="md:col-span-4 bg-[#111111] rounded-[2.5rem] p-8 flex items-center justify-center border border-white/5 shadow-2xl">
                        <div className="w-56 h-56 rounded-[2rem] overflow-hidden bg-[#222222]">
                            <img
                                src={profileImg}
                                alt="Nomayen"
                                className="w-full h-full object-cover brightness-110 contrast-105"
                            />
                        </div>
                    </div>

                    {/* Bio and Interests Container */}
                    <div className="md:col-span-8 flex flex-col gap-6">
                        {/* Bio Card */}
                        <div className="bg-[#111111] rounded-[2.5rem] p-10 border border-white/5 shadow-xl flex-grow">
                            <p className="text-gray-300 text-2xl md:text-3xl font-medium leading-relaxed italic">
                                My name is <span className="text-white font-bold not-italic">Nomayen</span> self-taught <span className="text-white">full-stack developer</span> with 4+ years of experience creating modern, clean, and functional digital experiences.
                            </p>
                        </div>

                        {/* Interests Strip */}
                        <div className="bg-[#111111] rounded-[2.5rem] p-6 px-10 border border-white/5 shadow-xl flex items-center gap-8 overflow-hidden">
                            <h3 className="text-white text-xl font-bold border-r border-white/10 pr-8">Interests</h3>
                            <div className="flex gap-6 overflow-x-auto no-scrollbar">
                                <InterestTag icon={<Gamepad2 className="w-4 h-4" />} label="Gaming" />
                                <InterestTag icon={<Film className="w-4 h-4" />} label="Film Making" />
                                <InterestTag icon={<Plane className="w-4 h-4" />} label="Traveling" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Experience, Tools, and Education */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Left Column: Tools and Languages */}
                    <div className="md:col-span-4 flex flex-col gap-6">
                        <ToolCard
                            title="Design Tools"
                            tools={[
                                { label: 'Ai', color: 'text-orange-500' },
                                { label: 'Ps', color: 'text-blue-500' },
                                { label: 'Id', color: 'text-pink-600' },
                                { label: 'Xd', color: 'text-pink-400' }
                            ]}
                            icon={<Layers className="w-5 h-5 text-gray-400" />}
                        />
                        <ToolCard
                            title="Editing Tools"
                            tools={[
                                { label: 'Ae', color: 'text-indigo-400' },
                                { label: 'Pr', color: 'text-purple-400' },
                                { label: 'Dr', color: 'text-green-400' }
                            ]}
                            icon={<Video className="w-5 h-5 text-gray-400" />}
                        />
                        <div className="bg-[#111111] rounded-[2.5rem] p-8 border border-white/5 shadow-xl flex items-center justify-between">
                            <h3 className="text-white text-xl font-bold">Languages</h3>
                            <div className="flex gap-4">
                                <span className="text-2xl">🇧🇩</span>
                                <span className="text-2xl">🇬🇧</span>
                                <span className="text-2xl">🇺🇸</span>
                            </div>
                        </div>
                    </div>

                    {/* Middle Column: Experience */}
                    <div className="md:col-span-4 flex flex-col gap-6">
                        <ExperienceCard
                            title="Freelancer"
                            subtitle="Full Stack Developer"
                            date="2022 - Now"
                            points={[
                                "Worked on diverse web and mobile projects.",
                                "Collaborated with clients globally.",
                                "Developed versatile full-stack skill set.",
                                "Adapted to unique challenges and tech stacks."
                            ]}
                        />
                        <ExperienceCard
                            title="Tech Solutions"
                            subtitle="Frontend Developer"
                            date="2021 - 2022"
                            points={[
                                "Collaboration: Supported Lead Devs on UI.",
                                "Design: Crafted unique digital identities.",
                                "Tools: Used React, Tailwind & Vite."
                            ]}
                        />
                    </div>

                    {/* Right Column: Education */}
                    <div className="md:col-span-4 bg-[#111111] rounded-[2.5rem] p-10 border border-white/5 shadow-xl">
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap className="w-6 h-6 text-white" />
                            <h3 className="text-white text-2xl font-bold">Education</h3>
                        </div>
                        <div className="space-y-10 relative">
                            <div className="absolute left-0 top-0 w-[1px] h-full bg-white/10 ml-3"></div>
                            <EducationItem
                                year="2018"
                                title="High School"
                                desc="Science, GPA 5.0"
                                location="Dhaka, Bangladesh"
                            />
                            <EducationItem
                                year="2018-21"
                                title="Diploma"
                                desc="Computer Science & Engineering"
                                location="Dhaka, Bangladesh"
                            />
                            <EducationItem
                                year="2021-25"
                                title="Bachelor"
                                desc="BSc in Computer Science"
                                location="Dhaka, Bangladesh"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Portfolio and Details */}
                <div className="grid grid-cols-1 gap-6">
                    {/* Portfolio Bar */}
                    <div className="bg-[#111111] rounded-[2.5rem] p-6 px-10 border border-white/5 shadow-xl flex items-center gap-8 overflow-hidden">
                        <h3 className="text-white text-xl font-bold border-r border-white/10 pr-8">Portfolio</h3>
                        <div className="flex gap-4 flex-wrap">
                            <SocialLink label="GitHub" icon={<Code2 className="w-4 h-4" />} />
                            <SocialLink label="LinkedIn" icon={<ExternalLink className="w-4 h-4" />} />
                            <SocialLink label="Dribbble" icon={<Layers className="w-4 h-4" />} />
                            <SocialLink label="Instagram" icon={<Rocket className="w-4 h-4" />} />
                        </div>
                    </div>

                    {/* Personal Details Bar */}
                    <div className="bg-[#111111] rounded-[2.5rem] p-6 px-10 border border-white/5 shadow-xl flex items-center gap-8 overflow-hidden">
                        <h3 className="text-white text-xl font-bold border-r border-white/10 pr-8">Details</h3>
                        <div className="flex gap-8 flex-wrap">
                            <DetailIcon icon={<Calendar className="w-4 h-4" />} label="22 years" />
                            <DetailIcon icon={<Mail className="w-4 h-4" />} label="nomayen@dev.com" />
                            <DetailIcon icon={<Phone className="w-4 h-4" />} label="+880 12345678" />
                            <DetailIcon icon={<MapPin className="w-4 h-4" />} label="Bangladesh" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

// Helper Components
const InterestTag = ({ icon, label }) => (
    <div className="bg-[#1a1a1a] rounded-2xl p-3 px-6 flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#222222] transition-all cursor-default border border-white/5">
        {icon}
        <span className="text-sm font-semibold">{label}</span>
    </div>
);

const ToolCard = ({ title, tools, icon }) => (
    <div className="bg-[#111111] rounded-[2.5rem] p-8 border border-white/5 shadow-xl flex items-center justify-between">
        <div className="flex items-center gap-4">
            <h3 className="text-white text-xl font-bold">{title}</h3>
            <div className="flex items-center gap-1 border-l border-white/10 pl-4">
                {tools.map((tool, i) => (
                    <span key={i} className={`text - xl font - black px - 1 ${tool.color} `}>{tool.label}</span>
                ))}
            </div>
        </div>
        {icon}
    </div>
);

const ExperienceCard = ({ title, subtitle, date, points }) => (
    <div className="bg-[#111111] rounded-[2.5rem] p-10 border border-white/5 shadow-xl group hover:border-blue-500/20 transition-all">
        <div className="flex justify-between items-start mb-4">
            <div>
                <h3 className="text-white text-3xl font-bold mb-1">{title}</h3>
                <p className="text-gray-500 font-medium">{subtitle}</p>
            </div>
            <span className="bg-[#1a1a1a] px-4 py-2 rounded-xl text-gray-400 text-sm font-bold border border-white/5">{date}</span>
        </div>
        <div className="h-[1px] w-full bg-white/5 my-6"></div>
        <ul className="space-y-4">
            {points.map((pt, i) => (
                <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                    <span className="text-blue-500 font-bold">•</span>
                    {pt}
                </li>
            ))}
        </ul>
    </div>
);

const EducationItem = ({ year, title, desc, location }) => (
    <div className="pl-10 relative group">
        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-[#111111] border-2 border-white/20 group-hover:border-blue-500 transition-colors z-10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-blue-500 transition-colors"></div>
        </div>
        <div className="flex justify-between items-start mb-1">
            <h4 className="text-white text-xl font-bold">{title}</h4>
            <span className="bg-[#1a1a1a] px-3 py-1 rounded-lg text-gray-400 text-xs font-bold border border-white/5">{year}</span>
        </div>
        <p className="text-gray-500 text-sm mb-1">{desc}</p>
        <p className="text-gray-600 text-xs italic">{location}</p>
    </div>
);

const SocialLink = ({ label, icon }) => (
    <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-2 px-5 flex items-center gap-3 text-gray-400 hover:text-white hover:bg-[#222222] transition-all cursor-pointer">
        <div className="w-8 h-8 rounded-xl bg-[#222222] flex items-center justify-center text-blue-500">
            {icon}
        </div>
        <span className="text-sm font-bold">{label}</span>
    </div>
);

const DetailIcon = ({ icon, label }) => (
    <div className="flex items-center gap-3 group">
        <div className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center text-gray-400 group-hover:text-blue-400 transition-colors">
            {icon}
        </div>
        <span className="text-gray-400 text-sm font-medium group-hover:text-white transition-colors">{label}</span>
    </div>
);

export default About;

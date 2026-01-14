import React, { useState } from 'react';
import { Github, Linkedin, ExternalLink, Search, Sparkles, Code2, Cpu, Globe, Zap, ArrowRight, UserPlus, Star } from 'lucide-react';

const developers = [
    {
        id: 1,
        name: "Ariful Islam",
        role: "Frontend Lead",
        specialty: "React & Next.js",
        skills: ["React", "Next.js", "Tailwind", "TypeScript"],
        experience: "4+ Years",
        availability: "Available",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arif"
    },
    {
        id: 2,
        name: "Samiul Basir",
        role: "Backend Architect",
        specialty: "Node.js & Go",
        skills: ["Node.js", "Go", "PostgreSQL", "Redis"],
        experience: "5+ Years",
        availability: "Busy",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sami"
    },
    {
        id: 3,
        name: "Tarek Ahmed",
        role: "Full Stack Developer",
        specialty: "MERN Ecosystem",
        skills: ["MongoDB", "Express", "React", "Node"],
        experience: "3+ Years",
        availability: "Available",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tarek"
    },
    {
        id: 4,
        name: "Mahfuzur Rahman",
        role: "UI/UX Designer",
        specialty: "Design Systems",
        skills: ["Figma", "React", "Framer Motion", "CSS"],
        experience: "4+ Years",
        availability: "Available",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mahfuz"
    },
    {
        id: 5,
        name: "Tanvir Hossein",
        role: "Mobile App Expert",
        specialty: "React Native",
        skills: ["React Native", "Firebase", "Redux", "Expo"],
        experience: "3+ Years",
        availability: "Part-time",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tanvir"
    },
    {
        id: 6,
        name: "Sadia Afrin",
        role: "Frontend Engineer",
        specialty: "Vue & Nuxt",
        skills: ["Vue.js", "Nuxt.js", "Tailwind", "Javascript"],
        experience: "3+ Years",
        availability: "Available",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sadia"
    },
    {
        id: 7,
        name: "Rakibul Hasan",
        role: "DevOps Engineer",
        specialty: "Cloud & CI/CD",
        skills: ["Docker", "Kubernetes", "AWS", "Jenkins"],
        experience: "4+ Years",
        availability: "Busy",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rakib"
    },
    {
        id: 8,
        name: "Naimur Rahman",
        role: "WordPress Expert",
        specialty: "Custom Themes",
        skills: ["PHP", "WordPress", "Elementor", "WooCommerce"],
        experience: "5+ Years",
        availability: "Available",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Naimur"
    },
    {
        id: 9,
        name: "Fahad Al-Mamun",
        role: "Backend Dev",
        specialty: "Python & Django",
        skills: ["Python", "Django", "FastAPI", "SQL"],
        experience: "3+ Years",
        availability: "Available",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fahad"
    },
    {
        id: 10,
        name: "Ayesha Siddiqua",
        role: "Python Dev",
        specialty: "Data Science",
        skills: ["Python", "Pandas", "Scikit-Learn", "Numpy"],
        experience: "2+ Years",
        availability: "Part-time",
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayesha"
    }
];

const DevelopersList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filter, setFilter] = useState("All");

    const filteredDevelopers = developers.filter(dev => {
        const matchesSearch = dev.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            dev.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            dev.specialty.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === "All" || dev.availability === filter;
        return matchesSearch && matchesFilter;
    });

    return (
        <section className="relative bg-[#050505] py-24 px-4 md:px-10 overflow-hidden font-sans border-t border-white/5">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6">
                            <Star className="w-4 h-4 fill-blue-400" />
                            DEVELOPER NETWORK
                        </div>
                        <h2 className="text-white text-5xl md:text-6xl font-black tracking-tighter mb-6 leading-none">
                            FIND THE <span className="text-blue-500">RIGHT</span>
                            <br />
                            TALENT FOR YOUR TEAM
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl max-w-xl">
                            A curated network of professional developers I've worked with. High-quality codes, guaranteed reliability.
                        </p>
                    </div>

                    {/* Search & Filter */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search talent..."
                                className="bg-[#111] border border-white/5 rounded-2xl py-4 pl-12 pr-6 text-white focus:outline-none focus:border-blue-500/50 w-full md:w-64 transition-all"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <select
                            className="bg-[#111] border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-blue-500/50 transition-all cursor-pointer"
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                        >
                            <option value="All">All Status</option>
                            <option value="Available">Available</option>
                            <option value="Part-time">Part-time</option>
                            <option value="Busy">Busy</option>
                        </select>
                    </div>
                </div>

                {/* Developer Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredDevelopers.map((dev) => (
                        <DeveloperCard key={dev.id} dev={dev} />
                    ))}
                </div>

                {/* Footer Message */}
                <div className="mt-20 text-center bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] p-12 border border-white/5 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
                    <div className="relative z-10">
                        <h3 className="text-white text-3xl font-bold mb-4">Want to Join My Network?</h3>
                        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                            If you're a high-performing developer looking for exciting projects, let's collaborate.
                        </p>
                        <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-2xl font-bold hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105">
                            <UserPlus className="w-5 h-5" />
                            Apply to Network
                        </button>
                    </div>
                    {/* Decorative Background Elements */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors"></div>
                </div>
            </div>
        </section>
    );
};

const DeveloperCard = ({ dev }) => (
    <div className="group relative">
        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Main Card */}
        <div className="relative bg-[#111] rounded-[2.5rem] p-6 border border-white/5 group-hover:border-blue-500/30 transition-all duration-500 h-full flex flex-col">
            {/* Top Bar: Image and Status */}
            <div className="flex justify-between items-start mb-6">
                <div className="relative">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-1 group-hover:scale-105 transition-transform duration-500">
                        <img
                            src={dev.image}
                            alt={dev.name}
                            className="w-full h-full rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        />
                    </div>
                </div>
                <div className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-colors ${dev.availability === 'Available' ? 'bg-green-500/10 border-green-500/30 text-green-400' :
                        dev.availability === 'Busy' ? 'bg-red-500/10 border-red-500/30 text-red-400' :
                            'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
                    }`}>
                    {dev.availability}
                </div>
            </div>

            {/* Content */}
            <div className="flex-grow">
                <h3 className="text-white text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">
                    {dev.name}
                </h3>
                <p className="text-gray-400 text-sm font-medium mb-1">{dev.role}</p>
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                    <Code2 className="w-3 h-3 text-blue-500" />
                    {dev.specialty}
                    <span className="mx-1 opacity-30">|</span>
                    <Zap className="w-3 h-3 text-yellow-500" />
                    {dev.experience}
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {dev.skills.map((skill, i) => (
                        <span
                            key={i}
                            className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-gray-400 group-hover:text-white transition-colors border border-white/5"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-6 border-t border-white/5">
                <a
                    href={dev.github}
                    className="flex-1 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-xl py-3 flex items-center justify-center transition-all group/btn"
                >
                    <Github className="w-4 h-4 text-gray-400 group-hover/btn:text-white group-hover/btn:scale-110 transition-all" />
                </a>
                <a
                    href={dev.linkedin}
                    className="flex-1 bg-white/5 hover:bg-blue-600 border border-white/5 hover:border-transparent rounded-xl py-3 flex items-center justify-center transition-all group/btn"
                >
                    <Linkedin className="w-4 h-4 text-gray-400 group-hover/btn:text-white group-hover/btn:scale-110 transition-all" />
                </a>
                <button
                    className="flex-1 bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3 flex items-center justify-center transition-all group/btn shadow-lg shadow-blue-600/20"
                >
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    </div>
);

export default DevelopersList;

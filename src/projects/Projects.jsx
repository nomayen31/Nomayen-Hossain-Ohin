import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Zap, ArrowUpRight, Sparkles } from 'lucide-react';

import { projectData } from '../data/content';

const Projects = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="relative bg-black py-32 px-4 md:px-10 overflow-hidden font-sans">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4" />
                        PORTFOLIO SHOWCASE
                    </div>
                    <h2 className="text-white text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
                        SELECTED
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                            PROJECTS
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Transforming ideas into scalable digital solutions through code, design, and innovation
                    </p>
                </div>

                {/* Interactive Tabs */}
                <div className="flex justify-center mb-16">
                    <div className="inline-flex bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-1.5 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
                        {projectData.categories.map((cat, idx) => (
                            <button
                                key={cat.name}
                                onClick={() => setActiveTab(idx)}
                                className={`relative px-8 py-4 rounded-2xl text-sm font-bold transition-all duration-500 ${activeTab === idx
                                    ? 'text-white'
                                    : 'text-gray-500 hover:text-white'
                                    }`}
                            >
                                {activeTab === idx && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg shadow-blue-500/50"></div>
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    <Zap className="w-4 h-4" />
                                    {cat.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid with Stagger Animation */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projectData.categories[activeTab].projects.map((project, idx) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={idx}
                            isHovered={hoveredCard === project.id}
                            onHover={() => setHoveredCard(project.id)}
                            onLeave={() => setHoveredCard(null)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index, isHovered, onHover, onLeave }) => (
    <div
        className="group relative"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        style={{
            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
        }}
    >
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

        <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2rem] p-8 border border-white/10 flex flex-col h-full hover:border-white/30 transition-all duration-500 shadow-2xl overflow-hidden backdrop-blur-sm">
            {/* Floating Particles Effect */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150"></div>

            {/* Header */}
            <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <Code2 className="w-7 h-7" />
                    </div>
                </div>
                <div className="flex gap-2">
                    {project.links.repo || project.links.clientRepo ? (
                        <a
                            href={project.links.repo || project.links.clientRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 hover:rotate-12 transition-all duration-300"
                            title="GitHub Repo"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    ) : null}
                    <a
                        href={project.links.live || project.links.client}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg shadow-blue-500/50"
                        title="Live Demo"
                    >
                        <ArrowUpRight className="w-5 h-5" />
                    </a>
                </div>
            </div>

            {/* Title */}
            <h3 className="relative text-white text-2xl font-bold mb-4 leading-tight z-10 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow relative z-10">
                {project.description}
            </p>

            {/* Features with Icons */}
            <div className="mb-6 space-y-2.5 relative z-10">
                {project.features.slice(0, 3).map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-gray-400 group/item hover:text-blue-300 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-1.5 group-hover/item:scale-150 transition-transform"></div>
                        <span className="line-clamp-1 flex-1">{feature}</span>
                    </div>
                ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {project.techStack.map((tech, i) => (
                    <span
                        key={i}
                        className="text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 rounded-full hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 cursor-default"
                        style={{ transitionDelay: `${i * 50}ms` }}
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
        </div>

        <style jsx>{`
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `}</style>
    </div>
);

export default Projects;
import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, MapPin, Briefcase, Code, Sparkles, CheckCircle, Star } from 'lucide-react';
import profileImg from '../../src/assets/ohin3.jpeg';
import cvFile from '../../src/assets/Nomayen_Hossain.pdf';
import { Link } from 'react-router';

const HireMeHero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const skills = ['MERN Stack', 'React.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Full Stack'];

    return (
        <section className="relative bg-black min-h-screen flex items-center overflow-hidden font-sans border-b border-white/5">
            {/* Animated Background Grid */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                    transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
                }}></div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[150px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-600/10 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-7xl mx-auto px-4 md:px-10 py-20 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 backdrop-blur-sm">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-green-400 text-sm font-semibold">Available for Work</span>
                        </div>

                        {/* Main Heading */}
                        <div>
                            <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-4">
                                LET'S BUILD
                                <br />
                                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                                    TOGETHER
                                </span>
                            </h1>
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                                Full-Stack Developer specializing in <span className="text-blue-400 font-semibold">MERN Stack</span> with a passion for building scalable web applications. Ready to transform your ideas into reality.
                            </p>
                        </div>

                        {/* Location & Role */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 text-gray-400">
                                <MapPin className="w-5 h-5 text-blue-500" />
                                <span className="text-sm font-medium">Dhaka, Bangladesh</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <Briefcase className="w-5 h-5 text-purple-500" />
                                <span className="text-sm font-medium">Full-Stack Developer</span>
                            </div>
                        </div>

                        {/* Skills Tags */}
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 rounded-full text-sm font-semibold hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/80 hover:scale-105 transition-all duration-300 overflow-hidden">
                                <Link
                                    to="https://calendly.com/nomayen-ohin/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 flex items-center gap-3 target"
                                >
                                    Hire Me Now
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>

                            <a
                                href={cvFile}
                                download="Nomayen_Hossain.pdf"
                                className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 flex items-center gap-3"
                            >
                                Download CV
                                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                            </a>

                            <button className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/30 hover:scale-105 transition-all duration-300 flex items-center gap-3">
                                <Mail className="w-5 h-5" />
                                Contact
                            </button>
                        </div>

                    </div>

                    {/* Right Image Section */}
                    <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

                        {/* Main Image Card */}
                        <div className="relative group">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                            {/* Image Container */}
                            <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[3rem] p-2 border border-white/20 overflow-hidden shadow-2xl">
                                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                                    <img
                                        src={profileImg}
                                        alt="Developer at work"
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                    {/* Floating Badge - Top */}
                                    <div className="absolute top-6 right-6 bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 shadow-2xl">
                                        <div className="flex items-center gap-2">
                                            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                            <div>
                                                <div className="text-white font-bold text-sm">Top Rated</div>
                                                <div className="text-gray-400 text-xs">Developer</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Badge - Bottom Left */}
                                    <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-3 shadow-2xl">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                                                <CheckCircle className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold text-sm">Quality Work</div>
                                                <div className="text-gray-400 text-xs">Guaranteed</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Code Snippet Floating Element */}
                                    <div className="absolute bottom-6 right-6 bg-black/90 backdrop-blur-xl border border-green-500/30 rounded-xl px-3 py-2 font-mono text-xs shadow-2xl">
                                        <div className="text-green-400">
                                            <span className="text-purple-400">const</span> status = <span className="text-yellow-400">"available"</span>;
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Dots */}
                            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
                                <div className="absolute top-0 right-0 w-4 h-4 bg-blue-500 rounded-full opacity-50"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 bg-purple-500 rounded-full opacity-50"></div>
                                <div className="absolute top-1/2 right-10 w-3 h-3 bg-pink-500 rounded-full opacity-50"></div>
                            </div>
                        </div>

                        {/* Tech Icons Floating */}
                        <div className="absolute -left-6 top-1/4 bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl animate-float">
                            <Code className="w-8 h-8 text-blue-400" />
                        </div>

                        <div className="absolute -right-6 bottom-1/3 bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl animate-float" style={{ animationDelay: '1s' }}>
                            <Sparkles className="w-8 h-8 text-purple-400" />
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      ` }} />
        </section>
    );
};

export default HireMeHero;

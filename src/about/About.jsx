import React, { useState } from 'react';
import {
    User, Code2, Rocket, Award,
    Gamepad2, Film, Plane,
    Layers, Video, Languages,
    Briefcase, GraduationCap,
    ExternalLink, Mail, Phone, MapPin,
    Calendar, Trophy, Cloud, Landmark, Brain, Github,
    Linkedin,
    Dribbble,
    Instagram,
    Link,
    Sparkles,
    Zap,
    ArrowUpRight
} from 'lucide-react';
import profileImg from '../../src/assets/ohin2.jfif'


const About = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <section className="relative min-h-screen bg-black py-32 px-4 md:px-10 overflow-hidden font-sans">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-6xl mx-auto flex flex-col gap-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4" />
                        ABOUT ME
                    </div>
                    <h2 className="text-white text-6xl md:text-7xl font-black tracking-tighter mb-4 leading-none">
                        WHO I
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            AM
                        </span>
                    </h2>
                </div>

                {/* Top Section: Profile and Bio */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Profile Card */}
                    <div className="md:col-span-4 group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-2 border border-white/10 group-hover:border-white/20 transition-all duration-500 shadow-2xl overflow-hidden">
                            <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                                <img
                                    src={profileImg}
                                    alt="Nomayen"
                                    className="w-full h-full object-cover brightness-110 contrast-105 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                
                                {/* Name Badge */}
                                <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl">
                                    <div className="text-white font-bold text-xl">Nomayen Hossain</div>
                                    <div className="text-blue-400 text-sm font-medium">Full-Stack Developer</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bio and Interests Container */}
                    <div className="md:col-span-8 flex flex-col gap-6">
                        {/* Bio Card */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-10 border border-white/10 group-hover:border-white/20 shadow-2xl transition-all duration-500">
                                <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl"></div>
                                
                                <p className="text-gray-300 text-xl md:text-2xl font-medium leading-relaxed relative z-10">
                                    My name is{" "}
                                    <span className="text-white font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Nomayen Hossain</span>, a
                                    passionate{" "}
                                    <span className="text-white font-semibold">Frontend Developer</span> and{" "}
                                    <span className="text-white font-semibold">Software Engineer</span> who builds
                                    fast, modern, and user-friendly web experiences. I specialize in{" "}
                                    <span className="text-blue-400 font-semibold">
                                        React, Next.js, TypeScript, and Tailwind CSS
                                    </span>
                                    , crafting clean, intuitive interfaces that feel smooth and powerful to use.
                                </p>

                                <p className="mt-6 text-gray-400 text-lg leading-relaxed relative z-10">
                                    With strong backend experience in{" "}
                                    <span className="text-purple-400 font-semibold">Node.js, NestJS, Prisma, and PostgreSQL</span>, I
                                    build complete, scalable products from UI to database. I also run{" "}
                                    <span className="text-white font-semibold">Impulseia</span>, where I deliver real-world
                                    solutions in web development, digital marketing, and business automation.
                                </p>

                                <p className="mt-6 text-gray-400 text-lg leading-relaxed relative z-10">
                                    I'm focused on becoming a high-level full-stack engineer, building global
                                    products where performance, design, and code quality truly matter.
                                </p>
                            </div>
                        </div>

                        {/* Interests Strip */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-6 px-10 border border-white/10 group-hover:border-white/20 shadow-xl transition-all duration-500">
                                <div className="flex flex-col md:flex-row md:items-center gap-6">
                                    <h3 className="text-white text-xl font-bold flex items-center gap-2 md:border-r md:border-white/10 md:pr-8">
                                        <Zap className="w-5 h-5 text-yellow-400" />
                                        Interests
                                    </h3>

                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 flex-1">
                                        <InterestTag icon={<Gamepad2 className="w-4 h-4" />} label="Gaming" />
                                        <InterestTag icon={<Trophy className="w-4 h-4" />} label="Sports" />
                                        <InterestTag icon={<Cloud className="w-4 h-4" />} label="Coding" />
                                        <InterestTag icon={<Landmark className="w-4 h-4" />} label="Politics" />
                                        <InterestTag icon={<Brain className="w-4 h-4" />} label="Thinking" />
                                        <InterestTag icon={<Rocket className="w-4 h-4" />} label="Innovation" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ExperienceCard
                        title="Softvence"
                        subtitle="Backend Developer"
                        date="Nov 2025 - Jan 2026"
                        points={[
                            "Assisted in backend development and server-side features",
                            "Worked with REST APIs and data handling",
                            "Managed database operations using PostgreSQL and Prisma",
                            "Supported authentication and core application logic"
                        ]}
                    />
                    
                    <ExperienceCard
                        title="PPC Rockers"
                        subtitle="Jr Web Developer"
                        date="Apr 2025 - Nov 2025"
                        points={[
                            "Worked on WordPress landing pages and supported lead developers",
                            "Crafted unique digital identities for projects",
                            "Used WordPress, React, Javascript for modern frontends"
                        ]}
                    />

                    <ExperienceCard
                        title="Kodeeo Limited"
                        subtitle="Frontend Developer (React)"
                        date="2023 – 2024"
                        points={[
                            "Collaborated with lead developers to build user interfaces",
                            "Designed clean, modern UI components",
                            "Developed responsive layouts using React and Tailwind",
                            "Optimized performance across devices"
                        ]}
                    />
                </div>

                {/* Education Section */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-10 border border-white/10 group-hover:border-white/20 shadow-2xl transition-all duration-500">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-white text-3xl font-bold">Education</h3>
                        </div>

                        {/* Timeline */}
                        <div className="space-y-10 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-0 top-0 w-[1px] h-full ml-3 bg-gradient-to-b from-white/10 via-white/10 to-transparent"></div>

                            <EducationTimelineItem
                                year="2019 – 2020"
                                title="Secondary School Certificate (SSC)"
                                desc="Science — Completed with a strong academic foundation in Mathematics, General Knowledge, and Science subjects."
                                location="Bangladesh"
                            />

                            <EducationTimelineItem
                                year="2020 – 2023"
                                title="Diploma in Engineering"
                                desc="Computer Science & Technology — Focused on programming, web development, databases, and software fundamentals. Passed in 2023."
                                location="Bangladesh"
                            />

                            <EducationTimelineItem
                                year="2023 – Present"
                                title="BSc in Engineering"
                                desc="Computer Science & Engineering — Currently studying advanced software engineering, backend systems, and scalable application development."
                                location="Bangladesh"
                            />

                            {/* Continuous Growth Node */}
                            <div className="flex items-start gap-6 relative">
                                <div className="relative z-10 mt-1">
                                    <div className="w-3 h-3 rounded-full bg-white/40 shadow-[0_0_12px_rgba(255,255,255,0.35)]"></div>
                                </div>
                                <div className="pb-6">
                                    <p className="text-gray-400 text-sm uppercase tracking-wider">
                                        Learning Never Stops
                                    </p>
                                    <p className="text-white text-lg font-semibold mt-1">
                                        Continuous Growth
                                    </p>
                                    <p className="text-gray-500 mt-2 max-w-sm">
                                        Continuously improving through hands-on projects, new technologies, research, and real-world problem solving.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <TechCategory
                        title="🌐 Frontend & UI/UX"
                        skills={[
                            "React.js", "Next.js", "TanStack Query", "TailwindCSS",
                            "Sass", "shadcn", "Material UI", "Ant Design"
                        ]}
                    />
                    <TechCategory
                        title="💻 Backend & Core"
                        skills={[
                            "TypeScript", "Node.js", "NestJS", "Express.js", "Go", "C"
                        ]}
                    />
                    <TechCategory
                        title="💾 Databases & BaaS"
                        skills={[
                            "PostgreSQL", "Prisma", "MongoDB", "Redis", "Supabase", "Firebase", "Neon"
                        ]}
                    />
                    <TechCategory
                        title="☁️ DevOps & Cloud"
                        skills={[
                            "Docker", "Git", "GitHub Actions", "Vercel", "Railway", "Render", "Swagger", "WordPress"
                        ]}
                    />
                </div>

                {/* Bottom Section: Portfolio and Details */}
                <div className="grid grid-cols-1 gap-6">
                    {/* Portfolio Bar */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-6 px-10 border border-white/10 group-hover:border-white/20 shadow-xl transition-all duration-500">
                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                <h3 className="text-white text-xl font-bold md:border-r md:border-white/10 md:pr-8">Portfolio</h3>
                                <div className="grid grid-cols-2 md:flex md:flex-wrap gap-3 flex-1">
                                    <SocialLink label="GitHub" href="https://github.com/nomayen31" icon={<Github className="w-4 h-4" />} />
                                    <SocialLink label="LinkedIn" href="https://www.linkedin.com/in/nomayen-hossain/" icon={<Linkedin className="w-4 h-4" />} />
                                    <SocialLink label="Dribbble" href="https://dribbble.com/nomayen072" icon={<Dribbble className="w-4 h-4" />} />
                                    <SocialLink label="Instagram" href="https://www.instagram.com/nomayen._.31/" icon={<Instagram className="w-4 h-4" />} />
                                    <SocialLink label="Linktree" href="https://lnk.bio/nomayen31" icon={<Link className="w-4 h-4" />} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Personal Details Bar */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-6 px-10 border border-white/10 group-hover:border-white/20 shadow-xl transition-all duration-500">
                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                <h3 className="text-white text-xl font-bold md:border-r md:border-white/10 md:pr-8">Details</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 flex-1">
                                    <DetailIcon icon={<Calendar className="w-4 h-4 text-blue-400" />} label="22 years" />
                                    <DetailIcon icon={<Mail className="w-4 h-4 text-red-400" />} label="nomayen.ohin@gmail.com" />
                                    <DetailIcon icon={<Phone className="w-4 h-4 text-green-400" />} label="+880 1760843880" />
                                    <DetailIcon icon={<MapPin className="w-4 h-4 text-purple-400" />} label="Bangladesh" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper Components
const InterestTag = ({ icon, label }) => (
    <div className="group/item bg-white/5 backdrop-blur-sm rounded-2xl p-3 px-4 flex items-center justify-center gap-2 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all cursor-default border border-white/10 hover:border-transparent hover:scale-105">
        <div className="group-hover/item:rotate-12 transition-transform flex-shrink-0">{icon}</div>
        <span className="text-sm font-semibold">{label}</span>
    </div>
);

const ExperienceCard = ({ title, subtitle, date, points }) => (
    <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-8 border border-white/10 group-hover:border-white/20 shadow-2xl transition-all duration-500 h-full flex flex-col">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-white text-2xl font-bold mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">{title}</h3>
                    <p className="text-gray-400 font-medium text-sm">{subtitle}</p>
                </div>
            </div>
            <span className="inline-flex items-center gap-2 bg-white/5 px-4 py-2 rounded-xl text-gray-400 text-xs font-bold border border-white/5 mb-6">
                <Calendar className="w-3 h-3" />
                {date}
            </span>
            <ul className="space-y-3 flex-grow">
                {points.map((pt, i) => (
                    <li key={i} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                        <span className="text-blue-500 font-bold mt-1">•</span>
                        <span>{pt}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const EducationTimelineItem = ({ year, title, desc, location }) => (
    <div className="pl-10 relative group/edu">
        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-zinc-900 border-2 border-white/20 group-hover/edu:border-green-500 transition-colors z-10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white/40 group-hover/edu:bg-green-500 transition-colors"></div>
        </div>
        <div className="flex justify-between items-start mb-2">
            <h4 className="text-white text-xl font-bold">{title}</h4>
            <span className="bg-white/5 px-3 py-1 rounded-lg text-gray-400 text-xs font-bold border border-white/5">{year}</span>
        </div>
        <p className="text-gray-400 text-sm mb-1 leading-relaxed">{desc}</p>
        <p className="text-gray-600 text-xs italic">{location}</p>
    </div>
);

const SocialLink = ({ label, href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group/social bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2 px-5 flex items-center gap-3 text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:border-transparent transition-all hover:scale-105"
    >
        <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover/social:text-white group-hover/social:rotate-12 transition-all">
            {icon}
        </div>
        <span className="text-sm font-bold">{label}</span>
        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/social:opacity-100 transition-opacity" />
    </a>
);

const DetailIcon = ({ icon, label }) => (
    <div className="flex items-center gap-3 group/detail">
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover/detail:scale-110 group-hover/detail:rotate-6 transition-all">
            {icon}
        </div>
        <span className="text-gray-400 text-sm font-medium group-hover/detail:text-white transition-colors">{label}</span>
    </div>
);

const TechCategory = ({ title, skills }) => (
    <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] p-8 border border-white/10 group-hover:border-white/20 shadow-2xl transition-all duration-500">
            <h3 className="text-white text-xl font-bold mb-6">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                    <SkillBadge key={i} label={skill} index={i} />
                ))}
            </div>
        </div>
    </div>
);

const SkillBadge = ({ label, index }) => (
    <span 
        className="bg-white/5 backdrop-blur-sm text-gray-300 px-4 py-2 rounded-xl text-sm font-medium border border-white/10 hover:border-white/30 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:scale-105 transition-all cursor-default"
        style={{ transitionDelay: `${index * 30}ms` }}
    >
        {label}
    </span>
);

export default About;
import React, { useState } from 'react';
import { Award, Calendar, CheckCircle2, ExternalLink, Sparkles, Trophy } from 'lucide-react';

const certificationsData = {
    "certifications": [
        {
            "id": "kodeeo-bootcamp",
            "title": "Industrial Training Bootcamp",
            "issuer": "Kodeeo",
            "issueDate": "December 2023",
            "skills": [
                "React.js",
                "Express.js",
                "MongoDB",
                "Node.js",
                "GitHub"
            ],
            "credentialUrl": "",
            "image": "https://media.licdn.com/dms/image/v2/D4E2DAQHppxHy2idfqg/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1731866071840?e=1768982400&v=beta&t=_qRiPE5lN8bYG-M51Nfqj6sXPOYMmomQJ_snU9jSxig"
        },
        {
            "id": "wordpress-design",
            "title": "Responsive Web Design with WordPress",
            "issuer": "Townsoft Training LTD",
            "issueDate": "January 2022",
            "skills": [
                "WordPress Design",
                "HTML5",
                "CSS3",
                "JavaScript",
                "Tailwind CSS",
                "Bootstrap",
                "GitHub"
            ],
            "credentialUrl": "",
            "image": "https://media.licdn.com/dms/image/v2/D4E2DAQH8Zpp8bqQp5g/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1731865850197?e=1768982400&v=beta&t=dRV1w4XCffSaTen4ubqLoObnF3JIuUich8F0HH4FnhY"
        },
        {
            "id": "freecodecamp-responsive",
            "title": "Responsive Web Design",
            "issuer": "freeCodeCamp",
            "issueDate": "October 2021",
            "skills": [
                "HTML5",
                "CSS3",
                "JavaScript"
            ],
            "credentialUrl": "",
            "image": "https://media.licdn.com/dms/image/v2/D4E2DAQFVCyBxcKCMyA/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1731864838181?e=1768982400&v=beta&t=iuiv37nGno6mxUFbmNQbk8HgIX9m4fKgcaj-Cdeerk8"
        },
        {
            "id": "microsoft-office",
            "title": "Microsoft Office Specialist Certification",
            "issuer": "Great and Smart Technology Limited",
            "issueDate": "July 2019",
            "skills": [
                "Microsoft Office",
                "Microsoft Excel",
                "Microsoft Word",
                "Microsoft PowerPoint"
            ],
            "credentialUrl": "",
            "image": "https://media.licdn.com/dms/image/v2/D4E2DAQFFeTu8uim77A/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1731865604898?e=1768982400&v=beta&t=p6SrDw51tdUa8ASgJnuo6L_6mMzq3G9_FER_l1Y22tw"
        }
    ]
};

const Certifications = () => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="relative bg-black py-32 px-4 md:px-10 overflow-hidden font-sans">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-500/10 to-blue-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-semibold mb-6 backdrop-blur-sm">
                        <Trophy className="w-4 h-4" />
                        ACHIEVEMENTS & CREDENTIALS
                    </div>
                    <h2 className="text-white text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
                        CERTIFIED
                        <br />
                        <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                            EXCELLENCE
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Professional certifications and training programs that validate my expertise and commitment to continuous learning
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certificationsData.certifications.map((cert, index) => (
                        <CertificationCard
                            key={cert.id}
                            cert={cert}
                            index={index}
                            isHovered={hoveredId === cert.id}
                            onHover={() => setHoveredId(cert.id)}
                            onLeave={() => setHoveredId(null)}
                        />
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
                    <StatCard number={certificationsData.certifications.length} label="Certifications" />
                    <StatCard number="15+" label="Skills Mastered" />
                    <StatCard number="4+" label="Training Programs" />
                    <StatCard number="100%" label="Commitment" />
                </div>
            </div>
        </section>
    );
};

const CertificationCard = ({ cert, index, isHovered, onHover, onLeave }) => (
    <div
        className="group relative"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        style={{
            animation: `slideIn 0.6s ease-out ${index * 0.15}s backwards`
        }}
    >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>

        <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-500 shadow-2xl overflow-hidden backdrop-blur-sm h-full flex flex-col">
            {/* Floating Orb */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-150"></div>

            {/* Header with Image */}
            <div className="flex items-start gap-6 mb-6 relative z-10">
                {/* Certificate Image */}
                <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity rounded-2xl"></div>
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden border-2 border-white/20 group-hover:border-yellow-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-xl">
                        <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Title and Issuer */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-white text-xl font-bold leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                            {cert.title}
                        </h3>
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                            <Award className="w-5 h-5" />
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm font-medium mb-3">{cert.issuer}</p>
                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{cert.issueDate}</span>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="relative z-10 mb-6 flex-grow">
                <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    <h4 className="text-white text-sm font-bold uppercase tracking-wider">Skills Acquired</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, i) => (
                        <span
                            key={i}
                            className="group/skill relative px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 rounded-full text-xs font-semibold hover:bg-gradient-to-r hover:from-yellow-600 hover:to-orange-600 hover:text-white hover:border-transparent hover:scale-105 transition-all duration-300 cursor-default overflow-hidden"
                            style={{ transitionDelay: `${i * 40}ms` }}
                        >
                            <span className="relative z-10 flex items-center gap-1.5">
                                <CheckCircle2 className="w-3 h-3 opacity-0 group-hover/skill:opacity-100 transition-opacity" />
                                {skill}
                            </span>
                        </span>
                    ))}
                </div>
            </div>

            {/* View Credential Button */}
            {cert.credentialUrl && (
                <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-xl font-bold text-sm hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 mt-auto"
                >
                    <span>View Credential</span>
                    <ExternalLink className="w-4 h-4" />
                </a>
            )}

            {/* Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
        </div>

        <style jsx>{`
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateX(-30px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `}</style>
    </div>
);

const StatCard = ({ number, label }) => (
    <div className="group relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
        <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-2xl p-6 border border-white/10 group-hover:border-yellow-500/30 transition-all duration-500 text-center backdrop-blur-sm">
            <div className="text-4xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                {number}
            </div>
            <div className="text-gray-400 text-sm font-semibold uppercase tracking-wider">
                {label}
            </div>
        </div>
    </div>
);

export default Certifications;


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink, Github, Loader2 } from 'lucide-react';

const GithubRepos = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                // Fetch public repositories sorted by recently updated
                const response = await fetch('https://api.github.com/users/nomayen31/repos?sort=updated&per_page=100');
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                const data = await response.json();
                // Filter out forks if desired, or keep them. Here we keep everything but maybe filter out empty ones?
                // Let's just filter out repositories with no description to keep UI clean, or very old ones?
                // For now, raw list sorted by update is usually best.
                setRepos(data);
            } catch (err) {
                console.error("GitHub Fetch Error:", err);
                setError("Failed to load repositories. Please check connection.");
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    const visibleRepos = repos.slice(0, visibleCount);

    const getLanguageColor = (lang) => {
        const colors = {
            'JavaScript': '#F7DF1E',
            'TypeScript': '#3178C6',
            'HTML': '#E34F26',
            'CSS': '#1572B6',
            'Python': '#3776AB',
            'Java': '#007396',
            'Vue': '#4FC08D',
            'React': '#61DAFB'
        };
        return colors[lang] || '#CBD5E1'; // Default slate-300
    };

    return (
        <section className="py-20 bg-[#0f071a] relative">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4"
                    >
                        <Github className="w-4 h-4 text-white" />
                        <span className="text-sm text-gray-300">Open Source</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">GitHub</span> Repositories
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore my latest code, contributions, and personal projects directly from GitHub.
                    </p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-40">
                        <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
                    </div>
                ) : error ? (
                    <div className="text-center text-red-400 p-4 border border-red-500/20 rounded-xl bg-red-500/10 max-w-md mx-auto">
                        {error}
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {visibleRepos.map((repo, i) => (
                                <motion.div
                                    key={repo.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    className="group relative bg-[#1a0b2e]/50 border border-white/5 rounded-2xl p-6 hover:bg-white/5 transition-all duration-300"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                                                <Github className="w-5 h-5 text-gray-300 group-hover:text-purple-400" />
                                            </div>
                                            <h3 className="text-lg font-semibold text-white truncate max-w-[180px]" title={repo.name}>
                                                {repo.name}
                                            </h3>
                                        </div>
                                        <a
                                            href={repo.html_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    </div>

                                    <p className="text-gray-400 text-sm mb-6 h-10 line-clamp-2">
                                        {repo.description || "No description provided."}
                                    </p>

                                    <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4">
                                        {repo.language && (
                                            <div className="flex items-center gap-1.5">
                                                <span
                                                    className="w-2.5 h-2.5 rounded-full"
                                                    style={{ backgroundColor: getLanguageColor(repo.language) }}
                                                />
                                                {repo.language}
                                            </div>
                                        )}

                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <Star className="w-3.5 h-3.5" />
                                                <span>{repo.stargazers_count}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <GitFork className="w-3.5 h-3.5" />
                                                <span>{repo.forks_count}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {visibleCount < repos.length && (
                            <div className="flex justify-center mt-12">
                                <button
                                    onClick={() => setVisibleCount(prev => prev + 6)}
                                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 hover:scale-105 transition-all"
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
};

export default GithubRepos;

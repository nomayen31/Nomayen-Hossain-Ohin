
import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectData, blogPosts } from '../data/content';
import { Share2, Code, FileText, Database, Layers, Layout, Server, Cpu } from 'lucide-react';

const SkillGraph = () => {
    // 1. Data Processing to Create Graph
    const graphData = useMemo(() => {
        const nodes = [];
        const links = [];
        const skillMap = new Map(); // Track distinct skills
        const projectMap = new Map(); // Track projects

        // Helper to add node if not exists
        const addNode = (id, type, label, data = {}) => {
            const key = `${type}-${id}`;
            if (!skillMap.has(key)) {
                const node = { id: key, type, label, ...data, connections: 0 };
                nodes.push(node);
                skillMap.set(key, node);
            }
            return skillMap.get(key);
        };

        // Helper to add link
        const addLink = (sourceId, targetId) => {
            // Avoid duplicate links in either direction
            const linkExists = links.some(l =>
                (l.source === sourceId && l.target === targetId) ||
                (l.source === targetId && l.target === sourceId)
            );
            if (!linkExists) {
                links.push({ source: sourceId, target: targetId });
            }
        };

        // Extract from Projects
        projectData.categories.forEach(cat => {
            cat.projects.forEach(proj => {
                // Add Project Node
                const projNode = addNode(proj.id, 'project', proj.title, { desc: proj.description });
                projectMap.set(proj.id, projNode);

                // Add Tech Stack Nodes & Links
                proj.techStack.forEach(tech => {
                    const techNode = addNode(tech, 'skill', tech);
                    techNode.connections++;
                    projNode.connections++;
                    addLink(projNode.id, techNode.id);
                });
            });
        });

        // Extract from Blogs (connect tags to existing skills or new ones)
        blogPosts.forEach(post => {
            const postNode = addNode(post.id, 'blog', post.title, { excerpt: post.excerpt });

            post.tags.forEach(tag => {
                const tagNode = addNode(tag, 'skill', tag);
                tagNode.connections++;
                postNode.connections++;
                addLink(postNode.id, tagNode.id);
            });
        });

        // Assign initial Positions (Simple circular/random layout to start)
        nodes.forEach((node, i) => {
            node.x = Math.random() * 800 + 100;
            node.y = Math.random() * 500 + 50;
            // Centralize heavily connected nodes
            if (node.connections > 2) {
                node.x = 500 + (Math.random() - 0.5) * 200;
                node.y = 300 + (Math.random() - 0.5) * 200;
            }
        });

        return { nodes, links };
    }, []);

    const [activeNode, setActiveNode] = useState(null);
    const [hoveredNode, setHoveredNode] = useState(null);

    // Filter links based on interaction
    const visibleLinks = useMemo(() => {
        if (!hoveredNode && !activeNode) return graphData.links;
        const target = hoveredNode || activeNode;
        // Show only links connected to the target
        return graphData.links.map(link => ({
            ...link,
            active: link.source === target || link.target === target,
            dimmed: link.source !== target && link.target !== target
        }));
    }, [graphData.links, hoveredNode, activeNode]);


    // Icon Helper
    const getIcon = (type) => {
        switch (type) {
            case 'project': return <Layout className="w-5 h-5 text-blue-400" />;
            case 'blog': return <FileText className="w-5 h-5 text-purple-400" />;
            case 'skill': return <Code className="w-4 h-4 text-green-400" />;
            default: return <Share2 className="w-4 h-4 text-gray-400" />;
        }
    };

    return (
        <section className="relative w-full py-20 overflow-hidden bg-[#0f071a]">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.1),transparent_70%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-4"
                    >
                        <Share2 className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-gray-300">Interactive Knowledge Graph</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Neural Network</span> of My Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Explore the connections between my skills, projects, and articles. Hover over nodes to see how everything links together in my developer ecosystem.
                    </motion.p>
                </div>

                {/* Graph Visualization */}
                <div className="relative w-full h-[600px] bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl shadow-2xl">
                    {/* SVG Layer for Links */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        {visibleLinks.map((link, i) => {
                            // Find actual node coordinates (simplified for demo, usually requires force simulation per frame)
                            // In a full physics engine we'd update these. Here we use static positions for stability in this demo.
                            const source = graphData.nodes.find(n => n.id === link.source);
                            const target = graphData.nodes.find(n => n.id === link.target);

                            if (!source || !target) return null;

                            return (
                                <line
                                    key={i}
                                    x1={`${(source.x / 1000) * 100}%`}
                                    y1={`${(source.y / 600) * 100}%`}
                                    x2={`${(target.x / 1000) * 100}%`}
                                    y2={`${(target.y / 600) * 100}%`}
                                    stroke={link.active ? "url(#gradient)" : "rgba(255,255,255,0.05)"}
                                    strokeWidth={link.active ? 2 : 1}
                                    className="transition-all duration-300"
                                    style={{ opacity: link.dimmed ? 0.1 : (link.active ? 0.8 : 0.2) }}
                                />
                            );
                        })}
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#60A5FA" />
                                <stop offset="100%" stopColor="#A855F7" />
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Nodes Layer */}
                    <div className="absolute inset-0 w-full h-full">
                        {graphData.nodes.map((node, i) => (
                            <motion.div
                                key={node.id}
                                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer
                                    ${activeNode === node.id ? 'z-50' : 'z-20'}
                                `}
                                style={{
                                    left: `${(node.x / 1000) * 100}%`,
                                    top: `${(node.y / 600) * 100}%`
                                }}
                                whileHover={{ scale: 1.2, zIndex: 100 }}
                                onHoverStart={() => setHoveredNode(node.id)}
                                onHoverEnd={() => setHoveredNode(null)}
                                onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
                            >
                                <motion.div
                                    className={`
                                        relative flex items-center justify-center rounded-full shadow-lg border transition-all duration-300
                                        ${node.type === 'project' ? 'w-16 h-16 bg-blue-900/40 border-blue-500/50' :
                                            node.type === 'blog' ? 'w-14 h-14 bg-purple-900/40 border-purple-500/50' :
                                                'w-10 h-10 bg-gray-800/40 border-gray-600/50'}
                                        ${(hoveredNode && hoveredNode !== node.id && activeNode !== node.id) ? 'opacity-20 blur-[1px]' : 'opacity-100'}
                                        ${(hoveredNode === node.id || activeNode === node.id) ? 'bg-white/20 border-white shadow-[0_0_30px_rgba(168,85,247,0.4)]' : ''}
                                    `}
                                >
                                    {getIcon(node.type)}
                                </motion.div>

                                {/* Tooltip / Label */}
                                <AnimatePresence>
                                    {(hoveredNode === node.id || activeNode === node.id) && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.8 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 5, scale: 0.8 }}
                                            className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-[#1a0b2e]/90 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-white min-w-[150px] text-center pointer-events-none z-[60]"
                                        >
                                            <p className="font-bold text-sm whitespace-nowrap">{node.label}</p>
                                            {node.desc && <p className="text-xs text-gray-400 mt-1 line-clamp-2">{node.desc}</p>}
                                            <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-wider">{node.type}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-8 gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-500"></span> Projects
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-purple-500"></span> Articles
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-green-500"></span> Skills
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillGraph;

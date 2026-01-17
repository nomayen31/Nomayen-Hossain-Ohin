import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Calendar, FileText, Layout, ExternalLink, ArrowRight } from 'lucide-react';
import { blogPosts, projectData, pageLinks } from '../data/content';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState({ blogs: [], projects: [], pages: [] });
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const searchRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchFocused(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        // Reset search when route changes
        setSearchTerm("");
        setIsSearchFocused(false);
        setIsMenuOpen(false);
    }, [location]);

    useEffect(() => {
        if (!searchTerm.trim()) {
            setSearchResults({ blogs: [], projects: [], pages: [] });
            return;
        }

        const lowerTerm = searchTerm.toLowerCase();

        // Search Blogs
        const matchedBlogs = blogPosts.filter(post =>
            post.title.toLowerCase().includes(lowerTerm) ||
            post.category.toLowerCase().includes(lowerTerm) ||
            post.tags.some(tag => tag.toLowerCase().includes(lowerTerm))
        ).slice(0, 3);

        // Search Projects
        const allProjects = projectData.categories.flatMap(cat => cat.projects);
        const matchedProjects = allProjects.filter(project =>
            project.title.toLowerCase().includes(lowerTerm) ||
            project.description.toLowerCase().includes(lowerTerm) ||
            project.techStack.some(tech => tech.toLowerCase().includes(lowerTerm))
        ).slice(0, 3);

        // Search Pages
        const matchedPages = pageLinks.filter(page =>
            page.name.toLowerCase().includes(lowerTerm)
        );

        setSearchResults({
            blogs: matchedBlogs,
            projects: matchedProjects,
            pages: matchedPages
        });

    }, [searchTerm]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Hire me', path: '/hire-me' },
    ];

    return (
        <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ${isScrolled ? 'top-2' : 'top-4'}`}>
            <div className="bg-[#1a0b2e]/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl relative">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-xl">N</span>
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight hidden sm:block">Nomayen</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-colors hover:text-purple-400 ${location.pathname === link.path ? 'text-purple-400' : 'text-gray-300'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Search & CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="relative group" ref={searchRef}>
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onFocus={() => setIsSearchFocused(true)}
                            className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 w-48 transition-all focus:w-80"
                        />

                        {/* Search Results Dropdown */}
                        {isSearchFocused && searchTerm && (
                            <div className="absolute top-full right-0 mt-4 w-96 bg-[#1a0b2e] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 z-50 max-h-[80vh] overflow-y-auto">
                                <div className="p-2">
                                    {/* Pages */}
                                    {searchResults.pages.length > 0 && (
                                        <div className="mb-2">
                                            <h4 className="text-xs font-bold text-gray-500 uppercase px-3 py-2">Pages</h4>
                                            {searchResults.pages.map(page => (
                                                <Link
                                                    key={page.path}
                                                    to={page.path}
                                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                                                >
                                                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                        <Layout className="w-4 h-4" />
                                                    </div>
                                                    <span className="text-white text-sm font-medium">{page.name}</span>
                                                    <ArrowRight className="w-3 h-3 text-gray-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </Link>
                                            ))}
                                        </div>
                                    )}

                                    {/* Blogs */}
                                    {searchResults.blogs.length > 0 && (
                                        <div className="mb-2">
                                            <h4 className="text-xs font-bold text-gray-500 uppercase px-3 py-2">Articles</h4>
                                            {searchResults.blogs.map(blog => (
                                                <Link
                                                    key={blog.id}
                                                    to={`/blogs/${blog.id}`}
                                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                                                >
                                                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors mt-1">
                                                        <FileText className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <div className="text-white text-sm font-medium line-clamp-1">{blog.title}</div>
                                                        <div className="text-gray-500 text-xs mt-0.5">{blog.readTime}</div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}

                                    {/* Projects */}
                                    {searchResults.projects.length > 0 && (
                                        <div className="mb-2">
                                            <h4 className="text-xs font-bold text-gray-500 uppercase px-3 py-2">Projects</h4>
                                            {searchResults.projects.map(project => (
                                                <a
                                                    key={project.id}
                                                    href={project.links.live || project.links.client}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                                                >
                                                    <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors mt-1">
                                                        <ExternalLink className="w-4 h-4" />
                                                    </div>
                                                    <div>
                                                        <div className="text-white text-sm font-medium line-clamp-1">{project.title}</div>
                                                        <div className="text-gray-500 text-xs mt-0.5 line-clamp-1">{project.description}</div>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    )}

                                    {/* No Results */}
                                    {Object.values(searchResults).every(arr => arr.length === 0) && (
                                        <div className="p-8 text-center">
                                            <Search className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                                            <p className="text-gray-400 text-sm">No results found for "{searchTerm}"</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to="https://calendly.com/nomayen-ohin/30min" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-purple-500/20 target:_blank">
                        <Calendar className="w-4 h-4" />
                        Booked an appointment
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-gray-300 hover:text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-16 left-0 right-0 md:hidden bg-[#1a0b2e]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 mt-2 flex flex-col gap-4 shadow-2xl animate-in fade-in zoom-in duration-200">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-lg font-medium py-2 border-b border-white/5 ${location.pathname === link.path ? 'text-purple-400' : 'text-gray-300'
                                }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 flex flex-col gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="bg-white/5 border border-white/10 rounded-full py-3 pl-10 pr-4 text-sm text-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                            />
                            {/* Mobile Search Results */}
                            {searchTerm && (
                                <div className="mt-4 bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                                    {/* Simple List for Mobile */}
                                    {[...searchResults.pages, ...searchResults.blogs, ...searchResults.projects].slice(0, 5).map((item, i) => (
                                        <Link
                                            key={i}
                                            to={item.path || (item.id ? `/blogs/${item.id}` : '#')}
                                            onClick={() => setIsMenuOpen(false)}
                                            className="block p-3 border-b border-white/5 last:border-0 text-gray-300 text-sm truncate"
                                        >
                                            {item.name || item.title}
                                        </Link>
                                    ))}
                                    {Object.values(searchResults).every(arr => arr.length === 0) && (
                                        <div className="p-4 text-center text-gray-500 text-sm">
                                            No results
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full text-sm font-semibold flex items-center justify-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Booked an appointment
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

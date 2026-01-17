import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, Tag, ArrowRight, TrendingUp, Sparkles, Eye, Heart, MessageCircle, BookOpen } from 'lucide-react';

import { blogPosts } from '../data/content';

const categories = ["All", "React", "Next.js", "Backend", "CSS", "Database", "DevOps"];

const Blogs = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [sortBy, setSortBy] = useState("latest");

    const filteredPosts = blogPosts
        .filter(post => {
            const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
            const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            if (sortBy === "latest") return new Date(b.date) - new Date(a.date);
            if (sortBy === "popular") return b.views - a.views;
            if (sortBy === "trending") return b.likes - a.likes;
            return 0;
        });

    const featuredPosts = blogPosts.filter(post => post.featured);

    return (
        <section className="relative bg-black min-h-screen py-20 px-4 md:px-10 overflow-hidden font-sans">
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[150px] animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-6 backdrop-blur-sm">
                        <BookOpen className="w-4 h-4" />
                        BLOG & INSIGHTS
                    </div>
                    <h1 className="text-white text-6xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
                        LATEST
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            ARTICLES
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Insights, tutorials, and thoughts on web development, design, and technology.
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="mb-12 space-y-6">
                    {/* Search Bar */}
                    <div className="relative group max-w-2xl mx-auto">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search articles, topics, or tags..."
                            className="w-full bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-3xl py-5 pl-16 pr-6 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-all shadow-2xl"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Category Filters and Sort */}
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                                        : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        {/* Sort Dropdown */}
                        <select
                            className="bg-gradient-to-br from-zinc-900 to-black border border-white/10 rounded-2xl py-3 px-6 text-white focus:outline-none focus:border-blue-500/50 transition-all cursor-pointer"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="latest">Latest First</option>
                            <option value="popular">Most Popular</option>
                            <option value="trending">Most Liked</option>
                        </select>
                    </div>
                </div>

                {/* Featured Posts */}
                {selectedCategory === "All" && !searchTerm && (
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <TrendingUp className="w-6 h-6 text-yellow-400" />
                            <h2 className="text-white text-3xl font-bold">Featured Articles</h2>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {featuredPosts.slice(0, 2).map((post) => (
                                <FeaturedCard key={post.id} post={post} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Blog Grid */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 mb-8">
                        <Sparkles className="w-6 h-6 text-blue-400" />
                        <h2 className="text-white text-3xl font-bold">
                            {searchTerm ? `Search Results (${filteredPosts.length})` : 'All Articles'}
                        </h2>
                    </div>

                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPosts.map((post) => (
                                <BlogCard key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                                <Search className="w-10 h-10 text-gray-600" />
                            </div>
                            <h3 className="text-white text-2xl font-bold mb-2">No articles found</h3>
                            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

const FeaturedCard = ({ post }) => (
    <Link to={`/blogs/${post.id}`} className="group relative block">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
        <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] border border-white/10 group-hover:border-white/20 overflow-hidden shadow-2xl transition-all duration-500 h-full">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-yellow-500 text-black rounded-full text-xs font-bold flex items-center gap-2">
                        <TrendingUp className="w-3 h-3" />
                        FEATURED
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-8">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full font-semibold">
                        {post.category}
                    </span>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                    </div>
                </div>

                <h3 className="text-white text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                    {post.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {post.views}
                        </div>
                        <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {post.likes}
                        </div>
                        <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {post.comments}
                        </div>
                    </div>
                    <span className="flex items-center gap-2 text-blue-400 font-bold group/btn">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                </div>
            </div>
        </div>
    </Link>
);

const BlogCard = ({ post }) => (
    <Link to={`/blogs/${post.id}`} className="group relative block">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative bg-gradient-to-br from-zinc-900 to-black rounded-[2.5rem] border border-white/10 group-hover:border-white/20 overflow-hidden shadow-2xl transition-all duration-500 h-full flex flex-col">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-3 text-xs text-gray-400">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 text-blue-400 rounded-full font-semibold">
                        {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                    </div>
                </div>

                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 flex-grow">{post.excerpt}</p>

                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views}
                    </div>
                    <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        {post.likes}
                    </div>
                </div>

                <span className="flex items-center gap-2 text-blue-400 font-bold text-sm group/btn mt-auto">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </span>
            </div>
        </div>
    </Link>
);

export default Blogs;

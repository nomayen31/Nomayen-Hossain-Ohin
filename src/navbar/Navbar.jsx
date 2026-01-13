import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Calendar } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Blogs', path: '/blogs' },
        { name: 'Hire me', path: '/hire-me' },
    ];

    return (
        <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl transition-all duration-300 ${isScrolled ? 'top-2' : 'top-4'}`}>
            <div className="bg-[#1a0b2e]/60 backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">

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
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 w-48 transition-all focus:w-64"
                        />
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
                                className="bg-white/5 border border-white/10 rounded-full py-3 pl-10 pr-4 text-sm text-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                            />
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

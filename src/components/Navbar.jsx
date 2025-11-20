import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = ({ onMoneyRain }) => {
    const [scrolled, setScrolled] = useState(false);
    const [logoClicks, setLogoClicks] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogoClick = (e) => {
        if (location.pathname === '/') {
            e.preventDefault();
        }
        setLogoClicks(prev => {
            const newCount = prev + 1;
            if (newCount === 5) {
                onMoneyRain();
                return 0;
            }
            return newCount;
        });
    };

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Events', path: '/events' },
        { name: 'Articles', path: '/articles' },
        { name: 'Resources', path: '/resources' },
        { name: 'Partners', path: '/partners' },
        { name: 'About', path: '/about' },
        { name: 'Join', path: '/join' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link
                    to="/"
                    onClick={handleLogoClick}
                    className="text-2xl font-bold tracking-tighter text-nothing-white select-none cursor-pointer font-dot uppercase"
                >
                    ESCP<span className="text-nothing-red">.</span>Finance
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-sm font-medium text-gray-300 hover:text-nothing-red transition-colors font-dot uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/join"
                        className="px-5 py-2 bg-nothing-white text-nothing-black font-bold text-sm hover:bg-nothing-red hover:text-white transition-colors font-dot uppercase tracking-widest"
                    >
                        Join Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

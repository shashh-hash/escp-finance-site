import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/logo.png';

const Navbar = ({ onMoneyRain, onToggleMatrix, onStockCrash, matrixMode }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [logoClicks, setLogoClicks] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location]);

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

    const handleLogoDoubleClick = () => {
        onStockCrash();
    };

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Articles', path: '/articles' },
        { name: 'Mission', path: '/mission' },
        { name: 'About Us', path: '/about' },
        { name: 'News', path: '/news' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-10 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-esf-midnight/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
            <div className="max-w-[1400px] mx-auto px-6 py-1 flex justify-between items-center">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={handleLogoClick}
                    onDoubleClick={handleLogoDoubleClick}
                    className="flex items-center gap-3 group"
                >
                    <img src={`${import.meta.env.BASE_URL}esf-logo.png`} alt="ESCP Students for Finance" className="h-12 w-auto object-contain" />
                    <span className="font-heading font-bold text-xl text-white tracking-wide hidden sm:block">ESCP Students for Finance</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-1">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`px-6 py-3 rounded-full font-sans text-base font-medium transition-all ${location.pathname === link.path
                                ? 'bg-white/10 text-white border border-white/10'
                                : 'text-esf-silver hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/join"
                        className="ml-4 px-8 py-3 bg-esf-accent text-esf-midnight font-heading font-bold text-base rounded-full hover:bg-white transition-all shadow-lg hover:shadow-esf-accent/20"
                    >
                        Join Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-esf-midnight border-t border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-4 space-y-2">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`block text-sm font-sans font-medium py-3 border-b border-white/5 ${location.pathname === link.path
                                        ? 'text-esf-accent'
                                        : 'text-esf-silver hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/join"
                                className="block w-full text-center px-6 py-4 bg-esf-accent text-esf-midnight font-heading font-bold text-sm rounded-full hover:bg-white transition-colors mt-6"
                            >
                                Join Now
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

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
        <nav
            className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 px-6 ${scrolled ? '' : ''
                }`}
        >
            <div className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-2xl shadow-float border border-esf-midnight/10' : 'bg-white/80 backdrop-blur-xl border border-esf-midnight/5'
                }`}>
                <div className="px-6 py-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center gap-3 group"
                        onClick={handleLogoClick}
                        onDoubleClick={handleLogoDoubleClick}
                    >
                        <img src={logoImg} alt="ESCP Finance Logo" className="h-12 w-auto" />
                        <div className="flex flex-col">
                            <span className="text-esf-midnight font-heading font-bold text-xl tracking-tight group-hover:text-esf-accent transition-colors">
                                ESCP Finance
                            </span>
                            <span className="text-esf-blue text-xs font-medium tracking-wider">STUDENTS FOR FINANCE</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-2">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-6 py-3 rounded-lg font-sans text-base font-medium transition-all ${location.pathname === link.path
                                    ? 'bg-esf-midnight/10 text-esf-midnight border border-esf-midnight/20'
                                    : 'text-esf-blue hover:text-esf-midnight hover:bg-esf-midnight/5'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/join"
                            className="ml-4 px-8 py-3 bg-esf-accent text-white font-heading font-bold text-base rounded-lg hover:bg-esf-blue transition-all shadow-lg hover:shadow-esf-accent/20"
                        >
                            Join Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-esf-midnight p-2" aria-label="Toggle menu">
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white/95 backdrop-blur-md border-t border-esf-midnight/10 mt-4 pt-4"
                    >
                        <div className="flex flex-col gap-2">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-6 py-3 rounded-lg text-base font-medium transition-colors ${location.pathname === link.path
                                        ? 'bg-esf-midnight/10 text-esf-midnight'
                                        : 'text-esf-blue hover:bg-esf-midnight/5 hover:text-esf-midnight'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/join"
                                className="block w-full text-center px-6 py-4 bg-esf-accent text-white font-heading font-bold text-sm rounded-lg hover:bg-esf-blue transition-colors mt-6"
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

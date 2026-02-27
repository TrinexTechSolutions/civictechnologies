// src/components/layout/Navbar.tsx
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';

import Logo from '../../assets/clintlogos/Logo_00008.webp';

const Navbar: React.FC = () => {
    const location = useLocation();

    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/services', label: 'Services' },
        { path: '/projects', label: 'Projects' },
        { path: '/industries', label: 'Industries' },
        { path: '/career', label: 'Career' },
        { path: '/contact', label: 'Contact' }
    ];

    const navbarBackground = () => {
        return isScrolled
            ? 'bg-white shadow-md py-3'
            : 'bg-white shadow-sm py-3 lg:py-4';
    };

    const linkColor = (path: string) => {
        return activeLink === path
            ? 'text-[#0177B2]'
            : 'text-black hover:text-[#0177B2]';
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navbarBackground()}`}
            >
                <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center relative gap-4">

                    {/* Logo */}
                    <Link to="/" className="flex items-center flex-shrink-0">
                        <img
                            src={Logo}
                            alt="Civic Technologies"
                            className="h-10 sm:h-12 lg:h-16 w-auto object-contain transition-all duration-300"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden lg:flex space-x-6 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`relative px-2 py-2 font-medium transition-all duration-300 ${linkColor(link.path)}`}
                                >
                                    {link.label}
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-[#0177B2] transition-all duration-300 ${activeLink === link.path ? 'w-full' : 'w-0'
                                            }`}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right Side */}
                    <div className="flex items-center space-x-4 flex-shrink-0">

                        {/* Desktop Button - changed to text with arrow */}
                        <div className="hidden lg:flex">
                            <Link
                                to="/contact#general-inquiry"
                                className={`
                                    flex items-center gap-2
                                    font-semibold uppercase tracking-wide text-sm
                                    transition-all duration-300 hover:text-[#0177B2]
                                    text-black
                                `}
                            >
                                Get in Touch <ArrowForwardIcon fontSize="small" />
                            </Link>
                        </div>

                        {/* Mobile Toggle */}
                        <div className="lg:hidden">
                            <IconButton
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="text-[#0177B2]"
                                size="large"
                            >
                                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                            </IconButton>
                        </div>

                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden absolute top-full left-0 right-0 bg-white text-[#252525] shadow-xl border-t border-[#0177B2]"
                        >
                            <ul className="flex flex-col p-6 space-y-4">
                                {navLinks.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block text-lg hover:text-[#0177B2] transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}

                                <li className="pt-4 border-t border-[#0177B2]">
                                    <Link
                                        to="/contact#general-inquiry"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-2 text-lg hover:text-[#0177B2] transition-colors duration-300 w-fit"
                                    >
                                        Get in Touch <ArrowForwardIcon fontSize="small" />
                                    </Link>
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Spacer to exactly match the navbar height */}
            <div className="h-[64px] sm:h-[72px] lg:h-[88px]"></div>
        </>
    );
};

export default Navbar;

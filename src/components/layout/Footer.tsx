// src/components/layout/Footer.tsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect, useState } from "react";
import Logo from '../../assets/clintlogos/Logo_00008.webp';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 200);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Top Curve + DOUBLE Arrow */}
            <div className="relative flex justify-center">
                <div
                    onClick={scrollToTop}
                    className="absolute -top-11 cursor-pointer group"
                >
                    <svg
                        viewBox="0 0 160.7 61.5"
                        className="w-30 h-14 text-[#252525]"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="currentColor"
                            d="M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z"
                        />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <KeyboardArrowUpIcon className="text-white text-base animate-bounce" />
                        <KeyboardArrowUpIcon className="text-white text-base -mt-4 opacity-80 animate-bounce delay-150" />
                    </div>
                </div>
            </div>

            <footer className="relative bg-[#252525] text-white pt-1">
                <div className="container mx-auto px-4 py-10">

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >

                        {/* Company Info */}
                        <motion.div variants={itemVariants}>
                            <div className="mb-4">
                                <img
                                    src={Logo}
                                    alt="Civic Technologies"
                                    className="h-14 w-auto object-contain"
                                />
                            </div>

                            <p className="text-gray-300 mb-4">
                                Powering Industries with Precision Engineering.
                                Complete Turnkey Electronics & Electrical Infrastructure
                                Solutions Since 2010.
                            </p>

                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-[#0177B2] transition-colors">
                                    <FacebookIcon />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-[#0177B2] transition-colors">
                                    <TwitterIcon />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-[#0177B2] transition-colors">
                                    <LinkedInIcon />
                                </a>

                                {/* WhatsApp Icon */}
                                <a
                                    href="https://wa.me/918919004890"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[#25D366] transition-colors"
                                >
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.52 3.48A11.82 11.82 0 0012.03 0C5.39 0 .02 5.36 0 12c0 2.12.55 4.19 1.6 6.02L0 24l6.14-1.6A11.94 11.94 0 0012.03 24c6.63 0 12-5.36 12-12 0-3.19-1.24-6.19-3.51-8.52zM12.03 21.8a9.8 9.8 0 01-4.98-1.36l-.36-.21-3.64.95.97-3.55-.23-.37a9.76 9.76 0 01-1.5-5.26c.02-5.42 4.45-9.83 9.9-9.83 2.64 0 5.11 1.03 6.98 2.9a9.8 9.8 0 012.9 6.97c-.02 5.43-4.45 9.84-9.9 9.84z" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><Link to="/" className="text-gray-300 hover:text-[#0177B2]">Home</Link></li>
                                <li><Link to="/about" className="text-gray-300 hover:text-[#0177B2]">About Us</Link></li>
                                <li><Link to="/services" className="text-gray-300 hover:text-[#0177B2]">Services</Link></li>
                                <li><Link to="/projects" className="text-gray-300 hover:text-[#0177B2]">Projects</Link></li>
                                <li><Link to="/industries" className="text-gray-300 hover:text-[#0177B2]">Industries</Link></li>
                                <li><Link to="/contact" className="text-gray-300 hover:text-[#0177B2]">Contact</Link></li>
                            </ul>
                        </motion.div>

                        {/* Services */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-xl font-semibold mb-4">Services</h4>
                            <ul className="space-y-2 text-gray-300 flex flex-col">
                                <li><Link to="/services" className="hover:text-[#0177B2] transition-colors">Electrical Infrastructure</Link></li>
                                <li><Link to="/services" className="hover:text-[#0177B2] transition-colors">HVAC & High-Side Engineering</Link></li>
                                <li><Link to="/services" className="hover:text-[#0177B2] transition-colors">Automation & Smart Systems</Link></li>
                                <li><Link to="/services" className="hover:text-[#0177B2] transition-colors">Fire & Safety Systems</Link></li>
                                <li><Link to="/services" className="hover:text-[#0177B2] transition-colors">Consulting & Project Engineering</Link></li>
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div variants={itemVariants}>
                            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                            <div className="space-y-3 text-gray-300">
                                <div className="flex items-start">
                                    <LocationOnIcon className="text-[#0177B2] mr-2 mt-1" />
                                    <p>Hyderabad – 500072.</p>
                                </div>
                                <div className="flex items-center">
                                    <PhoneIcon className="text-[#0177B2] mr-2" />
                                    <p>040-40213345</p>
                                </div>
                                <div className="flex items-center">
                                    <EmailIcon className="text-[#0177B2] mr-2" />
                                    <p>info@civictechno.com</p>
                                </div>
                            </div>
                        </motion.div>

                    </motion.div>

                    {/* Bottom Bar - Single Row */}
                    <motion.div
                        className="border-t border-[#0177B2] mt-8 pt-6 flex flex-col md:flex-row justify-center items-center gap-2 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <p className="text-gray-400 text-sm">
                            Developed by <span className="text-[#0177B2] font-semibold">
                                Trinex Tech Solutions
                            </span>
                        </p>

                        <span className="hidden md:inline text-gray-500">|</span>

                        <p className="text-gray-400 text-sm">
                            © {currentYear} <span className="text-[#4FB4DB]">Civic Technologies</span>. All Rights Reserved.
                        </p>
                    </motion.div>

                </div>
            </footer>
        </>
    );
};

export default Footer;

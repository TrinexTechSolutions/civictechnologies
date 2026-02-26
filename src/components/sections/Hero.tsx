import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EngineeringIcon from '@mui/icons-material/Engineering';
import BusinessIcon from '@mui/icons-material/Business';
import PublicIcon from '@mui/icons-material/Public';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import HeroBg from '../../assets/industry_images/AboutIMG.webp';
import HomeBgImage from '../../assets/clintlogos/bg_temp_4.png';
import LogoWatermark from '../../assets/clintlogos/hero_bg_watermark_2.svg';

const Hero: React.FC = () => {
    const { ref: inViewRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [counters, setCounters] = useState({
        years: 0,
        projects: 0,
        countries: 0,
        clients: 0
    });

    useEffect(() => {
        if (inView) {
            const duration = 2000;
            const steps = 60;
            const stepTime = duration / steps;

            let currentStep = 0;
            const timer = setInterval(() => {
                currentStep++;
                setCounters({
                    years: Math.min(16, Math.floor((16 * currentStep) / steps)),
                    projects: Math.min(100, Math.floor((100 * currentStep) / steps)),
                    countries: Math.min(2, Math.floor((2 * currentStep) / steps)),
                    clients: Math.min(50, Math.floor((50 * currentStep) / steps))
                });

                if (currentStep >= steps) {
                    clearInterval(timer);
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [inView]);

    const highlights = [
        {
            icon: <EngineeringIcon className="text-[#0177B2]" sx={{ fontSize: { xs: 40, md: 48 } }} />,
            value: `${counters.years}+`,
            label: "Years of Excellence",
            description: "Delivering industry-leading turnkey solutions with precision and uncompromising quality."
        },
        {
            icon: <BusinessIcon className="text-[#0177B2]" sx={{ fontSize: { xs: 40, md: 48 } }} />,
            value: `${counters.projects}+`,
            label: "Major Projects Delivered",
            description: "Successfully executing complex electronic infrastructure systems globally."
        },
        {
            icon: <PublicIcon className="text-[#0177B2]" sx={{ fontSize: { xs: 40, md: 48 } }} />,
            value: `${counters.countries}+`,
            label: "Countries Served",
            description: "Expanding our engineering footprint and maintaining international compliance."
        },
        {
            icon: <HandshakeIcon className="text-[#0177B2]" sx={{ fontSize: { xs: 40, md: 48 } }} />,
            value: `${counters.clients}+`,
            label: "Trusted Clients",
            description: "Building lasting partnerships through reliable, round-the-clock service."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    // Shared About Section Component
    const renderAboutSection = () => (
        <div className="container mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12 lg:gap-20 w-full max-w-7xl mx-auto">
            <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-[40px] md:text-[60px] lg:text-[80px] text-[#0177B2] leading-none mb-2 md:mb-4 plaster-regular pointer-events-none select-none -mt-4 md:-mt-8"
                >
                    About
                </motion.h2>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-[#252525] mb-3 font-primary uppercase tracking-wide relative z-10 whitespace-nowrap sm:whitespace-normal"
                >
                    Civic <br className="block sm:hidden" /> Technologies
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-base md:text-lg text-gray-600 leading-relaxed font-medium mb-6"
                >
                    Established with a vision to provide world-class industrial infrastructure and electrical turnkey solutions. With over a decade of excellence, we have proven our capabilities in delivering major projects across diverse sectors.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-base md:text-lg text-gray-600 leading-relaxed font-medium hidden sm:block mb-10"
                >
                    Our commitment to quality, safety, and innovation makes us a trusted partner for clients globally, building state-of-the-art facilities that empower the future of industries.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="pointer-events-auto"
                >
                    <Link
                        to="/about"
                        className="inline-block bg-[#252525] text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#0177B2] hover:shadow-xl hover:shadow-[#0177B2]/30 transition-all duration-300 pointer-events-auto"
                    >
                        Know More About Us
                        <span className="ml-2">→</span>
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full md:w-1/2 flex justify-center lg:justify-end mt-10 md:mt-0 relative pointer-events-auto"
            >
                <div className="relative rounded-3xl overflow-hidden w-full max-w-[400px] lg:max-w-[500px] group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0177B2]/40 to-transparent z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                        src={HeroBg}
                        alt="About Civic Technologies"
                        className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-110"
                    />
                </div>
            </motion.div>
        </div>
    );

    // Filter backdrop elements
    const BackgroundElements = () => (
        <div className="absolute top-0 left-0 right-0 h-[40vh] md:h-[75vh] z-0 pointer-events-none overflow-hidden bg-black/20">
            <img src={HomeBgImage} alt="Background" className="w-full h-full object-cover scale-105 mix-blend-overlay" />
            <div className="absolute inset-x-0 top-0 h-[70%] bg-gradient-to-b from-black/90 via-black/40 to-transparent z-10"></div>
        </div>
    );

    // =========================================================================
    // HERO VIEW
    // =========================================================================
    return (
        <div className="w-full overflow-x-hidden">
            <section ref={inViewRef} className="relative h-auto md:min-h-[100svh] overflow-hidden">
                <BackgroundElements />

                <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full flex-col h-[40vh] md:h-[75vh] flex justify-center md:justify-start md:pt-[20vh] text-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col items-center text-center w-full max-w-5xl mx-auto"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="font-primary font-black text-white text-[28px] md:text-[40px] lg:text-[55px] xl:text-[65px] leading-[1.1] tracking-tight drop-shadow-xl"
                        >
                            Discover Comprehensive Electrical Turnkey Solutions by Civic Technologies
                        </motion.h1>


                    </motion.div>
                </div>

                {/* Solid White Statistics Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                    className="relative md:absolute mt-[-20px] md:mt-0 md:top-[calc(75vh-120px)] lg:top-[calc(75vh-100px)] left-0 right-0 z-20 pointer-events-auto"
                >
                    <div className="w-full md:container md:mx-auto px-0 md:px-4 lg:px-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 w-full max-w-7xl mx-auto">
                            {highlights.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white border-r border-b border-gray-100 last:border-r-0 lg:border-b-0 p-5 md:p-6 lg:p-8 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-3 text-left cursor-default transition-colors hover:bg-gray-50"
                                >
                                    <div className="flex-shrink-0 flex items-center justify-center md:justify-start text-[#FF9800]">
                                        {item.icon}
                                    </div>
                                    <div className="flex flex-col items-start w-full">
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#252525] leading-none mb-1">{item.value}</h3>
                                        <p className="text-[10px] md:text-xs lg:text-sm text-gray-500 font-bold uppercase tracking-wider">{item.label}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </section>

            <section id="normal-about" className="pt-16 md:pt-24 lg:pt-10 pb-10 lg:pb-10 bg-white relative">
                {renderAboutSection()}
            </section>
        </div>
    );
};

export default Hero;
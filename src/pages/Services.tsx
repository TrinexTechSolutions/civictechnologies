// src/pages/Services.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Outlet, Link } from 'react-router-dom'; // Added Link
import React from 'react';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import ParallaxBackground from '../components/common/ParallaxBackground';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import VideocamIcon from '@mui/icons-material/Videocam';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import VpnKeyIcon from '@mui/icons-material/VpnKey'; import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'; // Added ArrowForwardIcon
import HeroBg from '../assets/clintlogos/hero_bg_3.webp';
import DividerImg from '../assets/clintlogos/download.webp';
import IndustrialDemoBg from '../assets/industry_images/Sevilance.webp';
import GvkBiosciencesImg from '../assets/industry_images/access_controle.webp';
import NimsHospitalImg from '../assets/industry_images/FIREALARM1.webp';
import NiabBiotechImg from '../assets/industry_images/CabelSyatem.webp';
import IitGuwahatiImg from '../assets/industry_images/BMSSERVICES.webp';
import LodhaTowersImg from '../assets/industry_images/Electricall.webp';

const Services: React.FC = () => {
    const { ref } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    // Added 'id' field to each service for routing
    const services = [
        {
            id: 'electrical-power',
            icon: <ElectricalServicesIcon sx={{ fontSize: 85 }} />,
            image: LodhaTowersImg,
            title: "Electrical & Power",
            description: "Comprehensive electrical infrastructure solutions ranging from high-tension panels to low-voltage distribution, ensuring safety, reliability, and energy efficiency for diverse sectors.",
            requirements: [
                "HT & LT Panel Installation",
                "Transformer & Substations",
                "Cable Laying & Trenching",
                "DG Sets & UPS Systems",
                "Earthing & Lightning Protection"
            ],
        },

        {
            id: 'bms-automation',
            icon: <SettingsRemoteIcon sx={{ fontSize: 85 }} />,
            image: IitGuwahatiImg,
            title: "BMS & Automation",
            description: "Smart Building Management Systems (BMS) enabling centralized monitoring and control of electronics services to enhance operational efficiency and reduce costs.",
            requirements: [
                "Centralized Control Systems",
                "HVAC & Lighting Automation",
                "Energy Monitoring Dashboards",
                "Fault Detection & Alarms",
                "SCADA Integration"
            ],
        },
        {
            id: 'fire-alarm-safety',
            icon: <LocalFireDepartmentIcon sx={{ fontSize: 85 }} />,
            image: NimsHospitalImg,
            title: "Fire Alarm & Safety",
            description: "End-to-end fire protection solutions including detection, suppression, and hydrant systems designed to meet the strictest safety codes and NBC norms.",
            requirements: [
                "Fire Detection Systems",
                "Gas Suppression Systems",
                "Public Address Systems",
            ],
        },
        {
            id: 'surveillance-security',
            icon: <VideocamIcon sx={{ fontSize: 85 }} />,
            image: IndustrialDemoBg,
            title: "Surveillance & Security",
            description: "State-of-the-art security infrastructure featuring IP-based surveillance, video analytics, and command centers for round-the-clock monitoring.",
            requirements: [
                "IP CCTV Networks",
                "Video Analytics Software",
                "Perimeter Intrusion Detection",
                "Command Center Setup",
                "Remote Monitoring Solutions"
            ],
        },
        {
            id: 'unified-communications',
            icon: <SettingsPhoneIcon sx={{ fontSize: 85 }} />,
            image: NiabBiotechImg,
            title: "Unified & Communications",
            description: "Structured cabling and communication infrastructure ensuring seamless connectivity and data transfer across complex facility landscapes.",
            requirements: [
                "Structured Cabling (Copper/Fiber)",
                "EPABX & Intercom Systems",
                "Public Address Systems",
                "Networking Infrastructure",
                "Data Center Connectivity"
            ],
        },
        {
            id: 'access-control-entry',
            icon: <VpnKeyIcon sx={{ fontSize: 85 }} />,
            image: GvkBiosciencesImg,
            title: "Access Control & Entry",
            description: "Advanced access management systems providing secure, trackable entry solutions for personnel and vehicles, integrated with HR and security databases.",
            requirements: [
                "Biometric & RFID Readers",
                "Boom Barriers & Turnstiles",
                "Visitor Management Systems",
                "Flap Barrier Gates",
                "Integration with BMS"
            ],
        },

    ];

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">

            {/* HERO SECTION */}
            <section className="relative min-h-[60vh] flex items-center justify-center">

                {/* Background Image with Grayscale Filter */}
                <ParallaxBackground src={HeroBg} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center lg:text-left py-20">
                    <motion.div
                        className="max-w-3xl"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <h2
                                className="text-[40px] md:text-[70px] lg:text-[85px] text-[#0177B2] leading-none plaster-regular"
                            >
                                Our
                            </h2>

                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[28px] md:text-[47px] lg:text-[65px] leading-none mt-2">
                                Services
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-blue-100 mt-6 max-w-2xl">
                            Comprehensive electrical turnkey solutions with precision, accountability, and technical excellence.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2 pointer-events-none overflow-hidden">
                    <div className="flex w-max">
                        {Array.from({ length: 120 }).map((_, i) => (
                            <img key={i} src={DividerImg} className="h-6 shrink-0" alt="" />
                        ))}
                    </div>
                </div>
            </section>

            {/* INTRO SECTION */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <h2
                                className="text-[40px] md:text-[65px] lg:text-[80px] text-[#0177B2] leading-none plaster-regular"
                            >
                                Technical
                            </h2>

                            <h1 className="font-primary mb-[30px] font-black tracking-[0.08em] uppercase text-[#252525] text-[28px] md:text-[40px] lg:text-[47px] leading-none mt-2">
                                Excellence
                            </h1>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            We deliver fully integrated electronics and electrical turnkey solutions under a single-point accountability model ensuring reduced cost, improved coordination, and minimized project risk.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SERVICES SECTION */}
            <section ref={ref} className="pb-0 lg:pb-0 bg-white overflow-hidden flex flex-col gap-24 lg:gap-32 w-full">

                {services.map((service, index) => {
                    return (
                        <React.Fragment key={index}>
                            <motion.div
                                className="flex flex-col gap-10 lg:gap-16 w-full"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >

                                <div className="container mx-auto px-4 lg:px-8">
                                    {/* ICON & LINE */}
                                    <div className="flex items-center gap-6 justify-center lg:justify-start">
                                        <div className="text-[#0177B2] flex items-center">
                                            {service.icon}
                                        </div>
                                        <div className="h-1 flex-1 bg-gradient-to-r from-[#0177B2] to-[#4FB4DB]"></div>
                                    </div>

                                    {/* TEXT SECTION: Heading and Data in same row */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mt-10">

                                        {/* Heading Side (Left) */}
                                        <motion.div
                                            className="text-center lg:text-left"
                                            initial={{ opacity: 0, x: -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <h2
                                                className="text-[40px] md:text-[50px] lg:text-[65px] text-[#0177B2] leading-none plaster-regular"
                                            >
                                                {service.title.split('&')[0]}
                                            </h2>
                                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#252525] text-[28px] md:text-[36px] leading-none mt-2">
                                                {service.title.split('&')[1] || ''}
                                            </h1>
                                        </motion.div>

                                        {/* Data Side (Right) */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, delay: 0.1 }}
                                        >
                                            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                                                {service.description}
                                            </p>

                                            <div>
                                                <h4 className="font-primary font-black uppercase tracking-wider text-[#111111] mb-4 text-sm">
                                                    Key Offerings
                                                </h4>

                                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                                                    {service.requirements.map((req, idx) => (
                                                        <li key={idx} className="flex items-start gap-2">
                                                            <CheckCircleOutlineIcon className="text-[#0177B2] mt-0.5 text-sm" />
                                                            <span className="text-gray-600 text-sm">
                                                                {req}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* VIEW MORE BUTTON */}
                                            <div className="mt-8">
                                                <Link
                                                    to={`/services/${service.id}`}
                                                    className="inline-flex items-center gap-2 px-6 py-2.5 border-2 border-[#0177B2] text-[#0177B2] font-bold uppercase text-xs tracking-widest hover:bg-[#0177B2] hover:text-white transition-all duration-300 group"
                                                >
                                                    View More
                                                    <ArrowForwardIcon sx={{ fontSize: 16 }} className="transform transition-transform duration-300 group-hover:translate-x-1" />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* IMAGE SECTION */}
                                <div className="w-full h-[250px] md:h-[350px] lg:h-[450px] relative overflow-hidden">
                                    <ParallaxBackground src={service.image} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>

                            </motion.div>

                        </React.Fragment>
                    );
                })}

            </section>

            <ScrollToTopArrow />
            <Outlet />
        </div>
    );
};

export default Services;
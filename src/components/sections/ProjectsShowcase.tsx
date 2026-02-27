// src/components/sections/ProjectsShowcase.tsx

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

// Images
import MarutiImg from '../../assets/projects_images/Exide energy solutions limited.webp';
import NDDBImg from '../../assets/projects_images/National Dairy Development Board (NDDB).webp';
import IITImg from '../../assets/projects_images/ola.webp';
import NIABImg from '../../assets/industry_images/wareee.webp';
import ColgateImg from '../../assets/projects_images/Colgate Palmolive.webp';
import LancoImg from '../../assets/projects_images/Tata Semiconductor Assembly.webp';


const ProjectsShowcase: React.FC = () => {
    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.15
    });

    const projects = [
        {
            name: "Agratas Energy Storage Solutions Pvt Ltd",
            client: "TATA",
            location: "Gujarat",
            image: ColgateImg
        },
        {
            name: "Micron Semiconductor Technology India Pvt Ltd",
            client: "Micron",
            location: "Gujarat",
            image: LancoImg
        },
        {
            name: "National Dairy Development Board",
            client: "NDDB",
            location: "New Delhi",
            image: NDDBImg
        },
        {
            name: "Ola Cell Technologies Pvt Ltd",
            client: "Ola",
            location: "Chennai",
            image: IITImg
        },
        {
            name: "Waaree Energies Limited",
            client: "Waaree Energies",
            location: "Gujarat",
            image: NIABImg
        },
        {
            name: "Exide Energy Solutions",
            client: "Exide",
            location: "Karnataka",
            image: MarutiImg
        }

    ];

    return (
        <section ref={ref} className="py-16 lg:py-20 bg-white relative overflow-hidden">



            <div className="container mx-auto px-4 sm:px-6 relative z-10 w-full max-w-7xl">

                {/* Header */}
                <motion.div
                    className="relative mb-12 flex flex-col items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block z-20">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/projects")}
                            className="px-8 py-3 bg-[#252525] text-white font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-[#0177B2] transition-colors duration-300"
                        >
                            View All
                        </motion.button>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <h2
                            className="text-[40px] md:text-[65px] lg:text-[80px] text-[#0177B2] leading-none plaster-regular"
                        >
                            Our
                        </h2>

                        <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#252525] text-[24px] md:text-[36px] lg:text-[42px] leading-none mt-2">
                            Featured Projects
                        </h1>

                        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed hidden sm:block">
                            A showcase of precision-driven engineering excellence
                            across industrial and infrastructure sectors.
                        </p>

                        <div className="mt-6 lg:hidden">
                            <motion.button
                                onClick={() => navigate("/projects")}
                                className="px-8 py-3 bg-[#252525] text-white font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-[#0177B2] transition-colors duration-300"
                            >
                                View All
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Interactive Expanding Accordion Gallery */}
                <motion.div
                    className="flex flex-col lg:flex-row w-full h-[80vh] lg:h-[70vh] gap-3 md:gap-4"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {projects.map((project, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <motion.div
                                key={index}
                                layout
                                onClick={() => setActiveIndex(index)}
                                className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                                    ${isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'}
                                `}
                                style={{ flex: isActive ? 4 : 1 }}
                            >
                                {/* Background Image */}
                                <img
                                    src={project.image}
                                    alt={project.name}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
                                    style={{ transform: isActive ? 'scale(1)' : 'scale(1.05)' }}
                                />

                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-gradient-to-t from-black/95 via-black/40 to-transparent' : 'bg-black/50'}`}></div>

                                {/* Content Container */}
                                <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">

                                    {/* Inactive State - Vertical Title (Desktop Only) */}
                                    {!isActive && (
                                        <div className="hidden lg:flex w-full h-full items-end justify-center pb-8 overflow-hidden">
                                            <h3
                                                className="text-white font-bold text-2xl whitespace-nowrap tracking-widest font-primary transition-opacity duration-300 overflow-hidden text-ellipsis"
                                                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', maxHeight: '90%' }}
                                            >
                                                {project.name}
                                            </h3>
                                        </div>
                                    )}

                                    {/* Inactive State - Horizontal Title (Mobile Only) */}
                                    {!isActive && (
                                        <div className="flex lg:hidden w-full h-full items-center justify-start">
                                            <h3 className="text-white font-bold text-base max-w-[90%] line-clamp-1 shadow-black drop-shadow-lg transition-opacity duration-300">
                                                {project.name}
                                            </h3>
                                        </div>
                                    )}

                                    {/* Active State Details */}
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.3 }}
                                            className="relative z-10 w-full"
                                        >
                                            <h3 className="text-lg sm:text-xl md:text-4xl font-black mb-4 font-primary uppercase tracking-tight text-white leading-tight">
                                                {project.name}
                                            </h3>

                                            <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[#0177B2] font-semibold text-sm uppercase tracking-wider">Client:</span>
                                                    <span className="text-gray-200 text-lg md:text-xl">{project.client}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-[#0177B2] font-semibold text-sm uppercase tracking-wider">Location:</span>
                                                    <span className="text-gray-200 text-lg md:text-xl">{project.location}</span>
                                                </div>
                                            </div>

                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    navigate("/projects");
                                                }}
                                                className="flex items-center gap-2 text-[#0177B2] font-bold text-sm md:text-base uppercase tracking-wider group hover:text-white transition-colors"
                                            >
                                                View Project Details
                                                <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
                                            </button>
                                        </motion.div>
                                    )}
                                </div>

                            </motion.div>
                        );
                    })}
                </motion.div>

            </div>
        </section>
    );
};

export default ProjectsShowcase;

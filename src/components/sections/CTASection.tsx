// src/components/sections/CTASection.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import DividerImg from '../../assets/clintlogos/download.webp';

const CTASection: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <section ref={ref} className="relative bg-[#0177B2] overflow-hidden">

            {/* Decorative Divider Moved To Top */}
            <div className="absolute top-0 left-0 w-full z-20 -translate-y-1/2 pointer-events-none overflow-hidden">
                <div className="flex w-max">
                    {Array.from({ length: 120 }).map((_, i) => (
                        <img
                            key={i}
                            src={DividerImg}
                            className="h-6 shrink-0"
                            alt=""
                        />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="container mb-16 mx-auto px-4 lg:px-8 py-24 lg:py-12 relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >

                    {/* Script Heading (Now Black) */}
                    <h2
                        className="text-[40px] md:text-[65px] lg:text-[80px] text-[#252525] leading-none plaster-regular"
                    >
                        Let’s Build
                    </h2>

                    {/* Main Heading */}
                    <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[28px] md:text-[40px] lg:text-[55px] leading-none mt-2 mb-6">
                        YOUR NEXT LANDMARK PROJECT
                    </h1>

                    {/* Description */}
                    <p className="text-lg md:text-xl text-black/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Partner with <span className="text-white">Civic Technologies</span> for electrical turnkey excellence,
                        precision-driven execution, and engineering solutions that
                        power industries forward.
                    </p>

                    {/* Button */}
                    <motion.div
                    // whileHover={{ scale: 1.05 }}
                    // whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            to="/contact#general-inquiry"
                            className="inline-block px-10 py-4 bg-[#252525] text-white hover:text-[#0177B2] font-bold uppercase tracking-wider rounded-full shadow-xl hover:bg-gray-900  transition-all duration-300"
                        >
                            Get In Touch
                        </Link>
                    </motion.div>

                </motion.div>
            </div>

        </section>
    );
};

export default CTASection;

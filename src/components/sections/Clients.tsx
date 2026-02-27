// src/components/sections/Clients.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Clients: React.FC = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    // Load logos
    const logoModules = import.meta.glob('../../assets/clintlogos/clint*.webp', { eager: true });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const allLogos = Object.entries(logoModules).map(([path, mod]: any) => ({ path, src: mod.default }));

    const specificClients = ['clint1.webp', 'clint4.webp', 'clint5.webp', 'clint7.webp', 'clint10.webp', 'clint13.webp', 'clint25.webp'];

    const row1Logos = allLogos.filter(logo => specificClients.some(c => logo.path.endsWith(c))).map(l => l.src);
    const row2Logos = allLogos.filter(logo => !specificClients.some(c => logo.path.endsWith(c))).map(l => l.src);

    // Give row1 more copies because it has fewer logos, to ensure continuous scrolling
    const marqueeRow1 = [...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos, ...row1Logos];
    const marqueeRow2 = [...row2Logos, ...row2Logos, ...row2Logos, ...row2Logos];

    return (
        <section ref={ref} className="py-24 lg:py-8 bg-white overflow-hidden relative">

            <style>{`
                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scrollRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .marquee-scroll-left {
                    animation: scrollLeft 60s linear infinite;
                }
                .marquee-scroll-right {
                    animation: scrollRight 60s linear infinite;
                }
                .marquee-container:hover .marquee-content {
                    animation-play-state: paused;
                }
            `}</style>

            {/* ===== Heading (UNCHANGED as requested) ===== */}
            <div className="container mx-auto px-4 mb-16 relative z-10">
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2
                        className="text-[40px] md:text-[65px] lg:text-[80px] text-[#0177B2] leading-none plaster-regular"
                    >
                        Our
                    </h2>

                    <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#252525] text-[28px] md:text-[40px] lg:text-[47px] leading-none mt-2 mb-6">
                        Trusted Clients
                    </h1>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Industry leaders who rely on our precision engineering,
                        execution discipline, and electrical turnkey expertise.
                    </p>
                </motion.div>
            </div>

            {/* ===== Marquee Section (Updated UI) ===== */}
            <div className="relative w-full overflow-hidden flex flex-col gap-14 mb-5">

                {/* Edge Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Row 1 */}
                <div className="w-full relative z-20 flex flex-col items-center mb-1">
                    <div className="marquee-container w-full overflow-hidden">
                        <div className="marquee-content marquee-scroll-right flex gap-20 w-max pl-20">
                            {marqueeRow1.map((logo, index) => (
                                <div
                                    key={`row1-${index}`}
                                    className="flex-shrink-0 w-32 md:w-40 h-20 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                                >
                                    <img
                                        src={logo}
                                        alt={`Client Logo ${index}`}
                                        className="max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="w-full relative z-20 flex flex-col items-center mt-1">
                    <h3 className="text-gray-400 font-medium text-xs md:text-sm tracking-wide mb-6 inline-block opacity-70">
                        In collaboration with iCLEAN
                    </h3>
                    <div className="marquee-container w-full overflow-hidden">
                        <div className="marquee-content marquee-scroll-left flex gap-20 w-max pr-20">
                            {marqueeRow2.map((logo, index) => (
                                <div
                                    key={`row2-${index}`}
                                    className="flex-shrink-0 w-32 md:w-40 h-20 flex items-center justify-center transition-transform duration-300 hover:scale-110"
                                >
                                    <img
                                        src={logo}
                                        alt={`Client Logo ${index}`}
                                        className="max-h-full object-contain"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Clients;



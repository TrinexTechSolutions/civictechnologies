// src/pages/Industries.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import ParallaxBackground from '../components/common/ParallaxBackground';
import ScienceIcon from '@mui/icons-material/Science';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BiotechIcon from '@mui/icons-material/Biotech';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HeroBg from '../assets/clintlogos/hero_bg_3.webp';
import DividerImg from '../assets/clintlogos/download.webp';
import clenImg from '../assets/industry_images/hospital_icu.webp';
import NationalImg from '../assets/industry_images/hospital_icu2.webp';
import NiabBiotechImg from '../assets/industry_images/pharma_cleanrooms_2.webp';
import NddbFoodImg from '../assets/industry_images/food_beverages.webp';
import MarutiSuzukiImg from '../assets/industry_images/Baterry.webp';

const Industries: React.FC = () => {

    const { ref } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const industries = [
        {
            icon: <ScienceIcon sx={{ fontSize: 85 }} />,
            image: clenImg,
            title: "Pharmaceuticals & Cleanroom",
            description: "Specialized electronics solutions for pharmaceutical facilities with strict regulatory compliance, cleanroom environments, and precision environmental control systems.",
            requirements: [
                "Cleanroom Classification & Validation",
                "Contamination Control Systems",
                "Precision Temperature & Humidity",
                "Specialized Electrical Infrastructure",
                "Regulatory Compliance (GMP, WHO)"
            ],
        },
        {
            icon: <LocalHospitalIcon sx={{ fontSize: 85 }} />,
            image: NationalImg,
            title: "Healthcare & Hospitals",
            description: "Critical infrastructure solutions for healthcare facilities including operation theatres, ICU areas, and specialized medical equipment power systems.",
            requirements: [
                "Operation Theatre Electronics Systems",
                "Medical Gas Pipeline Systems"
            ],
        },
        {
            icon: <BiotechIcon sx={{ fontSize: 85 }} />,
            image: NiabBiotechImg,
            title: "Biotechnology & Research",
            description: "Advanced electronics solutions for research facilities with specialized laboratory environments, precision equipment support, and safety systems.",
            requirements: [
                "Laboratory Fume Hood Systems",
                "Specialized Gas Distribution",
                "Precision Environmental Control",
                "Research Equipment Power",
                "Safety & Emergency Response"
            ],
        },
        {
            icon: <RestaurantIcon sx={{ fontSize: 85 }} />,
            image: NddbFoodImg,
            title: "Food & Beverage Processing",
            description: "Hygienic and compliant electronics solutions for food processing facilities with specialized requirements for safety, sanitation, and production efficiency.",
            requirements: [
                "Food-Grade Electrical Installations",
                "Process Cooling & Refrigeration",
                "Steam & Hot Water Systems",
                "Waste Management Systems",
                "HACCP Compliance Infrastructure"
            ],
        },
        {
            icon: <ElectricCarIcon sx={{ fontSize: 85 }} />,
            image: MarutiSuzukiImg,
            title: "Automotive & Battery Production",
            description: "Specialized infrastructure for automotive and battery manufacturing facilities with high-power requirements and precision environmental control.",
            requirements: [
                "High-Power Electrical Infrastructure",
                "Battery Production Environment",
                "Automated Manufacturing Support",
                "Testing & Quality Control Systems",
                "Fire Suppression Systems"
            ],
        },

    ];

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">

            {/* HERO — UNCHANGED */}
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
                                Industries
                            </h2>

                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[28px] md:text-[47px] lg:text-[65px] leading-none mt-2">
                                We Serve
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-blue-100 mt-6 max-w-2xl">
                            Sector-specific turnkey engineering solutions tailored for precision-driven industries.
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

            {/* INTRO — UNCHANGED */}
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
                                Our
                            </h2>

                            <h1 className="font-primary mb-[30px] font-black tracking-[0.08em] uppercase text-[#252525] text-[28px] md:text-[40px] lg:text-[47px] leading-none mt-2">
                                Expertise
                            </h1>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            <span className="text-[#4FB4DB]">Civic Technologies</span> delivers tailored engineering infrastructure solutions across diverse sectors with regulatory precision and execution excellence.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* INDUSTRY SECTION */}
            <section ref={ref} className="pb-24 lg:pb-32 bg-white overflow-hidden">
                <div className="container mx-auto px-4 lg:px-8 space-y-32">

                    {industries.map((industry, index) => {

                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >

                                {/* IMAGE SIDE */}
                                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative h-[250px] lg:h-[500px] overflow-hidden -mx-4 w-[calc(100%+2rem)] lg:w-full lg:mx-0`}>
                                    <div className="sticky top-24 h-full w-full">
                                        <ParallaxBackground src={industry.image} className="absolute inset-0 rounded-none" />
                                        <div className="absolute inset-0 rounded-none" />

                                        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                                            <div>
                                                <h2
                                                    className="text-[40px] md:text-[60px] lg:text-[70px] text-[#0177B2] leading-none plaster-regular"
                                                >
                                                    {industry.title.split('&')[0]}
                                                </h2>

                                                <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[28px] md:text-[38px] lg:text-[45px]">
                                                    {industry.title.split('&')[1] || ''}
                                                </h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* CONTENT SIDE */}
                                <motion.div
                                    className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                                    initial={{ y: 60, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                >

                                    {/* ICON — LARGE, NO BACKGROUND */}
                                    <div className="hidden lg:flex mb-8 items-center gap-6">
                                        <div className="text-[#0177B2] text-10xl flex items-center">
                                            {industry.icon}
                                        </div>
                                        <div className="h-1 flex-1 bg-gradient-to-r from-[#0177B2] to-[#4FB4DB]"></div>
                                    </div>

                                    <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                        {industry.description}
                                    </p>

                                    <div>
                                        <h4 className="font-primary font-black uppercase tracking-wider text-[#111111] mb-6 text-sm">
                                            Key Requirements
                                        </h4>

                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                                            {industry.requirements.map((req, idx) => (
                                                <li key={idx} className="flex items-start gap-3">
                                                    <CheckCircleOutlineIcon className="text-[#0177B2] mt-1" />
                                                    <span className="text-gray-600 text-sm">
                                                        {req}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>

                            </motion.div>
                        );
                    })}

                </div>
            </section>

            <ScrollToTopArrow />
        </div>
    );
};

export default Industries;
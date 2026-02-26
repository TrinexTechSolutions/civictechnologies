// src/pages/About.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import ParallaxBackground from '../components/common/ParallaxBackground';
import HeroBg from '../assets/clintlogos/hero_bg_3.jpg'; // Imported the Hero Image
import DividerImg from '../assets/clintlogos/download.svg';
import BannerImg from '../assets/clintlogos/about_bg.webp'; // Imported the Banner Image

const About: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        }
    };

    const timeline = [
        {
            year: "2010",
            title: "Foundation & Specialization",
            description: <><span className="text-[#4FB4DB]">Civic Technologies</span> began as a specialized electrical turnkey solution provider for cleanroom environments, setting the stage for engineering excellence.</>
        },
        {
            year: "2012-2015",
            title: "Expansion into Core Infrastructure",
            description: "Expanded service offerings to include high-side HVAC and industrial infrastructure solutions, broadening our impact across sectors."
        },
        {
            year: "2016-2018",
            title: "Integrated Systems & Technology",
            description: "Integrated advanced Building Management Systems (BMS), surveillance, access control, and fire alarm systems (FASS) into our portfolio."
        },
        {
            year: "2019-Present",
            title: "Global Footprint",
            description: "Expanded operations internationally with successful project execution in Lusaka, Zambia, marking our entry into the global market."
        }
    ];

    return (
        <div className="bg-white min-h-screen overflow-x-hidden">

            {/* Hero Section with Parallax Background */}
            <section className="relative min-h-[60vh] flex items-center justify-center">

                {/* Background Image with Grayscale Filter */}
                <ParallaxBackground src={HeroBg} />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>

                {/* Hero Content */}
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
                                About
                            </h2>
                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[28px] md:text-[47px] lg:text-[65px] leading-none mt-2">
                                Civic Technologies
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-blue-100 mt-6 max-w-2xl">
                            A Legacy of Engineering Excellence & Turnkey Innovation.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Shape at Bottom */}
                <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2 pointer-events-none overflow-hidden">
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

            </section>


            {/* Company Introduction */}
            <section className="py-20 lg:py-10 bg-white relative">
                <div className="container mx-auto px-4 lg:px-8">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >


                        <div className="text-center relative">
                            <h2
                                className="text-[40px] md:text-[65px] lg:text-[80px] text-[#0177B2] leading-none plaster-regular"
                            >
                                Our
                            </h2>

                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#252525] text-[28px] md:text-[40px] lg:text-[47px] leading-none mt-2 mb-6">
                                Story
                            </h1>
                        </div>

                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Established in 2010, <span className="text-[#4FB4DB]">Civic Technologies</span> began as a specialized electrical turnkey solution provider for cleanroom environments. Over time, the organization expanded into a full-scale electrical turnkey engineering partner serving pharmaceuticals, healthcare, industrial manufacturing, semi-conductors, lithium battery manufacturing, commercial complexes, research facilities, and infrastructure projects.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Today, we stand as a trusted engineering partner delivering electrical turnkey excellence with accountability, technical depth, and corporate integrity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Timeline Section */}
            <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-4 lg:px-8 relative z-10">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="text-center relative">
                            <h2
                                className="text-[40px] md:text-[65px] lg:text-[80px] text-[#0177B2] leading-none plaster-regular"
                            >
                                Our
                            </h2>

                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#252525] text-[28px] md:text-[40px] lg:text-[47px] leading-none mt-2 mb-6">
                                History
                            </h1>
                        </div>
                    </motion.div>

                    <motion.div
                        className="max-w-5xl mx-auto relative"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        {/* Vertical Line for Timeline */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#0177B2]/50 via-[#0177B2]/100 to-[#0177B2]/50 hidden md:block rounded-full"></div>

                        <div className="space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                    variants={itemVariants}
                                >
                                    {/* Content Card */}
                                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                                        <motion.div
                                            className="bg-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 group"
                                            whileHover={{ y: -5 }}
                                        >
                                            <span className="inline-block px-3 py-1 bg-[#0177B2]/50 text-black rounded-full text-sm font-bold mb-4 group-hover:bg-[#015D8A] transition-colors">
                                                {item.year}
                                            </span>
                                            <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                        </motion.div>
                                    </div>

                                    {/* Center Dot */}
                                    <div className="relative flex items-center justify-center order-first md:order-none mb-4 md:mb-0">
                                        <motion.div
                                            className="w-5 h-5 bg-black border-4 border-[#0177B2] rounded-full z-10"
                                            initial={{ scale: 0 }}
                                            animate={inView ? { scale: 1 } : {}}
                                            transition={{ delay: 0.2 * index, type: "spring", stiffness: 300 }}
                                        ></motion.div>
                                    </div>

                                    {/* Empty Space for alignment */}
                                    <div className="hidden md:block md:w-1/2"></div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* Professional Overview */}
            <motion.div
                className="text-center max-w-4xl mx-auto mt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >

                <h2
                    className="text-[40px] md:text-[65px] lg:text-[80px] text-[#0177B2] leading-none plaster-regular"
                >
                    Our
                </h2>

                <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#252525] text-[28px] md:text-[40px] lg:text-[47px] leading-none mt-2 mb-6">
                    Profile
                </h1>

                <p className="text-gray-600 leading-relaxed text-lg">
                    <span className="text-[#4FB4DB]">Civic Technologies</span> has built for itself an enviable reputation of being a one-stop turnkey provider
                    for all industrial verticals. Its potent blend of technical and talented workforce, design
                    expertise, exceptional project execution capabilities and global footprint makes it the most
                    preferred choice for electronics projects.
                </p>

                <p className="text-gray-600 leading-relaxed text-lg mt-6">
                    <span className="text-[#4FB4DB]">Civic Technologies</span> also undertakes operation and maintenance electrical services for all
                    industrial verticals, ensuring long-term performance and reliability.
                </p>

            </motion.div>


            {/* Our Team */}
            <motion.div
                className="text-center max-w-4xl mx-auto mt-28 pb-20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >

                <h2
                    className="text-[40px] md:text-[65px] lg:text-[80px] text-[#0177B2] leading-none plaster-regular"
                >
                    Our
                </h2>

                <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#252525] text-[28px] md:text-[40px] lg:text-[47px] leading-none mt-2 mb-6">
                    Team
                </h1>

                <p className="text-gray-600 leading-relaxed text-lg">
                    Our team believes in first understanding your goals and then providing customized solutions
                    tailored to industry needs. We follow a human-centered engineering approach that delivers
                    measurable business value.
                </p>

                <p className="text-gray-600 leading-relaxed text-lg mt-6">
                    We understand that business success cannot be achieved through technology alone.
                    It begins with people and experts working together to identify your core objectives
                    and develop the most adapted solutions to meet those requirements.
                </p>

            </motion.div>


            {/* Mission, Vision & Values */}
            <section className="relative">

                {/* Sticky Background Banner */}
                <div
                    className="relative h-[40vh] flex items-center justify-center"
                >
                    <ParallaxBackground src={BannerImg} />

                    {/* Overlay */}
                    {/* <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/40 to-black/30"></div> */}

                    {/* Centered Heading */}
                    <motion.div
                        className="relative text-center text-white px-4 z-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2
                            className="text-[35px] md:text-[60px] lg:text-[80px] text-[#0177B2] leading-none plaster-regular"
                        >
                            Epitome of
                        </h2>

                        <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#252525] text-[28px] md:text-[40px] lg:text-[47px] leading-none mt-2 mb-6">
                            SUCCESS
                        </h1>
                    </motion.div>

                    {/* Decorative Divider */}
                    <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2 pointer-events-none overflow-hidden">
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

                </div>



                {/* Content Below Banner */}
                <div className="py-20 lg:py-28 bg-white">
                    <div className="container mx-auto px-4 lg:px-8">

                        {/* Vision & Mission Side by Side */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >

                            {/* Vision */}
                            <div className="text-center">
                                <motion.div
                                    className="mb-10"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2
                                        className="text-[40px] md:text-[65px] lg:text-[80px] text-[#0177B2] leading-none plaster-regular"
                                    >
                                        Our
                                    </h2>

                                    <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#252525] text-[28px] md:text-[40px] lg:text-[47px] leading-none mt-2 mb-6">
                                        Vision
                                    </h1>
                                </motion.div>

                                <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                                    We aspire to be a leading organization with unique attributes characterized by quality products and services.
                                </p>
                            </div>


                            {/* Mission */}
                            <div className="text-center">
                                <motion.div
                                    className="mb-10"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2
                                        className="text-[40px] md:text-[65px] lg:text-[80px] text-[#0177B2] leading-none plaster-regular"
                                    >
                                        Our
                                    </h2>

                                    <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#252525] text-[28px] md:text-[40px] lg:text-[47px] leading-none mt-2 mb-6">
                                        mission
                                    </h1>
                                </motion.div>

                                <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                                    We will always be responsible to keep the ethics of business with our esteemed customers and remain aligned with our core company policy.
                                </p>
                            </div>


                        </motion.div>

                        {/* Quality Commitment */}
                        <motion.div
                            className="text-center max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2
                                className="text-[40px] md:text-[65px] lg:text-[80px] text-[#0177B2] leading-none plaster-regular"
                            >
                                Our
                            </h2>

                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-[#252525] text-[28px] md:text-[40px] lg:text-[47px] leading-none mt-2 mb-6">
                                Quality
                            </h1>

                            <p className="text-gray-600 leading-relaxed mt-6">
                                We are committed to achieve and sustain a leading position of consistent quality in all activities as per national and international standards, meeting customer expectations with continual improvements on time and within budget.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section >

            <ScrollToTopArrow />
        </div >
    );
};

export default About;
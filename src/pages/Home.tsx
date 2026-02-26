// src/pages/Home.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import ServicesSection from '../components/sections/ServicesSection';
import Hero from '../components/sections/Hero';
import Clients from '../components/sections/Clients';
import CTASection from '../components/sections/CTASection';
import ProjectsShowcase from '../components/sections/ProjectsShowcase';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';

const Home: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="bg-white">
            {mounted && (
                <>
                    <Hero />
                    <ServicesSection />
                    <ProjectsShowcase />
                    <Clients />
                    <CTASection />
                </>
            )}
            <ScrollToTopArrow />
        </div>
    );
};

export default Home;
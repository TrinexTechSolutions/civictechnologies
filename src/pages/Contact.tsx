// src/pages/Contact.tsx
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import ParallaxBackground from '../components/common/ParallaxBackground';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button, TextField, Box, CircularProgress } from '@mui/material';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HeroBg from '../assets/clintlogos/hero_bg_3.jpg';
import DividerImg from '../assets/clintlogos/download.svg';
import Clients from '../components/sections/Clients';

const Contact: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash === '#general-inquiry') {
            const element = document.getElementById('general-inquiry');
            if (element) {
                // Short timeout ensures the component has fully mounted and rendered before scrolling
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        }
    }, [location]);


    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [loadMap, setLoadMap] = useState(false);

    useEffect(() => {
        // Defer mapping loading after initial render speeds up page load
        const timer = setTimeout(() => {
            setLoadMap(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', company: '', subject: '', message: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false, error: false, message: ''
    });

    const [errors, setErrors] = useState({
        name: '', email: '', phone: '', company: '', subject: '', message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        if (errors[name as keyof typeof errors]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
        if (formStatus.message) {
            setFormStatus({ submitted: false, error: false, message: '' });
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: '', email: '', phone: '', company: '', subject: '', message: '' };

        if (!formData.name.trim()) { newErrors.name = 'Please provide your full name'; isValid = false; }

        if (!formData.email.trim()) {
            newErrors.email = 'Please provide your email address'; isValid = false;
        } else if (!formData.email.includes('@') || !formData.email.includes('.')) {
            newErrors.email = 'Please provide a valid email address'; isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Please provide your phone number'; isValid = false;
        } else if (!/^\d{10}$/.test(formData.phone.trim())) {
            newErrors.phone = 'Phone number must be exactly 10 digits'; isValid = false;
        }

        if (!formData.company.trim()) { newErrors.company = 'Please provide your company name'; isValid = false; }
        if (!formData.subject.trim()) { newErrors.subject = 'Please provide a subject'; isValid = false; }
        if (!formData.message.trim()) { newErrors.message = 'Please provide your message'; isValid = false; }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            setFormStatus({
                submitted: true,
                error: true,
                message: 'Please fill all required fields correctly.'
            });
            return;
        }

        setIsSubmitting(true);
        setFormStatus({ submitted: false, error: false, message: '' });

        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus({
                    submitted: true,
                    error: false,
                    message: 'Your message has been sent successfully.'
                });
                setFormData({
                    name: '', email: '', phone: '', company: '', subject: '', message: ''
                });
            } else {
                throw new Error();
            }
        } catch (error) {
            setFormStatus({
                submitted: true,
                error: true,
                message: 'Failed to send message. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                                Contact
                            </h2>

                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[28px] md:text-[47px] lg:text-[65px] leading-none mt-2">
                                Us
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-blue-100 mt-6 max-w-2xl">
                            Let’s discuss your next project and how we can deliver engineered excellence.
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

            {/* INFO + FORM */}
            <section id="general-inquiry" ref={ref} className="pt-20 pb-0 lg:pt-40 lg:pb-0 bg-white">
                <div className="container mx-auto px-4 lg:px-12">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

                        {/* LEFT SIDE */}
                        <motion.div
                            className="flex flex-col h-full"
                            initial={{ opacity: 0, x: -40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="text-left mb-12">
                                <h2 className="text-[40px] md:text-[50px] lg:text-[65px] text-[#0177B2] leading-none plaster-regular">
                                    Get In
                                </h2>
                                <h1 className="font-primary font-black uppercase text-[#252525] text-[28px] md:text-[35px] lg:text-[45px] leading-none mt-2">
                                    Touch With Us
                                </h1>
                            </div>

                            <div className="space-y-10 text-gray-600 flex-1">

                                <div className="flex gap-5">
                                    <MapPin size={40} className="text-[#0177B2]" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Registered Office</h3>
                                        <p>
                                            <span className="font-bold text-[#4FB4DB]">CIVIC TECHNOLOGIES</span><br />
                                            Main Road, near JNTU Metro Station<br />
                                            Kukatpally, Hyderabad, Telangana, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <Phone size={40} className="text-[#0177B2]" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                                        <p>
                                            040-40213345<br />
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <Mail size={40} className="text-[#0177B2]" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Send Us</h3>
                                        <p>
                                            <span className="font-bold text-[#0177B2]">info@civictechno.com</span><br />

                                        </p>
                                    </div>
                                </div>

                            </div>
                        </motion.div>

                        {/* RIGHT SIDE FORM */}
                        <motion.div
                            className="flex flex-col h-full"
                            initial={{ opacity: 0, x: 40 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="text-left mb-12">
                                <h2 className="text-[40px] md:text-[50px] lg:text-[65px] text-[#0177B2] leading-none plaster-regular">
                                    General
                                </h2>
                                <h1 className="font-primary font-black uppercase text-[#252525] text-[28px] md:text-[35px] lg:text-[45px] leading-none mt-2">
                                    Inquiry
                                </h1>
                            </div>

                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate
                                className="flex flex-col flex-1 justify-between"
                                sx={{
                                    "& .MuiFormLabel-asterisk": { color: "#d32f2f" },
                                    "& .MuiInputLabel-root.Mui-error": { color: "rgba(0, 0, 0, 0.6) !important" },
                                    "& .MuiInputLabel-root.Mui-error.Mui-focused": { color: "#252525 !important" },
                                    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "rgba(0, 0, 0, 0.23) !important"
                                    },
                                    "& .MuiOutlinedInput-root.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#252525 !important",
                                        borderWidth: "2px"
                                    }
                                }}
                            >

                                <div className="space-y-6">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <TextField fullWidth label="Full Name" name="name"
                                            value={formData.name} onChange={handleChange}
                                            required variant="outlined"
                                            error={!!errors.name} helperText={errors.name}
                                            InputProps={{ sx: { borderRadius: "12px", height: 56 } }} />

                                        <TextField fullWidth label="Email" name="email"
                                            type="email" value={formData.email}
                                            onChange={handleChange} required variant="outlined"
                                            error={!!errors.email} helperText={errors.email}
                                            InputProps={{ sx: { borderRadius: "12px", height: 56 } }} />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <TextField fullWidth label="Phone" name="phone"
                                            value={formData.phone} onChange={handleChange}
                                            required variant="outlined"
                                            error={!!errors.phone} helperText={errors.phone}
                                            InputProps={{ sx: { borderRadius: "12px", height: 56 } }} />

                                        <TextField fullWidth label="Company" name="company"
                                            value={formData.company} onChange={handleChange}
                                            required variant="outlined"
                                            error={!!errors.company} helperText={errors.company}
                                            InputProps={{ sx: { borderRadius: "12px", height: 56 } }} />
                                    </div>

                                    <TextField fullWidth label="Subject" name="subject"
                                        value={formData.subject} onChange={handleChange}
                                        required variant="outlined"
                                        error={!!errors.subject} helperText={errors.subject}
                                        InputProps={{ sx: { borderRadius: "12px", height: 56 } }} />

                                    <TextField fullWidth label="Message" name="message"
                                        value={formData.message} onChange={handleChange}
                                        required multiline rows={4}
                                        variant="outlined"
                                        error={!!errors.message} helperText={errors.message}
                                        InputProps={{ sx: { borderRadius: "12px" } }} />
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-6 gap-4">
                                    <div className="flex-1">
                                        {formStatus.submitted && formStatus.message && (
                                            <motion.div
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className={`flex items-center gap-2 text-sm md:text-base font-medium ${formStatus.error ? 'text-red-600' : 'text-green-600'
                                                    }`}
                                            >
                                                {formStatus.error ? (
                                                    <ErrorOutlineIcon fontSize="small" />
                                                ) : (
                                                    <CheckCircleOutlineIcon fontSize="small" />
                                                )}
                                                <span>{formStatus.message}</span>
                                            </motion.div>
                                        )}
                                    </div>

                                    <Button
                                        type="submit"
                                        variant="contained"
                                        disabled={isSubmitting}
                                        endIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                                        sx={{
                                            borderRadius: "50px",
                                            padding: "12px 32px",
                                            backgroundColor: isSubmitting ? "#e0e0e0" : "#252525",
                                            color: isSubmitting ? "#9e9e9e" : "white",
                                            "&:hover": { backgroundColor: "#0177B2" },
                                            "&.Mui-disabled": { backgroundColor: "#e0e0e0", color: "#9e9e9e" },
                                            flexShrink: 0
                                        }}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </div>
                            </Box>
                        </motion.div>

                    </div>

                </div>
            </section>

            {/* CLIENTS SECTION */}
            <Clients />

            {/* MAP */}
            <section className="relative w-full">
                <div className="absolute top-0 left-0 w-full z-20 -translate-y-1/2 pointer-events-none overflow-hidden">
                    <div className="flex w-max">
                        {Array.from({ length: 120 }).map((_, i) => (
                            <img key={i} src={DividerImg} className="h-6 shrink-0" alt="" />
                        ))}
                    </div>
                </div>

                <div className="relative w-full h-[500px] pointer-events-none flex items-center justify-center bg-gray-100">
                    {loadMap ? (
                        <motion.iframe
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            src="https://www.google.com/maps?q=CIVIC+TECHNO+SERVICES,+Main+Road,+near+JNTU+Metro+Station,+Kukatpally,+Hyderabad,+Telangana,+India&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            title="CIVIC TECHNOLOGIES Location"
                        />
                    ) : (
                        <div className="text-gray-400 font-medium tracking-widest uppercase text-sm">Loading Map...</div>
                    )}
                </div>
            </section>



            <ScrollToTopArrow />
        </div>
    );
};

export default Contact;
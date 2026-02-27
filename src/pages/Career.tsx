// src/pages/Career.tsx
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollToTopArrow from '../components/common/ScrollToTopArrow';
import ParallaxBackground from '../components/common/ParallaxBackground';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button, TextField, Box, CircularProgress } from '@mui/material';
import { MapPin, Phone, Mail, Briefcase, FileUp } from 'lucide-react';
import SendIcon from '@mui/icons-material/Send';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import HeroBg from '../assets/clintlogos/hero_bg_3.webp';
import DividerImg from '../assets/clintlogos/download.webp';

const Career: React.FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        position: '',
        message: '',
        resumeName: '',
        resumeBase64: ''
    });

    const [formStatus, setFormStatus] = useState({
        submitted: false, error: false, message: ''
    });

    const [errors, setErrors] = useState({
        name: '', email: '', phone: '', position: ''
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

    // Handle File Upload (Convert to Base64 for EmailJS)
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Limit file size to 500KB for email stability
            if (file.size > 500000) {
                setFormStatus({
                    submitted: true, error: true, message: 'File size too large (max 500KB).'
                });
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData(prev => ({
                    ...prev,
                    resumeName: file.name,
                    resumeBase64: reader.result as string
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: '', email: '', phone: '', position: '' };

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

        if (!formData.position.trim()) { newErrors.position = 'Please specify the position'; isValid = false; }

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

        if (!formData.resumeBase64) {
            setFormStatus({
                submitted: true, error: true, message: 'Please attach your resume.'
            });
            return;
        }

        setIsSubmitting(true);
        setFormStatus({ submitted: false, error: false, message: '' });

        try {
            const response = await fetch('/api/sendCareerEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormStatus({
                    submitted: true,
                    error: false,
                    message: 'Your application has been submitted successfully!'
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    position: '',
                    message: '',
                    resumeName: '',
                    resumeBase64: ''
                });
            } else {
                throw new Error();
            }
        } catch (error) {
            setFormStatus({
                submitted: true,
                error: true,
                message: 'Failed to submit application. Please try again later.'
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
                                Join
                            </h2>

                            <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[28px] md:text-[47px] lg:text-[65px] leading-none mt-2">
                                Our Team
                            </h1>
                        </div>

                        <p className="text-xl md:text-2xl text-blue-100 mt-6 max-w-2xl">
                            Build your future with a team committed to engineering excellence.
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
            <section ref={ref} className="py-20 bg-white">
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
                                    Apply
                                </h2>
                                <h1 className="font-primary font-black uppercase text-[#252525] text-[28px] md:text-[35px] lg:text-[45px] leading-none mt-2">
                                    Now
                                </h1>
                            </div>

                            <div className="space-y-10 text-gray-600 flex-1">

                                <div className="flex gap-5">
                                    <Briefcase size={40} className="text-[#0177B2]" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Current Openings</h3>
                                        <p>
                                            We are always looking for talented individuals.<br />
                                            Send us your resume for future opportunities.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <Mail size={40} className="text-[#0177B2]" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Careers Email</h3>
                                        <p>
                                            <span className="font-bold text-[#0177B2]">careers@civictechno.com</span><br />
                                            Expect a response within 48 hours.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <Phone size={40} className="text-[#0177B2]" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">HR Contact</h3>
                                        <p>
                                            040-40213345<br />
                                            Mon - Sat, 9:00 AM - 6:00 PM
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <MapPin size={40} className="text-[#0177B2]" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Head Office</h3>
                                        <p>
                                            Main Road, near JNTU Metro Station<br />
                                            Kukatpally, Hyderabad, Telangana, India
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
                                    Career
                                </h2>
                                <h1 className="font-primary font-black uppercase text-[#252525] text-[28px] md:text-[35px] lg:text-[45px] leading-none mt-2">
                                    Application
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

                                        <TextField fullWidth label="Position Applied For" name="position"
                                            value={formData.position} onChange={handleChange}
                                            required variant="outlined"
                                            error={!!errors.position} helperText={errors.position}
                                            InputProps={{ sx: { borderRadius: "12px", height: 56 } }} />
                                    </div>

                                    {/* Resume Upload Field */}
                                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-4 hover:border-[#0177B2] transition-colors overflow-hidden">
                                        <div className="flex items-center justify-between gap-2">
                                            <div className="flex items-center gap-3 min-w-0">
                                                <FileUp className="text-[#0177B2] shrink-0" />
                                                <div className="min-w-0">
                                                    <p
                                                        className="font-semibold text-gray-800 text-sm truncate"
                                                        title={formData.resumeName ? formData.resumeName : "Upload Resume (PDF/DOC)"}
                                                    >
                                                        {formData.resumeName ? formData.resumeName : "Upload Resume (PDF/DOC)"}
                                                    </p>
                                                    <p className="text-xs text-gray-500">Max file size: 500KB</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                {formData.resumeBase64 && (
                                                    <Button
                                                        onClick={() => {
                                                            // Create a proper readable blob from the base64 string
                                                            const arr = formData.resumeBase64.split(',');
                                                            const mime = arr[0].match(/:(.*?);/)?.[1] || '';
                                                            const bstr = atob(arr[1]);
                                                            let n = bstr.length;
                                                            const u8arr = new Uint8Array(n);
                                                            while (n--) {
                                                                u8arr[n] = bstr.charCodeAt(n);
                                                            }
                                                            const blob = new Blob([u8arr], { type: mime });
                                                            const fileUrl = URL.createObjectURL(blob);
                                                            window.open(fileUrl, '_blank');
                                                        }}
                                                        variant="text"
                                                        sx={{ textTransform: 'none', color: '#0177B2', padding: '6px 8px', minWidth: 'auto' }}
                                                    >
                                                        View
                                                    </Button>
                                                )}
                                                <Button variant="outlined" component="label" sx={{ borderRadius: "8px", textTransform: 'none', borderColor: '#0177B2', color: '#0177B2', '&:hover': { borderColor: '#0177B2', backgroundColor: 'rgba(1, 119, 178, 0.04)' } }}>
                                                    {formData.resumeName ? "Change" : "Choose File"}
                                                    <input type="file" hidden accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>

                                    <TextField fullWidth label="Message / Cover Letter" name="message"
                                        value={formData.message} onChange={handleChange}
                                        multiline rows={4}
                                        variant="outlined"
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
                                        {isSubmitting ? 'Sending...' : 'Submit Application'}
                                    </Button>
                                </div>
                            </Box>
                        </motion.div>

                    </div>
                </div>
            </section>

            <ScrollToTopArrow />
        </div>
    );
};

export default Career;
// src/components/Services/ServiceDetail.tsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ParallaxBackground from "../common/ParallaxBackground";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SettingsRemoteIcon from '@mui/icons-material/SettingsRemote';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import VideocamIcon from '@mui/icons-material/Videocam';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ConstructionIcon from "@mui/icons-material/Construction";
import VerifiedIcon from "@mui/icons-material/Verified";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

// Assets
import DividerImg from '../../assets/clintlogos/download.svg';
import IndustrialDemoBg from '../../assets/industry_images/Sevilance.webp';
import GvkBiosciencesImg from '../../assets/industry_images/access_controle.webp';
import NimsHospitalImg from '../../assets/industry_images/FIREALARM1.jpeg';
import NiabBiotechImg from '../../assets/industry_images/CabelSyatem.webp';
import IitGuwahatiImg from '../../assets/industry_images/BMSSERVICES.jpeg';
import LodhaTowersImg from '../../assets/industry_images/Electrical.jpeg';
import ecs11111 from '../../assets/industry_images/ecl1.webp';
import ecsecs from '../../assets/industry_images/ecl2.webp';
import bms1 from '../../assets/industry_images/BMS!!.jpeg';
import bms2 from '../../assets/industry_images/BMS22.jpeg';
import fire1 from '../../assets/industry_images/FiREALARM2.jpeg';
import fire2 from '../../assets/industry_images/Fire2.webp';
import servilance1 from '../../assets/industry_images/sevilance1.webp';
import servilance2 from '../../assets/industry_images/sevilance2.webp';
import cabel1 from '../../assets/industry_images/cabel1.webp';
import cabel2 from '../../assets/industry_images/cabel2.webp';
import access1 from '../../assets/industry_images/Access1.webp';
import access2 from '../../assets/industry_images/Access2.webp';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  heroImage: string;
  solutionImage: string; // New field for Expert Solutions section
  approachImage: string; // New field for Our Approach section
  description: string;
  detailedInfo: string;
  features: string[];
}

const services: Service[] = [
  {
    id: 'electrical-power',
    icon: <ElectricalServicesIcon className="text-5xl text-[#0177B2]" />,
    title: "Electrical & Power",
    heroImage: LodhaTowersImg,
    solutionImage: ecs11111, // Unique image for Expert Solutions
    approachImage: ecsecs, // Unique image for Our Approach
    description: "Comprehensive electrical infrastructure solutions ranging from high-tension panels to low-voltage distribution, ensuring safety, reliability, and energy efficiency for diverse sectors.",
    detailedInfo: "We provide end-to-end electrical infrastructure solutions designed for safety, efficiency, and scalability. From high-tension panels to intricate internal wiring, our team ensures every connection meets the highest industry standards. Our expertise spans industrial, commercial, and residential sectors, delivering reliable power distribution systems that stand the test of time.",
    features: [
      "HT & LT Panel Installation",
      "Transformer & Substations",
      "Cable Laying & Trenching",
      "DG Sets & UPS Systems",
      "Earthing & Lightning Protection",
    ],
  },
  {
    id: 'bms-automation',
    icon: <SettingsRemoteIcon className="text-5xl text-[#0177B2]" />,
    title: "BMS & Automation",
    heroImage: IitGuwahatiImg,
    solutionImage: bms1, // Unique image
    approachImage: bms2, // Unique image
    description: "Smart Building Management Systems (BMS) enabling centralized monitoring and control of electronics services to enhance operational efficiency and reduce costs.",
    detailedInfo: "Implementing state-of-the-art Building Management Systems (BMS) to centralize control of your building's mechanical and electrical equipment. Our automation solutions enhance operational efficiency, reduce energy consumption, and provide real-time monitoring capabilities for modern smart buildings.",
    features: [
      "Centralized Control Systems",
      "HVAC & Lighting Automation",
      "Energy Monitoring Dashboards",
      "Fault Detection & Alarms",
      "SCADA Integration",
    ],
  },
  {
    id: 'fire-alarm-safety',
    icon: <LocalFireDepartmentIcon className="text-5xl text-[#0177B2]" />,
    title: "Fire Alarm & Safety",
    heroImage: NimsHospitalImg,
    solutionImage: fire1, // Unique image
    approachImage: fire2, // Unique image
    description: "End-to-end fire protection solutions including detection, suppression, and hydrant systems designed to meet the strictest safety codes and NBC norms.",
    detailedInfo: "Safety is paramount. We design and install comprehensive fire fighting and detection systems that comply with strict safety regulations. From fire alarms to sprinkler systems and hydrants, we ensure your premises are equipped to handle emergencies effectively.",
    features: [
      "Fire Detection Systems",
      "Gas Suppression Systems",
      "Public Address Systems",
    ],
  },
  {
    id: 'surveillance-security',
    icon: <VideocamIcon className="text-5xl text-[#0177B2]" />,
    title: "Surveillance & Security",
    heroImage: IndustrialDemoBg,
    solutionImage: servilance1, // Unique image
    approachImage: servilance2, // Unique image
    description: "State-of-the-art security infrastructure featuring IP-based surveillance, video analytics, and command centers for round-the-clock monitoring.",
    detailedInfo: "We provide advanced security infrastructure tailored to protect critical assets. Our solutions include IP-based surveillance, video analytics, and integrated command centers that ensure round-the-clock monitoring and rapid response to any security breaches.",
    features: [
      "IP CCTV Networks",
      "Video Analytics Software",
      "Perimeter Intrusion Detection",
      "Command Center Setup",
      "Remote Monitoring Solutions",
    ],
  },
  {
    id: 'unified-communications',
    icon: <SettingsPhoneIcon className="text-5xl text-[#0177B2]" />,
    title: "Unified Communications",
    heroImage: NiabBiotechImg,
    solutionImage: cabel1, // Unique image
    approachImage: cabel2, // Unique image
    description: "Structured cabling and communication infrastructure ensuring seamless connectivity and data transfer across complex facility landscapes.",
    detailedInfo: "We design and deploy robust communication backbones including structured cabling and fiber optics. Our solutions ensure seamless connectivity, high-speed data transfer, and reliable voice communication across complex facility landscapes.",
    features: [
      "Structured Cabling (Copper/Fiber)",
      "EPABX & Intercom Systems",
      "Public Address Systems",
      "Networking Infrastructure",
      "Data Center Connectivity",
    ],
  },
  {
    id: 'access-control-entry',
    icon: <VpnKeyIcon className="text-5xl text-[#0177B2]" />,
    title: "Access Control & Entry",
    heroImage: GvkBiosciencesImg,
    solutionImage: access1, // Unique image
    approachImage: access2, // Unique image
    description: "Advanced access management systems providing secure, trackable entry solutions for personnel and vehicles, integrated with HR and security databases.",
    detailedInfo: "We implement sophisticated access control solutions that secure your premises while facilitating smooth movement for authorized personnel. Our systems integrate biometric readers, barriers, and visitor management software for total security oversight.",
    features: [
      "Biometric & RFID Readers",
      "Boom Barriers & Turnstiles",
      "Visitor Management Systems",
      "Flap Barrier Gates",
      "Integration with BMS",
    ],
  },

];

// Static Services Offered List
const servicesOfferedList = [
  { icon: <DesignServicesIcon />, title: "Design/Engineering" },
  { icon: <ManageAccountsIcon />, title: "Project Management" },
  { icon: <ConstructionIcon />, title: "Construction" },
  { icon: <VerifiedIcon />, title: "Testing & Commissioning" },
  { icon: <SettingsSuggestIcon />, title: "Operation & Maintenance" },
];

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const service = services.find((s) => s.id === id);

  if (!service)
    return (
      <div className="text-center py-20 text-xl">
        Service not found.
      </div>
    );

  return (
    <div className="bg-white min-h-screen overflow-x-hidden">

      {/* HERO SECTION */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center"
      >
        <ParallaxBackground src={service.heroImage} />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

        {/* Content */}
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center py-20">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-center relative">
              <h2
                className="text-[70px] md:text-[85px] text-[#0177B2] leading-none plaster-regular"
              >
                Service
              </h2>

              <h1 className="font-primary font-black tracking-[0.08em] uppercase text-white text-[40px] md:text-[55px] leading-none mt-2">
                {service.title}
              </h1>
            </div>
          </motion.div>
        </div>

        {/* Divider Strip */}
        <div className="absolute bottom-0 left-0 w-full z-20 translate-y-1/2 pointer-events-none overflow-hidden">
          <div className="flex w-max">
            {Array.from({ length: 120 }).map((_, i) => (
              <img key={i} src={DividerImg} className="h-6 shrink-0" alt="" />
            ))}
          </div>
        </div>
      </section>

      {/* BACK BUTTON SECTION - TOP LEFT */}
      <section className="pt-20 pb-8 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 border-2 border-[#0177B2] text-[#0177B2] px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-[#0177B2] hover:text-white shadow-md text-sm"
          >
            <span>&larr;</span> Back to Services
          </button>
        </div>
      </section>

      {/* SERVICES OFFERED SECTION */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-lg font-semibold text-[#0177B2] tracking-widest uppercase mb-4">
              What We Provide
            </h2>
            <h3 className="text-3xl font-bold text-gray-900">
              Services Offered
            </h3>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {servicesOfferedList.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-xl hover:bg-[#0177B2]/10 transition-colors">
                <div className="text-[#0177B2] mb-2 text-3xl">
                  {item.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">{item.title}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DETAILED INFO & FEATURES (Text Left, Image Right) */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Inspiration Heading & Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mb-8">
                <h2
                  className="text-[65px] text-[#0177B2] leading-none plaster-regular"
                >
                  Expert
                </h2>
                <h3 className="font-primary font-black tracking-[0.08em] uppercase text-[#111111] text-[37px] leading-none mt-2">
                  Solutions
                </h3>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {service.detailedInfo}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircleOutlineIcon className="text-[#0177B2] text-xl" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: Main Feature Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={service.solutionImage}
                  alt={`${service.title} solutions`}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative background element */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-[#0177B2] rounded-2xl z-0"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* NEW SECTION: Our Approach (Image Left, Text Right) */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Image (First on Mobile, Left on Desktop) */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={service.approachImage}
                  alt={`${service.title} approach`}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Decorative background element (Flipped) */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-4 border-[#0177B2] rounded-2xl z-0"></div>
            </motion.div>

            {/* Right: Text (Second on Mobile, Right on Desktop) */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative mb-8">
                <h2
                  className="text-[65px] text-[#0177B2] leading-none plaster-regular"
                >
                  Our
                </h2>
                <h3 className="font-primary font-black tracking-[0.08em] uppercase text-[#111111] text-[37px] leading-none mt-2">
                  Approach
                </h3>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircleOutlineIcon className="text-[#0177B2] text-xl" />
                  <span className="text-gray-700 font-medium">Initial Site Survey & Analysis</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircleOutlineIcon className="text-[#0177B2] text-xl" />
                  <span className="text-gray-700 font-medium">Custom Design & Engineering</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircleOutlineIcon className="text-[#0177B2] text-xl" />
                  <span className="text-gray-700 font-medium">Precision Installation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircleOutlineIcon className="text-[#0177B2] text-xl" />
                  <span className="text-gray-700 font-medium">Rigorous Testing & Handover</span>
                </li>
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;
// src/components/projects/projects.ts

import iil2Img from "../../assets/projects_images/Indian Immunologicals Limited (IIL)2.webp";
import rcbImg from "../../assets/projects_images/Research Centre Imarat (RCI).webp";
import lodhaImg from "../../assets/projects_images/Lodha Bellezza.webp";
import nddbImg from "../../assets/projects_images/National Dairy Development Board (NDDB).webp";
import iitImg from "../../assets/projects_images/Indian Institute of Technology (IIT).webp";
import bhuImg from "../../assets/projects_images/Institute of Medical Science, Banaras Hindu University.webp";
import rainbowImg from "../../assets/industry_images/hospital_icu2.webp";
import gvkImg from "../../assets/projects_images/GVK Biosciences Pvt.webp";
import sarvothamImg from "../../assets/industry_images/Sarvotham Care Pvt. Ltd..webp";
import icleanHqImg from "../../assets/projects_images/Integrated Clean Room Technologies Pvt. Ltd..webp";
import mylanImg from "../../assets/projects_images/Indian Institute of Technology (IIT).webp";
import cclImg from "../../assets/industry_images/CCL.webp";
import iitGImg from "../../assets/industry_images/IITLab.webp";
import tata from "../../assets/projects_images/Tata Semiconductor Assembly.webp";
import Exide from "../../assets/projects_images/Exide energy solutions limited.webp";
import ola from "../../assets/projects_images/ola.webp";

export interface Project {
  id: number;
  name: string; // Client Name
  // description: string; // Scope of Work
  projectType: string; // Type of work
  location: string;
  category: string;
  // value: string; // Added Value field
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Integrated Clean Room Technologies Pvt. Ltd. (Iclean)",
    projectType: "Factory",
    location: "Kompally, Hyd",
    category: "Commercial",
    image: iil2Img
  },
  {
    id: 2,
    name: "Tata Semiconductor Assembly and Test (TSAT)",
    projectType: "Production Area",
    location: "Bangalore",
    category: "Assembly",
    image: tata
  },
  {
    id: 3,
    name: "Exide energy solutions limited",
    projectType: "Energy Storage System (ESS) Lab",
    location: "Bangalore",
    category: "Industrial",
    image: Exide
  },
  {
    id: 4,
    name: "OLA cell technologies",
    projectType: "Battery Testing Lab",
    location: "Chennai",
    category: "Industrial",
    image: ola
  },
  {
    id: 5,
    name: "Indian Immunologicals Limited (IIL)",
    projectType: "Lab area for QA, QC, AH&HH",
    location: "Karakapatla, Hyd",
    category: "Industrial",
    image: icleanHqImg
  },
  {
    id: 6,
    name: "Research Centre Imarat (RCI)",
    projectType: "Class 100 area",
    location: "Balapur, Hyd",
    category: "Industrial",
    image: rcbImg
  },
  {
    id: 7,
    name: "Lodha Bellezza",
    projectType: "External & Internal Works",
    location: "KPHB, Hyd",
    category: "Residential",
    image: lodhaImg
  },
  {
    id: 8,
    name: "National Dairy Development Board (NDDB)",
    projectType: "Lab Area",
    location: "Bangalore",
    category: "Industrial",
    image: nddbImg
  },
  {
    id: 9,
    name: "Indian Institute of Technology (IIT)",
    projectType: "Clean Room Lab Area",
    location: "New Delhi",
    category: "Assembly",
    image: iitImg
  },
  {
    id: 10,
    name: "Institute of Medical Science, Banaras Hindu University (IMS, BHU)",
    projectType: "Medical College & Hostel",
    location: "Varanasi, UP",
    category: "Healthcare",
    image: bhuImg
  },
  {
    id: 11,
    name: "Rainbow Hospitals",
    projectType: "Operation Theatres",
    location: "Bangalore",
    category: "Healthcare",
    image: rainbowImg
  },
  {
    id: 12,
    name: "GVK Biosciences Pvt. Ltd.",
    projectType: "New Unit Expantion",
    location: "Hyderabad",
    category: "Industrial",
    image: gvkImg
  },
  {
    id: 13,
    name: "Sarvotham Care Pvt. Ltd.",
    projectType: "Clean Room Lab Area",
    location: "Hyderabad",
    category: "Industrial",
    image: sarvothamImg
  },
  {
    id: 14,
    name: "Mylan Labs",
    projectType: "New Unit Expantion",
    location: "Lusaka, Zambia",
    category: "Industrial",
    image: mylanImg
  },
  {
    id: 15,
    name: "CCL Products India Ltd",
    projectType: "Clean Room Lab",
    location: "Sulluripet, AP",
    category: "",
    image: cclImg
  },
  {
    id: 16,
    name: "IIT Guwahati",
    projectType: "Testing Laboratory",
    location: "IIT Guwahati",
    category: "Industrial",
    image: iitGImg
  },

];
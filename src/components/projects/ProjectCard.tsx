// src/components/projects/ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  image: string;
  name: string;
  // description: string;
  projectType: string;
  location: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  name,
  // description,
  projectType,
  location,
  category,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full">

      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
          {category}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-grow">

        {/* 1. Project Name */}
        <h3
          className="text-base font-bold text-gray-900 mb-2 leading-tight line-clamp-2"
          title={name}
        >
          {name}
        </h3>

        {/* 3. Client & Location */}
        <div className="border-t border-gray-100 pt-3 space-y-2 text-xs">

          {/* Client with Person Icon */}
          <div className="flex items-center gap-2 text-gray-500 min-w-0">
            <svg
              className="w-4 h-4 text-[#0177B2] flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5.121 17.804A9 9 0 1118.9 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="font-medium text-gray-700 truncate" title={name}>
              {typeof name === "string" ? name.split("(")[0] : ""}
            </span>
          </div>

          {/* Location with Location Icon */}
          <div className="flex items-center gap-2 text-gray-500 min-w-0">
            <svg
              className="w-4 h-4 text-[#0177B2] flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="font-medium text-gray-700 truncate" title={location}>
              {location || ""}
            </span>
          </div>
        </div>

        {/* 4. TYPE OF WORK - ALWAYS AT BOTTOM */}
        <div className="mt-auto pt-4">
          <div className="bg-gray-50 rounded-md px-4 py-3 text-center">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold mb-1">
              Type of Work
            </p>
            <p className="text-sm font-bold text-[#0177B2]">
              {projectType}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;

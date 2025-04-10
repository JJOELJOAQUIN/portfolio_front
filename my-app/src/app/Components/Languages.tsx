"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Logo = {
  name: string;
  logo: string;
  size?: number;
};

type Props = {
  logos: Logo[];
};

const TechLogos: React.FC<Props> = ({ logos }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="p-4 text-center" ref={ref}>
      <motion.h3
        className="text-4xl md:text-5xl pt-4 font-extrabold text-green-900"
        initial={{ opacity: 0, y: -30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        Technologies I Use
      </motion.h3>

      <div className="flex flex-wrap justify-center items-center gap-6 mt-8">
        {logos.map((tech, index) => (
          <div key={index} className="group relative flex items-center justify-center w-16 h-16">
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-[120%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md z-10 whitespace-nowrap pointer-events-none">
              {tech.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechLogos;

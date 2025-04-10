"use client";

import React from "react";
import Wrapper from "./Wrapper";
import { motion, useInView } from "framer-motion";

const Hero: React.FC = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref);

  return (
    <section ref={ref}>
      <Wrapper>
        <div className="container  xl:px-0">
          <div className="flex flex-col md:flex-row">
            {/* Animación para el texto principal */}
            <motion.div
              className="w-full xl:w-3/5 md:pt-24 pb-10 lg:py-20 xl:py-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
              transition={{ duration: 1.2 }}
            >
              <h1 className="text-3xl lg:text-5xl xl:text-7xl font-black beenu-brand text-center md:text-left tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">
                Hi, I'm Joel Joaquín López
              </h1>
              <motion.h2
                className="md:w-8/12 py-4 text-center md:text-left md:py-8 text-gray-300 text-lg lg:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              >
                A passionate Full-Stack Developer focused on creating intuitive
                and dynamic web experiences.
              </motion.h2>
              <div className="w-full flex justify-center md:block">
                {/* Animación para el botón */}
                <motion.button
                  onClick={() => {
                    const el = document.getElementById("contacto");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:opacity-90 bg-[#19521a] py-3 px-5 lg:py-3 lg:px-20 rounded-lg text-white text-sm md:text-lg f-f-p"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Contact
                </motion.button>
              </div>
            </motion.div>

            <div className="relative w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] translate-x-10 md:translate-x-20">
              <video
                className="w-full max-w-[600px] h-auto object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/Diseño sin título.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;

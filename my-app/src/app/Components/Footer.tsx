"use client";

import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // <- Asegurate de tener react-icons instalado

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white text-center py-6">
      <p className="text-sm">
        📩 Contacto:{" "}
        <a href="mailto:jowidevelop@gmail.com" className="underline">
          jowidevelop@gmail.com
        </a>
      </p>
      <p className="text-xs mt-1">&copy; {year} JowiDev. Todos los derechos reservados.</p>

      {/* LinkedIn icon */}
      <div className="mt-4 flex justify-center">
        <a
          href="https://www.linkedin.com/in/joel-joaqu%C3%ADn-l%C3%B3pez-8a9125266/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/JJOELJOAQUIN"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;



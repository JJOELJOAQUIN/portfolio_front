"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [show, setshow] = useState(false);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 1, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full sticky z-50 top-0 bg-[#b7c5c096]">
      <nav className="lg:px-20 lg:py-6 sm:py-6 sm:px-7 py-5 px-4 z-50 relative">
        {/* Contenedor principal de la navbar */}
        <div className="flex justify-between items-center">
          {/* Logo / Marca a la izquierda */}
          <div className="flex space-x-3 beenu-brand items-center">
            {/* Agrega aquí tu logo si lo necesitas */}
          </div>

          {/* Botones Centrados */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
            <Link className="px-8 beenu-brand" href="/#choose-us">
              Why Choose Us
            </Link>
            <Link className="px-8 beenu-brand" href="/#contacto">
              Contact
            </Link>
          </div>

          {/* Burger Icon (Menú Móvil) */}
          <div
            id="bgIcon"
            onClick={() => setshow(!show)}
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 sm:hidden cursor-pointer"
          >
            {/* Ícono de Menú */}
            <svg
              className={`${show ? "hidden" : ""}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                className="transform duration-150"
                d="M4 6H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M4 12H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className="transform duration-150"
                d="M4 18H20"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
}

"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full sticky z-50 top-0 bg-[#b7c5c096] backdrop-blur-md">
      <nav className="px-4 py-5 md:px-20 md:py-6 relative">
        <div className="flex justify-between items-center">
          {/* Logo o Marca */}
          <div className="flex items-center space-x-3">
            {/* Aquí podrías agregar un logo si querés */}
            <span className="text-xl font-bold">JowiDev</span>
          </div>

          {/* Ícono del menú hamburguesa (solo se muestra en mobile) */}
          <div
            onClick={() => setShow(!show)}
            className="md:hidden cursor-pointer z-50"
          >
            <svg
              className={`${show ? "hidden" : "block"}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M4 6H20M4 12H20M4 18H20" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Links horizontales en desktop */}
          <div className="hidden md:flex space-x-10 font-medium">
          <Link href="/#choose-us" scroll={true}>Why Choose Us</Link>
            <Link href="/#contacto" scroll={true}>Contact</Link>


          </div>
        </div>

        {/* Menú vertical en mobile */}
        {show && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center mt-6 md:hidden space-y-4 bg-white rounded-lg py-4 shadow-lg"
          >
            <Link
              href="/#choose-us"
              className="text-gray-800 text-lg"
              onClick={() => setShow(false)}
            >
              Why Choose Us
            </Link>
            <Link
              href="/#contacto"
              className="text-gray-800 text-lg"
              onClick={() => setShow(false)}
            >
              Contact
            </Link>
          </motion.div>
        )}
      </nav>
    </div>
  );
}

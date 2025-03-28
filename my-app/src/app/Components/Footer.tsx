"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="w-full bg-[#b7c5c096]  xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
      <div className="flex flex-col items-center justify-center">
        <div>
          <Link href="/">
            <Image src="/5097235.jpg" height={150} width={150} alt="Beeneu" />
          </Link>
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
          <Link className="px-8 beenu-brand" href="/#elegirnos">
            ¿Por qué elegirnos?
          </Link>
          <Link className="px-8 beenu-brand" href="/#contacto">
            Contactanos
          </Link>
          <Link href="/servicios">
            <p className="hover:text-orange-600 text-base cursor-pointer leading-4 beenu-brand">
              Términos de Servicio
            </p>
          </Link>
          <Link href="/politicas">
            <p className="hover:text-orange-600 text-base cursor-pointer leading-4 beenu-brand">
              Politicas de Privacidad
            </p>
          </Link>
        </div>
        <div className="flex items-center mt-10">
          <p className="text-base leading-4 beenu-brand">2025</p>
          <div className="border-l border-gray-800 pl-2 ml-2">
            <p className="text-base leading-4 beenu-brand">
              Powered by Beeneu, todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Wrapper from "./Wrapper";
import { motion, useInView } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const formRef = React.useRef(null);
  const formInView = useInView(formRef, { once: false });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert("Correo enviado exitosamente");
      } else {
        alert("Hubo un error al enviar el correo");
      }
    } catch (error) {
      console.error("Error al enviar el correo", error);
    }
  };

  return (
    <div id="contacto">
    <Wrapper>
      <section  className="w-full flex flex-col items-center my-12">
        <article className="bg-white py-12 w-full lg:px-28 px-8">
          <motion.h3 className="text-5xl lg:text-4xl pt-4 font-extrabold beenu-brand">
            ¿Sobre qué temática te gustaría hablar?
          </motion.h3>

          <motion.form
            ref={formRef}
            initial="hidden"
            animate={formInView ? "visible" : "hidden"}
            className="md:flex md:flex-col items-center mt-12 w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row w-full">
              <div className="md:w-1/2 flex flex-col">
                <label
                  htmlFor="name"
                  className="text-base font-semibold leading-none beenu-brand"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-orange-700 mt-4 bg-gray-100 border rounded border-gray-200"
                  required
                />
              </div>

              <div className="md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label
                  htmlFor="email"
                  className="text-base font-semibold leading-none beenu-brand"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-orange-700 mt-4 bg-gray-100 border rounded border-gray-200"
                  required
                />
              </div>
            </div>

            <div className="w-full flex flex-col mt-8">
              <label
                htmlFor="message"
                className="text-base font-semibold leading-none beenu-brand"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="h-36 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-orange-700 mt-4 bg-gray-100 border rounded border-gray-200 resize-none"
                required
              />
            </div>

            <div className="flex items-center lg:justify-start justify-center w-full">
              <button
                type="submit"
                className="mt-9 hover:opacity-90 bg-[#19521a] py-3 px-10 lg:py-3 lg:px-20 rounded-lg text-white text-sm md:text-lg f-f-p"
              
              >
                Enviar
              </button>
            </div>
          </motion.form>
        </article>
      </section>
    </Wrapper>
    </div>
  );
}
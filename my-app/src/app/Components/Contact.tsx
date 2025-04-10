"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Wrapper from "./Wrapper";
import { motion, useInView } from "framer-motion";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface MyFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<MyFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isClient, setIsClient] = useState(false);

  const formRef = React.useRef(null);
  const formInView = useInView(formRef, { once: false });


  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        const activeElement = document.activeElement;
        const isTypingField =
          activeElement?.tagName === "TEXTAREA" ||
          activeElement?.tagName === "INPUT";

        if (isTypingField) return;
        const form = formRef.current as HTMLFormElement | null;
        form?.requestSubmit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      toast.error("❌ Falta configurar las variables de entorno para EmailJS");
      return;
    }

    try {
      await emailjs.send(serviceId, templateId, formData as unknown as Record<string, unknown>, userId);

      toast.success("📬 ¡Correo enviado exitosamente!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error al enviar:", error);
      toast.error("❌ Hubo un error al enviar el correo");
    }
  };

  return (
    <div id="contacto">
      <Wrapper>
        <section className="w-full flex flex-col items-center my-12">
          <article className="bg-white py-12 w-full lg:px-28 px-8 rounded-xl shadow-lg">
            <motion.h3 className="text-5xl lg:text-4xl pt-4 font-extrabold text-green-900">
              Contact Me
            </motion.h3>
            {isClient && (
            <motion.form
              ref={formRef}
              initial="hidden"
              animate={formInView ? "visible" : "hidden"}
              className="md:flex md:flex-col items-center mt-12 w-full space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col md:flex-row w-full gap-6">
                <div className="md:w-1/2 flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-base font-semibold text-green-800"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="text-base text-gray-900 p-3 mt-2 bg-gray-100 border rounded border-gray-300"
                    required
                  />
                </div>

                <div className="md:w-1/2 flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-base font-semibold text-green-800"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="text-base text-gray-900 p-3 mt-2 bg-gray-100 border rounded border-gray-300"
                    required
                  />
                </div>
              </div>

              <div className="w-full flex flex-col">
                <label
                  htmlFor="message"
                  className="text-base font-semibold text-green-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-36 text-base text-gray-900 p-3 mt-2 bg-gray-100 border rounded border-gray-300 resize-none"
                  required
                />
              </div>

              <div className="flex justify-center w-full">
                <button
                  type="submit"
                  className="mt-6 hover:opacity-90 bg-green-800 py-3 px-10 rounded-lg text-white text-lg shadow-md transition duration-300"
                >
                  Enviar
                </button>
              </div>
            </motion.form>
            )}
          </article>
        </section>
      </Wrapper>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

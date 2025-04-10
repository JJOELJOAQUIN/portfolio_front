"use client";
import React from "react";
import Wrapper from "./Wrapper";
import { motion } from "framer-motion";
import Image from "next/image";

const About2 = () => {
  return (
    <div id="choose-us">
      <div className="pb-16" style={{ fontFamily: "Lato, sans-serif" }}>
        <section className="bg-brand py-12 mt-12">
          <Wrapper>
            <div className="">
              <h2
                tabIndex={0}
                className="focus:outline-none text-4xl lg:text-5xl pt-4 font-extrabold leading-tight text-white pb-10 lg:w-7/12 md:w-9/12 xl:w-5/12"
              >
                Why Choose Us
              </h2>
            </div>

            <div
              tabIndex={0}
              aria-label="group of cards"
              className="focus:outline-none lg:px-0"
            >
              <div className="mx-auto container flex flex-wrap px-2">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  tabIndex={0}
                  aria-label="card 1"
                  className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-r md:border-r sm:border-r-0 border-orange-100 pb-10 lg:pt-10"
                >
                  <div className="flex flex-shrink-0 mr-5 text-white">
                    <Image
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg1.svg"
                      alt="drawer"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="md:w-9/12 lg:w-9/12">
                    <h3
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-5 text-white"
                    >
                      .01 Who I Am
                    </h3>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                    >
                      I am an independent web developer with a clear vision:
                      connecting with clients, analyzing their challenges, and
                      creating solutions that enhance their efficiency and
                      results.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  tabIndex={0}
                  aria-label="card 2"
                  className="focus:outline-none flex sm:w-full md:w-1/2 lg:pb-10 lg:pt-10"
                >
                  <div className="flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                    <Image
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg2.svg"
                      alt="check"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="md:w-9/12 lg:w-9/12 ">
                    <h3
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-5 text-white"
                    >
                      .02 What I Enjoy
                    </h3>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                    >
                      Collaboration motivates me. I enjoy working in a team
                      because every challenge is an opportunity to learn, grow,
                      and contribute innovative solutions that make a
                      difference.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  tabIndex={0}
                  aria-label="card 3"
                  className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 lg:border-r md:border-r sm:border-r-0 border-orange-100 pt-10 lg:pb-20"
                >
                  <div className="flex flex-shrink-0 mr-5 text-white">
                    <Image
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg3.svg"
                      alt="html-tag"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="md:w-9/12 lg:w-9/12 ">
                    <h3
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-5 text-white"
                    >
                      .03 How I Work
                    </h3>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                    >
                      I make the most of technology by implementing management
                      platforms, artificial intelligence, and structured
                      methodologies. This allows me to optimize processes and
                      maintain an agile and organized workflow.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  tabIndex={0}
                  aria-label="card 4"
                  className="focus:outline-none flex sm:w-full md:w-1/2 lg:border-t md:border-t sm:border-t-0 border-orange-100 pt-10 lg:pb-20"
                >
                  <div className="flex flex-shrink-0 sm:ml-0 md:ml-10 lg:ml-10 mr-5 text-white">
                    <Image
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/indigo_bg_with_divider-svg4.svg"
                      alt="display"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="md:w-9/12 lg:w-9/12 ">
                    <h3
                      tabIndex={0}
                      className="focus:outline-none text-lg font-semibold leading-5 text-white"
                    >
                      .04 What I Do
                    </h3>
                    <p
                      tabIndex={0}
                      className="focus:outline-none text-base text-white leading-normal xl:w-10/12 pt-2"
                    >
                      I specialize in custom software development, designing
                      innovative applications that optimize processes and drive
                      my clients growth. From the initial idea to
                      implementation, I create technology tailored to every
                      need.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </Wrapper>
        </section>
      </div>
    </div>
  );
};

export default About2;

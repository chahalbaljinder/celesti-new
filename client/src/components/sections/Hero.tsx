"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (    <section className="w-full py-24 md:py-32 dark:bg-gradient-to-b dark:from-[#0F172A] dark:to-[#1E293B]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >            <div className="inline-block rounded-full bg-[#1E293B] px-3 py-1 text-sm text-[#FAD4D8] border border-[#FAD4D8]/30">
              PREMIUM DEVELOPMENT
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Web Apps that{" "}            <span className="bg-gradient-to-r from-[#FAD4D8] to-[#CFD1EA] bg-clip-text text-transparent">
              Make Sense.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#E2E8F0]"
          >
            We create beautiful websites and applications that rival the most popular services like Google and Facebook. We blend marketing insights with good code.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

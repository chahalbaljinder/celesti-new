"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
}

const Testimonial = ({ quote, name, position, company }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center mx-auto max-w-3xl"
    >        <div className="mb-8">
        <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-[#FAD4D8]/30">
          <Image
            src="/images/testimonials/tyler.png"
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="text-[#FAD4D8] text-3xl font-serif mb-4">&quot;</div>
      <span className="text-lg md:text-xl font-light leading-relaxed text-gray-700  mb-6 max-w-2xl">
      &quot;{quote}&quot;
      </span>
      <div className="text-[#FAD4D8] text-3xl font-serif mb-4 rotate-180">&quot;</div>
      <div className="w-12 h-0.5 bg-[#FAD4D8] opacity-30 mb-4"></div>
      <p className="font-semibold text-black ">{name}</p>
      <p className="text-sm text-gray-500 ">
        {position} at {company}
      </p>
    </motion.div>
  );
};

const Testimonials = () => {
  return (    <section className="w-full py-16 md:py-32 bg-gray-50 relative">
      <div className="absolute inset-0 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">          <h2 className="text-3xl font-bold mb-3 ">What Our Clients Say</h2>
          <p className="text-gray-600  max-w-xl mx-auto">We&apos;re proud to have helped numerous businesses reach their digital potential</p>
        </div>
        <Testimonial
          quote="Celesti helped us build our website from scratch to production in a record 1 month time. They took our requirements and delivered a website we are proud of so much that we are thrilled with the results."
          name="Tyler Durden"
          position="Founder"
          company="Fight Dragons"
        />
      </div>
    </section>
  );
};

export default Testimonials;

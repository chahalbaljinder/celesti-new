"use client";

import React from "react";
import { motion } from "framer-motion";

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
}

const TestimonialSecondary = ({ quote, name, position, company }: TestimonialProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center mx-auto max-w-3xl"
    >
      <span className="text-lg md:text-xl italic text-gray-700 dark:text-gray-300 mb-4">
      &quot;{quote}&quot;
      </span>
      <div className="mt-4">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {position} at {company}
        </p>
      </div>
    </motion.div>
  );
};

const TestimonialsSecondary = () => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <TestimonialSecondary          quote="Celesti is different and one of my best buds. They use your instructions very well, and have a great team of developers. They are very responsive and always available to help. I would highly recommend them to anyone looking for a website or app development."
          name="Michael Scott"
          position="Manager of Docker MRUs"
          company=""
        />
      </div>
    </section>
  );
};

export default TestimonialsSecondary;

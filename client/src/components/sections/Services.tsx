"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: string 
}) => {
  return (
    <motion.div
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="flex flex-col items-start p-6 bg-white border rounded-xl shadow-sm dark:bg-[#1E293B] dark:border-[#0F172A]/50 backdrop-blur-sm"
    >
      <div className="inline-flex items-center justify-center rounded-lg bg-gray-100 p-3 mb-4 dark:bg-[#0F172A] border border-transparent dark:border-[#CFD1EA]/20">
        <Image 
          src={icon} 
          alt={title}
          width={24}
          height={24}
          className="h-6 w-6 dark:filter dark:brightness-0 dark:invert-[0.7] dark:sepia-[0.2] dark:saturate-[2] dark:hue-rotate-[5deg]"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2 dark:text-[#CFD1EA]">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-[#E2E8F0]">{description}</p>
    </motion.div>
  );
};

const ServicesSection = () => {
  console.log("ServicesSection rendered with ID: services");
  const services = [
    {
      title: "Modern Web Apps",
      description: "Fast, responsive, and accessible sites with a modern look that is designed to perform.",
      icon: "/window.svg"
    },
    {
      title: "Vetted design",
      description: "Vetted design, integrated at scale to create web apps that scale beyond your expectations.",
      icon: "/globe.svg"
    },
    {
      title: "Built-in wealth",
      description: "Applications that have both front-end and back-end components with good architecture.",
      icon: "/file.svg"
    }
  ];  return (    <section id="services" className="w-full py-16 md:py-28 bg-gray-50 dark:bg-[#0F172A] dark:bg-opacity-95 scroll-mt-20 relative dark:border-t dark:border-[#1E293B]">
      <div className="absolute inset-0 dark:bg-[url('/images/grid-pattern.png')] dark:opacity-10 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 dark:text-[#CFD1EA]">Our Premium Services</h2>
          <p className="text-gray-600 dark:text-[#E2E8F0] max-w-2xl mx-auto">Elevate your digital presence with our carefully crafted services tailored for excellence</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-10 text-center">        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >          <Link href="/work" className="inline-flex items-center justify-center rounded-md border border-[#CFD1EA] bg-transparent px-5 py-2.5 text-sm font-medium text-black dark:text-[#CFD1EA] shadow-sm transition-colors hover:bg-[#CFD1EA]/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#CFD1EA]">
            Explore Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

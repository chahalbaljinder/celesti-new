"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard = ({ 
  title, 
  description, 
  subtitle, 
  images, 
  liveUrl 
}: { 
  title: string; 
  description: string;
  subtitle: string;
  images: string[];
  liveUrl: string;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-32 group"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 dark:text-[#D4AF37]">{title}</h2>
      <p className="text-lg mb-3 text-gray-700 dark:text-[#E2E8F0] max-w-3xl">{description}</p>      <p className="text-gray-500 mb-6 dark:text-[#94A3B8]">{subtitle}</p>
      
      <div className="flex flex-wrap items-center mb-8">
        <a 
          href={liveUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-md text-[#0F172A] bg-[#D4AF37] hover:bg-[#D4AF37]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] transition-colors duration-300 mr-4"
        >
          Live Preview
        </a>
        <a 
          href="#" 
          className="inline-flex items-center px-5 py-2.5 border border-[#D4AF37]/30 text-sm font-medium rounded-md shadow-sm text-gray-800 dark:text-[#E2E8F0] bg-transparent hover:bg-[#D4AF37]/10 transition-colors duration-300 focus:outline-none"
        >
          Case Study
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="rounded-lg overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500 border border-transparent dark:border-[#D4AF37]/10 bg-white dark:bg-[#1E293B]"
          >
            <div className="relative p-2">
              <Image
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                width={1080}
                height={675}
                className="w-full h-auto object-cover rounded-md transition-transform duration-500 hover:scale-102"
              />
              <div className="absolute inset-0 bg-[#D4AF37]/0 hover:bg-[#D4AF37]/10 transition-colors duration-300 pointer-events-none rounded-md"></div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function WorkPage() {
  const projects = [
    {
      title: "Algochurn",
      description: "Practice the most popular coding questions asked in a technical interview round.",
      subtitle: "Used by 1000+ registered users preparing for technical interviews.",
      images: [
        "/images/products/algochurn.png",
        "/images/products/algochurn2.png"
      ],
      liveUrl: "https://algochurn.com/"
    },
    {
      title: "Tailwind Master Kit",
      description: "Get beautiful, responsive, professionally developed Tailwind UI components and build your website quicker",
      subtitle: "Worry less about responsive and beautiful UI, let Tailwind Master Kit handle the complexity.",
      images: [
        "/images/products/tailwindmasterkit.png",
        "/images/products/tailwindmasterkit3.png"
      ],
      liveUrl: "https://tailwindmasterkit.com/"
    },
    {
      title: "Creme Digital",
      description: "Commonsense solutions that achieve marketing objectives and reach business goals",
      subtitle: "Since 2015, Creme Digital's solutions have supported brands from virtually every industry",
      images: [
        "/images/products/cremedigital3.png",
        "/images/products/cremedigital.png"
      ],
      liveUrl: "https://cremedigital.com/"
    },
    {
      title: "Invoker Labs",
      description: "Delivering magical Web3 experiences with a wide range of products and services.",
      subtitle: "Flagship products include Nearsend, Nearblocks, nKYC and Route ag.",
      images: [
        "/images/products/invoker.png",
        "/images/products/invoker2.png"
      ],
      liveUrl: "https://invoker.lol/"
    }
  ];
  return (
    <div className="min-h-screen flex flex-col dark:bg-[#0F172A]">
      <Navbar />
      <main className="flex-grow pt-14">
        <section className="w-full py-24 md:py-32 relative dark:bg-[#0F172A]">
          <div className="absolute inset-0 dark:bg-[url('/images/grid-pattern.png')] dark:opacity-5 pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-20"
            >
              <div className="inline-block mb-3 text-sm font-medium px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">Our Portfolio</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">A glimpse into our <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#FEF3C7]">premium projects</span></h1>
              <p className="text-lg text-gray-600 dark:text-[#E2E8F0]">
                Explore our collection of bespoke digital experiences crafted with precision and luxury in mind.
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  subtitle={project.subtitle}
                  images={project.images}
                  liveUrl={project.liveUrl}
                />
              ))}
            </div>
          </div>
        </section>        {/* Contact Section */}
        <section className="w-full py-20 bg-gray-50 dark:bg-[#0F172A] border-t border-gray-100 dark:border-[#1E293B] relative">
          <div className="absolute inset-0 dark:bg-[url('/images/grid-pattern.png')] dark:opacity-5 pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <div className="inline-block mb-3 text-sm font-medium px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">Ready to Begin?</div>
              <h2 className="text-3xl font-bold mb-6 dark:text-[#D4AF37]">Transform Your Digital Presence</h2>
              <p className="text-lg text-gray-600 dark:text-[#E2E8F0] mb-10 max-w-2xl mx-auto">
                Contact us for a personalized consultation. Our team of experts will collaborate with you to create a bespoke digital experience that reflects the premium nature of your brand.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="mailto:contact@luxuryagency.com"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-[#0F172A] bg-[#D4AF37] hover:bg-[#D4AF37]/90 transition-colors duration-300 focus:outline-none"
                >
                  Contact Us
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-[#D4AF37]/30 text-base font-medium rounded-md text-gray-800 dark:text-[#E2E8F0] hover:bg-[#D4AF37]/10 transition-colors duration-300"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

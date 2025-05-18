"use client";

import React from "react";
import NavbarFixed from "@/components/layout/NavbarFixed";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/sections/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      content: "contact@agency.com",
      link: "mailto:contact@agency.com"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      content: "+1 (123) 456-7890",
      link: "tel:+11234567890"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Location",
      content: "123 Tech Street, San Francisco, CA 94107",
      link: "https://maps.google.com"
    }
  ];
  return (
    <div className="min-h-screen flex flex-col dark:bg-[#0F172A]">
      <NavbarFixed />
      <main className="flex-grow pt-14">
        <section className="w-full py-24 md:py-32 relative dark:bg-[#0F172A]">
          <div className="absolute inset-0 dark:bg-[url('/images/grid-pattern.png')] dark:opacity-5 pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-[#D4AF37]">Get in Touch</h1>
              <p className="text-lg text-gray-600 dark:text-[#E2E8F0]">
                Ready to transform your digital presence? We're here to bring your vision to life with premium design and development.
              </p>
            </motion.div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              {contactInfo.map((item, index) => (
                <motion.a
                  href={item.link}
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white dark:bg-[#1E293B] p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow border border-transparent dark:border-[#D4AF37]/10"
                >
                  <div className="mx-auto bg-gray-100 dark:bg-[#0F172A] w-16 h-16 rounded-full flex items-center justify-center text-gray-600 dark:text-[#D4AF37] mb-5 shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 dark:text-[#D4AF37]">{item.title}</h3>
                  <p className="text-gray-600 dark:text-[#E2E8F0]">{item.content}</p>
                </motion.a>
              ))}
            </div>
            
            <ContactForm />
              <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="max-w-5xl mx-auto mt-20"
            >
              <div className="bg-white dark:bg-[#1E293B] rounded-xl overflow-hidden h-96 w-full shadow-lg border border-transparent dark:border-[#D4AF37]/10">
                {/* This would be replaced with an actual map component in a real implementation */}
                <div className="w-full h-full bg-gray-200 dark:bg-[#0F172A]/80 flex items-center justify-center text-gray-600 dark:text-[#E2E8F0] relative">
                  <div className="absolute w-full h-full opacity-20 bg-[url('/images/map-bg.jpg')] bg-cover bg-center"></div>
                  <div className="z-10 text-center p-8">
                    <div className="w-12 h-12 mx-auto mb-4 text-[#D4AF37]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <p className="text-xl font-medium dark:text-[#D4AF37] mb-2">Visit Our Office</p>
                    <p className="text-gray-600 dark:text-[#E2E8F0] max-w-md mx-auto">123 Tech Street, San Francisco, CA 94107</p>
                    <button className="mt-6 px-6 py-3 bg-[#D4AF37] text-[#0F172A] rounded-md hover:bg-[#D4AF37]/90 transition-colors duration-300 font-medium">
                      Open in Google Maps
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

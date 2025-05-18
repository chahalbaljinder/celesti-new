"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesGrid from "@/components/sections/ServicesGrid";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Design",
      description: "Creating visually appealing and user-friendly interfaces that engage your audience and enhance user experience.",
      services: [
        "UI/UX Design",
        "Web Design",
        "Mobile App Design",
        "Brand Identity",
        "Wireframing & Prototyping"
      ]
    },
    {
      title: "Development",
      description: "Building robust, scalable, and high-performance web applications using cutting-edge technologies.",
      services: [
        "Frontend Development",
        "Backend Development",
        "Full Stack Development",
        "E-commerce Solutions",
        "Custom CMS Development"
      ]
    },
    {
      title: "Optimization",
      description: "Enhancing your website's performance, speed, and search engine visibility to drive more traffic and conversions.",
      services: [
        "SEO Optimization",
        "Performance Optimization",
        "Conversion Rate Optimization",
        "Accessibility Improvements",
        "Technical Audits"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-14">
        <section className="w-full py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h1 className="text-4xl font-bold mb-6">Our Services</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We offer a comprehensive range of web development services tailored to meet your specific business needs.
              </p>
            </motion.div>
            
            <div className="space-y-24">
              {serviceCategories.map((category, index) => (
                <motion.div 
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="max-w-5xl mx-auto"
                >
                  <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl">
                    {category.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, i) => (
                      <div 
                        key={i} 
                        className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <h3 className="text-xl font-semibold mb-2">{service}</h3>
                        <div className="w-12 h-1 bg-purple-500 mb-4"></div>
                        <p className="text-gray-600 dark:text-gray-400">
                          Professional {service.toLowerCase()} services tailored to your specific business needs.
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  );
}

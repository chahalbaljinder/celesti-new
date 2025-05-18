"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const TemplateCard = ({ 
  title, 
  description, 
  subtitle, 
  images, 
  liveUrl,
  purchaseUrl,
  technologies
}: { 
  title: string; 
  description: string;
  subtitle: string;
  images: string[];
  liveUrl: string;
  purchaseUrl: string;
  technologies: string[];
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-24"
    >
      <h2 className="text-3xl font-bold mb-2">{title}</h2>
      <p className="text-lg mb-2 text-gray-700 dark:text-gray-300">{description}</p>
      <p className="text-gray-500 mb-6 dark:text-gray-400">{subtitle}</p>
      
      <div className="flex flex-wrap mb-6">
        {technologies.map((tech, index) => (
          <span key={index} className="mr-2 mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            {tech}
            {index < technologies.length - 1 && <span className="ml-1 text-gray-400">•</span>}
          </span>
        ))}
      </div>
      
      <div className="flex flex-wrap items-center mb-8">
        <a 
          href={liveUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-4"
        >
          Live Preview
        </a>
        <a 
          href={purchaseUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Purchase
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md">
            <Image
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              width={1080}
              height={675}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Testimonial = () => {
  return (
    <div className="relative my-16 px-6 py-8 bg-gray-50 dark:bg-gray-900 rounded-lg">
      <div className="absolute -top-10 left-10">
        <Image 
          src="/images/testimonials/tyler.png" 
          alt="Tyler Durden" 
          width={80} 
          height={80} 
          className="rounded-full border-4 border-white shadow-md"
        />
      </div>
      <div className="mt-6 pt-4">
        <svg 
          className="absolute top-0 left-0 transform -translate-y-6 -translate-x-2 h-16 w-16 text-gray-200 dark:text-gray-800" 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          aria-hidden="true"
        >
          <path 
            d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.7662 12.86C3.84679 12.86 3.05759 12.5533 2.39859 11.94C1.76479 11.3266 1.44789 10.4467 1.44789 9.29999C1.44789 8.07332 1.92215 6.87332 2.87067 5.69999C3.81919 4.49999 5.10419 3.55332 6.72569 2.85999L7.39762 3.79999C6.01682 4.31999 4.96643 4.95332 4.24644 5.69999C3.52645 6.44666 3.16645 7.19999 3.16645 7.95999C3.16645 8.37332 3.29762 8.73999 3.55996 9.05999C3.82229 9.36666 4.12107 9.53332 4.45629 9.55999C4.79151 9.58666 5.09637 9.53999 5.37107 9.41999C5.64577 9.29999 5.84679 9.13332 5.97414 8.91999C6.10149 8.70666 6.16512 8.45332 6.16512 8.15999C6.16512 7.95999 6.07359 7.77332 5.89054 7.59999C5.70749 7.39999 5.61596 7.16666 5.61596 6.89999C5.61596 6.53332 5.78045 6.19999 6.10943 5.89999C6.4384 5.57332 6.86152 5.40999 7.37879 5.40999C7.87626 5.40999 8.30618 5.63332 8.66994 6.07999C9.03371 6.49999 9.21059 7.01332 9.21059 7.61999C9.21059 8.03999 9.13368 8.43999 8.97987 8.81999C8.82606 9.17332 8.61147 9.53332 8.33609 9.89999C8.0607 10.2667 7.70965 10.6133 7.28053 10.94L7.39762 10.3Z" 
            fill="currentColor"
          />
          <path 
            d="M14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0734 12.86 10.2842 12.5533 9.62519 11.94C8.99139 11.3266 8.67449 10.4467 8.67449 9.29999C8.67449 8.07332 9.14875 6.87332 10.0973 5.69999C11.0458 4.49999 12.3308 3.55332 13.9523 2.85999L14.6242 3.79999C13.2434 4.31999 12.193 4.95332 11.473 5.69999C10.753 6.44666 10.393 7.19999 10.393 7.95999C10.393 8.37332 10.5242 8.73999 10.7865 9.05999C11.0488 9.36666 11.3476 9.53332 11.6829 9.55999C12.0181 9.58666 12.3229 9.53999 12.5976 9.41999C12.8723 9.29999 13.0734 9.13332 13.2007 8.91999C13.3281 8.70666 13.3917 8.45332 13.3917 8.15999C13.3917 7.95999 13.3002 7.77332 13.1171 7.59999C12.9341 7.39999 12.8426 7.16666 12.8426 6.89999C12.8426 6.53332 13.0071 6.19999 13.336 5.89999C13.665 5.57332 14.0881 5.40999 14.6054 5.40999C15.1028 5.40999 15.5328 5.63332 15.8965 6.07999C16.2603 6.49999 16.4372 7.01332 16.4372 7.61999C16.4372 8.03999 16.3603 8.43999 16.2065 8.81999C16.0527 9.17332 15.8381 9.53332 15.5627 9.89999C15.2873 10.2667 14.9362 10.6133 14.5071 10.94L14.6242 10.3Z" 
            fill="currentColor"
          />
        </svg>
        <blockquote className="relative z-10">
          <p className="text-gray-800 dark:text-gray-200 text-lg mb-6">
            "Agenlabs helped us build our website from scratch to production in a record 1 month time. They took our requirements and delivered a website we are proud of so much that we are thrilled. I couldn't be any happier. Highly recommended."
          </p>
          <footer className="text-gray-600 dark:text-gray-400 font-medium">
            <p className="font-bold text-gray-900 dark:text-gray-100">Tyler Durden</p>
            <p className="text-sm">Founder at Project Mayhem</p>
          </footer>
        </blockquote>
      </div>
    </div>
  );
};

export default function TemplatesPage() {
  const templates = [
    {
      title: "Foxtrot",
      description: "Foxtrot is a SaaS marketing template that has a modern design with a pinch of class.",
      subtitle: "Built with Next.js and Tailwind CSS, it is perfect for launching your landing page",
      images: [
        "/images/templates/Foxtrot.png",
        "/images/templates/Foxtrot2.png"
      ],
      liveUrl: "https://foxtrot.aceternity.com/",
      purchaseUrl: "https://aceternity.lemonsqueezy.com/checkout/buy/ad25bad9-a669-4c62-ad84-5970ec0c0c12",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX", "React"]
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
              <h1 className="text-4xl font-bold mb-6">Website templates that <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">stand out</span></h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Carefully crafted website templates that are ready to be customized and launched.
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              {templates.map((template) => (
                <TemplateCard
                  key={template.title}
                  title={template.title}
                  description={template.description}
                  subtitle={template.subtitle}
                  images={template.images}
                  liveUrl={template.liveUrl}
                  purchaseUrl={template.purchaseUrl}
                  technologies={template.technologies}
                />
              ))}

              <Testimonial />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6">Want to customize templates? We are here!</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Contact us and we will get back within 24 hours. We mean it. You saw the testimonials, right?
              </p>
              <a 
                href="mailto:youremail@yourgmail.com"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

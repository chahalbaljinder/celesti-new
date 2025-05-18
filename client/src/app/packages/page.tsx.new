"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/24/outline";

const Feature = ({ text }: { text: string }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
        <CheckIcon className="h-4 w-4 text-green-600" />
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-left">{text}</p>
    </div>
  );
};

export default function PackagesPage() {
  const features = [
    "Top Notch Design — We design great looking websites that stand out. We use the latest design trends and techniques to make your website look great.",
    "Development — We build your website using the latest technologies and frameworks. We use the best tools to make sure your website is fast and secure.",
    "Performance Optimized — We focus heavily on performance optimizations. Whether it's Image optimization or website load speed, we have got you covered.",
    "Responsive Design — Your website will look amazing on any device. We make sure your website looks great on mobile, tablet, and desktop.",
    "Search Engine Optimized — We make sure you get found on Google. We use the latest SEO techniques to make sure your website is optimized for search engines.",
    "Contact Forms — We know that you want to get reached out. We make sure you get all the leads you need. We integrate your website with your favorite email marketing service.",
    "Revisions — We make sure you are happy with the website. We provide revisions until you are happy with the website.",
    "Analytics and Tracking — We make sure you know how your website is performing. We integrate your website with Google Analytics and Google Search Console.",
    "Built by experts — We are the people behind websites like Algochurn and TailwindMasterKit. We have been building websites for over 5+ years now and we know what we are doing."
  ];

  const projects = [
    {
      title: "Algochurn",
      description: "Practice the most popular coding questions asked in a technical interview round.",
      subtitle: "Used by 1000+ registered users preparing for technical interviews.",
      images: ["/images/products/algochurn.png", "/images/products/algochurn2.png"],
      liveUrl: "https://algochurn.com/"
    },
    {
      title: "Tailwind Master Kit",
      description: "Get beautiful, responsive, professionally developed Tailwind UI components and build your website quicker",
      subtitle: "Worry less about responsive and beautiful UI, let Tailwind Master Kit handle the complexity.",
      images: ["/images/products/tailwindmasterkit.png", "/images/products/tailwindmasterkit3.png"],
      liveUrl: "https://tailwindmasterkit.com/"
    },
    {
      title: "Creme Digital",
      description: "Commonsense solutions that achieve marketing objectives and reach business goals",
      subtitle: "Since 2015, Creme Digital's solutions have supported brands from virtually every industry",
      images: ["/images/products/cremedigital3.png", "/images/products/cremedigital.png"],
      liveUrl: "https://cremedigital.com/"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-14">
        <section className="w-full py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-5xl font-bold mb-6">$4,995</h1>
                <h2 className="text-2xl font-medium mb-6">Landing Page Development</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  A landing page can make or break your business. We create world-class,
                  professional landing pages that convert and help you achieve your sales targets.
                </p>
                <a 
                  href="mailto:youremail@yourgmail.com"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Buy Package
                </a>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <Image
                  src="/images/products/aceternity.png"
                  alt="Landing Page Example"
                  width={640}
                  height={360}
                  className="rounded-lg shadow-xl w-full"
                />
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-2xl font-bold mb-8">What's included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                {features.map((feature, index) => (
                  <Feature key={index} text={feature} />
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-8">Some of the websites that we have built</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                A look at some of the amazing websites that we've built recently.
              </p>
              
              <div className="space-y-16">
                {projects.map((project, index) => (
                  <div key={project.title} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                      <p className="text-lg mb-3">{project.description}</p>
                      <p className="text-gray-500 mb-6">{project.subtitle}</p>
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Live Preview
                      </a>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                      {project.images.map((image, i) => (
                        <div key={i} className="overflow-hidden rounded-lg shadow-md">
                          <Image 
                            src={image} 
                            alt={`${project.title} screenshot ${i+1}`} 
                            width={540}
                            height={320}
                            className="w-full h-auto"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="w-full py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <Image 
                  src="/images/testimonials/tyler.png" 
                  alt="Tyler Durden" 
                  width={120}
                  height={120}
                  className="rounded-full"
                />
              </div>
              <div className="md:col-span-2">
                <blockquote className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  "Agenlabs helped us build our website from scratch to production in a record 1 month time. They took our requirements and delivered a website we are proud of so much that we are thrilled. I couldn't be any happier. Highly recommended."
                </blockquote>
                <footer>
                  <p className="font-bold">Tyler Durden</p>
                  <p className="text-sm text-gray-500">Founder at Project Mayhem</p>
                </footer>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6">Want a custom website or more features? Talk to us.</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                See the blue chat box and the bottom? Click on it and talk to us. We will get back to you within 24 hours. Or just email us, just talk. :)
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

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
    <div className="flex items-start mb-6 group">      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#FAD4D8]/20 flex items-center justify-center mr-4 group-hover:bg-[#FAD4D8]/30 transition-colors duration-300">
        <CheckIcon className="h-4 w-4 text-[#FAD4D8]" />
      </div>
      <p className="text-gray-700 dark:text-[#E2E8F0] text-left">{text}</p>
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
    <div className="min-h-screen flex flex-col dark:bg-[#0F172A]">
      <Navbar />
      <main className="flex-grow pt-14">
        <section className="w-full py-24 md:py-32 relative dark:bg-[#0F172A]">
          <div className="absolute inset-0 dark:bg-[url('/images/grid-pattern.png')] dark:opacity-5 pointer-events-none"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >                <div className="inline-block mb-4 text-sm font-medium px-3 py-1 rounded-full bg-[#FAD4D8]/10 text-[#FAD4D8]">Premium Package</div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FAD4D8] to-[#CFD1EA]">$7,995</h1>
                <h2 className="text-2xl font-medium mb-6 dark:text-[#CFD1EA]">Luxury Landing Page Development</h2>
                <p className="text-gray-600 dark:text-[#E2E8F0] mb-8 text-lg">
                  An exceptional landing page is the cornerstone of your digital presence. We create sophisticated, 
                  high-converting landing pages that elevate your brand and drive measurable results.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="mailto:contact@celesti.com"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-[#0F172A] bg-[#FAD4D8] hover:bg-[#FAD4D8]/90 transition-colors duration-300 focus:outline-none"
                  >
                    Get Started
                  </a>
                  <a 
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 border border-[#FAD4D8]/30 text-base font-medium rounded-md text-gray-800 dark:text-[#E2E8F0] hover:bg-[#FAD4D8]/10 transition-colors duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                <div className="relative p-3 bg-white dark:bg-[#1E293B] shadow-xl rounded-lg border border-gray-100 dark:border-[#0F172A]/50">                  <div className="absolute -top-3 -left-3 w-20 h-20 bg-[#FAD4D8]/10 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-[#FAD4D8]/10 rounded-full blur-xl"></div>
                  <Image
                    src="/images/products/aceternity.png"
                    alt="Luxury Landing Page Example"
                    width={640}
                    height={360}
                    className="rounded-md shadow-lg w-full relative z-10 border border-gray-100 dark:border-[#0F172A]/50"
                  />                  <div className="absolute bottom-8 right-8 bg-[#1E293B]/80 backdrop-blur-sm border border-[#FAD4D8]/20 px-4 py-2 rounded-md shadow-lg z-20">
                    <span className="text-[#FAD4D8] font-medium">Premium Design</span>
                  </div>
                </div>
              </motion.div>
            </div>
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-20"
            >              <div className="inline-block mb-3 text-sm font-medium px-3 py-1 rounded-full bg-[#FAD4D8]/10 text-[#FAD4D8]">Premium Features</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 dark:text-[#CFD1EA]">What's Included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 p-8 bg-white dark:bg-[#1E293B]/60 rounded-xl shadow-lg border border-gray-100 dark:border-[#0F172A]/30">
                {features.map((feature, index) => (
                  <Feature key={index} text={feature} />
                ))}
              </div>
            </motion.div>
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >              <div className="inline-block mb-3 text-sm font-medium px-3 py-1 rounded-full bg-[#FAD4D8]/10 text-[#FAD4D8]">Our Portfolio</div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 dark:text-[#CFD1EA]">Case Studies</h2>
              <p className="text-gray-600 dark:text-[#E2E8F0] mb-12 text-lg">
                Explore some of our premium digital experiences that have transformed businesses.
              </p>
              
              <div className="space-y-24">
                {projects.map((project, index) => (
                  <div key={project.title} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start group">                    <div>
                      <h3 className="text-2xl font-bold mb-4 dark:text-[#CFD1EA] group-hover:text-[#FAD4D8]/90 dark:group-hover:text-[#FAD4D8] transition-colors duration-300">{project.title}</h3>
                      <p className="text-lg mb-4 dark:text-[#E2E8F0]">{project.description}</p>
                      <p className="text-gray-500 dark:text-[#94A3B8] mb-8">{project.subtitle}</p>
                      <div className="flex space-x-4">
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-md text-[#0F172A] bg-[#FAD4D8] hover:bg-[#FAD4D8]/90 transition-colors duration-300"
                        >
                          Live Preview
                        </a>
                        <a 
                          href="#"
                          className="inline-flex items-center px-5 py-2.5 border border-[#FAD4D8]/30 text-sm font-medium rounded-md text-gray-800 dark:text-[#E2E8F0] hover:bg-[#FAD4D8]/10 transition-colors duration-300"
                        >
                          Case Study
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                      {project.images.map((image, i) => (
                        <div key={i} className="overflow-hidden rounded-lg shadow-lg border border-transparent dark:border-[#FAD4D8]/10 group-hover:shadow-xl transition-shadow duration-500">
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
                  "Celesti helped us build our website from scratch to production in a record 1 month time. They took our requirements and delivered a website we are proud of so much that we are thrilled. I couldn't be any happier. Highly recommended."
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
                href="mailto:contact@celesti.com"
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

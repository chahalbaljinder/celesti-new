import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/sections/Testimonials";
import TestimonialsSecondary from "@/components/sections/TestimonialsSecondary";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TestimonialsPage() {
  const additionalTestimonials = [
    {
      quote: "Working with this team was the best decision we made for our startup. They delivered an exceptional website that has significantly increased our conversion rates.",
      name: "Emma Rodriguez",
      position: "CEO",
      company: "TechStart Solutions"
    },
    {
      quote: "Their attention to detail and commitment to quality is unmatched. Our e-commerce site has never looked or performed better.",
      name: "James Wilson",
      position: "Marketing Director",
      company: "Fashion Forward"
    },
    {
      quote: "They took our complex requirements and turned them into an intuitive and beautiful web application. The user feedback has been overwhelmingly positive.",
      name: "Sarah Chen",
      position: "Product Manager",
      company: "DataViz Pro"
    },
    {
      quote: "Not only did they build us a stunning website, but they also provided valuable insights that helped improve our overall digital strategy.",
      name: "David Park",
      position: "Founder",
      company: "HealthTech Innovations"
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
              <h1 className="text-4xl font-bold mb-6">Client Testimonials</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Don't just take our word for it. Here's what our clients have to say about our work.
              </p>
            </motion.div>
            
            <div className="space-y-24">
              <Testimonials />
              <TestimonialsSecondary />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {additionalTestimonials.map((testimonial, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                  >
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                          <Image
                            src="/placeholder-150.svg"
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="rounded-full"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                        <div className="flex items-center">
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {testimonial.position} at {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="max-w-3xl mx-auto text-center"
              >
                <h2 className="text-2xl font-semibold mb-6">Ready to Join Our Success Stories?</h2>
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md bg-blue-500 px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                >
                  Start Your Project
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

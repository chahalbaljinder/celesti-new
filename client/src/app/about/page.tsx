import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function About() {
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
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h1 className="text-4xl font-bold mb-6">About Us</h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We're a team of passionate designers and developers creating exceptional digital experiences.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We create beautiful websites and applications that rival the most popular services like Google and Facebook. We blend marketing insights with good code to deliver exceptional results for our clients.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Our mission is to help businesses of all sizes establish a strong online presence through modern web applications that not only look great but also perform exceptionally well.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold">Our Approach</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We believe in a collaborative approach, working closely with our clients to understand their goals and bring their vision to life. We stay updated with the latest technologies and best practices to deliver cutting-edge solutions.
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  Every project we undertake is treated with the same level of dedication and attention to detail, regardless of its size or complexity.
                </p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="max-w-3xl mx-auto text-center mt-16"
            >
              <h2 className="text-2xl font-semibold mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Excellence</h3>
                  <p className="text-gray-600 dark:text-gray-400">We strive for excellence in everything we do, from design to code.</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-400">We embrace new technologies and innovative solutions.</p>
                </div>
                <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                  <h3 className="text-xl font-medium mb-2">Integrity</h3>
                  <p className="text-gray-600 dark:text-gray-400">We're honest and transparent in all our client relationships.</p>
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

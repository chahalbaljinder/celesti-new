"use client";

import React from "react";
import NavbarFixed from "@/components/layout/NavbarFixed";
import Footer from "@/components/layout/Footer";
import ModernContactForm from "@/components/sections/ModernContactForm";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      content: "hello@celestisolutions.com",
      link: "mailto:hello@celestisolutions.com",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      content: "+91 98765 43210",
      link: "tel:+919876543210",
      description: "Mon-Fri 10AM-6PM IST"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      content: "Bangalore, Karnataka, India",
      link: "https://maps.google.com",
      description: "Book a meeting at our office"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "WhatsApp",
      content: "+91 98765 43210",
      link: "https://wa.me/919876543210",
      description: "Quick responses via WhatsApp"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex web applications can take 2-6 months. We'll provide a detailed timeline during our consultation."
    },
    {
      question: "Do you work with startups and small businesses?",
      answer: "Absolutely! We specialize in helping startups and SMEs grow through digital solutions. We offer flexible packages and can work within various budget ranges."
    },
    {
      question: "What's included in your AI automation services?",
      answer: "Our AI automation includes workflow optimization, chatbot development, data processing automation, and integration with tools like Zapier, Make, and custom AI solutions."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support packages including regular updates, security monitoring, performance optimization, and technical support."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavbarFixed />
      <main className="flex-grow pt-14">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-white to-[#FAD4D8]/10">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <div className="inline-block mb-4 text-sm font-medium px-4 py-2 rounded-full bg-[#FAD4D8] text-[#0F172A]">
                Let's Build Something Amazing Together
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Transform Your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FAD4D8] to-pink-400">
                  Business?
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Whether you need AI automation, web development, or want to discuss your next big idea, 
                we're here to make it happen. Let's start the conversation.
              </p>
            </motion.div>
            
            {/* Quick Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
              {contactInfo.map((item, index) => (
                <motion.a
                  href={item.link}
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FAD4D8]/30 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#FAD4D8]/20 to-pink-100/20 rounded-lg flex items-center justify-center text-[#FAD4D8] mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-[#FAD4D8] font-medium mb-1">{item.content}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tell Us About Your Project</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you with a detailed proposal within 24 hours.
              </p>
            </motion.div>
            
            <ModernContactForm />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Celesti?</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">Fast Delivery</h3>
                <p className="text-gray-600">
                  We use AI tools and smart workflows to deliver projects faster without compromising quality.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
                <p className="text-gray-600">
                  No hidden costs. We provide detailed quotes upfront with clear project milestones and timelines.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
                <p className="text-gray-600">
                  Get ongoing support and maintenance to ensure your project continues to perform at its best.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Modern Solutions</h3>
                <p className="text-gray-600">
                  We use cutting-edge technologies and best practices to build future-ready applications.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-4">💡</div>
                <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
                <p className="text-gray-600">
                  We're not just service providers - we're your innovation partners building tomorrow's solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#FAD4D8]/20 to-pink-100/20 p-8 rounded-xl border-2 border-[#FAD4D8]/30"
              >
                <div className="text-4xl mb-4">🇮🇳</div>
                <h3 className="text-xl font-semibold mb-3">Local + Global</h3>
                <p className="text-gray-600">
                  Based in India with global standards, we understand local needs while delivering world-class solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Got questions? We've got answers to help you get started.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-xl border border-gray-200"
                >
                  <h3 className="text-lg font-semibold mb-3 text-gray-800">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contact Section */}
        <section className="w-full py-16 bg-gradient-to-br from-[#FAD4D8]/20 to-pink-100/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#FAD4D8]/30">
                <div className="text-4xl mb-4">🚨</div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Need Urgent Help?</h2>
                <p className="text-gray-600 mb-6">
                  If you have an urgent technical issue or need immediate assistance with an existing project, 
                  reach out to us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688"/>
                    </svg>
                    WhatsApp Now
                  </Link>
                  <Link
                    href="tel:+919876543210"
                    className="inline-flex items-center px-6 py-3 bg-[#FAD4D8] text-[#0F172A] font-semibold rounded-lg hover:bg-[#FAD4D8]/90 transition-colors gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Now
                  </Link>
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

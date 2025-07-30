"use client";

import React, { useState } from "react";
import NavbarFixed from "@/components/layout/NavbarFixed";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null);
  
  const serviceCategories = [
    {
      id: "client-services",
      title: "🔧 Client Services",
      subtitle: "Cashflow & Trust",
      description: "We help startups and SMEs with comprehensive digital solutions using smart AI tools and curated networks.",
      pricing: "₹50,000 - ₹1.5L+",
      icon: "🔧",
      color: "from-[#FAD4D8]/20 to-pink-100/20",
      borderColor: "border-[#FAD4D8]/30",
      services: [
        {
          name: "Web Development",
          description: "Modern, responsive websites built with Next.js, React, and cutting-edge technologies",
          features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
          price: "₹50K - ₹3L"
        },
        {
          name: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android",
          features: ["Cross-Platform", "Native Performance", "App Store Ready", "Push Notifications"],
          price: "₹1L - ₹5L"
        },
        {
          name: "AI Automations",
          description: "Smart workflow automation using Zapier, Make, GPT, and custom AI solutions",
          features: ["Workflow Automation", "AI Integration", "Data Processing", "Custom Bots"],
          price: "₹25K - ₹2L"
        },
        {
          name: "UI/UX Design",
          description: "Beautiful, user-centered design that converts visitors into customers",
          features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
          price: "₹30K - ₹1.5L"
        },
        {
          name: "Branding & Identity",
          description: "Complete brand identity design including logos, colors, and guidelines",
          features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Brand Strategy"],
          price: "₹20K - ₹1L"
        },
        {
          name: "System Integration",
          description: "Connect different systems and platforms for seamless operations",
          features: ["API Integration", "Database Design", "Third-party Services", "Custom Solutions"],
          price: "₹40K - ₹2L"
        }
      ]
    },
    {
      id: "startup-studio",
      title: "🧪 Startup Studio",
      subtitle: "Internal R&D & Product Building",
      description: "We allocate dedicated resources to explore original ideas, build internal tools, and create innovative solutions.",
      pricing: "Internal Investment",
      icon: "🧪",
      color: "from-blue-50 to-purple-50",
      borderColor: "border-blue-200/50",
      services: [
        {
          name: "Product Ideation",
          description: "Explore and validate original product ideas with market research and prototyping",
          features: ["Market Research", "Idea Validation", "Rapid Prototyping", "User Testing"],
          price: "R&D Investment"
        },
        {
          name: "AI System Development",
          description: "Build intelligent systems and automation frameworks for various industries",
          features: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
          price: "Internal Development"
        },
        {
          name: "Internal Tools",
          description: "Create proprietary tools and platforms that enhance our service delivery",
          features: ["Productivity Tools", "Automation Platforms", "Analytics Dashboards", "Management Systems"],
          price: "Strategic Investment"
        },
        {
          name: "Innovation Lab",
          description: "Experiment with emerging technologies and build proof-of-concepts",
          features: ["Emerging Tech", "POC Development", "Technology Research", "Innovation Strategy"],
          price: "Research Budget"
        }
      ]
    },
    {
      id: "future-revenue",
      title: "📈 Future Revenue Streams",
      subtitle: "Scalable & Passive",
      description: "Smart monetization strategies that position Celesti as a product-first company with scalable solutions.",
      pricing: "Variable Pricing",
      icon: "📈",
      color: "from-green-50 to-emerald-50",
      borderColor: "border-green-200/50",
      services: [
        {
          name: "AI Templates & Kits",
          description: "Ready-to-use AI templates, ChatGPT prompts, and automation kits",
          features: ["ChatGPT Prompts", "Notion Templates", "Automation Workflows", "Digital Products"],
          price: "₹500 - ₹5K"
        },
        {
          name: "SaaS Solutions",
          description: "AI-powered SaaS for business niches like clinics, law firms, and logistics",
          features: ["Industry-Specific", "AI-Powered", "Subscription Model", "Scalable Architecture"],
          price: "₹1K - ₹10K/month"
        },
        {
          name: "APIs & Developer Tools",
          description: "APIs and development tools for other businesses and developers",
          features: ["RESTful APIs", "SDKs", "Documentation", "Developer Support"],
          price: "Usage-based"
        },
        {
          name: "Community & Education",
          description: "Incubator-style community and mentorship platform for entrepreneurs",
          features: ["Mentorship Programs", "Educational Content", "Community Platform", "Networking Events"],
          price: "₹2K - ₹20K/member"
        }
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project strategy.",
      icon: "🔍"
    },
    {
      step: "02", 
      title: "Design & Planning",
      description: "Our team creates wireframes, mockups, and detailed project plans with clear milestones and timelines.",
      icon: "🎨"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using cutting-edge technologies with rigorous testing at every stage.",
      icon: "⚙️"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "We deploy your project and provide ongoing support, maintenance, and optimization services.",
      icon: "🚀"
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
                Our Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Three Synergistic{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FAD4D8] to-pink-400">
                  Business Tracks
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're growing across three interconnected business models that create unique value for our clients and fuel innovation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="w-full py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="space-y-16 max-w-7xl mx-auto">
              {serviceCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-r ${category.color} p-8 rounded-2xl border-2 ${category.borderColor}`}
                >
                  {/* Category Header */}
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{category.icon}</div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-800">{category.title}</h2>
                        <p className="text-lg text-gray-600 font-medium">{category.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4 max-w-3xl">{category.description}</p>
                    <div className="inline-block px-4 py-2 bg-white/50 rounded-full">
                      <span className="font-semibold text-gray-800">Pricing: {category.pricing}</span>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={`${category.id}-${serviceIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                        onClick={() => setActiveService(activeService === `${category.id}-${serviceIndex}` ? null : `${category.id}-${serviceIndex}`)}
                      >
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.name}</h3>
                        <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                        
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                {feature}
                              </span>
                            ))}
                            {service.features.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                +{service.features.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-[#FAD4D8]">{service.price}</span>
                          <motion.div
                            animate={{ rotate: activeService === `${category.id}-${serviceIndex}` ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </motion.div>
                        </div>

                        <AnimatePresence>
                          {activeService === `${category.id}-${serviceIndex}` && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-gray-200"
                            >
                              <div className="space-y-2">
                                <h4 className="font-medium text-gray-800">All Features:</h4>
                                <ul className="space-y-1">
                                  {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                      </svg>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Process</h2>
              <p className="text-lg text-gray-600">
                We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#FAD4D8] to-pink-300 rounded-full flex items-center justify-center text-2xl font-bold text-[#0F172A] mx-auto mb-4 shadow-lg">
                      {step.step}
                    </div>
                    <div className="text-4xl mb-4">{step.icon}</div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-20 w-full h-0.5 bg-gradient-to-r from-[#FAD4D8] to-pink-300"></div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Celesti Solutions?</h2>
              <p className="text-lg text-gray-600">
                We're not your typical service provider. Here's what makes us different.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: "🚀",
                  title: "AI-Powered Efficiency",
                  description: "We leverage AI tools to deliver projects faster and more efficiently than traditional agencies."
                },
                {
                  icon: "💡",
                  title: "Innovation-First Mindset",
                  description: "We're not just building what exists - we're creating tomorrow's solutions today."
                },
                {
                  icon: "🤝",
                  title: "Transparent Partnership",
                  description: "No hidden costs, clear communication, and honest timelines from day one."
                },
                {
                  icon: "⚡",
                  title: "Rapid Delivery",
                  description: "Our streamlined processes and smart tools enable faster project completion."
                },
                {
                  icon: "🎯",
                  title: "Results-Focused",
                  description: "We measure success by your business outcomes, not just project completion."
                },
                {
                  icon: "🔧",
                  title: "Full-Stack Expertise",
                  description: "From strategy to deployment, we handle every aspect of your digital transformation."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-br from-[#FAD4D8]/20 to-pink-100/20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and find the perfect solution for your business needs. 
                Get a free consultation and detailed proposal.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#FAD4D8] text-[#0F172A] font-semibold rounded-lg hover:bg-[#FAD4D8]/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  🚀 Start Your Project
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center px-8 py-4 border border-[#FAD4D8] text-gray-800 font-semibold rounded-lg hover:bg-[#FAD4D8]/10 transition-all duration-300"
                >
                  📁 View Our Work
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#FAD4D8] mb-2">50+</div>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FAD4D8] mb-2">24h</div>
                  <p className="text-gray-600">Response Time</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#FAD4D8] mb-2">100%</div>
                  <p className="text-gray-600">Client Satisfaction</p>
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

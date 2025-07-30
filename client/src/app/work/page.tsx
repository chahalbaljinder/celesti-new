"use client";

import React, { useState, useEffect } from "react";
import NavbarFixed from "@/components/layout/NavbarFixed";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface ProjectFeature {
  title: string;
  description: string;
  icon: string;
}

interface TechStack {
  name: string;
  color: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: string;
  images: string[];
  features: ProjectFeature[];
  techStack: TechStack[];
  liveUrl: string;
  status: string;
}

const ProjectShowcase = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide images
  useEffect(() => {
    if (!isPaused && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, project.images.length]);

  // Auto-slide features
  useEffect(() => {
    if (project.features.length > 1) {
      const interval = setInterval(() => {
        setCurrentFeatureIndex((prev) => (prev + 1) % project.features.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [project.features.length]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 bg-white rounded-xl shadow-lg overflow-hidden"
    >
      {/* Project Header */}
      <div className="p-6 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-[#FAD4D8] text-[#0F172A] text-sm font-medium rounded-full">
                {project.category}
              </span>
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                project.status === 'Live' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {project.status}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{project.title}</h2>
            <p className="text-base text-gray-600 mb-3 max-w-2xl">{project.description}</p>
          </div>
          
          {project.status === 'Live' && (
            <div className="flex gap-3">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2 bg-[#FAD4D8] text-[#0F172A] font-medium rounded-lg hover:bg-[#FAD4D8]/90 transition-all duration-300 hover:scale-105 shadow-md text-sm"
              >
                🚀 Live Preview
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
        
        {/* Left Column - Image Slider */}
        <div className="space-y-4">
          {/* Main Image Slider */}
          <div 
            className="relative rounded-lg overflow-hidden shadow-md"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="aspect-[16/10] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    fill
                    className="object-contain bg-gray-50"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Image Navigation */}
              {project.images.length > 1 && (
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Tech Stack - Sliding Animation */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-base font-semibold mb-3 text-gray-800">Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, index) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`px-2 py-1 rounded-full text-xs font-medium ${tech.color}`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Features & Details */}
        <div className="space-y-4">
          {/* Project Description */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-base font-semibold mb-2 text-gray-800">About This Project</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{project.longDescription}</p>
          </div>

          {/* Features Slider */}
          <div className="bg-gradient-to-br from-[#FAD4D8]/10 to-[#FAD4D8]/20 rounded-lg p-4">
            <h4 className="text-base font-semibold mb-3 text-gray-800">Key Features</h4>
            <div className="relative min-h-[100px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeatureIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{project.features[currentFeatureIndex]?.icon}</span>
                    <h5 className="text-base font-semibold text-gray-800">
                      {project.features[currentFeatureIndex]?.title}
                    </h5>
                  </div>
                  <p className="text-sm text-gray-600 pl-8">
                    {project.features[currentFeatureIndex]?.description}
                  </p>
                </motion.div>
              </AnimatePresence>
              
              {/* Feature Navigation */}
              {project.features.length > 1 && (
                <div className="flex gap-1 mt-3 pl-8">
                  {project.features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFeatureIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentFeatureIndex 
                          ? 'bg-[#FAD4D8] scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to feature ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function WorkPage() {
  const projects: Project[] = [
    {
      id: "zinikus",
      title: "Zinikus",
      description: "Modular robotics platform supporting assembly of various robotic bodies for delivery, reception, cleaning, and advertisements with comprehensive customization services.",
      longDescription: "Based on personalized needs, our Platform is designed to support the assembly of various robotic bodies, including delivery, reception, cleaning, and advertisements, catering to diverse customer requirements. ZINIKUS operates a professional production facility, an advanced R&D center, and a dedicated maintenance team, offering comprehensive modular services across three key domains: robotic customization, system integration, and long-term support & upgrades.",
      category: "Robotics Platform",
      images: ["/zinikus.png"],
      features: [
        {
          title: "Modular Robotics",
          description: "Customizable robotic bodies for delivery, reception, cleaning, and advertisement applications tailored to specific needs.",
          icon: "🤖"
        },
        {
          title: "System Integration",
          description: "Advanced R&D center providing seamless integration of robotic systems into existing business operations.",
          icon: "⚙️"
        },
        {
          title: "Long-term Support",
          description: "Professional production facility with dedicated maintenance team offering ongoing support and upgrades.",
          icon: "🔧"
        }
      ],
      techStack: [
        { name: "Robotics", color: "bg-purple-100 text-purple-800" },
        { name: "IoT", color: "bg-blue-100 text-blue-800" },
        { name: "AI/ML", color: "bg-green-100 text-green-800" },
        { name: "Hardware Integration", color: "bg-orange-100 text-orange-800" }
      ],
      liveUrl: "https://www.zinikus.com/",
      status: "Live"
    },
    {
      id: "martialartsguru",
      title: "Martial Arts Guru",
      description: "Comprehensive martial arts learning platform featuring expert tutorials, training programs, and community features.",
      longDescription: "A complete martial arts learning ecosystem that connects students with expert instructors worldwide. Features include interactive tutorials, personalized training programs, progress tracking, and a vibrant community of martial arts enthusiasts.",
      category: "E-Learning Platform",
      images: ["/martialartsguru.png"],
      features: [
        {
          title: "Expert Tutorials",
          description: "High-quality video lessons from certified martial arts masters covering various disciplines and skill levels.",
          icon: "🥋"
        },
        {
          title: "Progress Tracking",
          description: "Advanced analytics to monitor your learning journey and skill development over time.",
          icon: "📊"
        },
        {
          title: "Community Features",
          description: "Connect with fellow practitioners, share experiences, and participate in virtual competitions.",
          icon: "👥"
        }
      ],
      techStack: [
        { name: "React", color: "bg-blue-100 text-blue-800" },
        { name: "Node.js", color: "bg-green-100 text-green-800" },
        { name: "MongoDB", color: "bg-green-100 text-green-800" },
        { name: "WebRTC", color: "bg-purple-100 text-purple-800" }
      ],
      liveUrl: "https://martialarts.guru/",
      status: "Live"
    },
    {
      id: "fuelapp",
      title: "Fuel App",
      description: "Complete solution for managing multiple petrol pumps across different locations using a single unified platform.",
      longDescription: "A comprehensive fuel station management system that enables operators to monitor and control multiple petrol pump locations from a centralized dashboard. Features include inventory management, sales tracking, staff monitoring, and real-time analytics across all locations.",
      category: "Management Platform",
      images: ["/fuelapp.png"],
      features: [
        {
          title: "Multi-Location Management",
          description: "Centralized control panel to manage multiple petrol pump locations from a single dashboard.",
          icon: "⛽"
        },
        {
          title: "Inventory Tracking",
          description: "Real-time fuel inventory monitoring with automated alerts for low stock levels across all locations.",
          icon: "�"
        },
        {
          title: "Sales Analytics",
          description: "Comprehensive sales reporting and analytics to optimize operations and maximize profitability.",
          icon: "�"
        }
      ],
      techStack: [
        { name: "React", color: "bg-blue-100 text-blue-800" },
        { name: "Node.js", color: "bg-green-100 text-green-800" },
        { name: "PostgreSQL", color: "bg-blue-100 text-blue-800" },
        { name: "Real-time API", color: "bg-purple-100 text-purple-800" }
      ],
      liveUrl: "https://fuelapp.ashishnigam.com/",
      status: "Live"
    },
    {
      id: "fleetrr",
      title: "Fleetrr Online Services",
      description: "Quick e-commerce platform specializing in stationery and books with fast delivery and competitive pricing.",
      longDescription: "A streamlined e-commerce solution focused on providing quick access to stationery supplies and books. Designed for efficiency with features like rapid checkout, inventory management, and same-day delivery options for educational and office supplies.",
      category: "E-Commerce Platform",
      images: ["/fleetrr.png"],
      features: [
        {
          title: "Quick Checkout",
          description: "Streamlined purchasing process designed for fast and efficient ordering of stationery and books.",
          icon: "�"
        },
        {
          title: "Inventory Management",
          description: "Real-time stock tracking and automated reordering system for consistent product availability.",
          icon: "�"
        },
        {
          title: "Fast Delivery",
          description: "Same-day and next-day delivery options for urgent stationery and educational material needs.",
          icon: "�"
        }
      ],
      techStack: [
        { name: "Vue.js", color: "bg-green-100 text-green-800" },
        { name: "Laravel", color: "bg-red-100 text-red-800" },
        { name: "MySQL", color: "bg-blue-100 text-blue-800" },
        { name: "Payment Gateway", color: "bg-yellow-100 text-yellow-800" }
      ],
      liveUrl: "https://www.fleetrr.in/",
      status: "Live"
    },
    {
      id: "musicroom",
      title: "Music Room App",
      description: "Platform for booking music rehearsal rooms and practice spaces with flexible scheduling and equipment management.",
      longDescription: "A comprehensive booking system for music rehearsal spaces that allows musicians and bands to reserve practice rooms, recording studios, and performance spaces. Features include equipment management, scheduling, payment processing, and space availability tracking.",
      category: "Booking Platform",
      images: ["/music_room.png"],
      features: [
        {
          title: "Room Booking System",
          description: "Easy-to-use booking interface for reserving music rehearsal rooms and practice spaces by hour or day.",
          icon: "🎵"
        },
        {
          title: "Equipment Management",
          description: "Track and reserve musical equipment, amplifiers, and recording gear available in each room.",
          icon: "🎸"
        },
        {
          title: "Flexible Scheduling",
          description: "Advanced scheduling system with recurring bookings, group reservations, and real-time availability.",
          icon: "📅"
        }
      ],
      techStack: [
        { name: "React Native", color: "bg-blue-100 text-blue-800" },
        { name: "Node.js", color: "bg-green-100 text-green-800" },
        { name: "MongoDB", color: "bg-green-100 text-green-800" },
        { name: "Booking API", color: "bg-purple-100 text-purple-800" }
      ],
      liveUrl: "#",
      status: "In Development"
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
                Our Portfolio
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Crafting Digital{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FAD4D8] to-pink-400">
                  Experiences
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore our collection of innovative projects, each designed with precision and built with cutting-edge technology.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full py-6">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto space-y-8">
              {projects.map((project) => (
                <ProjectShowcase key={project.id} project={project} />
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
                Ready to Start Your Project?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's collaborate and create something amazing together. Get in touch to discuss your vision and bring it to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#FAD4D8] text-[#0F172A] font-semibold rounded-lg hover:bg-[#FAD4D8]/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  💬 Let's Talk
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-[#FAD4D8] text-gray-800 font-semibold rounded-lg hover:bg-[#FAD4D8]/10 transition-all duration-300"
                >
                  🔍 View Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

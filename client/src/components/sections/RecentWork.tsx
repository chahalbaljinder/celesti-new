"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface WorkItemProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const WorkItem = ({ title, description, imageUrl, link }: WorkItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col gap-4"
    >
      <div className="overflow-hidden rounded-lg">
        <div className="aspect-[16/9] w-full relative">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">{description}</p>
        <Link
          href={link}
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
        >
          View Project
        </Link>
      </div>
    </motion.div>
  );
};

const RecentWork = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const projects = [
    {
      title: "Zinikus",
      description: "Modular robotics platform supporting assembly of various robotic bodies for delivery, reception, cleaning, and advertisements with comprehensive customization services.",
      imageUrl: "/zinikus.png",
      link: "https://www.zinikus.com/"
    },
    {
      title: "Martial Arts Guru",
      description: "Comprehensive martial arts learning platform featuring expert tutorials, training programs, and community features.",
      imageUrl: "/martialartsguru.png",
      link: "https://martialarts.guru/"
    },
    {
      title: "Fuel App",
      description: "Complete solution for managing multiple petrol pumps across different locations using a single unified platform.",
      imageUrl: "/fuelapp.png",
      link: "https://fuelapp.ashishnigam.com/"
    },
    {
      title: "Fleetrr Online Services",
      description: "Quick e-commerce platform specializing in stationery and books with fast delivery and competitive pricing.",
      imageUrl: "/fleetrr.png",
      link: "https://www.fleetrr.in/"
    },
    {
      title: "Music Room App",
      description: "Platform for booking music rehearsal rooms and practice spaces with flexible scheduling and equipment management.",
      imageUrl: "/music_room.png",
      link: "#"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused, projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="w-full py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 text-center mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recent Work</h2>
          <p className="text-gray-500 md:text-xl/relaxed">
            A look at some of the exciting projects that we&apos;ve recently worked on.
          </p>
        </motion.div>
        
        {/* Auto-Sliding Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slider Container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                {/* Project Image */}
                <div className="aspect-[16/9] w-full relative bg-gray-100">
                  <Image
                    src={projects[currentSlide].imageUrl}
                    alt={projects[currentSlide].title}
                    fill
                    className="object-contain"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                      {projects[currentSlide].title}
                    </h3>
                    <p className="text-gray-200 mb-4 md:text-lg max-w-2xl">
                      {projects[currentSlide].description}
                    </p>
                    <Link
                      href={projects[currentSlide].link}
                      className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 py-2 text-sm font-medium text-gray-900 shadow transition-all hover:bg-gray-100 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:pointer-events-none disabled:opacity-50"
                    >
                      View Project
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-[#FAD4D8] scale-110' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isPaused ? 'bg-gray-400' : 'bg-green-500 animate-pulse'}`} />
              <span>{isPaused ? 'Paused' : 'Auto-playing'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;

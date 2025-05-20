"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // Handle URL hash for direct linking to sections
  useEffect(() => {
    // Check if there's a hash in the URL
    if (typeof window !== 'undefined' && window.location.hash) {
      const sectionId = window.location.hash.substring(1); // Remove the # character
      scrollToSection(sectionId);
    }
  }, [pathname]); // Rerun when pathname changes
  
  // Function to scroll to a section with better positioning
  const scrollToSection = (sectionId: string) => {
    // Add a small delay to ensure the DOM is fully loaded
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Get the height of the navbar (14 units in Tailwind = 56px)
        const navbarHeight = 56;
        
        // Get element's position relative to the viewport
        const elementPosition = element.getBoundingClientRect().top;
        
        // Get the current scroll position
        const offsetPosition = elementPosition + window.scrollY - navbarHeight;
        
        // Scroll to the element with an offset for the navbar
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.log(`Element with id '${sectionId}' not found`);
      }
    }, 100);
  };
  
  // Function to handle services link click
  const handleServicesClick = (e: React.MouseEvent) => {
    // Only prevent default and scroll to section if on home page
    if (pathname === '/') {
      e.preventDefault();
      scrollToSection('services');
      setMobileMenuOpen(false);
      console.log('Scrolling to services section');
    } else {
      // If not on home page, the regular link navigation will work
      console.log('Navigating to services page');
    }
  };
    return (
    <header className="w-full px-4 lg:px-6 h-14 flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#0F172A] backdrop-blur-sm border-b border-gray-100 dark:border-[#1E293B]">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="h-16 w-auto">
            <Image 
              src="/Celestial.png" 
              alt="Celesti Logo" 
              width={96} 
              height={96} 
              className="h-16 w-auto"
              priority
            />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/work" className="text-sm font-medium hover:text-[#FAD4D8] transition-colors duration-300">
            Work
          </Link>
          
          <Link 
            href={pathname === '/' ? '#services' : '/services'} 
            className="text-sm font-medium hover:text-[#FAD4D8] transition-colors duration-300"
            onClick={handleServicesClick}
            aria-current={pathname === '/services' ? 'page' : undefined}
          >
            Services
          </Link>
          
          <Link href="/packages" className="text-sm font-medium hover:text-[#FAD4D8] transition-colors duration-300">
            Packages
          </Link>
          
          <Link href="/templates" className="text-sm font-medium hover:text-[#FAD4D8] transition-colors duration-300">
            Templates
          </Link>
          
          <Link href="/blog" className="text-sm font-medium hover:text-[#FAD4D8] transition-colors duration-300">
            Blog
          </Link>
        </nav>
        
        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#FAD4D8] px-4 py-2 text-sm font-medium text-[#0F172A] shadow transition-colors hover:bg-[#FAD4D8]/90 hover:text-[#0F172A] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FAD4D8] disabled:pointer-events-none disabled:opacity-50">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-black dark:text-[#CFD1EA]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-14 left-0 right-0 bg-white dark:bg-[#0F172A] shadow-lg p-4 md:hidden border-t border-gray-100 dark:border-[#1E293B]"
        >
          <nav className="flex flex-col gap-4">
            <Link 
              href="/work" 
              className="text-sm font-medium hover:text-[#FAD4D8] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </Link>
            
            <Link 
              href={pathname === '/' ? '#services' : '/services'}
              className="text-sm font-medium hover:text-[#FAD4D8] transition-colors duration-300"
              onClick={handleServicesClick}
              aria-current={pathname === '/services' ? 'page' : undefined}
            >
              Services
            </Link>
            
            <Link 
              href="/packages" 
              className="text-sm font-medium hover:text-[#FAD4D8] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Packages
            </Link>
            
            <Link 
              href="/templates" 
              className="text-sm font-medium hover:text-[#FAD4D8] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Templates
            </Link>
            
            <Link 
              href="/blog" 
              className="text-sm font-medium hover:text-[#FAD4D8] transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            
            <Link 
              href="/contact"
              className="inline-flex h-9 w-full items-center justify-center rounded-md bg-[#FAD4D8] px-4 py-2 text-sm font-medium text-[#0F172A] shadow transition-colors hover:bg-[#FAD4D8]/90 hover:text-[#0F172A] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FAD4D8] disabled:pointer-events-none disabled:opacity-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;

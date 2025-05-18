"use client";
import React from "react";
import NavbarFixed from "@/components/layout/NavbarFixed";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import RecentWork from "@/components/sections/RecentWork";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavbarFixed />
      <main className="flex-grow pt-14">
        <Hero />
        <ServicesSection />
        <Testimonials />
        <RecentWork />
      </main>
      <Footer />
    </div>
  );
}

"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ 
  title, 
  excerpt, 
  slug,
  imageSrc
}: { 
  title: string; 
  excerpt: string;
  slug: string;
  imageSrc: string;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 bg-white dark:bg-gray-800">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 line-clamp-2">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 line-clamp-3">{excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default function BlogPage() {
  const blogPosts = [
    {
      title: "How to Effectively Use a Website to Increase Revenue (Updated 2024)",
      slug: "how-to-effectively-use-a-website",
      excerpt: "Creating a website is a great way to increase revenue for your business. Here are some tips to help you make the most of your website and increase your revenue.",
      imageSrc: "/images/blog/blog1.png"
    },
    {
      title: "How To Get The Most Out Of Your Web Development Agency",
      slug: "how-to-get-the-most-out-of-web-dev-agency",
      excerpt: "As a business owner, having an effective web presence is essential for success in today's digital world. Investing in a web development agency to help build and maintain your website can be a great way to ensure your online presence is professional and effective.",
      imageSrc: "/images/blog/blog2.png"
    },
    {
      title: "Landing Page Examples That Convert Well for Business Owners",
      slug: "landing-page-examples",
      excerpt: "In this blog post, we will discuss the key elements of a good landing page, provide examples of high-converting landing pages, and offer tips for creating a high-converting landing page.",
      imageSrc: "/images/blog/blog3.png"
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
              <h1 className="text-4xl font-bold mb-6">Everything you need to know about <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">web apps</span></h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We write about everything from design to deployment to get your website shipped and ready to go!
              </p>
            </motion.div>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                  <BlogCard
                    key={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    slug={post.slug}
                    imageSrc={post.imageSrc}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

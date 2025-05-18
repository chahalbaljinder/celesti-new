"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{description}</p>
        <Link
          href={link}
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        >
          View Project
        </Link>
      </div>
    </motion.div>
  );
};

const RecentWork = () => {
  const projects = [
    {      title: "Algochurn",
      description: "Platform for learning coding interviews using algorithms and data structures in a structured format.",
      imageUrl: "/placeholder-640x360.svg",
      link: "#"
    },
    {
      title: "Tailwind Master Kit",
      description: "A beautiful collection of Tailwind components crafted for your next project.",
      imageUrl: "/placeholder-640x360.svg",
      link: "#"
    },
    {      title: "Creme Digital",
      description: "Componentized solutions that achieve uniformity and consistency for enterprise websites.",
      imageUrl: "/placeholder-640x360.svg",
      link: "#"
    },
    {
      title: "Invoker Labs",
      description: "Pioneering digital Web3 automation with a vast roster of products and services.",
      imageUrl: "/placeholder-640x360.svg",
      link: "#"
    }
  ];

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
          <p className="text-gray-500 md:text-xl/relaxed dark:text-gray-400">
            A look at some of the exciting projects that we've recently worked on.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, i) => (
            <WorkItem
              key={i}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;

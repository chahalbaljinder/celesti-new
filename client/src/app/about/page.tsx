'use client';
import React from "react";
import NavbarFixed from "@/components/layout/NavbarFixed";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
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
                What is Celesti Solutions, Really?
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                We&apos;re Not Just Another{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FAD4D8] to-pink-400">
                  Tech Agency
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Celesti Solutions is a modern startup studio — a creative lab where AI tools and smart systems are built from scratch, 
                real-world problems are solved with automation, and service work funds bigger dreams.
              </p>
            </motion.div>
          </div>
        </section>

        {/* What We Are Section */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                We&apos;re Building a Future Where Services, R&D, and Entrepreneurship Co-exist
              </h2>
              <p className="text-lg text-gray-600 italic">
                &quot;Yeah, we&apos;ll help you automate your business — but we&apos;re also building the next wave of AI innovation behind the scenes.&quot;
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#FAD4D8]/10 to-pink-100/10 p-8 rounded-xl border border-[#FAD4D8]/20"
              >
                <div className="text-4xl mb-4">🛠</div>
                <h3 className="text-xl font-semibold mb-3">AI Tools & Smart Systems</h3>
                <p className="text-gray-600">
                  We build AI tools and smart systems from scratch, creating innovative solutions that make work smoother and life easier.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200/50"
              >
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-semibold mb-3">Real-World Problem Solving</h3>
                <p className="text-gray-600">
                  We solve annoying and repetitive problems using practical, no-BS automation and AI workflows without overcomplicating it.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200/50"
              >
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold mb-3">Strategic Service Work</h3>
                <p className="text-gray-600">
                  Our service work funds bigger dreams, creating a sustainable foundation for innovation and long-term growth.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-blue-100 text-blue-800">
                  🧠 Our Mission
                </div>
                <h2 className="text-3xl font-bold">To make AI useful, simple, and accessible</h2>
                <p className="text-lg text-gray-600">
                  Not buzzwords, not hype. We&apos;re helping people and businesses save time, increase efficiency, 
                  and solve annoying and repetitive problems.
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <p className="text-gray-700 italic">
                    &quot;We use AI to make work smoother and life easier — from automation to smart tools, without overcomplicating it.&quot;
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FAD4D8] rounded-full"></div>
                    <span className="text-gray-600">Save time through intelligent automation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FAD4D8] rounded-full"></div>
                    <span className="text-gray-600">Increase efficiency with smart workflows</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FAD4D8] rounded-full"></div>
                    <span className="text-gray-600">Solve repetitive problems permanently</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="inline-block text-sm font-medium px-4 py-2 rounded-full bg-purple-100 text-purple-800">
                  🌌 Our Vision
                </div>
                <h2 className="text-3xl font-bold">India&apos;s Most Creative & Agile AI Startup Studio</h2>
                <p className="text-lg text-gray-600">
                  Not just a service provider. Not just a product company. But a hybrid venture lab that incubates bold ideas, 
                  builds internal IP, and helps businesses run smarter.
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <p className="text-gray-700 italic">
                    &quot;We&apos;re building the future — not just for ourselves, but for businesses that need a smarter edge.&quot;
                  </p>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-600">Incubate bold, transformative ideas</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-600">Build valuable internal IP</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-600">Scale globally, starting from India</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Business Model */}
        <section className="w-full py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                💼 How Celesti Makes Money
              </h2>
              <p className="text-lg text-gray-600">
                We&apos;re growing across three synergistic business tracks
              </p>
            </motion.div>

            <div className="space-y-12 max-w-6xl mx-auto">
              {/* Track 1 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#FAD4D8]/10 to-pink-100/10 p-8 rounded-xl border border-[#FAD4D8]/20"
              >
                <div className="flex items-start gap-6">
                  <div className="text-4xl">🔧</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Client Services (Cashflow & Trust)</h3>
                    <p className="text-gray-600 mb-4">
                      We help startups and SMEs with web & mobile development, AI automations (Zapier, Make, GPT, etc.), 
                      branding, UI/UX, and system design. Using smart AI tools and curated freelancer networks, 
                      we deliver fast and well.
                    </p>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800">Typical Project Range: ₹50,000 to ₹1.5L+</p>
                      <p className="text-sm text-gray-600 mt-1">This keeps our engine running while our studio builds IP and assets.</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Track 2 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200/50"
              >
                <div className="flex items-start gap-6">
                  <div className="text-4xl">🧪</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Startup Studio Model (Internal R&D)</h3>
                    <p className="text-gray-600 mb-4">
                      We allocate dedicated time and resources to explore original product ideas, build internal tools or AI systems, 
                      and experiment, prototype, test, and validate.
                    </p>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <p className="font-semibold text-gray-800 mb-2">This is where long-term value and growth come from:</p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Client-facing chatbot builders</li>
                        <li>• Smart lead management tools</li>
                        <li>• Internal automation frameworks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Track 3 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200/50"
              >
                <div className="flex items-start gap-6">
                  <div className="text-4xl">📈</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Future Revenue Streams (Scalable & Passive)</h3>
                    <p className="text-gray-600 mb-4">
                      We&apos;re laying the groundwork for smart monetization that allows us to scale beyond just services 
                      and position Celesti as a product-first company.
                    </p>
                    <div className="bg-white/50 p-4 rounded-lg">
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• AI templates (ChatGPT prompts, Notion dashboards, automation kits)</li>
                        <li>• AI-powered SaaS for business niches (clinic systems, law, logistics)</li>
                        <li>• APIs and developer tools</li>
                        <li>• Incubator-style community or mentorship platform</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why We Stand Out */}
        <section className="w-full py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                🎯 Why Celesti Stands Out
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-3xl mb-4">🔬</div>
                <h3 className="text-xl font-semibold mb-3">Hybrid Innovation</h3>
                <p className="text-gray-600">
                  We build both services and startups under one roof, creating unique synergies.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-3">AI-First Approach</h3>
                <p className="text-gray-600">
                  We leverage AI to do more, faster, better — not as a buzzword, but as a core capability.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Smart Outsourcing</h3>
                <p className="text-gray-600">
                  We outsource smartly and avoid overhiring early, maintaining lean operations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-3xl mb-4">🇮🇳</div>
                <h3 className="text-xl font-semibold mb-3">India-First, Global-Ready</h3>
                <p className="text-gray-600">
                  We solve for India while staying globally relevant, understanding local needs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-3xl mb-4">🧠</div>
                <h3 className="text-xl font-semibold mb-3">Vision-Driven</h3>
                <p className="text-gray-600">
                  We operate with long-term vision, not short-term hustle, building sustainable value.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#FAD4D8]/20 to-pink-100/20 p-6 rounded-xl border-2 border-[#FAD4D8]/30"
              >
                <div className="text-3xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-3">Creative Excellence</h3>
                <p className="text-gray-600">
                  We combine creativity with technical excellence to deliver truly innovative solutions.
                </p>
              </motion.div>
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
                Ready to Build the Future Together?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Whether you need AI automation for your business or want to collaborate on the next big thing, 
                let&apos;s create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-[#FAD4D8] text-[#0F172A] font-semibold rounded-lg hover:bg-[#FAD4D8]/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  🚀 Start Your Project
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 border border-[#FAD4D8] text-gray-800 font-semibold rounded-lg hover:bg-[#FAD4D8]/10 transition-all duration-300"
                >
                  🔍 Explore Our Services
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

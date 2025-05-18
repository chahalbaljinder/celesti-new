"use client";
import React from "react";

export default function SimpleHome() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full px-4 lg:px-6 h-14 flex items-center justify-between fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto">
          <div className="font-semibold text-xl">Celesti</div>
        </div>
      </header>
      <main className="flex-grow pt-14">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold">Celesti</h1>
          <p className="mt-4">Digital Experiences That Inspire</p>
        </div>
      </main>
      <footer className="w-full bg-white py-16 mt-12 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Celesti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

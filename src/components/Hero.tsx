import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-black text-white">
      <div className="absolute inset-0 top-[-64px]">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1642790551116-18e150f248e3?auto=format&fit=crop&q=80"
          alt="Luxury Background"
          className="w-full h-[calc(100%+64px)] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Elevate Your
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600"> Investment</span>
          <br />Journey
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Join our exclusive membership for premium investment insights and personalized portfolio management.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors inline-flex items-center gap-2"
        >
          Get Started <ArrowRight size={20} />
        </motion.button>
      </div>
    </section>
  );
};
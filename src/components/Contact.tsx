import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Contact = () => {
  return (
    <section id="contact" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-400 text-xl">Have questions? We're here to help</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <motion.div variants={container} className="space-y-8">
            <motion.div variants={item} className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-yellow-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Email Us</h3>
                <p className="text-gray-400">contact@saham.com</p>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4">
              <Phone className="w-8 h-8 text-yellow-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Call Us</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4">
              <MapPin className="w-8 h-8 text-yellow-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Visit Us</h3>
                <p className="text-gray-400">123 Investment Street, Financial District</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.form variants={item} className="space-y-6">
            <motion.div variants={item}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </motion.div>
            <motion.div variants={item}>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </motion.div>
            <motion.div variants={item}>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              ></textarea>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};
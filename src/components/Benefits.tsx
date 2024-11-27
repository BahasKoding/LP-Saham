import React from 'react';
import { Trophy, Target, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: <Trophy className="w-12 h-12 text-yellow-400" />,
    title: "Expert Analysis",
    description: "Get real-time market analysis from our team of professional traders and analysts."
  },
  {
    icon: <Target className="w-12 h-12 text-yellow-400" />,
    title: "Personalized Strategy",
    description: "Receive customized investment strategies tailored to your financial goals."
  },
  {
    icon: <Users className="w-12 h-12 text-yellow-400" />,
    title: "Exclusive Community",
    description: "Join our community of successful investors and learn from their experiences."
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-yellow-400" />,
    title: "Performance Tracking",
    description: "Track your portfolio performance with our advanced analytics tools."
  }
];

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

export const Benefits = () => {
  return (
    <section id="benefits" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Premium Benefits</h2>
          <p className="text-gray-400 text-xl">Experience the advantages of our exclusive membership</p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-900 p-8 rounded-2xl hover:bg-gray-800 transition-colors transform hover:-translate-y-1 duration-300"
            >
              <div className="mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Basic",
    price: "99",
    features: [
      "Basic market analysis",
      "Weekly newsletter",
      "Community access",
      "Basic portfolio tracking"
    ]
  },
  {
    name: "Premium",
    price: "199",
    featured: true,
    features: [
      "Advanced market analysis",
      "Daily newsletter",
      "Priority community access",
      "Advanced portfolio tracking",
      "1-on-1 consultation",
      "Trading signals"
    ]
  },
  {
    name: "Elite",
    price: "399",
    features: [
      "Expert market analysis",
      "Real-time updates",
      "VIP community access",
      "Premium portfolio tracking",
      "Weekly consultation",
      "Priority trading signals",
      "Personal account manager"
    ]
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Membership Plans</h2>
          <p className="text-gray-400 text-xl">Choose the plan that suits your investment needs</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex flex-col h-full rounded-2xl p-8 ${
                plan.featured
                  ? 'bg-yellow-400 cursor-pointer'
                  : 'bg-gray-900'
              }`}
              whileHover={plan.featured ? {
                scale: 1.02,
                transition: { duration: 0.2 }
              } : {}}
            >
              {plan.featured && (
                <>
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0 0 0 0px rgba(250, 204, 21, 0.3)",
                        "0 0 0 20px rgba(250, 204, 21, 0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 rounded-2xl"
                  />
                  <motion.div
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-50"
                  />
                </>
              )}
              
              <div className="flex-grow relative">
                <h3 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-black' : 'text-white'}`}>
                  {plan.name}
                  {plan.featured && (
                    <span className="ml-2 inline-block px-2 py-1 bg-black text-yellow-400 text-xs rounded-full">
                      RECOMMENDED
                    </span>
                  )}
                </h3>
                <div className="mb-6">
                  <span className={`text-4xl font-bold ${plan.featured ? 'text-black' : 'text-white'}`}>
                    ${plan.price}
                  </span>
                  <span className={`text-sm ${plan.featured ? 'text-black/70' : 'text-gray-400'}`}>/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className={`w-5 h-5 mt-0.5 ${plan.featured ? 'text-black' : 'text-yellow-400'}`} />
                      <span className={plan.featured ? 'text-black' : 'text-gray-300'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-full font-bold mt-auto relative z-10 ${
                  plan.featured
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-white text-black hover:bg-gray-200'
                } transition-colors`}
              >
                {plan.featured ? 'Get Premium Access' : 'Get Started'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '10+', label: 'Awards Won' },
    { icon: Users, value: '50K+', label: 'Happy Customers' },
    { icon: Clock, value: '5', label: 'Years Experience' },
    { icon: Heart, value: '99%', label: 'Satisfaction Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:pr-8"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              About <span className="text-orange-400">Crave Lab</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Born from a passion for culinary innovation, Crave Lab is where traditional techniques 
              meet modern creativity. Our award-winning chefs craft each dish with meticulous attention 
              to detail, using only the finest locally-sourced ingredients.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Since opening our doors five years ago, we've been committed to creating not just meals, 
              but memorable experiences that bring people together. Every recipe is a carefully 
              orchestrated experiment in flavor, texture, and presentation.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700 hover:border-orange-400/50 transition-colors duration-300"
                >
                  <stat.icon className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/887723/pexels-photo-887723.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Crave Lab chefs in action"
                className="w-full h-[500px] object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Made with Love</div>
                    <div className="text-sm text-gray-400">Every single dish</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
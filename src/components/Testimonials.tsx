import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rana Hamza Saif',
      role: 'Food Blogger',
      content: 'Crave Lab exceeded all my expectations! The innovative fusion of flavors and artistic presentation made it an unforgettable dining experience. Every dish tells a story.',
      rating: 5,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHIt-tpIcgJY17j4Co7G0JamAVflQRn_cQxA&s'
    },
    {
      id: 2,
      name: 'Irfan Junejo',
      role: 'Restaurant Critic',
      content: 'The culinary artistry at Crave Lab is phenomenal. Chef\'s attention to detail and creative approach to traditional dishes creates magic on every plate. A true gem!',
      rating: 5,
      image: 'https://yt3.googleusercontent.com/zlMeOTokWQ7U4HQ64eszcFhi96iqOUheYQUKs18nEO4kxqptixojHEnw5NSSHfR-lBcIOihzkw=s900-c-k-c0x00ffffff-no-rj'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Food Enthusiast',
      content: 'From the moment we walked in, the atmosphere was electric. The staff is incredibly knowledgeable, and each dish was a perfect balance of innovation and comfort.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their Crave Lab experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(249, 115, 22, 0.1)'
              }}
              className="bg-gray-900 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative border border-gray-700"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-orange-400/30" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-orange-400"
                />
                <div>
                  <h4 className="font-semibold text-white text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-orange-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Leaf, Flame } from 'lucide-react';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');

  const categories = [
    { id: 'appetizers', name: 'Appetizers', icon: Leaf },
    { id: 'mains', name: 'Main Courses', icon: Flame },
    { id: 'desserts', name: 'Desserts', icon: Star }
  ];

  const menuItems = {
    appetizers: [
      {
        name: 'Russian Salad',
        description: 'Creamy, mildly sweet dish made with diced vegetables like potatoes, carrots, and peas, mixed with mayonnaise.',
        // price: '$18',
        popular: true,
        // image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        image: 'https://hamariweb.com/recipes/images/recipeimages/9918.jpg'
      },
      {
        name: 'Channa Chat',
        description: 'Boiled chickpeas, chopped onions, tomatoes, green chilies, and fresh coriander, tossed in zesty spices and lemon juice. ',
        // price: '$24',
        popular: false,
        // image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        image: 'https://foodtrails25.com/wp-content/uploads/2024/07/Chana-Chaat-recipe.jpg'
      },
      {
        name: 'Spring Rolls',
        description: 'Crispy, savory rolls filled with vegetables and meat, wrapped in thin pastry, fried and served fresh.',
        // price: '$22',
        popular: true,
        // image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
        image: 'https://www.giallozafferano.com/images/276-27601/Chinese-Spring-Rolls_1200x800.jpg'
       
      }
    ],
    mains: [
      {
        name: 'Wagyu Beef Tenderloin',
        description: 'Premium wagyu beef with roasted bone marrow, seasonal vegetables, and red wine jus',
        // price: '$65',
        popular: true,
        image: 'https://images.pexels.com/photos/769289/pexels-photo-769289.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Butter Chicken',
        description: 'Rich, creamy curry made with tender chicken cooked in a spiced tomato and butter sauce.',
        // price: '$48',
        popular: true,
        image: 'https://realfood.tesco.com/media/images/1400x919-240222-TESCO-CEDAR-MARCH-STILLS-Butter-Chicken-Curry-TRF-0363-11-b633ee81-ae2c-4cb2-b672-771a7a0712a7-0-1400x919.jpg'
      },
      {
        name: 'Biriyani',
        description: 'Fragrant and flavorful rice layered with marinated meat, aromatic spices, and herbs, cooked to perfection.',
        // price: '$42',
        popular: false,
        image: 'https://images.food52.com/McqpjxUiMekhfX6Rsq7wuuSoz0g=/2016x1344/filters:format(webp)/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg'
      }
    ],
    desserts: [
      {
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with molten center, vanilla bean ice cream, and gold leaf',
        // price: '$16',
        popular: true,
        image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Crème Brûlée Trio',
        description: 'Classic vanilla, lavender honey, and espresso crème brûlée with fresh berries',
        // price: '$14',
        popular: false,
        image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      },
      {
        name: 'Deconstructed Tiramisu',
        description: 'Modern take on the classic with mascarpone mousse, coffee soil, and ladyfinger tuile',
        // price: '$15',
        popular: true,
        image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="menu" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="text-orange-400">Menu</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our carefully curated selection of dishes, each crafted with passion and the finest ingredients.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-1 bg-gray-800 p-1 rounded-full">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Menu Items */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 20px 40px rgba(249, 115, 22, 0.1)'
              }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 relative group"
            >
              {item.popular && (
                <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="text-2xl font-bold text-orange-400">
                    {item.price}
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
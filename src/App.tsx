import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Menu />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;
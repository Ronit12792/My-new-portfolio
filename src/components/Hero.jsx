import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Eye } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Common glow animation
  const glowAnimation = {
    boxShadow: [
      '0 0 10px rgba(45, 212, 191, 0.6), 0 0 20px rgba(45, 212, 191, 0.8)',
      '0 0 10px rgba(59, 130, 246, 0.6), 0 0 20px rgba(59, 130, 246, 0.8)',
      '0 0 10px rgba(236, 72, 153, 0.6), 0 0 20px rgba(236, 72, 153, 0.8)',
      '0 0 10px rgba(250, 204, 21, 0.6), 0 0 20px rgba(250, 204, 21, 0.8)',
      '0 0 10px rgba(45, 212, 191, 0.6), 0 0 20px rgba(45, 212, 191, 0.8)',
    ],
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-600/20 to-teal-600/20 animate-gradient"></div>
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-royal-blue-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Ronit Kumar</span>
            <br />
            <span className="text-gradient">Das</span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Full Stack Developer | Cloud Enthusiast | With keen interest in AI/ML
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            I build scalable, user-focused, and innovative digital solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* Hire Me Button */}
            <motion.button
              onClick={scrollToContact}
              animate={glowAnimation}
              transition={{ duration: 6, repeat: Infinity, repeatType: 'loop' }}
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Hire Me
            </motion.button>

            {/* View Projects Button */}
            <motion.button
              onClick={scrollToProjects}
              animate={glowAnimation}
              transition={{ duration: 6, repeat: Infinity, repeatType: 'loop', delay: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-royal-blue-600 to-royal-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-royal-blue-500 hover:to-royal-blue-600 transition-all duration-300"
            >
              <Eye size={20} />
              View Projects
            </motion.button>

            {/* Download Resume with Glow */}
            <motion.a
              href="/Ronit_Das_9748490565.pdf"
              download="/Ronit_Das_9748490565.pdf"
              rel="noopener noreferrer"
              animate={glowAnimation}
              transition={{ duration: 6, repeat: Infinity, repeatType: 'loop', delay: 2 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-gray-400" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-4">
            <h3 className="text-xl font-poppins font-bold text-gradient mb-2">
              Ronit Kumar Das
            </h3>
            <p className="text-gray-400">Full Stack Developer | Cloud Enthusiast</p>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>using React & Tailwind CSS</span>
          </div>
          
          <div className="mt-4 text-sm text-gray-500">
            © 2025 Ronit Kumar Das. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Photo from "../Assets/Photo.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gradient mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-royal-blue-500 to-teal-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-royal-blue-500 to-teal-500 rounded-full animate-pulse-glow"></div>
              <div className="absolute inset-2 bg-gray-900 rounded-full overflow-hidden">
                <img
                  src={Photo}
                  alt="Ronit Kumar Das - Full Stack Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-poppins font-semibold text-white mb-6">
              Passionate Developer & Problem Solver
            </h3>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Highly motivated Full Stack Web Developer with extensive experience in building 
              scalable and responsive applications using modern technologies like React, Node.js, 
              and MongoDB. I possess strong problem-solving skills and a keen eye for creating 
              user-friendly interfaces.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              My passion lies in transforming complex problems into elegant, efficient solutions. 
              I thrive in collaborative environments and am always eager to learn new technologies 
              that can enhance user experience and application performance.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="glass-morphism p-4 rounded-lg">
                <h4 className="text-teal-400 font-semibold mb-2">Experience</h4>
                <p className="text-gray-300">1+ Years</p>
              </div>
              <div className="glass-morphism p-4 rounded-lg">
                <h4 className="text-teal-400 font-semibold mb-2">Projects</h4>
                <p className="text-gray-300">12+ Completed</p>
              </div>
              <div className="glass-morphism p-4 rounded-lg">
                <h4 className="text-teal-400 font-semibold mb-2">Location</h4>
                <p className="text-gray-300">Kolkata, India</p>
              </div>
              <div className="glass-morphism p-4 rounded-lg">
                <h4 className="text-teal-400 font-semibold mb-2">Focus</h4>
                <p className="text-gray-300">Full Stack Developer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

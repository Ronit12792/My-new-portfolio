import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'Java', 'HTML', 'CSS', 'Python'],
      color: 'from-royal-blue-500 to-royal-blue-600'
    },
    {
      title: 'Frameworks & Libraries',
      skills: ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'jQuery',],
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Firebase', 'VS Code'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'SQL','AWS'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Other Technologies',
      skills: ['REST APIs', 'JWT Authentication', 'Agile Methodology'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gradient mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-royal-blue-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="glass-morphism p-6 rounded-xl group hover:bg-white/10 transition-all duration-300"
            >
              <h3 className={`text-xl font-poppins font-semibold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-center group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Lines of Code', value: '20K+' },
            { label: 'Projects Completed', value: '12+' },
            { label: 'Technologies Mastered', value: '15+' },
            { label: 'Years Experience', value: '1+' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center glass-morphism p-6 rounded-xl">
              <div className="text-3xl font-poppins font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

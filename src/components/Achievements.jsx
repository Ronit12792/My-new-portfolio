import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Code, BookOpen, Trophy, Cloud, ExternalLink } from 'lucide-react';

const Achievements = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const achievements = [
    {
      title: 'Java Full Stack Developer',
      organization: 'Wipro',
      type: 'Certification',
      icon: <Award className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      link: 'https://drive.google.com/file/d/1zZjbvIOjbJa0L-Oa_W0mbzOqBak4gpeI/view?usp=sharing'
    },
    {
      title: 'AWS Cloud Certification',
      organization: 'Scaler Academy',
      type: 'Cloud Certification',
      icon: <Cloud className="w-6 h-6" />,
      color: 'from-orange-500 to-yellow-500',
      link: 'https://moonshot.scaler.com/s/li/FYF6GYxY13'
    },
    {
      title: 'SQL Certification',
      organization: 'HackerRank',
      type: 'Certification',
      icon: <BookOpen className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      link: 'https://www.hackerrank.com/certificates/3816cc965b04'
    },
    {
      title: 'Web Development for Beginners',
      organization: 'Simplilearn',
      type: 'Course Completion',
      icon: <Code className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      link: 'https://drive.google.com/file/d/1RAp6nrmJE7rYT4ceo_BIBYGfczh3jHnx/view?usp=drive_link'
    },
    {
      title: '200+ DSA Problems Solved',
      organization: 'LeetCode, HackerRank, CodeChef',
      type: 'Problem Solving',
      icon: <Trophy className="w-6 h-6" />,
      color: 'from-red-500 to-pink-600',
      link: 'https://leetcode.com/u/its_ronitkumar1508/'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gradient mb-4">
            Achievements & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-royal-blue-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My journey of continuous learning and professional growth
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-morphism p-6 rounded-xl group hover:bg-white/10 transition-all duration-300 relative"
            >
              {/* Certificate Link Button */}
              {achievement.link && (
                <motion.a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 p-2 bg-gray-700/50 hover:bg-gray-600/70 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                  title="View Certificate"
                >
                  <ExternalLink className="w-4 h-4 text-gray-300 hover:text-white" />
                </motion.a>
              )}

              <div className="flex flex-col items-start gap-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${achievement.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-poppins font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                    {achievement.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-3">
                    {achievement.organization}
                  </p>
                  
                  <span className={`inline-block px-3 py-1 text-xs bg-gradient-to-r ${achievement.color} text-white rounded-full`}>
                    {achievement.type}
                  </span>

                  {achievement.link && (
                    <div className="mt-3">
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-royal-blue-400 hover:text-royal-blue-300 transition-colors duration-300"
                      >
                        <ExternalLink className="w-3 h-3" />
                        View Certificate
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          <div className="text-center glass-morphism p-6 rounded-xl">
            <div className="text-3xl font-poppins font-bold text-gradient mb-2">
              5+
            </div>
            <div className="text-gray-400 text-sm">
              Certifications Earned
            </div>
          </div>
          
          <div className="text-center glass-morphism p-6 rounded-xl">
            <div className="text-3xl font-poppins font-bold text-gradient mb-2">
              200+
            </div>
            <div className="text-gray-400 text-sm">
              Problems Solved
            </div>
          </div>
          
          <div className="text-center glass-morphism p-6 rounded-xl">
            <div className="text-3xl font-poppins font-bold text-gradient mb-2">
              100%
            </div>
            <div className="text-gray-400 text-sm">
              Course Completion Rate
            </div>
          </div>

          <div className="text-center glass-morphism p-6 rounded-xl">
            <div className="text-3xl font-poppins font-bold text-gradient mb-2">
              4+
            </div>
            <div className="text-gray-400 text-sm">
              Technologies Certified
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;

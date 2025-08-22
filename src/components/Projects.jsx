import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Zap, Database, Shield, Brain, MessageSquare } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const projects = [
    {
      title: 'Cloud-based Blood Bank Management System',
      description: 'Academic Project:-A comprehensive MERN stack application with Firebase integration, featuring role-based dashboards and real-time updates for efficient blood bank management.',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/DC2626/FFFFFF?text=Blood+Bank+System',
      tech: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Express.js'],
      demoLink: 'https://online-cloudbased-bloodbank-system.vercel.app/homepage',
      githubLink: 'https://github.com/TUHINDAS9670/ONLINE-CLOUDBASED-BLOODBANK-SYSTEM',
      icon: <Database className="w-6 h-6" />,
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'BlogsyGen - AI-Powered Blogging Platform',
      description: 'An intelligent blogging platform built with React and Node.js, featuring JWT authentication and Gemini API integration for AI-powered content generation.',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/7C3AED/FFFFFF?text=BlogsyGen+AI',
      tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Gemini API'],
      demoLink: 'https://blogsygen-client.vercel.app/',
      githubLink: 'https://github.com/Ronit12792/blogsygen-backend',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Zaptrix - E-commerce Frontend',
      description: 'A modern e-commerce frontend built with React and Tailwind CSS, featuring dynamic cart functionality and advanced filtering capabilities.',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/059669/FFFFFF?text=Zaptrix+Store',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Local Storage'],
      demoLink: 'https://zaptrix-lzg4.vercel.app/',
      githubLink: 'https://github.com/Ronit12792/Zaptrix',
      icon: <Zap className="w-6 h-6" />,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Serenity - Mental Health Tracker',
      description: 'A compassionate mental health tracking application built with vanilla JavaScript, featuring interactive charts and mood analytics.',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0EA5E9/FFFFFF?text=Serenity+Health',
      tech: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
      demoLink: 'https://mental-health-delta-smoky.vercel.app/',
      githubLink: 'https://github.com/Ronit12792/mental-health',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-sky-500 to-sky-600'
    },
    {
      title: 'Chatbot Flow Builder',
      description: 'A visual chatbot flow builder built with React.js, React Flow, and Tailwind CSS, allowing users to create, connect, and manage chatbot message nodes with a clean drag-and-drop interface.',
      image: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/14B8A6/FFFFFF?text=Chatbot+Flow+Builder',
      tech: ['React.js', 'React Flow', 'Tailwind CSS'],
      demoLink: 'https://chatbotflow2.vercel.app/',
      githubLink: 'https://github.com/Ronit12792/chatbotflow2.git', // change to your repo if different
      icon: <MessageSquare className="w-6 h-6" />,
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-royal-blue-500 to-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-morphism rounded-xl overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                    {project.icon}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-gradient-to-r from-royal-blue-600 to-royal-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium btn-glow transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 glass-morphism text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

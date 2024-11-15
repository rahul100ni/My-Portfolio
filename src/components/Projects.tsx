import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Clock, ListTodo, Bot } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Edumate",
      description: "A comprehensive study companion featuring AI-powered learning tools and productivity features.",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: Clock, text: "Pomodoro Timer" },
        { icon: ListTodo, text: "Task Management" },
        { icon: Bot, text: "AI Tools" }
      ],
      tags: ["React", "TypeScript", "Tailwind CSS"],
      links: {
        live: "https://edumate-five.vercel.app",
        github: "https://github.com/rahul100ni/Edumate"
      }
    },
    {
      title: "Edumate",
      description: "A comprehensive study companion featuring AI-powered learning tools and productivity features.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: Clock, text: "Pomodoro Timer" },
        { icon: ListTodo, text: "Task Management" },
        { icon: Bot, text: "AI Tools" }
      ],
      tags: ["React", "TypeScript", "Tailwind CSS"],
      links: {
        live: "https://edumate-five.vercel.app",
        github: "https://github.com/rahul100ni/Edumate"
      }
    },
    {
      title: "Edumate",
      description: "A comprehensive study companion featuring AI-powered learning tools and productivity features.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
      features: [
        { icon: Clock, text: "Pomodoro Timer" },
        { icon: ListTodo, text: "Task Management" },
        { icon: Bot, text: "AI Tools" }
      ],
      tags: ["React", "TypeScript", "Tailwind CSS"],
      links: {
        live: "https://edumate-five.vercel.app",
        github: "https://github.com/rahul100ni/Edumate"
      }
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative section-transition projects-gradient">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-600 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of my best work, demonstrating my skills and passion for development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-violet-950/20 hover:bg-violet-950/30 transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 relative z-10">
                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 text-violet-300 group-hover:text-violet-200 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Features - Only for Edumate */}
                {project.features && (
                  <div className="flex gap-4 mb-4">
                    {project.features.map((feature, fIndex) => (
                      <div 
                        key={fIndex} 
                        className="flex items-center gap-2 text-xs text-gray-400"
                      >
                        <feature.icon className="w-4 h-4 text-violet-400" />
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs bg-violet-900/30 rounded-full text-violet-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 inline-flex items-center gap-2 px-4 py-2 text-sm text-violet-400 hover:text-violet-300 bg-violet-500/10 hover:bg-violet-500/20 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-20 inline-flex items-center gap-2 px-4 py-2 text-sm text-violet-400 hover:text-violet-300 bg-violet-500/10 hover:bg-violet-500/20 rounded-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
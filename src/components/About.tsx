import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Rocket, Coffee, Wrench, Users, Target, Sparkles, Lightbulb, ChevronDown } from 'lucide-react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const qualities = [
    {
      icon: Brain,
      title: "Problem Solver",
      description: "Natural troubleshooter with a knack for finding innovative solutions to complex challenges"
    },
    {
      icon: Wrench,
      title: "Technical Mind",
      description: "Passionate about technology with hands-on experience in both software and hardware"
    },
    {
      icon: Target,
      title: "Detail Oriented",
      description: "Committed to excellence with meticulous attention to detail in every project"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong leadership skills balanced with collaborative spirit and effective communication"
    },
    {
      icon: Lightbulb,
      title: "Innovative Thinker",
      description: "Creative approach to problem-solving with a focus on unique solutions"
    },
    {
      icon: Sparkles,
      title: "Self-Driven",
      description: "Ambitious and self-reliant with a strong sense of ownership in every endeavor"
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative section-transition about-gradient">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-600 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            A passionate technologist and creative problem solver, dedicated to pushing boundaries and creating impactful solutions.
          </p>

          {/* Read More Button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-2 mx-auto text-violet-400 hover:text-violet-300 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{isExpanded ? "Read Less" : "Read More"}</span>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.button>

          {/* Expandable Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="text-lg text-gray-300 mt-6 bg-violet-950/20 p-6 rounded-2xl backdrop-blur-sm border border-violet-500/10">
                  As a BTech student with an entrepreneurial mindset, I believe in being a job creator rather than just a job seeker. 
                  My journey is defined by a unique blend of technical proficiency and creative problem-solving abilities. 
                  Whether it's fixing hardware issues or developing software solutions, I approach each challenge with patience, 
                  adaptability, and an unwavering commitment to excellence.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Core Qualities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="h-full bg-violet-950/20 p-8 rounded-2xl backdrop-blur-sm border border-violet-500/10 hover:border-violet-500/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20 transition-colors duration-300">
                    <quality.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-violet-400 transition-colors duration-300">
                    {quality.title}
                  </h3>
                </div>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {quality.description}
                </p>
                <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-r from-violet-500/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Attributes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              "Detail-Oriented",
              "Self-Reliant",
              "Innovative",
              "Patient",
              "Adaptable",
              "Leadership",
              "Technical Proficiency",
              "Creative Thinking"
            ].map((attribute, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-full bg-violet-500/10 text-violet-300 text-sm border border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/15 transition-all duration-300"
              >
                {attribute}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
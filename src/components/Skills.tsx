import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Git, Layout, Terminal, Brain, Pen, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Development",
      icon: Code2,
      skills: [
        { name: "Python", level: "Intermediate", progress: 70, color: "from-blue-400 to-blue-600" },
        { name: "React", level: "Learning", progress: 40, color: "from-cyan-400 to-blue-500" },
        { name: "JavaScript", level: "Learning", progress: 40, color: "from-yellow-400 to-orange-500" },
        { name: "TypeScript", level: "Learning", progress: 40, color: "from-blue-400 to-indigo-500" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: [
        { name: "VS Code", level: "Expert", progress: 90, color: "from-blue-500 to-indigo-600" },
        { name: "Git", level: "Advanced", progress: 80, color: "from-orange-400 to-red-500" },
        { name: "PyCharm", level: "Expert", progress: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "Figma", level: "Intermediate", progress: 60, color: "from-purple-400 to-pink-500" }
      ]
    },
    {
      title: "Creative & Technical",
      icon: Brain,
      skills: [
        { name: "Problem Solving", level: "Expert", progress: 90, color: "from-green-400 to-emerald-600" },
        { name: "Tech Research", level: "Expert", progress: 90, color: "from-violet-400 to-purple-600" },
        { name: "Content Creation", level: "Advanced", progress: 80, color: "from-pink-400 to-rose-600" },
        { name: "AI Tools", level: "Advanced", progress: 80, color: "from-indigo-400 to-violet-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative section-transition skills-gradient">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-purple-600 text-transparent bg-clip-text">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A blend of technical knowledge and creative problem-solving abilities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="bg-violet-950/10 backdrop-blur-sm rounded-2xl p-8 h-full border border-violet-500/10 hover:border-violet-500/20 transition-all duration-500 relative overflow-hidden">
                {/* Category Header with Hover Effect */}
                <motion.div 
                  className="flex items-center gap-4 mb-8"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/15 transition-colors duration-300">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-violet-400 transition-colors duration-300">
                    {category.title}
                  </h3>
                </motion.div>

                {/* Skills with Smooth Progress Animation */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group/skill relative"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium group-hover/skill:text-violet-400 transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-violet-400 opacity-80 group-hover/skill:opacity-100 transition-opacity duration-300">
                          {skill.level}
                        </span>
                      </div>
                      <div className="h-2 bg-violet-950/20 rounded-full overflow-hidden group-hover/skill:bg-violet-950/30 transition-colors duration-300">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.progress}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          viewport={{ once: true }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative group-hover/skill:brightness-110 transition-all duration-300`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Subtle Background Effect */}
                <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-r from-violet-500/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              "Creative Writing",
              "Storytelling",
              "Technical Documentation",
              "Hardware Knowledge",
              "Quick Learner",
              "Solution-Oriented"
            ].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
                className="px-4 py-2 rounded-full bg-violet-500/10 text-violet-300 text-sm border border-violet-500/20 hover:border-violet-500/40 hover:bg-violet-500/15 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
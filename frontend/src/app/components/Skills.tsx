import { motion } from 'motion/react';
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  ChevronRight,
  GitBranch,
  Github,
  Terminal,
  Rocket,
  Circle,
  Square,
  Box,
  Network,
  Layers,
  AlertTriangle,
  GitFork,
  Coffee,
  Layout,
  Database as DbIcon,
  Cpu,
  Atom,
  FileCode,
  Palette,
  Zap,
  Leaf,
  Hexagon,
  Activity,
  Cloud
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: [
        { name: 'Java', icon: Coffee, iconColor: 'text-red-500' },
        { name: 'JavaScript', icon: Terminal, iconColor: 'text-yellow-500' },
        { name: 'Python', icon: FileCode, iconColor: 'text-blue-500' },
        { name: 'C', icon: Cpu, iconColor: 'text-blue-600' },
        { name: 'C++', icon: Code2, iconColor: 'text-indigo-600' }
      ],
      color: 'from-blue-500 to-indigo-600',
      lightColor: 'text-blue-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20'
    },
    {
      title: 'Frontend',
      icon: Monitor,
      skills: [
        { name: 'React.js', icon: Atom, iconColor: 'text-cyan-500' },
        { name: 'Vite', icon: Zap, iconColor: 'text-purple-500' },
        { name: 'HTML5', icon: FileCode, iconColor: 'text-orange-500' },
        { name: 'CSS3', icon: Palette, iconColor: 'text-blue-500' },
        { name: 'JavaScript', icon: Terminal, iconColor: 'text-yellow-500' }
      ],
      color: 'from-indigo-500 to-purple-600',
      lightColor: 'text-indigo-600',
      bgColor: 'bg-indigo-500/10',
      borderColor: 'border-indigo-500/20'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Spring Boot', icon: Leaf, iconColor: 'text-green-500' },
        { name: 'Node.js', icon: Hexagon, iconColor: 'text-green-600' },
        { name: 'Express.js', icon: Activity, iconColor: 'text-slate-500' },
        { name: 'JDBC', icon: Coffee, iconColor: 'text-red-500' },
        { name: 'REST APIs', icon: Cloud, iconColor: 'text-blue-500' },
        { name: 'Servlets/JSP', icon: Coffee, iconColor: 'text-red-500' }
      ],
      color: 'from-cyan-500 to-blue-600',
      lightColor: 'text-cyan-600',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MySQL', icon: DbIcon, iconColor: 'text-blue-500' },
        { name: 'MongoDB', icon: Leaf, iconColor: 'text-green-500' }
      ],
      color: 'from-blue-600 to-cyan-600',
      lightColor: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
      borderColor: 'border-blue-600/20'
    },
    {
      title: 'Tools & Concepts',
      icon: Wrench,
      isSpecial: true,
      skills: [
        { name: 'Git', icon: GitBranch },
        { name: 'GitHub', icon: Github },
        { name: 'Maven', icon: Terminal },
        { name: 'Postman', icon: Rocket },
        { name: 'VS Code', icon: Code2 },
        { name: 'Eclipse', icon: Circle },
        { name: 'IntelliJ IDEA', icon: Square },
        { name: 'OOP', icon: Box },
        { name: 'Data Structures & Algorithms', icon: Network },
        { name: 'Collections', icon: Layers },
        { name: 'Exception Handling', icon: AlertTriangle },
        { name: 'Multithreading', icon: GitFork },
        { name: 'Java 8', icon: Coffee },
        { name: 'MVC', icon: Layout },
        { name: 'CRUD Operations', icon: DbIcon }
      ],
      color: 'from-purple-500 to-pink-600',
      lightColor: 'text-purple-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20'
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#f8faff] dark:bg-slate-950">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
            x: [0, -40, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
            Technical <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]"
          />
        </motion.div>

        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial="initial"
              whileHover="active"
              whileTap="active"
              viewport={{ once: true }}
              className="group relative flex flex-col md:flex-row items-center md:items-stretch gap-6 p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/40 backdrop-blur-2xl border border-white dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-none overflow-hidden"
            >
              {/* Animated Neon Border on Hover/Tap */}
              <motion.div
                variants={{
                  initial: { opacity: 0.35 },
                  active: { opacity: 1 }
                }}
                className="absolute inset-0 p-[1px] rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 -z-10"
              />
              <div className="absolute inset-[1px] rounded-3xl bg-white dark:bg-slate-900 -z-10" />

              <div className="relative shrink-0">
                <motion.div 
                  variants={{
                    initial: { scale: 1, borderColor: 'rgba(241, 245, 249, 1)' },
                    active: { scale: 1.1, borderColor: 'rgba(99, 102, 241, 0.5)' }
                  }}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-slate-800 border-2 flex items-center justify-center shadow-sm relative z-10`}
                >
                  <category.icon className={`w-8 h-8 sm:w-10 sm:h-10 ${category.lightColor}`} />
                </motion.div>
                <motion.div 
                  variants={{
                    initial: { opacity: 0.25 },
                    active: { opacity: 0.4 }
                  }}
                  className={`absolute inset-0 rounded-2xl ${category.bgColor} blur-2xl transition-opacity duration-500`} 
                />
              </div>

              <div className="flex-1 w-full text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6 relative">
                    <motion.h3 
                      variants={{
                        initial: { x: 0, color: 'inherit' },
                        active: { x: 5, color: 'var(--primary)' }
                      }}
                      className={`text-xl sm:text-3xl md:text-2xl font-black flex items-center justify-center md:justify-start gap-3`}
                    >
                      {category.title}
                      <motion.div
                        variants={{
                          initial: { opacity: 0, x: -10 },
                          active: { opacity: 1, x: 0 }
                        }}
                      >
                        <ChevronRight className="w-5 h-5 hidden md:block" />
                      </motion.div>
                    </motion.h3>
                    
                    <div className="hidden md:block flex-1 h-[2px] relative overflow-hidden rounded-full">
                      <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800" />
                      <motion.div
                        initial={{ left: "-100%" }}
                        whileInView={{ left: "0%" }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                        className={`absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent`}
                      />
                    </div>

                    <div className="w-12 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent rounded-full opacity-50 mx-auto md:hidden" />
                  </div>

                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  {category.skills.map((skill, idx) => {
                    const isSpecial = typeof skill === 'object';
                    const skillName = isSpecial ? skill.name : skill;
                    const SkillIcon = isSpecial ? skill.icon : null;
                    const iconColor =
                      isSpecial && 'iconColor' in skill && skill.iconColor
                        ? skill.iconColor
                        : 'text-indigo-600 dark:text-indigo-400';

                    return (
                      <motion.div
                        key={skillName}
                        initial="initial"
                        whileHover="active"
                        whileTap="active"
                        variants={{
                          initial: { y: 0, scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' },
                          active: { y: -3, scale: 1.05, boxShadow: '0 10px 20px rgba(99, 102, 241, 0.1)' }
                        }}
                        className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/50 text-slate-700 dark:text-slate-300 shadow-sm cursor-default group/skill"
                      >
                        {SkillIcon && (
                          <motion.div 
                            variants={{
                              initial: { backgroundColor: 'rgba(99, 102, 241, 0.1)' },
                              active: { backgroundColor: 'rgba(99, 102, 241, 0.2)' }
                            }}
                            className={`p-1.5 rounded-lg ${iconColor} transition-all duration-300`}
                          >
                            <SkillIcon className="w-4 h-4" />
                          </motion.div>
                        )}
                        <span className="text-xs sm:text-[13px] font-black uppercase tracking-wider">{skillName}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, CheckCircle2, Code2, Cpu, Globe, Rocket, Star, X, Layout, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';
import { Badge } from './ui/badge';

interface Project {
  name: string;
  github: string;
  liveDemo?: string;
  techStack: string[];
  description: string;
  features: string[];
  imageUrl: string;
  isFeatured?: boolean;
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      name: 'RaahSetu — Full Stack Transit Management Platform',
      github: 'https://github.com/08Ayushi/RaahSetu',
      liveDemo: '#',
      techStack: ['React.js', 'Spring Boot', 'MySQL', 'REST APIs', 'Spring Security', 'JWT'],
      description: 'A full-stack transit management platform with authentication, route search, nearby stops, journey planning, and admin modules.',
      features: [
        'User authentication',
        'Admin-side route and stop management',
        'Route search',
        'Nearby stop detection',
        'Journey planning',
        'REST API-based frontend-backend communication',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
      isFeatured: true,
    },
    {
      name: 'AI Expense Tracker with Receipt OCR',
      github: 'https://github.com/08Ayushi/AI-Expense-Tracker',
      liveDemo: '#',
      techStack: ['Python', 'Django REST Framework', 'React.js', 'SQLite', 'OpenCV', 'Pandas', 'Scikit-Learn', 'Chart.js'],
      description: 'An AI-enabled full-stack expense tracker with receipt OCR, auto-categorization, budget alerts, reports, charts, CSV export, and next-month expense prediction.',
      features: [
        'Receipt OCR for vendor, date, and amount extraction',
        'Expense auto-categorization',
        'Budget alerts and reports',
        'Chart-based expense analysis',
        'CSV export',
        'Expense prediction using Scikit-Learn',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    },
    {
      name: 'Collaborative Code Editor & Runner',
      github: 'https://github.com/08Ayushi/Collaborative-Code-Editor-and-Runner',
      liveDemo: '#',
      techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Monaco Editor', 'Yjs', 'WebSockets', 'Socket.IO'],
      description: 'A real-time collaborative code editor with multi-user editing, room/session handling, WebSocket-based code execution, and live input/output streaming.',
      features: [
        'Real-time multi-user code editing',
        'Room and session handling',
        'Monaco Editor integration',
        'Yjs and Socket.IO-based collaboration',
        'WebSocket-based code execution',
        'Real-time stdin/stdout streaming',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    },
    {
      name: 'TaxPal — Finance & Tax Management App',
      github: 'https://github.com/08Ayushi/Taxpal',
      liveDemo: '#',
      techStack: ['Angular', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'Vercel', 'Render'],
      description: 'A MEAN stack finance and tax management application with JWT authentication, transaction management, budgets, tax estimator, reports, and frontend-backend integration.',
      features: [
        'JWT-based authentication',
        'Income and expense management',
        'Budget tracking',
        'Tax estimator',
        'Reports and dashboard',
        'Frontend deployed on Vercel',
        'Backend deployed on Render',
      ],
      imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
    },
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial="initial"
              whileHover="hover"
              whileTap="hover"
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer p-8 rounded-2xl bg-card/40 backdrop-blur-md border border-border/50 shadow-xl relative overflow-hidden card-depth"
            >
              {/* Hover Glow Background */}
              <motion.div
                variants={{
                  initial: { opacity: 0.4 },
                  hover: { opacity: 1 }
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
              />

              {/* Animated Border */}
              <motion.div
                variants={{
                  initial: { opacity: 0.45 },
                  hover: { opacity: 1 }
                }}
                className="absolute inset-0 border-2 border-primary/50 rounded-2xl pointer-events-none"
              />

              <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                <div className="flex justify-between items-start">
                  <motion.h3
                    variants={{
                      initial: { color: 'inherit' },
                      hover: { color: 'var(--primary)' }
                    }}
                    className="text-2xl font-bold transition-colors duration-300"
                  >
                    {project.name}
                  </motion.h3>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    initial="initial"
                    whileHover="active"
                    whileTap="active"
                    variants={{
                      initial: { scale: 1, rotate: 0, backgroundColor: 'rgba(var(--secondary-rgb), 0.1)', color: 'var(--secondary)' },
                      active: { scale: 1.1, rotate: 12, backgroundColor: 'var(--secondary)', color: 'white' }
                    }}
                    className="p-2.5 rounded-full shadow-sm transition-all duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                </div>

                <motion.div
                  variants={{
                    initial: { opacity: 1, y: 0 },
                    hover: { opacity: 1, y: -3 }
                  }}
                  className="flex items-center text-sm font-medium text-primary transition-all duration-300"
                >
                  <span>View Project Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-[95vw] lg:max-w-4xl p-0 border-none bg-transparent shadow-none [&>button]:hidden outline-none">
          <DialogTitle className="sr-only">Project Details</DialogTitle>
          <DialogDescription className="sr-only">Detailed information about the selected project including features and tech stack.</DialogDescription>
          <AnimatePresence mode="wait">
            {selectedProject && (
              <motion.div
                key={selectedProject.name}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-h-[85vh] bg-white/95 dark:bg-[#05070a]/98 backdrop-blur-2xl rounded-[2rem] border border-white/20 dark:border-white/10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.3)] overflow-y-auto overflow-x-hidden"
              >
                {/* Premium Background Glows */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 rounded-full blur-[100px]"
                  />
                  <motion.div
                    animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.15, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/30 rounded-full blur-[100px]"
                  />
                </div>

                {/* Header Actions */}
                <div className="sticky top-0 right-0 z-50 flex items-center justify-end gap-3 p-6 bg-gradient-to-b from-white/90 dark:from-black/90 to-transparent backdrop-blur-sm">
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    whileTap={{ scale: 0.9 }}
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-blue-500/10 dark:bg-primary/20 border border-blue-500/30 dark:border-primary/40 shadow-sm group transition-all"
                  >
                    <Github strokeWidth={2.5} className="w-5 h-5 text-blue-600 dark:text-primary group-hover:scale-110 transition-transform" />
                  </motion.a>
                  <motion.button
                    initial="initial"
                    whileHover="active"
                    whileTap="active"
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 shadow-sm"
                  >
                    <X className="w-5 h-5 text-slate-700 dark:text-white group-hover:text-red-500 transition-colors" />
                  </motion.button>
                </div>

                <div className="relative z-10 px-6 sm:px-12 pb-12 sm:pb-16 pt-2 space-y-10 sm:space-y-12">
                  {/* Title & Description */}
                  <div className="space-y-2">
                    <motion.h2
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-2xl sm:text-4xl font-black tracking-tight leading-tight"
                    >
                      <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
                        {selectedProject.name}
                      </span>
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-[15px] sm:text-[17px] text-slate-600 dark:text-slate-300 leading-relaxed font-medium max-w-4xl text-justify"
                    >
                      {selectedProject.description}
                    </motion.p>
                  </div>

                  {/* Key Features */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-xl bg-primary/15 text-primary shadow-lg shadow-primary/5">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Key Features</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
                      {selectedProject.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2.5 group text-[13px] sm:text-sm">
                          <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5 opacity-60 group-hover:opacity-100 transition-all" />
                          <span className="text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors font-semibold">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Tech Stack Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-xl bg-secondary/15 text-secondary shadow-lg shadow-secondary/5">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">Tech Stack</h3>
                    </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.techStack.map((tech, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-3 py-1 rounded-lg border border-indigo-100 dark:border-indigo-900/50 bg-indigo-50/30 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-400 text-[10px] sm:text-[11px] font-black transition-all shadow-sm cursor-default flex items-center justify-center"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
}



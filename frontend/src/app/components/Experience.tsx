import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, Building2, Star, Cpu, Code2, Terminal } from 'lucide-react';
export function Experience() {
  const experiences = [
    {
      company: 'NextGenSoft Technologies LLP',
      role: 'Java Full Stack Developer',
      duration: 'December 2025 - July 2026',
      location: 'Ahmedabad, Gujarat, India',
      icon: Code2,
      iconBg: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
      description: 'Contributed to full-stack web application development using Java, Spring Boot, React.js, MySQL, REST APIs, Hibernate, JPA, and modern backend integration practices. Worked on RaahSetu, a full-stack transit web application with authentication, route search, journey planning, and admin modules. Also supported live React.js, Spring Boot, and Python serverless applications by debugging issues, fixing API/database errors, and contributing to AWS Lambda, API Gateway, S3, and deployment updates.',
      responsibilities: [
        'Developed and maintained full-stack web application modules using Java, Spring Boot, React.js, and MySQL',
        'Built and integrated REST APIs for smooth frontend-backend communication',
        'Worked on authentication, authorization, role-based access control, and CRUD-based application flows',
        'Designed and handled database-driven modules using MySQL, Hibernate, JPA, and Spring Data JPA',
        'Tested APIs using Postman and debugged issues across frontend, backend, and database layers',
        'Supported live applications by resolving API errors, database issues, deployment bugs, and UI-related problems',
        'Contributed to AWS-based serverless application updates using AWS Lambda, API Gateway, and S3',
        'Collaborated with the team to improve application performance, validation, UI flow, and user experience',
        'Followed clean coding practices, modular development, and version control using Git and GitHub',
      ],
      techStack: [
        { name: 'Java', color: 'bg-blue-100 text-blue-700 border-blue-200' },
        { name: 'Spring Boot', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
        { name: 'Spring Data JPA', color: 'bg-cyan-100 text-cyan-700 border-cyan-200' },
        { name: 'Hibernate', color: 'bg-purple-100 text-purple-700 border-purple-200' },
        { name: 'React.js', color: 'bg-blue-100 text-blue-700 border-blue-200' },
        { name: 'JavaScript', color: 'bg-amber-100 text-amber-700 border-amber-200' },
        { name: 'MySQL', color: 'bg-blue-100 text-blue-700 border-blue-200' },
        { name: 'REST APIs', color: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200' },
        { name: 'JWT', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
        { name: 'AWS Lambda', color: 'bg-amber-100 text-amber-700 border-amber-200' },
        { name: 'API Gateway', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
        { name: 'S3', color: 'bg-orange-100 text-orange-800 border-orange-200' },
        { name: 'Git', color: 'bg-orange-100 text-orange-700 border-orange-200' },
        { name: 'GitHub', color: 'bg-slate-100 text-slate-700 border-slate-200' },
        { name: 'Postman', color: 'bg-orange-100 text-orange-700 border-orange-200' },
      ],
    },
    {
      company: 'Infosys Springboard',
      role: 'Angular Full Stack Developer',
      duration: 'September 2025 – October 2025',
      location: 'Remote',
      icon: Terminal,
      iconBg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400',
      description: 'Developed TaxPal, a MEAN stack finance and tax management web application as part of Infosys Springboard 6.0. The application included transaction management, budgets, tax estimator, tax calendar, reports, JWT-based authentication, and integrated frontend-backend workflows. Worked in a collaborative team environment and deployed the frontend on Vercel and backend on Render.',
      responsibilities: [
        'Developed frontend modules using Angular for finance and tax management features',
        'Built and integrated backend APIs using Node.js, Express.js, and MongoDB',
        'Implemented JWT-based authentication for secure user access',
        'Worked on transaction, budget, tax estimator, tax calendar, and reporting modules',
        'Integrated frontend and backend workflows for smooth data communication',
        'Tested APIs and fixed integration issues during development',
        'Collaborated with team members to improve application flow, UI consistency, and feature implementation',
        'Deployed the frontend on Vercel and backend on Render',
      ],
      techStack: [
        { name: 'Angular', color: 'bg-rose-100 text-rose-700 border-rose-200' },
        { name: 'Node.js', color: 'bg-green-100 text-green-700 border-green-200' },
        { name: 'Express.js', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
        { name: 'MongoDB', color: 'bg-green-100 text-green-700 border-green-200' },
        { name: 'JWT', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
        { name: 'REST APIs', color: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200' },
        { name: 'Vercel', color: 'bg-slate-100 text-slate-700 border-slate-200' },
        { name: 'Render', color: 'bg-purple-100 text-purple-700 border-purple-200' },
        { name: 'Git', color: 'bg-orange-100 text-orange-700 border-orange-200' },
        { name: 'GitHub', color: 'bg-slate-100 text-slate-700 border-slate-200' },
        { name: 'Postman', color: 'bg-orange-100 text-orange-700 border-orange-200' },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#fcfaff] dark:bg-[#030508]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -120, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-purple-500 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
            Work <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
          />
        </motion.div>

        <div className="relative">
          {/* Vertical Line - Fixed to the left with neon glow */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-indigo-200 dark:bg-indigo-900/30 hidden sm:block">
            <motion.div
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 w-full bg-indigo-500 blur-[2px]"
            />
          </div>

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileHover="active"
                whileTap="active"
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot - Fixed to the left with pulsing neon */}
                <div className="absolute left-4 md:left-8 top-8 w-5 h-5 -translate-x-1/2 z-20 hidden sm:flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center border-2 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.4)]">
                    <motion.div
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.7)]"
                    />
                  </div>
                </div>

                <div className="sm:ml-16 md:ml-20">
                  <motion.div
                    className="p-5 sm:p-6 rounded-[2rem] bg-white/80 dark:bg-slate-900/60 backdrop-blur-xl border border-indigo-100 dark:border-indigo-900/20 shadow-xl shadow-indigo-500/5 relative overflow-hidden group"
                  >
                    {/* Animated Neon Border on Hover/Tap */}
                    <motion.div 
                      variants={{
                        initial: { opacity: 0.35 },
                        active: { opacity: 1 }
                      }}
                      className="absolute inset-0 p-[1px] rounded-[2rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 -z-10 transition-opacity duration-500" 
                    />
                    <div className="absolute inset-[1px] rounded-[2rem] bg-white dark:bg-slate-900 -z-10" />
                    
                    <div className="flex items-start gap-4 mb-5">
                      <motion.div 
                        variants={{
                          initial: { scale: 1, rotate: 0 },
                          active: { scale: 1.1, rotate: 5 }
                        }}
                        className={`p-3 rounded-xl ${exp.iconBg} backdrop-blur-md border border-white/50 dark:border-white/10 shrink-0 shadow-md`}
                      >
                        <exp.icon className="w-5 h-5" />
                      </motion.div>
                      <div>
                        <motion.h3 
                          variants={{
                            initial: { x: 0 },
                            active: { x: 5 }
                          }}
                          className="text-lg sm:text-xl font-black text-slate-900 dark:text-white tracking-tight leading-tight"
                        >
                          {exp.role}
                        </motion.h3>
                        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs mt-1">
                          <Building2 className="w-3.5 h-3.5" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-slate-500 dark:text-slate-400 font-bold text-[10px] sm:text-xs tracking-wider uppercase">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-purple-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 font-medium text-justify">
                      {exp.description}
                    </p>

                    {exp.responsibilities.length > 0 && (
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 border border-indigo-500/20">
                            <Star className="w-3.5 h-3.5 fill-indigo-600" />
                          </div>
                          <h4 className="font-black text-slate-800 dark:text-slate-100 uppercase tracking-wider text-[10px] sm:text-xs">
                            Key Responsibilities
                          </h4>
                        </div>
                        <ul className="space-y-2.5">
                          {exp.responsibilities.map((resp, idx) => (
                            <motion.li
                              key={idx}
                              initial="initial"
                              whileHover="active"
                              whileTap="active"
                              className="flex items-start gap-3 text-[11px] sm:text-xs leading-relaxed"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 mt-1.5 shrink-0 shadow-[0_0_5px_rgba(99,102,241,0.5)]" />
                              <motion.span 
                                variants={{
                                  initial: { color: 'var(--slate-600)', x: 0 },
                                  active: { color: 'var(--slate-900)', x: 3 }
                                }}
                                className="text-slate-600 dark:text-slate-400 dark:active:text-slate-200"
                              >
                                {resp}
                              </motion.span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4 relative">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/80 dark:via-purple-400 to-transparent origin-right"
                      />
                      <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-600 border border-purple-500/20">
                          <Cpu className="w-3.5 h-3.5" />
                        </div>
                        <h4 className="font-black text-slate-800 dark:text-slate-100 uppercase tracking-wider text-[10px] sm:text-xs">
                          Tech Stack
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech) => (
                          <motion.span
                            key={tech.name}
                            whileHover={{ scale: 1.05 }}
                            className={`px-3 py-1 rounded-lg border ${tech.color} dark:bg-opacity-20 dark:border-opacity-40 text-[9px] sm:text-[11px] font-black shadow-sm cursor-default flex items-center justify-center`}
                          >
                            {tech.name}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import {
  Code2,
  Database,
  Sparkles,
  Layers,
  Zap,
  Brain,
  User,
  GraduationCap,
  Briefcase,
  MapPin,
  Linkedin,
  Github,
  Mail,
  Rocket,
  Atom,
  Cloud,
  Coffee,
  Radio,
  Monitor
} from 'lucide-react';

export function About() {
  const expertise = [
    {
      icon: Monitor,
      title: 'Full Stack Development',
      desc: 'End-to-end development of scalable web applications.',
      color: '#7C3AED'
    },
    {
      icon: Coffee,
      title: 'Java + Spring Boot',
      desc: 'Building robust, secure and performance-driven APIs.',
      color: '#4ADE80'
    },
    {
      icon: Atom,
      title: 'React.js Frontend',
      desc: 'Responsive and interactive user interfaces.',
      color: '#38BDF8'
    },
    {
      icon: Cloud,
      title: 'REST API Integration',
      desc: 'Designing and integrating RESTful APIs seamlessly.',
      color: '#A78BFA'
    },
    {
      icon: Database,
      title: 'Database Design',
      desc: 'Efficient schema design and query optimization.',
      color: '#FB923C'
    },
    {
      icon: Radio,
      title: 'Real-Time Applications',
      desc: 'Real-time features using WebSocket and collaboration.',
      color: '#2DD4BF'
    },
  ];

  const stats = [
    { icon: Briefcase, value: '4+', label: 'Projects', sub: 'Full Stack Applications', color: '#7C3AED' },
    { icon: GraduationCap, value: '8.85', label: 'CGPA', sub: 'B.Tech CSE AI/ML', color: '#A78BFA' },
    { icon: Rocket, value: '2+', label: 'Internships', sub: 'Java & MEAN Stack', color: '#38BDF8' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white dark:bg-[#030508]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] -z-10 -translate-x-1/3 translate-y-1/3" />

      {/* Dotted Pattern */}
      <div className="absolute top-10 right-10 w-24 h-24 opacity-20 dark:opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1.5px, transparent 1.5px)', backgroundSize: '12px 12px' }}></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 opacity-20 dark:opacity-10 pointer-events-none blur-2xl bg-primary/20 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl font-black tracking-tight mb-3"
          >
            About <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Me</span>
          </motion.h2>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-1.5 bg-gradient-to-r from-primary to-blue-500 rounded-full mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side */}
          <div className="lg:col-span-5 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: User,
                  text: "I am a Computer Science and Engineering professional specialized in Artificial Intelligence and Machine Learning, with hands-on experience in building full-stack web applications."
                },
                {
                  icon: Code2,
                  text: "I build responsive, practical, and user-focused applications using Java, Spring Boot, React.js, Node.js, Express.js, MySQL, and MongoDB."
                },
                {
                  icon: Layers,
                  text: "My work includes authentication, role-based access control, REST API integration, database design, route planning, real-time collaboration, and CRUD-based application development."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 sm:gap-5 group">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 flex items-center justify-center shadow-sm hover:shadow-md active:shadow-md active:scale-95 transition-all">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs sm:text-sm font-medium pt-1 text-justify">
                    {item.text}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Stats: equal pair on small/medium; three across on large screens */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial="initial"
                  whileHover="active"
                  whileTap="active"
                  viewport={{ once: true }}
                  className={`min-w-0 p-4 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none text-center ${
                    i === 2 ? 'col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <motion.div 
                    variants={{
                      initial: { scale: 1 },
                      active: { scale: 1.1 }
                    }}
                    className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-white/5 flex items-center justify-center mx-auto mb-3"
                  >
                    <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                  </motion.div>
                  <div className="text-xl font-black text-slate-900 dark:text-white leading-none mb-1">{stat.value}</div>
                  <div className="text-[10px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">{stat.label}</div>
                  <div className="text-[8px] text-slate-400 dark:text-slate-500 mt-1 line-clamp-1">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Expertise Grid */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
              {expertise.map((item, i) => (
                <motion.div
                  key={i}
                  initial="initial"
                  whileHover="active"
                  whileTap="active"
                  viewport={{ once: true }}
                  className="group p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0a0d14]/50 backdrop-blur-xl border border-slate-100 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-none flex gap-3 sm:gap-4 items-center"
                >
                  <motion.div 
                    variants={{
                      initial: { scale: 1 },
                      active: { scale: 1.1 }
                    }}
                    className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 relative overflow-hidden"
                    style={{ backgroundColor: `${item.color}15` }}>
                    <div className="absolute inset-0 opacity-20 blur-xl" style={{ backgroundColor: item.color }}></div>
                    <item.icon className="w-5 h-5 sm:w-7 sm:h-7 relative z-10" style={{ color: item.color }} />
                  </motion.div>
                  <div>
                    <motion.h4 
                      variants={{
                        initial: { color: 'inherit' },
                        active: { color: 'var(--primary)' }
                      }}
                      className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white"
                    >
                      {item.title}
                    </motion.h4>
                    <p className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Profile Card */}
            <motion.div
              initial="initial"
              whileHover="active"
              whileTap="active"
              viewport={{ once: true }}
              className="p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white dark:bg-[#0a0d14]/50 backdrop-blur-xl border border-slate-100 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-none flex flex-col sm:flex-row items-center gap-4 sm:gap-5"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 flex-shrink-0 border-2 border-white dark:border-white/10 shadow-sm">
                <img
                  src="/Ayushi.jpeg"
                  alt="Ayushi Soni"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">Ayushi Soni</h4>
                <p className="text-xs font-bold text-primary mb-1">Full Stack Developer</p>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-slate-500 dark:text-slate-400">
                  <MapPin className="w-3 h-3" />
                  <span className="text-[10px] font-medium">Ahmedabad, Gujarat</span>
                </div>
              </div>
              <div className="flex gap-2">
                {[
                  { icon: Linkedin, color: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400', url: 'https://www.linkedin.com/in/ayushi-soni-9b4466279' },
                  { icon: Github, color: 'bg-slate-50 text-slate-900 dark:bg-white/10 dark:text-white', url: 'https://github.com/08Ayushi' },
                  { icon: Mail, color: 'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400', url: 'mailto:soniayushi2308@gmail.com' }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url.startsWith('mailto:') ? '#contact' : social.url}
                    onClick={(e) => {
                      if (social.url.startsWith('mailto:')) {
                        e.preventDefault();
                        const element = document.querySelector('#contact');
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }
                    }}
                    target={social.url.startsWith('mailto:') ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    initial="initial"
                    whileHover="active"
                    whileTap="active"
                    variants={{
                      initial: { scale: 1 },
                      active: { scale: 1.1 }
                    }}
                    className={`w-8 h-8 rounded-lg ${social.color} flex items-center justify-center shadow-sm cursor-pointer transition-transform`}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}



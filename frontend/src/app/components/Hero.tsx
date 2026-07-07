import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Github,
  Linkedin,
  ArrowDown,
  ChevronsDown,
  Sparkles,
  Code2,
  Star,
  Rocket,
  ArrowRight,
  User,
  Brain,
  LineChart,
  Zap,
  Layers,
  Target,
  FileDown
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const roles = [
    'Full Stack Developer',
    'Problem solver',
    'AIML Enthusiast',
  ];

  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const role = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < role.length) {
        setCurrentRole(role.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentRole(role.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === role.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  ];

  return (
    <section id="home" ref={containerRef} className="min-h-screen relative overflow-hidden flex items-center pt-10 sm:pt-24 bg-[#fcfaff] dark:bg-[#030508] transition-colors duration-700">
      {/* Immersive Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

        {/* Pulsing Glow Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px]"
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1],
              x: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
              y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
            }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
            className="absolute w-1 h-1 bg-primary rounded-full blur-[1px]"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 sm:py-20">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 lg:gap-16 lg:-mt-18 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start w-full lg:pl-20 text-center lg:text-left"
          >
            <div className="flex flex-col gap-0">

              <div className="flex flex-col items-center lg:items-start gap-1 w-full">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl font-semibold text-slate-700 dark:text-slate-300"
                >
                  Hi, I'm
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight"
                >
                  <span className="bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#3b82f6] bg-clip-text text-transparent drop-shadow-sm">
                    Ayushi Soni
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="min-h-[3rem] sm:min-h-[4rem] flex items-center justify-center lg:justify-start w-full mt-4 sm:mt-6"
                >
                  <span className="text-xl sm:text-3xl font-extrabold text-slate-800 dark:text-white tracking-tight">
                    {currentRole}
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="text-[#8b5cf6] inline-block w-1 ml-1"
                    >
                      |
                    </motion.span>
                  </span>
                </motion.div>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-lg w-full px-2 sm:px-0 leading-relaxed font-medium text-center lg:text-justify mx-auto lg:mx-0 mt-6"
            >
              I build scalable and user-focused full-stack web applications across Java, MERN, MEAN, Python, REST APIs, databases, and AI/ML-powered features.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 mt-10 w-full"
            >
              <motion.button
                onClick={() => scrollToSection('#projects')}
                initial="initial"
                whileHover="active"
                whileTap="active"
                className="group relative px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#6366f1] to-[#3b82f6] text-white font-black overflow-hidden shadow-[0_15px_30px_rgba(99,102,241,0.3)] flex items-center gap-3 text-sm sm:text-base"
              >
                {/* Animated Shimmer Effect */}
                <motion.div
                  variants={{
                    initial: { x: '-100%' },
                    active: { x: '100%', transition: { duration: 1, ease: "easeInOut" } }
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
                
                <motion.div
                  variants={{
                    initial: { rotate: 0 },
                    active: { rotate: 12 }
                  }}
                >
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
                <span>View Projects</span>
              </motion.button>

              <motion.a
                href="/Ayushi_Soni_Resume__Full_Stack_developer_.pdf"
                download="Ayushi_Soni_Resume.pdf"
                initial="initial"
                whileHover="active"
                whileTap="active"
                className="px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white dark:bg-white/10 border border-slate-200 dark:border-white/20 text-slate-700 dark:text-white font-black flex items-center gap-3 shadow-xl backdrop-blur-md text-sm sm:text-base"
              >
                <motion.div
                  variants={{
                    initial: { y: 0 },
                    active: { y: [0, -2, 0], transition: { repeat: Infinity, duration: 1 } }
                  }}
                >
                  <FileDown className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.div>
                <span>My Resume</span>
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Right Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center items-center w-full mx-auto"
          >
            <div className="relative group mx-auto">
              {/* Multi-layered Glass Profile Container */}
              <div className="relative p-4 sm:p-6 lg:p-10 group/image flex items-center justify-center mx-auto">

                {/* Main Image Frame with Neon Border - Increased sizes */}
                <div className="relative w-64 h-64 xs:w-72 xs:h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] z-10 group mx-auto">
                  {/* Neon Glow Outer - Lighter and more vibrant */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -inset-2 bg-gradient-to-r from-primary/40 via-secondary/40 to-accent/40 rounded-[3rem] sm:rounded-[4rem] blur-xl z-0"
                  />

                  {/* Animated Neon Border - Brighter colors */}
                  <div className="absolute inset-0 p-[2px] rounded-[4rem] bg-white/30 dark:bg-white/20 overflow-hidden z-10">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_25%,#fff_35%,var(--color-primary)_45%,var(--color-secondary)_55%,#fff_65%,transparent_75%,transparent_100%)] opacity-80"
                    />
                  </div>

                  {/* Image Container - Lighter background */}
                  <div className="absolute inset-[2px] rounded-[2.9rem] sm:rounded-[3.9rem] overflow-hidden border border-white/60 dark:border-white/20 shadow-2xl z-20 bg-white/20 dark:bg-slate-900/5 backdrop-blur-md">
                    <ImageWithFallback
                      src="/Ayushi.jpeg"
                      alt="Ayushi Soni"
                      className="w-full h-full object-cover"
                    />

                    {/* Bright Inner Glow */}
                    <div className="absolute inset-0 border-[4px] sm:border-[6px] border-white/20 rounded-[2.9rem] sm:rounded-[3.9rem] pointer-events-none" />

                    {/* Glass Shine - Increased opacity */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-white/10 pointer-events-none" />
                  </div>
                </div>

                {/* Glow Orbs */}
                <div className="absolute -inset-4 sm:-inset-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 blur-3xl -z-20 opacity-50" />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

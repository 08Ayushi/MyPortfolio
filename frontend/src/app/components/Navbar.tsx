import { useState, useEffect } from 'react';
import {
  Moon,
  Sun,
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Code2,
  LayoutGrid,
  Award,
  GraduationCap,
  Mail,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Skills', href: '#skills', icon: Code2 },
    { name: 'Projects', href: '#projects', icon: LayoutGrid },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '#home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = `#${section}`;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled
            ? 'bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] border-b border-indigo-100/50 dark:border-white/5 py-1.5'
            : 'bg-white/55 dark:bg-slate-950/45 backdrop-blur-xl border-b border-white/40 dark:border-white/10 py-4'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <motion.div
              initial="initial"
              whileHover="active"
              whileTap="active"
              onClick={() => scrollToSection('#home')}
              className="flex items-center cursor-pointer group relative"
            >
              <div className="relative">
                <motion.span 
                  variants={{
                    initial: { scale: 1 },
                    active: { scale: 1.05 }
                  }}
                  className="text-3xl sm:text-5xl font-serif italic tracking-tighter bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 bg-clip-text text-transparent block transition-transform duration-500"
                >
                  AS
                </motion.span>
                <div className="absolute -top-1 -right-1">
                  <motion.div
                    variants={{
                      initial: { opacity: 0, scale: 0 },
                      active: { opacity: 1, scale: 1 }
                    }}
                  >
                    <Sparkles className="w-3 h-3 text-indigo-400 transition-opacity duration-500" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href;

                return (
                  <div key={link.name} className="relative flex flex-col items-center group">
                    <motion.button
                      initial="initial"
                      animate="animate"
                      whileHover="active"
                      whileTap="active"
                      variants={{
                        initial: { opacity: 0, y: -10 },
                        animate: { opacity: 1, y: 0 },
                        active: { y: -3, scale: 1.05, backgroundColor: 'rgba(99, 102, 241, 0.05)', boxShadow: '0 0 20px rgba(99, 102, 241, 0.15)' }
                      }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(link.href)}
                      className={`flex flex-col items-center gap-1.5 px-4 py-2 rounded-2xl transition-all duration-300 relative z-10 ${isActive
                          ? 'bg-white dark:bg-slate-900/80 shadow-lg shadow-indigo-500/15 border border-indigo-100/60 dark:border-indigo-500/20'
                          : 'bg-white/60 dark:bg-slate-900/50 border border-white/50 dark:border-white/10 shadow-sm backdrop-blur-sm'
                        }`}
                    >
                      <Icon className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-indigo-800/90 dark:text-indigo-200 group-hover:text-indigo-600 group-hover:scale-110'}`} />
                      <span className={`text-[10px] font-black uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-indigo-700 dark:text-indigo-300' : 'text-indigo-950/85 dark:text-indigo-100 group-hover:text-indigo-700'}`}>
                        {link.name}
                      </span>
                    </motion.button>

                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-2 w-8 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)] backdrop-blur-md transition-all duration-300"
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - Full Screen Fixed */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[9999] bg-white dark:bg-slate-950 flex flex-col p-6 overflow-y-auto"
          >
            {/* Header in Overlay */}
            <div className="flex items-center justify-between mb-8">
              <span className="text-3xl font-serif italic tracking-tighter bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-500 bg-clip-text text-transparent">
                AS
              </span>
              <motion.button
                whileHover={{ scale: 1.05, rotate: 90 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)] backdrop-blur-md transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Nav List - Stacked with Animations */}
            <div className="flex flex-col gap-3">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive = activeSection === link.href;
                return (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    onClick={() => scrollToSection(link.href)}
                    className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 touch-manipulation group relative overflow-hidden ${isActive
                        ? 'bg-indigo-500/10 shadow-[0_0_20px_rgba(99,102,241,0.3)]'
                        : 'bg-white dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 border border-slate-100/50 dark:border-slate-800/30 hover:bg-indigo-500/5'
                      }`}
                  >
                    {/* Animated Shine Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    {isActive && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-blue-500/5 to-purple-500/5"
                      />
                    )}
                    <div className={`p-2.5 rounded-xl transition-all duration-300 ${isActive
                        ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]'
                        : 'bg-indigo-50 dark:bg-indigo-500/10 shadow-sm border border-indigo-100 dark:border-indigo-500/20 group-hover:bg-indigo-500/20 group-hover:scale-110'
                      }`}>
                      <Icon className={`w-5 h-5 transition-transform duration-300 group-hover:rotate-12 ${isActive ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'}`} />
                    </div>
                    <span className={`font-black text-xs uppercase tracking-[0.15em] relative z-10 transition-colors duration-300 ${isActive ? 'text-indigo-700 dark:text-indigo-300' : 'text-slate-700 dark:text-slate-300 group-hover:text-indigo-600'}`}>
                      {link.name}
                    </span>
                    <div className={`ml-auto transition-all duration-300 relative z-10 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-20 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'}`}>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'group-hover:text-indigo-500'}`} />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Bottom Decoration */}
            <div className="mt-auto pt-8 text-center">
              <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full opacity-20 mb-4" />
              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">
                Ayushi Soni Portfolio
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

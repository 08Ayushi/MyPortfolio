import { motion } from 'motion/react';
import {
  Award,
  CheckCircle2,
  Atom,
  Cpu,
  Sparkles,
  BarChart3,
  Bot,
  ShieldCheck
} from 'lucide-react';
export function Certifications() {
  const certifications = [
    {
      title: 'React.js Certification',
      issuer: 'Scaler',
      icon: Atom,
      color: 'from-indigo-500 to-blue-600',
      glow: 'rgba(99, 102, 241, 0.4)'
    },
    {
      title: 'Microsoft AI Azure Internship',
      issuer: 'Edunet Foundation & AICTE',
      icon: Bot,
      color: 'from-blue-500 to-cyan-600',
      glow: 'rgba(59, 130, 246, 0.4)'
    },
    {
      title: 'Career Essentials in Generative AI',
      issuer: 'Microsoft & LinkedIn Learning',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-600',
      glow: 'rgba(168, 85, 247, 0.4)'
    },
    {
      title: 'Tata Group Data Analytics Job Simulation',
      issuer: 'Forage',
      icon: BarChart3,
      color: 'from-cyan-500 to-emerald-600',
      glow: 'rgba(6, 182, 212, 0.4)'
    },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-[#f8faff] dark:bg-slate-950">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.05)_0%,transparent_50%)]" 
        />
        <div className="absolute top-[10%] right-[10%] w-64 h-64 bg-indigo-500/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-[10%] left-[10%] w-64 h-64 bg-purple-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
            Certifications & <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]" 
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial="initial"
              whileHover="active"
              whileTap="active"
              viewport={{ once: true }}
              className="group relative p-5 rounded-[2rem] bg-white/70 dark:bg-slate-900/40 backdrop-blur-2xl border border-white dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-none text-center flex flex-col h-full overflow-hidden"
            >
              {/* Animated Neon Border on Hover/Tap */}
              <motion.div
                variants={{
                  initial: { opacity: 0.35 },
                  active: { opacity: 1 }
                }}
                className="absolute inset-0 p-[1px] rounded-[2rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 -z-10"
              />
              <div className="absolute inset-[1px] rounded-[2rem] bg-white dark:bg-slate-900 -z-10" />

              {/* Animated Bottom Line */}
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 0.6 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                className={`absolute bottom-5 left-1/2 -translate-x-1/2 h-1 rounded-full bg-gradient-to-r ${cert.color} shadow-[0_0_10px_${cert.glow}]`}
              />

              {/* Icon Container */}
              <div className="relative mb-5 mx-auto">
                <motion.div 
                  variants={{
                    initial: { scale: 1 },
                    active: { scale: 1.1 }
                  }}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center text-white shadow-xl relative z-10`}
                >
                  <cert.icon className="w-7 h-7 sm:w-9 h-9" />
                </motion.div>
                <motion.div 
                  variants={{
                    initial: { opacity: 0.3 },
                    active: { opacity: 0.6 }
                  }}
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${cert.color} blur-xl`} 
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col items-center">
                <motion.h3 
                  variants={{
                    initial: { color: 'inherit' },
                    active: { color: 'var(--primary)' }
                  }}
                  className="font-black text-base sm:text-lg text-slate-800 dark:text-white mb-3 leading-tight"
                >
                  {cert.title}
                </motion.h3>
                
                {/* Minimal Divider */}
                <motion.div 
                  variants={{
                    initial: { width: '1.5rem' },
                    active: { width: '2.5rem' }
                  }}
                  className="h-[2px] bg-slate-100 dark:bg-slate-800 mb-4 transition-all duration-300" 
                />
                
                <motion.div 
                  variants={{
                    initial: { borderColor: 'rgba(241, 245, 249, 1)' },
                    active: { borderColor: 'rgba(99, 102, 241, 0.3)' }
                  }}
                  className="mt-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 dark:bg-slate-800/50 border text-slate-600 dark:text-slate-300 text-[10px] sm:text-xs font-bold transition-all"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  {cert.issuer}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

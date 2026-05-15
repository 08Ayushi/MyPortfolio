import { motion } from 'motion/react';
import {
  GraduationCap,
  Calendar,
  Award,
  MapPin,
  School,
  Sparkles,
  Search
} from 'lucide-react';
export function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      specialization: 'Artificial Intelligence and Machine Learning',
      institution: 'GLS University',
      location: 'Ahmedabad, Gujarat',
      duration: '2022 – 2026',
      cgpa: '8.85/10 till Semester 7',
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-[#f8faff] dark:bg-slate-950">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[5%] w-72 h-72 bg-blue-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[5%] w-72 h-72 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-6xl font-black mb-8 tracking-tight text-slate-900 dark:text-white">
            Education <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Background</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)]" 
          />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 sm:left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-blue-500 rounded-full hidden sm:block">
            <motion.div 
              initial={{ top: "10%" }}
              whileInView={{ top: "35%" }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="absolute -left-[6px] w-3.5 h-3.5 rounded-full bg-white border-[3px] border-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.8)]"
            />
          </div>

          <div className="sm:ml-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileHover="active"
                whileTap="active"
                viewport={{ once: true }}
                tabIndex={0}
                className="group relative touch-manipulation rounded-[2.5rem] outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8faff] dark:focus-visible:ring-offset-slate-950"
              >
                {/* Neon frame — hover (desktop) + active/focus-within (touch & keyboard) + slightly punchier idle on lg and below */}
                <motion.div
                  aria-hidden
                  variants={{
                    initial: { opacity: 0.65 },
                    active: { opacity: 1 },
                  }}
                  className="pointer-events-none absolute inset-0 rounded-[2.5rem] p-px bg-gradient-to-br from-sky-200/90 via-indigo-100/85 to-violet-200/90 transition-all duration-500 max-lg:from-cyan-300/80 max-lg:via-indigo-200/80 max-lg:to-violet-200/80 max-lg:p-[1.5px] max-lg:shadow-[0_0_24px_rgba(99,102,241,0.4)] group-hover:from-cyan-400 group-hover:via-indigo-500 group-hover:to-fuchsia-500 group-hover:p-[2px] group-active:from-cyan-400 group-active:via-indigo-500 group-active:to-fuchsia-500 group-active:p-[2px] group-focus-within:from-cyan-400 group-focus-within:via-indigo-500 group-focus-within:to-fuchsia-500 group-focus-within:p-[2px] dark:from-indigo-500/35 dark:via-violet-500/30 dark:to-sky-500/30 dark:max-lg:from-cyan-400/55 dark:max-lg:via-indigo-400/45 dark:max-lg:to-fuchsia-400/45 dark:group-hover:from-cyan-400 dark:group-hover:via-indigo-400 dark:group-hover:to-fuchsia-500 dark:group-active:from-cyan-400 dark:group-active:via-indigo-400 dark:group-active:to-fuchsia-500 dark:group-focus-within:from-cyan-400 dark:group-focus-within:via-indigo-400 dark:group-focus-within:to-fuchsia-500 -z-10 shadow-[0_0_20px_rgba(165,180,252,0.35)] group-hover:shadow-[0_0_28px_rgba(99,102,241,0.5),0_0_48px_rgba(139,92,246,0.22)] group-active:shadow-[0_0_28px_rgba(99,102,241,0.5),0_0_48px_rgba(139,92,246,0.22)] group-focus-within:shadow-[0_0_28px_rgba(99,102,241,0.5),0_0_48px_rgba(139,92,246,0.22)] dark:shadow-[0_0_28px_rgba(99,102,241,0.12)] dark:group-hover:shadow-[0_0_36px_rgba(99,102,241,0.35)] dark:group-active:shadow-[0_0_36px_rgba(99,102,241,0.35)] dark:group-focus-within:shadow-[0_0_36px_rgba(99,102,241,0.35)]"
                />
                <div className="pointer-events-none absolute inset-px rounded-[2.5rem] bg-[#f5f8ff] transition-colors duration-500 max-lg:bg-indigo-50/60 dark:bg-slate-950 dark:max-lg:bg-indigo-950/20 group-hover:bg-indigo-50/80 group-active:bg-indigo-50/80 group-focus-within:bg-indigo-50/80 dark:group-hover:bg-indigo-950/25 dark:group-active:bg-indigo-950/25 dark:group-focus-within:bg-indigo-950/25 -z-10" />
                <motion.div
                  aria-hidden
                  variants={{
                    initial: { opacity: 0.18 },
                    active: { opacity: 0.45 },
                  }}
                  className="pointer-events-none absolute -inset-3 rounded-[2.75rem] bg-gradient-to-r from-cyan-300/30 via-indigo-300/25 to-violet-300/30 blur-lg transition-opacity duration-500 max-lg:from-cyan-300/38 max-lg:via-indigo-300/32 max-lg:to-violet-300/32 group-hover:from-cyan-400/40 group-hover:via-indigo-400/35 group-hover:to-violet-400/35 group-active:from-cyan-400/40 group-active:via-indigo-400/35 group-active:to-violet-400/35 group-focus-within:from-cyan-400/40 group-focus-within:via-indigo-400/35 group-focus-within:to-violet-400/35 dark:from-indigo-500/15 dark:via-violet-500/12 dark:to-cyan-500/12 dark:max-lg:from-cyan-500/18 dark:max-lg:via-indigo-500/15 dark:max-lg:to-violet-500/15 dark:group-hover:from-cyan-500/20 dark:group-hover:via-indigo-500/18 dark:group-hover:to-violet-500/18 dark:group-active:from-cyan-500/20 dark:group-active:via-indigo-500/18 dark:group-active:to-violet-500/18 dark:group-focus-within:from-cyan-500/20 dark:group-focus-within:via-indigo-500/18 dark:group-focus-within:to-violet-500/18 -z-20"
                />

                <div className="relative flex flex-col md:flex-row gap-6 p-6 sm:p-10 rounded-[2.5rem] bg-white/85 dark:bg-slate-900/50 backdrop-blur-3xl border border-indigo-100/80 dark:border-indigo-500/20 shadow-[0_10px_36px_rgba(99,102,241,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.2)] transition-all duration-500 h-full overflow-hidden max-lg:border-indigo-300/55 max-lg:bg-gradient-to-br max-lg:from-indigo-50/90 max-lg:via-white max-lg:to-violet-50/85 dark:max-lg:border-indigo-400/40 dark:max-lg:from-indigo-950/80 dark:max-lg:via-slate-900/88 dark:max-lg:to-violet-950/50 group-hover:border-indigo-400/65 group-hover:bg-gradient-to-br group-hover:from-indigo-50/95 group-hover:via-white group-hover:to-violet-50/95 group-active:border-indigo-400/65 group-active:bg-gradient-to-br group-active:from-indigo-50/95 group-active:via-white group-active:to-violet-50/95 group-focus-within:border-indigo-400/65 group-focus-within:bg-gradient-to-br group-focus-within:from-indigo-50/95 group-focus-within:via-white group-focus-within:to-violet-50/95 dark:group-hover:border-indigo-400/50 dark:group-hover:bg-gradient-to-br dark:group-hover:from-indigo-950/85 dark:group-hover:via-slate-900/90 dark:group-hover:to-violet-950/55 dark:group-active:border-indigo-400/50 dark:group-active:bg-gradient-to-br dark:group-active:from-indigo-950/85 dark:group-active:via-slate-900/90 dark:group-active:to-violet-950/55 dark:group-focus-within:border-indigo-400/50 dark:group-focus-within:bg-gradient-to-br dark:group-focus-within:from-indigo-950/85 dark:group-focus-within:via-slate-900/90 dark:group-focus-within:to-violet-950/55 dark:group-hover:shadow-[0_16px_48px_rgba(99,102,241,0.12),0_0_0_1px_rgba(129,140,248,0.2)] dark:group-active:shadow-[0_16px_48px_rgba(99,102,241,0.12),0_0_0_1px_rgba(129,140,248,0.2)] dark:group-focus-within:shadow-[0_16px_48px_rgba(99,102,241,0.12),0_0_0_1px_rgba(129,140,248,0.2)] group-hover:shadow-[0_16px_48px_rgba(99,102,241,0.1),0_0_0_1px_rgba(129,140,248,0.18)] group-active:shadow-[0_16px_48px_rgba(99,102,241,0.1),0_0_0_1px_rgba(129,140,248,0.18)] group-focus-within:shadow-[0_16px_48px_rgba(99,102,241,0.1),0_0_0_1px_rgba(129,140,248,0.18)] max-lg:shadow-[0_12px_40px_rgba(99,102,241,0.1),0_0_0_1px_rgba(129,140,248,0.12)] dark:max-lg:shadow-[0_16px_44px_rgba(99,102,241,0.1),0_0_0_1px_rgba(129,140,248,0.15)]">
                  
                  {/* Glowing Icon Box */}
                  <div className="relative shrink-0">
                    <motion.div 
                      variants={{
                        initial: { scale: 1, rotate: 0 },
                        active: { scale: 1.1, rotate: 5 }
                      }}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center shadow-sm relative z-10 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />
                      <GraduationCap className="w-10 h-10 text-indigo-600 dark:text-indigo-400 drop-shadow-lg" />
                    </motion.div>
                    <motion.div 
                      variants={{
                        initial: { opacity: 0 },
                        active: { opacity: 0.4 }
                      }}
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-400/20 to-violet-400/20 dark:from-indigo-400/25 dark:to-violet-500/20 blur-xl transition-opacity duration-500" 
                    />
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 space-y-4 text-center md:text-left">
                    <div>
                      <motion.h3 
                        variants={{
                          initial: { x: 0 },
                          active: { x: 5 }
                        }}
                        className="text-lg sm:text-2xl font-black text-indigo-700 dark:text-indigo-400 mb-2.5 leading-tight transition-transform"
                      >
                        {edu.degree}
                      </motion.h3>
                      <p className="text-slate-600 dark:text-slate-400 font-bold text-xs sm:text-sm leading-relaxed">
                        Specialization: {edu.specialization}
                      </p>
                    </div>

                    <div className="h-[2px] w-full bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-transparent rounded-full" />

                    <div className="space-y-2">
                      <div className="flex items-center justify-center md:justify-start gap-3 text-slate-800 dark:text-slate-200">
                        <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                          <School className="w-4.5 h-4.5" />
                        </div>
                        <span className="text-base sm:text-xl font-black tracking-tight">{edu.institution}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-3 text-slate-500 dark:text-slate-400 ml-1">
                        <MapPin className="w-3.5 h-3.5 text-purple-500" />
                        <span className="font-bold text-xs">{edu.location}</span>
                      </div>
                    </div>

                    {/* Footer Pills */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                      <motion.div 
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-indigo-500/5 dark:bg-indigo-500/10 border border-indigo-500/10 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 shadow-sm transition-all duration-300"
                      >
                        <Calendar className="w-4 h-4" />
                        <span className="font-black text-xs">{edu.duration}</span>
                      </motion.div>
                      <motion.div 
                        whileHover={{ y: -3, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/10 dark:border-purple-500/20 text-purple-700 dark:text-purple-400 shadow-sm transition-all duration-300"
                      >
                        <Award className="w-4 h-4" />
                        <span className="font-black text-xs">{edu.cgpa}</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

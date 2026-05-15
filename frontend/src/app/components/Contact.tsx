import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  User,
  MessageSquare,
  Tag,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';

      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatusMessage('Message sent successfully! I will get back to you soon.');
      setIsError(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatusMessage('Something went wrong. Please try again or email me directly.');
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const mailtoLink = `mailto:soniayushi2308@gmail.com?subject=${encodeURIComponent("Portfolio Contact")}&body=${encodeURIComponent("Hello Ayushi,\n\nI visited your portfolio and wanted to connect with you.\n\nRegards,")}`;

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'soniayushi2308@gmail.com',
      href: mailtoLink,
      ariaLabel: 'Send email to Ayushi',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-9574738994',
      href: 'tel:+919574738994',
      ariaLabel: 'Call Ayushi',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ahmedabad, Gujarat, India',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/ayushi-soni-9b4466279',
      ariaLabel: 'View Ayushi\'s LinkedIn Profile',
      color: 'text-blue-600',
      borderColor: 'border-blue-500/20'
    },
    {
      icon: Github,
      href: 'https://github.com/08Ayushi',
      ariaLabel: 'View Ayushi\'s GitHub Profile',
      color: 'text-slate-900 dark:text-white',
      borderColor: 'border-slate-500/20'
    },
    {
      icon: Mail,
      href: mailtoLink,
      ariaLabel: 'Send email to Ayushi',
      color: 'text-red-500',
      borderColor: 'border-red-500/20'
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#f8faff] dark:bg-slate-950">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[-5%] w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-96 h-96 bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-6xl font-black mb-6 tracking-tight text-slate-900 dark:text-white">
            Get in <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            className="h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 mx-auto rounded-full shadow-[0_0_15px_rgba(99,102,241,0.5)] mb-6"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 lg:items-stretch">
          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 lg:h-full lg:flex lg:flex-col lg:min-h-0"
          >
            <motion.div
              initial="initial"
              whileHover="active"
              whileTap="active"
              className="group relative p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/40 backdrop-blur-2xl border border-white dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-none overflow-hidden lg:flex-1 lg:flex lg:flex-col lg:min-h-0 h-full"
            >
              {/* Animated Neon Border on Hover/Tap */}
              <motion.div
                variants={{
                  initial: { opacity: 0 },
                  active: { opacity: 1 }
                }}
                className="absolute inset-0 p-[1px] rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 -z-10"
              />
              <div className="absolute inset-[1px] rounded-3xl bg-white dark:bg-slate-900 -z-10" />

              <div className="flex items-center gap-3 mb-8">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                  <User className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-slate-800 dark:text-white tracking-tight">Contact Information</h3>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    aria-label={info.ariaLabel}
                    initial="initial"
                    whileHover="active"
                    whileTap="active"
                    className={`flex items-center gap-5 p-5 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 group/item ${info.href ? 'cursor-pointer hover:border-indigo-500/30' : 'cursor-default'}`}
                  >
                    <motion.div
                      variants={{
                        initial: { scale: 1, rotate: 0 },
                        active: { scale: 1.1, rotate: 5 }
                      }}
                      className={`w-14 h-14 rounded-xl ${info.bgColor} ${info.color} flex items-center justify-center`}
                    >
                      <info.icon className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <p className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">{info.label}</p>
                      <p className="text-[13px] sm:text-base font-bold text-slate-700 dark:text-slate-200">{info.value}</p>
                    </div>
                    {info.href && (
                      <motion.div
                        variants={{
                          initial: { opacity: 0.3, x: -5 },
                          active: { opacity: 1, x: 0 }
                        }}
                      >
                        <ChevronRight className="w-5 h-5 text-indigo-500" />
                      </motion.div>
                    )}
                  </motion.a>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-slate-100 dark:border-slate-800 lg:mt-auto">
                <h3 className="text-sm font-black text-slate-400 dark:text-slate-500 tracking-[0.2em] mb-6 text-center lg:text-left">Connect with me</h3>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.ariaLabel}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial="initial"
                      whileHover="active"
                      whileTap="active"
                      className={`p-4 rounded-xl bg-white dark:bg-slate-800 border ${social.borderColor} ${social.color} shadow-sm`}
                    >
                      <motion.div
                        variants={{
                          initial: { scale: 1, rotate: 0 },
                          active: { scale: 1.1, rotate: 12 }
                        }}
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 lg:h-full lg:flex lg:flex-col lg:min-h-0"
          >
            <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/40 backdrop-blur-2xl border border-white dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] dark:shadow-none lg:flex-1 lg:flex lg:flex-col lg:min-h-0">
              <form onSubmit={handleSubmit} className="space-y-6 lg:flex-1 lg:flex lg:flex-col lg:min-h-0">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                    <div className="relative group/input">
                      <motion.div
                        variants={{
                          initial: { color: 'var(--slate-400)' },
                          active: { color: 'var(--indigo-500)' }
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors"
                      >
                        <User className="w-5 h-5" />
                      </motion.div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-bold text-slate-700 dark:text-slate-200"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <div className="relative group/input">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-500 transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-bold text-slate-700 dark:text-slate-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                  <div className="relative group/input">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/input:text-indigo-500 transition-colors">
                      <Tag className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Discussion"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-bold text-slate-700 dark:text-slate-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest ml-1">Your Message</label>
                  <div className="relative group/input">
                    <div className="absolute left-4 top-6 text-slate-400 group-focus-within/input:text-indigo-500 transition-colors">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Hi Ayushi, I'd like to talk about..."
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-bold text-slate-700 dark:text-slate-200 resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white font-black uppercase tracking-[0.2em] shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-3 disabled:opacity-50 transition-all"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
                {statusMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-2xl border text-center transition-all duration-300 ${isError
                        ? 'bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.1)]'
                        : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]'
                      }`}
                  >
                    <p className="text-xs sm:text-sm font-black flex items-center justify-center gap-2">
                      {statusMessage}
                    </p>
                  </motion.div>
                )}


              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Github, Linkedin, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer id="footer" className="py-8 relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex gap-4">
            <motion.a
              href="https://github.com/08Ayushi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.94 }}
              className="p-3 rounded-lg bg-card/50 hover:bg-primary/20 active:bg-primary/30 transition-all duration-300 border border-border"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/ayushi-soni-9b4466279"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.94 }}
              className="p-3 rounded-lg bg-card/50 hover:bg-secondary/20 active:bg-secondary/30 transition-all duration-300 border border-border"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground flex items-center gap-2 justify-center flex-wrap">
              <span>© 2026 Ayushi Soni. Built with passion</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>using modern web technologies.</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

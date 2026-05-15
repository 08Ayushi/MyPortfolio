import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronsUp, ChevronsDown } from 'lucide-react';
export function ScrollNavigation() {
  const [showScroll, setShowScroll] = useState(false);
  const sections = ['#home', '#about', '#experience', '#skills', '#projects', '#certifications', '#education', '#contact', '#footer'];

  useEffect(() => {
    const checkScroll = () => {
      const scrollY = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Hide at top (Hero) and at the very bottom (Footer)
      const isAtTop = scrollY < 300;
      const isAtBottom = scrollY + windowHeight > fullHeight - 50;

      if (!isAtTop && !isAtBottom) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleScroll = (direction: 'next' | 'prev') => {
    const sectionElements = sections.map(id => document.querySelector(id));
    const windowHeight = window.innerHeight;
    const centerPoint = window.pageYOffset + windowHeight / 2;

    // Find the section that covers the center point of the viewport
    let currentSectionIndex = -1;
    sectionElements.forEach((el, index) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const top = rect.top + window.pageYOffset;
      const bottom = rect.bottom + window.pageYOffset;

      if (centerPoint >= top && centerPoint <= bottom) {
        currentSectionIndex = index;
      }
    });

    // If no section is centered (e.g., between sections), find the closest one
    if (currentSectionIndex === -1) {
      let minDistance = Infinity;
      sectionElements.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          currentSectionIndex = index;
        }
      });
    }

    let targetIndex;
    if (direction === 'next') {
      targetIndex = Math.min(currentSectionIndex + 1, sections.length - 1);
      // If we are already at the target or it's too close, try the one after
      if (targetIndex === currentSectionIndex && currentSectionIndex < sections.length - 1) {
        targetIndex++;
      }
    } else {
      targetIndex = Math.max(currentSectionIndex - 1, 0);
      if (targetIndex === currentSectionIndex && currentSectionIndex > 0) {
        targetIndex--;
      }
    }

    sectionElements[targetIndex]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {showScroll && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed bottom-6 right-4 sm:bottom-10 sm:right-6 z-[100] flex flex-col gap-2 sm:gap-4"
        >
          <motion.button
            onClick={() => handleScroll('prev')}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="p-1 sm:p-2 group transition-all duration-300"
          >
            <ChevronsUp className="w-5 h-5 sm:w-8 sm:h-8 text-violet-600 dark:text-violet-400 stroke-[3px] group-hover:scale-110 group-active:scale-95 transition-transform filter drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
          </motion.button>

          <motion.button
            onClick={() => handleScroll('next')}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="p-1 sm:p-2 group transition-all duration-300"
          >
            <ChevronsDown className="w-5 h-5 sm:w-8 sm:h-8 text-violet-600 dark:text-violet-400 stroke-[3px] group-hover:scale-110 group-active:scale-95 transition-transform filter drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { MotionConfig } from 'motion/react';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollNavigation } from './components/ScrollNavigation';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
        <div className="portfolio-ambient" aria-hidden />
        <MotionConfig reducedMotion="user">
          <div className="relative z-[1]">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Projects />
              <Certifications />
              <Education />
              <Contact />
            </main>
            <Footer />
            <ScrollNavigation />
          </div>
        </MotionConfig>
      </div>
    </ThemeProvider>
  );
}
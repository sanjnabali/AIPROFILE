import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Achievements from '@/components/Achievements';
import Research from '@/components/Research';
import Timeline from '@/components/Timeline';
import Contact from '@/components/Contact';

export default function Portfolio() {
  useEffect(() => {
    // Scroll reveal animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);
    
    // Observe all elements with scroll-reveal class
    document.querySelectorAll('.scroll-reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-neural text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav backdrop-blur-lg border-b border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse-glow"></div>
              <span className="font-orbitron text-xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                SB
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="nav-link">00. HOME</a>
              <a href="#projects" className="nav-link">01. PROJECTS</a>
              <a href="#skills" className="nav-link">02. SKILLS</a>
              <a href="#achievements" className="nav-link">03. ACHIEVEMENTS</a>
              <a href="#research" className="nav-link">04. RESEARCH</a>
              <a href="#timeline" className="nav-link">05. TIMELINE</a>
              <a href="#contact" className="nav-link">06. CONTACT</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <Hero />
      <Projects />
      <Skills />
      <Achievements />
      <Research />
      <Timeline />
      <Contact />
      
      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse-glow"></div>
            <span className="font-orbitron text-lg font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Sanjna Bali
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            AI Engineer | Crafting Intelligence That Moves the World
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            © 2025 Sanjna Bali. Built with cutting-edge technology.
          </p>
        </div>
      </footer>
    </div>
  );
}

import { useEffect, useState } from 'react';

const achievements = [
  { value: 33, suffix: '%', title: 'Accuracy Improvement', description: 'Enhanced research query resolution at CSIO' },
  { value: 50, suffix: '%', title: 'Latency Reduction', description: 'Optimized system response time by half' },
  { value: 90, suffix: '%+', title: 'Detection Accuracy', description: 'Brain tumour classification precision' }
];

function Counter({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`counter-${target}`);
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [target, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, isVisible]);

  return (
    <div className="metric-value font-orbitron text-5xl font-bold mb-2" id={`counter-${target}`} data-testid={`counter-${target}`}>
      {count}{suffix}
    </div>
  );
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-orbitron text-sm font-bold text-primary mb-4 tracking-widest">03. // KEY ACHIEVEMENTS</h2>
          <h3 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              IMPACT METRICS
            </span>
          </h3>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Data-driven results from real-world AI implementations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.value}
              className="glass-card rounded-2xl p-8 text-center glow-hover-cyan scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`achievement-card-${index}`}
            >
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center glow-cyan">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
              </div>
              
              <Counter target={achievement.value} suffix={achievement.suffix} />
              
              <div className="font-mono text-sm text-foreground/70 mb-2">
                {achievement.title}
              </div>
              <div className="mt-4 text-xs font-mono text-foreground/50">
                {achievement.description}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 scroll-reveal">
          <div className="glass-card rounded-xl p-6 border-l-4 border-secondary">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <div>
                <h5 className="font-orbitron text-lg font-bold mb-2 text-foreground">🏆 1st Place - GNA Hackathon 2024</h5>
                <p className="text-sm text-foreground/70">
                  Won among 100 participants with Deepfake Detection AI solution. Secured direct internship offer.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 border-l-4 border-primary">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                </svg>
              </div>
              <div>
                <h5 className="font-orbitron text-lg font-bold mb-2 text-foreground">2X System Throughput</h5>
                <p className="text-sm text-foreground/70">
                  Doubled research query processing throughput while reducing manual effort by 40% at CSIO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

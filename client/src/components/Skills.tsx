import { useState } from 'react';

const coreSkills = [
  { name: 'Machine Learning', position: { top: '30%', left: '50%' } },
  { name: 'Deep Learning', position: { top: '70%', left: '50%' } },
  { name: 'NLP', position: { top: '50%', left: '30%' } },
  { name: 'Computer Vision', position: { top: '50%', left: '70%' } },
  { name: 'Generative AI', position: { top: '40%', left: '40%' } },
  { name: 'LLMs', position: { top: '60%', left: '60%' } }
];

const frameworks = [
  { name: 'TensorFlow', position: { top: '25%', left: '35%' } },
  { name: 'PyTorch', position: { top: '25%', left: '65%' } },
  { name: 'Scikit-Learn', position: { top: '75%', left: '35%' } },
  { name: 'Hugging Face', position: { top: '75%', left: '65%' } },
  { name: 'OpenCV', position: { top: '40%', left: '25%' } },
  { name: 'FAISS', position: { top: '60%', left: '75%' } }
];

const deployment = [
  { name: 'Flask', position: { top: '15%', left: '25%' } },
  { name: 'Docker', position: { top: '85%', left: '75%' } },
  { name: 'Google Cloud', position: { top: '15%', left: '75%' } },
  { name: 'Git/GitHub', position: { top: '85%', left: '25%' } }
];

const languages = ['Python', 'C/C++', 'SQL', 'Java'];

export default function Skills() {
  const [hoveredStar, setHoveredStar] = useState<string | null>(null);

  return (
    <section id="skills" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-orbitron text-sm font-bold text-accent mb-4 tracking-widest">02. // SKILLS & TOOLS</h2>
          <h3 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              THE CONSTELLATION
            </span>
          </h3>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            A universe of technologies interconnected to build intelligent systems.
          </p>
        </div>

        {/* Core AI Skills */}
        <div className="mb-16 scroll-reveal">
          <h4 className="font-orbitron text-2xl font-bold mb-8 text-center">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-secondary to-primary rounded-full glow-cyan">
              CORE AI EXPERTISE
            </span>
          </h4>
          
          {/* Constellation Visualization */}
          <div className="relative h-96 mb-8">
            {/* Core Skills - Cyan Stars */}
            {coreSkills.map((skill, index) => (
              <div key={skill.name}>
                <div
                  className="constellation-node absolute w-6 h-6 bg-secondary rounded-full glow-cyan transition-all duration-300 cursor-pointer transform hover:scale-150"
                  style={{ top: skill.position.top, left: skill.position.left, transform: 'translate(-50%, -50%)' }}
                  onMouseEnter={() => setHoveredStar(skill.name)}
                  onMouseLeave={() => setHoveredStar(null)}
                  data-testid={`skill-core-${skill.name.replace(/\s+/g, '-').toLowerCase()}`}
                />
                {hoveredStar === skill.name && (
                  <div
                    className="absolute bg-card border border-border rounded-lg px-3 py-1 text-sm font-mono text-secondary z-10"
                    style={{ 
                      top: `calc(${skill.position.top} - 40px)`, 
                      left: skill.position.left, 
                      transform: 'translateX(-50%)'
                    }}
                  >
                    {skill.name}
                  </div>
                )}
              </div>
            ))}
            
            {/* Framework Skills - Magenta Stars */}
            {frameworks.map((skill, index) => (
              <div key={skill.name}>
                <div
                  className="constellation-node absolute w-4 h-4 bg-accent rounded-full glow-pink transition-all duration-300 cursor-pointer transform hover:scale-150"
                  style={{ top: skill.position.top, left: skill.position.left, transform: 'translate(-50%, -50%)' }}
                  onMouseEnter={() => setHoveredStar(skill.name)}
                  onMouseLeave={() => setHoveredStar(null)}
                  data-testid={`skill-framework-${skill.name.replace(/\s+/g, '-').toLowerCase()}`}
                />
                {hoveredStar === skill.name && (
                  <div
                    className="absolute bg-card border border-border rounded-lg px-3 py-1 text-sm font-mono text-accent z-10"
                    style={{ 
                      top: `calc(${skill.position.top} - 40px)`, 
                      left: skill.position.left, 
                      transform: 'translateX(-50%)'
                    }}
                  >
                    {skill.name}
                  </div>
                )}
              </div>
            ))}
            
            {/* Deployment Skills - Amber Stars */}
            {deployment.map((skill, index) => (
              <div key={skill.name}>
                <div
                  className="constellation-node absolute w-3 h-3 bg-amber rounded-full glow-gold transition-all duration-300 cursor-pointer transform hover:scale-150"
                  style={{ top: skill.position.top, left: skill.position.left, transform: 'translate(-50%, -50%)' }}
                  onMouseEnter={() => setHoveredStar(skill.name)}
                  onMouseLeave={() => setHoveredStar(null)}
                  data-testid={`skill-deployment-${skill.name.replace(/\s+/g, '-').toLowerCase()}`}
                />
                {hoveredStar === skill.name && (
                  <div
                    className="absolute bg-card border border-border rounded-lg px-3 py-1 text-sm font-mono text-amber z-10"
                    style={{ 
                      top: `calc(${skill.position.top} - 40px)`, 
                      left: skill.position.left, 
                      transform: 'translateX(-50%)'
                    }}
                  >
                    {skill.name}
                  </div>
                )}
              </div>
            ))}
            
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Core skill connections */}
              <line x1="50%" y1="50%" x2="30%" y2="50%" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.3" />
              <line x1="50%" y1="50%" x2="70%" y2="50%" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.3" />
              <line x1="50%" y1="30%" x2="50%" y2="70%" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.3" />
              <line x1="40%" y1="40%" x2="60%" y2="60%" stroke="hsl(var(--secondary))" strokeWidth="1" opacity="0.3" />
            </svg>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 scroll-reveal">
          <div className="glass-card rounded-xl p-6">
            <h5 className="font-orbitron text-lg font-bold mb-4 text-secondary">Programming</h5>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span key={lang} className="px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-xs font-mono text-primary">
                  {lang}
                </span>
              ))}
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <h5 className="font-orbitron text-lg font-bold mb-4 text-accent">AI Specialization</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-xs font-mono text-accent">RAG</span>
              <span className="px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-xs font-mono text-accent">Transformers</span>
              <span className="px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-xs font-mono text-accent">Prompt Engineering</span>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <h5 className="font-orbitron text-lg font-bold mb-4 text-primary">Data Analysis</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-xs font-mono text-primary">EDA</span>
              <span className="px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-xs font-mono text-primary">Feature Engineering</span>
              <span className="px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-xs font-mono text-primary">Power BI</span>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-6">
            <h5 className="font-orbitron text-lg font-bold mb-4 text-amber">Cloud & Tools</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-amber/20 border border-amber/40 rounded-full text-xs font-mono text-amber">Google Cloud</span>
              <span className="px-3 py-1 bg-amber/20 border border-amber/40 rounded-full text-xs font-mono text-amber">Docker</span>
              <span className="px-3 py-1 bg-amber/20 border border-amber/40 rounded-full text-xs font-mono text-amber">CI/CD</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

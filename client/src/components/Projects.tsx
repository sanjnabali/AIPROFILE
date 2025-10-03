import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Brain Tumour Detection",
    description: "Privacy-preserving AI system using Federated Learning for brain tumour detection from MRI scans. Integrated ResNet-UNet, Inception, GoogLeNet, and Xception architectures achieving 90%+ accuracy.",
    tech: ["Federated Learning", "Computer Vision", "Deep Learning", "PyTorch"],
    period: "Nov 2024 - Present",
    status: "Ongoing Research",
    color: "from-primary to-secondary"
  },
  {
    id: 2,
    title: "Chest X-ray Interpreter",
    description: "GenAI-powered medical assistant using RAG to interpret Chest X-rays and medical PDFs. Leveraged Google Gemini and ChromaDB for real-time multimodal medical Q&A.",
    tech: ["Google Gemini", "RAG", "ChromaDB", "NLP"],
    period: "Mar - Apr 2025",
    status: "GooglexKaggle",
    color: "from-secondary to-accent"
  },
  {
    id: 3,
    title: "AI-Powered Research Agent", 
    description: "Python-based AI query agent integrating FAISS for Material Science research. Enhanced query resolution accuracy by 33% and reduced latency by 50%, increasing throughput 2x.",
    tech: ["FAISS", "LLMs", "RAG", "Flask"],
    period: "Jun - Aug 2024",
    status: "CSIO Chandigarh",
    color: "from-accent to-primary"
  },
  {
    id: 4,
    title: "Media Investment Planner",
    description: "AI-driven media investment planner using ML models. Improved targeting and ROI predictions through regression-based forecasting for optimized marketing spend.",
    tech: ["Machine Learning", "Scikit-learn", "Matplotlib", "Python"],
    period: "Jul - Sep 2024",
    status: "NetElixir Hackathon",
    color: "from-primary to-secondary"
  },
  {
    id: 5,
    title: "Deepfake Detection System",
    description: "AI solution for fake deep synthesis and deepfake detection. Won 1st place among 100 participants, earning direct internship offer and HACKTIFY award.",
    tech: ["Computer Vision", "Deep Learning", "OpenCV", "AI"],
    period: "May 2024",
    status: "🏆 1ST PLACE",
    color: "from-secondary to-accent"
  }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-orbitron text-sm font-bold text-secondary mb-4 tracking-widest">01. // PROJECTS</h2>
          <h3 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              AI PLANETS
            </span>
          </h3>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Each project is a universe of innovation. Hover to explore the tech cosmos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="planet-card glass-card rounded-2xl p-6 glow-hover-cyan scroll-reveal transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              data-testid={`project-card-${project.id}`}
            >
              <div className="relative mb-6">
                {/* Planet Orb */}
                <div className={`w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full bg-gradient-to-br ${project.color} relative`}>
                  <div className="absolute inset-0 rounded-full animate-rotate-slow"></div>
                  {hoveredProject === project.id && (
                    <>
                      <div className="absolute -inset-4 border-2 border-dashed border-primary/50 rounded-full animate-rotate-slow opacity-60"></div>
                      <div className="absolute -inset-8 border border-dashed border-secondary/30 rounded-full animate-rotate-slow opacity-40"></div>
                    </>
                  )}
                </div>
                
                {/* Project Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-orbitron font-bold text-lg glow-purple">
                  {String(project.id).padStart(2, '0')}
                </div>
                
                {/* Status Badge */}
                {project.status.includes('🏆') && (
                  <div className="absolute top-2 left-2 px-3 py-1 bg-amber/20 border border-amber rounded-full text-xs font-mono text-amber glow-gold">
                    {project.status}
                  </div>
                )}
              </div>
              
              <h4 className="font-orbitron text-xl font-bold mb-3 text-secondary" data-testid={`project-title-${project.id}`}>
                {project.title}
              </h4>
              
              <p className="text-foreground/70 text-sm mb-4 leading-relaxed" data-testid={`project-description-${project.id}`}>
                {project.description}
              </p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-xs font-mono text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-foreground/50">{project.period}</span>
                <button className="font-mono text-secondary hover:text-accent transition-colors" data-testid={`project-explore-${project.id}`}>
                  EXPLORE →
                </button>
              </div>
            </div>
          ))}
          
          {/* Additional Project Slot */}
          <div className="planet-card glass-card rounded-2xl p-6 border-2 border-dashed border-border/50 flex items-center justify-center scroll-reveal" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </div>
              <h4 className="font-orbitron text-lg font-bold mb-2 text-foreground/50">More Projects</h4>
              <p className="text-foreground/40 text-sm">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const timelineEvents = [
  {
    id: 1,
    title: "ML & GenAI Intern",
    organization: "CSIO Chandigarh - Central Scientific Instrumentation Research",
    period: "Jun - Aug 2024",
    description: "Developed Python-based AI-powered RAG query agent integrating FAISS. Enhanced research query resolution by 33% and reduced latency by 50%. Optimized system throughput 2x while decreasing processing time from 10 to 3 minutes.",
    technologies: ["LLMs", "RAG", "FAISS", "Python"],
    side: "left"
  },
  {
    id: 2,
    title: "GNA Hackathon Winner",
    organization: "GNA Inter-University Hackathon 2024",
    period: "May 2024",
    description: "Achieved 1st place out of 100 participants with Deepfake Detection AI solution. Built system for fake deep synthesis detection using Computer Vision and Deep Learning. Secured direct internship offer and HACKTIFY award.",
    technologies: ["Computer Vision", "Deep Learning", "OpenCV", "AI"],
    side: "right",
    award: "🏆 1ST PLACE"
  },
  {
    id: 3,
    title: "Business Development Lead",
    organization: "AIESEC Jalandhar - International Youth Organization",
    period: "Mar - Sep 2023",
    description: "Led team organizing LPU's largest career fair with 1000+ participants and 25+ corporate leaders. Established strategic collaborations with national and international partners, enhancing cross-cultural exchange programs.",
    technologies: ["Leadership", "Business Dev", "Events", "Marketing"],
    side: "left"
  },
  {
    id: 4,
    title: "B.Tech Computer Science",
    organization: "GNA University - Punjab, India",
    period: "2022 - 2026",
    description: "Specializing in AI/ML with CGPA 8.5. Coursework includes Machine Learning, Deep Learning, Data Structures & Algorithms, Linear Algebra, Probability & Statistics. Google Cloud certified.",
    technologies: ["Machine Learning", "Deep Learning", "Data Structures", "AI"],
    side: "right"
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-orbitron text-sm font-bold text-accent mb-4 tracking-widest">05. // CAREER TIMELINE</h2>
          <h3 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              AURORA PATH
            </span>
          </h3>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Journey through innovation, from learning to leading.
          </p>
        </div>

        <div className="relative">
          {/* Aurora line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full aurora-gradient hidden md:block"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className="relative scroll-reveal" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="md:flex md:items-center md:space-x-8">
                  <div className={`md:w-5/12 ${event.side === 'right' ? 'md:order-2' : 'md:text-right'} mb-4 md:mb-0`}>
                    <div className="glass-card rounded-xl p-6 glow-hover-cyan" data-testid={`timeline-card-${event.id}`}>
                      {event.award && (
                        <div className="flex items-center justify-between mb-2">
                          <span className="px-3 py-1 bg-amber/20 border border-amber rounded-full text-xs font-mono text-amber">
                            {event.award}
                          </span>
                        </div>
                      )}
                      <h4 className="font-orbitron text-xl font-bold mb-2 text-secondary" data-testid={`timeline-title-${event.id}`}>
                        {event.title}
                      </h4>
                      <p className="text-foreground/70 text-sm mb-3" data-testid={`timeline-org-${event.id}`}>
                        {event.organization}
                      </p>
                      <p className="text-foreground/60 text-sm leading-relaxed mb-3" data-testid={`timeline-description-${event.id}`}>
                        {event.description}
                      </p>
                      <div className={`flex flex-wrap gap-2 ${event.side === 'left' ? 'md:justify-end' : 'justify-start'}`}>
                        {event.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-secondary/20 border border-secondary/40 rounded text-xs font-mono text-secondary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex md:w-2/12 justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center glow-cyan z-10">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"></path>
                      </svg>
                    </div>
                  </div>
                  
                  <div className={`md:w-5/12 ${event.side === 'left' ? 'md:order-2' : ''}`}>
                    <div className="font-orbitron text-lg font-bold text-secondary mb-2" data-testid={`timeline-period-${event.id}`}>
                      {event.period}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

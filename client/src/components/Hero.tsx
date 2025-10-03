import profileImage from '@assets/Sanjnabali_PHOTO_1759503325488.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden neural-galaxy">
      {/* Animated Background Particles - CSS Only */}
      <div className="absolute inset-0 z-0">
        <div className="neural-network-bg">
          {/* Floating particles */}
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
          
          {/* Neural network nodes */}
          {[...Array(20)].map((_, i) => (
            <div
              key={`node-${i}`}
              className="neural-node"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* Pulsing sphere in center */}
          <div className="neural-sphere-center">
            <div className="sphere-inner"></div>
            <div className="sphere-ring"></div>
            <div className="sphere-ring-2"></div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Professional Photo */}
        <div className="mb-8 flex justify-center scroll-reveal">
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden glow-cyan animate-pulse-glow">
            <img 
              src={profileImage} 
              alt="Sanjna Bali - AI Engineer" 
              className="w-full h-full object-cover"
              data-testid="profile-image"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 mix-blend-overlay"></div>
          </div>
        </div>
        
        <h1 className="font-orbitron text-4xl md:text-6xl lg:text-7xl font-bold mb-6 scroll-reveal">
          <span className="bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent animate-text-glow">
            SANJNA BALI
          </span>
        </h1>
        
        <div className="font-orbitron text-xl md:text-2xl lg:text-3xl mb-4 text-foreground/90 scroll-reveal">
          AI ENGINEER
        </div>
        
        <p className="font-inter text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed scroll-reveal">
          Crafting Intelligence That Moves the World
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-reveal">
          <a 
            href="#contact" 
            className="ai-button px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-mono text-sm font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 transform hover:scale-105"
            data-testid="button-hire"
          >
            HIRE ME
          </a>
          <a 
            href="#projects" 
            className="ai-button px-8 py-3 border-2 border-secondary rounded-full font-mono text-sm font-semibold hover:bg-secondary hover:text-background transition-all duration-300 transform hover:scale-105"
            data-testid="button-projects"
          >
            VIEW WORK
          </a>
        </div>
        
        <div className="flex justify-center space-x-6 text-foreground/70 scroll-reveal">
          <a 
            href="mailto:sanjnabali8@gmail.com" 
            className="hover:text-secondary transition-colors duration-300 transform hover:scale-110"
            data-testid="link-email"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors duration-300 transform hover:scale-110"
            data-testid="link-linkedin"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors duration-300 transform hover:scale-110"
            data-testid="link-github"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#projects" className="text-secondary" data-testid="scroll-indicator">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

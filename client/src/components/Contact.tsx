import { useState } from 'react';

const contactOptions = [
  {
    id: 'research',
    icon: '🔬',
    title: 'Research Collaboration',
    description: 'Explore AI research & publications opportunities',
    color: 'hover:border-secondary hover:bg-secondary/10'
  },
  {
    id: 'product',
    icon: '💼',
    title: 'Product Development',
    description: 'Build innovative AI solutions together',
    color: 'hover:border-primary hover:bg-primary/10'
  },
  {
    id: 'engineering',
    icon: '⚙️',
    title: 'Engineering Role',
    description: 'Full-time AI/ML engineering positions',
    color: 'hover:border-accent hover:bg-accent/10'
  }
];

const contactMethods = [
  {
    type: 'email',
    icon: '📧',
    label: 'Email',
    value: 'sanjnabali8@gmail.com',
    href: 'mailto:sanjnabali8@gmail.com'
  },
  {
    type: 'phone',
    icon: '📱',
    label: 'Phone',
    value: '+91 8360578672',
    href: 'tel:+918360578672'
  },
  {
    type: 'linkedin',
    icon: '💼',
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://linkedin.com'
  },
  {
    type: 'github',
    icon: '💻',
    label: 'GitHub',
    value: 'View my code',
    href: 'https://github.com'
  }
];

export default function Contact() {
  const [selectedInterest, setSelectedInterest] = useState<string | null>(null);

  const handleInterestSelect = (interest: string) => {
    setSelectedInterest(interest);
    // Here you could implement logic to generate tailored resume/response
    console.log(`Interest selected: ${interest}`);
  };

  return (
    <section id="contact" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative flex items-center justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-orbitron text-sm font-bold text-primary mb-4 tracking-widest">06. // CONTACT</h2>
          <h3 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PORTAL GATEWAY
            </span>
          </h3>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Let's build the future of AI together. Choose your path.
          </p>
        </div>

        <div className="glass-card hologram rounded-3xl p-8 md:p-12 scroll-reveal">
          {/* AI Assistant Hologram */}
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 flex items-center justify-center glow-cyan animate-pulse-glow">
              <svg className="w-16 h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
            </div>
            <p className="font-orbitron text-xl text-foreground/90 mb-2">AI Assistant Activated</p>
            <p className="text-foreground/60 text-sm">Select your engagement type for a tailored response</p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactOptions.map((option) => (
              <button
                key={option.id}
                className={`glass-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 glow-hover-cyan group border border-border ${option.color}`}
                onClick={() => handleInterestSelect(option.id)}
                data-testid={`contact-option-${option.id}`}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center glow-cyan group-hover:animate-pulse">
                  <span className="text-2xl">{option.icon}</span>
                </div>
                <h4 className="font-orbitron text-lg font-bold mb-2 text-secondary">{option.title}</h4>
                <p className="text-foreground/60 text-sm">{option.description}</p>
              </button>
            ))}
          </div>

          {/* Contact Information */}
          <div className="border-t border-border pt-8">
            <h4 className="font-orbitron text-xl font-bold mb-6 text-center text-foreground">Direct Communication Channels</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactMethods.map((method) => (
                <a
                  key={method.type}
                  href={method.href}
                  target={method.type === 'linkedin' || method.type === 'github' ? '_blank' : undefined}
                  rel={method.type === 'linkedin' || method.type === 'github' ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-4 glass-card rounded-xl p-4 hover:scale-105 transition-all duration-300 glow-hover-cyan"
                  data-testid={`contact-${method.type}`}
                >
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{method.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-mono text-sm text-foreground/50">{method.label}</div>
                    <div className="font-mono text-sm text-secondary">{method.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Download Resume */}
          <div className="mt-8 text-center">
            <button 
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-orbitron text-lg font-bold hover:shadow-2xl hover:shadow-secondary/50 transition-all duration-300 transform hover:scale-105 glow-cyan"
              data-testid="download-resume"
            >
              <svg className="inline-block w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              DOWNLOAD RESUME
            </button>
          </div>

          {selectedInterest && (
            <div className="mt-6 p-4 bg-secondary/10 border border-secondary/30 rounded-lg text-center">
              <p className="text-secondary font-mono text-sm">
                Interest noted: <span className="font-bold capitalize">{selectedInterest}</span>
              </p>
              <p className="text-foreground/60 text-xs mt-1">
                Tailored information will be provided based on your selection.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';

export default function Research() {
  const [crystalHovered, setCrystalHovered] = useState(false);

  return (
    <section id="research" className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-orbitron text-sm font-bold text-secondary mb-4 tracking-widest">04. // RESEARCH & PUBLICATIONS</h2>
          <h3 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              DATA CRYSTALS
            </span>
          </h3>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Exploring the frontiers of AI research and innovation.
          </p>
        </div>

        {/* Research Paper 1 */}
        <div 
          className="crystal-card hologram rounded-3xl p-8 md:p-12 scroll-reveal cursor-pointer"
          onMouseEnter={() => setCrystalHovered(true)}
          onMouseLeave={() => setCrystalHovered(false)}
          data-testid="research-crystal-federated-learning"
        >
          <div className="flex items-start mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary/30 to-primary/30 flex items-center justify-center flex-shrink-0 glow-cyan">
              <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <div className="ml-6 flex-1">
              <div className="flex items-center justify-between mb-3">
                <span className="px-3 py-1 bg-secondary/20 border border-secondary/40 rounded-full text-xs font-mono text-secondary">
                  ONGOING RESEARCH
                </span>
                <span className="font-mono text-sm text-foreground/50">Nov 2024 - Present</span>
              </div>
              <h4 className="font-orbitron text-2xl md:text-3xl font-bold mb-4 text-foreground" data-testid="research-title">
                Privacy-Preserving Brain Tumour Detection using Federated Learning
              </h4>
            </div>
          </div>

          <div className="mb-6">
            <h5 className="font-orbitron text-lg font-bold mb-3 text-secondary">Abstract</h5>
            <p className="text-foreground/70 leading-relaxed mb-4" data-testid="research-abstract">
              This research introduces a novel privacy-preserving artificial intelligence framework for brain tumour detection from MRI scans using Federated Learning architecture. The system enables collaborative model training across multiple healthcare institutions without sharing sensitive patient data, addressing critical privacy concerns in medical AI applications.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Our approach integrates state-of-the-art deep learning architectures including ResNet-UNet for semantic segmentation, Inception and GoogLeNet for multi-scale feature extraction, and Xception for efficient depth-wise separable convolutions. The federated learning framework achieves classification and segmentation accuracy exceeding 90% while maintaining complete data sovereignty for participating institutions.
            </p>
          </div>

          <div className="mb-6">
            <h5 className="font-orbitron text-lg font-bold mb-3 text-primary">Key Contributions</h5>
            <ul className="space-y-2">
              {[
                'Designed and implemented a federated learning architecture enabling distributed model training across healthcare institutions',
                'Developed hybrid deep learning pipeline combining ResNet-UNet, Inception, GoogLeNet, and Xception architectures',
                'Achieved 90%+ accuracy in tumour classification and segmentation while preserving patient data privacy',
                'Demonstrated scalable framework for multi-institutional AI collaboration in healthcare'
              ].map((contribution, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-secondary mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-foreground/70">{contribution}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="font-orbitron text-lg font-bold mb-3 text-accent">Technologies & Methods</h5>
            <div className="flex flex-wrap gap-3">
              {['Federated Learning', 'ResNet-UNet', 'Inception', 'GoogLeNet', 'Xception', 'PyTorch', 'Medical Imaging', 'Privacy-Preserving AI'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-secondary/20 border border-secondary/40 rounded-full text-sm font-mono text-secondary">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-border">
            <div className="flex items-center space-x-4">
              <span className="font-mono text-sm text-foreground/50">Status:</span>
              <span className="px-3 py-1 bg-accent/20 border border-accent/40 rounded-full text-xs font-mono text-accent animate-pulse">
                🔬 ONGOING
              </span>
            </div>
            <button 
              className="px-6 py-2 bg-gradient-to-r from-secondary to-primary rounded-full font-mono text-sm font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 transform hover:scale-105"
              data-testid="research-details-button"
            >
              VIEW DETAILS →
            </button>
          </div>
        </div>

        {/* Future Research Placeholder */}
        <div className="mt-8 glass-card rounded-2xl p-8 border-2 border-dashed border-border/50 text-center scroll-reveal">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </div>
          <h4 className="font-orbitron text-xl font-bold mb-2 text-foreground/50">Future Publications</h4>
          <p className="text-foreground/40 text-sm">More research coming soon...</p>
        </div>
      </div>
    </section>
  );
}

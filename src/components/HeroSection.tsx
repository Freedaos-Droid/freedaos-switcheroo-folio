import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faPalette, faRocket } from '@fortawesome/free-solid-svg-icons';

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleProjectsClick = () => {
    // Smooth scroll or navigation logic can be added here
    console.log('Navigating to projects...');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-hero-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Floating icons */}
        <div className="absolute -top-20 -left-20 hidden lg:block">
          <div className="floating-animation opacity-20 dark:opacity-40">
            <FontAwesomeIcon icon={faCode} className="text-6xl text-primary" />
          </div>
        </div>
        <div className="absolute -top-16 -right-24 hidden lg:block">
          <div className="floating-animation opacity-20 dark:opacity-40" style={{ animationDelay: '1s' }}>
            <FontAwesomeIcon icon={faPalette} className="text-5xl text-accent" />
          </div>
        </div>
        <div className="absolute -bottom-20 left-1/4 hidden lg:block">
          <div className="floating-animation opacity-20 dark:opacity-40" style={{ animationDelay: '3s' }}>
            <FontAwesomeIcon icon={faRocket} className="text-4xl text-hero-accent" />
          </div>
        </div>

        {/* Main content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Name */}
          <h1 className="font-poppins font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-6 leading-tight">
            <span className="block gradient-text glow-text animate-slide-in-up">
              Adeboye
            </span>
            <span className="block gradient-text glow-text animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              Freedaos
            </span>
          </h1>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="font-inter text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
              <span className="font-medium">Designing experiences</span> that{' '}
              <span className="text-primary font-semibold">connect</span>,{' '}
              <span className="text-accent font-semibold">inspire</span>, and{' '}
              <span className="text-hero-accent font-semibold">captivate</span>.
            </p>
          </div>

          {/* CTA Button */}
          <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <button
              onClick={handleProjectsClick}
              className="hero-button group text-lg sm:text-xl font-semibold"
              aria-label="View Adeboye's Projects"
            >
              <span className="relative z-10 flex items-center gap-3">
                View My Projects
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="transition-transform duration-300 group-hover:translate-x-2" 
                />
              </span>
            </button>
          </div>

          {/* Decorative line */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}>
            <div className="mt-16 mx-auto w-24 h-1 bg-gradient-to-r from-primary via-accent to-hero-accent rounded-full" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce opacity-60">
            <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
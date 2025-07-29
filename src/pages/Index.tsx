import React from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { HeroSection } from '@/components/HeroSection';

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background transition-colors duration-500">
      {/* Theme Toggle - Fixed position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <HeroSection />
    </main>
  );
};

export default Index;

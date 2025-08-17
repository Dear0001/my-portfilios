import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const skills = ['Java', 'Spring Boot', 'Next.js', 'PostgreSQL', 'Blockchain'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 hero-gradient rounded-full mix-blend-multiply filter blur-xl opacity-20 float"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20 float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20 float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Dalen Phea</span> 👋
          </h1>
        </div>
        
        <div className="fade-in-delay-1">
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full-Stack Developer
          </p>
          <div className="text-lg md:text-xl text-foreground/80 mb-8 h-8">
            <span className="typing-cursor">
              {skills[currentSkill]}
            </span>
          </div>
        </div>

        <div className="fade-in-delay-2 flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="hero" size="lg" onClick={scrollToProjects}>
            View My Work
          </Button>
          <Button variant="glass" size="lg" onClick={scrollToContact}>
            Contact Me
          </Button>
        </div>

        <div className="fade-in-delay-3 flex justify-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="p-3 glass rounded-full hover-scale hover:glow-effect transition-all">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="p-3 glass rounded-full hover-scale hover:glow-effect transition-all">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:dalen@example.com"
             className="p-3 glass rounded-full hover-scale hover:glow-effect transition-all">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';

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

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Dalen_Phea_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-20 w-72 h-72 hero-gradient rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute bottom-20 left-1/3 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-20"
        />
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Dalen Phea</span> 👋
          </h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full-Stack Developer | Java & Spring Specialist
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-4">
            Turning ideas into clean, scalable, and efficient software
          </p>
          <div className="text-lg md:text-xl text-foreground/80 mb-8 h-8">
            <span className="typing-cursor">
              {skills[currentSkill]}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button variant="hero" size="lg" onClick={downloadCV}>
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
          <Button variant="glass" size="lg" onClick={scrollToContact}>
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-6"
        >
          <motion.a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-3 glass rounded-full hover:glow-effect transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass rounded-full hover:glow-effect transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a 
            href="mailto:dalen@example.com"
            className="p-3 glass rounded-full hover:glow-effect transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
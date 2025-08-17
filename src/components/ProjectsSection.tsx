import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const projects = [
    {
      title: "BugZapper Web",
      description: "A comprehensive web application developed during 2023-2024. Built with modern full-stack technologies including Spring Boot backend with MyBatis for data access, PostgreSQL database, and Next.js frontend with NextAuth authentication and OneSingle integration.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop",
      tags: ["Spring Boot", "MyBatis", "PostgreSQL", "Next.js", "NextAuth", "OneSingle", "JsonB"],
      github: "https://github.com",
      demo: "https://demo.com",
      role: "Developer (Backend and Frontend)",
      period: "2023-2024"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application built with Spring Boot and Next.js, featuring user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["Spring Boot", "Next.js", "PostgreSQL", "JWT", "Stripe API"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Task Management API",
      description: "RESTful API for task management with Spring Security, JWT authentication, and comprehensive documentation using Swagger.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tags: ["Spring Boot", "Spring Security", "MySQL", "Swagger", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Real-time Chat Application",
      description: "WebSocket-based chat application with Spring Boot backend and React frontend, featuring real-time messaging and user presence.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=500&h=300&fit=crop",
      tags: ["Spring Boot", "WebSocket", "React", "PostgreSQL", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Microservices Dashboard",
      description: "Monitoring dashboard for microservices architecture using Spring Cloud Eureka for service discovery and monitoring.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tags: ["Spring Cloud", "Eureka", "Docker", "Kubernetes", "React"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "University Portal",
      description: "Student information system for university management with course enrollment, grade tracking, and administrative features.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&h=300&fit=crop",
      tags: ["Java", "Spring MVC", "Oracle", "JSP", "Bootstrap"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development, 
            Java Spring technologies, and modern web applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card group overflow-hidden h-full">
                <motion.div 
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <motion.img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute bottom-4 left-4 flex gap-2">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <Button size="sm" variant="glass" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <Button size="sm" variant="glass" asChild>
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="space-y-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold group-hover:gradient-text transition-all">
                      {project.title}
                    </h3>
                    {project.role && (
                      <div className="text-sm text-accent font-medium">
                        {project.role} • {project.period}
                      </div>
                    )}
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.div
                          key={tagIndex}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Badge variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
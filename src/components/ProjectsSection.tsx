import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application built with Spring Boot and Next.js, featuring user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tags: ["Spring Boot", "Next.js", "PostgreSQL", "JWT", "Stripe API"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure voting application using Hyperledger Fabric blockchain technology to ensure transparency and immutability of votes.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop",
      tags: ["Hyperledger Fabric", "Java", "React", "Smart Contracts"],
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in full-stack development, 
            blockchain technology, and modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover-scale group overflow-hidden">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <Button size="sm" variant="glass" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="glass" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
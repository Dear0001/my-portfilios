import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Coffee, Globe, Server, Database, Plus, Cloud } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Java Development",
      icon: Coffee,
      skills: [
        { name: "J2SE (Core Java & OOP)", level: 85 },
        { name: "J2EE (Maven & MVC)", level: 80 },
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "HTML/CSS/JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js & TypeScript", level: 80 },
        { name: "JSON", level: 85 },
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Spring Framework",
      icon: Server,
      skills: [
        { name: "Spring Boot", level: 80 },
        { name: "Spring JPA & MyBatis", level: 75 },
        { name: "Spring Security & JWT", level: 70 },
        { name: "RESTful Web Services", level: 85 },
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "Oracle", level: 75 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 85 },
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Additional Skills",
      icon: Plus,
      skills: [
        { name: "Linux", level: 70 },
        { name: "Docker", level: 65 },
        { name: "GitHub", level: 85 },
        { name: "Hyperledger Fabric", level: 60 },
      ],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "Spring Cloud Eureka", level: 65 },
      ],
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="glass-card hover-scale group">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 hero-gradient rounded-lg group-hover:scale-110 transition-transform">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress ${isVisible ? 'animate' : ''}`}
                        style={{ '--progress': `${skill.level}%` } as React.CSSProperties}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
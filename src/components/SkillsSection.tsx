import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Coffee, Globe, Server, Database, Plus, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

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
        { name: "J2SE (Basic Java and OOP concepts)", level: 85 },
        { name: "J2EE (Maven and MVC pattern)", level: 80 },
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "HTML, CSS, JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Next.js, TypeScript", level: 80 },
        { name: "JSON", level: 85 },
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Spring Framework",
      icon: Server,
      skills: [
        { name: "Spring Boot", level: 80 },
        { name: "Spring JPA, MyBatis Data Access", level: 75 },
        { name: "Spring Security, JSON Web Token", level: 70 },
        { name: "Spring RESTful Web Service", level: 85 },
        { name: "Spring Cloud", level: 65 },
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
      title: "Additional Technologies",
      icon: Plus,
      skills: [
        { name: "Linux", level: 70 },
        { name: "Docker", level: 65 },
        { name: "GitHub (Version Control)", level: 85 },
        { name: "Spring Cloud Eureka", level: 65 },
        { name: "Oracle", level: 75 },
        { name: "Hyperledger Fabric", level: 60 },
      ],
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card group h-full">
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="h-full"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 hero-gradient rounded-lg transition-transform"
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
              
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <motion.div 
                            className="skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
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

export default SkillsSection;
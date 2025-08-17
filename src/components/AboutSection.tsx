import React from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, BookOpen, Calendar } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const AboutSection = () => {
  const education = [
    {
      title: "Bachelor's in Information Technology Engineering",
      institution: "Royal Phnom Penh University",
      status: "Currently Pursuing",
      icon: GraduationCap,
    },
    {
      title: "Full-Stack Web Development Program",
      institution: "HRD Center",
      status: "Currently Enrolled",
      icon: BookOpen,
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 hero-gradient mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <img 
                  src={profileImage} 
                  alt="Dalen Phea" 
                  className="w-full h-full object-cover rounded-2xl hover-scale transition-all duration-500"
                />
                <div className="absolute inset-0 rounded-2xl ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-500"></div>
              </div>
            </div>
          </div>

          <div className="fade-in-delay-1">
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              I am currently pursuing a bachelor's degree in Information Technology Engineering at 
              <span className="gradient-text font-semibold"> Royal Phnom Penh University</span>.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-8">
              I am also enrolled in a Full-Stack Web Development program at 
              <span className="gradient-text font-semibold"> HRD Center</span>, where I am gaining hands-on 
              experience in front-end (React, Next.js), back-end (Java Spring), and database 
              (MySQL, Postgres) technologies.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed mb-12">
              I am eager to apply my academic knowledge and practical skills to contribute to 
              innovative projects and make a meaningful impact in the tech industry.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Education & Experience</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, index) => (
              <Card key={index} className="glass-card hover-scale">
                <div className="flex items-start gap-4">
                  <div className="p-3 hero-gradient rounded-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground mb-2">{item.institution}</p>
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <Calendar className="w-4 h-4" />
                      {item.status}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
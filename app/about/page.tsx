"use client";

import { useState, useEffect } from 'react';
import { Github, Mail, Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const techStack = [
  { name: 'Golang', color: 'bg-blue-500' },
  { name: 'PHP', color: 'bg-purple-500' },
  { name: 'JavaScript', color: 'bg-yellow-400' },
  { name: 'Microservices', color: 'bg-green-500' },
  { name: 'API Development', color: 'bg-blue-600' },
  { name: 'Docker', color: 'bg-blue-400' },
  { name: 'Git', color: 'bg-orange-500' },
  { name: 'Agile/Scrum', color: 'bg-purple-600' },
  { name: 'MySQL', color: 'bg-blue-700' },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16">
        <div className={`transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* Markdown-style header */}
          <div className="space-y-8">
            <h1 className="text-xl">
              <span className="text-muted-foreground">##</span> About Me
            </h1>

            {/* Content in markdown-style list */}
            <div className="space-y-4 text-sm leading-relaxed">
              <div className="flex gap-2">
                <span className="text-muted-foreground">-</span>
                <span>Hey, I'm Iman! A software engineer who loves turning coffee into code ☕</span>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">-</span>
                <span>Passionate about startup culture - move fast, break things, fix them later 🚀</span>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">-</span>
                <span>Building microservices and APIs that actually work (most of the time) 😅</span>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">-</span>
                <span>Currently crafting code at Kitabisa.com since March 2019</span>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground">-</span>
                <span>When I'm not coding, you'll find me gaming, taking photos, or climbing mountains 🏔️</span>
              </div>
            </div>

            {/* Tech stack */}
            <div className="space-y-4">
              <h2 className="text-lg">
                <span className="text-muted-foreground">###</span> My Arsenal
              </h2>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-muted text-xs rounded-md border border-border"
                  >
                    <div className={`w-2 h-2 rounded-full ${tech.color}`}></div>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Current focus */}
            <div className="space-y-4">
              <h2 className="text-lg">
                <span className="text-muted-foreground">###</span> What I'm Up To
              </h2>
              <div className="bg-muted/30 border border-border rounded-md p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Building microservices that don't break (hopefully) at Kitabisa.com</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-yellow-500">⚡</span>
                    <span>Making APIs that frontend devs actually want to use</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="text-blue-500">📚</span>
                    <span>Writing docs that people actually read (fingers crossed)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h2 className="text-lg">
                <span className="text-muted-foreground">###</span> Links
              </h2>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="outline" size="sm">
                  <a href="https://github.com/gobliggg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github className="h-3 w-3" />
                    GitHub
                    <ExternalLink className="h-2 w-2" />
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="sm">
                  <a href="mailto:developer.iman@gmail.com" className="flex items-center gap-2">
                    <Mail className="h-3 w-3" />
                    Email
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="sm">
                  <a href="https://www.linkedin.com/in/gobliggg" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <ExternalLink className="h-3 w-3" />
                    LinkedIn
                    <ExternalLink className="h-2 w-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
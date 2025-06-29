"use client";

import { useState, useEffect } from 'react';
import { Github, ExternalLink, Folder, Star, GitFork } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const projects = [
  {
    name: 'kitabisa-platform',
    description: 'Online crowdfunding platform facilitating over $40 million donations across Indonesia',
    language: 'Golang',
    stars: 156,
    forks: 34,
    tech: ['Golang', 'Microservices', 'API Development', 'Docker'],
    github: 'https://github.com/gobliggg',
    demo: 'https://kitabisa.com'
  },
  {
    name: 'haruka-edu-platform',
    description: 'Education technology platform for online degree and training programs',
    language: 'PHP',
    stars: 89,
    forks: 23,
    tech: ['PHP', 'JavaScript', 'MySQL', 'Agile/Scrum'],
    github: 'https://github.com/gobliggg',
    demo: 'https://harukaedu.com'
  },
  {
    name: 'smooets-outsourcing',
    description: 'Web development projects for American-grade quality software outsourcing',
    language: 'PHP',
    stars: 67,
    forks: 15,
    tech: ['PHP', 'HTML5', 'CSS', 'JavaScript', 'CMS'],
    github: 'https://github.com/gobliggg',
    demo: null
  },
  {
    name: 'kpm-cooperative',
    description: 'Savings and loans cooperative management system',
    language: 'PHP',
    stars: 45,
    forks: 8,
    tech: ['PHP', 'ExtJS', 'MySQL', 'Web Application'],
    github: 'https://github.com/gobliggg',
    demo: null
  },
  {
    name: 'api-gateway',
    description: 'High-performance API gateway for microservices architecture',
    language: 'Golang',
    stars: 78,
    forks: 19,
    tech: ['Golang', 'Microservices', 'Docker', 'API Gateway'],
    github: 'https://github.com/gobliggg',
    demo: null
  },
  {
    name: 'web-services',
    description: 'Reusable web services and libraries for front-end and mobile developers',
    language: 'Golang',
    stars: 123,
    forks: 28,
    tech: ['Golang', 'REST APIs', 'Documentation', 'Libraries'],
    github: 'https://github.com/gobliggg',
    demo: null
  }
];

const languageColors: { [key: string]: string } = {
  'Golang': 'bg-blue-500',
  'PHP': 'bg-purple-500',
  'TypeScript': 'bg-blue-600',
  'JavaScript': 'bg-yellow-400',
  'React': 'bg-blue-500',
  'Next.js': 'bg-gray-600',
  'Python': 'bg-yellow-500',
  'Go': 'bg-blue-500',
  'Rust': 'bg-orange-600',
};

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-16">
        <div className={`transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* CLI-style header */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-500">$</span>
                <span className="text-muted-foreground">ls ~/projects</span>
              </div>
              <div className="text-xs text-muted-foreground pl-4">
                Found {projects.length} repositories (some actually work! 😅)
              </div>
            </div>

            {/* Projects grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <Card key={index} className="group hover:shadow-md transition-all duration-200 hover:scale-[1.02]">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Folder className="h-4 w-4 text-blue-500" />
                        <CardTitle className="text-sm font-mono">{project.name}</CardTitle>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Star className="h-3 w-3" />
                        {project.stars}
                      </div>
                    </div>
                    <CardDescription className="text-xs leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {/* Language and stats */}
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${languageColors[project.language] || 'bg-gray-500'}`}></div>
                          <span>{project.language}</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <GitFork className="h-3 w-3" />
                            {project.forks}
                          </div>
                        </div>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-0.5 bg-muted text-xs rounded border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Actions */}
                      <div className="flex gap-2 pt-2">
                        <Button asChild variant="outline" size="sm" className="h-7 text-xs">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                            <Github className="h-3 w-3" />
                            Code
                          </a>
                        </Button>
                        
                        {project.demo && (
                          <Button asChild variant="outline" size="sm" className="h-7 text-xs">
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                              <ExternalLink className="h-3 w-3" />
                              Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Footer stats */}
            <div className="bg-muted/30 border border-border rounded-md p-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                <div>
                  <div className="text-muted-foreground">Total repos</div>
                  <div className="font-mono">{projects.length}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Total stars</div>
                  <div className="font-mono">{projects.reduce((acc, p) => acc + p.stars, 0)}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Languages</div>
                  <div className="font-mono">{new Set(projects.map(p => p.language)).size}</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Last updated</div>
                  <div className="font-mono">Just now (probably) 🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
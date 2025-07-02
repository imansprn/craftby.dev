"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Welcome to my personal space where I share projects, thoughts, and experiences.';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setShowCursor(false);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen pt-14 flex items-center justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl">
              <span className="text-muted-foreground">&gt;</span> Hello, I'm{' '}
              <span className="text-primary font-semibold">Iman</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Developer. Creator. Learner.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 text-sm">
            <Link 
              href="/about" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              About
              <ChevronRight className="h-3 w-3" />
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link 
              href="/projects" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              Projects
              <ChevronRight className="h-3 w-3" />
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link 
              href="/photos" 
              className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              Photos
              <ChevronRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Terminal-style prompt */}
          <div className="bg-muted/30 border border-border rounded-md p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-green-500">$</span>
              <span className="text-muted-foreground">whoami</span>
            </div>
            <div className="text-sm pl-4">
              {displayText}
              {showCursor && <span className="terminal-cursor">|</span>}
            </div>
          </div>

          {/* System info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-muted-foreground">
            <div className="space-y-1">
              <div>OS: macOS</div>
              <div>Shell: zsh</div>
              <div>Editor: JetBrains</div>
            </div>
            <div className="space-y-1">
              <div>Languages: Golang, PHP, JavaScript, TypeScript, Python</div>
              <div>Frameworks: Laravel, Ruby on Rails, Express.js, Gin</div>
              <div>Tools: Git, Docker</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState, useEffect } from 'react';
import { Mail, Github, Instagram, Linkedin, ExternalLink, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('developer.iman@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <div className="min-h-screen pt-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-16">
        <div className={`transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {/* CLI-style header */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-green-500">$</span>
                <span className="text-muted-foreground">contact --me</span>
              </div>
            </div>

            {/* Contact info in terminal style */}
            <div className="bg-muted/30 border border-border rounded-md p-6 space-y-4">
              <div className="space-y-3 text-sm font-mono">
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground w-16">email:</span>
                  <span>developer.iman@gmail.com</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 ml-2"
                    onClick={copyEmail}
                  >
                    {copiedEmail ? (
                      <Check className="h-3 w-3 text-green-500" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </Button>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground w-16">github:</span>
                  <a 
                    href="https://github.com/imansprn"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    github.com/imansprn
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground w-16">instagram:</span>
                  <a 
                    href="https://www.instagram.com/imansprn"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    @imansprn
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground w-16">photos:</span>
                  <a 
                    href="https://unsplash.com/@craftby"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    unsplash.com/@imansprn
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground w-16">linkedin:</span>
                  <a 
                    href="https://www.linkedin.com/in/imansprn"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors flex items-center gap-1"
                  >
                    linkedin.com/in/imansprn
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="space-y-4">
              <h2 className="text-lg">
                <span className="text-muted-foreground">##</span> Status
              </h2>
              <div className="bg-muted/30 border border-border rounded-md p-4">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>Available for interesting projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span>Response time: Usually within 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span>Timezone: WIB (UTC+7)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Preferred contact */}
            <div className="space-y-4">
              <h2 className="text-lg">
                <span className="text-muted-foreground">##</span> Preferred Contact
              </h2>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm">
                    <a href="mailto:developer.iman@gmail.com" className="flex items-center gap-2">
                      <Mail className="h-3 w-3" />
                      Email (preferred)
                    </a>
                  </Button>
                  
                  <Button asChild variant="outline" size="sm">
                    <a href="https://github.com/imansprn" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-3 w-3" />
                      GitHub
                      <ExternalLink className="h-2 w-2" />
                    </a>
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground">
                  For quick questions, GitHub issues work well. For everything else, email is best.
                </p>
              </div>
            </div>

            {/* Footer note */}
            <div className="border-t border-border pt-6">
              <p className="text-xs text-muted-foreground">
                <span className="text-muted-foreground">#</span> Always interested in discussing web development,
                design, or photography over coffee (virtual or otherwise).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
"use client";

import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/Button";
import Link from "next/link";

export default function ContactForm() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center mb-8">
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          Feel free to reach out for collaboration opportunities, questions about my projects, or just to say hello!
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 w-full max-w-4xl">
        {/* Email */}
        <Link href="mailto:rodwanbagdadi@gmail.com" className="group">
          <div className="flex flex-col items-center p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-muted p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <Mail className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-sm text-muted-foreground text-center">rodwanbagdadi@gmail.com</p>
          </div>
        </Link>

        {/* LinkedIn */}
        <Link href="https://www.linkedin.com/in/rodwanbaghdadi/" target="_blank" rel="noopener noreferrer" className="group">
          <div className="flex flex-col items-center p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-muted p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <Linkedin className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground text-center">Connect with me</p>
          </div>
        </Link>

        {/* GitHub */}
        <Link href="https://github.com/Rodwanbagdadi" target="_blank" rel="noopener noreferrer" className="group">
          <div className="flex flex-col items-center p-6 rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-muted p-3 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <Github className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
            <p className="text-sm text-muted-foreground text-center">Check out my code</p>
          </div>
        </Link>
      </div>

      <div className="mt-8 text-center">
        <p className="text-muted-foreground mb-6 text-base">
          I typically respond within 24 hours
        </p>
        <Button asChild variant="outline">
          <Link href="mailto:rodwanbagdadi@gmail.com" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Send me an email
          </Link>
        </Button>
      </div>
    </div>
  );
}
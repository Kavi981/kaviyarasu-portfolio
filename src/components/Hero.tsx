import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code2, Mail, Phone } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-surface to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-tech-accent/5" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-tech-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-tech-accent bg-clip-text text-transparent">
            Kaviyarasu
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Full-Stack Developer & AI/ML Enthusiast
          </p>

          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Computer Science student passionate about building scalable web applications, RESTful APIs, and intelligent systems that solve real-world problems.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              kavithamil2005@gmail.com
            </div>
            <div className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              +91 7695900595
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button variant="glow" size="lg" onClick={scrollToProjects}>
              View My Work
            </Button>
            <Button variant="tech" size="lg" onClick={scrollToContact}>
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Kavi981"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface border border-border hover:border-primary hover:bg-surface-hover transition-all duration-300 group"
            >
              <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/kaviyarasu-s-a90587324"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface border border-border hover:border-primary hover:bg-surface-hover transition-all duration-300 group"
            >
              <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://leetcode.com/u/kaviyarasu_senthamilan/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-surface border border-border hover:border-primary hover:bg-surface-hover transition-all duration-300 group"
            >
              <Code2 className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
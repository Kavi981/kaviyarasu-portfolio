import { Github, Linkedin, Code2, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground flex items-center gap-1 justify-center md:justify-start">
              © {currentYear} Kaviyarasu S. Made with
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              and passion for technology.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kaviyarasu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-surface-hover transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/kaviyarasu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-surface-hover transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://leetcode.com/kaviyarasu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-surface-hover transition-colors group"
              aria-label="LeetCode"
            >
              <Code2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Open to opportunities • Full-Stack Developer • AI/ML Enthusiast
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
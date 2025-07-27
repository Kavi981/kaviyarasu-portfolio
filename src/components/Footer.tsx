import { Github, Linkedin, Code2, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-center">
              © 2025 Kaviyarasu. All Rights are Reserved
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Kavi981"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-surface-hover transition-colors group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com/in/kaviyarasu-s-a90587324"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-surface-hover transition-colors group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://leetcode.com/u/kaviyarasu_senthamilan/"
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
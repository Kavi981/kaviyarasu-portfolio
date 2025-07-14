import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Database, Globe } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "MERN stack expertise with modern frameworks and tools"
    },
    {
      icon: Brain,
      title: "AI/ML Integration",
      description: "Building intelligent systems with NLP and data anonymization"
    },
    {
      icon: Database,
      title: "RESTful APIs",
      description: "Scalable backend solutions with Node.js and Express"
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Responsive, user-friendly interfaces with React"
    }
  ];

  return (
    <section id="about" className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-tech-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-tech-accent mx-auto mb-12 rounded-full"></div>

          <div className="mb-12">
            <Card className="border-border bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  I'm a passionate Computer Science student at K.S.Rangasamy College of Technology with a strong foundation in full-stack development and emerging AI/ML technologies. With hands-on experience in the MERN stack, I focus on building scalable web applications and intelligent systems that solve real-world problems.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  My expertise spans from creating responsive user interfaces with React to developing robust backend APIs with Node.js and Express. I'm particularly interested in integrating AI features into web applications, including data anonymization, NLP, and synthetic data generation. I continuously explore emerging technologies and contribute to impactful projects that make a difference.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-surface-hover transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <item.icon className="w-12 h-12 text-primary mx-auto group-hover:text-tech-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
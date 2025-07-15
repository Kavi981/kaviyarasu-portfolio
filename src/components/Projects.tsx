import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Shield, Search } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Data Anonymizer & Synthetic Data Generator",
      description: "A Python and Streamlit-based tool to anonymize Personally Identifiable Information (PII) in CSV files and free text. Implements detection and masking of names, emails, phone numbers, addresses, and other sensitive data. Enables generation of realistic synthetic data using customizable schemas.",
      icon: Shield,
      technologies: ["Python", "Streamlit", "Pandas", "Faker", "Regular Expressions"],
      features: [
        "PII Detection & Masking",
        "Synthetic Data Generation",
        "CSV File Processing",
        "User-friendly Web Interface",
        "Customizable Schemas"
      ],
      githubLink: "https://github.com/Kavi981/Data-Anonymizer-Synthetic-Data-Generator",
      liveLink: null
    },
    {
      title: "SiteLens – Smart SEO Analysis Tool",
      description: "A collaborative full-stack web application that analyzes websites and APIs to provide real-time SEO improvement suggestions using AI. Features intelligent SEO recommendations powered by Gemini API and comprehensive website analysis.",
      icon: Search,
      technologies: ["React.js", "Node.js", "Express.js", "Cheerio", "Gemini API", "JavaScript"],
      features: [
        "Real-time SEO Analysis",
        "AI-powered Suggestions",
        "HTML Structure Analysis",
        "Meta Tags Optimization",
        "Performance Metrics"
      ],
      githubLink: "https://github.com/Kavi981/SiteLens",
      liveLink: "https://seositelens.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-tech-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-tech-accent mx-auto mb-12 rounded-full"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-surface-hover transition-all duration-300 group h-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary"
                          className="bg-surface text-foreground border border-border hover:border-primary transition-all"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.liveLink && (
                      <Button variant="glow" size="sm" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    <Button variant="tech" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
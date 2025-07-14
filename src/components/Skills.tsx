import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "Responsive Design", "UI/UX"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "Performance Optimization"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "Database Design", "Data Modeling"]
    },
    {
      title: "Tools & Platforms",
      skills: ["VS Code", "Postman", "Cursor", "Vercel", "Render", "Git", "GitHub"]
    },
    {
      title: "AI/ML Concepts",
      skills: ["NLP", "Data Anonymization", "Synthetic Data", "SEO Automation", "Gemini API"]
    },
    {
      title: "Development Practices",
      skills: ["Agile", "Version Control", "Clean Code", "Performance Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-tech-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-tech-accent mx-auto mb-12 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-surface-hover transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-surface text-foreground border border-border hover:border-primary hover:bg-surface-hover transition-all duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
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

export default Skills;
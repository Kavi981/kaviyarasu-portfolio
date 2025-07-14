import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Education = () => {
  const certifications = [
    {
      title: "Node.js + Express Certification",
      issuer: "Infosys Springboard",
      description: "Gained practical knowledge and hands-on experience in building web applications using Node.js and Express."
    },
    {
      title: "The Joy of Computing Using Python",
      issuer: "NPTEL",
      description: "Comprehensive course covering Python programming fundamentals and applications."
    },
    {
      title: "Cyber Security and Privacy",
      issuer: "NPTEL",
      description: "In-depth study of cybersecurity principles, privacy protection, and security best practices."
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-tech-accent bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-tech-accent mx-auto mb-12 rounded-full"></div>

          {/* Education */}
          <Card className="border-border bg-card/50 backdrop-blur-sm mb-8 hover:bg-surface-hover transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                    Bachelor of Engineering in Computer Science
                  </CardTitle>
                  <p className="text-lg text-muted-foreground">K.S.Rangasamy College of Technology</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-foreground mb-2">
                    <span className="font-semibold">Duration:</span> 2022 - 2026
                  </p>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary border border-primary/20">
                      CGPA: 8.3/10
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Professional Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-border bg-card/50 backdrop-blur-sm hover:bg-surface-hover transition-all duration-300 group h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </CardTitle>
                  </div>
                  <p className="text-sm text-primary font-medium">
                    {cert.issuer}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {cert.description}
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

export default Education;
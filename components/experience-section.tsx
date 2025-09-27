"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar, MapPin, ExternalLink, Building2 } from "lucide-react";

const experiences = [
  {
    title: "Web Developer",
    company: "Webgeon Results Private Limited",
    location: "Hyderabad, Telangana, India",
    duration: "01-2025 — 08-2025",
    type: "Full-time",
    description:
      "Worked as a Full Stack Developer on various client projects, utilizing the MERN stack to build scalable web applications. Collaborated with cross-functional teams to deliver high-quality software solutions. Focused on optimizing application performance and ensuring responsive design.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "docker",
      "react native",
    ],
    achievements: [
      "Successfully delivered 3+ client projects on time",
      "Led a team of 2 projects",
      "got opportunity to deal with clients directly",
    ],
  },
  // {
  //   title: "Frontend Developer",
  //   company: "Digital Agency Pro",
  //   location: "New York, NY",
  //   duration: "2022 — 2023",
  //   type: "Full-time",
  //   description:
  //     "Developed responsive web applications and landing pages for various clients. Focused on creating pixel-perfect designs with excellent user experience. Worked closely with designers and backend developers.",
  //   technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "Figma"],
  //   achievements: [
  //     "Delivered 15+ client projects on time",
  //     "Improved client satisfaction score to 98%",
  //     "Mentored 2 junior developers",
  //   ],
  // },
  // {
  //   title: "Web Developer Intern",
  //   company: "StartupXYZ",
  //   location: "San Francisco, CA",
  //   duration: "2021 — 2022",
  //   type: "Internship",
  //   description:
  //     "Assisted in developing the company's main product using React and Node.js. Gained experience in agile development methodologies and version control systems. Contributed to both frontend and backend development.",
  //   technologies: ["React", "Node.js", "Express", "PostgreSQL", "Git"],
  //   achievements: [
  //     "Contributed to 3 major feature releases",
  //     "Fixed 50+ bugs and improved code quality",
  //     "Received full-time offer upon completion",
  //   ],
  // },
];

type Certification = {
  title: string;
  issuer: string;
  date: string;
  link: string;
  credentialId?: string;
};

const certifications: Certification[] = [
  {
    title: "Generative AI based application WITH PYTHON",
    issuer: "IBM",
    date: "2024",
    // credentialId: "AWS-SAA-123456",
    link: "/public/certi/IBM.AI.jpg",
  },
  {
    title: "Webgeon internship completion certificate",
    issuer: "sangeeth saji (CEO,Webgeon)",
    date: "2025",
    // credential
    link: "/public/certi/webgeon-cert.jpg",
  },
  // {
  //   title: "React Developer Certification",
  //   issuer: "Meta",
  //   date: "2023",
  //   credentialId: "META-REACT-345678",
  //   link: "#",
  // },
  // {
  //   title: "Google Cloud Professional",
  //   issuer: "Google Cloud",
  //   date: "2024",
  //   credentialId: "GCP-PRO-901234",
  //   link: "#",
  // },
];

export function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Experience Section */}
        <div
          className={cn("text-center mb-16", isVisible && "animate-fade-in-up")}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            My journey through various roles in software development, from
            internships to leading development teams.
          </p>
        </div>

        <div className="space-y-8 mb-20">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={cn(
                "hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-foreground">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <Badge
                      variant={
                        exp.type === "Full-time" ? "default" : "secondary"
                      }
                    >
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div
          className={cn("text-center mb-16", isVisible && "animate-fade-in-up")}
          style={{ animationDelay: "600ms" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Professional certifications that validate my expertise in various
            technologies and platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={cn(
                "hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: `${800 + index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h3 className="font-semibold text-foreground">
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground">{cert.issuer}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>Issued: {cert.date}</span>
                      {cert.credentialId && (
                        <span>ID: {cert.credentialId}</span>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => window.open(cert.link, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">View certificate</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

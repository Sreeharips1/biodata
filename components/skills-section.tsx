"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Code2, Database, Cloud, Brain, Server, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="h-6 w-6" />,
    skills: [
      { name: "React.js", level: 60, icon: "⚛️" },
      { name: "Next.js", level: 65, icon: "▲" },
      { name: "TypeScript", level: 50, icon: "📘" },
      { name: "Tailwind CSS", level: 90, icon: "🎨" },
      { name: "HTML5/CSS3", level: 95, icon: "🌐" },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-6 w-6" />,
    skills: [
      { name: "Node.js", level: 55, icon: "🟢" },
      { name: "Express.js", level: 50, icon: "🚀" },
      { name: "Nest.js", level: 75, icon: "🔴" },
      { name: "REST APIs", level: 50, icon: "🔗" },
      { name: "SQL", level: 50, icon: "📊" },
    ],
  },
  {
    title: "Database & Storage",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "PostgreSQL", level: 75, icon: "🐘" },
      // { name: "Redis", level: 70, icon: "🔴" },
      // { name: "Firebase", level: 80, icon: "🔥" },
    ],
  },
  {
    title: "AI/ML & Data Science",
    icon: <Brain className="h-6 w-6" />,
    skills: [
      { name: "Python", level: 20, icon: "🐍" },
      { name: "Jupyter Notebook", level: 25, icon: "📓" },
      { name: "PyCharm", level: 75, icon: "🧠" },
      // { name: "TensorFlow", level: 65, icon: "🤖" },
      // { name: "Pandas", level: 70, icon: "🐼" },
    ],
  },
  {
    title: "DevOps & Cloud",
    icon: <Cloud className="h-6 w-6" />,
    skills: [
      { name: "Git/GitHub", level: 50, icon: "🐙" },
      { name: "Docker", level: 50, icon: "🐳" },
      // { name: "AWS", level: 65, icon: "☁️" },
      { name: "Vercel", level: 85, icon: "▲" },
      // { name: "CI/CD", level: 70, icon: "🔄" },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <Terminal className="h-6 w-6" />,
    skills: [
      { name: "VS Code", level: 95, icon: "💙" },
      { name: "Figma", level: 45, icon: "🎨" },
      { name: "Postman", level: 85, icon: "📮" },
      // { name: "Linux", level: 70, icon: "🐧" },
    ],
  },
  {
    title: "Electronics",
    icon: <Terminal className="h-6 w-6" />,
    skills: [
      { name: "sensors & motors", level: 95, icon: "✔️" },
      { name: "Microcontrollers", level: 75, icon: "🤖" },
      { name: "Arduino IDE", level: 85, icon: "📮" },
      // { name: "Linux", level: 70, icon: "🐧" },
    ],
  },
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delay
          skillCategories.forEach((category, categoryIndex) => {
            category.skills.forEach((skill, skillIndex) => {
              setTimeout(() => {
                setAnimatedSkills(
                  (prev) => new Set([...prev, `${categoryIndex}-${skillIndex}`])
                );
              }, categoryIndex * 200 + skillIndex * 100);
            });
          });
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
    <section ref={sectionRef} id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={cn("text-center mb-16", isVisible && "animate-fade-in-up")}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive overview of my technical expertise across various
            domains of software development and emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={cn(
                "hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-lg">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="font-medium text-sm">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress
                      value={
                        animatedSkills.has(`${categoryIndex}-${skillIndex}`)
                          ? skill.level
                          : 0
                      }
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div
          className={cn("mt-16 text-center", isVisible && "animate-fade-in-up")}
          style={{ animationDelay: "800ms" }}
        >
          <h3 className="text-2xl font-semibold mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Express",
              "Nest.js",
              "MongoDB",
              "PostgreSQL",
              "Python",
              "Git",
              "Docker",
              // "AWS",
              "Vercel",
              "Tailwind CSS",
              // "Material-UI",
              // "Redux",
              "GraphQL",
              "REST API",
              "JWT",
              "OAuth",
              // "Stripe",
              // "Socket.io",
              // "Jest",
              // "Cypress",
              "react-Native",
              "expo",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-3 py-1 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

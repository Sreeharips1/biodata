"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, Calendar, Users, Star } from "lucide-react";

const projects = [
  {
    title: "gym landing page",
    description:
      "Created a responsive Gym Landing Page using Next.js with fully animated parallax and frame-based animations.This was my first step toward developing the complete Gym Management System, serving as the project’s foundation.",
    image: "/flexzone.jpg",
    technologies: ["Next js", "typescript", "tailwindcss"],
    features: [
      "animated static website",
      "parallax effects",
      "frame-by-frame animations",
      "SEO optimization",
      "Responsive design",
    ],
    liveUrl: "https://flexzone-gym-ojir.vercel.app/",
    githubUrl: "https://github.com/Sreeharips1/flexzone-gym",
    status: "Completed",
    duration: "2 week",
    team: "Solo Project",
  },
  {
    title: "gym management system",
    description:
      "Developed a complete Gym Management System with Admin, Super Admin, and Member panels using React, TypeScript, Node.js, Express, and MongoDB.Built a member-side mobile application with React Native + Expo, integrated with PhonePe for secure payments.The system enables seamless user management, role-based access, and efficient gym operations in both web and mobile platforms.",
    image: "/gymsof.jpg",
    technologies: [
      "react",
      "typescript",
      "react-native",
      "express",
      "node.js",
      "mongodb",
    ],
    features: [
      "Role-based access with Admin, Super Admin, and Member panels.",
      "Member registration, profile, and subscription management.",
      "Secure online payments integrated with PhonePe.",
      "Mobile app for members to access schedules and plans",
      "Mobile-responsive design",
    ],
    liveUrl: "#",
    githubUrl: "#",
    status: "Completed",
    duration: "4 months",
    team: "4 Developers",
  },
  {
    title: "Real estate web application",
    description:
      "Developed a Real Estate Application for a property consultant where users can add properties, express interest in listings, and  connect .The platform simplifies property management and client engagement ",
    image: "/real1.jpg",
    technologies: ["next", "typecript", "nest js"],
    features: [
      "search and find properties",
      "3d view of propeties",
      "live location availabilty",
      "upload the properties",
    ],
    liveUrl: "#",
    githubUrl: "#",
    status: "In Development",
    duration: "2 months",
    team: "Solo Project",
  },
  {
    title: "Fullstack project:Dental-ai",
    description:
      "having landing page , user side and admin side , book appointments , manage doctors.",
    image: "/dental.jpg",
    technologies: ["Next js", "javascript", "Vapi ai", "NeonDb"],
    features: [
      "Ai Assist ",
      "have admin and user side",
      "Fullstack application",
    ],
    liveUrl: "https://dental-web-chi.vercel.app/",
    githubUrl: "https://github.com/Sreeharips1/DENTAL-WEB",
    status: "Completed",
    duration: "2 week",
    team: "solo",
  },
  // {
  //   title: "Portfolio Website Builder",
  //   description:
  //     "A drag-and-drop portfolio website builder that allows users to create professional portfolios without coding knowledge, featuring customizable templates and themes.",
  //   image: "/website-builder-interface-drag-and-drop.jpg",
  //   technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  //   features: [
  //     "Drag & drop interface",
  //     "Customizable templates",
  //     "Theme customization",
  //     "SEO optimization",
  //     "Analytics integration",
  //   ],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   status: "In Development",
  //   duration: "6 months",
  //   team: "Solo Project",
  // },
  // {
  //   title: "Expense Tracker Mobile App",
  //   description:
  //     "A cross-platform mobile application for tracking expenses with budget management, category-wise analysis, and financial goal setting features.",
  //   image: "/mobile-expense-tracker-app-interface.jpg",
  //   technologies: ["React Native", "Node.js", "MongoDB", "Express"],
  //   features: [
  //     "Expense categorization",
  //     "Budget management",
  //     "Financial goal tracking",
  //     "Data visualization",
  //     "Export functionality",
  //   ],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   status: "Completed",
  //   duration: "3 months",
  //   team: "Solo Project",
  // },
];

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);

  const filters = ["All", "Completed", "In Development"];
  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.status === filter);

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
    <section ref={sectionRef} id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={cn("text-center mb-16", isVisible && "animate-fade-in-up")}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A showcase of my recent work, demonstrating expertise in full-stack
            development, AI/ML integration, and modern web technologies.
          </p>
        </div>

        {/* Filter buttons */}
        <div
          className={cn(
            "flex justify-center mb-12",
            isVisible && "animate-fade-in-up"
          )}
          style={{ animationDelay: "200ms" }}
        >
          <div className="flex gap-2 p-1 bg-muted rounded-lg">
            {filters.map((filterOption) => (
              <Button
                key={filterOption}
                variant={filter === filterOption ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter(filterOption)}
                className={cn(
                  "transition-all",
                  filter === filterOption &&
                    "bg-accent text-accent-foreground shadow-sm"
                )}
              >
                {filterOption}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.title}
              className={cn(
                "group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden",
                isVisible && "animate-fade-in-up"
              )}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge
                    variant={
                      project.status === "Completed" ? "default" : "secondary"
                    }
                    className="shadow-lg"
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-foreground">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Star className="h-3 w-3 mt-0.5 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-foreground">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3 w-3" />
                    <span>{project.team}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                    className="flex-1 flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    className="flex-1 flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div
          className={cn("text-center mt-16", isVisible && "animate-fade-in-up")}
          style={{ animationDelay: "800ms" }}
        >
          <p className="text-muted-foreground mb-6">
            Interested in working together on your next project?
          </p>
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Let's Collaborate
          </Button>
        </div>
      </div>
    </section>
  );
}

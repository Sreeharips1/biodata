"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export function AboutSection() {
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
    <section ref={sectionRef} id="about" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - About content */}
          <div className={cn("space-y-8", isVisible && "animate-fade-in-left")}>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                About Me
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full" />
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm an ECE B.Tech graduate From Federal institute of science and
                technology,passionate about crafting accessible, pixel-perfect
                user interfaces that blend thoughtful design with robust
                engineering. My favorite work lies at the intersection of design
                and development, creating experiences that not only look great
                but are meticulously built for performance and usability.
              </p>

              <p>
                contribute to the creation
                and maintenance of scalable web applications, ensuring they meet
                web accessibility standards and best practices to deliver an
                inclusive user experience.
              </p>
              <p>
                in final year ,i got internship offer for 6 month from webgeon
                solutions,after that i joined as associate web developer{" "}
              </p>

              <p>
                In my spare time, I'm usually exploring new technologies,
                contributing to open source projects, or working on personal
                projects that challenge me to learn and grow as a developer.
              </p>
            </div>

            {/* Current focus */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Currently Learning
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Mern-dev</Badge>
                <Badge variant="secondary">DevOps</Badge>
                <Badge variant="secondary">Java Core</Badge>
                {/* <Badge variant="secondary">Kubernetes</Badge>
                <Badge variant="secondary">AWS</Badge> */}
              </div>
            </div>
          </div>

          {/* Right side - Stats/Highlights */}
          <div
            className={cn("space-y-6", isVisible && "animate-fade-in-right")}
          >
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-accent mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">
                    Months Experience
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-accent mb-2">6+</div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">
                    Technologies
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-accent mb-2">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Education */}
            <Card className="p-6">
              <CardContent className="p-0 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Education
                </h3>
                <div className="space-y-2">
                  <div className="font-medium">
                    B.Tech in Electronics & Communication Engineering
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Federal Institute of science and technology
                  </div>
                  <div className="text-sm text-muted-foreground">
                    2021 - 2025 | CGPA: 7.67/10
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

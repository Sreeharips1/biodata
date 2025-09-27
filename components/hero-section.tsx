"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = "/files/resume.pdf";
    link.download = "Sreehari_P_Shaiju_Resume.pdf"; // You can customize the downloaded filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className={cn("space-y-8", isVisible && "animate-fade-in-left")}>
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Available for Freelance Work
              </Badge>

              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-bold text-balance">
                  <span className="text-foreground">SREEHARI P SHAIJU</span>
                </h1>
                <h2 className="text-xl md:text-2xl text-accent font-medium">
                  ECE Engineer & Full Stack Developer
                </h2>
              </div>

              <p className="text-lg text-muted-foreground text-pretty max-w-2xl leading-relaxed">
                I build accessible, pixel-perfect digital experiences for the
                web. Passionate about crafting thoughtful design with robust
                engineering, specializing in MERN stack, AI/ML, and modern web
                technologies.And having interest in embedded systems,IOT based
                projects. Contact me for the projects
              </p>
            </div>

            {/* Current status */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Currently pursuing:
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Oracle Cloud </Badge>
                <Badge variant="outline">DevOps</Badge>
                <Badge variant="outline">Java Core</Badge>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={downloadResume}
                className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                Get In Touch
              </Button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open("https://github.com/Sreeharips1", "_blank")
                }
                className="hover:text-accent"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/sreehari-p-ba7b62244",
                    "_blank"
                  )
                }
                className="hover:text-accent"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open("tel:+919526308646", "_self")}
                className="hover:text-accent"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  window.open("https://wa.me/9526308646", "_blank")
                }
                className="hover:text-accent"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">WhatsApp</span>
              </Button>
            </div>
          </div>

          {/* Right side - Spline 3D Animation */}
          <div
            className={cn(
              "relative h-[500px] lg:h-[600px]",
              isVisible && "animate-fade-in-right"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            <iframe
              src="https://my.spline.design/genkubgreetingrobot-cSfOHHYdC5MY7BY3vAgui0eS/"
              className="w-full h-full rounded-2xl border border-border/50"
              title="3D Greeting Robot Animation"
              loading="lazy"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => scrollToSection("about")}
            className="rounded-full"
          >
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">Scroll to about section</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import {
//   Download,
//   Github,
//   Linkedin,
//   Mail,
//   Phone,
//   MessageCircle,
//   ChevronDown,
// } from "lucide-react";
// import { cn } from "@/lib/utils";

// export function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden"
//     >
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />

//       {/* Animated background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" />
//         <div
//           className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"
//           style={{ animationDelay: "1s" }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left side - Content */}
//           <div className={cn("space-y-8", isVisible && "animate-fade-in-left")}>
//             <div className="space-y-4">
//               <Badge variant="secondary" className="w-fit">
//                 Available for Freelance Work
//               </Badge>

//               <div className="space-y-2">
//                 <h1 className="text-4xl md:text-6xl font-bold text-balance">
//                   <span className="text-foreground">SREEHARI P SHAIJU</span>
//                 </h1>
//                 <h2 className="text-xl md:text-2xl text-accent font-medium">
//                   ECE Engineer & Full Stack Developer
//                 </h2>
//               </div>

//               <p className="text-lg text-muted-foreground text-pretty max-w-2xl leading-relaxed">
//                 I build accessible, pixel-perfect digital experiences for the
//                 web. Passionate about crafting thoughtful design with robust
//                 engineering, specializing in MERN stack, AI/ML, and modern web
//                 technologies.And having interest in embedded systems,IOT based
//                 projects
//                 <p>Contact me for the projects</p>
//               </p>
//             </div>

//             {/* Current status */}
//             <div className="space-y-3">
//               <p className="text-sm text-muted-foreground">
//                 Currently pursuing:
//               </p>
//               <div className="flex flex-wrap gap-2">
//                 <Badge variant="outline">Oracle Cloud </Badge>
//                 <Badge variant="outline">DevOps</Badge>
//                 <Badge variant="outline">Java Core</Badge>
//               </div>
//             </div>

//             {/* Action buttons */}
//             <div className="flex flex-wrap gap-4">
//               <Button
//                 size="lg"
//                 onClick={() => window.open("/resume.pdf", "_blank")}
//                 className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground"
//               >
//                 <Download className="h-5 w-5" />
//                 Download Resume
//               </Button>

//               <Button
//                 variant="outline"
//                 size="lg"
//                 onClick={() => scrollToSection("contact")}
//                 className="flex items-center gap-2"
//               >
//                 <Mail className="h-5 w-5" />
//                 Get In Touch
//               </Button>
//             </div>

//             {/* Social links */}
//             <div className="flex items-center gap-4 pt-4">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() =>
//                   window.open("https://github.com/yourusername", "_blank")
//                 }
//                 className="hover:text-accent"
//               >
//                 <Github className="h-5 w-5" />
//                 <span className="sr-only">GitHub</span>
//               </Button>

//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() =>
//                   window.open("https://linkedin.com/in/yourusername", "_blank")
//                 }
//                 className="hover:text-accent"
//               >
//                 <Linkedin className="h-5 w-5" />
//                 <span className="sr-only">LinkedIn</span>
//               </Button>

//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => window.open("tel:+1234567890", "_self")}
//                 className="hover:text-accent"
//               >
//                 <Phone className="h-5 w-5" />
//                 <span className="sr-only">Phone</span>
//               </Button>

//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={() =>
//                   window.open("https://wa.me/1234567890", "_blank")
//                 }
//                 className="hover:text-accent"
//               >
//                 <MessageCircle className="h-5 w-5" />
//                 <span className="sr-only">WhatsApp</span>
//               </Button>
//             </div>
//           </div>

//           {/* Right side - Spline 3D Animation */}
//           <div
//             className={cn(
//               "relative h-[500px] lg:h-[600px]",
//               isVisible && "animate-fade-in-right"
//             )}
//           >
//             <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
//             <iframe
//               src="https://my.spline.design/genkubgreetingrobot-cSfOHHYdC5MY7BY3vAgui0eS/"
//               className="w-full h-full rounded-2xl border border-border/50"
//               title="3D Greeting Robot Animation"
//               loading="lazy"
//             />
//           </div>
//         </div>

//         {/* Scroll indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => scrollToSection("about")}
//             className="rounded-full"
//           >
//             <ChevronDown className="h-6 w-6" />
//             <span className="sr-only">Scroll to about section</span>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

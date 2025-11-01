"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  // { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-foreground">
                Portfolio
              </span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      activeSection === item.href.slice(1)
                        ? "text-accent bg-accent/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
                    )}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("tel:+9995258646", "_self")}
                className="flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  window.open("https://wa.me/9526308646", "_blank")
                }
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </Button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md border-b border-border">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors",
                    activeSection === item.href.slice(1)
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/5"
                  )}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 pb-3 border-t border-border">
                <div className="flex flex-col space-y-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open("tel:+9995258646", "_self")}
                    className="flex items-center gap-2 justify-center"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      window.open("https://wa.me/9526308646", "_blank")
                    }
                    className="flex items-center gap-2 justify-center"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { Menu, X, Download, Phone, MessageCircle } from "lucide-react"
// import { cn } from "@/lib/utils"

// const navItems = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Experience", href: "#experience" },
//   { name: "Projects", href: "#projects" },
//   { name: "Skills", href: "#skills" },
//   { name: "Certifications", href: "#certifications" },
//   { name: "Contact", href: "#contact" },
// ]

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [activeSection, setActiveSection] = useState("home")

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = navItems.map((item) => item.href.slice(1))
//       const scrollPosition = window.scrollY + 100

//       for (const section of sections) {
//         const element = document.getElementById(section)
//         if (element) {
//           const { offsetTop, offsetHeight } = element
//           if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
//             setActiveSection(section)
//             break
//           }
//         }
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href)
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" })
//     }
//     setIsOpen(false)
//   }

//   return (
//     <>
//       {/* Desktop Navigation */}
//       <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex-shrink-0">
//               <span className="text-xl font-bold text-foreground">Portfolio</span>
//             </div>

//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {navItems.map((item) => (
//                   <button
//                     key={item.name}
//                     onClick={() => scrollToSection(item.href)}
//                     className={cn(
//                       "px-3 py-2 rounded-md text-sm font-medium transition-colors",
//                       activeSection === item.href.slice(1)
//                         ? "text-accent bg-accent/10"
//                         : "text-muted-foreground hover:text-foreground hover:bg-accent/5",
//                     )}
//                   >
//                     {item.name}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="hidden md:flex items-center space-x-2">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => window.open("/resume.pdf", "_blank")}
//                 className="flex items-center gap-2"
//               >
//                 <Download className="h-4 w-4" />
//                 Resume
//               </Button>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => window.open("tel:+1234567890", "_self")}
//                 className="flex items-center gap-2"
//               >
//                 <Phone className="h-4 w-4" />
//                 Call
//               </Button>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 onClick={() => window.open("https://wa.me/1234567890", "_blank")}
//                 className="flex items-center gap-2"
//               >
//                 <MessageCircle className="h-4 w-4" />
//                 WhatsApp
//               </Button>
//             </div>

//             <div className="md:hidden">
//               <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
//                 {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background/95 backdrop-blur-md border-b border-border">
//               {navItems.map((item) => (
//                 <button
//                   key={item.name}
//                   onClick={() => scrollToSection(item.href)}
//                   className={cn(
//                     "block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors",
//                     activeSection === item.href.slice(1)
//                       ? "text-accent bg-accent/10"
//                       : "text-muted-foreground hover:text-foreground hover:bg-accent/5",
//                   )}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//               <div className="pt-4 pb-3 border-t border-border">
//                 <div className="flex flex-col space-y-2">
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     onClick={() => window.open("/resume.pdf", "_blank")}
//                     className="flex items-center gap-2 justify-center"
//                   >
//                     <Download className="h-4 w-4" />
//                     Download Resume
//                   </Button>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     onClick={() => window.open("tel:+1234567890", "_self")}
//                     className="flex items-center gap-2 justify-center"
//                   >
//                     <Phone className="h-4 w-4" />
//                     Call Now
//                   </Button>
//                   <Button
//                     variant="outline"
//                     size="sm"
//                     onClick={() => window.open("https://wa.me/1234567890", "_blank")}
//                     className="flex items-center gap-2 justify-center"
//                   >
//                     <MessageCircle className="h-4 w-4" />
//                     WhatsApp
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   )
// }

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  ArrowUp,
} from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "API Development",
    "Database Design",
    "UI/UX Implementation",
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/yourusername",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
    },
    {
      icon: <Mail className="h-5 w-5" />,
      name: "Email",
      url: "mailto:sreehariwsree@gmail.com",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand & Description */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Sreehari P Shaiju
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  ECE Engineer & Full Stack Developer passionate about creating
                  exceptional digital experiences with modern web technologies.
                </p>
              </div>

              <div className="space-y-3">
                <Badge variant="secondary" className="w-fit">
                  Available for Freelance
                </Badge>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>kerala,Thrissur</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="icon"
                    onClick={() => window.open(social.url, "_blank")}
                    className="hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-accent transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="text-muted-foreground">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground">
                Get In Touch
              </h4>
              <div className="space-y-4">
                <div className="space-y-3">
                  <Button
                    variant="ghost"
                    onClick={() =>
                      window.open("mailto:your.email@example.com", "_self")
                    }
                    className="justify-start gap-3 h-auto p-0 hover:bg-transparent hover:text-accent"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">sreehariwsree@gmail.com</span>
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={() => window.open("tel:+1234567890", "_self")}
                    className="justify-start gap-3 h-auto p-0 hover:bg-transparent hover:text-accent"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">+919526308646</span>
                  </Button>

                  <Button
                    variant="ghost"
                    onClick={() =>
                      window.open("https://wa.me/9526308646", "_blank")
                    }
                    className="justify-start gap-3 h-auto p-0 hover:bg-transparent hover:text-accent"
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span className="text-sm">WhatsApp</span>
                  </Button>
                </div>

                {/* Google Maps Embed */}
                <div className="mt-6">
                  <div className="aspect-video w-full rounded-lg overflow-hidden border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31403.36147576352!2d76.33165279999999!3d10.308218200000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080269866481a9%3A0x6b5ec1dc50c0402d!2sChalakudy%2C%20Kerala!5e0!3m2!1sen!2sin!4v1759000498872!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Location Map"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} Your Name. Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>using Next.js & Tailwind CSS</span>
            </div> */}

            <div className="flex items-center gap-6">
              <button
                onClick={() => scrollToSection("#home")}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollToSection("#home")}
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                Terms of Service
              </button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollToTop}
                className="hover:bg-accent hover:text-accent-foreground transition-colors bg-transparent"
              >
                <ArrowUp className="h-4 w-4" />
                <span className="sr-only">Back to top</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

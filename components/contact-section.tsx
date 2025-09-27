"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Clock,
} from "lucide-react";

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);

    // Show success message (you can implement toast notification here)
    alert("Message sent successfully! I'll get back to you soon.");
  };

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "sreehariwsree@gmail.com",
      action: () => window.open("mailto:sreehariwsree@gmail.com", "_self"),
      description: "Send me an email anytime",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+919526308646",
      action: () => window.open("tel:+919526308646", "_self"),
      description: "Call me during business hours",
    },
    // {
    //   icon: <MessageCircle className="h-6 w-6" />,
    //   title: "WhatsApp",
    //   value: "+1 (234) 567-8900",
    //   action: () => window.open("https://wa.me/9526308646", "_blank"),
    //   description: "Quick chat on WhatsApp",
    // },
    // {
    //   icon: <MapPin className="h-6 w-6" />,
    //   title: "Location",
    //   value: "New York, NY",
    //   action: () =>
    //     window.open("https://maps.google.com/?q=New+York,NY", "_blank"),
    //   description: "Available for local meetings",
    // },
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/yourusername",
      username: "@yourusername",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      username: "@yourusername",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      username: "@yourusername",
    },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={cn("text-center mb-16", isVisible && "animate-fade-in-up")}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to bring your ideas to life? I'm available for freelance
            projects and full-time opportunities. Let's discuss how we can
            collaborate.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div
            className={cn(
              "lg:col-span-1 space-y-8",
              isVisible && "animate-fade-in-left"
            )}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">
                Get In Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always interested in hearing about new opportunities and
                exciting projects. Whether you have a question or just want to
                say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card
                  key={method.title}
                  className="cursor-pointer hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  onClick={method.action}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-accent/10 rounded-lg text-accent">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {method.description}
                        </p>
                        <p className="text-sm font-medium text-accent">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Availability */}
            {/* <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-accent" />
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  <Badge variant="default" className="bg-green-500 hover:bg-green-600">
                    Available for Work
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Response Time</span>
                  <span className="text-sm font-medium">Within 24 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Timezone</span>
                  <span className="text-sm font-medium">EST (UTC-5)</span>
                </div>
              </CardContent>
            </Card> */}

            {/* Social Links */}
            {/* <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Connect With Me</h4>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    onClick={() => window.open(social.url, "_blank")}
                    className="justify-start gap-3 h-auto p-3"
                  >
                    {social.icon}
                    <div className="text-left">
                      <div className="font-medium">{social.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {social.username}
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              "lg:col-span-2",
              isVisible && "animate-fade-in-right"
            )}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="transition-all focus:ring-2 focus:ring-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="transition-all focus:ring-2 focus:ring-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="transition-all focus:ring-2 focus:ring-accent"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      required
                      className="transition-all focus:ring-2 focus:ring-accent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

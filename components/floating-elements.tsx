"use client"

import { ParallaxWrapper } from "./parallax-wrapper"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <ParallaxWrapper speed={0.2} className="absolute top-20 left-10">
        <div className="w-4 h-4 bg-accent/20 rounded-full animate-float" />
      </ParallaxWrapper>

      <ParallaxWrapper speed={0.3} className="absolute top-40 right-20">
        <div className="w-6 h-6 bg-primary/20 rotate-45 animate-float" style={{ animationDelay: "1s" }} />
      </ParallaxWrapper>

      <ParallaxWrapper speed={0.4} className="absolute top-60 left-1/4">
        <div className="w-3 h-3 bg-accent/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </ParallaxWrapper>

      <ParallaxWrapper speed={0.25} className="absolute top-80 right-1/3">
        <div className="w-5 h-5 bg-primary/15 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
      </ParallaxWrapper>

      <ParallaxWrapper speed={0.35} className="absolute bottom-40 left-1/3">
        <div className="w-4 h-4 bg-accent/25 rotate-45 animate-float" style={{ animationDelay: "1.5s" }} />
      </ParallaxWrapper>

      <ParallaxWrapper speed={0.3} className="absolute bottom-60 right-10">
        <div className="w-3 h-3 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "3s" }} />
      </ParallaxWrapper>
    </div>
  )
}

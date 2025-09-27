import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloatingElements } from "@/components/floating-elements"
import { CursorFollower } from "@/components/cursor-follower"
import "./globals.css"

export const metadata: Metadata = {
  title: "Your Name - ECE Engineer & Web Developer",
  description:
    "Professional portfolio of an ECE B.Tech graduate and full-stack web developer specializing in MERN stack, AI/ML, and modern web technologies.",
  generator: "v0.app",
  keywords: ["ECE Engineer", "Web Developer", "MERN Stack", "React", "Node.js", "AI/ML", "Portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - ECE Engineer & Web Developer",
    description: "Professional portfolio showcasing expertise in web development, AI/ML, and engineering solutions.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ScrollProgress />
        <FloatingElements />
        <CursorFollower />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

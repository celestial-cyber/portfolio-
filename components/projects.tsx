"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ErrorBoundary } from "@/components/error-boundary"

export default function Projects() {
  // Project data - using static data to avoid API failures
  const projects = [
    {
      id: 1,
      title: "Cosmic Explorer",
      description: "An interactive space exploration web application with 3D visualization.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Three.js", "WebGL", "Framer Motion"],
      categories: ["Web App", "3D", "Interactive"],
      liveUrl: "https://example.com/cosmic-explorer",
      githubUrl: "https://github.com/celestialv/cosmic-explorer",
    },
    {
      id: 2,
      title: "Nebula Dashboard",
      description: "A data visualization dashboard for space mission analytics.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "D3.js", "TypeScript", "Tailwind CSS"],
      categories: ["Dashboard", "Data Visualization"],
      liveUrl: "https://example.com/nebula-dashboard",
      githubUrl: "https://github.com/celestialv/nebula-dashboard",
    },
    {
      id: 3,
      title: "Stellar Gallery",
      description: "A responsive image gallery showcasing astronomical photography.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Vue.js", "Firebase", "GSAP", "CSS Grid"],
      categories: ["Gallery", "Photography"],
      liveUrl: "https://example.com/stellar-gallery",
      githubUrl: "https://github.com/celestialv/stellar-gallery",
    },
    {
      id: 4,
      title: "Orbit Chat",
      description: "Real-time messaging application with end-to-end encryption.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Socket.io", "Node.js", "MongoDB"],
      categories: ["Mobile App", "Communication"],
      liveUrl: "https://example.com/orbit-chat",
      githubUrl: "https://github.com/celestialv/orbit-chat",
    },
    {
      id: 5,
      title: "Celestial API",
      description: "RESTful API service providing astronomical data and calculations.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Node.js", "Express", "PostgreSQL", "Docker"],
      categories: ["API", "Backend"],
      liveUrl: "https://example.com/celestial-api",
      githubUrl: "https://github.com/celestialv/celestial-api",
    },
    {
      id: 6,
      title: "Nova UI",
      description: "A space-themed UI component library with dark mode support.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Storybook", "Styled Components", "Jest"],
      categories: ["UI Library", "Design System"],
      liveUrl: "https://example.com/nova-ui",
      githubUrl: "https://github.com/celestialv/nova-ui",
    },
  ]

  // Extract unique categories from projects
  const allCategories = ["All", ...new Set(projects.flatMap((project) => project.categories))]

  // State for active category filter
  const [activeCategory, setActiveCategory] = useState("All")

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.categories.includes(activeCategory))

  return (
    <ErrorBoundary fallback={<p className="text-center py-10">Something went wrong loading the projects section.</p>}>
      <section id="projects" className="py-20 md:py-28">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent relative inline-block">
                My Projects
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Explore my creative and technical work
              </p>
            </div>
          </motion.div>

          {/* Category Filter */}
          <div className="mx-auto mt-8 max-w-5xl">
            <div className="flex flex-wrap justify-center gap-2">
              {allCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex"
                >
                  <Card className="flex flex-col overflow-hidden">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>

          {/* View More Button */}
          <div className="mt-12 flex justify-center">
            <Button variant="outline" asChild>
              <a href="https://github.com/celestialv" target="_blank" rel="noopener noreferrer">
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}

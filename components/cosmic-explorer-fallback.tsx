"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectFallback from "./project-fallback"

export default function CosmicExplorerFallback() {
  const [activeTab, setActiveTab] = useState("preview")

  // Project details for the fallback
  const projectDetails = {
    title: "Cosmic Explorer",
    description: "An interactive space exploration web application with 3D visualization.",
    longDescription:
      "Cosmic Explorer is an immersive web application that allows users to explore the solar system and beyond. " +
      "It features interactive 3D models of planets, stars, and other celestial bodies, with detailed information " +
      "about each object. Users can navigate through space, zoom in on objects of interest, and learn about the " +
      "universe through an intuitive interface.",
    imageSrc: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Three.js", "WebGL", "Framer Motion"],
    githubUrl: "https://github.com/celestialv/cosmic-explorer",
    liveUrl: "https://example.com/cosmic-explorer",
  }

  // Screenshots for the gallery tab
  const screenshots = [
    { id: 1, src: "/placeholder.svg?height=300&width=500", alt: "Solar System View" },
    { id: 2, src: "/placeholder.svg?height=300&width=500", alt: "Planet Detail" },
    { id: 3, src: "/placeholder.svg?height=300&width=500", alt: "Star Map" },
  ]

  // Features list for the features tab
  const features = [
    "Interactive 3D visualization of the solar system",
    "Detailed information about planets, moons, and stars",
    "Realistic physics-based orbital mechanics",
    "Search functionality for celestial objects",
    "Educational content about space exploration",
    "Responsive design for desktop and mobile devices",
  ]

  return (
    <div className="space-y-6">
      <ProjectFallback {...projectDetails} />

      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue="preview" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="mt-6">
              <div className="aspect-video overflow-hidden rounded-lg bg-muted/30">
                <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                  <h3 className="mb-2 text-xl font-semibold">Cosmic Explorer</h3>
                  <p className="mb-6 text-muted-foreground">
                    The interactive 3D visualization is currently undergoing maintenance.
                  </p>
                  <div className="relative h-40 w-40">
                    <div className="absolute inset-0 animate-spin rounded-full border-b-2 border-primary"></div>
                    <div className="absolute inset-4 animate-pulse rounded-full bg-primary/10"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-sm font-medium">Preview</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="mt-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {screenshots.map((screenshot) => (
                  <motion.div
                    key={screenshot.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={screenshot.src || "/placeholder.svg"}
                        alt={screenshot.alt}
                        width={500}
                        height={300}
                        className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <p className="mt-2 text-center text-sm text-muted-foreground">{screenshot.alt}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                      ✓
                    </div>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

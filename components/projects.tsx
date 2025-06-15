"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ErrorBoundary } from "@/components/error-boundary"
import { Description } from "@radix-ui/react-toast"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Human Stress Detection",
      description:
        "Detects stress levels using Random Forest and scikit-learn, enhancing mental wellness through predictive modeling.",
      image: "/images/human stress detection.png",
      tags: ["Python", "scikit-learn", "Random Forest"],
      categories: ["Technical"],
      githubUrl:
        "https://github.com/celestial-cyber/Stress-Detection-Model-Using-Random-Forest",
    },
    {
      id: 2,
      title: "Heart Disease Prediction",
      description:
        "Predicts heart disease risk using Decision Tree & Streamlit. Features real-time predictions and robust outlier handling.",
      image: "/images/heart disease perdiction.png",
      tags: ["Python", "Streamlit", "Scikit-learn"],
      categories: ["Technical"],
      githubUrl:
        "https://github.com/celestial-cyber/Heart-Disease-Prediction-Using-ML",
    },
    {
      id: 3,
      title: "Diabetes Prediction System",
      description:
        "Uses Random Forest & Streamlit for real-time diabetes predictions with advanced outlier detection and accuracy metrics.",
      image: "/images/Diabetes Prediction.png",
      tags: ["Python", "Streamlit", "Random Forest"],
      categories: ["Technical"],
      githubUrl:
        "https://github.com/celestial-cyber/Diabetes-Prediction-System-using-Random-Forest-and-Streamlit",
    },
    {
      id: 4,
      title: "Cassiopeia - Rule Based Chatbot",
      description:
        "Simple rule-based chatbot that responds based on user input using basic AI techniques.",
      image: "/images/pngtree-chatbot-app-icon-chat-bot-png-image_5281039.png",
      tags: ["Python", "Streamlit", "AI"],
      categories: ["Technical"],
      githubUrl: "https://github.com/celestial-cyber/AI-Chatbot-Streamlit",
    },
    {
      id: 5,
      title: "ManoDarpan - Mental Wellness App",
      description:
        "Privacy-focused AI mental health app with SOS alerts, journaling, mood tracking, and more. Built for Code for Change 2025.",
      image: "/images/ManoDarpan.png",
      tags: ["React", "Tailwind", "TypeScript", "shadcn/ui"],
      categories: ["Technical"],
      liveUrl: "https://manodarpan.lovable.app",
      githubUrl:
        "https://github.com/celestial-cyber/ManoDarpan-The-AI-mental-wellness-app",
    },
    {
      id: 6,
      title: "Arduino Gas Detection System",
      description:
        "Simulated gas detection system with LED & buzzer alerts for environmental safety using Arduino.",
      image: "/images/arduino image.png",
      tags: ["Arduino", "Sensors", "Hardware"],
      categories: ["Hardware"],
      githubUrl:
        "https://github.com/celestial-cyber/Arduino-based-gas-detection-project-with-potentiometer",
    },
    {
      id: 7,
      title: "CarbonWise - Sustainable Living AI",
      description:
        "Detects biodegradable vs non-biodegradable items using image recognition and promotes eco-friendly actions.",
      image: "/images/carbonwise.png",
      tags: ["AI", "Sustainability", "Computer Vision"],
      categories: ["Technical"],
      githubUrl: "https://github.com/celestial-cyber/carbonwise",
    },
    {
      id:8,
      title:"My Portfolio website Version 1",
      description: 
      "I have created my first portfolio website using Prompt Engineering.",
      image: "/images/Portfolio.png",
      tags:["Prompt Engineering","Portfolio","website"],
      categories:["Creative"],
      liveUrl:"https://celestiv.vercel.app",
    },
    {
      id: 9,
      title: "Saturn 3D Visualization",
      description:
        "Interactive Three.js model of Saturn with rings, moons, and orbiting animations in a space-like environment.",
      image: "/images/saturn with moon project.png",
      tags: ["Three.js", "3D", "WebGL"],
      categories: ["Creative"],
      githubUrl: "https://github.com/celestial-cyber/SaturnPlanetCodeWithMoons",
    },
  ]

  const allCategories = ["Technical", "Creative", "Hardware"]
  const [activeCategory, setActiveCategory] = useState("Technical")
  const filteredProjects = projects.filter((project) =>
    project.categories.includes(activeCategory)
  )

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

          {/* Category Filter Buttons */}
          <div className="mx-auto mt-8 max-w-5xl">
            <div className="flex flex-wrap justify-center gap-3">
              {allCategories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="border border-purple-500 text-sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ scale: 1.03 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="flex"
                >
                  <Card className="flex flex-col border border-purple-500 bg-white/5 backdrop-blur-md hover:shadow-xl transition-all duration-300">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image}
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
                    <CardFooter className="flex justify-between px-6 pb-6">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      {project.liveUrl && (
                        <Button size="sm" asChild className="bg-purple-600 text-white hover:bg-purple-700">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
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
            <Button variant="outline" asChild className="border border-purple-500">
              <a href="https://github.com/celestial-cyber" target="_blank" rel="noopener noreferrer">
                View More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}

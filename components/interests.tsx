"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Music, BookOpen, Camera, Globe } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile" // 📱 mobile detection

export default function Interests() {
  const [showAll, setShowAll] = useState(false)
  const isMobile = useIsMobile()

  const interests = [
    {
      id: 1,
      name: "Coding",
      description: "Exploring new languages and frameworks, contributing to open source projects.",
      icon: Code,
    },
    {
      id: 2,
      name: "Digital Art",
      description: "Creating digital illustrations, 3D modeling, and generative art.",
      icon: Palette,
    },
    {
      id: 3,
      name: "Music Production",
      description: "Composing electronic music and experimenting with sound design.",
      icon: Music,
    },
    {
      id: 4,
      name: "Reading",
      description: "Science fiction, philosophy, and technical books on emerging technologies.",
      icon: BookOpen,
    },
    {
      id: 5,
      name: "Photography",
      description: "Urban landscapes, night photography, and abstract compositions.",
      icon: Camera,
    },
    {
      id: 6,
      name: "Travel",
      description: "Exploring different cultures, architectures, and natural landscapes.",
      icon: Globe,
    },
  ]

  const visibleInterests = showAll ? interests : interests.slice(0, 3)

  return (
    <section id="interests" className="bg-muted/10 py-16 md:py-28">
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
              Interests
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground text-base sm:text-lg md:text-xl/relaxed">
              Hobbies and passions beyond my professional work
            </p>
          </div>
        </motion.div>

        <div className={`mx-auto mt-12 grid max-w-5xl gap-6 ${isMobile ? "grid-cols-1" : "sm:grid-cols-2 md:grid-cols-3"}`}>
          {visibleInterests.map((interest, index) => (
            <motion.div
              key={interest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-black">
                    <interest.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{interest.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{interest.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 border border-purple-600 rounded-lg text-purple-700 hover:bg-purple-50 transition-all"
          >
            {showAll ? "Hide" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useIsMobile } from "@/hooks/use-mobile"

export default function Interests() {
  const [showAll, setShowAll] = useState(false)
  const isMobile = useIsMobile()

  const interests = [
    { id: 1, name: "🧠 Exploring and Learning new things" },
    { id: 2, name: "🤖 AIML, Robotics and Cybersecurity" },
    { id: 3, name: "🎨 Painting" },
    { id: 4, name: "📝 Writing poems and blogs" },
    { id: 5, name: "⚡ Harry Potter" },
    { id: 6, name: "🚀 Space Exploration" },
    { id: 7, name: "📚 Reading" },
    { id: 8, name: "📷 Photography" },
  ]

  const visibleInterests = showAll ? interests : interests.slice(0, 6)

  return (
    <section id="interests" className="bg-black py-16 md:py-28 text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent relative inline-block">
              Interests
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
            </h2>
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
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px #a855f7" }}
              className="transition-transform duration-300"
            >
              <Card className="h-full border border-purple-600 bg-[#0e0e0e] hover:bg-purple-950/30 transition-all duration-300 rounded-xl shadow-md">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <h3 className="mt-2 text-lg font-semibold text-purple-100">{interest.name}</h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 border border-purple-600 rounded-lg text-purple-300 hover:bg-purple-800 transition-all"
          >
            {showAll ? "Hide" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  )
}

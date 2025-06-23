"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, Award, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function Achievements() {
  const [showAll, setShowAll] = useState(false)

  const achievements = [
   
    {
      id: 1,
      title: "1st Place in Painting Competition – AQUILA 2024",
      organization: "St. Peter's Engineering College",
      year: "Feb 2024",
      description: "Secured 1st place with a cash prize of ₹3,000 in the painting competition held during AQUILA 2024, the cultural fest of St. Peter's Engineering College.",
      icon: Trophy,
      link: "https://drive.google.com/file/d/1Y9sP8_8wP6Yi9UmMFUbgzXHuIMnQG5fy/view?usp=sharing"
    },
    {
      id: 2,
      title: "2nd Prize in Poster Presentation – SPECFIESTA 2024",
      organization: "St. Peter's Engineering College",
      year: "Feb 2024",
      description: "Won 2nd place with a ₹2,000 cash prize in the poster presentation event at SPECFIESTA 2024. Presented the concept of 3D printing of human organs.",
      icon: Medal,
      link: "https://drive.google.com/file/d/1YtXiZtL8HH9qBWSoxAryOnOgk6CepZz5/view?usp=sharing"
    },
    {
      id: 3,
      title: "Finalist – Code Debugging Event, SPECFIESTA 2024",
      organization: "St. Peter's Engineering College",
      year: "Feb 2024",
      description: "Participated in the Code Debugging event and successfully reached the final round during SPECFIESTA 2024.",
      icon: Award,
      link: "https://drive.google.com/file/d/1YEj-sXHH8Su0L1qcWX62eGOl4taE8ebp/view?usp=sharing"
    },
    {
      id: 4,
      title: "School Topper – UP High School Board Examination",
      organization: "UP Board",
      year: "#",
      description: "Achieved distinction as the second topper of my school in the UP High School Board Examination.",
      icon: Medal
    },
    {
      id: 5,
      title: "1st Place in Essay Writing Competition – Fire Service Week",
      organization: "SSS High School",
      year: "2017",
      description: "Represented my school and secured 1st place in the Essay Writing Competition organized by CISF during Fire Service Week, competing among participants from multiple schools.",
      icon: Trophy,
      link: "https://drive.google.com/file/d/1YCM4rnGpUeAYKhiCkODjl2I_nuUX2xpr/view?usp=sharing"
    },
  ]

  const visibleAchievements = showAll ? achievements : achievements.slice(0, 3)

  return (
    <section id="achievements" className="py-20 md:py-28 bg-black text-white">
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
              Achievements
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Awards, recognitions, and notable accomplishments
            </p>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 md:grid-cols-3">
          {visibleAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-[#0e0e0e] border border-purple-700 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-[1.02] transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <achievement.icon className="h-8 w-8 text-purple-500" />
                    <Badge variant="outline">{achievement.year}</Badge>
                  </div>
                  <CardTitle className="mt-4 text-purple-200">{achievement.title}</CardTitle>
                  <CardDescription className="text-purple-400">{achievement.organization}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  {achievement.link && (
                    <Link
                      href={achievement.link}
                      target="_blank"
                      className="inline-flex items-center gap-1 px-4 py-2 text-sm border border-purple-500 rounded text-purple-300 hover:bg-purple-800 hover:text-white transition w-fit"
                    >
                      View Certificate <ExternalLink className="h-4 w-4" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 border border-purple-600 text-purple-400 hover:bg-purple-800 rounded-lg transition-all"
          >
            {showAll ? "Hide" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  )
}

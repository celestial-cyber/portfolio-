"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Medal, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: "Best Design Award",
      organization: "International Design Competition",
      year: "2023",
      description: "Recognized for exceptional UI/UX design in the digital product category.",
      icon: Trophy,
    },
    {
      id: 2,
      title: "Innovation Excellence",
      organization: "Tech Summit",
      year: "2022",
      description: "Awarded for innovative approach to solving complex user experience challenges.",
      icon: Medal,
    },
    {
      id: 3,
      title: "Outstanding Contribution",
      organization: "Open Source Community",
      year: "2021",
      description: "Recognized for significant contributions to open source projects and community support.",
      icon: Award,
    },
  ]

  return (
    <section id="achievements" className="py-20 md:py-28">
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

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="flex justify-between">
                    <achievement.icon className="h-8 w-8 text-purple-600" />
                    <Badge variant="outline">{achievement.year}</Badge>
                  </div>
                  <CardTitle className="mt-4">{achievement.title}</CardTitle>
                  <CardDescription>{achievement.organization}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

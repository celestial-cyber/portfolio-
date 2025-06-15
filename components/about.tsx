"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const personalTags = ["Coder", "Painter", "Blogger", "Dreamer", "Astrophile", "Explorer", "Philomath", "Shutterbug"]

  return (
    <section id="about" className="py-20 md:py-28">
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
              About Me
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Get to know me and my journey
            </p>
          </div>
        </motion.div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div
              className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg"
              style={{ aspectRatio: "4/5" }}
            >
              <Image src="/images/farheen.jpg" alt="Farheen" fill className="object-cover" priority />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold">Who am I?</h3>
            <p className="text-muted-foreground">
              I'm a passionate 3rd-year AIML student at St. Peter's Engineering College, blending technical expertise
              with artistic vision to create digital experiences that explore the intersection of artificial
              intelligence, cybersecurity, and creative expression.
            </p>
            <p className="text-muted-foreground">
              As an astrophile, I'm constantly fascinated by the cosmos and how it inspires both my technical and
              artistic endeavors. My journey combines the precision of code with the freedom of artistic expression,
              approaching projects holistically with a focus on both functionality and aesthetics.
            </p>
            <p className="text-muted-foreground">
              When I'm not working on technical projects, you might find me painting cosmic landscapes, writing blog
              posts about technology and space, or lost in the fascinating world of books. I'm constantly exploring new
              technologies and techniques to push the boundaries of what's possible.
            </p>

            {/* Personal Tags */}
            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3 text-foreground">What defines me:</h4>
              <div className="flex flex-wrap gap-2">
                {personalTags.map((tag, index) => (
                  <motion.div
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  >
                    <Badge
                      variant="secondary"
                      className="bg-purple-700 text-white hover:bg-purple-600 transition-colors px-3 py-1 text-sm font-medium border border-purple-500"
                    >
                      {tag}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          <Card className="border border-purple-500">
            <CardContent className="flex flex-col items-center p-6">
              <div className="text-4xl font-bold text-primary">3rd</div>
              <p className="text-center text-sm text-muted-foreground">Year AIML Student</p>
            </CardContent>
          </Card>
          <Card className="border border-purple-500">
            <CardContent className="flex flex-col items-center p-6">
              <div className="text-2xl font-bold text-primary text-center">Growth Mindset</div>
              <p className="text-center text-sm text-muted-foreground">Always exploring and evolving</p>
            </CardContent>
          </Card>
          <Card className="border border-purple-500">
            <CardContent className="flex flex-col items-center p-6">
              <div className="text-6xl font-bold text-primary">∞</div>
              <p className="text-center text-sm text-muted-foreground">Curiosity & Learning</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

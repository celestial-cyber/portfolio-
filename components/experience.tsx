"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead the development of modern web applications using React, Next.js, and TypeScript. Implemented responsive designs and improved performance by 40%.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 2,
      role: "UI/UX Designer & Developer",
      company: "Creative Solutions",
      period: "2018 - 2021",
      description:
        "Designed and developed user interfaces for web and mobile applications. Created wireframes, prototypes, and implemented designs using modern frontend technologies.",
      technologies: ["Figma", "Adobe XD", "React", "SCSS"],
    },
    {
      id: 3,
      role: "Web Developer",
      company: "Digital Agency",
      period: "2016 - 2018",
      description:
        "Developed responsive websites and e-commerce solutions for clients across various industries. Collaborated with designers to implement pixel-perfect designs.",
      technologies: ["JavaScript", "HTML/CSS", "WordPress", "PHP"],
    },
  ]

  return (
    <section id="experience" className="bg-muted/10 py-20 md:py-28">
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
              Work Experience
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              My professional journey and career highlights
            </p>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 max-w-4xl space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div>
                      <CardTitle>{exp.role}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Skills() {
  const skillCategories = [
    {
      id: "development",
      name: "Development",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "React", level: 92 },
        { name: "Next.js", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "Three.js", level: 80 },
        { name: "WebGL", level: 75 },
      ],
    },
    {
      id: "design",
      name: "Design",
      skills: [
        { name: "UI/UX Design", level: 90 },
        { name: "Figma", level: 88 },
        { name: "Adobe Creative Suite", level: 85 },
        { name: "3D Modeling", level: 75 },
        { name: "Animation", level: 80 },
        { name: "Typography", level: 85 },
      ],
    },
    {
      id: "other",
      name: "Other Skills",
      skills: [
        { name: "Project Management", level: 85 },
        { name: "Technical Writing", level: 80 },
        { name: "Data Visualization", level: 88 },
        { name: "SEO", level: 75 },
        { name: "Accessibility", level: 90 },
        { name: "Performance Optimization", level: 85 },
      ],
    },
  ]

  return (
    <section id="skills" className="bg-muted/10 py-20 md:py-28">
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
              My Skills
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Technologies and expertise I've mastered
            </p>
          </div>
        </motion.div>
        <div className="mx-auto mt-12 max-w-4xl">
          <Tabs defaultValue="development" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="grid gap-6">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-muted">
                            <motion.div
                              className="h-full bg-primary"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.1 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}

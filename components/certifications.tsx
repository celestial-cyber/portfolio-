"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      name: "Advanced Frontend Development",
      issuer: "Frontend Masters",
      date: "2023",
      description:
        "Comprehensive certification covering advanced React, state management, and performance optimization.",
      link: "https://example.com/cert1",
    },
    {
      id: 2,
      name: "UI/UX Design Professional",
      issuer: "Design Academy",
      date: "2022",
      description: "Professional certification in user interface and user experience design principles and practices.",
      link: "https://example.com/cert2",
    },
    {
      id: 3,
      name: "Full Stack Web Development",
      issuer: "Tech Institute",
      date: "2021",
      description:
        "Complete full stack development certification covering frontend, backend, and database technologies.",
      link: "https://example.com/cert3",
    },
  ]

  return (
    <section id="certifications" className="py-20 md:py-28">
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
              Certifications
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Professional certifications and qualifications
            </p>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <Badge variant="outline">{cert.date}</Badge>
                  </div>
                  <CardTitle className="mt-2">{cert.name}</CardTitle>
                  <CardDescription>{cert.issuer}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
                  >
                    View Certificate
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

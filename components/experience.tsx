"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Experience() {
  const [showAll, setShowAll] = useState(false)

  const experiences = [
    {
      id: 1,
      role: "Associate",
      company: "SPECANCIENS - The Alumni Association of St. Peter's Engineering College",
      period: "August 2024 - Present",
      description:
        "I'm a part of SPECANCIENS which is the alumni association of my college. Being in the Reporting team my work is to document everything from the event coverages to the team updates.",
      technologies: ["Team Work", "Report Writing", "Communication skills", "MS-Word"],
    },
    {
      id: 2,
      role: "Web Content Development",
      company: "Marpu Foundation | NGO",
      period: "July 2024",
      description:
        "As a content developer, I ensured that the content I created aligned with the foundations motto and effectively contributed to spreading their message to the public.",
      technologies: ["Content Creation", "Research"],
      certificate: "https://drive.google.com/file/d/1-sOFB8yh5HaME1hoZvOPfmLebqKVAxV1/view?usp=sharing",
    },
    {
      id: 3,
      role: "Summer of AI Internship",
      company: "Swecha Telangana",
      period: "May 2024 - June 2024",
      description:
        "Collected and curated Telugu language data to support LLM development, while gaining foundational knowledge in AI/ML concepts, model training processes, and dataset preparation.",
      technologies: ["AIML foundation", "Data collection", "Model Training", "Automatic Speech Recognition", "Natural Language Processing (NLP)"],
      certificate: "https://drive.google.com/file/d/1qHegkZ17SAzZD2wHvt5G4rjnPvo0IMoj/view?usp=sharing",
    },
    {
      id: 4,
      role: "Fundraiser and Content Writer",
      company: "Kshitiksha Foundation",
      period: "April 2024 - May 2024",
      description:
        "My experience as a content creator and fundraiser at the Kshitiksha Foundation has further strengthened my communication and organizational skills.",
      technologies: ["Blogging", "Fundraiser", "Research", "Content creation"],
      certificate: "https://drive.google.com/file/d/1LVSOpJ9kqbDvVCdUgPmztsCtOY6cr0uo/view?usp=sharing",
    },
    {
      id: 5,
      role: "Content Writer",
      company: "Marpu Foundation",
      period: "December 2023 - January 2024",
      description:
        "At Marpu Foundation, as a writing intern, I refined my research and writing skills gaining insights into creating compelling content. Grateful for contributing to the foundation's mission.",
      technologies: ["Web Content creation"],
      certificate: "https://drive.google.com/file/d/1FbVlK51Hp489Oc2a8WMkaY2uDUjqbQ4y/view?usp=sharing",
    },
  ]

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3)

  return (
    <section id="experience" className="bg-black py-20 md:py-28 text-white">
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
          {displayedExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-muted/20 border-purple-600">
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-purple-700 text-white px-3 py-1 rounded-full">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {exp.certificate && (
                    <a
                      href={exp.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-purple-600 text-purple-400 px-4 py-2 rounded-md hover:bg-purple-800 transition"
                    >
                      <ExternalLink size={16} /> View Certificate
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            className="border-purple-600 text-purple-400 hover:bg-purple-800"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Hide" : "Show More"}
          </Button>
        </div>
      </div>
    </section>
  )
}

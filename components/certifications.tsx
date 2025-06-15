"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Certifications() {
  const courses = [
    {
      id: 1,
      name: "Web Content Development",
      issuer: "Marpu Foundation",
      date: "Jul 2024",
      description: "Completed a program focused on professional content creation for the web.",
      link: "https://drive.google.com/file/d/1-sOFB8yh5HaME1hoZvOPfmLebqKVAxV1/view?usp=sharing",
    },
    {
      id: 2,
      name: "Summer of AI",
      issuer: "Swecha Telangana",
      date: "May–Jun 2024",
      description: "Participated in AI and ML workshops, building smart, sustainable applications.",
      link: "https://drive.google.com/file/d/1qHegkZ17SAzZD2wHvt5G4rjnPvo0IMoj/view?usp=sharing",
    },
    {
      id: 3,
      name: "Fundraiser and Content Writer",
      issuer: "Kshitiksha Foundation",
      date: "Apr–May 2024",
      description: "Worked on digital campaigns and content initiatives during a fundraising drive.",
      link: "https://drive.google.com/file/d/1LVSOpJ9kqbDvVCdUgPmztsCtOY6cr0uo/view?usp=sharing",
    },
    {
      id: 4,
      name: "Content Writer",
      issuer: "Marpu Foundation",
      date: "Dec 2023–Jan 2024",
      description: "Volunteered to develop content and communication materials for awareness.",
      link: "https://drive.google.com/file/d/1FbVlK51Hp489Oc2a8WMkaY2uDUjqbQ4y/view?usp=sharing",
    },
  ]

  const competitions = [
    {
      id: 1,
      name: "Hackatopia 2025",
      issuer: "Devpost / Certopus",
      date: "Apr 2025",
      description: "Participated in a team hackathon solving real-world digital challenges.",
      link: "https://certopus.com/c/80550047e1c34a399ec73281a01b7749",
    },
    {
      id: 2,
      name: "Green Pioneer’s Hackathon",
      issuer: "Devpost",
      date: "Mar 2025",
      description: "Submitted a sustainability-focused project with technical innovation.",
      link: "https://drive.google.com/file/d/1zz4ieoFO7WlIjj7fBy8Ii60C-NaKQE_Z/view?usp=drive_link",
    },
    {
      id: 3,
      name: "AI Hack Day 2025 - Visionaries",
      issuer: "St. Peter’s Engineering College",
      date: "Jan 2025",
      description: "Engaged in AI prototype design and presentation.",
      link: "https://drive.google.com/file/d/1FxQhnQixENFgvDbGFkQdcuaefMI3WBZq/view?usp=drive_link",
    },
    {
      id: 4,
      name: "Essay Writing Competition",
      issuer: "SPEC-NSS",
      date: "2024",
      description: "Participated in a socially-themed essay competition.",
      link: "https://drive.google.com/file/d/1ynLFajJqht3JWFu3WSfDhCSEluWtrB1F/view?usp=drive_link",
    },
    {
      id: 5,
      name: "Aquilla Painting Competition - 1st Prize",
      issuer: "Aquilla Art Fest",
      date: "2024",
      description: "Secured 1st position in a national-level painting event.",
      link: "https://drive.google.com/file/d/1Y9sP8_8wP6Yi9UmMFUbgzXHuIMnQG5fy/view?usp=sharing",
    },
    {
      id: 6,
      name: "CISF Essay Writing",
      issuer: "CISF",
      date: "2024",
      description: "Participated in a national-level essay writing event conducted by CISF.",
      link: "https://drive.google.com/file/d/1YCM4rnGpUeAYKhiCkODjl2I_nuUX2xpr/view?usp=sharing",
    },
  ]

  const [showAllCourses, setShowAllCourses] = useState(false)
  const [showAllCompetitions, setShowAllCompetitions] = useState(false)

  const renderSection = (title: string, data: typeof courses, showAll: boolean, toggleShow: () => void) => {
    const visibleData = showAll ? data : data.slice(0, 3)

    return (
      <>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center mt-16"
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent relative inline-block">
              {title}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
            </h3>
          </div>
        </motion.div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleData.map((cert, index) => (
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

        {data.length > 3 && (
          <div className="mt-8 text-center">
            <Button variant="outline" onClick={toggleShow}>
              {showAll ? "Hide" : "Show More"}
            </Button>
          </div>
        )}
      </>
    )
  }

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
              Course completions and competition achievements
            </p>
          </div>
        </motion.div>

        {renderSection("Courses", courses, showAllCourses, () => setShowAllCourses(!showAllCourses))}
        {renderSection("Competition Participation", competitions, showAllCompetitions, () =>
          setShowAllCompetitions(!showAllCompetitions)
        )}
      </div>
    </section>
  )
}

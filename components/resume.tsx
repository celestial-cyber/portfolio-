"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download } from "lucide-react"

export default function Resume() {
  const educationData = [
    {
      degree: "B.Tech in Artificial Intelligence and Machine Learning",
      institution: "St. Peter's Engineering College",
      period: "2023 - Present",
      type: "current",
    },
    {
      degree: "Diploma in Computer Applications (Web Designing)",
      institution: "Omsoft Technologies",
      period: "Aug 2022 - July 2023",
      type: "completed",
    },
    {
      degree: "Course on Computer Concepts",
      institution: "NIELIT (National Institute of Electronics & Information Technology)",
      period: "Jul 2021 - Aug 2021",
      grade: "Grade B",
      type: "completed",
    },
    {
      degree: "Intermediate Education",
      institution: "Shiksha Niketan Intermediate College",
      period: "",
      grade: "80%",
      type: "completed",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Swami Sathyanand Saraswathy Higher Secondary School",
      period: "",
      grade: "87%",
      type: "completed",
    },
  ]

  return (
    <section id="resume" className="py-20 md:py-28">
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
              Resume
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
            </h2>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 max-w-4xl">
          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-12 px-4 sm:px-0"
          >
            <Button
              className="bg-black border border-purple-500 text-purple-400 hover:bg-purple-900 hover:text-white px-6 py-3 rounded-full transition-all duration-300"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1xMgI89Uudw7uFOQg64AeYwIxYbJv9PPm/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-black border border-purple-500 rounded-lg shadow-lg w-full">
              <CardContent className="p-4 sm:p-8">
                <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
                <div className="space-y-6">
                  {educationData.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="border-l-2 border-purple-500 pl-4 sm:pl-6 pb-6 last:pb-0"
                    >
                      <div className="space-y-2 sm:space-y-3">
                        <h4 className="text-lg font-semibold text-purple-200">{edu.degree}</h4>
                        <p className="text-gray-300 font-medium">{edu.institution}</p>
                        {edu.period && (
                          <p className="text-gray-400 text-sm">{edu.period}</p>
                        )}
                        {edu.grade && (
                          <p className="text-gray-400 text-sm">Grade: {edu.grade}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

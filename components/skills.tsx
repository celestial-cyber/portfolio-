"use client"

import { motion } from "framer-motion"

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming & Development",
      skills: [
        "Python", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-Learn", "PyTorch", "Java", "C",
        "C++", "JavaScript", "PHP", "HTML", "CSS", "W3CSS", "OOP", "Arduino Programming", "Arduino IDE",
        "MySQL", "SQL", "UML", "StartUML", "TurboC", "IDLE", "Jupyter", "Eclipse", "GitHub"
      ],
      color: "bg-purple-900/20 text-purple-300 border-purple-500"
    },
    {
      name: "AI/ML, Data Science & Cybersecurity",
      skills: [
        "Machine Learning", "Generative AI", "Prompt Engineering", "Generative AI Tools", "Data Visualization", "Data Analysis", "Cybersecurity",
        "Computer Networking"
      ],
      color: "bg-purple-900/20 text-purple-300 border-purple-500"
    },
    {
      name: "Creative Skills",
      skills: [
        "Canva Design", "Blogging", "Content Development", "Content Strategy", "Web Content Writing",
        "Social Media Management", "Presentation Skills", "Anchoring", "Painting", "Photography", "Online Content Creation"
      ],
      color: "bg-cyan-900/20 text-cyan-300 border-cyan-400"
    },
    {
      name: "Soft Skills",
      skills: [
        "Teamwork", "Communication", "Problem Solving", "Critical Thinking", "Leadership", "Time Management",
        "Adaptability", "Creativity", "Email & Office Etiquette", "Report Writing", "Fundraising", "Productivity Improvement"
      ],
      color: "bg-rose-900/20 text-rose-300 border-rose-400"
    }
  ]

  return (
    <section id="skills" className="py-20 md:py-28 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-300 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="mx-auto w-24 h-1 bg-cyan-400 rounded-full" />
        </motion.div>

        <div className="mt-12 space-y-12 max-w-5xl mx-auto">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`p-6 rounded-xl border shadow-md ${
                category.color.includes("purple")
                  ? "border-purple-500"
                  : category.color.includes("cyan")
                  ? "border-cyan-400"
                  : "border-rose-400"
              }`}
            >
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 text-sm rounded-full border transition duration-300 hover:scale-105 hover:shadow-md ${category.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

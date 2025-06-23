"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Instagram, Linkedin, Code2, Twitter, Globe, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-black text-white">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent relative inline-block">
              Contact Me
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Have a project in mind or want to collaborate? Let's talk!
            </p>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {/* Get in Touch Form (Left Side) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex"
          >
            <Card className="w-full h-full flex-grow bg-[#0e0e0e] border border-purple-600 hover:shadow-lg hover:shadow-purple-600/30 transition-all">
              <CardContent className="p-6 h-full">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Get In Touch</h3>
                <form
                  action="https://formspree.io/f/mnnvqvbk"
                  method="POST"
                  className="space-y-4"
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="Subject" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message" className="min-h-32" required />
                  </div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 transition-all">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Connect With Me (Right Side) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex"
          >
            <Card className="w-full h-full flex-grow bg-[#0e0e0e] border border-purple-600 hover:shadow-lg hover:shadow-purple-600/30 transition-all">
              <CardContent className="p-6 h-full space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-purple-400">Connect With Me</h3>
                  <div className="space-y-4 mt-4">
                    <div className="flex items-center gap-4">
                      <Mail className="text-purple-400" />
                      <a href="mailto:farheennisha1405@gmail.com" className="text-cyan-400 hover:underline text-sm">
                        farheennisha1405@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Instagram className="text-purple-400" />
                      <a href="https://instagram.com/i.farheen.nisha" className="text-cyan-400 hover:underline text-sm">
                        @i.farheen.nisha
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Linkedin className="text-purple-400" />
                      <a href="https://linkedin.com/in/farheennisha" className="text-cyan-400 hover:underline text-sm">
                        linkedin.com/in/farheennisha
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Code2 className="text-purple-400" />
                      <a href="https://leetcode.com/u/CelestialV" className="text-cyan-400 hover:underline text-sm">
                        leetcode.com/u/CelestialV
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Twitter className="text-purple-400" />
                      <a href="https://x.com/I_CelestialV" className="text-cyan-400 hover:underline text-sm">
                        @I_CelestialV
                      </a>
                    </div>
                    <div className="flex items-center gap-4">
                      <Globe className="text-purple-400" />
                      <a href="https://curiousmindtales.blogspot.com" className="text-cyan-400 hover:underline text-sm">
                        curiousmindtales.blogspot.com
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-purple-400">Follow Me</h3>
                  <div className="flex gap-4 mt-4">
                    <a href="https://x.com/I_CelestialV" className="bg-purple-800 hover:bg-purple-700 rounded-full p-3 transition-all">
                      <Twitter className="text-white h-5 w-5" />
                    </a>
                    <a href="https://instagram.com/i.farheen.nisha" className="bg-purple-800 hover:bg-purple-700 rounded-full p-3 transition-all">
                      <Instagram className="text-white h-5 w-5" />
                    </a>
                    <a href="https://github.com/CelestialV" className="bg-purple-800 hover:bg-purple-700 rounded-full p-3 transition-all">
                      <Github className="text-white h-5 w-5" />
                    </a>
                    <a href="https://leetcode.com/u/CelestialV" className="bg-purple-800 hover:bg-purple-700 rounded-full p-3 transition-all">
                      <Code2 className="text-white h-5 w-5" />
                    </a>
                    <a href="https://linkedin.com/in/farheennisha" className="bg-purple-800 hover:bg-purple-700 rounded-full p-3 transition-all">
                      <Linkedin className="text-white h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

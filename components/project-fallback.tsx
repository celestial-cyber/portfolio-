"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, Github, Info } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ProjectFallbackProps {
  title: string
  description: string
  longDescription?: string
  imageSrc: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  isOriginalBroken?: boolean
}

export default function ProjectFallback({
  title,
  description,
  longDescription,
  imageSrc,
  tags,
  githubUrl,
  liveUrl,
  isOriginalBroken = true,
}: ProjectFallbackProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex"
    >
      <Card className="flex flex-col overflow-hidden">
        <div
          className="relative aspect-video overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src={imageSrc || "/placeholder.svg?height=400&width=600"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
          />
          {isOriginalBroken && (
            <div className="absolute right-2 top-2 rounded-full bg-background/80 p-1 backdrop-blur-sm">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Info className="h-4 w-4" />
                    <span className="sr-only">Project status information</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Project Status</DialogTitle>
                    <DialogDescription>
                      The interactive version of this project is currently undergoing maintenance. This is a simplified
                      preview version. The full interactive project will be back online soon.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      You can still view the project code on GitHub or check out the live version (which may have
                      limited functionality).
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          {longDescription && (
            <p className="mt-4 text-sm text-muted-foreground">
              {longDescription.length > 150 ? `${longDescription.substring(0, 150)}...` : longDescription}
            </p>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

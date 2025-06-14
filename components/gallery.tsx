"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<null | {
    id: number
    title: string
    description: string
    src: string
    category: string
  }>(null)

  const artworks = [
    {
      id: 1,
      title: "Cosmic Dreams",
      description: "Digital illustration exploring the vastness of space and imagination.",
      src: "/placeholder.svg?height=400&width=400",
      category: "Digital Art",
    },
    {
      id: 2,
      title: "Urban Reflections",
      description: "Photography series capturing city life through reflective surfaces.",
      src: "/placeholder.svg?height=400&width=400",
      category: "Photography",
    },
    {
      id: 3,
      title: "Abstract Emotions",
      description: "Abstract painting expressing the complexity of human emotions.",
      src: "/placeholder.svg?height=400&width=400",
      category: "Painting",
    },
    {
      id: 4,
      title: "Geometric Harmony",
      description: "Digital design exploring the balance between geometric shapes and colors.",
      src: "/placeholder.svg?height=400&width=400",
      category: "Digital Art",
    },
    {
      id: 5,
      title: "Nature's Patterns",
      description: "Macro photography revealing the intricate patterns found in nature.",
      src: "/placeholder.svg?height=400&width=400",
      category: "Photography",
    },
    {
      id: 6,
      title: "Celestial Bodies",
      description: "Mixed media artwork inspired by celestial objects and cosmic phenomena.",
      src: "/placeholder.svg?height=400&width=400",
      category: "Mixed Media",
    },
  ]

  return (
    <section id="gallery" className="py-20 md:py-28">
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
              Art Gallery
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              A collection of my artistic creations and visual explorations
            </p>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 md:grid-cols-3">
          {artworks.map((artwork, index) => (
            <motion.div
              key={artwork.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(artwork)}
            >
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={artwork.src || "/placeholder.svg"}
                  alt={artwork.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute bottom-0 w-full p-4">
                    <h3 className="text-lg font-semibold text-white">{artwork.title}</h3>
                    <Badge variant="secondary" className="mt-2 bg-purple-600/80 text-white">
                      {artwork.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          {selectedImage && (
            <DialogContent className="max-w-3xl">
              <DialogHeader>
                <DialogTitle>{selectedImage.title}</DialogTitle>
                <DialogDescription>{selectedImage.category}</DialogDescription>
              </DialogHeader>
              <div className="relative aspect-video w-full overflow-hidden rounded-md">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-muted-foreground">{selectedImage.description}</p>
            </DialogContent>
          )}
        </Dialog>

        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            className="bg-gradient-to-br from-purple-600 to-black text-white hover:from-purple-700 hover:to-gray-900"
            asChild
          >
            <a href="/gallery">View Full Gallery</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

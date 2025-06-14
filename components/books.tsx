"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

export default function Books() {
  const books = [
    {
      id: 1,
      title: "The Art of Design Systems",
      author: "Celestial V",
      cover: "/placeholder.svg?height=400&width=250",
      description:
        "A comprehensive guide to creating and implementing design systems for digital products and websites.",
      rating: 4.8,
      category: "Design",
      link: "https://example.com/book1",
    },
    {
      id: 2,
      title: "Modern Web Development",
      author: "Celestial V",
      cover: "/placeholder.svg?height=400&width=250",
      description:
        "Practical approaches and best practices for building modern, performant, and accessible web applications.",
      rating: 4.7,
      category: "Development",
      link: "https://example.com/book2",
    },
    {
      id: 3,
      title: "Creative Coding",
      author: "Celestial V",
      cover: "/placeholder.svg?height=400&width=250",
      description: "Exploring the intersection of art and technology through generative art and creative coding.",
      rating: 4.9,
      category: "Art & Technology",
      link: "https://example.com/book3",
    },
  ]

  return (
    <section id="books" className="bg-muted/10 py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Books</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Publications and literary works I've authored
            </p>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-3">
          {books.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative mx-auto mt-6 h-64 w-40 overflow-hidden rounded">
                  <Image src={book.cover || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
                </div>
                <CardHeader className="pb-2">
                  <Badge variant="outline" className="w-fit">
                    {book.category}
                  </Badge>
                  <CardTitle className="mt-2">{book.title}</CardTitle>
                  <CardDescription>by {book.author}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{book.description}</p>
                  <div className="mt-4 flex items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(book.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">{book.rating}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="w-full bg-gradient-to-br from-purple-600 to-black text-white hover:from-purple-700 hover:to-gray-900"
                    asChild
                  >
                    <a href={book.link} target="_blank" rel="noopener noreferrer">
                      Learn More
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

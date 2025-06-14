"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calendar, Star } from "lucide-react"

export default function ReadingJourney() {
  const readingStats = [
    { label: "Books Read This Year", value: "47", icon: BookOpen },
    { label: "Favorite Genre", value: "Sci-Fi", icon: Star },
    { label: "Reading Goal", value: "52 Books", icon: Calendar },
  ]

  const currentlyReading = [
    {
      id: 1,
      title: "The Three-Body Problem",
      author: "Liu Cixin",
      cover: "/placeholder.svg?height=300&width=200",
      progress: 65,
      genre: "Science Fiction",
      startDate: "Dec 2024",
    },
    {
      id: 2,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "/placeholder.svg?height=300&width=200",
      progress: 30,
      genre: "Self-Help",
      startDate: "Dec 2024",
    },
  ]

  const recentlyFinished = [
    {
      id: 1,
      title: "Project Hail Mary",
      author: "Andy Weir",
      cover: "/placeholder.svg?height=300&width=200",
      rating: 5,
      genre: "Science Fiction",
      finishedDate: "Nov 2024",
      review: "An absolutely brilliant hard sci-fi novel with humor and heart. Weir's best work yet!",
    },
    {
      id: 2,
      title: "The Design of Everyday Things",
      author: "Don Norman",
      cover: "/placeholder.svg?height=300&width=200",
      rating: 4,
      genre: "Design",
      finishedDate: "Nov 2024",
      review: "Essential reading for anyone in design or UX. Changed how I think about user interfaces.",
    },
    {
      id: 3,
      title: "Klara and the Sun",
      author: "Kazuo Ishiguro",
      cover: "/placeholder.svg?height=300&width=200",
      rating: 4,
      genre: "Literary Fiction",
      finishedDate: "Oct 2024",
      review: "Beautiful and haunting exploration of AI consciousness and human connection.",
    },
  ]

  const favoriteBooks = [
    {
      id: 1,
      title: "Dune",
      author: "Frank Herbert",
      cover: "/placeholder.svg?height=300&width=200",
      genre: "Science Fiction",
      impact: "Shaped my love for complex world-building and political intrigue in storytelling.",
    },
    {
      id: 2,
      title: "The Pragmatic Programmer",
      author: "David Thomas & Andrew Hunt",
      cover: "/placeholder.svg?height=300&width=200",
      genre: "Programming",
      impact: "Fundamentally changed my approach to software development and problem-solving.",
    },
    {
      id: 3,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      cover: "/placeholder.svg?height=300&width=200",
      genre: "History",
      impact: "Provided a fascinating perspective on human civilization and our future.",
    },
  ]

  return (
    <section id="reading-journey" className="bg-muted/10 py-20 md:py-28">
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
              My Reading Journey
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Exploring worlds through words, one page at a time
            </p>
          </div>
        </motion.div>

        {/* Reading Stats */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
          {readingStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="flex flex-col items-center p-6">
                  <stat.icon className="h-8 w-8 text-purple-600 mb-2" />
                  <div className="text-3xl font-bold text-purple-600">{stat.value}</div>
                  <p className="text-center text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Currently Reading */}
        <div className="mx-auto mt-16 max-w-6xl">
          <h3 className="mb-8 text-2xl font-bold text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Currently Reading
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {currentlyReading.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <div className="flex gap-4">
                      <div className="relative h-24 w-16 flex-shrink-0 overflow-hidden rounded">
                        <Image src={book.cover || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{book.title}</CardTitle>
                        <CardDescription>by {book.author}</CardDescription>
                        <Badge variant="outline" className="mt-2">
                          {book.genre}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{book.progress}%</span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-500"
                          style={{ width: `${book.progress}%` }}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">Started {book.startDate}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recently Finished */}
        <div className="mx-auto mt-16 max-w-6xl">
          <h3 className="mb-8 text-2xl font-bold text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            Recently Finished
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentlyFinished.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex gap-4">
                      <div className="relative h-24 w-16 flex-shrink-0 overflow-hidden rounded">
                        <Image src={book.cover || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{book.title}</CardTitle>
                        <CardDescription>by {book.author}</CardDescription>
                        <div className="mt-2 flex items-center gap-2">
                          <Badge variant="outline">{book.genre}</Badge>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < book.rating ? "fill-yellow-400 text-yellow-400" : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground italic">"{book.review}"</p>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <p className="text-xs text-muted-foreground">Finished {book.finishedDate}</p>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All-Time Favorites */}
        <div className="mx-auto mt-16 max-w-6xl">
          <h3 className="mb-8 text-2xl font-bold text-center bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            All-Time Favorites
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {favoriteBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="text-center">
                    <div className="relative mx-auto h-32 w-20 overflow-hidden rounded">
                      <Image src={book.cover || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
                    </div>
                    <CardTitle className="mt-4">{book.title}</CardTitle>
                    <CardDescription>by {book.author}</CardDescription>
                    <Badge variant="outline" className="mx-auto w-fit">
                      {book.genre}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground text-center italic">"{book.impact}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Reading Goals */}
        <div className="mx-auto mt-16 max-w-4xl text-center">
          <Card>
            <CardContent className="p-8">
              <h3 className="mb-4 text-xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                2024 Reading Challenge
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span>Progress towards 52 books</span>
                  <span>47/52 books</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 to-purple-400 transition-all duration-1000"
                    style={{ width: `${(47 / 52) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground">Only 5 more books to reach my goal!</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

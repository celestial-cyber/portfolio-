"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies that will shape the future of web development.",
      image: "/placeholder.svg?height=300&width=500",
      date: "June 15, 2023",
      readTime: "5 min read",
      categories: ["Web Development", "Technology"],
      link: "/blog/future-of-web-development",
    },
    {
      id: 2,
      title: "Mastering UI Design Principles",
      excerpt: "A deep dive into essential UI design principles that create exceptional user experiences.",
      image: "/placeholder.svg?height=300&width=500",
      date: "May 22, 2023",
      readTime: "7 min read",
      categories: ["UI/UX", "Design"],
      link: "/blog/ui-design-principles",
    },
    {
      id: 3,
      title: "Optimizing React Performance",
      excerpt: "Practical techniques to improve the performance of your React applications.",
      image: "/placeholder.svg?height=300&width=500",
      date: "April 10, 2023",
      readTime: "6 min read",
      categories: ["React", "Performance"],
      link: "/blog/react-performance",
    },
  ]

  return (
    <section id="blog" className="bg-muted/10 py-20 md:py-28">
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
              Blog
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Thoughts, insights, and tutorials on design and development
            </p>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category) => (
                      <Badge key={category} variant="secondary" className="bg-purple-600/10 text-purple-600">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="mt-2 line-clamp-2">{post.title}</CardTitle>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-3 w-3" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="w-full bg-gradient-to-br from-purple-600 to-black text-white hover:from-purple-700 hover:to-gray-900"
                    asChild
                  >
                    <a href={post.link}>Read More</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            className="bg-gradient-to-br from-purple-600 to-black text-white hover:from-purple-700 hover:to-gray-900"
            asChild
          >
            <a href="/blog">View All Posts</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

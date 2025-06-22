"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Unmaking Arima: A Dream between Creation and Destruction",
      excerpt:
        "What if the universe had a religion—not bound by names, rituals, or beliefs, but rooted in consciousness, oneness, and truth?",
      image: "/images/robot.jpeg",
      date: "June 7, 2025",
      category: "Sci-fi",
      link: "https://curiousmindtales.blogspot.com/2025/06/unmaking-arima-dream-between-creation.html",
    },
    {
      id: 2,
      title: "A Strange Birthday Wish",
      excerpt:
        "In this sci-fi mystery, follow Mr. Cookie as he unravels cryptic birthday messages from a stranger claiming to be his entangled twin.",
      image: "/images/strange message.png",
      date: "May 15, 2025",
      category: "Sci-Fi",
      link: "/blog/strange-birthday",
    },
    {
      id: 3,
      title: "Nostalgia: Reunite, Relive, and Recreate",
      excerpt:
        "Hi, I'm Celestial V—this blog captures my experience volunteering at my college’s alumni meet, where memories, reflections, and future dreams all met in one unforgettable evening.",

      image: "/images/SA.jpeg",
      date: "July 24, 2023",
      category: "Personal Experience",
      link: "https://curiousmindtales.blogspot.com/2024/12/nostalgia-reunite-relive-and-recreate.html",
    },
  ]

  return (
    <section id="blog" className="bg-black py-20 md:py-28 text-white">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent relative inline-block">
            Blog
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></div>
          </h2>
          <p className="text-purple-300 max-w-[700px] text-base md:text-lg">
            Stories, science & the surreal — direct from my cosmos 🪐
          </p>
        </motion.div>

        {/* Blog Cards */}
        <div className="mx-auto mt-12 grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0e0e0e] border border-purple-600 rounded-xl overflow-hidden hover:shadow-[0_0_15px_#a855f7] transition-all duration-300 flex flex-col"
            >
              {/* Blog Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <span className="inline-block mb-2 text-xs px-3 py-1 rounded-full bg-purple-800/20 text-purple-300 border border-purple-500 font-medium w-fit">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold mb-1 text-purple-100">{post.title}</h3>
                <p className="text-sm text-purple-200 line-clamp-3 mb-3">{post.excerpt}</p>
                <div className="text-xs text-purple-400 flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4" /> {post.date}
                </div>

                {/* Read More Button */}
                <Link
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block text-sm text-purple-300 border border-purple-500 px-4 py-2 rounded text-center hover:bg-purple-800 transition w-full"
                >
                  Read More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blog CTA Button */}
        <div className="mt-12 flex justify-center">
          <Link
            href="https://curiousmindtales.blogspot.com"
            target="_blank"
            className="px-6 py-2 border border-purple-500 bg-gradient-to-br from-purple-600 to-black text-white rounded hover:from-purple-700 hover:to-gray-900 transition"
          >
            🌌 Visit My Blog
          </Link>
        </div>
      </div>
    </section>
  )
}

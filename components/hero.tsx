"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import TypewriterEffect from "./typewriter-effect"
import SaturnAnimation from "./saturn-animation"

export default function Hero() {
  const phrases = ["Hey, I'm Celestial V", "a dreamer, artist, and explorer"]

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="container relative flex min-h-screen flex-col items-center px-4 pt-0 md:px-6">
        {/* Saturn Animation - Moved higher up */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="z-10 mt-[-120px]" // Changed from mt-[-80px] to mt-[-120px]
          style={{
            position: "relative",
          }}
        >
          <SaturnAnimation />
        </motion.div>

        {/* Content container - Adjusted positioning */}
        <div className="relative z-20 flex flex-col items-center mt-[-320px]">
          {" "}
          {/* Changed from mt-[-280px] to mt-[-320px] */}
          {/* Typewriter Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-3 h-12 text-center flex items-center justify-center"
            style={{
              textShadow: "0 0 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
            }}
          >
            <TypewriterEffect
              phrases={phrases}
              typingSpeed={120}
              deletingSpeed={80}
              delayAfterPhrase={2500}
              delayAfterDeletion={800}
              className="text-2xl md:text-4xl lg:text-5xl font-mono leading-tight"
              style={{
                fontFamily:
                  '"Courier New", "SF Mono", Monaco, Inconsolata, "Roboto Mono", "Source Code Pro", monospace',
              }}
            />
          </motion.div>
          {/* Quote - Larger and white */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mb-5 max-w-2xl text-center text-xl italic text-white"
            style={{
              textShadow: "0 0 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
            }}
          >
            "Wandering the stars with curious mind and a soul stitched with stories"
          </motion.p>
          {/* Explore Button - With integrated downward arrow and enhanced glow effect */}
          <Link href="#about">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="min-w-[180px] rounded-md border border-purple-400 bg-[#2D1A45] px-4 py-2 text-sm font-medium text-white shadow-[0_2px_0_0_#1a0f29] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3D2A55] hover:shadow-[0_4px_0_0_#1a0f29,0_0_20px_rgba(168,85,247,0.4),0_0_40px_rgba(168,85,247,0.2)] active:translate-y-0.5 active:shadow-none group relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #2D1A45 0%, #3D2A55 100%)",
              }}
            >
              {/* Subtle animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />

              {/* Button content */}
              <span className="relative flex items-center justify-center z-10">
                Explore My Universe
                <motion.div
                  animate={{
                    y: [0, 3, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="ml-2 inline-flex"
                >
                  <ChevronDown className="h-4 w-4 text-purple-300 group-hover:text-white transition-colors duration-300" />
                </motion.div>
              </span>

              {/* Enhanced glow ring on hover */}
              <div className="absolute inset-0 rounded-md border border-purple-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}

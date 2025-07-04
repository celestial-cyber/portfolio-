"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import TypewriterEffect from "./typewriter-effect"
import SaturnAnimation from "./saturn-animation"

export default function Hero() {
  const phrases = ["Hey, I'm Celestial V", "a dreamer, artist, and explorer"]

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black">
      <div className="container mx-auto flex flex-col items-center justify-center px-4 pt-16 pb-10 md:px-6 md:pt-24 md:pb-20">
        
        {/* Saturn Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-[500px] md:max-w-[600px] aspect-square flex justify-center items-center relative z-10"
        >
          <SaturnAnimation />
        </motion.div>

        {/* Typewriter + Quote + Button */}
        <div className="mt-[-60px] md:mt-[-120px] flex flex-col items-center text-center z-20 px-2">
          
          {/* Typewriter Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-4"
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
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-mono leading-tight"
            />
          </motion.div>

          {/* Quote */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mb-6 max-w-xl text-base md:text-xl italic text-white px-4"
            style={{
              textShadow: "0 0 10px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)",
            }}
          >
            "Wandering the stars with a curious mind and a soul stitched with stories"
          </motion.p>

          {/* Button */}
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
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
              <span className="relative flex items-center justify-center z-10">
                Explore My Universe
                <motion.div
                  animate={{ y: [0, 3, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="ml-2 inline-flex"
                >
                  <ChevronDown className="h-4 w-4 text-purple-300 group-hover:text-white transition-colors duration-300" />
                </motion.div>
              </span>
              <div className="absolute inset-0 rounded-md border border-purple-300/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-pulse" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
}

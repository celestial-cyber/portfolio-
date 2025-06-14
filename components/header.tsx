"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "resume",
        "projects",
        "skills",
        "experience",
        "certifications",
        "blog",
        "gallery",
        "books",
        "achievements",
        "contact",
      ]

      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Resume", href: "#resume" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Certifications", href: "#certifications" },
    { name: "Blog", href: "#blog" },
    { name: "Art Gallery", href: "#gallery" },
    { name: "Books", href: "#books" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-black py-4">
      <div className="container flex items-center px-4 md:px-6">
        <div className="flex w-full items-center">
          <Link href="/" className="mr-6 text-xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Celestial V
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden flex-grow md:block">
            <div className="no-scrollbar flex items-center gap-3 overflow-x-auto">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <button
                    className={cn(
                      "min-w-[110px] rounded-md border border-purple-400 bg-[#2D1A45] px-4 py-2 text-sm font-medium text-white shadow-[0_2px_0_0_#1a0f29] transition-all hover:-translate-y-0.5 hover:bg-[#3D2A55] hover:shadow-[0_4px_0_0_#1a0f29] active:translate-y-0.5 active:shadow-none",
                      activeSection === link.href.substring(1) &&
                        "bg-[#3D2A55] shadow-[0_2px_0_0_#1a0f29,inset_0_2px_4px_rgba(0,0,0,0.3)]",
                    )}
                  >
                    {link.name}
                  </button>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="ml-auto flex items-center md:hidden">
            <button
              className="rounded-md border border-purple-400 bg-[#2D1A45] p-1.5 text-white shadow-[0_2px_0_0_#1a0f29] transition-all hover:-translate-y-0.5 hover:bg-[#3D2A55] hover:shadow-[0_4px_0_0_#1a0f29] active:translate-y-0.5 active:shadow-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-black md:hidden">
          <nav className="container flex flex-col items-center gap-3 p-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="w-full" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full rounded-md border border-purple-400 bg-[#2D1A45] py-2 text-white shadow-[0_2px_0_0_#1a0f29] transition-all hover:-translate-y-0.5 hover:bg-[#3D2A55] hover:shadow-[0_4px_0_0_#1a0f29] active:translate-y-0.5 active:shadow-none">
                  {link.name}
                </button>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

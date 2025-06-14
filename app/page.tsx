import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Resume from "@/components/resume"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Certifications from "@/components/certifications"
import Blog from "@/components/blog"
import Gallery from "@/components/gallery"
import ReadingJourney from "@/components/reading-journey"
import Achievements from "@/components/achievements"
import Interests from "@/components/interests"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { Suspense } from "react"
import { LoadingSpinner } from "@/components/loading-spinner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16">
        <Hero />
        <About />
        <Resume />
        <Suspense fallback={<LoadingSpinner />}>
          <Projects />
        </Suspense>
        <Skills />
        <Experience />
        <Certifications />
        <Blog />
        <Gallery />
        <ReadingJourney />
        <Achievements />
        <Interests />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-purple-700/40 py-8 bg-black text-white">
      <div className="container flex flex-col-reverse items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        {/* Left: Social Icons */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/CelestialV"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-400 transition"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/farheennisha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-400 transition"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="https://x.com/I_CelestialV"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-400 transition"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            href="https://instagram.com/i.farheen.nisha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-400 transition"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="mailto:farheennisha1405@gmail.com"
            className="text-muted-foreground hover:text-purple-400 transition"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>

        {/* Right: Quote and Copyright */}
        <div className="text-center md:text-right">
          <p className="text-purple-400 italic text-sm mb-1">
            "Stay curious. Inspire the change."
          </p>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Celestial V. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

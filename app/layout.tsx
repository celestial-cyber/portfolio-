import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Celestial V - Portfolio",
  description: "Personal portfolio of Celestial V - Developer, Artist, and Explorer",
  icons: {
    icon: "https://i.pinimg.com/736x/e9/bb/a7/e9bba7d67464e37e5e9d557d94910a0e.jpg",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://i.pinimg.com/736x/e9/bb/a7/e9bba7d67464e37e5e9d557d94910a0e.jpg" />
      </head>
      <body className={`${inter.className}`}>
        <div className="stars"></div>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

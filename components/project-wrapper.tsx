"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import ProjectFallback from "./project-fallback"

interface ProjectWrapperProps {
  children: React.ReactNode
  fallbackProps: {
    title: string
    description: string
    longDescription?: string
    imageSrc: string
    tags: string[]
    githubUrl?: string
    liveUrl?: string
  }
  loadingTimeout?: number
}

export default function ProjectWrapper({ children, fallbackProps, loadingTimeout = 8000 }: ProjectWrapperProps) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showOriginal, setShowOriginal] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loading) {
        setError("Project is taking too long to load. Showing a simplified version instead.")
        setShowOriginal(false)
        setLoading(false)
      }
    }, loadingTimeout)

    // Simulate checking if the project loaded successfully
    // In a real implementation, you would check if your component mounted properly
    const checkLoaded = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      clearTimeout(timer)
      clearTimeout(checkLoaded)
    }
  }, [loading, loadingTimeout])

  const handleRetry = () => {
    setLoading(true)
    setError(null)
    setShowOriginal(true)

    // Simulate checking connection and loading
    setTimeout(() => {
      // This is where you'd actually check if your project can load
      // For demo purposes, we'll just show the fallback
      setShowOriginal(false)
      setLoading(false)
    }, 2000)
  }

  if (loading) {
    return (
      <div className="flex h-[400px] w-full items-center justify-center rounded-lg border border-border bg-card">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm text-muted-foreground">Loading project...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Loading Error</AlertTitle>
          <AlertDescription className="flex flex-col gap-4">
            <p>{error}</p>
            <Button onClick={handleRetry} variant="outline" size="sm">
              Retry Loading Original
            </Button>
          </AlertDescription>
        </Alert>
        <ProjectFallback {...fallbackProps} isOriginalBroken={true} />
      </div>
    )
  }

  if (showOriginal) {
    return <>{children}</>
  }

  return <ProjectFallback {...fallbackProps} isOriginalBroken={true} />
}

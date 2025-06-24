"use client"

import { useState, useEffect, useRef } from "react"

interface TypewriterEffectProps {
  phrases: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayAfterPhrase?: number
  delayAfterDeletion?: number
  className?: string
}

export default function TypewriterEffect({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayAfterPhrase = 1000,
  delayAfterDeletion = 500,
  className = "",
}: TypewriterEffectProps) {
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isWaiting, setIsWaiting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]

    if (isWaiting) return

    if (!isDeleting && currentText === currentPhrase) {
      setIsWaiting(true)
      timeoutRef.current = setTimeout(() => {
        setIsDeleting(true)
        setIsWaiting(false)
      }, delayAfterPhrase)
      return
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false)
      setIsWaiting(true)
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length)
      timeoutRef.current = setTimeout(() => {
        setIsWaiting(false)
      }, delayAfterDeletion)
      return
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1))
      } else {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1))
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    timeoutRef.current = timeout

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [
    currentText,
    isDeleting,
    phraseIndex,
    phrases,
    typingSpeed,
    deletingSpeed,
    delayAfterPhrase,
    delayAfterDeletion,
    isWaiting,
  ])

  return (
    <div className={`text-center ${className}`}>
      <h1 className="text-3xl md:text-7xl lg:text-6xl font-semibold leading-tight text-transparent bg-gradient-to-r from-purple-300 via-purple-400 to-purple-500 bg-clip-text">
        {currentText}
        <span className="animate-blink text-purple-400 ml-1">|</span>
      </h1>
    </div>
  )
}

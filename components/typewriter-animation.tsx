"use client"

import { useEffect, useState, useRef, useCallback } from "react"

interface TypewriterAnimationProps {
  className?: string
}

export default function TypewriterAnimation({ className = "" }: TypewriterAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const [mounted, setMounted] = useState(false)

  const phrases = ["Hey, I'm Celestial V", "a dreamer, artist, and explorer"]

  const charIndexRef = useRef(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const cursorTimerRef = useRef<NodeJS.Timeout | null>(null)
  const isUnmountedRef = useRef(false)

  // Realistic typing configuration
  const baseTypingSpeed = 80
  const typingVariation = 60
  const eraseSpeed = 40
  const eraseVariation = 30
  const pauseAfterTyping = 2500
  const pauseAfterErasing = 800

  // Safe state setter that checks if component is still mounted
  const safeSetState = useCallback((setter: () => void) => {
    if (!isUnmountedRef.current) {
      setter()
    }
  }, [])

  // Clear all timers
  const clearAllTimers = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    if (cursorTimerRef.current) {
      clearTimeout(cursorTimerRef.current)
      cursorTimerRef.current = null
    }
  }, [])

  // Mount effect
  useEffect(() => {
    setMounted(true)
    isUnmountedRef.current = false

    return () => {
      isUnmountedRef.current = true
      clearAllTimers()
    }
  }, [clearAllTimers])

  // Cursor blinking effect
  useEffect(() => {
    if (!mounted) return

    const blinkCursor = () => {
      if (!isUnmountedRef.current) {
        setShowCursor((prev) => !prev)
        cursorTimerRef.current = setTimeout(blinkCursor, 530)
      }
    }

    blinkCursor()

    return () => {
      if (cursorTimerRef.current) {
        clearTimeout(cursorTimerRef.current)
        cursorTimerRef.current = null
      }
    }
  }, [mounted])

  // Main typewriter effect
  useEffect(() => {
    if (!mounted) return

    const currentText = phrases[currentPhrase] || ""

    const getRandomDelay = (baseSpeed: number, variation: number) => {
      return baseSpeed + Math.random() * variation - variation / 2
    }

    const typeCharacter = () => {
      if (isUnmountedRef.current) return

      if (charIndexRef.current <= currentText.length) {
        safeSetState(() => {
          setDisplayText(currentText.substring(0, charIndexRef.current))
        })
        charIndexRef.current++

        if (charIndexRef.current <= currentText.length && !isUnmountedRef.current) {
          let delay = getRandomDelay(baseTypingSpeed, typingVariation)

          const currentChar = currentText[charIndexRef.current - 1]
          if (currentChar === "," || currentChar === "." || currentChar === " ") {
            delay += 50
          }

          timerRef.current = setTimeout(typeCharacter, delay)
        } else if (!isUnmountedRef.current) {
          timerRef.current = setTimeout(() => {
            if (!isUnmountedRef.current) {
              setIsTyping(false)
            }
          }, pauseAfterTyping)
        }
      }
    }

    const eraseCharacter = () => {
      if (isUnmountedRef.current) return

      if (charIndexRef.current > 0) {
        charIndexRef.current--
        safeSetState(() => {
          setDisplayText(currentText.substring(0, charIndexRef.current))
        })

        const delay = getRandomDelay(eraseSpeed, eraseVariation)
        timerRef.current = setTimeout(eraseCharacter, delay)
      } else if (!isUnmountedRef.current) {
        timerRef.current = setTimeout(() => {
          if (!isUnmountedRef.current) {
            setCurrentPhrase((prev) => (prev + 1) % phrases.length)
            setIsTyping(true)
          }
        }, pauseAfterErasing)
      }
    }

    // Clear existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }

    // Reset character index when starting a new phrase
    if (isTyping && displayText === "") {
      charIndexRef.current = 0
    }

    // Start animation
    if (!isUnmountedRef.current) {
      if (isTyping) {
        typeCharacter()
      } else {
        eraseCharacter()
      }
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
  }, [
    currentPhrase,
    isTyping,
    mounted,
    displayText,
    phrases,
    baseTypingSpeed,
    typingVariation,
    eraseSpeed,
    eraseVariation,
    pauseAfterTyping,
    pauseAfterErasing,
    safeSetState,
  ])

  // Loading state
  if (!mounted) {
    return (
      <div className={`flex items-center justify-center min-h-[4rem] ${className}`}>
        <div className="text-2xl md:text-4xl lg:text-5xl font-mono text-transparent select-none">
          Hey, I'm Celestial V
        </div>
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center min-h-[4rem] ${className}`}>
      <div className="text-center px-4 max-w-4xl w-full">
        <h1
          className="text-2xl md:text-4xl lg:text-5xl font-mono leading-tight select-none"
          style={{
            fontFamily: '"Courier New", "SF Mono", Monaco, Inconsolata, "Roboto Mono", "Source Code Pro", monospace',
            textShadow: "0 0 10px rgba(0,0,0,0.3)",
          }}
          aria-live="polite"
          aria-atomic="true"
        >
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            {displayText || "\u00A0"}
          </span>
          <span
            className={`inline-block w-0.5 h-[1em] ml-1 bg-purple-400 transition-opacity duration-100 ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />
        </h1>

        {/* Screen reader friendly version */}
        <div className="sr-only">Hey, I'm Celestial V, a dreamer, artist, and explorer</div>
      </div>
    </div>
  )
}

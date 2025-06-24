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

  const phrases = ["Hey, I'm Celestial V", "A Dreamer, Artist, and Explorer"]

  const charIndexRef = useRef(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const cursorTimerRef = useRef<NodeJS.Timeout | null>(null)
  const isUnmountedRef = useRef(false)

  const baseTypingSpeed = 80
  const typingVariation = 60
  const eraseSpeed = 40
  const eraseVariation = 30
  const pauseAfterTyping = 2500
  const pauseAfterErasing = 800

  const safeSetState = useCallback((setter: () => void) => {
    if (!isUnmountedRef.current) setter()
  }, [])

  const clearAllTimers = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (cursorTimerRef.current) clearTimeout(cursorTimerRef.current)
  }, [])

  useEffect(() => {
    setMounted(true)
    isUnmountedRef.current = false
    return () => {
      isUnmountedRef.current = true
      clearAllTimers()
    }
  }, [clearAllTimers])

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
      if (cursorTimerRef.current) clearTimeout(cursorTimerRef.current)
    }
  }, [mounted])

  useEffect(() => {
    if (!mounted) return
    const currentText = phrases[currentPhrase] || ""
    const getRandomDelay = (base: number, variation: number) =>
      base + Math.random() * variation - variation / 2

    const type = () => {
      if (isUnmountedRef.current) return
      if (charIndexRef.current <= currentText.length) {
        safeSetState(() => {
          setDisplayText(currentText.substring(0, charIndexRef.current))
        })
        charIndexRef.current++
        if (charIndexRef.current <= currentText.length) {
          let delay = getRandomDelay(baseTypingSpeed, typingVariation)
          const char = currentText[charIndexRef.current - 1]
          if (char === "," || char === "." || char === " ") delay += 50
          timerRef.current = setTimeout(type, delay)
        } else {
          timerRef.current = setTimeout(
            () => !isUnmountedRef.current && setIsTyping(false),
            pauseAfterTyping
          )
        }
      }
    }

    const erase = () => {
      if (isUnmountedRef.current) return
      if (charIndexRef.current > 0) {
        charIndexRef.current--
        safeSetState(() => {
          setDisplayText(currentText.substring(0, charIndexRef.current))
        })
        timerRef.current = setTimeout(() => erase(), getRandomDelay(eraseSpeed, eraseVariation))
      } else {
        timerRef.current = setTimeout(() => {
          if (!isUnmountedRef.current) {
            setCurrentPhrase((prev) => (prev + 1) % phrases.length)
            setIsTyping(true)
          }
        }, pauseAfterErasing)
      }
    }

    clearAllTimers()
    if (isTyping && displayText === "") charIndexRef.current = 0
    if (!isUnmountedRef.current) {
      if (isTyping) type()
      else erase()
    }
  }, [currentPhrase, isTyping, mounted, displayText, phrases, safeSetState])

  if (!mounted) {
    return (
      <div className={`flex items-center justify-center min-h-[4rem] ${className}`}>
        <div className="text-3xl md:text-5xl lg:text-6xl font-mono text-transparent select-none">
          Hey, I'm Celestial V
        </div>
      </div>
    )
  }

  return (
    <div className={`flex items-center justify-center min-h-[4rem] ${className}`}>
      <div className="text-center px-4 max-w-4xl w-full">
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-mono leading-tight select-none"
          style={{
            fontFamily:
              "Courier New, SF Mono, Monaco, Inconsolata, Roboto Mono, Source Code Pro, monospace",
          }}
          aria-live="polite"
          aria-atomic="true"
        >
          <span
            style={{
              background:
                "linear-gradient(90deg, #d8b4fe, #c084fc, #a78bfa, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
              fontWeight: 700,
            }}
          >
            {displayText || "\u00A0"}
          </span>
          <span
            className={`inline-block w-0.5 h-[1em] ml-1 bg-white-400 transition-opacity duration-100 ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden="true"
          />
        </h1>
        <div className="sr-only">Hey, I'm Celestial V, A Dreamer, Artist, and Explorer</div>
      </div>
    </div>
  )
}

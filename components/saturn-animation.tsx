"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function SaturnAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 9
    camera.up.set(0, 1, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(500, 500)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = false
    controls.enablePan = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 1
    controls.minPolarAngle = 0
    controls.maxPolarAngle = Math.PI / 2

    // Lights and Saturn setup (same as your original)
    // -- [REMAINS SAME] --

    // [Your entire lighting, Saturn, rings, and animation code goes here without changes]

    // Responsiveness handler
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      const height = width // Keep square aspect ratio
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    const animate = () => {
      requestAnimationFrame(animate)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      renderer.dispose()
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[700px] mx-auto h-[70vw] md:h-[500px] relative"
    />
  )
}

"use client"

import { useRef, useEffect } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

export default function SaturnAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    camera.position.z = 9 // Adjusted camera position
    camera.up.set(0, 1, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(700, 700) // Reduced size
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableZoom = false
    controls.enablePan = false
    controls.autoRotate = true
    controls.autoRotateSpeed = 1
    controls.minPolarAngle = 0
    controls.maxPolarAngle = Math.PI / 2

    // Enhanced Lighting for better visibility
    const ambientLight = new THREE.AmbientLight(0xaaaaaa, 1.0)
    scene.add(ambientLight)

    // Main directional light (sun-like)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
    directionalLight.position.set(15, 10, 10)
    scene.add(directionalLight)

    // Additional point lights for more dramatic effect
    const pointLight1 = new THREE.PointLight(0xffd1a3, 1.5, 50)
    pointLight1.position.set(10, 5, 10)
    scene.add(pointLight1)

    const pointLight2 = new THREE.PointLight(0xc9a9ff, 1.2, 50)
    pointLight2.position.set(-10, -5, -10)
    scene.add(pointLight2)

    // Starry background
    const starsGeometry = new THREE.BufferGeometry()
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 })
    const starVertices = []
    for (let i = 0; i < 3000; i++) {
      starVertices.push((Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000, (Math.random() - 0.5) * 2000)
    }
    starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starVertices, 3))
    const starField = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(starField)

    // Create Saturn with enhanced material for better visibility but smaller size
    const saturnGeometry = new THREE.SphereGeometry(1.5, 64, 64) // Reduced size from 1.7 to 1.5
    const saturnMaterial = new THREE.MeshStandardMaterial({
      color: 0xdec190,
      roughness: 0.6,
      metalness: 0.4,
      emissive: 0x332200,
      emissiveIntensity: 0.3,
    })
    const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial)
    scene.add(saturn)

    // Tilt Saturn
    saturn.rotation.z = THREE.MathUtils.degToRad(26.7)

    // Saturn's rings with enhanced materials for better visibility but adjusted for smaller Saturn
    const ringsData = [
      { inner: 1.65, outer: 1.75, opacity: 0.2, color: 0x666666, emissive: 0x222222 },
      { inner: 1.78, outer: 1.95, opacity: 0.35, color: 0x999999, emissive: 0x333333 },
      { inner: 2.0, outer: 2.5, opacity: 0.7, color: 0xffffee, emissive: 0x444433 },
      { inner: 2.6, outer: 3.0, opacity: 0.5, color: 0xfff5cc, emissive: 0x443322 }, // Reduced outer radius
      { inner: 3.05, outer: 3.1, opacity: 0.8, color: 0xffcc88, emissive: 0x442200 }, // Adjusted inner radius
      { inner: 3.4, outer: 3.5, opacity: 0.3, color: 0xffccbb, emissive: 0x330000 }, // Adjusted both radii
      { inner: 4.2, outer: 5.0, opacity: 0.1, color: 0xfff8e1, emissive: 0x222200 }, // Reduced both radii
    ]

    ringsData.forEach(({ inner, outer, opacity, color, emissive }) => {
      const ringGeometry = new THREE.RingGeometry(inner, outer, 128)
      const ringMaterial = new THREE.MeshPhongMaterial({
        color: color,
        emissive: emissive,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: opacity,
        shininess: 70,
        depthWrite: false,
      })
      const ring = new THREE.Mesh(ringGeometry, ringMaterial)
      ring.rotation.x = Math.PI / 2
      ring.rotation.z = THREE.MathUtils.degToRad(26.7)
      saturn.add(ring)
    })

    // Add a stronger glow effect
    const glowGeometry = new THREE.SphereGeometry(1.6, 32, 32)
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        c: { value: 0.2 },
        p: { value: 4.0 },
        glowColor: { value: new THREE.Color(0xffcc88) },
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 glowColor;
        uniform float c;
        uniform float p;
        varying vec3 vNormal;
        void main() {
          float intensity = pow(c - dot(vNormal, vec3(0.0, 0.0, 1.0)), p);
          gl_FragColor = vec4(glowColor, intensity * 1.2);
        }
      `,
      transparent: true,
      depthWrite: false,
    })
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial)
    saturn.add(glowMesh)

    // Add a ring highlight effect
    const ringHighlightGeometry = new THREE.RingGeometry(2.0, 3.0, 128)
    const ringHighlightMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xffffdd) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color;
        varying vec2 vUv;
        void main() {
          float distFromCenter = length(vUv - vec2(0.5, 0.5)) * 2.0;
          float alpha = smoothstep(0.8, 1.0, distFromCenter) * 0.3;
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    })
    const ringHighlight = new THREE.Mesh(ringHighlightGeometry, ringHighlightMaterial)
    ringHighlight.rotation.x = Math.PI / 2
    ringHighlight.rotation.z = THREE.MathUtils.degToRad(26.7)
    saturn.add(ringHighlight)

    // Animation loop
    function animate() {
      requestAnimationFrame(animate)

      // Rotate Saturn and rings
      saturn.rotation.y += 0.002

      // Slowly rotate starfield
      starField.rotation.y += 0.0005

      camera.up.set(0, 1, 0)
      controls.update()
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (containerRef.current) {
        const width = Math.min(700, window.innerWidth - 40) // Reduced size
        renderer.setSize(width, width)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize() // Initial sizing

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      renderer.dispose()
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="h-[700px] w-[700px] max-w-full" /> // Reduced size
}

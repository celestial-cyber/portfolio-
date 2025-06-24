"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function SaturnAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight || width;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 1000);
    camera.position.z = 8;
    camera.up.set(0, 1, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;
    controls.minPolarAngle = 0;
    controls.maxPolarAngle = Math.PI / 2;

    // Lighting setup
    // Ambient light for soft base light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5); // dimmer ambient

    // Directional light to simulate sun light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 10, 7);
    directionalLight.castShadow = false;

    scene.add(ambientLight);
    scene.add(directionalLight);

    // Starry background
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
    const starVertices: number[] = [];
    for (let i = 0; i < 3000; i++) {
      starVertices.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000
      );
    }
    starsGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starVertices, 3));
    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // Saturn sphere with material reacting to light
    const saturnGeometry = new THREE.SphereGeometry(2.0, 64, 64);
    const saturnMaterial = new THREE.MeshStandardMaterial({
      color: 0xceb180,
      roughness: 0.7,
      metalness: 0.2,
    });
    const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
    saturn.rotation.z = THREE.MathUtils.degToRad(26.7);
    scene.add(saturn);

    // Saturn rings with transparency
    const ringsData = [
      { inner: 2.4, outer: 2.7, opacity: 0.1, color: 0x555555 },
      { inner: 2.8, outer: 3.1, opacity: 0.25, color: 0x888888 },
      { inner: 3.2, outer: 3.7, opacity: 0.6, color: 0xffffee },
      { inner: 3.9, outer: 4.4, opacity: 0.4, color: 0xfff5cc },
      { inner: 4.5, outer: 4.6, opacity: 0.7, color: 0xffcc88 },
      { inner: 4.7, outer: 4.8, opacity: 0.2, color: 0xffccbb },
      { inner: 5.2, outer: 6.0, opacity: 0.05, color: 0xfff8e1 },
    ];

    ringsData.forEach(({ inner, outer, opacity, color }) => {
      const ringGeometry = new THREE.RingGeometry(inner, outer, 128);
      const ringMaterial = new THREE.MeshStandardMaterial({
        color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity,
        roughness: 0.8,
        metalness: 0.1,
        depthWrite: false,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.rotation.z = THREE.MathUtils.degToRad(26.7);
      saturn.add(ring);
    });

    // Animate loop
    const animate = () => {
      requestAnimationFrame(animate);

      saturn.rotation.y += 0.0018;
      starField.rotation.y += 0.0005;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight || w;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);
    onResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "70vw",
        maxWidth: "700px",
        maxHeight: "500px",
        margin: "0 auto",
        position: "relative",
        zIndex: 20,
      }}
    />
  );
}

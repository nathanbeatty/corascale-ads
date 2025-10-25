"use client"

import { useEffect, useRef } from "react"
import createGlobe, { COBEOptions } from "cobe"
import { useMotionValue, useSpring } from "motion/react"
import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 3,
  mapSamples: 16000,
  mapBrightness: 2,
  baseColor: [1, 1, 1],
  markerColor: [1, 1, 1],
  glowColor: [1, 1, 1],
  
  markers: [
    // North America
    { location: [40.7128, -74.0060], size: 0.08 }, // New York
    { location: [34.0522, -118.2437], size: 0.07 }, // Los Angeles
    { location: [37.7749, -122.4194], size: 0.06 }, // San Francisco
    { location: [49.2827, -123.1207], size: 0.05 }, // Vancouver
    { location: [45.5017, -73.5673], size: 0.05 }, // Montreal
    { location: [41.8781, -87.6298], size: 0.05 }, // Chicago
    { location: [25.7617, -80.1918], size: 0.05 }, // Miami
    { location: [43.6532, -79.3832], size: 0.07 }, // Toronto ✅

    // South America
    { location: [-23.5505, -46.6333], size: 0.06 }, // São Paulo
    { location: [-34.6037, -58.3816], size: 0.05 }, // Buenos Aires
    { location: [4.7110, -74.0721], size: 0.05 }, // Bogotá
    { location: [-12.0464, -77.0428], size: 0.05 }, // Lima

    // Europe
    { location: [51.5074, -0.1278], size: 0.08 }, // London
    { location: [48.8566, 2.3522], size: 0.07 }, // Paris
    { location: [52.52, 13.405], size: 0.06 }, // Berlin
    { location: [41.9028, 12.4964], size: 0.05 }, // Rome
    { location: [40.4168, -3.7038], size: 0.05 }, // Madrid
    { location: [59.3293, 18.0686], size: 0.04 }, // Stockholm

    // Middle East & Africa
    { location: [25.276987, 55.296249], size: 0.07 }, // Dubai
    { location: [30.0444, 31.2357], size: 0.07 }, // Cairo
    { location: [-1.2921, 36.8219], size: 0.06 }, // Nairobi
    { location: [-33.9249, 18.4241], size: 0.06 }, // Cape Town

    // Asia
    { location: [35.6895, 139.6917], size: 0.08 }, // Tokyo
    { location: [1.3521, 103.8198], size: 0.07 }, // Singapore
    { location: [13.7563, 100.5018], size: 0.06 }, // Bangkok
    { location: [39.9042, 116.4074], size: 0.08 }, // Beijing
    { location: [28.6139, 77.2090], size: 0.07 }, // New Delhi
    { location: [14.5995, 120.9842], size: 0.06 }, // Manila
    { location: [22.3193, 114.1694], size: 0.06 }, // Hong Kong
    { location: [37.5665, 126.9780], size: 0.07 }, // Seoul

    // Oceania
    { location: [-33.8688, 151.2093], size: 0.07 }, // Sydney
    { location: [-37.8136, 144.9631], size: 0.06 }, // Melbourne
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)

  const r = useMotionValue(0)
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) width = canvasRef.current.offsetWidth
    }

    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender: (state) => {
        if (!pointerInteracting.current) phi += 0.005
        state.phi = phi + rs.get()
        state.width = width * 2
        state.height = width * 2
      },
    })

    setTimeout(() => (canvasRef.current!.style.opacity = "1"), 0)
    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, config])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-700 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX
          updatePointerInteraction(e.clientX)
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}

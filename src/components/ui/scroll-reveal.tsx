"use client"

// ScrollReveal — wraps any element and animates it into view when scrolled to.
// Uses Framer Motion's whileInView so it's purely client-side, no server cost.

import { motion, type Variants } from "framer-motion"
import { type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  // Direction the element slides in from
  direction?: "up" | "down" | "left" | "right" | "none"
  // How long before it starts (seconds) — use to stagger multiple elements
  delay?: number
  // How fast the animation plays (seconds)
  duration?: number
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      // Trigger when 15% of the element is visible
      viewport={{ once: true, amount: 0.15 }}
      variants={variants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1], // smooth cubic bezier
      }}
    >
      {children}
    </motion.div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { ParantoLogo } from "@/components/paranto-logo"
import { LiquidButton } from "@/components/ui/liquid-glass-button"

export function Navbar() {
  // Track whether user has scrolled past the hero section
  const [scrolled, setScrolled] = useState(false)
  // Track mobile menu open/close state
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { label: "Problem", href: "#problem" },
    { label: "Solution", href: "#solution" },
    { label: "Status", href: "#status" },
    { label: "Market", href: "#evidence" },
    { label: "Pricing", href: "#pricing" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo - medical cross inspired by Paranto logo */}
          <a
            href="#"
            className={`flex items-center gap-2 transition-colors ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            <ParantoLogo className="h-8 w-8" />
            <span className="text-2xl font-bold tracking-tight">
              Paranto
            </span>
          </a>

          {/* Desktop navigation links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:opacity-80 ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#"
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              Sign In
            </a>
            <LiquidButton size="sm" className={`font-semibold ${scrolled ? "text-gray-900" : "text-white"}`}>
              Get Started
            </LiquidButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden transition-colors ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block text-sm font-medium ${
                  scrolled ? "text-gray-700" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
            <LiquidButton size="default" className="text-white font-semibold">
              Get Started
            </LiquidButton>
          </div>
        )}
      </div>
    </nav>
  )
}

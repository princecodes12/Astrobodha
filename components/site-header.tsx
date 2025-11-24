"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoonStar, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import Image  from "next/image"


export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-md border-border/50 py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
  <div className="w-10 h-10 flex items-center justify-center">
    <Image
      src="/logo.png"
      alt="AstroBudhha Logo"
      width={40}
      height={40}
      className="object-contain"/>
  </div>
  <span className="text-xl font-serif font-bold text-foreground tracking-wide">AstroBudhha</span>
</Link>


        <nav className="hidden md:flex items-center gap-8">
          {["Features", "About", "Mission", "Roadmap"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/10 bg-background/95 backdrop-blur-lg"
          >
            <div className="container flex flex-col gap-4 py-6 px-4">
              {["Features", "About", "Mission", "Roadmap"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

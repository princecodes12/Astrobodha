"use client"


import { useState } from "react"
import {
  Dialog,
  DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger,
} from "@/components/ui/dialog"

import {Input} from "@/components/ui/input"
import { Label } from "@/components/ui/label"




import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {

  // the email pop-up function 
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleWaitlistSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // TODO: replace this with your API call (backend / Google Sheet / etc.)
      console.log("Waitlist email:", email)

      // For now, just show a basic browser alert
      alert("Thank you for joining the waitlist! ✨")

      setEmail("")
    } catch (error) {
      console.error(error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05),transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=1080&width=1920&text=Stars+Pattern')] opacity-5 mix-blend-overlay" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>The Future of Modern Astrology</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-primary to-amber-200 pb-2">
            Your personalized path through the stars
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Unlock the secrets of the cosmos with AstroBodha. We blend ancient wisdom with modern technology to guide
            your journey.
          </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
  <Dialog>
    <DialogTrigger asChild>
      <Button
        size="lg"
        className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 text-base"
      >
        Join the Waitlist
      </Button>
    </DialogTrigger>

    <DialogContent className="max-w-md">
      <DialogHeader>
        <DialogTitle>Join the AstroBodha waitlist</DialogTitle>
        <DialogDescription>
          Enter your email to receive early access and updates about our launch.
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleWaitlistSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="waitlist-email">Email address</Label>
          <Input
            id="waitlist-email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Get early access"}
        </Button>
      </form>
    </DialogContent>
  </Dialog>
</div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            {/* Abstract Celestial Graphic */}
            <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl animate-pulse" />
            <div className="relative w-full h-full rounded-full border border-primary/20 flex items-center justify-center p-8 md:p-16">
              <div className="absolute inset-0 rounded-full border border-primary/10 rotate-45" />
              <div className="absolute inset-0 rounded-full border border-primary/10 -rotate-45" />
              <Image
                src="/gold-zodiac-wheel-on-dark-blue-background-minimali.jpg"
                alt="Celestial Compass"
                width={500}
                height={500}
                className="w-full h-full object-contain animate-[spin_60s_linear_infinite] rounded-full opacity-80"
              />
              {/* Center floating element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-primary to-amber-600 rounded-full blur-2xl opacity-20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>  

  )
}

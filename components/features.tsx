"use client"

import { Shield, Star, Moon, Sun, Sparkles, Compass } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const features = [
  {
    title: "Vedic Accuracy",
    description: "Ancient calculations meet modern technology for precise charts.",
    icon: Star,
  },
  {
    title: "Personalized Insights",
    description: "Daily horoscopes tailored specifically to your birth chart.",
    icon: Moon,
  },
  {
    title: "Expert Astrologers",
    description: "Connect with certified practitioners for deep guidance.",
    icon: Sun,
  },
  {
    title: "Match Making",
    description: "Find compatibility souls with detailed Guna Milan.",
    icon: Sparkles,
  },
  {
    title: "Life Roadmap",
    description: "Plan your future with Mahadasha and transit analysis.",
    icon: Compass,
  },
  {
    title: "Secure & Private",
    description: "Your spiritual journey is kept completely confidential.",
    icon: Shield,
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-primary">Divine Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the tools that will illuminate your path and connect you with the cosmos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 border-white/10 backdrop-blur-sm hover:bg-card/80 transition-colors duration-300 h-full group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-serif">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground/80">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

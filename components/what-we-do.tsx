"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Star, Heart, Sun, User } from "lucide-react"

const offerings = [
  {
    title: "Personalized Horoscope",
    description: "Daily insights tailored to your unique birth chart.",
    icon: Star,
  },
  {
    title: "Kundli Generation",
    description: "Precise Vedic charts generated instantly with AI accuracy.",
    icon: Sun,
  },
  {
    title: "Compatibility Guidance",
    description: "Understand your relationships through cosmic alignment.",
    icon: Heart,
  },
  {
    title: "Expert Consultation",
    description: "Connect with verified astrologers for deeper guidance.",
    icon: User,
  },
]

export function WhatWeDo() {
  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What We Do</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools to navigate your life's journey with clarity and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-card/50 border-primary/10 hover:border-primary/30 transition-all hover:shadow-[0_0_30px_-5px_rgba(251,191,36,0.1)]">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <offer.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-serif text-xl">{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{offer.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

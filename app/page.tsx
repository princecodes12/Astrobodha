import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { WhoWeAre } from "@/components/who-we-are"
import { WhatWeDo } from "@/components/what-we-do"
import { Features } from "@/components/features"
import { AboutUs } from "@/components/about-us"
import { Mission } from "@/components/mission"
import { Roadmap } from "@/components/roadmap"
import { SiteFooter } from "@/components/site-footer"
import { StarBackground } from "@/components/star-background"

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col overflow-x-hidden relative">
      <StarBackground />
      <SiteHeader />
      <main className="flex-1 relative z-10">
        <HeroSection />
        <WhoWeAre />
        <WhatWeDo />
        <Features />
        <AboutUs />
        <Mission />
        <Roadmap />
      </main>
      <SiteFooter />
    </div>
  )
}

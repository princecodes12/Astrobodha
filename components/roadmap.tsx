import { Badge } from "@/components/ui/badge"

const items = [
  { phase: "Phase 1", title: "Beta Launch", desc: "Core horoscope & chart features", status: "current" },
  { phase: "Phase 2", title: "AI Insights", desc: "Deep learning integration for reading charts", status: "upcoming" },
  { phase: "Phase 3", title: "Expert Network", desc: "Live consultations with astrologers", status: "upcoming" },
  { phase: "Phase 4", title: "Mobile App", desc: "iOS and Android native applications", status: "upcoming" },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">The Journey Ahead</h2>
          <p className="text-muted-foreground">Our roadmap to revolutionizing digital astrology</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-primary/20 -translate-y-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {items.map((item, i) => (
              <div
                key={i}
                className="relative bg-card border border-border p-6 rounded-xl text-center z-10 group hover:border-primary/50 transition-colors"
              >
                <div className="mb-4">
                  <Badge variant={item.status === "current" ? "default" : "outline"} className="mb-2">
                    {item.status === "current" ? "Live Now" : "Coming Soon"}
                  </Badge>
                </div>
                <h3 className="text-lg font-bold font-serif mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>

                {/* Dot */}
                <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-background border-2 border-primary mt-[5.5rem]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { Target, Lightbulb, Globe } from "lucide-react"

const goals = [
  {
    title: "Accessibility",
    desc: "Bring authentic astrology to every individual, regardless of location.",
    icon: Globe,
  },
  {
    title: "Clarity",
    desc: "Provide clear, actionable guidance for life's complex questions.",
    icon: Lightbulb,
  },
  {
    title: "Reliability",
    desc: "Build the most trustworthy digital astrology ecosystem in the world.",
    icon: Target,
  },
]

export function Mission() {
  return (
    <section id="mission" className="py-24 border-y border-white/5">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16">Our Mission</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {goals.map((goal, i) => (
            <div
              key={i}
              className="group p-8 rounded-2xl bg-card/30 border border-white/5 hover:bg-card/50 hover:border-primary/30 transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <goal.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 font-serif">{goal.title}</h3>
              <p className="text-muted-foreground">{goal.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

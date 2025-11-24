import Image from "next/image"

export function AboutUs() {
  return (
    <section id="about" className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif font-bold">Where wisdom meets technology</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                At AstroBudhha, we believe that astrology is not just about prediction—it's about preparation. Our
                vision is to blend the timeless accuracy of Vedic astrology with the seamlessness of modern technology.
              </p>
              <p>
                We are building a reliable digital ecosystem where you can find authentic guidance, self-awareness, and
                a deeper connection to the universe.
              </p>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[300px] w-full rounded-2xl overflow-hidden">
            <Image
              src="/spiritual-meditation-galaxy-background.jpg"
              alt="Spiritual Connection"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-serif text-2xl font-light text-white italic">
                "The cosmos is within us. We are made of star-stuff."
              </p>
              <p className="text-white/60 mt-2">— Carl Sagan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

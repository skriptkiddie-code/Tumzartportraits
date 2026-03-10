import artistAtWork from "@/assets/artist-at-work.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gold opacity-50" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-sans">The Artist</span>
            <div className="h-px w-12 bg-gold opacity-50" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">The Hands Behind the Art</h2>
        </div>

        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Artist Photo */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-gold/30 to-transparent rounded-sm blur-sm opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={artistAtWork}
                alt="Tumzart at work in his studio"
                className="w-full h-[480px] lg:h-[580px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle gold vignette at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-deep/80 to-transparent" />
            </div>
          </div>

          {/* Right — Bio */}
          <div className="flex flex-col gap-8 justify-center">
            {/* Opening Quote */}
            <blockquote className="relative pl-6 border-l-2 border-gold">
              <p className="font-serif-light text-xl md:text-2xl italic text-cream leading-relaxed">
                "Art isn't just about a likeness; it's about capturing a moment that lasts forever. I'm Tumzart, a specialist in high-detail portraiture."
              </p>
            </blockquote>

            {/* Body */}
            <p className="font-sans text-muted-foreground leading-relaxed text-base">
              Every piece I create is a journey from a blank Paper to a soulful tribute. Whether it's a gift for a loved one or a centrepiece for your home, I pour hours of precision into every stroke to ensure your memories are preserved in gold-standard quality.
            </p>

            {/* Divider */}
            <div className="h-px w-16 bg-gold opacity-40" />

            {/* Skills / Medium Pills */}
            <div className="flex flex-wrap gap-2">
              {["Pencil & Graphite", "Pen Drawings", "Digital Illustration", "Commissioned Portraits"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs tracking-widest uppercase font-sans border border-border text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Fast Fact Box */}
            <div className="mt-2 p-5 border border-gold/30 bg-gradient-to-br from-card to-background relative overflow-hidden">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/40" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-gold/40" />

              <p className="text-gold text-xs tracking-[0.3em] uppercase font-sans mb-2">⚡ Fast Fact</p>
              <p className="font-serif-light text-lg text-cream italic">
                Average time per portrait:{" "}
                <span className="text-gold font-display not-italic">15–30 hours</span>{" "}
                of focused detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

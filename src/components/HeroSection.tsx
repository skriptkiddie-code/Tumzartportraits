import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroPortrait}
          alt="Tumzart Portraits - Capturing Souls on Paper"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="absolute inset-0 bg-charcoal-deep/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Decorative line */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 animate-fade-in">
          <div className="h-px w-8 sm:w-16 bg-gold opacity-60" />
          <span className="text-gold text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase font-sans">Fine Art Portraits</span>
          <div className="h-px w-8 sm:w-16 bg-gold opacity-60" />
        </div>

        <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-3 sm:mb-6 leading-tight animate-fade-up px-2">
          Tumzart
          <span className="block italic text-gold font-normal">Portraits</span>
        </h1>

        <p className="font-serif-light text-cream-dim text-base sm:text-xl md:text-2xl lg:text-3xl italic mb-3 sm:mb-4 animate-fade-up px-2">
          Capturing Souls on Paper
        </p>

        <p className="text-cream-dim text-xs sm:text-sm md:text-base tracking-widest uppercase font-sans mb-8 sm:mb-12 animate-fade-up px-2">
          Handcrafted Pencil, Pen & Digital Portraits
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-up px-4">
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gold text-charcoal-deep font-sans text-xs sm:text-sm tracking-widest uppercase font-semibold hover:bg-gold-glow transition-all duration-300 shadow-gold"
          >
            Book a Commission
          </a>
          <a
            href="#gallery"
            className="px-6 sm:px-8 py-3 sm:py-4 border border-cream/40 text-cream font-sans text-xs sm:text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300"
          >
            View Gallery
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-cream-dim text-xs tracking-widest uppercase font-sans">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;

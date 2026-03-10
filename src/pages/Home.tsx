import { Link } from "react-router-dom";
import heroPortrait from "@/assets/hero-portrait.jpg";
import pencil1 from "@/assets/portrait-pencil-1.jpg";
import digital1 from "@/assets/portrait-digital-1.jpg";
import pencil2 from "@/assets/portrait-pencil-2.jpg";

const previewItems = [
  { src: pencil1, title: "Portrait of a Young Man", category: "Pencil Sketch" },
  { src: digital1, title: "Joyful Child", category: "Digital" },
  { src: pencil2, title: "Two Souls", category: "Pencil Sketch" },
];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroPortrait}
            alt="Tumzart Portraits - Capturing Souls on Paper"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 gradient-hero-overlay" />
          <div className="absolute inset-0 bg-charcoal-deep/30" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
            <div className="h-px w-16 bg-gold opacity-60" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-sans">Fine Art Portraits</span>
            <div className="h-px w-16 bg-gold opacity-60" />
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight animate-fade-up">
            Tumzart
            <span className="block italic text-gold font-normal">Portraits</span>
          </h1>

          <p className="font-serif-light text-cream-dim text-xl md:text-2xl lg:text-3xl italic mb-4 animate-fade-up">
            Capturing Souls on Paper
          </p>

          <p className="text-cream-dim text-sm md:text-base tracking-widest uppercase font-sans mb-12 animate-fade-up">
            Handcrafted Pencil, Pen & Digital Portraits
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up">
            <Link
              to="/pricing"
              className="px-8 py-4 bg-gold text-charcoal-deep font-sans text-sm tracking-widest uppercase font-semibold hover:bg-gold-glow transition-all duration-300 shadow-gold"
            >
              Book a Commission
            </Link>
            <Link
              to="/gallery"
              className="px-8 py-4 border border-cream/40 text-cream font-sans text-sm tracking-widest uppercase hover:border-gold hover:text-gold transition-all duration-300"
            >
              View Gallery
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
          <span className="text-cream-dim text-xs tracking-widest uppercase font-sans">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* Work Preview */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-12 bg-gold opacity-50" />
              <span className="text-gold text-xs tracking-[0.4em] uppercase font-sans">Selected Works</span>
              <div className="h-px w-12 bg-gold opacity-50" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">A Glimpse of the Studio</h2>
            <p className="text-cream-dim font-serif-light text-lg italic">Every stroke, a story waiting to be told</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {previewItems.map((item, i) => (
              <div key={i} className="group relative overflow-hidden aspect-[3/4] cursor-pointer">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal-deep/0 group-hover:bg-charcoal-deep/60 transition-all duration-300 flex flex-col items-center justify-end gap-1 pb-4 px-3">
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/gallery"
              className="inline-block px-10 py-4 border border-gold text-gold font-sans text-sm tracking-widest uppercase hover:bg-gold hover:text-charcoal-deep transition-all duration-300"
            >
              Explore Full Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

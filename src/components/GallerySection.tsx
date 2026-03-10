import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryItems, galleryCategories } from "@/data/galleryItems";

const GallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
    }
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filtered.length);
    }
  };

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-gold opacity-50" />
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-sans">Portfolio</span>
            <div className="h-px w-12 bg-gold opacity-50" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">The Gallery</h2>
          <p className="text-cream-dim font-serif-light text-lg italic">Each piece is a window into the soul</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 text-xs tracking-widest uppercase font-sans transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-gold text-charcoal-deep font-semibold"
                  : "border border-border text-cream-dim hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className="masonry-item group cursor-pointer relative overflow-hidden"
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-charcoal-deep/0 group-hover:bg-charcoal-deep/60 transition-all duration-300 flex flex-col items-center justify-center gap-2">
                <ZoomIn className="text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-deep/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-cream-dim hover:text-gold transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 md:left-8 text-cream-dim hover:text-gold transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div
            className="max-w-4xl max-h-[90vh] mx-16 flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              className="max-h-[75vh] max-w-full object-contain shadow-card"
            />
            <div className="text-center">
              <p className="font-display text-lg text-cream">{filtered[lightboxIndex].title}</p>
              <p className="text-cream-dim text-sm font-serif-light italic">{filtered[lightboxIndex].description}</p>
            </div>
          </div>

          <button
            className="absolute right-4 md:right-8 text-cream-dim hover:text-gold transition-colors z-10 p-2"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;

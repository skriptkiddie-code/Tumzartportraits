import { Upload, PenTool, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload Your Photo",
    description:
      "Share your favourite clear photo via WhatsApp or email. High-resolution images yield the most detailed, lifelike portraits.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Artist Drafts",
    description:
      "Your portrait is hand-crafted with precision. You receive a draft preview for review and any minor adjustments before finalising.",
  },
  {
    icon: PackageCheck,
    step: "03",
    title: "Final Delivery",
    description:
      "Your finished portrait is carefully packaged and delivered to your door, or a high-resolution digital file is sent instantly.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="h-px w-8 sm:w-12 bg-gold opacity-50" />
            <span className="text-gold text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase font-sans">The Journey</span>
            <div className="h-px w-8 sm:w-12 bg-gold opacity-50" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream mb-3 sm:mb-4 px-4">How It Works</h2>
          <p className="text-cream-dim font-serif-light text-base sm:text-lg italic px-4">From photograph to masterpiece in three simple steps</p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center">
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 border border-gold/40 flex items-center justify-center bg-charcoal-mid relative z-10 hover:border-gold transition-colors duration-300 group hover:shadow-gold">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <span className="absolute -top-3 -right-3 font-display text-5xl text-gold/10 font-bold select-none leading-none">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-display text-xl text-cream mb-3">{step.title}</h3>
                <p className="text-cream-dim text-sm font-sans leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        {/* Timeline turnaround */}
        <div className="mt-16 border border-border p-8 text-center bg-card">
          <p className="text-cream-dim text-xs tracking-widest uppercase font-sans mb-3">Typical Turnaround</p>
          <div className="flex justify-center gap-8 flex-wrap">
            {[
              { label: "Pencil Sketch", time: "5–7 days" },
              { label: "Pen Drawing", time: "7–10 days" },
              { label: "Digital", time: "2–4 days" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-display text-2xl text-gold">{item.time}</p>
                <p className="text-cream-dim text-xs tracking-widest uppercase font-sans mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

import { Check } from "lucide-react";

interface PriceSize {
  size: string;
  dimensions: string;
  pencil: string;
  pen: string;
  digital: string;
  popular?: boolean;
}

const priceSizes: PriceSize[] = [
  { size: "A4", dimensions: "21 × 29.7 cm", pencil: "$25", pen: "$30", digital: "$30" },
  { size: "A3", dimensions: "29.7 × 42 cm", pencil: "$32", pen: "$40", digital: "$40", popular: true },
  { size: "A2", dimensions: "42 × 59.4 cm", pencil: "$67", pen: "$75", digital: "$75" },
];

const framingOptions = [
  {
    name: "Simple Frame",
    price: "+$15",
    features: ["Slim aluminium frame", "Glass cover", "Ready to hang", "Available in black or white"],
  },
  {
    name: "Premium Frame",
    price: "+$25",
    features: ["Ornate gold wood frame", "UV-protective glass", "Matted & mounted", "Certificate of authenticity"],
    premium: true,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 bg-charcoal-mid">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="h-px w-8 sm:w-12 bg-gold opacity-50" />
            <span className="text-gold text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase font-sans">Investment</span>
            <div className="h-px w-8 sm:w-12 bg-gold opacity-50" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream mb-3 sm:mb-4 px-4">Pricing & Sizes</h2>
          <p className="text-cream-dim font-serif-light text-base sm:text-lg italic px-4">Transparent pricing for every budget</p>
        </div>

        {/* Price Table */}
        <div className="mb-12 sm:mb-20">
          <div className="overflow-x-auto scrollbar-hide -mx-4 sm:mx-0">
            <div className="px-4 sm:px-0 inline-block min-w-full">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gold/30">
                    <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-cream-dim text-[9px] sm:text-xs tracking-wide sm:tracking-widest uppercase font-sans whitespace-nowrap">Size</th>
                    <th className="text-left py-3 sm:py-4 px-2 sm:px-4 text-cream-dim text-[9px] sm:text-xs tracking-wide sm:tracking-widest uppercase font-sans hidden sm:table-cell">Dimensions</th>
                    <th className="text-center py-3 sm:py-4 px-1 sm:px-4 text-cream-dim text-[9px] sm:text-xs tracking-wide sm:tracking-widest uppercase font-sans whitespace-nowrap">Pencil</th>
                    <th className="text-center py-3 sm:py-4 px-1 sm:px-4 text-cream-dim text-[9px] sm:text-xs tracking-wide sm:tracking-widest uppercase font-sans whitespace-nowrap">Pen</th>
                    <th className="text-center py-3 sm:py-4 px-1 sm:px-4 text-cream-dim text-[9px] sm:text-xs tracking-wide sm:tracking-widest uppercase font-sans whitespace-nowrap">Digital</th>
                  </tr>
                </thead>
                <tbody>
                  {priceSizes.map((row) => (
                    <tr
                      key={row.size}
                      className={`border-b border-border transition-colors hover:bg-charcoal-light/50 ${
                        row.popular ? "relative" : ""
                      }`}
                    >
                      <td className="py-3 sm:py-5 px-2 sm:px-4">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-3">
                          <span className="font-display text-base sm:text-xl text-cream whitespace-nowrap">{row.size}</span>
                          <span className="text-cream-dim text-[10px] sm:text-xs font-sans sm:hidden">{row.dimensions}</span>
                          {row.popular && (
                            <span className="bg-gold text-charcoal-deep text-[9px] sm:text-xs px-1.5 sm:px-2 py-0.5 tracking-wide sm:tracking-widest uppercase font-sans font-semibold w-fit mt-0.5 sm:mt-0">
                              Popular
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3 sm:py-5 px-2 sm:px-4 text-cream-dim text-sm font-sans hidden sm:table-cell">{row.dimensions}</td>
                      <td className="py-3 sm:py-5 px-1 sm:px-4 text-center text-gold font-display text-base sm:text-lg whitespace-nowrap">{row.pencil}</td>
                      <td className="py-3 sm:py-5 px-1 sm:px-4 text-center text-gold font-display text-base sm:text-lg whitespace-nowrap">{row.pen}</td>
                      <td className="py-3 sm:py-5 px-1 sm:px-4 text-center text-gold font-display text-base sm:text-lg whitespace-nowrap">{row.digital}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mb-16 max-w-3xl mx-auto border border-gold/40 bg-gold/10 px-5 py-4 text-center">
          <p className="text-gold text-xs tracking-[0.25em] uppercase font-sans mb-1">Shipping Notice</p>
          <p className="text-cream text-sm md:text-base font-sans">
            International orders are welcome. Shipping charges apply for all deliveries outside Uganda.
          </p>
        </div>

        {/* Framing Options */}
        <div>
          <h3 className="font-display text-2xl text-cream text-center mb-10">Framing Options</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {framingOptions.map((frame) => (
              <div
                key={frame.name}
                className={`p-8 border transition-all duration-300 hover:shadow-gold ${
                  frame.premium
                    ? "border-gold bg-gradient-to-br from-charcoal-light to-charcoal-mid relative overflow-hidden"
                    : "border-border bg-card"
                }`}
              >
                {frame.premium && (
                  <div className="absolute top-0 right-0 bg-gold text-charcoal-deep text-xs px-3 py-1 tracking-widest uppercase font-sans font-semibold">
                    Premium
                  </div>
                )}
                <h4 className="font-display text-xl text-cream mb-2">{frame.name}</h4>
                <p className="text-gold font-display text-2xl mb-6">{frame.price}</p>
                <ul className="space-y-3">
                  {frame.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-cream-dim text-sm font-sans">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

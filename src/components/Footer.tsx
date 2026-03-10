import { useState } from "react";
import { Instagram } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
);

const termsContent = [
  {
    title: "Commission Process",
    body: "Work begins only after a 50% non-refundable deposit is received.",
  },
  {
    title: "Revisions",
    body: "Each portrait includes up to 2 rounds of minor revisions. Major structural changes after the final stage may incur an extra fee.",
  },
  {
    title: "Refunds",
    body: "Due to the custom nature of hand-drawn art, refunds are not available once the final artwork has been shipped or downloaded.",
  },
  {
    title: "Shipping",
    body: "Tumzart Portraits is not responsible for damages caused by third-party couriers, but all physical art is packaged with maximum protection.",
  },
  {
    title: "Copyright",
    body: "The Artist (Tumzart) retains the rights to the artwork for portfolio and promotional use unless a private NDA is requested by the client.",
  },
];

const footerNavItems = [
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <footer className="py-12 px-6 border-t border-border bg-charcoal-deep">
        <div className="container mx-auto max-w-6xl">
          {/* Main Footer Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left — Logo + Socials */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link to="/">
                <p className="font-display text-xl text-gold tracking-widest uppercase">Tumzart Portraits</p>
                <p className="text-muted-foreground text-xs tracking-widest uppercase font-sans mt-1">Capturing Souls on Paper</p>
              </Link>

              <div className="flex items-center gap-4">
                <a
                  href="https://www.instagram.com/david.tumuks?igsh=MWEyaXF3cnI4aWFhOQ=="
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-muted-foreground hover:text-gold transition-colors duration-200 p-1"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@davidtumuks?_r=1&_t=ZS-9457tB0WeAL"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="text-muted-foreground hover:text-gold transition-colors duration-200 p-1"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Center — Nav Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {footerNavItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `transition-colors text-xs tracking-widest uppercase font-sans ${
                      isActive ? "text-gold" : "text-muted-foreground hover:text-gold"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Right — Legal */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase font-sans mb-1">Legal</p>
              <button
                onClick={() => setTermsOpen(true)}
                className="text-muted-foreground hover:text-gold transition-colors text-xs tracking-widest uppercase font-sans underline-offset-4 hover:underline"
              >
                Terms & Refund Policy
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-muted-foreground text-xs font-sans">
              © {year} Tumzart Portraits. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs font-sans italic">
              Every portrait, a story preserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Terms & Refund Policy Modal */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-2xl bg-card border-border text-foreground max-h-[80vh] overflow-y-auto">
          <DialogHeader className="pb-4 border-b border-border">
            <div className="flex items-center gap-3 mb-1">
              <div className="h-px flex-1 bg-gold opacity-40" />
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-sans">Legal</span>
              <div className="h-px flex-1 bg-gold opacity-40" />
            </div>
            <DialogTitle className="font-display text-2xl text-cream text-center mt-2">
              Terms of Service & Refund Policy
            </DialogTitle>
          </DialogHeader>

          <div className="mt-4 flex flex-col gap-6">
            {termsContent.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mt-0.5">
                  <span className="text-gold text-xs font-display">{i + 1}</span>
                </div>
                <div>
                  <h4 className="font-display text-base text-cream mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm font-sans leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-border text-center">
            <p className="text-muted-foreground text-xs font-sans italic">
              By commissioning a portrait, you agree to these terms.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;

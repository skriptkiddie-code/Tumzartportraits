import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Pricing & Booking", href: "/pricing" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-xs tracking-widest uppercase font-sans transition-colors duration-300 ${
      isActive ? "text-gold" : "text-cream-dim hover:text-gold"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-charcoal-deep/95 backdrop-blur-md border-b border-border shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-display text-lg sm:text-xl font-bold text-gold tracking-widest uppercase">Tumzart</span>
          <span className="text-cream-dim text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] uppercase font-sans">Portraits</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              end={item.href === "/"}
              className={navLinkClass}
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/pricing"
            className="ml-4 px-5 py-2 border border-gold text-gold hover:bg-gold hover:text-charcoal-deep transition-all duration-300 text-sm tracking-widest uppercase font-sans"
          >
            Commission
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-charcoal-deep/98 border-t border-border px-4 sm:px-6 py-5 sm:py-6 flex flex-col gap-4 sm:gap-5">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              end={item.href === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-xs sm:text-sm tracking-widest uppercase transition-colors duration-300 ${
                  isActive ? "text-gold" : "text-cream-dim hover:text-gold"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/pricing"
            onClick={() => setMenuOpen(false)}
            className="px-4 sm:px-5 py-2 border border-gold text-gold text-center text-xs sm:text-sm tracking-widest uppercase"
          >
            Commission
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

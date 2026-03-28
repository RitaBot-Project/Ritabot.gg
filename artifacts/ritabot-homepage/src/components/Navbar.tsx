import { Menu, X } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import RitaLogo from "@/assets/logo.svg?react";

const logoColors = [
  "#5865F2",
  "#57F287",
  "#FEE75C",
  "#EB459E",
  "#ED4245",
  "#00AFF4",
  "#FF7043",
  "#AB47BC",
  "#26C6DA",
  "#FFFFFF",
];

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Docs", href: "https://docs.ritabot.gg/ritabot-docs" },
  { name: "Dashboard", href: "https://dashboard.ritabot.gg/" },
  { name: "Support", href: "https://discord.com/invite/mgNR64R" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoColor = useMemo(
    () => logoColors[Math.floor(Math.random() * logoColors.length)],
    [],
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <RitaLogo
              aria-label="RitaBot Logo"
              className="w-10 h-10"
              style={{ color: logoColor }}
            />
            <span className="font-display font-bold text-2xl tracking-tight text-white">
              RitaBot
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://ritabot.gg/invite"
              className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(88,101,242,0.3)] hover:shadow-[0_0_25px_rgba(88,101,242,0.5)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Get RITA Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-muted-foreground hover:text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-white/10 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="https://ritabot.gg/invite"
                className="block w-full text-center px-5 py-3 rounded-xl font-semibold bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Get RITA Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

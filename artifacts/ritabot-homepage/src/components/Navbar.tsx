import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect, useMemo, useContext } from "react";
import { useLocation } from "wouter";
import { ThemeContext } from "@/hooks/theme-context";
import RitaLogoAnimated from "@/assets/rita_logo_animated.svg?react";

const darkLogoColors = [
  "#5865F2", "#57F287", "#FEE75C", "#EB459E", "#ED4245",
  "#00AFF4", "#FF7043", "#AB47BC", "#26C6DA", "#FFFFFF",
];

const lightLogoColors = [
  "#4752C4", "#248046", "#B58B00", "#C4358C", "#C83C3E",
  "#0084BD", "#D84E15", "#7B2D8E", "#0E8A94", "#1A1A2E",
];

const navLinks = [
  { name: "Home", href: import.meta.env.BASE_URL, newTab: false, showOn: "non-home", hideOn: "" },
  { name: "Features", href: "#features", newTab: false, showOn: "home", hideOn: "" },
  { name: "Pricing", href: "#pricing", newTab: false, showOn: "home", hideOn: "" },
  { name: "Pricing", href: `${import.meta.env.BASE_URL}compare`, newTab: false, showOn: "non-home", hideOn: "/compare" },
  { name: "Docs", href: "https://docs.ritabot.gg/ritabot-docs", newTab: false, showOn: "all", hideOn: "" },
  { name: "Dashboard", href: "https://dashboard.ritabot.gg/", newTab: false, showOn: "all", hideOn: "" },
  { name: "Support", href: "https://discord.com/invite/mgNR64R", newTab: true, showOn: "all", hideOn: "" },
  { name: "Partners", href: `${import.meta.env.BASE_URL}partners`, newTab: false, showOn: "all", hideOn: "/partners" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [location] = useLocation();
  const isHome = location === "/" || location === "";
  const visibleLinks = navLinks.filter((link) => {
    if (link.showOn === "home" && !isHome) return false;
    if (link.showOn === "non-home" && isHome) return false;
    if (link.hideOn && location === link.hideOn) return false;
    return true;
  });

  const logoColorIndex = useMemo(
    () => Math.floor(Math.random() * darkLogoColors.length),
    [],
  );
  const logoColor = isDark
    ? darkLogoColors[logoColorIndex]
    : lightLogoColors[logoColorIndex];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-border shadow-lg shadow-black/5 dark:shadow-black/20"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href={import.meta.env.BASE_URL} className="flex-shrink-0 flex items-center gap-3 no-underline">
            <RitaLogoAnimated
              aria-label="RitaBot Logo"
              className="w-10 h-10"
              style={{ color: logoColor }}
            />
            <span className="font-display font-bold text-2xl tracking-tight text-foreground">
              RitaBot
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {visibleLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                {...(link.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              href="https://ritabot.gg/invite"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(88,101,242,0.3)] hover:shadow-[0_0_25px_rgba(88,101,242,0.5)] hover:-translate-y-0.5 transition-all duration-200"
            >
              Get RITA Now
            </a>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-muted-foreground hover:text-foreground p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-b border-border shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {visibleLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                {...(link.newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="https://ritabot.gg/invite"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-3 rounded-xl font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
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

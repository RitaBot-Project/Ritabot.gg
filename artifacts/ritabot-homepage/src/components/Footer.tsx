import RitaLogo from "@/assets/logo.svg?react";
import { SUPPORT_URL, DOCS_URL, DASHBOARD_URL } from "@/lib/constants";

declare const __APP_VERSION__: string;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/50 dark:border-white/5 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <RitaLogo className="w-8 h-8 text-muted-foreground" />
          <span className="font-display font-bold text-xl text-muted-foreground">
            RitaBot
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a href={DOCS_URL} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Documentation
          </a>
          <a href={DASHBOARD_URL} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Dashboard
          </a>
          <a href={SUPPORT_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Support Server
          </a>
          <a href={`${import.meta.env.BASE_URL}partners`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Partners
          </a>
          <a href={`${import.meta.env.BASE_URL}why-rita`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Why RITA
          </a>
        </nav>

        <div className="text-sm text-muted-foreground/60">
          &copy; {currentYear} RitaBot. All rights reserved. V{__APP_VERSION__}
        </div>
      </div>
    </footer>
  );
}

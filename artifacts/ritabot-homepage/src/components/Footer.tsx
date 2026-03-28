export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/5 py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <img
            src={`${import.meta.env.BASE_URL}images/logo-icon.png`}
            alt="RitaBot"
            className="w-8 h-8 object-contain grayscale opacity-70"
          />
          <span className="font-display font-bold text-xl text-muted-foreground">
            RitaBot
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a href="https://docs.ritabot.gg" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Documentation
          </a>
          <a href="https://dashboard.ritabot.gg" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Dashboard
          </a>
          <a href="https://discord.com/invite/yQg3MtHnm5" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors">
            Support Server
          </a>
          <a href="https://ritabot.gg/invite" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            Invite Bot
          </a>
        </nav>

        <div className="text-sm text-muted-foreground/60">
          &copy; {currentYear} RitaBot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

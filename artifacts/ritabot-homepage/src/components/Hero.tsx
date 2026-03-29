import { Bot, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Abstract background" 
          className="w-full h-full object-cover opacity-10 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-3 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/60 dark:bg-white/5 border border-border dark:border-white/10 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-muted-foreground">Online and translating in 1000+ servers</span>
          </div>
          <a
            href="https://top.gg/bot/1028760535879131176"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/60 dark:bg-white/5 border border-border dark:border-white/10 backdrop-blur-sm hover:bg-muted dark:hover:bg-white/10 transition-colors"
          >
            <svg viewBox="0 0 256 256" className="w-4 h-4" aria-label="Top.gg">
              <rect width="256" height="256" rx="48" fill="#FF3366" />
              <path d="M80 72h56c30.928 0 56 25.072 56 56v0c0 30.928-25.072 56-56 56H80V72z" fill="white" />
            </svg>
            <span className="text-sm font-medium text-muted-foreground">Verified on Top.gg</span>
          </a>
          <a
            href="https://discordforge.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/60 dark:bg-white/5 border border-border dark:border-white/10 backdrop-blur-sm hover:bg-muted dark:hover:bg-white/10 transition-colors"
          >
            <img src={`${import.meta.env.BASE_URL}images/discordforge.png`} alt="DiscordForge" className="w-4 h-4 rounded-sm" />
            <span className="text-sm font-medium text-muted-foreground">Partnered with DiscordForge</span>
          </a>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-extrabold text-foreground mb-6 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 fill-mode-both">
          Break Language Barriers <br className="hidden md:block" />
          on <span className="text-gradient-primary">Discord</span>
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 fill-mode-both">
          Fast, automatic, and seamless translation for your community. 
          Connect members globally without the friction of language differences.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
          <a
            href="https://ritabot.gg/invite"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group relative flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg bg-primary text-primary-foreground shadow-[0_0_40px_rgba(88,101,242,0.4)] hover:shadow-[0_0_60px_rgba(88,101,242,0.6)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <Bot className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Add to Discord</span>
          </a>
          
          <a
            href="https://docs.ritabot.gg"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg text-foreground bg-muted dark:bg-secondary border border-border dark:border-white/10 hover:bg-muted/80 dark:hover:bg-white/10 hover:border-border dark:hover:border-white/20 transition-all duration-300"
          >
            <FileText className="w-5 h-5" />
            <span>View Documentation</span>
          </a>
        </div>
      </div>
    </section>
  );
}

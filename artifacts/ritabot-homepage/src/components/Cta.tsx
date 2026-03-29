import { MessageSquarePlus } from "lucide-react";

export function Cta() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-primary/10 dark:from-primary/20 via-secondary to-background border border-primary/20 p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 dark:from-primary/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Ready to bridge the language gap?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Join thousands of servers already using RitaBot to build truly global, inclusive communities. Setup takes less than 2 minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://ritabot.gg/invite"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-200 shadow-xl shadow-primary/20"
              >
                <MessageSquarePlus className="w-5 h-5" />
                Get RITA Now
              </a>
              <a
                href="https://dashboard.ritabot.gg"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold text-lg text-foreground hover:bg-muted/50 dark:hover:bg-white/5 transition-colors duration-200"
              >
                Open Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

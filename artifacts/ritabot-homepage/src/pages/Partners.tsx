import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ExternalLink, HeadphonesIcon, Mail } from "lucide-react";

const partners = [
  {
    name: "DiscordForge",
    description:
      "The premium Discord bot directory. Every bot, server, and template is manually verified by experts through comprehensive security screening, quality checks, authenticity verification, and compliance review. DiscordForge prioritizes quality and safety over quantity — ensuring the highest standard for your Discord project.",
    logo: `${import.meta.env.BASE_URL}images/discordforge.png`,
    url: "https://discordforge.org/",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Our Partners
            </h1>
            <p className="text-lg text-muted-foreground">
              We're proud to partner with platforms and communities that share our vision of breaking language barriers and improving communication through translation across Discord.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border/50 dark:border-white/5 hover:border-border dark:hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/50 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/[0.02] dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                <div className="flex items-start gap-5 mb-4">
                  <div
                    className={`w-14 h-14 shrink-0 rounded-2xl ${partner.bg} flex items-center justify-center border border-border/50 dark:border-white/5 group-hover:scale-110 transition-transform duration-300 overflow-hidden`}
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-8 h-8 rounded-sm"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-foreground font-display">
                        {partner.name}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className={`text-sm font-medium ${partner.color}`}>
                      Official Partner
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {partner.description}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-12 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 border border-dashed border-border dark:border-white/10 text-center">
              <h3 className="text-xl font-bold text-foreground font-display mb-3">
                Interested in partnering with RitaBot?
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-xl mx-auto">
                We're always looking for like-minded platforms and communities to collaborate with. Reach out to us via our support server or send us an email.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://discord.com/invite/mgNR64R"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold text-sm hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25"
                >
                  <HeadphonesIcon className="w-4 h-4" />
                  Join Support Server
                </a>
                <a
                  href="mailto:partnership@ritabot.gg"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-200 dark:bg-white/5 text-foreground rounded-xl font-bold text-sm hover:bg-zinc-300 dark:hover:bg-white/10 transition-all duration-200"
                >
                  <Mail className="w-4 h-4" />
                  partnership@ritabot.gg
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

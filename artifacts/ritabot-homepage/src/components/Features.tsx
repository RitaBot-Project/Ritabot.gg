import { Globe, RefreshCw, Flag, Users, Webhook, Zap, Command, Brain, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "100+ Languages",
    description: "Communicate globally. RitaBot supports highly accurate translations across more than 100 languages powered by Google Translate.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: RefreshCw,
    title: "Auto Channel Translation",
    description: "Set up dedicated channels where every message is automatically translated and forwarded to your target destination instantly.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Flag,
    title: "Flag Reactions",
    description: "The simplest way to translate. React to any message with a country's flag emoji, and receive a translation in that language.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  {
    icon: Users,
    title: "Group Cross-Channel Chat",
    description: "Connect multiple channels across different servers. Speak natively while everyone else reads in their preferred language.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: Webhook,
    title: "Beautiful Webhooks",
    description: "Translations are delivered cleanly using Discord Webhooks, making it look like the original user sent the translated message.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for scale and speed. Rita handles high-volume active chats without breaking a sweat, ensuring conversations flow naturally.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: Command,
    title: "Slash Commands",
    description: "Modern slash command interface for easy setup and management. Control translations with intuitive Discord commands.",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: Brain,
    title: "Proprietary ML Engine",
    description: "Backup translations powered by our proprietary Machine Learning Engine for seamless accuracy when needed.",
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
  },
  {
    icon: MessageCircle,
    title: "Forum and Thread Support",
    description: "Full support for Discord Forums and Threads, translating conversations in modern Discord features.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Everything you need to connect
          </h2>
          <p className="text-lg text-muted-foreground">
            RitaBot is packed with powerful features designed to make cross-language communication on Discord feel completely invisible.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative bg-card rounded-2xl md:rounded-3xl p-4 md:p-8 border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 overflow-hidden"
              >
                {/* Subtle hover gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                {/* Mobile: icon + title on same row */}
                <div className="flex items-center gap-3 mb-2 md:block">
                  <div className={`w-9 h-9 md:w-14 md:h-14 shrink-0 rounded-xl md:rounded-2xl ${feature.bg} flex items-center justify-center md:mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-4 h-4 md:w-7 md:h-7 ${feature.color}`} />
                  </div>
                  <h3 className="text-sm font-bold text-white md:hidden leading-tight">
                    {feature.title}
                  </h3>
                </div>

                <h3 className="hidden md:block text-xl font-bold text-white mb-3 font-display">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-xs md:text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

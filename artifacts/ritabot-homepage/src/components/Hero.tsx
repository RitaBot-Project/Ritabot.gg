import { useEffect, useState } from "react";
import { ArrowRight, Bot, FileText, Globe2, Handshake, Layers3, Sparkles } from "lucide-react";
import { DOCS_URL, INVITE_URL } from "@/lib/constants";

const HERO_SLIDE_INTERVAL_MS = 12000;
const baseUrl = import.meta.env.BASE_URL;

const heroSlides = [
  {
    id: "home",
    label: "RITA",
    title: "Breaking the language barrier!",
    description:
      "RitaBot is a fast, automatic Discord Translating Bot. Allowing communication across the language barrier from features like automatic-channel translation, to flag reaction translations and many more.",
    primary: {
      href: INVITE_URL,
      label: "Add to Discord",
      external: true,
      icon: Bot,
    },
    secondary: {
      href: DOCS_URL,
      label: "View Documentation",
      external: false,
      icon: FileText,
    },
    stats: ["12000+ servers", "11 billion characters translated", "239.8 million messages sent"],
    panelTitle: "Getting Started",
    panelText: "Getting started is as easy as 1-2-3!",
    panelItems: ["Invite RitaBot to your server", "Configure your setup", "Start translating messages"],
    accent: "from-primary/24 via-sky-400/12 to-transparent",
  }
] as const;

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAutoRotationPaused, setIsAutoRotationPaused] = useState(false);

  useEffect(() => {
    if (isAutoRotationPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, HERO_SLIDE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [isAutoRotationPaused]);

  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-18 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Abstract background" 
          className="w-full h-full object-cover opacity-10 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex w-full justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
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
        </div>
        <div
          className="relative mx-auto w-full overflow-hidden rounded-[2rem] border border-border/70 bg-card/50 shadow-[0_24px_90px_rgba(14,18,35,0.12)] backdrop-blur-xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 fill-mode-both lg:w-[85%]"
          onMouseEnter={() => setIsAutoRotationPaused(true)}
          onMouseLeave={() => setIsAutoRotationPaused(false)}
          onFocusCapture={() => setIsAutoRotationPaused(true)}
          onBlurCapture={() => setIsAutoRotationPaused(false)}
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent dark:from-white/6"></div>
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {heroSlides.map((slide, index) => {
              const PrimaryIcon = slide.primary.icon;
              const SecondaryIcon = slide.secondary.icon;

              return (
                <article
                  key={slide.id}
                  className="relative min-w-full px-5 py-5 sm:px-6 sm:py-6 md:px-8 md:py-7 lg:px-9 lg:py-8"
                  aria-hidden={activeSlide !== index}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${slide.accent}`}></div>
                  <div className="relative grid items-stretch gap-6 lg:min-h-[430px] lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)]">
                    <div className="flex h-full flex-col justify-center text-center lg:text-left">
                      <h1 className="max-w-3xl text-3xl font-display font-extrabold leading-[1.02] tracking-[-0.05em] text-foreground sm:text-4xl lg:text-5xl">
                        {slide.title}
                      </h1>

                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                        {slide.description}
                      </p>

                      <div className="mt-6 flex flex-col gap-6 lg:mt-auto lg:pt-6">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-start">
                          <a
                            href={slide.primary.href}
                            {...(slide.primary.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-primary px-6 py-3.5 text-base font-bold text-primary-foreground shadow-[0_0_32px_rgba(88,101,242,0.32)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_48px_rgba(88,101,242,0.48)] sm:w-auto"
                          >
                            <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
                            <PrimaryIcon className="relative z-10 h-5 w-5" />
                            <span className="relative z-10">{slide.primary.label}</span>
                          </a>

                          <a
                            href={slide.secondary.href}
                            {...(slide.secondary.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-border bg-background/60 px-6 py-3.5 text-base font-bold text-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-background/80 sm:w-auto"
                          >
                            <SecondaryIcon className="h-5 w-5" />
                            <span>{slide.secondary.label}</span>
                          </a>
                        </div>

                        <div className="grid gap-2.5 sm:grid-cols-3">
                          {slide.stats.map((stat) => (
                            <div key={stat} className="rounded-2xl border border-border/70 bg-background/50 px-3.5 py-2.5 text-sm font-medium text-muted-foreground backdrop-blur-sm">
                              {stat}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="relative flex items-center justify-center lg:h-full lg:justify-end lg:py-0 lg:pr-0">
                      <div className="relative flex w-full max-w-sm flex-col overflow-hidden rounded-[1.5rem] border border-border/70 bg-background/50 p-4 shadow-[0_18px_48px_rgba(16,23,42,0.14)] backdrop-blur-md lg:mr-0 lg:min-h-[430px] lg:w-[340px] lg:max-w-none">
                        <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-1">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">{slide.label}</p>
                            <h2 className="mt-2 text-xl font-display font-bold text-foreground">{slide.panelTitle}</h2>
                          </div>
                          <div className="rounded-full border border-border/70 bg-muted/70 p-3 text-primary">
                            <ArrowRight className="h-5 w-5" />
                          </div>
                        </div>

                        <p className="mt-4 text-sm leading-6 text-muted-foreground">{slide.panelText}</p>

                        <div className="mt-5 space-y-2.5 lg:mt-auto">
                          {slide.panelItems.map((item, itemIndex) => (
                            <div key={item} className="flex items-center justify-between rounded-2xl border border-border/70 bg-card/50 px-3.5 py-2.5">
                              <div className="flex items-center gap-3">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/12 text-sm font-bold text-primary">
                                  0{itemIndex + 1}
                                </span>
                                <span className="text-sm font-semibold text-foreground">{item}</span>
                              </div>
                              <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 border-t border-border/70 px-5 py-4 sm:px-6 lg:px-9 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
            <div className="flex flex-wrap items-center gap-3">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`group flex items-center rounded-full border px-3 py-2 text-left transition-all duration-300 ${
                    activeSlide === index
                      ? "border-primary/50 bg-primary/10 text-foreground"
                      : "border-border/70 bg-background/50 text-muted-foreground hover:bg-background/80"
                  }`}
                  aria-label={`Show ${slide.label} hero slide`}
                  aria-pressed={activeSlide === index}
                >
                  <span
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeSlide === index ? "w-8 bg-primary" : "w-2.5 bg-muted-foreground/40 group-hover:bg-muted-foreground/60"
                    }`}
                  ></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

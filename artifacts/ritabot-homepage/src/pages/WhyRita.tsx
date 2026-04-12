import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Languages, Link2, MessageSquare, Flag, MousePointer2, MessageCircle, Check, X, Calculator, HelpCircle } from "lucide-react";
import { useLocation } from "wouter";
import React, { useState } from "react";
import { usePageTitle } from "@/hooks/use-page-title";
import { INVITE_URL } from "@/lib/constants";

// ── RITA vs Others comparison data ──────────────────────────────────────────

interface ComparisonRow {
  label: string;
  subtext: string;
  rita: React.ReactNode;
  others: React.ReactNode;
  highlight?: boolean;
  learnMore?: string;
}

const comparisonRows: ComparisonRow[] = [
  {
    label: "Monthly cost",
    subtext: "for an active server",
    rita: <span className="block w-full px-3 py-1.5 rounded-full text-sm text-center font-semibold bg-green-500/15 text-green-400 border border-green-500/30">Flat rate</span>,
    others: <span className="block w-full px-3 py-1.5 rounded-full text-sm text-center font-medium border border-border text-muted-foreground">$50\u2013200+</span>,
    highlight: true,
  },
  {
    label: "How you pay",
    subtext: "the way you're charged",
    rita: <span className="block w-full px-3 py-1.5 rounded-full text-sm text-center font-semibold bg-green-500/15 text-green-400 border border-green-500/30">Monthly sub</span>,
    others: <span className="block w-full px-3 py-1.5 rounded-full text-sm text-center font-medium border border-border text-muted-foreground">Per character</span>,
  },
  {
    label: "Translation engine",
    subtext: "what powers your translations",
    rita: <span className="block w-full px-3 py-1.5 rounded-full text-sm text-center font-semibold bg-green-500/15 text-green-400 border border-green-500/30">Premium hybrid</span>,
    others: <span className="block w-full px-3 py-1.5 rounded-full text-sm text-center font-semibold bg-red-500/15 text-red-400 border border-red-500/30">Inadequate or pricey</span>,
    learnMore: "/playground",
  },
  {
    label: "Surprise bills",
    subtext: "unexpected charges at month end",
    rita: <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500/15 border border-green-500/30"><X className="w-4 h-4 text-green-400" /></span>,
    others: <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted/50 border border-border"><Check className="w-4 h-4 text-muted-foreground" /></span>,
  },
  {
    label: "Character limits",
    subtext: "when you hit the cap",
    rita: <span className="block w-full px-3 py-1.5 rounded-full text-sm text-center font-semibold bg-green-500/15 text-green-400 border border-green-500/30">None</span>,
    others: <span className="block w-full px-3 py-1.5 rounded-full text-sm text-center font-semibold bg-red-500/15 text-red-400 border border-red-500/30">Wait or pay extra</span>,
    highlight: true,
  },
  {
    label: "Active support",
    subtext: "real humans ready to help",
    rita: <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-500/15 border border-green-500/30"><Check className="w-4 h-4 text-green-400" /></span>,
    others: <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted/50 border border-border"><HelpCircle className="w-4 h-4 text-muted-foreground" /></span>,
  },
];

// ── Plan Calculator Modal ──────────────────────────────────────────────────

function PlanCalculatorModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [channels, setChannels] = useState(2);
  const [languages, setLanguages] = useState(2);

  if (!isOpen) return null;

  const tasksNeeded = channels * (languages - 1);

  let recommendedPlan = "Trial";
  let recommendedPrice = "FREE";
  if (tasksNeeded > 350) {
    recommendedPlan = "Ultima";
    recommendedPrice = "$21.99/mo";
  } else if (tasksNeeded > 200) {
    recommendedPlan = "Pro";
    recommendedPrice = "$15.99/mo";
  } else if (tasksNeeded > 100) {
    recommendedPlan = "Tinkerer";
    recommendedPrice = "$10.99/mo";
  } else if (tasksNeeded > 25) {
    recommendedPlan = "Casual";
    recommendedPrice = "$6.99/mo";
  } else if (tasksNeeded > 0) {
    recommendedPlan = "Trial";
    recommendedPrice = "FREE";
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-md bg-card border border-border/50 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors text-xl leading-none p-1"
        >
          &times;
        </button>

        <h2 className="text-2xl font-display font-bold text-foreground mb-2 text-center">
          Find Your Plan
        </h2>
        <p className="text-sm text-muted-foreground text-center mb-8">
          Find out which plan fits your server setup.
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Number of channels to translate
            </label>
            <input
              type="range"
              min={1}
              max={50}
              value={channels}
              onChange={(e) => setChannels(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="text-right text-sm text-primary font-bold mt-1">{channels} channels</div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">
              Number of languages
            </label>
            <input
              type="range"
              min={2}
              max={20}
              value={languages}
              onChange={(e) => setLanguages(Number(e.target.value))}
              className="w-full accent-primary"
            />
            <div className="text-right text-sm text-primary font-bold mt-1">{languages} languages</div>
          </div>

          <div className="border-t border-border/50 dark:border-white/10 pt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Tasks needed:</span>
              <span className="text-lg font-bold text-foreground">{tasksNeeded} tasks</span>
            </div>
            <div className="text-xs text-muted-foreground mb-4">
              Formula: {channels} channels × ({languages} languages − 1) = {tasksNeeded} tasks
            </div>
            <div className="rounded-xl bg-primary/10 border border-primary/20 p-4 text-center">
              <div className="text-sm text-muted-foreground mb-1">Recommended plan</div>
              <div className="text-xl font-display font-bold text-primary">{recommendedPlan}</div>
              <div className="text-sm text-foreground font-semibold">{recommendedPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Discord mockup primitives ──────────────────────────────────────────────

function DiscordShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 p-4 space-y-2" style={{ background: "#2b2d31" }}>
      {children}
    </div>
  );
}

interface MsgProps {
  avatarColor: string;
  initials: string;
  username: string;
  usernameColor: string;
  isBot?: boolean;
  time: string;
  children: React.ReactNode;
}

function DiscordMsg({ avatarColor, initials, username, usernameColor, isBot, time, children }: MsgProps) {
  return (
    <div className="flex gap-3 py-1">
      <div
        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm text-white"
        style={{ background: avatarColor }}
      >
        {initials}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-semibold text-[0.9rem]" style={{ color: usernameColor }}>{username}</span>
          {isBot && (
            <span className="text-[0.6rem] px-1 py-0.5 rounded bg-[#5865f2] text-white font-medium">BOT</span>
          )}
          <span className="text-[0.72rem] text-white/40">{time}</span>
        </div>
        {children}
      </div>
    </div>
  );
}

function MsgText({ dim, children }: { dim?: boolean; children: React.ReactNode }) {
  return (
    <p className={`text-[0.9rem] leading-snug m-0 ${dim ? "text-white/50" : "text-white/90"}`}>
      {children}
    </p>
  );
}

function EmbedBlock({ color, authorColor, authorInitials, authorName, text, footer }: {
  color: string; authorColor: string; authorInitials: string;
  authorName: string; text: string; footer: string;
}) {
  return (
    <div
      className="mt-1 p-3 rounded bg-black/20"
      style={{ borderLeft: `3px solid ${color}` }}
    >
      <div className="flex items-center gap-2 mb-1">
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center text-[0.65rem] font-bold text-white shrink-0"
          style={{ background: authorColor }}
        >
          {authorInitials}
        </div>
        <span className="text-[0.82rem] font-semibold text-white/90">{authorName}</span>
      </div>
      <p className="text-[0.9rem] text-white/90 m-0 leading-snug">{text}</p>
      <p className="text-[0.72rem] text-white/40 mt-1 m-0">{footer}</p>
    </div>
  );
}

function FlagReaction({ flag }: { flag: string }) {
  return (
    <div className="inline-flex items-center gap-1 px-2 py-1 rounded-md mt-1 text-[0.88rem]"
      style={{ background: "rgba(255,255,255,0.1)" }}>
      <span>{flag}</span>
      <span className="text-[0.75rem] text-white/70">1</span>
    </div>
  );
}

function ContextMenuMockup() {
  return (
    <div className="mt-2">
      {/* Main context menu */}
      <div
        className="rounded border border-white/10 py-1.5 px-2 w-fit text-[0.82rem] space-y-0.5"
        style={{ background: "#111214" }}
      >
        <div className="px-2 py-1.5 text-white/40 rounded">Add Reaction</div>
        <div className="px-2 py-1.5 text-white/40 rounded">Edit Message</div>
        <div className="h-px my-1" style={{ background: "rgba(255,255,255,0.1)" }} />
        <div className="px-2 py-1.5 text-white rounded flex items-center gap-2"
          style={{ background: "#5865f2" }}>
          Apps
          <span className="ml-auto opacity-50 text-[0.7rem]">▶</span>
        </div>
        <div className="h-px my-1" style={{ background: "rgba(255,255,255,0.1)" }} />
        <div className="px-2 py-1.5 text-white/40 rounded">Copy Text</div>
      </div>
      {/* Submenu */}
      <div
        className="rounded border border-white/10 py-1.5 px-2 w-fit text-[0.82rem] space-y-0.5 mt-1 ml-28"
        style={{ background: "#111214" }}
      >
        <div className="px-2 py-1.5 text-white rounded flex items-center gap-2"
          style={{ background: "#5865f2" }}>
          <Languages className="w-4 h-4" />
          Translate to My Language
        </div>
        <div className="px-2 py-1.5 text-white/80 rounded flex items-center gap-2">
          <Languages className="w-4 h-4" />
          Detect Language
        </div>
      </div>
    </div>
  );
}

// ── Section header helper ──────────────────────────────────────────────────

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">{title}</h2>
      <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">{subtitle}</p>
    </div>
  );
}

// ── Mode row ───────────────────────────────────────────────────────────────

function ModeRow({
  reverse,
  icon,
  title,
  badge,
  description,
  mockup,
}: {
  reverse?: boolean;
  icon: React.ReactNode;
  title: string;
  badge?: string;
  description: string;
  mockup: React.ReactNode;
}) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center ${
        reverse ? "md:[direction:rtl]" : ""
      }`}
    >
      <div className={`flex flex-col gap-3 ${reverse ? "md:[direction:ltr]" : ""}`}>
        <h3 className="text-xl font-semibold text-foreground flex items-center gap-3">
          <span className="text-primary">{icon}</span>
          {title}
          {badge && (
            <span className="text-[0.68rem] px-2 py-0.5 rounded bg-primary/15 text-primary font-medium">
              {badge}
            </span>
          )}
        </h3>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{description}</p>
      </div>
      <div className={reverse ? "md:[direction:ltr]" : ""}>{mockup}</div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────

export default function WhyRita() {
  const [, navigate] = useLocation();
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  usePageTitle("Why RITA");

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16 pb-24">

        {/* ── Hero ── */}
        <section className="relative flex flex-col items-center text-center pt-32 md:pt-44 pb-4">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[700px] h-[400px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[130px] pointer-events-none" />

          <h1 className="relative z-10 text-4xl md:text-[2.8rem] leading-tight font-display font-extrabold text-foreground mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both">
            Break the language barrier in your Discord
          </h1>

          <p className="relative z-10 text-lg text-muted-foreground mb-8 max-w-[540px] leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 fill-mode-both">
            Your community speaks different languages. Now they can all understand each other — automatically.
          </p>

          {/* Stats */}
          <div className="relative z-10 flex gap-8 mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200 fill-mode-both">
            {[
              { value: "100+", label: "Languages" },
              { value: "Unlimited", label: "Messages" },
              { value: "$2.99", label: "Starting at" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">{label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="relative z-10 flex flex-wrap gap-3 justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-both">
            <a
              href={INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-bold text-lg bg-primary text-primary-foreground shadow-[0_0_40px_rgba(88,101,242,0.4)] hover:shadow-[0_0_60px_rgba(88,101,242,0.6)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Get Started</span>
            </a>
            <button
              onClick={() => setIsCalculatorOpen(true)}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg text-foreground bg-muted dark:bg-secondary border border-border dark:border-white/10 hover:bg-muted/80 dark:hover:bg-white/10 transition-all duration-300"
            >
              <Calculator className="w-5 h-5" />
              Calculate Your Plan
            </button>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="flex flex-col items-center gap-8">
          <SectionHeader
            title="How It Works"
            subtitle="Set up in minutes, works forever"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
            {[
              { n: "1", icon: <Languages className="w-7 h-7" />, title: "Add RITA", desc: "Invite RITA to your Discord server with one click." },
              { n: "2", icon: <Link2 className="w-7 h-7" />, title: "Link Your Channels", desc: "Connect channels that should translate between languages." },
              { n: "3", icon: <MessageSquare className="w-7 h-7" />, title: "Chat Freely", desc: "Messages are automatically translated. Your community connects." },
            ].map(({ n, icon, title, desc }) => (
              <div
                key={n}
                className="relative flex flex-col items-center text-center p-8 bg-card border border-border rounded-2xl"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-semibold text-primary-foreground">
                  {n}
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                  {icon}
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Translation Modes ── */}
        <section className="flex flex-col items-center gap-10">
          <SectionHeader
            title="Translation Modes"
            subtitle="Multiple ways to translate — pick what works for your server"
          />

          <div className="flex flex-col gap-14 w-full">

            {/* Mode 1 – Webhook (auto-translate) */}
            <ModeRow
              icon={<MessageCircle className="w-6 h-6" />}
              title="Auto-Translate (Webhook)"
              badge="Most Popular"
              description="Messages are automatically translated and reposted with the original user's name and avatar. Seamless and natural."
              mockup={
                <DiscordShell>
                  <DiscordMsg avatarColor="#e91e63" initials="M" username="Maria" usernameColor="#e91e63" time="Today at 3:42 PM">
                    <MsgText>Hola! Como estan todos?</MsgText>
                  </DiscordMsg>
                  <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.05)" }} />
                  <DiscordMsg avatarColor="#e91e63" initials="M" username="Maria" usernameColor="rgba(255,255,255,0.9)" isBot time="Today at 3:42 PM">
                    <MsgText>Hello! How is everyone?</MsgText>
                  </DiscordMsg>
                </DiscordShell>
              }
            />

            {/* Mode 2 – Embed */}
            <ModeRow
              reverse
              icon={<MessageCircle className="w-6 h-6" />}
              title="Auto-Translate (Embed)"
              description="Translations appear as embeds below the original message. Great for keeping both versions visible."
              mockup={
                <DiscordShell>
                  <DiscordMsg avatarColor="#4caf50" initials="T" username="Takeshi" usernameColor="#4caf50" time="Today at 5:15 PM">
                    <MsgText>このゲームは素晴らしいです！</MsgText>
                    <EmbedBlock
                      color="#4caf50"
                      authorColor="#4caf50"
                      authorInitials="T"
                      authorName="Takeshi"
                      text="This game is amazing!"
                      footer="Today at 5:15 PM"
                    />
                  </DiscordMsg>
                </DiscordShell>
              }
            />

            {/* Mode 3 – Flag reactions */}
            <ModeRow
              icon={<Flag className="w-6 h-6" />}
              title="Flag Reactions"
              description="React with a flag emoji to translate any message on demand. Perfect for casual use or specific messages."
              mockup={
                <DiscordShell>
                  <DiscordMsg avatarColor="#2196f3" initials="J" username="John" usernameColor="#2196f3" time="Today at 2:30 PM">
                    <MsgText>The meeting has been moved to tomorrow at 10am.</MsgText>
                    <FlagReaction flag="🇫🇷" />
                  </DiscordMsg>
                  <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.05)" }} />
                  <DiscordMsg avatarColor="#2196f3" initials="J" username="John" usernameColor="rgba(255,255,255,0.9)" isBot time="Today at 2:30 PM">
                    <MsgText>La réunion a été déplacée à demain à 10h.</MsgText>
                  </DiscordMsg>
                </DiscordShell>
              }
            />

            {/* Mode 4 – Right-click / Apps */}
            <ModeRow
              reverse
              icon={<MousePointer2 className="w-6 h-6" />}
              title="Right-Click Menu"
              description={"Right-click any message and select 'Translate' from the Apps menu. Quick and private."}
              mockup={
                <DiscordShell>
                  <DiscordMsg avatarColor="#ff9800" initials="L" username="Lucas" usernameColor="#ff9800" time="Today at 4:00 PM">
                    <MsgText>Ich verstehe das nicht ganz.</MsgText>
                  </DiscordMsg>
                  <ContextMenuMockup />
                </DiscordShell>
              }
            />
          </div>
        </section>

        {/* ── Comparison Section ── */}
        <section className="w-full rounded-2xl border border-border bg-card/60 p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              RITA vs Others
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm md:text-base">
              See why server owners choose RITA
            </p>
          </div>

          {/* Column headers */}
          <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 mb-2 px-4">
            <div />
            <div className="text-center text-sm font-bold text-primary uppercase tracking-wider">RITA</div>
            <div className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider">Others</div>
          </div>

          {/* Rows */}
          <div className="flex flex-col gap-2">
            {comparisonRows.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-[1fr_1fr_1fr] gap-4 items-center rounded-xl px-4 py-4 border ${
                  row.highlight
                    ? "border-green-500/20 bg-green-500/[0.03]"
                    : i % 2 === 0
                      ? "border-border/50 bg-muted/20 dark:bg-white/[0.02]"
                      : "border-transparent bg-transparent"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm md:text-base font-bold text-foreground">{row.label}</span>
                    {row.learnMore && (
                      <a
                        href={row.learnMore}
                        className="text-xs font-semibold text-primary hover:underline"
                      >
                        How?
                      </a>
                    )}
                  </div>
                  <span className="text-xs md:text-sm text-muted-foreground">{row.subtext}</span>
                </div>
                <div className="flex justify-center">{row.rita}</div>
                <div className="flex justify-center">{row.others}</div>
              </div>
            ))}
          </div>

          {/* Calculator CTA inside comparison */}
          <div className="flex flex-col items-center text-center p-6 mt-6 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-2xl">
            <h3 className="text-lg font-display font-bold text-foreground mb-2">
              Not sure which is right for you?
            </h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-sm">
              Every server is different. Plug in your numbers and see exactly what you'd pay.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setIsCalculatorOpen(true)}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                <Calculator className="w-4 h-4" />
                Calculate Your Savings
              </button>
              <a
                href={`${import.meta.env.BASE_URL}compare`}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-foreground bg-muted dark:bg-secondary border border-border dark:border-white/10 hover:bg-muted/80 dark:hover:bg-white/10 transition-all duration-200"
              >
                Compare Plans
              </a>
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="rounded-2xl border border-primary/20 bg-primary/5 dark:bg-primary/10 p-10 md:p-16 flex flex-col items-center text-center gap-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Ready to connect your community?
          </h2>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Join hundreds of servers already breaking language barriers.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mt-2 flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-lg bg-primary text-primary-foreground shadow-[0_0_40px_rgba(88,101,242,0.4)] hover:shadow-[0_0_60px_rgba(88,101,242,0.6)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Get Started Now</span>
            </a>
          </div>
        </section>

      </main>

      <Footer />

      <PlanCalculatorModal
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
      />
    </div>
  );
}

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Languages, Link2, MessageSquare, Flag, MousePointer2, MessageCircle } from "lucide-react";
import { useLocation } from "wouter";

const INVITE_URL = "https://ritabot.gg/invite";

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

function Embed({ color, authorColor, authorInitials, authorName, text, footer }: {
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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-20 pb-24">

        {/* ── Hero ── */}
        <section className="relative flex flex-col items-center text-center pt-32 md:pt-44 pb-4">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[700px] h-[400px] bg-primary/10 dark:bg-primary/20 rounded-full blur-[130px] pointer-events-none" />

          <h1 className="relative z-10 text-4xl md:text-[2.8rem] leading-tight font-display font-extrabold text-foreground mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both">
            The Smarter Way to Translate<br className="hidden md:block" /> Your Discord Server
          </h1>

          <p className="relative z-10 text-lg text-muted-foreground mb-8 max-w-[540px] leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 fill-mode-both">
            Real-time, automatic translation that works the way your community does — naturally, quietly, and always there.
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
              <span className="relative z-10">Get Started Free</span>
            </a>
            <button
              onClick={() => navigate("/compare")}
              className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg text-foreground bg-muted dark:bg-secondary border border-border dark:border-white/10 hover:bg-muted/80 dark:hover:bg-white/10 transition-all duration-300"
            >
              View Plans
            </button>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="flex flex-col items-center gap-8">
          <SectionHeader
            title="How It Works"
            subtitle="Get up and running in minutes. No technical knowledge required."
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
            {[
              { n: "1", icon: <Languages className="w-7 h-7" />, title: "Set Your Languages", desc: "Choose the source and target languages for your server channels." },
              { n: "2", icon: <Link2 className="w-7 h-7" />, title: "Connect Your Server", desc: "Invite RITA and link the channels you want to bridge together." },
              { n: "3", icon: <MessageSquare className="w-7 h-7" />, title: "Translate Automatically", desc: "Messages flow between channels in real-time, translated instantly." },
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
            title="Multiple Ways to Translate"
            subtitle="Choose how RITA fits into your server's workflow."
          />

          <div className="flex flex-col gap-14 w-full">

            {/* Mode 1 – Webhook (auto-translate) */}
            <ModeRow
              icon={<MessageCircle className="w-6 h-6" />}
              title="Auto-translate via Webhook"
              badge="Most Popular"
              description="RITA silently re-posts messages through a webhook with the translated text — keeping your channels clean and native-looking."
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
              title="Auto-translate via Embed"
              description="RITA appends an embed below the original message with the translation — great for servers that want to keep context and attribution visible."
              mockup={
                <DiscordShell>
                  <DiscordMsg avatarColor="#4caf50" initials="T" username="Takeshi" usernameColor="#4caf50" time="Today at 5:15 PM">
                    <MsgText>このゲームは素晴らしいです！</MsgText>
                    <Embed
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
              title="Flag Emoji Reactions"
              description="Anyone can react to a message with a flag emoji to request a translation on demand. Perfect for servers that only need occasional translations."
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
              title="Right-Click to Translate"
              description={"Use Discord's right-click \"Apps\" menu to translate any message instantly to your personal language preference — visible only to you."}
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

        {/* ── Comparison CTA ── */}
        <section className="w-full rounded-2xl border border-border bg-card/60 p-8 md:p-12 flex flex-col items-center text-center gap-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Find the Right Plan for Your Server
          </h2>
          <p className="text-muted-foreground max-w-lg leading-relaxed">
            From small communities to large multilingual servers — RITA has a plan that fits. Compare all features and limits side by side.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            <button
              onClick={() => navigate("/compare")}
              className="group relative flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base bg-primary text-primary-foreground shadow-[0_0_30px_rgba(88,101,242,0.3)] hover:shadow-[0_0_50px_rgba(88,101,242,0.5)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Compare Plans</span>
            </button>
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <section className="rounded-2xl border border-primary/20 bg-primary/5 dark:bg-primary/10 p-10 md:p-16 flex flex-col items-center text-center gap-4">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Ready to Break Language Barriers?
          </h2>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Join thousands of servers already using RITA to connect people across languages.
          </p>
          <a
            href={INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-2 flex items-center gap-2 px-10 py-4 rounded-2xl font-bold text-lg bg-primary text-primary-foreground shadow-[0_0_40px_rgba(88,101,242,0.4)] hover:shadow-[0_0_60px_rgba(88,101,242,0.6)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10">Add RITA to Discord — It's Free</span>
          </a>
        </section>

      </main>

      <Footer />
    </div>
  );
}

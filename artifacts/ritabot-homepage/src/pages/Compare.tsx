import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check, X, ExternalLink, MessageSquare, BookOpen, HeadphonesIcon, Copy, CheckCheck } from "lucide-react";
import { useState } from "react";

const plans = [
  { name: "Trial", price: "FREE FOR 1 MONTH", sub: "or until limits have been reached.", period: "", highlighted: false },
  { name: "Reaction", price: "$2.99", sub: "Renews monthly until cancelled", period: "/mo", highlighted: false },
  { name: "Casual", price: "$6.99", sub: "Renews monthly until cancelled", period: "/mo", highlighted: false },
  { name: "Tinkerer", price: "$10.99", sub: "Renews monthly until cancelled", period: "/mo", highlighted: false },
  { name: "Pro", price: "$15.99", sub: "Renews monthly until cancelled", period: "/mo", highlighted: true },
  { name: "Ultima", price: "$21.99", sub: "Renews monthly until cancelled", period: "/mo", highlighted: false },
];

type CellValue = boolean | string;

interface FeatureRow {
  feature: string;
  sup?: number;
  values: CellValue[];
}

const features: FeatureRow[] = [
  { feature: "99% Uptime Guarantee", values: [true, true, true, true, true, true] },
  { feature: "Flag Reaction Translations", values: [true, true, true, true, true, true] },
  { feature: "Unlimited Translations", values: [true, true, true, true, true, true] },
  { feature: "Channel to Channel Translations (Tasks)", values: [true, false, true, true, true, true] },
  { feature: "Edited Message Translations", sup: 2, values: [true, false, true, true, true, true] },
  { feature: "Tasks Limit", sup: 3, values: ["25 Tasks", "—", "100 Tasks", "200 Tasks", "350 Tasks", "550 Tasks"] },
  { feature: "Google Characters Limit", sup: 4, values: ["10k Characters", "100k Characters", "200k Characters", "400k Characters", "600k Characters", "800k Characters"] },
  { feature: "Custom Translation Engine (ML)", sup: 5, values: ["10k Characters", "Unlimited", "Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
  { feature: "Early Access to Dev Features", values: [false, false, false, false, true, true] },
  { feature: "BITA Bot Access", values: [false, false, false, false, false, "BITA for 1 Server"] },
];

const descriptions = [
  "Let's see if RITA is right for you, take advantage of our TRIAL.\n\nInvite RITA to your server, Activate and Go.",
  "Do you just need the odd sentence or post translated here and there. You can translate as much as you want but flag reaction only, meaning you need to add a flag emoji to each message to translate it.",
  "Do you just need something to get started with RITA? Are you running a small server? This should be sufficient for your needs, 100 tasks is a good place to start.",
  "Do you run a community server, or have a game focused server? Are you trying to coordinate between large groups? This plan is perfect for Medium-sized servers. 200 tasks gives you freedom to expand.",
  "Do you run a large community or game server? Then this is perfect for you. 350 tasks will give you the ability to have multiple large groups all translating to each other in real-time.",
  "Our \"ultima\" Plan is our highest plan we offer, with 550 tasks, and BITA Access for 1 Additional servers. Allowing you to coordinate and translate the even the largest servers going.",
];

const footnotes = [
  { num: 1, text: "The TRIAL will allow a user to try RITA for a period of one (1) month, or until limits have been reached, whichever comes first. Servers are limited to 1 TRIAL Per Server \u00b7 Per User. Once Limit has been reached RITA will stop functioning for translations. Users do not need to be a Member of the RMS (RITA Management Server) to use the TRIAL." },
  { num: 2, text: "Edited messages will always utilise our ML Engine for translations, regardless if google soft limits are reached or not." },
  { num: 3, text: "A task is a singular channel setup for automatic channel translation. For example; 1 channel translating from english to french counts as 1 task, if you wanted to create an interchangeable setup of 10 channels (10 languages which are all connected); it would be 10 \u00d7 (10-1) tasks so 90 tasks overall." },
  { num: 4, text: "Each plan has a Soft Limit on the number of Google Characters they are assigned for the Google Translation API. This soft limit comes into effect for all translations. Once a user hits the assigned limit, translations will fall back to our Machine Learning (ML) Translation Engine. However, if our ML Engine is not trained in the target language or its confidence is not suitable for translation then it will continue to use the Google Translation API for translation. There is no Hard Limit on the number of Characters that a user can use on the Google API however after 2 Million a review may be conducted to ensure there is no abuse of service." },
  { num: 5, text: "A Hard limit for 30 Million Characters is applied to our ML Translation Engine. Once a user has reached this limit a Review of service will be conducted to ensure there is no abuse of service, this is not restriction from the service and is only intended to ensure service can be maintained." },
];

const INVITE_URL = "https://discord.com/oauth2/authorize?client_id=1028760535879131176&permissions=8&integration_type=0&scope=bot+applications.commands";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted-foreground/10 transition-colors cursor-pointer"
      title="Copy to clipboard"
    >
      {copied ? <CheckCheck className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}

function TrialModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg bg-card border border-border/50 dark:border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors text-xl leading-none p-1"
        >
          &times;
        </button>

        <h2 className="text-2xl font-display font-bold text-foreground mb-8 text-center">
          Get Started with RITA Trial
        </h2>

        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
              1
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">Invite RITA to your server</h3>
              <a
                href={INVITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-bold text-sm hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25"
              >
                <ExternalLink className="w-4 h-4" />
                Invite RITA
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center">
              2
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-2">Activate your Trial</h3>
              <p className="text-sm text-muted-foreground mb-2">Type the following command in any channel on Discord:</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted dark:bg-white/5 rounded-lg border border-border/50 dark:border-white/10">
                <MessageSquare className="w-4 h-4 text-primary shrink-0" />
                <code className="text-sm font-mono text-foreground">!tr trial</code>
                <CopyButton text="!tr trial" />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500/10 text-green-500 font-bold text-sm flex items-center justify-center">
              &#10003;
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">That's it, you're all set!</h3>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 dark:border-white/10">
          <p className="text-sm text-muted-foreground text-center mb-4">
            Need help getting started or want to learn more?
          </p>
          <div className="flex gap-3 justify-center">
            <a
              href="https://discord.com/invite/mgNR64R"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-200 dark:bg-white/5 text-foreground rounded-xl font-bold text-sm hover:bg-zinc-300 dark:hover:bg-white/10 transition-all duration-200"
            >
              <HeadphonesIcon className="w-4 h-4" />
              Support
            </a>
            <a
              href="https://docs.ritabot.gg"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-200 dark:bg-white/5 text-foreground rounded-xl font-bold text-sm hover:bg-zinc-300 dark:hover:bg-white/10 transition-all duration-200"
            >
              <BookOpen className="w-4 h-4" />
              Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function CellContent({ value }: { value: CellValue }) {
  if (value === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />;
  return <span className="text-sm font-medium text-foreground">{value}</span>;
}

function MobileFeatureItem({ feature, value, sup }: { feature: string; value: CellValue; sup?: number }) {
  return (
    <div className="flex items-center justify-between py-2.5 border-b border-border/30 dark:border-white/5 last:border-0">
      <span className="text-xs text-muted-foreground pr-2">
        {feature}
        {sup && <sup className="ml-0.5 text-primary text-[8px]">{sup}</sup>}
      </span>
      <span className="shrink-0 text-right">
        {value === true ? (
          <Check className="w-4 h-4 text-green-500" />
        ) : value === false ? (
          <X className="w-4 h-4 text-muted-foreground/40" />
        ) : (
          <span className="text-xs font-medium text-foreground">{value}</span>
        )}
      </span>
    </div>
  );
}

function MobileCard({ plan, index, onTrialClick }: { plan: typeof plans[0]; index: number; onTrialClick: () => void }) {
  return (
    <div
      className={`rounded-2xl border p-5 ${
        plan.highlighted
          ? "border-primary/40 bg-primary/5"
          : "border-border/50 dark:border-white/10 bg-muted/30 dark:bg-white/[0.02]"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h2 className={`text-lg font-display font-bold ${plan.highlighted ? "text-primary" : "text-foreground"}`}>
            {plan.name}
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5 whitespace-pre-line">{descriptions[index]}</p>
        </div>
        {plan.highlighted && (
          <span className="text-[10px] font-bold uppercase bg-primary/20 text-primary px-2 py-0.5 rounded-full shrink-0">Popular</span>
        )}
      </div>

      <div className="mb-4">
        <span className="text-2xl font-display font-extrabold text-foreground">
          {plan.price}
          {plan.name === "Trial" && <sup className="ml-0.5 text-primary text-[10px]">1</sup>}
        </span>
        {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
        <div className="text-[11px] text-muted-foreground mt-0.5">{plan.sub}</div>
      </div>

      <div className="pt-2 border-t border-border/30 dark:border-white/5 mb-3">
        {features.map((row) => (
          <MobileFeatureItem key={row.feature} feature={row.feature} value={row.values[index]} sup={row.sup} />
        ))}
      </div>

      {plan.name === "Trial" ? (
        <button
          onClick={onTrialClick}
          className="w-full py-2.5 rounded-xl font-bold text-sm text-center transition-all duration-200 bg-zinc-200 dark:bg-white/5 text-foreground hover:bg-zinc-300 dark:hover:bg-white/10 cursor-pointer border border-border/50 dark:border-white/10"
        >
          Get Trial
        </button>
      ) : (
        <a
          href="https://dashboard.ritabot.gg"
          className={`block w-full py-2.5 rounded-xl font-bold text-sm text-center transition-all duration-200 ${
            plan.highlighted
              ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
              : "bg-zinc-200 dark:bg-white/5 text-foreground hover:bg-zinc-300 dark:hover:bg-white/10"
          }`}
        >
          Get {plan.name}
        </a>
      )}
    </div>
  );
}

export default function Compare() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Compare Plans
            </h1>
            <p className="text-lg text-muted-foreground">
              Compare all features across every RITA plan. Find the perfect fit for your server's translation needs.
            </p>
          </div>

          <div className="md:hidden space-y-4">
            {plans.map((plan, i) => (
              <MobileCard key={plan.name} plan={plan} index={i} onTrialClick={() => setTrialModalOpen(true)} />
            ))}
          </div>

          <div className="hidden md:block overflow-x-auto -mx-4 px-4">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 w-[180px]"></th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className={`p-4 text-center ${plan.highlighted ? "bg-primary/10 rounded-t-2xl" : ""}`}
                    >
                      <div className={`text-lg font-display font-bold ${plan.highlighted ? "text-primary" : "text-foreground"}`}>
                        {plan.name}
                      </div>
                    </th>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 align-top">
                    <span className="text-sm font-semibold text-muted-foreground">Description</span>
                  </td>
                  {descriptions.map((desc, i) => (
                    <td
                      key={i}
                      className={`p-4 align-top text-center ${plans[i].highlighted ? "bg-primary/10" : ""}`}
                    >
                      <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line">{desc}</p>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-border/50 dark:border-white/10">
                    <span className="text-sm font-semibold text-muted-foreground">Cost</span>
                  </td>
                  {plans.map((plan) => (
                    <td
                      key={plan.name}
                      className={`p-4 text-center border-b border-border/50 dark:border-white/10 ${plan.highlighted ? "bg-primary/10" : ""}`}
                    >
                      <div className="text-xl font-display font-extrabold text-foreground">
                        {plan.price}
                        {plan.name === "Trial" && <sup className="ml-0.5 text-primary text-[10px]">1</sup>}
                        {plan.period && <span className="text-sm font-medium text-muted-foreground">{plan.period}</span>}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">{plan.sub}</div>
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((row, rowIndex) => (
                  <tr
                    key={row.feature}
                    className={rowIndex % 2 === 0 ? "bg-muted/30 dark:bg-white/[0.02]" : ""}
                  >
                    <td className="p-4 text-sm font-semibold text-foreground border-b border-border/30 dark:border-white/5">
                      {row.feature}
                      {row.sup && <sup className="ml-0.5 text-primary text-[10px]">{row.sup}</sup>}
                    </td>
                    {row.values.map((val, colIndex) => (
                      <td
                        key={colIndex}
                        className={`p-4 text-center border-b border-border/30 dark:border-white/5 ${plans[colIndex].highlighted ? "bg-primary/10" : ""}`}
                      >
                        <CellContent value={val} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td className="p-4"></td>
                  {plans.map((plan) => (
                    <td key={plan.name} className={`p-4 text-center ${plan.highlighted ? "bg-primary/10 rounded-b-2xl" : ""}`}>
                      {plan.name === "Trial" ? (
                        <button
                          onClick={() => setTrialModalOpen(true)}
                          className="inline-block w-full py-3 rounded-xl font-bold text-sm text-center transition-all duration-200 bg-zinc-200 dark:bg-white/5 text-foreground hover:bg-zinc-300 dark:hover:bg-white/10 cursor-pointer"
                        >
                          Get Trial
                        </button>
                      ) : (
                        <a
                          href="https://dashboard.ritabot.gg"
                          className={`inline-block w-full py-3 rounded-xl font-bold text-sm text-center transition-all duration-200 ${
                            plan.highlighted
                              ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                              : "bg-zinc-200 dark:bg-white/5 text-foreground hover:bg-zinc-300 dark:hover:bg-white/10"
                          }`}
                        >
                          Get {plan.name}
                        </a>
                      )}
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="mt-16 space-y-3 bg-muted/50 dark:bg-white/[0.02] border border-border/50 dark:border-white/5 rounded-2xl p-6 md:p-8">
            {footnotes.map((note) => (
              <p key={note.num} className="text-sm text-muted-foreground leading-relaxed">
                <sup className="text-primary text-[10px] mr-1">{note.num}</sup>
                {note.text}
              </p>
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <TrialModal open={trialModalOpen} onClose={() => setTrialModalOpen(false)} />
    </div>
  );
}

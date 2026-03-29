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
  { feature: "Tasks Limit", sup: 3, values: ["25 Tasks", "\u2014", "100 Tasks", "200 Tasks", "350 Tasks", "550 Tasks"] },
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

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-green-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-4 h-4 text-zinc-500/40 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function FeatureItem({ feature, value, sup }: { feature: string; value: CellValue; sup?: number }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
      <span className="text-xs text-zinc-400 pr-2">
        {feature}
        {sup && <sup className="ml-0.5 text-cyan-400 text-[8px]">{sup}</sup>}
      </span>
      <span className="shrink-0 text-right">
        {value === true ? (
          <CheckIcon />
        ) : value === false ? (
          <XIcon />
        ) : (
          <span className="text-xs font-medium text-zinc-200">{value}</span>
        )}
      </span>
    </div>
  );
}

export function StackedCards() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100" style={{ maxWidth: 390 }}>
      <div className="px-4 pt-16 pb-8">
        <h1 className="text-2xl font-bold text-center mb-2">Compare Plans</h1>
        <p className="text-sm text-zinc-400 text-center mb-8">
          Find the perfect fit for your server's translation needs.
        </p>

        <div className="space-y-4">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-5 ${
                plan.highlighted
                  ? "border-cyan-500/40 bg-cyan-500/5"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className={`text-lg font-bold ${plan.highlighted ? "text-cyan-400" : "text-zinc-100"}`}>
                    {plan.name}
                  </h2>
                  <p className="text-xs text-zinc-500 mt-0.5 whitespace-pre-line">{descriptions[i]}</p>
                </div>
                {plan.highlighted && (
                  <span className="text-[10px] font-bold uppercase bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full shrink-0">Popular</span>
                )}
              </div>

              <div className="mb-4">
                <span className="text-2xl font-extrabold text-zinc-100">
                  {plan.price}
                  {plan.name === "Trial" && <sup className="ml-0.5 text-cyan-400 text-[10px]">1</sup>}
                </span>
                {plan.period && <span className="text-sm text-zinc-500">{plan.period}</span>}
                <div className="text-[11px] text-zinc-500 mt-0.5">{plan.sub}</div>
              </div>

              <div className="pt-2 border-t border-white/5 mb-3">
                {features.map((row) => (
                  <FeatureItem key={row.feature} feature={row.feature} value={row.values[i]} sup={row.sup} />
                ))}
              </div>

              <button
                className={`w-full py-2.5 rounded-xl font-bold text-sm text-center transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-cyan-500 text-zinc-950 hover:bg-cyan-400"
                    : plan.name === "Trial"
                      ? "bg-white/5 text-zinc-100 hover:bg-white/10 border border-white/10"
                      : "bg-white/5 text-zinc-100 hover:bg-white/10"
                }`}
              >
                {plan.name === "Trial" ? "Get Trial" : `Get ${plan.name}`}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-3 bg-white/[0.02] border border-white/5 rounded-2xl p-5">
          {footnotes.map((note) => (
            <p key={note.num} className="text-[11px] text-zinc-500 leading-relaxed">
              <sup className="text-cyan-400 text-[8px] mr-1">{note.num}</sup>
              {note.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

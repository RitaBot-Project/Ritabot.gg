import { Check } from "lucide-react";

const plans = [
  {
    name: "Reaction",
    price: "$2.99",
    period: "/mo",
    description: "Perfect for casual use and small servers.",
    tasks: "0",
    features: [
      "Unlimited Flag Reaction Translations",
      "Google Translate API",
      "No Auto-translation tasks"
    ],
    highlighted: false,
    cta: "Get Reaction"
  },
  {
    name: "Casual",
    price: "$6.99",
    period: "/mo",
    description: "For active communities needing automation.",
    tasks: "100",
    features: [
      "All Reaction Features",
      "100 Auto-Translation Tasks",
      "Increased Character Limit"
    ],
    highlighted: false,
    cta: "Get Casual"
  },
  {
    name: "Pro",
    price: "$15.99",
    period: "/mo",
    description: "The sweet spot for large, diverse communities.",
    tasks: "350",
    features: [
      "All Tinkerer Features",
      "350 Auto-Translation Tasks",
      "Increased Character Limit"
    ],
    highlighted: true,
    cta: "Get Pro"
  },
  {
    name: "Tinkerer",
    price: "$10.99",
    period: "/mo",
    description: "More power for growing international groups.",
    tasks: "200",
    features: [
      "All Casual Features",
      "200 Auto-Translation Tasks",
      "Increased Character Limit"
    ],
    highlighted: false,
    cta: "Get Tinkerer"
  },
  {
    name: "Ultima",
    price: "$21.99",
    period: "/mo",
    description: "For massive networks and enterprise servers.",
    tasks: "550",
    features: [
      "All Pro Features",
      "550 Auto-Translation Tasks",
      "BITA Bot Access",
      "Early access to Dev Features"
    ],
    highlighted: false,
    cta: "Get Ultima"
  }
];

const displayPlans = [plans[0], plans[1], plans[3], plans[2], plans[4]];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 relative bg-background/50 border-t border-border/50 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Simple, predictable pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Pricing is based on Auto-Translation Tasks (channel setups), not per-character. 
            Enjoy unlimited individual translations on all tiers.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 items-stretch">
          {displayPlans.map((plan) => (
            <div 
              key={plan.name}
              className={`relative flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] rounded-3xl p-8 transition-all duration-300 ${
                plan.highlighted 
                  ? "bg-secondary border-2 border-primary shadow-[0_0_30px_rgba(88,101,242,0.15)] transform md:-translate-y-4 z-10" 
                  : "bg-card border border-border/50 dark:border-white/10 hover:border-border dark:hover:border-white/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8 pb-8 border-b border-border/50 dark:border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display font-extrabold text-foreground">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground font-medium">{plan.period}</span>}
                </div>
                <div className="mt-2 text-sm font-medium text-primary bg-primary/10 inline-block px-3 py-1 rounded-full">
                  {plan.tasks} Tasks included
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="https://dashboard.ritabot.gg"
                className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all duration-200 mt-auto ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-primary/40"
                    : "bg-muted dark:bg-white/5 text-foreground hover:bg-muted/80 dark:hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 space-y-8 max-w-4xl mx-auto">
          <div className="p-6 bg-card border border-border/50 dark:border-white/10 rounded-2xl">
            <h3 className="text-lg font-bold text-foreground mb-4">What is a Task?</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A task is a singular channel setup for automatic channel translation. For example; 1 channel translating from english to french counts as 1 task, If you wanted to create an interchangeable setup of 10 channels (10 languages which are all connected); it would be 10 * (10-1) tasks so 90 tasks overall.
            </p>
          </div>

          <div className="p-6 bg-card border border-border/50 dark:border-white/10 rounded-2xl">
            <h3 className="text-lg font-bold text-foreground mb-4">Character Limits & Soft Caps</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Each plan has a Soft Limit on the number of Google Characters they are assigned for the Google Translation API. This soft limit comes into effect for all translations. Once a user hits the assigned limit, translations will fall back to our Machine Learning (ML) Translation Engine. However, if our ML Engine is not trained in the target language or its confidence is not suitable for transaltion then it will continue to use the Google Translation API for translation. There is no Hard Limit on the number of Characters that a user can use on the Google API however after 2 Million a review may be conducted to ensure there is no abuse of service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

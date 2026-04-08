import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Copy, CheckCheck, Globe, Cpu, Languages, ArrowLeftRight, ChevronDown } from "lucide-react";
import { useState, useEffect, useCallback, useRef } from "react";
import { languages, type Language } from "@/lib/languages";

const MAX_CHARS = 200;
const COOLDOWN_MS = 30_000;
const PERIOD_MS = 12 * 60 * 60 * 1000;
const MAX_PER_PERIOD = 5;
const STORAGE_KEY = "ritabot-translate-history";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

const ERROR_MESSAGE =
  "Unable to complete translation request. This is not because RITA is down — this is an API endpoint issue that only affects this website. We are working to fix it.";

function getTranslationHistory(): number[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const timestamps: number[] = JSON.parse(raw);
    const cutoff = Date.now() - PERIOD_MS;
    return timestamps.filter((t) => t > cutoff);
  } catch {
    return [];
  }
}

function saveTranslationTimestamp() {
  const history = getTranslationHistory();
  history.push(Date.now());
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
}

function getRemainingTranslations(): number {
  return Math.max(0, MAX_PER_PERIOD - getTranslationHistory().length);
}

function getLastTranslationTime(): number {
  const history = getTranslationHistory();
  return history.length > 0 ? history[history.length - 1] : 0;
}

async function translateWithGoogle(text: string, source: Language, target: Language): Promise<string> {
  const res = await fetch(`${API_BASE_URL}/api/translate/google`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      source: source.google.source,
      target: target.google.target,
    }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return data.translation;
}

async function translateWithML(text: string, source: Language, target: Language): Promise<string> {
  const res = await fetch(`${API_BASE_URL}/api/translate/ml`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      source: source.code,
      target: target.code,
    }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return data.translation;
}

async function translateWithDeepL(text: string, source: Language, target: Language): Promise<string> {
  const res = await fetch(`${API_BASE_URL}/api/translate/deepl`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      source: source.deepl.source,
      target: target.deepl.target,
    }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  return data.translation;
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted-foreground/10 transition-colors cursor-pointer"
      title="Copy to clipboard"
    >
      {copied ? <CheckCheck className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
    </button>
  );
}

function LanguageSelect({
  value,
  onChange,
  disabledCode,
  label,
}: {
  value: string;
  onChange: (code: string) => void;
  disabledCode: string;
  label: string;
}) {
  return (
    <div className="flex-1 min-w-0">
      <label className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
        {label}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none px-4 py-3 pr-10 rounded-xl bg-card border border-border/50 dark:border-white/10 text-foreground text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-200 cursor-pointer"
        >
          {languages.map((lang) => (
            <option
              key={lang.code}
              value={lang.code}
              disabled={lang.code === disabledCode}
            >
              {lang.name}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
      </div>
    </div>
  );
}

interface EngineConfig {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  translate: (text: string, source: Language, target: Language) => Promise<string>;
  description: string;
}

const engines: EngineConfig[] = [
  {
    id: "google",
    name: "Google Translate",
    icon: <Globe className="w-5 h-5" />,
    color: "text-blue-500",
    borderColor: "border-blue-500/20",
    translate: translateWithGoogle,
    description:
      "Industry-standard cloud translation API by Google. Supports over 100 languages with high reliability and broad language coverage, making it one of the most widely used translation services worldwide.",
  },
  {
    id: "ml",
    name: "ML Engine",
    icon: <Cpu className="w-5 h-5" />,
    color: "text-emerald-500",
    borderColor: "border-emerald-500/20",
    translate: translateWithML,
    description:
      "Our in-house, custom-trained, self-hosted translation engine built by the RitaBot team. Designed specifically for Discord communities, offering fast translations with no external dependencies — your data never leaves our infrastructure.",
  },
  {
    id: "deepl",
    name: "DeepL",
    icon: <Languages className="w-5 h-5" />,
    color: "text-sky-400",
    borderColor: "border-sky-400/20",
    translate: translateWithDeepL,
    description:
      "Premium translation API known for producing natural-sounding translations, especially across European languages. Leverages advanced neural network technology for contextually accurate and fluent results.",
  },
];

export default function Engines() {
  const [inputText, setInputText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("de");
  const [outputs, setOutputs] = useState<Record<string, string>>({
    google: "",
    ml: "",
    deepl: "",
  });
  const [loading, setLoading] = useState<Record<string, boolean>>({
    google: false,
    ml: false,
    deepl: false,
  });
  const [cooldown, setCooldown] = useState(0);
  const [remaining, setRemaining] = useState(getRemainingTranslations);
  const cooldownRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const updateCooldown = useCallback(() => {
    const lastTime = getLastTranslationTime();
    if (lastTime === 0) {
      setCooldown(0);
      return;
    }
    const elapsed = Date.now() - lastTime;
    const left = Math.max(0, COOLDOWN_MS - elapsed);
    setCooldown(left);
    if (left === 0 && cooldownRef.current) {
      clearInterval(cooldownRef.current);
      cooldownRef.current = null;
    }
  }, []);

  useEffect(() => {
    updateCooldown();
    setRemaining(getRemainingTranslations());
    const interval = setInterval(() => {
      updateCooldown();
      setRemaining(getRemainingTranslations());
    }, 1000);
    return () => clearInterval(interval);
  }, [updateCooldown]);

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
  };

  const handleSourceChange = (code: string) => {
    if (code === targetLang) {
      setTargetLang(sourceLang);
    }
    setSourceLang(code);
  };

  const handleTargetChange = (code: string) => {
    if (code === sourceLang) {
      setSourceLang(targetLang);
    }
    setTargetLang(code);
  };

  const isDisabled = !inputText.trim() || cooldown > 0 || remaining <= 0;

  const handleTranslate = async () => {
    if (isDisabled) return;

    const source = languages.find((l) => l.code === sourceLang)!;
    const target = languages.find((l) => l.code === targetLang)!;

    saveTranslationTimestamp();
    setRemaining(getRemainingTranslations());

    setLoading({ google: true, ml: true, deepl: true });

    if (cooldownRef.current) clearInterval(cooldownRef.current);
    setCooldown(COOLDOWN_MS);
    cooldownRef.current = setInterval(() => {
      updateCooldown();
    }, 1000);

    const results = await Promise.allSettled(
      engines.map(async (engine) => {
        const result = await engine.translate(inputText, source, target);
        return { id: engine.id, result };
      })
    );

    const newOutputs: Record<string, string> = {};

    results.forEach((res, i) => {
      if (res.status === "fulfilled") {
        newOutputs[res.value.id] = res.value.result;
      } else {
        newOutputs[engines[i].id] = ERROR_MESSAGE;
      }
    });

    setOutputs(newOutputs);
    setLoading({ google: false, ml: false, deepl: false });
  };

  const cooldownSeconds = Math.ceil(cooldown / 1000);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Translation Engines
            </h1>
            <p className="text-lg text-muted-foreground">
              Compare the quality of our translation engines side by side. Enter
              text below and see how each engine handles the translation.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            <div className="flex items-end gap-3 mb-5">
              <LanguageSelect
                value={sourceLang}
                onChange={handleSourceChange}
                disabledCode={targetLang}
                label="Translate from"
              />
              <button
                onClick={handleSwapLanguages}
                className="flex-shrink-0 p-3 rounded-xl bg-card border border-border/50 dark:border-white/10 text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 mb-px"
                title="Swap languages"
              >
                <ArrowLeftRight className="w-5 h-5" />
              </button>
              <LanguageSelect
                value={targetLang}
                onChange={handleTargetChange}
                disabledCode={sourceLang}
                label="Translate to"
              />
            </div>

            <div className="relative">
              <textarea
                value={inputText}
                onChange={(e) => {
                  if (e.target.value.length <= MAX_CHARS) {
                    setInputText(e.target.value);
                  }
                }}
                maxLength={MAX_CHARS}
                rows={4}
                placeholder="Type or paste text to translate..."
                className="w-full px-5 py-4 rounded-2xl bg-card border border-border/50 dark:border-white/10 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 resize-none text-base transition-all duration-200"
              />
              <div className="flex items-center justify-between mt-3 flex-wrap gap-2">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {inputText.length}/{MAX_CHARS} characters
                  </span>
                  <span className="text-xs text-muted-foreground/70">
                    {remaining}/{MAX_PER_PERIOD} translations remaining
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {cooldown > 0 && (
                    <span className="text-xs text-muted-foreground/70">
                      Wait {cooldownSeconds}s
                    </span>
                  )}
                  {remaining <= 0 && (
                    <span className="text-xs text-red-400">
                      Limit reached — resets in 12 hours
                    </span>
                  )}
                  <button
                    onClick={handleTranslate}
                    disabled={isDisabled}
                    className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(88,101,242,0.3)] hover:shadow-[0_0_25px_rgba(88,101,242,0.5)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0_0_20px_rgba(88,101,242,0.3)]"
                  >
                    {cooldown > 0 ? `Translate (${cooldownSeconds}s)` : "Translate"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto mb-16">
            {engines.map((engine) => (
              <div
                key={engine.id}
                className={`bg-card rounded-2xl border ${engine.borderColor} dark:border-opacity-30 overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20`}
              >
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/50 dark:border-white/5">
                  <div className="flex items-center gap-2.5">
                    <span className={engine.color}>{engine.icon}</span>
                    <span className="font-semibold text-sm text-foreground">
                      {engine.name}
                    </span>
                  </div>
                  <CopyButton text={outputs[engine.id] || ""} />
                </div>
                <div className="px-5 py-4 min-h-[120px]">
                  {loading[engine.id] ? (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      <span className="text-sm">Translating...</span>
                    </div>
                  ) : outputs[engine.id] ? (
                    <p className="text-sm text-foreground leading-relaxed">
                      {outputs[engine.id]}
                    </p>
                  ) : (
                    <p className="text-sm text-muted-foreground/50 italic">
                      Translation will appear here
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground text-center mb-8">
              About Our Engines
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {engines.map((engine) => (
                <div
                  key={engine.id}
                  className="bg-card rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border/50 dark:border-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 dark:hover:shadow-black/50"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${engine.color} bg-current/10`}
                      style={{ backgroundColor: `color-mix(in srgb, currentColor 10%, transparent)` }}
                    >
                      <span className={engine.color}>{engine.icon}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground font-display">
                      {engine.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {engine.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

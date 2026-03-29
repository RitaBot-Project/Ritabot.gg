import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { ThemeContext } from "@/hooks/theme-context";

import Home from "@/pages/Home";
import Partners from "@/pages/Partners";
import Compare from "@/pages/Compare";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/partners" component={Partners} />
      <Route path="/compare" component={Compare} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const themeValue = useTheme();

  useEffect(() => {
    const base = import.meta.env.BASE_URL;
    const faviconUrl = `${base}images/logo-white.svg`;
    const link =
      (document.querySelector("link[rel~='icon']") as HTMLLinkElement) ||
      document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = faviconUrl;
    document.head.appendChild(link);
  }, []);

  return (
    <ThemeContext.Provider value={themeValue}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeContext.Provider>
  );
}

export default App;

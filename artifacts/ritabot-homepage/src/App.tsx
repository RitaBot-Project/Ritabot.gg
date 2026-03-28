import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";

import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";

// Initialize empty query client as we have no backend but standard template expects it
const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
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
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

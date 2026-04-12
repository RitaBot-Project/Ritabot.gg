import { useEffect } from "react";

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | RitaBot` : "RitaBot — Discord Translation Bot";
  }, [title]);
}

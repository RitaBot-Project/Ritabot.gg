import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Pricing } from "@/components/Pricing";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <Pricing />
        <Cta />
      </main>

      <Footer />
    </div>
  );
}

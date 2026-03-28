import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <div className="text-center p-8 max-w-md bg-card rounded-3xl border border-white/10 shadow-2xl">
        <img
          src={`${import.meta.env.BASE_URL}images/logo-icon.png`}
          alt="RitaBot Logo"
          className="w-20 h-20 object-contain mx-auto mb-6 opacity-50 grayscale"
        />
        <h1 className="text-6xl font-display font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="mb-8 text-muted-foreground">
          Looks like this route doesn't exist. Let's get you back to familiar territory.
        </p>
        <Link href="/" className="inline-flex px-6 py-3 rounded-xl font-bold bg-primary text-white hover:bg-primary/90 transition-colors">
          Return Home
        </Link>
      </div>
    </div>
  );
}

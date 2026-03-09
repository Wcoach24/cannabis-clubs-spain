import Link from "next/link";

interface CTAProps {
  variant?: "invitation" | "guide" | "join";
  className?: string;
}

export default function CTA({ variant = "join", className = "" }: CTAProps) {
  if (variant === "invitation") {
    return (
      <div className={`bg-gradient-to-br from-[var(--color-forest)] to-[var(--color-forest-dark)] rounded-2xl p-8 md:p-10 text-center ${className}`}>
        <h3 className="font-[family-name:var(--font-fraunces)] text-2xl md:text-3xl font-bold text-white mb-3">
          Ready to Visit a Club in Madrid?
        </h3>
        <p className="text-[var(--color-cream-dark)]/80 mb-6 max-w-lg mx-auto">
          Get a verified invitation to one of Madrid&apos;s top-rated cannabis social clubs. Safe, legal, and welcoming to visitors.
        </p>
        <a
          href="https://www.weedmadrid.com/invite/vallehermoso-club-social-madrid"
          rel="noopener"
          target="_blank"
          className="inline-block px-8 py-3.5 bg-[var(--color-gold)] text-[var(--color-forest-dark)] font-bold rounded-full hover:bg-[var(--color-gold-light)] transition-all hover:scale-105 shadow-lg"
        >
          Get Your Invitation →
        </a>
      </div>
    );
  }

  if (variant === "guide") {
    return (
      <div className={`bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl p-8 text-center ${className}`}>
        <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-bold mb-2">
          New to Cannabis Clubs?
        </h3>
        <p className="text-[var(--color-text-muted)] mb-4">
          Read our complete guide on how membership works, what to expect, and how to find the right club.
        </p>
        <Link
          href="/how-to-join"
          className="inline-block px-6 py-2.5 bg-[var(--color-forest)] text-white font-semibold rounded-full hover:bg-[var(--color-forest-light)] transition-colors"
        >
          How to Join a Club →
        </Link>
      </div>
    );
  }

  return (
    <Link
      href="/how-to-join"
      className={`inline-block px-6 py-3 bg-[var(--color-forest)] text-white font-semibold rounded-full hover:bg-[var(--color-forest-light)] transition-colors ${className}`}
    >
      Join a Club →
    </Link>
  );
}

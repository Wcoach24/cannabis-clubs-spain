import Link from "next/link";

const cityLinks = [
  { name: "Barcelona", href: "/barcelona" },
  { name: "Madrid", href: "/madrid" },
  { name: "Valencia", href: "/valencia" },
  { name: "Málaga", href: "/malaga" },
  { name: "Ibiza", href: "/ibiza" },
  { name: "Seville", href: "/seville" },
];

const guideLinks = [
  { name: "Cannabis Laws", href: "/cannabis-laws-spain" },
  { name: "How to Join a Club", href: "/how-to-join" },
  { name: "Prices & Costs", href: "/prices" },
  { name: "Spain vs Amsterdam", href: "/spain-vs-amsterdam" },
  { name: "Tourism Guide", href: "/cannabis-tourism-guide" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-forest-dark)] text-[var(--color-cream)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="font-[family-name:var(--font-fraunces)] font-bold text-lg">
                Cannabis Clubs Spain
              </span>
            </div>
            <p className="text-sm text-[var(--color-cream-dark)]/70 leading-relaxed">
              Your trusted guide to cannabis social clubs across Spain. Updated for 2026.
            </p>
          </div>

          {/* City Guides */}
          <div>
            <h3 className="font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-gold)] mb-4">
              City Guides
            </h3>
            <ul className="space-y-2.5">
              {cityLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-cream-dark)]/70 hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info Guides */}
          <div>
            <h3 className="font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-gold)] mb-4">
              Guides
            </h3>
            <ul className="space-y-2.5">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--color-cream-dark)]/70 hover:text-[var(--color-gold)] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Network / CTA */}
          <div>
            <h3 className="font-[family-name:var(--font-fraunces)] font-semibold text-[var(--color-gold)] mb-4">
              Get Started
            </h3>
            <p className="text-sm text-[var(--color-cream-dark)]/70 mb-4 leading-relaxed">
              Ready to experience Spain&apos;s cannabis culture? Start with our step-by-step guide.
            </p>
            <Link
              href="/how-to-join"
              className="inline-block px-5 py-2.5 bg-[var(--color-gold)] text-[var(--color-forest-dark)] text-sm font-semibold rounded-full hover:bg-[var(--color-gold-light)] transition-colors"
            >
              How to Join →
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-forest-light)]/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[var(--color-cream-dark)]/50">
            © {new Date().getFullYear()} Cannabis Clubs Spain. Informational purposes only.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.weedmadrid.com"
              rel="noopener"
              target="_blank"
              className="text-xs text-[var(--color-cream-dark)]/50 hover:text-[var(--color-gold)] transition-colors"
            >
              Weed Madrid
            </a>
            <a
              href="https://madridcannabisguide.com"
              rel="noopener"
              target="_blank"
              className="text-xs text-[var(--color-cream-dark)]/50 hover:text-[var(--color-gold)] transition-colors"
            >
              Madrid Cannabis Guide
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

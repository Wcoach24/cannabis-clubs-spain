"use client";

import { useState } from "react";
import Link from "next/link";

const cities = [
  { name: "Barcelona", href: "/barcelona" },
  { name: "Madrid", href: "/madrid" },
  { name: "Valencia", href: "/valencia" },
  { name: "Málaga", href: "/malaga" },
  { name: "Ibiza", href: "/ibiza" },
  { name: "Seville", href: "/seville" },
];

const guides = [
  { name: "Cannabis Laws", href: "/cannabis-laws-spain" },
  { name: "How to Join", href: "/how-to-join" },
  { name: "Prices & Costs", href: "/prices" },
  { name: "Spain vs Amsterdam", href: "/spain-vs-amsterdam" },
  { name: "Tourism Guide", href: "/cannabis-tourism-guide" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-bg-primary)]/95 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🌿</span>
            <div>
              <span className="font-[family-name:var(--font-fraunces)] font-bold text-lg text-[var(--color-forest)] dark:text-[var(--color-gold)]">
                Cannabis Clubs
              </span>
              <span className="font-[family-name:var(--font-fraunces)] font-light text-lg text-[var(--color-text-secondary)]">
                {" "}Spain
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Cities Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCitiesOpen(true)}
              onMouseLeave={() => setCitiesOpen(false)}
            >
              <button className="px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-forest)] dark:hover:text-[var(--color-gold)] transition-colors rounded-lg hover:bg-[var(--color-bg-secondary)]">
                Cities ▾
              </button>
              {citiesOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl shadow-lg py-2 z-50">
                  {cities.map((city) => (
                    <Link
                      key={city.href}
                      href={city.href}
                      className="block px-4 py-2.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-forest)] hover:bg-[var(--color-bg-secondary)] dark:hover:text-[var(--color-gold)] transition-colors"
                    >
                      {city.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Guides Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setGuidesOpen(true)}
              onMouseLeave={() => setGuidesOpen(false)}
            >
              <button className="px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-forest)] dark:hover:text-[var(--color-gold)] transition-colors rounded-lg hover:bg-[var(--color-bg-secondary)]">
                Guides ▾
              </button>
              {guidesOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl shadow-lg py-2 z-50">
                  {guides.map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="block px-4 py-2.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-forest)] hover:bg-[var(--color-bg-secondary)] dark:hover:text-[var(--color-gold)] transition-colors"
                    >
                      {guide.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <Link
              href="/how-to-join"
              className="ml-4 px-5 py-2.5 bg-[var(--color-forest)] text-white text-sm font-semibold rounded-full hover:bg-[var(--color-forest-light)] transition-colors shadow-sm"
            >
              Join a Club →
            </Link>
          </nav>

          {/* Mobile Burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-bg-secondary)] transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]">
          <div className="px-4 py-4 space-y-1">
            <p className="px-3 py-2 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">Cities</p>
            {cities.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-forest)] rounded-lg hover:bg-[var(--color-bg-secondary)]"
              >
                {city.name}
              </Link>
            ))}
            <p className="px-3 py-2 pt-4 text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">Guides</p>
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-forest)] rounded-lg hover:bg-[var(--color-bg-secondary)]"
              >
                {guide.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/how-to-join"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-5 py-3 bg-[var(--color-forest)] text-white font-semibold rounded-full"
              >
                Join a Club →
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

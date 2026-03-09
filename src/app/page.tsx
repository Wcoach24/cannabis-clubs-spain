import CityCard from "@/components/CityCard";
import CTA from "@/components/CTA";
import Link from "next/link";

const cities = [
  { name: "Barcelona", href: "/barcelona", description: "Spain's cannabis capital with the most clubs and liberal scene.", badge: "Most Popular", image: "https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_600,h_450,c_fill/cannabis-clubs-spain/city-barcelona" },
  { name: "Madrid", href: "/madrid", description: "The capital's growing club scene with a welcoming expat community.", badge: "Recommended", image: "https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_600,h_450,c_fill/cannabis-clubs-spain/city-madrid" },
  { name: "Valencia", href: "/valencia", description: "An emerging destination for cannabis tourism on the Mediterranean coast.", image: "https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_600,h_450,c_fill/cannabis-clubs-spain/city-valencia" },
  { name: "Málaga", href: "/malaga", description: "Costa del Sol's relaxed scene popular with expats and tourists.", image: "https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_600,h_450,c_fill/cannabis-clubs-spain/city-malaga" },
  { name: "Ibiza", href: "/ibiza", description: "The party island's unique take on cannabis social clubs.", image: "https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_600,h_450,c_fill/cannabis-clubs-spain/city-ibiza" },
  { name: "Seville", href: "/seville", description: "Andalusia's hidden gem for an authentic Spanish cannabis experience.", image: "https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_600,h_450,c_fill/cannabis-clubs-spain/city-seville" },
];

const quickLinks = [
  { title: "Cannabis Laws in Spain", href: "/cannabis-laws-spain", desc: "What's legal, what's not, and what tourists need to know." },
  { title: "How to Join a Club", href: "/how-to-join", desc: "Step-by-step membership process for visitors and residents." },
  { title: "Prices & Costs", href: "/prices", desc: "Membership fees, per-gram prices, and city-by-city comparison." },
  { title: "Spain vs Amsterdam", href: "/spain-vs-amsterdam", desc: "How Spain's cannabis scene compares to the Netherlands." },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--color-forest-dark)] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-forest-dark)] via-[var(--color-forest)] to-[var(--color-forest-dark)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-sm font-semibold rounded-full border border-[var(--color-gold)]/20 mb-6">
              Updated for 2026
            </span>
            <h1 className="font-[family-name:var(--font-fraunces)] text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Cannabis Clubs
              <br />
              <span className="text-[var(--color-gold)]">Across Spain</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[var(--color-cream-dark)]/80 max-w-xl leading-relaxed">
              Your complete guide to cannabis social clubs in Barcelona, Madrid, Valencia, and beyond. Laws, prices, how to join — everything you need.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/how-to-join"
                className="px-8 py-3.5 bg-[var(--color-gold)] text-[var(--color-forest-dark)] font-bold rounded-full hover:bg-[var(--color-gold-light)] transition-all hover:scale-105 shadow-lg"
              >
                How to Join a Club →
              </Link>
              <Link
                href="/cannabis-laws-spain"
                className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Learn the Laws
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* City Guides Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold">
            Explore by City
          </h2>
          <p className="mt-3 text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
            Each city has its own cannabis culture. Find the right destination for your experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city) => (
            <CityCard key={city.href} {...city} />
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-[var(--color-bg-secondary)] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-4xl font-bold text-center mb-12">
            Essential Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-gold)] hover:shadow-lg transition-all"
              >
                <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-bold group-hover:text-[var(--color-forest)] dark:group-hover:text-[var(--color-gold)] transition-colors">
                  {link.title}
                </h3>
                <p className="mt-2 text-[var(--color-text-muted)]">{link.desc}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-[var(--color-forest)] dark:text-[var(--color-gold)]">
                  Read Guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <CTA variant="invitation" />
      </section>
    </>
  );
}

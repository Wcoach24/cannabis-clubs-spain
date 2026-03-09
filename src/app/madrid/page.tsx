import { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'Cannabis Clubs in Madrid — Guide 2026',
  description: 'Discover Madrid\'s cannabis club scene. Learn about the best social clubs, membership process, and what to expect as a visitor.',
};

export default function MadridPage() {
  return (
    <ArticleLayout
      title="Cannabis Clubs in Madrid — Guide 2026"
      description="Explore Madrid's growing cannabis social club scene with verified information and visitor guidance."
      heroImage="https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_1600,h_900,c_fill/cannabis-clubs-spain/hero-madrid"
      heroAlt="Madrid skyline with cannabis leaves"
      breadcrumb={[{ name: 'Madrid', href: '/madrid' }]}
      ctaVariant="invitation"
    >
      <h2>Madrid's Cannabis Social Clubs</h2>
      <p>
        Madrid has become one of Spain's most active cannabis social club destinations, with dozens of clubs operating across the city's diverse neighborhoods. From upscale lounges in the Salamanca district to casual hangouts in Malasaña, Madrid's cannabis culture reflects the city's cosmopolitan character. Clubs range from intimate gatherings to professionally-managed establishments with premium product selections, making the city accessible to both long-term residents and first-time visitors.
      </p>

      <h2>Finding Clubs Across Madrid</h2>
      <p>
        Cannabis clubs operate throughout Madrid's neighborhoods, including Chueca, Malasaña, Salamanca, Chamberí, and the city center. Most clubs require membership applications that can be completed online or in person, and many welcome both Spanish residents and international visitors with valid identification. Tourist-friendly clubs often streamline the process with English-speaking staff and clear entry procedures.
      </p>

      <h2>Complete Madrid Cannabis Guide</h2>
      <p>
        Madrid deserves its own comprehensive resource, which is why we've created a dedicated site exclusively for Madrid's cannabis clubs. Rather than limit our coverage here, we recommend visiting our specialized Madrid guide for:
      </p>
      <ul>
        <li>Verified club listings with current contact information</li>
        <li>Neighborhood-by-neighborhood club locations</li>
        <li>Real member reviews and ratings</li>
        <li>Membership fees and application process details</li>
        <li>Tourist invitation assistance for quick entry</li>
      </ul>

      <div className="my-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-center">
          <a
            href="https://www.weedmadrid.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition-all"
          >
            Visit WeedMadrid.com for Complete Madrid Guide →
          </a>
        </p>
      </div>

      <p>
        WeedMadrid.com is your complete resource for Madrid's cannabis scene, with up-to-date listings, verified member feedback, and a streamlined visitor invitation system to get you access quickly.
      </p>
    </ArticleLayout>
  );
}

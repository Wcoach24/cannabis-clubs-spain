import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';
import ClubDirectory from '@/components/ClubDirectory';
import CityStats from '@/components/CityStats';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import { sevillaClubs, cityMeta } from '@/data/clubs';

export const metadata: Metadata = {
  title: 'Cannabis Clubs in Seville — Best Clubs & Guide 2026',
  description:
    'Discover the best cannabis social clubs in Seville, Spain. Complete guide to Alameda de Hércules, City Center, and authentic Spanish club culture with 50+ associations.',
  keywords:
    'cannabis clubs Seville, cannabis social clubs Spain, Alameda de Hércules, Big Sur Sevilla, Kong SVQ, Crazy Duck, Green City',
  openGraph: {
    title: 'Cannabis Clubs in Seville — Best Clubs & Guide 2026',
    description:
      'Discover the best cannabis social clubs in Seville, Spain. Complete guide to the trendiest neighborhoods and authentic club culture.',
    type: 'article',
    locale: 'es_ES',
  },
};

const sevilleFAQs = [
  {
    question: 'What are cannabis clubs (clubes de cannabis) in Seville?',
    answer:
      'Cannabis social clubs in Seville are private membership associations where adults can purchase and consume cannabis in a legal, safe environment. These clubs operate under Spanish law as non-profit associations—members buy cannabis at regulated prices, and the clubs focus on community, education, and responsible consumption. Seville hosts approximately 50 registered associations across the city.',
  },
  {
    question: 'How do I join a cannabis club in Seville?',
    answer:
      'Membership typically requires: (1) Being 18+ years old, (2) Registering online or visiting the club in person, (3) Paying a registration fee (usually €25–€30), and (4) Sometimes obtaining a sponsor invitation from an existing member—though many clubs like Kong SVQ and Crazy Duck accept first-time visitors. Green City Sevilla handles registration through their website. Some clubs use WhatsApp for quick inquiries.',
  },
  {
    question: 'What is the best neighborhood for cannabis clubs in Seville?',
    answer:
      'Alameda de Hércules is Seville\'s most vibrant district for cannabis culture. It hosts top-tier clubs like Big Sur and Kong SVQ, surrounded by trendy bars, galleries, and live music venues. For city center accessibility, the Centro area offers Green City, Santa Haze, and Crazy Duck. South Sevilla\'s Baddog is known for live music and entertainment. Each neighborhood has its own vibe—choose based on what you value: trendiness, convenience, or entertainment.',
  },
  {
    question: 'What amenities do Seville cannabis clubs offer?',
    answer:
      'Seville clubs emphasize entertainment and community. Crazy Duck features PS5/PS4 gaming stations, billiards, darts, and chill-out zones. Baddog offers foosball and regular live music events. Kong SVQ focuses on social games and drinks. Big Sur combines spacious lounges with artist-inspired décor. Green Island Nervión is unique—offering both medical consultations and recreational access with gaming consoles and a bar. Most clubs have modern facilities, air conditioning, and WiFi.',
  },
  {
    question: 'What are typical operating hours for Seville cannabis clubs?',
    answer:
      'Most Seville clubs operate from 17:00 (5:00 PM) through late evening (around 23:00–00:00). Big Sur specifically operates 17:00–23:00 daily. Afternoon hours may be limited—many clubs open from mid-afternoon onwards. If planning a daytime visit, check club websites or WhatsApp first. Weekend hours are often extended.',
  },
  {
    question: 'Do I need an invitation to visit as a tourist in Seville?',
    answer:
      'Not always. Many clubs welcome tourists directly—Crazy Duck accepts walk-in registrations, and Kong SVQ encourages first-time visitors through their WhatsApp. Big Sur and Green City respond to direct contact. However, having a sponsor (someone who already visits the club) can expedite entry at some venues. If you know locals or other travelers, a recommendation is valuable but not strictly required.',
  },
  {
    question: 'What is the typical cost of membership and cannabis in Seville clubs?',
    answer:
      'Registration fees range from €25–€30 per year (Green City, Big Sur). Cannabis prices are typically €5–€8 per gram depending on quality and strain—similar to other Spanish cities. Some clubs offer deals for members. Initial registration is a one-time investment; subsequent visits mostly involve just purchasing products.',
  },
  {
    question: 'Are Seville cannabis clubs open year-round?',
    answer:
      'Yes, Seville cannabis clubs operate consistently throughout the year, including winter. Unlike seasonal beach destinations, Seville\'s club scene maintains regular hours in all seasons. This makes it an ideal destination for cannabis tourism any time you visit. However, always check individual club schedules during holidays or special events.',
  },
];

export default function SevillePage() {
  return (
    <ArticleLayout
      title="Cannabis Clubs in Seville — Best Clubs & Guide 2026"
      description="Discover Seville's vibrant cannabis club culture. 50+ associations, authentic Spanish atmosphere, and world-class entertainment. Join the Alameda de Hércules movement."
      heroImage="https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_1600,h_900,c_fill/cannabis-clubs-spain/city-seville"
      heroAlt="Cannabis clubs in Seville, Spain"
      breadcrumb={[{ name: 'Seville', href: '/seville' }]}
      ctaVariant="invitation"
    >
      <CityStats meta={cityMeta.seville} />

      <section className="space-y-6 mb-12">
        <h2>Seville's Cannabis Culture — Where Tradition Meets Modernity</h2>
        <p>
          Seville is Andalusia's beating heart, a city where flamenco rhythms blend with contemporary culture, and cannabis clubs are an integral part of the local scene. With approximately 50 registered associations, Seville offers one of Spain's most diverse and welcoming cannabis club landscapes.
        </p>
        <p>
          What sets Seville apart is not just the number of clubs, but their character. These aren't cold, utilitarian spaces—they're social institutions. Clubs prioritize community, entertainment, and education. You'll find gaming stations, billiards tables, live music performances, and spaces designed for connection. The entrance age is predominantly 18+, making Seville accessible to a broad demographic of Spanish youth and international visitors.
        </p>
        <p>
          The Alameda de Hércules neighborhood has become the epicenter of Seville's cannabis culture—a trendy, artistically-alive district where some of the city's best clubs operate alongside galleries, cafés, and music venues. But Seville's club scene doesn't exist in isolation; it's embedded in the city's authentic Spanish culture, its festivals, its architecture, and its people.
        </p>
      </section>

      <section className="space-y-8 mb-12">
        <h2>Best Neighborhoods for Cannabis Clubs in Seville</h2>

        <div className="space-y-6">
          <article className="border-l-4 border-[var(--color-gold)] pl-6">
            <h3 className="mb-3">Alameda de Hércules — The Trendiest Hub</h3>
            <p>
              Alameda de Hércules is Seville's bohemian heart—transformed over the past decade into one of Spain's most vibrant districts. This is where cannabis culture meets contemporary art, live music, and late-night dining.
            </p>
            <p className="mt-3">
              Top clubs here include <strong>Big Sur Sevilla</strong>, known for spectacular décor inspired by local artists and proprietary genetics, and <strong>Kong SVQ</strong>, a community-focused club emphasizing responsibility and social connection. The neighborhood itself offers galleries, vintage shops, design studios, and restaurants within walking distance.
            </p>
            <p className="mt-3">
              <strong>Gallery Spaces &amp; Local Art:</strong> Many Alameda clubs feature art installations and rotating exhibitions. Cannabis consumption is intertwined with creative expression—a reflection of the neighborhood's artistic identity.
            </p>
          </article>

          <article className="border-l-4 border-[var(--color-gold)] pl-6">
            <h3 className="mb-3">City Center (Centro) — Convenience &amp; Access</h3>
            <p>
              Seville's historic center offers maximum accessibility. Major clubs like <strong>Green City Sevilla</strong> (the city's most established with 10+ years of operation), <strong>Santa Haze</strong> (premium, connoisseur-focused), and <strong>Crazy Duck</strong> (entertainment-first) are all centrally located.
            </p>
            <p className="mt-3">
              This is ideal if you're visiting landmarks like the Cathedral or Royal Alcázar. You can explore history in the morning and visit clubs in the evening without traveling far. The center combines traditional architecture with modern amenities.
            </p>
          </article>

          <article className="border-l-4 border-[var(--color-gold)] pl-6">
            <h3 className="mb-3">South Sevilla — Cozy &amp; Entertainment-Focused</h3>
            <p>
              <strong>Baddog Sevilla</strong> operates in South Sevilla with a relaxed, welcoming atmosphere. It's known for live music events, foosball, billiards, and 5-star customer service. This neighborhood is quieter than Alameda but attracts a loyal local community.
            </p>
            <p className="mt-3">
              Best for: Visitors seeking a more intimate vibe, live music experiences, and a social club where locals aren't tourists.
            </p>
          </article>

          <article className="border-l-4 border-[var(--color-gold)] pl-6">
            <h3 className="mb-3">Nervión — The Medical-Recreational Frontier</h3>
            <p>
              <strong>Green Island Nervión</strong> is Seville's only hybrid offering medical consultation alongside recreational access. Located in this modern district, it combines therapeutic focus with a relaxed, contemporary atmosphere—gaming consoles, darts, bar, excellent WiFi.
            </p>
            <p className="mt-3">
              Best for: Members interested in cannabinoid dosing, therapeutic guidance, or blending recreation with wellness.
            </p>
          </article>
        </div>
      </section>

      <section className="space-y-6 mb-12">
        <h2>Seville Cannabis Club Culture — Entertainment &amp; Community</h2>
        <p>
          Unlike clubs in some Spanish cities focused purely on product, Seville clubs emphasize entertainment and social bonding. This cultural difference reflects Seville's values: community, celebration, and authentic experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-6">
          <div className="border border-[var(--color-border)] rounded-xl p-6 bg-[var(--color-bg-card)]">
            <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-bold mb-3 text-[var(--color-text-primary)]">
              Gaming &amp; Sports Entertainment
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Crazy Duck offers PS5/PS4 gaming stations with tournaments. Many clubs feature billiards, darts, and foosball. These aren't afterthoughts—they're central to the club experience, fostering competition, skill, and camaraderie.
            </p>
          </div>

          <div className="border border-[var(--color-border)] rounded-xl p-6 bg-[var(--color-bg-card)]">
            <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-bold mb-3 text-[var(--color-text-primary)]">
              Live Music &amp; Events
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Baddog Sevilla regularly hosts live music—from acoustic guitar to DJs. Kong SVQ organizes social events. These experiences blend cannabis culture with Seville's deep musical heritage.
            </p>
          </div>

          <div className="border border-[var(--color-border)] rounded-xl p-6 bg-[var(--color-bg-card)]">
            <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-bold mb-3 text-[var(--color-text-primary)]">
              Community Values
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Clubs like Kong SVQ explicitly emphasize respect, responsibility, and safe consumption. Many clubs are founded on educational pillars—understanding cannabinoids, responsible dosing, and sustainable practices.
            </p>
          </div>

          <div className="border border-[var(--color-border)] rounded-xl p-6 bg-[var(--color-bg-card)]">
            <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-bold mb-3 text-[var(--color-text-primary)]">
              Modern Facilities
            </h3>
            <p className="text-[var(--color-text-secondary)]">
              Air conditioning, WiFi, modern lounge areas, and thoughtful design. Crazy Duck's chill-out zones and Green Island's bar demonstrate investment in member comfort and experience.
            </p>
          </div>
        </div>

        <p>
          The Seville club scene reflects the city's values: joyful, social, artistic, and inclusive. Cannabis consumption is contextualized within broader cultural and recreational activities, not isolated in utilitarian spaces.
        </p>
      </section>

      <ClubDirectory clubs={sevillaClubs} title="Top Cannabis Clubs in Seville" />

      <section className="space-y-6 mb-12">
        <h2>How to Join a Cannabis Club in Seville</h2>

        <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl p-6 not-prose mb-6">
          <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-bold mb-4 text-[var(--color-text-primary)]">
            The Standard Process
          </h3>
          <ol className="space-y-3 text-[var(--color-text-secondary)]">
            <li className="flex gap-3">
              <span className="font-bold text-[var(--color-gold)] flex-shrink-0">1.</span>
              <span>
                <strong>Find &amp; Contact:</strong> Choose a club from this guide. Most have WhatsApp, websites, or Instagram contact options.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[var(--color-gold)] flex-shrink-0">2.</span>
              <span>
                <strong>Get Invited or Walk In:</strong> Some clubs require a sponsor (a current member who vouches for you). Others, like Crazy Duck, accept direct walk-in applications. Kong SVQ welcomes first-time visitors via WhatsApp.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[var(--color-gold)] flex-shrink-0">3.</span>
              <span>
                <strong>Complete Registration:</strong> Provide ID (passport, national ID), basic information (name, age), and sometimes a sponsor reference. This typically takes 10–15 minutes.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[var(--color-gold)] flex-shrink-0">4.</span>
              <span>
                <strong>Pay Registration Fee:</strong> €25–€30 is typical (Green City, Big Sur). This is usually a one-time annual fee.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-[var(--color-gold)] flex-shrink-0">5.</span>
              <span>
                <strong>Browse &amp; Purchase:</strong> Once registered, you can browse available products, ask staff for recommendations, and make purchases at standard club prices (€5–€8/gram typically).
              </span>
            </li>
          </ol>
        </div>

        <div>
          <h3>Does Everyone Need a Sponsor?</h3>
          <p>
            No. While some exclusive clubs prefer referrals, many Seville clubs accept tourists and newcomers directly:
          </p>
          <ul className="space-y-2 mt-3 text-[var(--color-text-secondary)]">
            <li>
              <strong>Crazy Duck:</strong> Walk-in or online registration accepted
            </li>
            <li>
              <strong>Kong SVQ:</strong> WhatsApp contact for first-time visitors
            </li>
            <li>
              <strong>Big Sur:</strong> Direct contact via WhatsApp
            </li>
            <li>
              <strong>Green City:</strong> Online registration on website
            </li>
            <li>
              <strong>Baddog:</strong> Sponsor sometimes helpful, but not always required
            </li>
          </ul>
          <p className="mt-3">
            Translation: If you're traveling solo, you can still access clubs. Baddog explicitly states "sponsor not always required." Having a friend or local connection helps, but it's not a hard barrier.
          </p>
        </div>
      </section>

      <section className="space-y-6 mb-12">
        <h2>Practical Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
          <div className="border border-[var(--color-border)] rounded-xl p-6 bg-[var(--color-bg-card)]">
            <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-bold mb-3 text-[var(--color-text-primary)]">
              Operating Hours
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Most clubs open <strong>17:00–23:00</strong> (5 PM–11 PM). Big Sur specifically operates these hours daily. Weekend hours may extend to 00:00 or later. Daytime visits are limited—check ahead if visiting before 17:00.
            </p>
          </div>

          <div className="border border-[var(--color-border)] rounded-xl p-6 bg-[var(--color-bg-card)]">
            <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-bold mb-3 text-[var(--color-text-primary)]">
              Getting Around
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Seville's city center is walkable (2–3 km across). Taxis, scooters, and metro are readily available. Clubs in Alameda, Centro, and South Sevilla are accessible without a car. Most tourists walk or use metro lines.
            </p>
          </div>

          <div className="border border-[var(--color-border)] rounded-xl p-6 bg-[var(--color-bg-card)]">
            <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-bold mb-3 text-[var(--color-text-primary)]">
              What to Bring
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Valid ID (passport or national ID). Cash is preferred at some clubs, but many accept card. Comfortable clothes and open-mindedness. No reservation needed for most clubs.
            </p>
          </div>

          <div className="border border-[var(--color-border)] rounded-xl p-6 bg-[var(--color-bg-card)]">
            <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-bold mb-3 text-[var(--color-text-primary)]">
              Seasonal &amp; Year-Round
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Seville clubs operate consistently year-round. Summer is busy with tourists; winter offers a more local atmosphere. Spring and fall are ideal for balanced experience.
            </p>
          </div>

          <div className="border border-[var(--color-border)] rounded-xl p-6 bg-[var(--color-bg-card)]">
            <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-bold mb-3 text-[var(--color-text-primary)]">
              Average Costs
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Registration: €25–€30 (one-time/annual). Cannabis: €5–€8/gram depending on strain and quality. Club drinks: €2–€5. Total first visit: €50–€70 all-in.
            </p>
          </div>

          <div className="border border-[var(--color-border)] rounded-xl p-6 bg-[var(--color-bg-card)]">
            <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-bold mb-3 text-[var(--color-text-primary)]">
              Legal Framework
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Cannabis clubs operate legally in Spain under the 1992 ruling allowing private, non-profit associations. Consumption onsite is permitted; public consumption is not. Clubs are private spaces with membership.
            </p>
          </div>
        </div>
      </section>

      <FAQSection faqs={sevilleFAQs} title="Cannabis Clubs in Seville — FAQ" />

      <section className="mt-12">
        <CTA variant="invitation" />
      </section>

      <section className="mt-12 prose prose-lg max-w-none prose-headings:font-[family-name:var(--font-fraunces)] prose-headings:text-[var(--color-text-primary)]">
        <h2>Final Thoughts — Why Seville?</h2>
        <p>
          Seville's cannabis club scene isn't just about access to cannabis—it's about experiencing authentic Spanish culture where cannabis consumption is integrated into social, artistic, and community contexts.
        </p>
        <p>
          From the artistically alive Alameda de Hércules to the historic city center, from Big Sur's spectacular décor to Crazy Duck's gaming tournaments, from Baddog's live music to Kong SVQ's community values, Seville offers depth, variety, and authenticity.
        </p>
        <p>
          Whether you're a traveler seeking cultural immersion, a connoisseur exploring different club philosophies, or someone interested in how cannabis social clubs reflect local identity, Seville delivers. It's a city where tradition and modernity coexist—and cannabis clubs are part of that beautiful tension.
        </p>
        <p>
          Visit Seville. Explore responsibly. Join a club. Experience the culture.
        </p>
      </section>
    </ArticleLayout>
  );
}

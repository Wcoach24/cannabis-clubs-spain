import Link from 'next/link';
import { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Cannabis Club Prices in Spain — Membership Fees & Costs 2026',
  description: 'Complete breakdown of cannabis club costs in Spain: membership fees by city, product prices, entry fees, and budget tips for visitors.',
};

export default function PricesPage() {
  const faqs = [
    {
      question: 'Are cannabis club prices negotiable?',
      answer: 'Membership fees are generally fixed, but tourist clubs sometimes offer discounts for longer membership periods. Cannabis product prices are rarely negotiable, as they\'re standardized by supply costs. Some clubs offer bulk discounts for members buying larger quantities.',
    },
    {
      question: 'What\'s included in membership fees?',
      answer: 'Membership fees typically cover access to the club space for a set period (month, 3 months, or year). They do NOT include cannabis products—you pay separately for what you consume. Some premium clubs include a welcome package or initial product credit.',
    },
    {
      question: 'Do clubs charge per visit or is it a membership fee?',
      answer: 'Most clubs charge membership fees (monthly/annual). Some tourist clubs charge per-visit entry fees (€5–€10) on top of membership. Always ask in advance—fees vary by club. Tourist-friendly clubs often bundle membership and entry into a single fee.',
    },
    {
      question: 'Are drinks and snacks included or extra?',
      answer: 'Drinks (water, coffee, soft drinks) are usually free or minimal cost (€1–€3). Snacks, food, and alcohol are extra and priced like a cafe (€2–€10). Budget accordingly if you plan on staying multiple hours.',
    },
    {
      question: 'How much cannabis should I budget for a visit?',
      answer: 'A light consumption (1–2g) costs €10–€20. Moderate consumption (3–5g) costs €20–€40. Heavy consumption (5g+) costs €40+. Prices depend on product type (flower vs. hash) and quality. Tourist clubs don\'t judge consumption amounts, so budget what feels comfortable.',
    },
    {
      question: 'Is it cheaper to buy cannabis outside clubs than inside?',
      answer: 'Absolutely not. Street dealing is illegal and carries serious penalties (jail time possible). Club prices are reasonable and consistent. Street dealers overcharge tourists and often sell low-quality or fake product. Always buy from clubs, never from street sources.',
    },
  ];

  return (
    <ArticleLayout
      title="Cannabis Club Prices in Spain — Membership Fees & Costs 2026"
      description="Detailed breakdown of membership costs, cannabis product prices by city, and budget planning for cannabis club visits in Spain."
      heroImage="https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_1600,h_900,c_fill/cannabis-clubs-spain/hero-prices"
      heroAlt="Cannabis products and pricing in Spain"
      breadcrumb={[{ name: 'Prices', href: '/prices' }]}
    >
      <h2>Understanding Cannabis Club Pricing</h2>
      <p>
        Cannabis club pricing in Spain has two separate components: membership fees and product costs. Membership grants you access to the club space for a defined period (typically 1 month, 3 months, or 1 year). Cannabis products—flower, hash, pre-rolls, and edibles—are purchased separately at current market prices.
      </p>
      <p>
        Membership fees are lowest in tourist-heavy coastal areas (€10–€30) and highest in major cities like Barcelona and Seville (€20–€50). Product prices are remarkably consistent across Spain: flower typically costs €5–€12 per gram, hash €8–€15 per gram, and edibles €3–€10 per unit. Premium strains and exclusive club genetics cost more.
      </p>
      <p>
        For tourists, budget roughly €30–€60 for membership plus €20–€50 for cannabis consumption during a visit. Extended stays can negotiate better rates; monthly memberships cost less per day than daily tourist passes.
      </p>

      <h2>Membership Fees by City: Detailed Breakdown</h2>

      <h3>Barcelona — €20–€50 annual or €15–€30 tourist</h3>
      <p>
        As Spain's largest cannabis club hub, Barcelona offers the widest range of membership tiers. Budget clubs charge €20–€30 annually; mid-range clubs €30–€40; premium clubs €50+. Tourist memberships for 30 days typically cost €20–€30.
      </p>
      <p>
        Barcelona's club density allows price comparison—shop around. The high volume of clubs creates competitive pricing. Most tourist-friendly clubs fast-track applications and offer discounted tourist rates. Some clubs offer membership discounts for cash payments or longer commitment periods.
      </p>

      <h3>Valencia — €20–€50 annual or €20–€40 tourist</h3>
      <p>
        Valencia's growing cannabis scene offers mid-range pricing. Established clubs charge €20–€40 annually; newer clubs sometimes offer introductory rates. Tourist memberships run €20–€35 for monthly access.
      </p>
      <p>
        Some Valencia clubs charge per-visit entry fees (€5–€10) in addition to annual membership. Always clarify whether fees are bundled or separate. Tourist clubs typically bundle all fees into a single tourist membership rate.
      </p>

      <h3>Málaga & Costa del Sol — €15–€30 annual or €15–€25 tourist</h3>
      <p>
        Coastal Málaga and Costa del Sol clubs have the lowest membership fees in Spain, driven by beach tourism and expat community demand. Tourist memberships range €15–€25 for 30–90 days. Annual memberships €15–€30.
      </p>
      <p>
        Some coastal clubs (particularly in Torremolinos and Fuengirola) offer entry-fee models where you pay €10–€20 per visit rather than upfront membership. This is ideal for tourists making single visits or short trips. Long-term visitors benefit from membership over entry fees.
      </p>

      <h3>Seville — €25–€30 registration or €25–€30 tourist</h3>
      <p>
        Seville's clubs typically charge registration fees (one-time or annual) of €25–€30. Tourist memberships mirror resident rates at €25–€30 for 30 days. Seville's more traditional culture means club pricing is straightforward with less variation than Barcelona.
      </p>
      <p>
        Some of Seville's premium clubs (especially entertainment-focused venues with billiards, gaming) charge on the higher end. Casual clubs charge lower fees. Budget €25–€30 as the local standard.
      </p>

      <h3>Ibiza — €10–€20 annual or €10–€20 tourist</h3>
      <p>
        Ibiza has Spain's cheapest club memberships, partly due to heavy tourism and competitive market dynamics. Tourist memberships cost just €10–€20 for monthly access. Annual memberships for residents €10–€20. This makes Ibiza the most budget-friendly destination for cannabis clubs.
      </p>
      <p>
        Some Ibiza clubs offer instant online registration for tourists with approval within hours. Premium clubs (VIP tier) cost more (€30–€50), but standard clubs are exceptionally affordable.
      </p>

      <h2>Cannabis Product Prices: Flower, Hash, Pre-Rolls, Edibles</h2>

      <h3>Cannabis Flower — €5–€12 per gram</h3>
      <p>
        Standard quality flower runs €6–€8 per gram across all Spanish cities. Premium strains and club-exclusive genetics cost €10–€12 per gram. Lower-quality budget flower (shake, trim) might be €5–€6.
      </p>
      <p>
        Most clubs offer quantity discounts: 3.5g (eighth) typically costs €18–€28, 7g (quarter) €35–€50. Bulk purchases (21g+) reduce per-gram cost by 20–30%. Prices are fairly consistent across Barcelona, Valencia, and coastal cities.
      </p>

      <h3>Cannabis Hash — €8–€15 per gram</h3>
      <p>
        Hash costs slightly more than flower due to production complexity. Standard hash €8–€10 per gram; premium hash €12–€15. Club-made hash (often superior quality) costs on the higher end.
      </p>
      <p>
        Hash quantities are smaller (1–2g portions common). A 1g portion typically costs €8–€12. Hash is more potent than flower, so less quantity is needed. Many tourists prefer hash for efficiency and discretion.
      </p>

      <h3>Pre-Rolled Joints — €3–€7 per joint</h3>
      <p>
        Pre-rolled joints (typically 0.5–1g each) cost €3–€5 standard, €5–€7 for premium blends or special rolling papers. This is the most convenient format for tourists and single-visit members. Most clubs offer both flower pre-rolls and hash-infused pre-rolls.
      </p>
      <p>
        Bulk pre-roll purchases (5–10 joints) often get 10–20% discounts. This is ideal for multi-day club visits.
      </p>

      <h3>Edibles — €3–€10 per unit</h3>
      <p>
        Cannabis edibles (brownies, gummies, chocolates, cookies) range €3–€8 for standard potency, €8–€10 for premium/high-THC versions. Most clubs don't stock extensive edible selections; availability depends on member suppliers.
      </p>
      <p>
        Edibles are less common in clubs than flower/hash. Some tourist-friendly clubs stock them specifically for visitors. Dosing information is usually provided.
      </p>

      <h2>Additional Costs: Entry Fees, Drinks, Food, Events</h2>
      <p>
        <strong>Entry fees:</strong> Some clubs charge €5–€10 per visit on top of membership. Most tourist clubs bundle this into membership. Clarify during application.
      </p>
      <p>
        <strong>Complimentary beverages:</strong> Water and basic coffee/tea are usually free. Most clubs provide complimentary refreshment to encourage longer visits and member retention.
      </p>
      <p>
        <strong>Paid beverages:</strong> Premium coffee, soft drinks, juice, and alcohol cost €1–€5. Alcoholic drinks (beer, wine, spirits) cost €3–€8, similar to bar pricing.
      </p>
      <p>
        <strong>Food and snacks:</strong> Many clubs offer snacks (chips, nuts, crackers) free or for €1–€2. Full meal options at clubs with kitchens cost €5–€15. Most clubs have snacks available at cafe prices.
      </p>
      <p>
        <strong>Special events:</strong> Some clubs host DJs, live music, tournaments, or private events with additional cover charges (€5–€20). These are optional and clearly advertised.
      </p>

      <h2>Spain vs. Amsterdam: Price Comparison</h2>
      <p>
        Spanish cannabis clubs are significantly cheaper than Dutch coffee shops. A typical Barcelona club visit costs €20–€40 (membership + product). An equivalent Amsterdam coffee shop visit costs €35–€70 due to higher product pricing and no membership structure.
      </p>
      <p>
        <strong>Flower pricing:</strong> Spain €6–€8/g vs. Amsterdam €10–€15/g. Spanish clubs are 30–50% cheaper.
      </p>
      <p>
        <strong>Hash pricing:</strong> Spain €8–€10/g vs. Amsterdam €12–€18/g. Again, Spain offers better value.
      </p>
      <p>
        <strong>Membership structure:</strong> Spanish clubs charge membership; Dutch coffee shops don't. However, Spanish memberships are cheap (€10–€50) compared to Amsterdam coffee shop transaction costs. Over multiple visits, Spanish clubs offer better value.
      </p>
      <p>
        <strong>Overall assessment:</strong> A week in Barcelona visiting cannabis clubs costs €100–€200 total (membership + consumption). An equivalent Amsterdam week costs €250–€400. Spain is the budget cannabis tourist destination in Western Europe.
      </p>
      <p>
        This price advantage has made Spanish cannabis clubs increasingly popular with European cannabis tourists, particularly from Northern Europe where prices are significantly higher.
      </p>

      <h2>Budget Tips for Visiting Multiple Clubs</h2>
      <p>
        <strong>Buy annual memberships for extended stays:</strong> If staying 2+ months in one city, annual membership (€20–€50) is cheaper per visit than multiple tourist passes (€10–€20/month). Pays for itself after 2–3 visits.
      </p>
      <p>
        <strong>Join 2–3 clubs per city:</strong> Different clubs offer different products, atmospheres, and prices. Comparing 2–3 clubs lets you identify the best value. Membership fees are so low that exploring variety is financially viable.
      </p>
      <p>
        <strong>Buy in bulk when possible:</strong> If you plan a week-long club tour, buying 7g at once is cheaper per gram than daily single-gram purchases. Many clubs offer 15–25% discounts on 7g+ purchases.
      </p>
      <p>
        <strong>Visit during happy hours or promotional periods:</strong> Some clubs offer discounted products during specific hours or days (often afternoons or Sundays). Ask about these when applying.
      </p>
      <p>
        <strong>Travel to cheaper cities:</strong> Ibiza and coastal Málaga have significantly lower costs than Barcelona. A week in Ibiza (€50–€80 total) is cheaper than Barcelona (€100–€150). Consider coastal towns for budget-conscious tourism.
      </p>
      <p>
        <strong>Skip premium tiers:</strong> Premium memberships at exclusive clubs (€80–€150) offer luxury but aren't necessary. Standard clubs (€20–€40) offer excellent value with similar products. Premium mainly buys atmosphere, not substantially better cannabis.
      </p>

      <h2>Related Resources</h2>
      <p>
        Learn the full joining process: <Link href="/how-to-join" className="font-semibold text-green-700 hover:text-green-800">Step-by-step guide to joining cannabis clubs</Link>.
      </p>
      <p>
        Understand your legal protections: <Link href="/cannabis-laws-spain" className="font-semibold text-green-700 hover:text-green-800">Cannabis laws in Spain</Link>.
      </p>
      <p>
        Explore clubs in specific cities: <Link href="/barcelona" className="font-semibold text-green-700 hover:text-green-800">Barcelona clubs</Link>, <Link href="/valencia" className="font-semibold text-green-700 hover:text-green-800">Valencia clubs</Link>, and <Link href="/ibiza" className="font-semibold text-green-700 hover:text-green-800">Ibiza clubs</Link>.
      </p>

      <FAQSection faqs={faqs} title="Frequently Asked Questions About Pricing" />
    </ArticleLayout>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import ClubDirectory from "@/components/ClubDirectory";
import CityStats from "@/components/CityStats";
import FAQSection from "@/components/FAQSection";
import CTA from "@/components/CTA";
import { ibizaClubs, cityMeta } from "@/data/clubs";

export const metadata: Metadata = {
  title: "Cannabis Clubs in Ibiza — Complete Guide 2026",
  description:
    "Discover cannabis clubs in Ibiza, Spain's premier party island. Tourist-friendly membership, same-day registration, and 7+ verified clubs. Legal, safe, and welcoming.",
  openGraph: {
    title: "Cannabis Clubs in Ibiza — Complete Guide 2026",
    description:
      "Discover cannabis clubs in Ibiza, Spain's premier party island. Tourist-friendly membership, same-day registration, and 7+ verified clubs.",
    images: [
      {
        url: "https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_1600,h_900,c_fill/cannabis-clubs-spain/hero-ibiza",
        width: 1600,
        height: 900,
        alt: "Cannabis clubs in Ibiza, Spain",
      },
    ],
  },
};

const ibizaFAQs = [
  {
    question: "Can tourists join cannabis clubs in Ibiza?",
    answer:
      "Yes. Ibiza's cannabis clubs are particularly welcoming to tourists. Most clubs accept visitors with a valid passport and offer same-day or next-day membership registration. You don't need an existing sponsor or referral—online pre-registration is recommended but walk-in registration is often available at clubs like IBZ 420 and Zen Ibiza.",
  },
  {
    question: "How much does membership cost?",
    answer:
      "Membership fees in Ibiza range from €10–€20, among the most affordable in Spain. This is a one-time or annual fee depending on the club. Some clubs include welcome discounts or first-time visitor specials. Compare costs directly with clubs before visiting.",
  },
  {
    question: "What are the age requirements?",
    answer:
      "Most clubs require you to be at least 18 years old. High Class Ibiza and a few premium clubs set the requirement at 21+. Always bring a valid photo ID (passport is preferred for tourists). Clubs strictly enforce age requirements.",
  },
  {
    question: "Is cannabis consumption legal in public spaces in Ibiza?",
    answer:
      "No. Public consumption is illegal and subject to significant fines (€601–€30,000 in the Balearic Islands). Cannabis consumption is strictly private and only permitted inside registered club premises. Keep all cannabis inside clubs and never consume on beaches, streets, or public areas.",
  },
  {
    question: "Which clubs are best for first-time visitors?",
    answer:
      "G13 Weed Club (operating since 2013 with multiple locations), IBZ 420 (accepts walk-ins and online registration), and Zen Ibiza (wellness-focused and newcomer-friendly) are excellent for visitors. High Class offers a premium experience if you prefer upscale settings.",
  },
  {
    question: "Can I pre-register online before arriving?",
    answer:
      "Yes. Clubs like G13 Ibiza, High Class Ibiza, Zen Ibiza, Marimberos, and IBZ 420 all offer online registration. Pre-registering saves time, though same-day registration is also possible in most cases. Website registration typically takes 10–15 minutes.",
  },
  {
    question: "What's the difference between cannabis clubs and regular bars?",
    answer:
      "Cannabis clubs are private membership associations designed specifically for cannabis consumption in a controlled, legal environment. They operate differently from nightclubs or bars—the focus is on cannabis quality, community, and responsible use. Some clubs combine social elements (games, lounge areas), but the primary purpose is providing a safe space for cannabis.",
  },
  {
    question: "Are Ibiza's cannabis clubs connected to the island's nightclub scene?",
    answer:
      "Not directly. Cannabis clubs are separate from Ibiza's famous nightclubs (Pacha, Hi Ibiza, etc.). However, many visitors combine a visit to a cannabis club with the island's other attractions—clubs are open during afternoon and evening hours, allowing flexibility in your itinerary.",
  },
];

export default function IbizaPage() {
  return (
    <ArticleLayout
      title="Cannabis Clubs in Ibiza — Complete Guide 2026"
      description="Discover 7+ cannabis clubs on Spain's premier party island. Tourist-friendly membership, flexible registration, and verified venues."
      heroImage="https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_1600,h_900,c_fill/cannabis-clubs-spain/hero-ibiza"
      heroAlt="Cannabis clubs in Ibiza, Spain"
      breadcrumb={[{ name: "Ibiza", href: "/ibiza" }]}
      ctaVariant="invitation"
    >
      <CityStats meta={cityMeta.ibiza} />

      {/* Introduction */}
      <section className="mb-12">
        <h2>Ibiza's Cannabis Club Scene — Where Party Culture Meets Cannabis</h2>
        <p>
          Ibiza is legendary for nightlife, electronic music, and a permissive attitude toward leisure substances. Within this globally iconic destination, 7+ cannabis clubs operate legally and openly—a natural extension of the island's inclusive, tourism-focused culture.
        </p>
        <p>
          Unlike mainland Spanish cities where cannabis clubs blend into residential neighborhoods, Ibiza's clubs are integrated into the island's hospitality ecosystem. They're designed with tourists in mind: straightforward online registration, same-day membership, and welcoming staff accustomed to international visitors. Membership costs just €10–€20, the lowest in Spain.
        </p>
        <p>
          Whether you're visiting for electronic music festivals, beach culture, or a complete Mediterranean escape, cannabis clubs in Ibiza offer a legal, safe alternative to risky street sourcing. They're also a counterpoint to Ibiza's party excess—wellness-focused clubs like Zen Ibiza cater to visitors seeking relaxation alongside cannabis.
        </p>
      </section>

      {/* Balearic Regulations */}
      <section className="mb-12">
        <h2>Balearic Islands Cannabis Regulations — Stricter Than Mainland Spain</h2>
        <p>
          The Balearic Islands (Ibiza, Mallorca, Menorca, Formentera) operate under regional laws that are notably stricter than mainland Spain regarding cannabis possession and public consumption.
        </p>

        <h3>Key Legal Points for Ibiza Visitors</h3>
        <ul>
          <li>
            <strong>Public Consumption Fines:</strong> €601–€30,000 for consuming cannabis in public spaces. This is a serious penalty. The islands do not tolerate visible use on beaches, streets, or public establishments.
          </li>
          <li>
            <strong>Private Spaces Protected:</strong> Cannabis consumption is legal in registered private spaces. Cannabis clubs qualify as legal private associations, making on-premises consumption protected by law.
          </li>
          <li>
            <strong>Possession Limits:</strong> Personal possession for private consumption is decriminalized (like the rest of Spain), but carrying cannabis outside clubs into public areas violates Balearic law.
          </li>
          <li>
            <strong>Club Operations:</strong> Cannabis clubs in the Balearics operate under strict licensing. Clubs must maintain records of members, ensure age verification, and prohibit resale. All major clubs in Ibiza (G13, High Class, Zen, Marimberos, etc.) are registered and operate transparently with authorities.
          </li>
          <li>
            <strong>Police Enforcement:</strong> Unlike on mainland Spain where enforcement is spotty, police in Ibiza regularly patrol beaches, streets, and public areas. Visible cannabis use results in immediate fines and potentially confiscation.
          </li>
        </ul>

        <p>
          <strong>Bottom line:</strong> Cannabis consumption must remain within club walls. The island's strict public consumption laws reflect Balearic authorities' intent to protect Ibiza's tourism reputation while allowing regulated club access. Respect these boundaries.
        </p>
      </section>

      {/* Types of Clubs */}
      <section className="mb-12">
        <h2>Types of Cannabis Clubs in Ibiza</h2>
        <p>
          Ibiza's cannabis clubs serve different visitor profiles. Understanding the distinctions helps you choose the right venue.
        </p>

        <h3>Veteran & Established (G13 Weed Club)</h3>
        <p>
          Operating since 2013, G13 is Ibiza's oldest cannabis club with multiple locations across the island. The club prioritizes reliability and professionalism—13 years of operation demonstrate consistency. G13 caters to both tourists and long-term residents, offering competitive pricing (€10–€20 membership) and straightforward online registration. Expected vibe: reliable, busy, diverse crowd.
        </p>

        <h3>Premium & Exclusive (High Class Ibiza)</h3>
        <p>
          High Class positions itself as Ibiza's upscale cannabis experience. Located in central Ibiza with sophisticated aesthetics, the club uses a pre-approval system to curate membership. The focus is quality over quantity—smaller member base, curated product selection, and VIP services. Expected vibe: professional, upscale, quieter than mainstream clubs.
        </p>

        <h3>Wellness-Focused (Zen Ibiza)</h3>
        <p>
          Based in San Antonio, Zen Ibiza combines cannabis with mindfulness and relaxation. The club's positioning reflects a shift in cannabis culture away from pure recreation toward conscious consumption and wellness. Staff are educated on strain effects, dosing, and terpene profiles. Expected vibe: calm, educational, health-conscious community.
        </p>

        <h3>Breeder-Founded & Genetics-Focused (Marimberos)</h3>
        <p>
          Marimberos is uniquely positioned as a cannabis club founded by breeders with genetics cultivation dating to 1993. The club features proprietary strains you won't find elsewhere—a significant draw for connoisseurs. Marimberos emphasizes knowledge, discretion, and quality. Expected vibe: knowledgeable staff, emphasis on strain education, smaller, community-focused crowd.
        </p>

        <h3>Social & Accessible (IBZ 420, Ibiza Weed Club)</h3>
        <p>
          IBZ 420 and Ibiza Weed Club (in Sant Josep) represent the accessible, tourist-friendly tier. Both accept walk-in registrations and online membership. They emphasize straightforward service—show up with your passport, register, and enjoy cannabis immediately. Expected vibe: busy, welcoming, mixed tourists and locals, casual atmosphere.
        </p>
      </section>

      {/* Club Directory */}
      <section className="mb-12">
        <ClubDirectory clubs={ibizaClubs} title="Cannabis Clubs in Ibiza" />
      </section>

      {/* How to Join */}
      <section className="mb-12">
        <h2>How to Join as a Tourist — Same-Day Registration</h2>
        <p>
          Ibiza's cannabis clubs are designed for tourist access. Unlike Barcelona, where some clubs require referrals or long application processes, most Ibiza venues expedite tourist registration.
        </p>

        <h3>Step-by-Step Registration Process</h3>
        <ol>
          <li>
            <strong>Choose a club.</strong> Visit club websites or review the directory above. Popular tourist choices: G13 Ibiza (most established), IBZ 420 (walk-in friendly), Zen Ibiza (wellness vibe), High Class (premium experience).
          </li>
          <li>
            <strong>Pre-register online (optional but recommended).</strong> Most clubs have registration forms on their websites. Takes 5–10 minutes. You'll provide your name, email, date of birth, and nationality. Clubs verify age and check for any compliance issues. Pre-registration accelerates your in-person visit.
          </li>
          <li>
            <strong>Visit the club in person.</strong> Bring a valid passport (essential) and your membership fee (€10–€20). If you pre-registered, they'll have your profile ready; if not, you can register on-site. Process takes 10–15 minutes.
          </li>
          <li>
            <strong>Verify age and identity.</strong> Clubs will scan or photocopy your passport. This is non-negotiable and complies with Balearic club licensing requirements.
          </li>
          <li>
            <strong>Pay membership.</strong> Cash or card accepted. Membership is immediate or valid for one year depending on the club's policy. Many clubs offer first-time discounts.
          </li>
          <li>
            <strong>Start browsing.</strong> You're now a member. Clubs display available strains, concentrates, and accessories. Staff provide recommendations based on your preferences (strength, flavor, effects).
          </li>
        </ol>

        <h3>What You Need to Know</h3>
        <ul>
          <li>
            <strong>Valid ID Essential:</strong> Passport is required. Driver's license may not be accepted for international visitors.
          </li>
          <li>
            <strong>Timeline:</strong> Pre-registered members can access clubs within minutes. Walk-in registration takes 15–20 minutes.
          </li>
          <li>
            <strong>Membership Duration:</strong> Some clubs issue one-time lifetime memberships (€10–€20); others charge annually. Ask when registering.
          </li>
          <li>
            <strong>Payment Methods:</strong> Cash is widely accepted. Many clubs also accept cards, but bring euros.
          </li>
          <li>
            <strong>Sponsorship Not Required:</strong> Unlike some Barcelona clubs, Ibiza clubs don't require an existing member to sponsor you. You're registering as an independent visitor.
          </li>
        </ul>
      </section>

      {/* Combining Clubbing and Cannabis */}
      <section className="mb-12">
        <h2>Combining Ibiza's Party Scene with Cannabis Culture</h2>
        <p>
          Many visitors wonder how to integrate cannabis clubs into Ibiza's famous nightlife. The answer depends on your style, but here are practical considerations.
        </p>

        <h3>Cannabis + Nightclubs (The Reality Check)</h3>
        <p>
          Ibiza's superclubs—Pacha, Hi Ibiza, Privilege, Amnesia, Space—are massive, high-energy venues with thousands of attendees. Many visitors use cannabis before clubbing. However, be aware: clubs have security, occasional drug testing at entry, and zero tolerance for visible drug use inside venues. Cannabis consumption should happen <strong>only inside registered cannabis clubs, not in nightclubs or public spaces.</strong>
        </p>
        <p>
          A practical approach: visit a cannabis club in the afternoon, return to your accommodation or beach, then head to a nightclub in the evening. This keeps consumption discrete and respects both Ibiza's party culture and strict public consumption laws.
        </p>

        <h3>Cannabis + Beach Days</h3>
        <p>
          Ibiza's beaches are world-famous. However, cannabis consumption on beaches is illegal and regularly prosecuted. Police patrol beaches, especially Platja d'en Bossa and Cala Conta. Keep cannabis inside clubs. Save beach time for swimming, sunbathing, and beach club dining (which is legal).
        </p>

        <h3>Best Areas for Cannabis Club Visits</h3>
        <ul>
          <li>
            <strong>Ibiza Town (Dalt Vila):</strong> High Class, G13 (main location), and IBZ 420 are in the historic center. Walk-friendly, close to restaurants and shops. Good for daytime visits before evening plans.
          </li>
          <li>
            <strong>San Antonio:</strong> Zen Ibiza is based here. San Antonio is known for relaxed beach bars and a younger, laid-back vibe—ideal for afternoon club visits.
          </li>
          <li>
            <strong>Sant Josep:</strong> Ibiza Weed Club is located here. Further south, quieter, better for visitors seeking calm over party atmosphere.
          </li>
          <li>
            <strong>Avoid Carrying Between Venues:</strong> If you purchase cannabis from a club, consume it there. Do not carry it to beaches, restaurants, or nightclubs. Possession in public spaces violates Balearic law.
          </li>
        </ul>

        <h3>Practical Timeline Example</h3>
        <p>
          <strong>Day Itinerary:</strong> Sleep in → Late breakfast → Visit cannabis club (11:00–13:00) → Beach or sightseeing → Siesta → Dinner in Ibiza Town → Nightclub (23:00–05:00). This structure keeps cannabis consumption legal (inside the club), separates relaxation from party time, and respects local laws.
        </p>
      </section>

      {/* FAQ */}
      <FAQSection faqs={ibizaFAQs} title="Frequently Asked Questions — Ibiza Cannabis Clubs" />

      {/* CTA */}
      <section className="mt-12">
        <CTA variant="invitation" />
      </section>

      {/* Additional Resources */}
      <section className="mt-12 border-t border-[var(--color-border)] pt-8">
        <h2>Additional Resources</h2>
        <ul>
          <li>
            <Link href="/" className="text-[var(--color-forest)] font-semibold hover:text-[var(--color-gold)]">
              Cannabis Clubs in Spain — Full Directory
            </Link>
            {" "}— Explore clubs in Barcelona, Valencia, Málaga, and Seville.
          </li>
          <li>
            <Link href="/barcelona" className="text-[var(--color-forest)] font-semibold hover:text-[var(--color-gold)]">
              Cannabis Clubs in Barcelona
            </Link>
            {" "}— Compare Spain's largest cannabis club scene.
          </li>
          <li>
            <Link href="/how-to-join" className="text-[var(--color-forest)] font-semibold hover:text-[var(--color-gold)]">
              How to Join a Cannabis Club in Spain
            </Link>
            {" "}— General guide covering registration, legal frameworks, and membership costs across Spanish cities.
          </li>
        </ul>
        <p className="mt-6 text-sm text-[var(--color-text-muted)]">
          <strong>Disclaimer:</strong> This guide reflects cannabis laws and club operations as of March 2026. Laws can change, and club information may be updated. Always verify directly with clubs before visiting. Cannabis remains illegal in many jurisdictions—check local laws in your home country before traveling.
        </p>
      </section>
    </ArticleLayout>
  );
}

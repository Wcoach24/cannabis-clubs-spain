import { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import CityStats from "@/components/CityStats";
import ClubDirectory from "@/components/ClubDirectory";
import FAQSection from "@/components/FAQSection";
import CTA from "@/components/CTA";
import { barcelonaClubs, cityMeta } from "@/data/clubs";

export const metadata: Metadata = {
  title: "Cannabis Clubs in Barcelona — Best Clubs & Guide 2026",
  description:
    "Comprehensive guide to Barcelona's cannabis clubs. Find top-rated clubs in El Raval, Eixample, and Gràcia. Membership info, prices, how to join as a tourist, and FAQs.",
  keywords: [
    "cannabis clubs Barcelona",
    "weed clubs Barcelona",
    "cannabis social clubs Catalonia",
    "how to join Barcelona clubs",
    "best cannabis clubs Spain",
  ],
  openGraph: {
    title: "Cannabis Clubs in Barcelona — Best Clubs & Guide 2026",
    description:
      "Find the best cannabis clubs in Barcelona. Complete guide with club directory, membership details, neighborhood guides, and tourist information.",
    type: "article",
  },
};

const barcelonaFAQs = [
  {
    question: "What's the legal status of cannabis clubs in Barcelona?",
    answer:
      "Cannabis social clubs in Barcelona operate in a legal gray zone. Spain's constitution protects private, non-commercial cannabis consumption. Clubs are private associations where members can consume cannabis they've collectively purchased. This is technically legal when done privately and without commercial sale. However, the laws are complex and vary by municipality. Always verify current local regulations, as enforcement has fluctuated. Most clubs actively work within legal frameworks and require membership verification.",
  },
  {
    question: "How do I join a cannabis club in Barcelona as a tourist?",
    answer:
      "Most Barcelona clubs welcome tourists, though the process varies. Some clubs allow online applications before arrival and offer invitations within 24 hours. Others require a referral from an existing member. The fastest approach: identify 2-3 clubs online, submit applications immediately upon arrival, and in many cases you'll be approved the same day. Tourist-friendly clubs like Barcelona Weed Club and BCN Kush have streamlined online processes. Your passport will be required for verification. Many clubs can complete membership in 30 minutes to a few hours.",
  },
  {
    question: "What are typical membership fees and product prices?",
    answer:
      "Barcelona clubs typically charge €20-€50 for annual membership, though some have no fee if you make purchases. Initial visits may have a small registration fee (€5-€15). Cannabis prices range from €5-€12 per gram depending on quality and strain. Premium flowers cost more, while lower-grade products are cheaper. Most clubs offer tiered quality: standard (€6-€8/g), quality (€8-€10/g), and premium (€10-€15/g). Pre-made joints and concentrates have different pricing. Many clubs offer member discounts and loyalty programs.",
  },
  {
    question: "Which neighborhoods have the best cannabis clubs?",
    answer:
      "El Raval (Ciutat Vella) is Barcelona's historic cannabis hub with Dragon Weed and premium options. Eixample district offers convenient metro access with BCN Kush (5.0 rating). Sant Antoni and El Born are trendy, walkable neighborhoods with social atmosphere. Gràcia is bohemian with a local community vibe. Sants has Barcelona Weed Club, one of the city's most established and highest-rated clubs. For tourists, Eixample and Sants offer best metro access and reliable clubs.",
  },
  {
    question: "Do I need a local address or ID to join?",
    answer:
      "No local address is required. Your passport or EU ID card is sufficient. Clubs verify your age (must be 18+) and identity, but they accept international visitors. Most clubs complete the entire registration process in one visit using just your passport. Tourist-friendly clubs are experienced with international visitors and understand language barriers. However, having a physical or email address in Spain (even a hostel address) can sometimes speed up the process.",
  },
  {
    question: "What's the difference between Barcelona clubs and Amsterdam?",
    answer:
      "Amsterdam's coffeeshops openly sell cannabis with no membership required—it's technically tolerated retail. Barcelona's clubs are private membership associations where members collectively purchase cannabis. This legal distinction means Barcelona clubs are more exclusive and member-based, while Amsterdam is more transactional. Barcelona clubs often have stronger community atmosphere and social spaces. Prices are comparable (€5-€12/g), but Barcelona offers more variety in club types (from bohemian to premium). Amsterdam is more straightforward for tourists; Barcelona requires basic membership steps.",
  },
  {
    question: "Can I consume on-site at Barcelona clubs?",
    answer:
      "Yes. Almost all Barcelona clubs have designated consumption areas where members can use cannabis. Some have lounge seating, ventilation, and social spaces. Most clubs provide rolling papers, tips, and sometimes bongs/vaporizers for use. On-site consumption is standard and expected. Many clubs host social events, games, and gatherings. Unlike some Spanish regions, Barcelona clubs openly accommodate on-site consumption as part of the member experience.",
  },
  {
    question: "What should I expect on my first visit?",
    answer:
      "Bring your passport for ID verification. The process is straightforward: register, verify age/identity, agree to club rules, and you're a member (usually within 30 minutes). Club staff are professional and accustomed to international visitors. You'll receive information on house rules, products available, and pricing. Most clubs offer a tour or explanation of their setup. Products are displayed with descriptions of strain, THC/CBD content, and origin. Prices are displayed clearly. Staff can recommend based on your preferences and experience level.",
  },
];

export default function BarcelonaPage() {
  return (
    <ArticleLayout
      title="Cannabis Clubs in Barcelona — Best Clubs & Guide 2026"
      description="Complete guide to Barcelona's cannabis scene. Club directory, neighborhood breakdown, membership info, and how to join as a tourist."
      heroImage="https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_1600,h_900,c_fill/cannabis-clubs-spain/hero-barcelona"
      heroAlt="Cannabis clubs in Barcelona, Spain"
      breadcrumb={[{ name: "Barcelona", href: "/barcelona" }]}
      ctaVariant="invitation"
      publishDate="2026-03-09"
    >
      <CityStats meta={cityMeta.barcelona} />

      {/* Introduction */}
      <p>
        Barcelona has evolved into Spain's cannabis capital, with 50-100+ active clubs scattered across its vibrant neighborhoods. The Catalan capital's cannabis scene is distinct from the rest of Spain—more established, more diverse, and more tourist-accessible than almost any other Spanish city. Whether you're a cannabis connoisseur seeking premium genetics, a curious traveler wanting to experience local culture, or someone looking for a relaxed social atmosphere, Barcelona offers options ranging from bohemian gathering spaces to upscale clubs.
      </p>

      <p>
        The city's liberal culture and strong tourism infrastructure have created an ecosystem where cannabis clubs thrive openly. Most major clubs are professional operations with loyal memberships, quality product curation, and welcoming attitudes toward international visitors. Barcelona's clubs aren't seedy back-room affairs—they're legitimate social spaces where cannabis is consumed responsibly, alongside drinks, food, games, and conversation. The clubs tend to be better-designed and more atmospheric than their counterparts in smaller Spanish cities, reflecting Barcelona's general sophistication and design sensibility.
      </p>

      <p>
        What makes Barcelona special is the combination of accessibility, variety, and integration into the city's broader culture. Cannabis consumption is woven into the social fabric of many neighborhoods, particularly El Raval, Eixample, and Sant Antoni. Tourists and locals coexist peacefully in these spaces. The clubs have developed efficient systems for onboarding international members—often approving memberships within hours of online applications. For a visitor, joining a Barcelona club is simpler than it seems: apply online a day or two before arrival, get approved, and you can be enjoying cannabis at a club within 24 hours of landing.
      </p>

      <h2>How Cannabis Clubs Work in Barcelona</h2>

      <p>
        To understand Barcelona's cannabis clubs, you need to understand Catalonia's unique legal position. Spain's constitution protects the right to private, non-commercial cannabis consumption. While national law technically prohibits cannabis entirely, Catalonia's regional government has a more pragmatic approach: it tolerates private consumption by association members and has effectively decriminalized personal use within certain contexts.
      </p>

      <p>
        Barcelona clubs operate as <strong>private membership associations</strong>. This is the crucial legal distinction. They don't sell cannabis directly to individuals; instead, members collectively purchase products through the association. When you join a club, you become a member of that association and have access to the collective's purchased inventory. This membership model creates legal cover and transforms the dynamic from "retail transaction" to "private association activity."
      </p>

      <p>
        The process works like this: You apply for membership (online or in-person), provide ID and age verification, agree to the club's rules, pay a membership fee (usually €20-€50 annually, sometimes waived), and receive member status. Once approved, you can visit during operating hours, select from available products, make purchases at displayed prices, and consume in the designated member areas. Most clubs handle online applications within 24 hours, making the system genuinely tourist-friendly.
      </p>

      <p>
        Each club operates independently with its own governance, pricing, atmosphere, and rules. Some clubs emphasize premium quality and exclusivity; others prioritize affordability and social atmosphere. Some are open 11am-11pm; others operate extended hours including late-night weekend service. The diversity means you can find exactly the type of experience you're seeking. Most clubs in Barcelona are professional, safe, and transparent about their operations.
      </p>

      <h2>Best Neighborhoods for Cannabis Clubs in Barcelona</h2>

      <h3>El Raval (Ciutat Vella) — The Historic Heart</h3>

      <p>
        El Raval is Barcelona's original cannabis hub and remains the epicenter of the scene. This medieval neighborhood in the Old Town has long been Barcelona's bohemian, alternative center, and cannabis consumption is deeply integrated into the neighborhood's culture. Dragon Weed Club, one of Barcelona's most-reviewed clubs (16K+ reviews, 5.0 rating), is located here on Carrer del Bruc. The neighborhood pulses with street culture, international travelers, and a gritty authenticity that feels distinctly Barcelona.
      </p>

      <p>
        El Raval has transformed significantly over the past two decades. It's gentrifying in many areas while maintaining pockets of grittiness and character. Walking through the neighborhood, you'll encounter street artists, vintage shops, hidden cafes, and a mix of locals and tourists. The neighborhood is safe during daylight and early evening, though some streets feel less polished late at night. For cannabis club visitors, El Raval offers an immersive Barcelona experience—the clubs blend naturally into the neighborhood's counterculture vibe.
      </p>

      <p>
        Proximity: Walking distance to Barcelona Cathedral and Gothic Quarter. Metro stops throughout. Close to Mercat de Sant Antoni for food and shopping. International atmosphere with many restaurants, bars, and cafes catering to travelers.
      </p>

      <h3>Eixample — The Upscale District</h3>

      <p>
        Eixample (pronounced "eye-SHAM-pluh") is Barcelona's signature grid-pattern neighborhood designed by Ildefons Cerdà in the 19th century. It's the upscale, modern Barcelona—elegant buildings with geometric precision, wide avenues, luxury shops, and a well-heeled atmosphere. Cannabis clubs here reflect the neighborhood's character: professional, well-designed, and accessible.
      </p>

      <p>
        BCN Kush Weed Club is located in Eixample on Carrer de Galileu and exemplifies this district's clubs. With a perfect 5.0 rating, excellent metro access, and close proximity to shops and restaurants, it's an ideal choice for tourists wanting convenience and quality. Eixample is the safest, most comfortable neighborhood in Barcelona for visitors—excellent public transportation, clear wayfinding, and a high-end feel. The district is oriented toward shopping, dining, and nightlife.
      </p>

      <p>
        Proximity: Excellent metro access (multiple lines). Near Passeig de Gràcia for shopping. Close to Sagrada Familia and Park Güell. Numerous restaurants, bars, and cafes. Easy navigation with clear street grid. Very tourist-friendly and English-speaking areas.
      </p>

      <h3>Gràcia — The Bohemian Village</h3>

      <p>
        Gràcia feels less like a Barcelona neighborhood and more like an independent village that was eventually incorporated into the city. It maintains a distinct identity: bohemian, artistic, local, and resistant to over-commercialization. The neighborhood has a strong sense of community, with a beautiful central plaza (Plaça del Sol) where locals gather, numerous independent shops and galleries, and a counterculture vibe that's more pronounced than anywhere else in Barcelona.
      </p>

      <p>
        Cannabis culture is woven into Gràcia's identity. The neighborhood attracts students, artists, musicians, and long-term residents who prioritize lifestyle over consumption. Cannabis clubs in Gràcia tend to have strong local membership bases and community-oriented atmospheres. While there's less transient tourism here compared to El Raval, the neighborhood is welcoming to visitors seeking authentic Barcelona experience beyond the main tourist circuit.
      </p>

      <p>
        Proximity: 10-15 minute metro ride from city center. Quieter, more residential feel. Great independent restaurants, vintage shops, galleries. Parks and plazas for relaxing. Less touristy but increasingly gentrifying. Excellent for experiencing local Barcelona culture.
      </p>

      <h3>El Born — Hip and Historic</h3>

      <p>
        El Born combines medieval history with contemporary cool. The neighborhood is home to the Gothic Santa Maria del Mar church, narrow medieval streets, and one of Barcelona's best museums (Picasso Museum). Over the past 15 years, El Born has become trendy: upscale restaurants, cocktail bars, boutique shops, and younger professionals have moved in, creating an elevated yet relaxed atmosphere.
      </p>

      <p>
        Cannabis clubs in El Born serve tourists and younger locals seeking a polished, design-conscious experience. The neighborhood's mix of culture, dining, and nightlife makes it easy to integrate club visits into a broader Barcelona experience. Many visitors stay in accommodations near El Born (either in the neighborhood or nearby), making clubs here convenient.
      </p>

      <p>
        Proximity: Walking distance to Gothic Quarter and Sagrada Familia. Excellent restaurants and nightlife. Good metro access. Beautiful medieval architecture. Increasingly expensive and touristy. Strong weekend nightlife scene.
      </p>

      <h3>Sant Antoni — Market Culture & Nightlife</h3>

      <p>
        Sant Antoni is defined by two things: Mercat de Sant Antoni (one of Barcelona's best food markets, perfect for picking up produce, cheese, and wine) and a thriving nightlife scene centered around bars, clubs, and alternative venues. Barcelona Weed Club, one of the city's most established and highest-rated clubs (4.9 rating, 14K+ reviews), is located in Sants near Sant Antoni.
      </p>

      <p>
        The neighborhood has a young, creative energy with a mix of locals and tourists. It's gentrified but still maintains authentic Barcelona character—you'll see market vendors, longtime residents, students, and visitors all coexisting. Cannabis clubs in Sant Antoni integrate naturally into the neighborhood's social scene. Many visitors make Sant Antoni a nightlife destination, combining club visits with market browsing, tapas, and drinks.
      </p>

      <p>
        Proximity: Walking distance to Mercat de Sant Antoni. Excellent small restaurants and tapas bars. Good metro access to other neighborhoods. Young, energetic atmosphere. Great for evening/nighttime activity. Close to Casa Milà and other Gaudí sites.
      </p>

      {/* Club Directory */}
      <ClubDirectory clubs={barcelonaClubs} title="Top Cannabis Clubs in Barcelona" />

      <h2>How to Join as a Tourist</h2>

      <p>
        Barcelona's clubs have optimized the member signup process for international visitors. Here's what to expect:
      </p>

      <h3>Before Arrival</h3>

      <p>
        <strong>Research and preregister (1-2 days before arrival).</strong> Visit the websites of 2-3 clubs you're interested in. Most clubs have online application forms. Fill these out: they'll request basic information (name, passport number, age confirmation, email). Tourist-friendly clubs like Barcelona Weed Club and BCN Kush explicitly welcome online applications and typically approve within 24 hours. You'll receive confirmation via email with membership details.
      </p>

      <p>
        <strong>Choose clubs strategically.</strong> Pick clubs in neighborhoods you plan to visit. If staying in Eixample, target clubs there to minimize travel. If you want the authentic experience, include one El Raval club. Most tourists visit 1-2 clubs maximum—you don't need a comprehensive tour.
      </p>

      <h3>On Arrival</h3>

      <p>
        <strong>Visit in person (same day or next day).</strong> Walk into your chosen club during operating hours (typically 11am-11pm) with your passport. Check in at the counter and confirm membership approval. If you preregistered online, this is just paperwork finalization—usually 5-10 minutes. If you're applying for the first time in-person, the process takes 20-30 minutes.
      </p>

      <p>
        <strong>Complete verification.</strong> Provide your passport (original or photocopy). Confirm age and identity. You may be asked basic questions about cannabis experience level to help with product recommendations. Sign any necessary forms acknowledging club rules. Pay membership fee if applicable (€20-€50 or waived if spending on products). You're now a full member.
      </p>

      <p>
        <strong>Get oriented.</strong> Ask for a brief tour or explanation of the club. Understand the layout, product selection, pricing, amenities (WiFi, seating, etc.), house rules, and operating hours. Most clubs provide menus with product descriptions and prices. Ask staff for recommendations based on your preferences and experience.
      </p>

      <h3>Making Your Purchase</h3>

      <p>
        <strong>Browse products.</strong> Most clubs display products in glass cases or on shelves with descriptions. Products are typically labeled with strain name, THC/CBD content (if tested), origin, and price per gram. Quality levels vary: budget/standard (€5-€8/g), quality/mid-tier (€8-€10/g), and premium (€10-€15/g). Different strains have different potencies, flavors, and effects. Don't hesitate to ask staff questions.
      </p>

      <p>
        <strong>Purchase and consume.</strong> Clubs charge per gram or in standard amounts (3.5g eighths, 7g quarters, 28g ounces). Prices are fixed and displayed. You can consume on-site in designated areas. Most clubs provide rolling materials (papers, tips); some provide bongs or allow personal devices. The entire process from entry to consumption typically takes 1-2 hours.
      </p>

      <h3>Pro Tips</h3>

      <ul>
        <li><strong>Bring passport original.</strong> Photocopies sometimes aren't accepted. Keep it with you.</li>
        <li><strong>Go early in the day.</strong> Morning/early afternoon visits mean shorter waits and better product selection (evenings can get busy).</li>
        <li><strong>Bring cash.</strong> Many clubs accept cards, but cash is more widely accepted and avoids unnecessary transactions.</li>
        <li><strong>Understand the names.</strong> Spanish and Catalan terms appear frequently. Ask staff to explain.</li>
        <li><strong>Don't overcommit.</strong> Start with a modest amount to gauge potency, especially if inexperienced. Barcelona strains can be strong.</li>
        <li><strong>Respect house rules.</strong> Each club has its own etiquette. Comply with rules about photos, behavior, and consumption areas.</li>
        <li><strong>Be respectful but normal.</strong> Clubs appreciate respectful customers, but they're social spaces—it's fine to chat with other members, ask for recommendations, and treat it as a normal part of your Barcelona experience.</li>
      </ul>

      <h2>Prices & What to Expect</h2>

      <h3>Membership Fees</h3>

      <p>
        Barcelona clubs typically charge €20-€50 for annual membership, though this varies. Some clubs waive fees if you make purchases on your first visit. Tourist clubs understand that visitors don't plan to renew annual memberships, so many offer lifetime or discounted membership for one-time visits (€10-€20). A few clubs charge no membership fee at all, relying on product sales for revenue. Always ask upfront what the membership cost is.
      </p>

      <h3>Cannabis Prices</h3>

      <p>
        Barcelona pricing is competitive and transparent:
      </p>

      <ul>
        <li><strong>Budget/Standard:</strong> €5-€8 per gram. Lower-grade flowers, less premium strains, older stock. Still quality products, just not top-tier.</li>
        <li><strong>Quality/Mid-Tier:</strong> €8-€10 per gram. Most popular range. Fresh, well-grown, good genetics, tested. This is where most people shop.</li>
        <li><strong>Premium:</strong> €10-€15 per gram. Top genetics, highest potency, rare strains, exotic cultivars. For connoisseurs and special occasions.</li>
      </ul>

      <p>
        Standard purchases are measured in grams and multiples (e.g., 3.5g eighths, 7g quarters, 28g ounces). A typical first-time purchase might be 3.5-7 grams (one eighth to one quarter) for €20-€70 depending on quality level. Clubs often offer small quantity discounts (buying more per gram costs slightly less).
      </p>

      <h3>Additional Costs</h3>

      <p>
        Pre-rolled joints typically cost 50% more than loose flower (€10-€20 for a single joint versus €5-€10 in loose product). Concentrates (hash, shatter, rosin) are separate products with their own pricing, usually €15-€25 per gram. Edibles, if available, range from €5-€20 depending on potency and format. Some clubs sell smoking accessories (papers, tips, lighters) at standard retail prices.
      </p>

      <h3>Payment Methods</h3>

      <p>
        Most Barcelona clubs accept both cash and card, though cash is universally accepted and sometimes preferred (avoids transaction fees for clubs). Don't assume your foreign credit/debit card will work—bring sufficient cash as backup. €100-€200 cash is reasonable for a visit unless you plan to buy large quantities.
      </p>

      <h3>What to Expect Product-Wise</h3>

      <p>
        Barcelona clubs curate decent product selection. You'll find classic strains (OG Kush, Gelato, Girl Scout Cookies, Haze varieties) and local Catalan genetics. Quality is generally good to excellent at established clubs. Testing is inconsistent—some clubs provide THC/CBD percentages, others don't. Ask staff about effects and potency if not labeled. Spanish strains tend to be on the stronger side compared to some international markets.
      </p>

      <h2>Barcelona vs. Amsterdam: What's Different</h2>

      <p>
        Barcelona and Amsterdam represent two different models of cannabis culture. Amsterdam's coffeeshops openly retail cannabis—you walk in, order from a menu, sit down, and consume. It's straightforward and transactional. There's no membership, no application, no verification beyond age check. You can visit 10 coffeeshops in a single day without friction.
      </p>

      <p>
        Barcelona requires membership in private associations. This adds a small friction (application, verification), but it creates legal cover and a more integrated community vibe. Barcelona clubs feel less like retail establishments and more like social clubs where cannabis happens to be available. The atmosphere tends to be more intimate and member-focused. Prices are comparable or slightly lower in Barcelona. Quality is similarly good at both locations.
      </p>

      <p>
        For tourists, Amsterdam is faster and easier. For those seeking community, atmosphere, and a deeper cultural experience, Barcelona edges ahead. Amsterdam is about cannabis convenience; Barcelona is about cannabis as part of a broader social experience. Both approaches have merit depending on what you value.
      </p>

      {/* FAQ */}
      <FAQSection faqs={barcelonaFAQs} title="Cannabis Clubs in Barcelona — FAQs" />

      <CTA variant="invitation" />
    </ArticleLayout>
  );
}

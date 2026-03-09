import Link from 'next/link';
import { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import { ArticleSchema, BreadcrumbSchema } from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Cannabis Tourism Spain Guide — Plan Your Weed Trip 2026',
  description: 'Complete guide to cannabis tourism in Spain. Learn where to go, what to expect, laws, etiquette, budgeting, safety tips, and how to experience cannabis culture across Spanish cities.',
  keywords: [
    'cannabis tourism spain',
    'weed tourism spain guide',
    'cannabis clubs spain',
    'where to smoke weed in spain',
    'cannabis travel spain',
    'best cannabis destinations spain',
    'cannabis laws spain tourists',
  ],
  openGraph: {
    title: 'Cannabis Tourism Spain Guide — Plan Your Weed Trip 2026',
    description: 'Complete guide to cannabis tourism in Spain. Best cities, club etiquette, legal info, budgeting, transport, and safety for travelers.',
    type: 'article',
    url: 'https://cannabisclubsspain.com/cannabis-tourism-guide',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cannabis Tourism Spain Guide — Plan Your Weed Trip 2026',
    description: 'Complete guide to cannabis tourism in Spain. Learn about cannabis clubs, laws, etiquette, and best destinations.',
  },
  alternates: {
    canonical: 'https://cannabisclubsspain.com/cannabis-tourism-guide',
  },
};

export default function CannabisTourismGuidePage() {
  const faqs = [
    {
      question: 'Is it safe to visit cannabis clubs in Spain as a tourist?',
      answer: 'Yes, cannabis tourism in Spain is generally safe. Clubs are professional establishments with membership systems and house rules. The main safety concerns are legal rather than physical: stay within private spaces (clubs), never consume in public, and always carry your passport. Spain\'s cannabis laws protect private consumption, and clubs operate with implicit police tolerance in most cities. Thousands of tourists visit Spanish clubs annually without incident. Standard travel safety (avoiding isolated areas late at night, not carrying large amounts of cash) applies as it would anywhere.',
    },
    {
      question: 'Do I need to speak Spanish to join and use cannabis clubs?',
      answer: 'No. Most major Spanish cities with established cannabis club scenes have numerous English-speaking staff. Barcelona, Madrid, and Valencia clubs regularly serve English-speaking tourists and have English-language menus and websites. Many club owners and staff speak English fluently. For smaller cities or rural areas, basic Spanish or translation apps (Google Translate) are helpful but not essential. Tourist-oriented clubs proactively accommodate language barriers. If you\'re concerned about language, focus on Barcelona, Valencia, Málaga, or Ibiza where English is widely spoken in clubs.',
    },
    {
      question: 'What\'s the difference between a cannabis club and a cannabis café?',
      answer: 'In Spain, "cannabis clubs" (clubes sociales de cannabis) are private member associations where cannabis is provided to members. They are not licensed businesses and don\'t sell cannabis like shops; instead, members collectively purchase or source product. Cannabis "cafés" don\'t really exist in Spain in the formal sense—some clubs have café-like atmospheres with food, drinks, and social spaces, but they are still member-only clubs. This differs from the Netherlands, where "coffeeshops" openly sell cannabis to customers. Spanish clubs maintain the private consumption framework, while the Netherlands has licensed retail.',
    },
    {
      question: 'How much should I budget for a cannabis trip to Spain?',
      answer: 'Budget varies by city and consumption level. For a week in Barcelona or Madrid: €30–€60 for club membership/registration, €50–€150 for cannabis depending on daily consumption and quality preferences, €0 for consumption within clubs (no additional charges beyond the product price). Combine cannabis tourism with accommodation (€30–€80/night for budget hostels), food (€20–€40/day), and transport (€10–€20 for local passes). A budget-conscious cannabis tourist can manage a week for €200–€300; mid-range travelers should plan €400–€700. High-end experiences with premium clubs, fine dining, and upscale accommodation: €800+.',
    },
    {
      question: 'Is there a best time of year to visit Spanish cannabis clubs?',
      answer: 'Cannabis tourism is viable year-round, but seasonal considerations matter. Spring (March–May) and fall (September–October) offer ideal weather and fewer crowds. Summer (June–August) brings peak tourism, which means busier clubs, higher prices, and crowded cities, but the atmosphere is lively. Winter (November–February) is quiet and affordable, with mild weather in southern cities (Málaga, Seville) but cool conditions in Barcelona. Southern coastal cities remain tourist-friendly year-round. For the best experience, avoid August (extreme heat, peak crowds) and December–January (some clubs have reduced hours).',
    },
    {
      question: 'Can I fly with cannabis or bring it across borders?',
      answer: 'Absolutely not. Do not attempt to fly with cannabis to Spain or bring it through airport security—this is illegal in virtually all countries and will result in criminal charges, imprisonment, and deportation. Cannabis is controlled internationally, and airports are federal jurisdictions. You must source cannabis only within Spain at clubs after arrival. Similarly, do not attempt to take cannabis out of Spain; many tourists have been arrested at airports trying to transport cannabis across borders. All your cannabis consumption must occur within Spain\'s private club system.',
    },
    {
      question: 'What happens if I get caught with cannabis in public in Spain?',
      answer: 'Public consumption is not criminal but results in administrative fines. First offense: €300–€600. You may have cannabis confiscated. Repeat offenses increase fines and can escalate to criminal charges. The fine is not recorded as a criminal conviction (typically) but goes on your administrative record. As a tourist, a fine is an inconvenience but unlikely to affect your return to Spain or other countries. However, some countries may inquire about fines abroad. To avoid this: never smoke cannabis outside of private clubs. Private consumption in your hotel room may be tolerated, but public consumption is where legal risk exists.',
    },
    {
      question: 'Do cannabis club prices differ significantly between Spanish cities?',
      answer: 'Yes, but not dramatically. Barcelona and Madrid tend to have the most competitive pricing (€5–€12/gram for quality flower) due to high competition and established markets. Coastal tourist destinations (Málaga, Ibiza, Valencia) are slightly higher (€6–€13/gram) reflecting tourism demand. Smaller cities or less touristy areas may have higher prices (€8–€15/gram) or lower availability. Club membership fees vary: Barcelona €0–€50, Madrid €10–€40, regional cities €15–€60. Quality cannabis is consistent across major cities; smaller towns may have more variable product. For best pricing, visit established Barcelona or Madrid clubs with high competition.',
    },
  ];

  const breadcrumb = [
    { name: 'Home', href: '/' },
    { name: 'Cannabis Tourism Guide', href: '/cannabis-tourism-guide' },
  ];

  return (
    <>
      <ArticleSchema
        title="Cannabis Tourism Spain Guide — Plan Your Weed Trip 2026"
        description="Complete guide to cannabis tourism in Spain. Learn where to go, what to expect, laws, etiquette, budgeting, safety tips, and how to experience cannabis culture across Spanish cities."
        url="https://cannabisclubsspain.com/cannabis-tourism-guide"
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://cannabisclubsspain.com' },
          { name: 'Cannabis Tourism Guide', url: 'https://cannabisclubsspain.com/cannabis-tourism-guide' },
        ]}
      />

      <ArticleLayout
        title="Cannabis Tourism Spain Guide — Plan Your Weed Trip 2026"
        description="Everything you need to know about cannabis tourism in Spain: laws, clubs, cities, etiquette, and how to plan your trip."
        breadcrumb={breadcrumb}
        heroImage="https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_1600,h_900,c_fill/cannabis-clubs-spain/cannabis-tourism-hero"
        heroAlt="Cannabis tourism in Spain guide"
      >
        <p>
          Spain has emerged as one of Europe's most appealing cannabis tourism destinations, attracting visitors from across the continent who seek to experience cannabis culture in a country where private consumption is decriminalized and cannabis social clubs operate openly. Unlike the highly commercialized coffeeshops of Amsterdam or the prohibition-heavy atmosphere of most European countries, Spain offers a unique cannabis tourism experience—one that blends seamlessly with Spanish culture, hospitality, and travel.
        </p>

        <p>
          Cannabis tourism in Spain is fundamentally different from other European destinations. It's not about buying cannabis in a licensed shop with a menu board and numbered bags. Instead, it's about joining exclusive social clubs, experiencing local hospitality, navigating a complex but traveler-friendly legal landscape, and integrating cannabis consumption into a broader Spanish travel experience. Whether you're exploring Barcelona's bohemian neighborhoods, experiencing Valencia's futuristic architecture, relaxing on Málaga's beaches, or diving into Seville's historical tapestry, cannabis clubs exist as cultural touchpoints in major Spanish cities.
        </p>

        <p>
          This comprehensive guide covers everything a cannabis tourist needs to know: where to go, what to expect, how the legal system works, club etiquette, practical budgeting, seasonal considerations, safety protocols, and how to combine cannabis tourism with authentic Spanish experiences. Whether you're a seasoned cannabis consumer or a curious traveler, this guide will help you navigate Spain's cannabis tourism landscape responsibly and confidently.
        </p>

        <h2>Planning Your Cannabis Trip to Spain</h2>

        <p>
          Successful cannabis tourism requires more planning than simply booking a flight to a club-friendly city. You'll need to consider timing, which cities align with your interests, how to arrange club access before arriving, what documentation to bring, and how cannabis tourism fits into your broader itinerary.
        </p>

        <p>
          Begin by selecting your destination based on club culture and what else the city offers. Barcelona is the obvious choice for seasoned cannabis tourists—the club scene is mature, diverse, and deeply integrated into the city's culture. Málaga appeals to beach-focused travelers who want cannabis tourism with Mediterranean relaxation. Valencia attracts travelers interested in modern Spanish culture with a growing, less crowded club scene. Seville and Ibiza offer cultural depth combined with established club scenes. Madrid has cannabis clubs but is less traditionally "cannabis tourism" focused.
        </p>

        <p>
          Once you've chosen a city, begin club research immediately. Identify 3–5 clubs that appeal to you, review their websites and online presence, and check if they have online membership applications. Many major clubs allow you to submit membership requests before arriving—this is the most efficient approach. Submit applications 2–3 days before your trip and expect approvals within 24 hours. By the time you land, you can often be a member within hours, sometimes faster than checking into your hotel.
        </p>

        <p>
          Review local cannabis laws and understand Spain's legal framework. While private consumption is decriminalized, public consumption is not. Understanding this distinction is critical. Read our <Link href="/cannabis-laws-spain" className="font-semibold text-green-700 hover:text-green-800">complete guide to cannabis laws in Spain</Link> to understand exactly what's legal and what isn't. This knowledge will inform every decision you make during your trip.
        </p>

        <p>
          Practical preparations include ensuring your passport is valid (required for club membership), planning accommodation near clubs or with good transit access, and budgeting appropriately. Consider travel insurance that covers international healthcare, and ensure you understand your home country's policies on cannabis consumption abroad—some governments have restrictions on cannabis use even in countries where it's legal.
        </p>

        <h2>Best Cannabis Tourism Destinations in Spain</h2>

        <p>
          Spain has established cannabis tourism infrastructure in several major cities, each with distinct characteristics and appeal. Understanding what each city offers helps you choose the destination that matches your cannabis tourism goals.
        </p>

        <h3>Barcelona — Spain's Cannabis Capital</h3>

        <p>
          Barcelona is definitively Spain's premier cannabis tourism destination. The city hosts 50–100+ active cannabis clubs, the most diverse club ecosystem in the country, and the most developed infrastructure for tourists. El Raval (the old city), Eixample (central district), and Sant Antoni neighborhoods are cannabis club hubs with multiple clubs within walking distance.
        </p>

        <p>
          Barcelona's cannabis clubs range from bohemian gathering spaces with local character to sophisticated upscale clubs with curated products and knowledgeable staff. The club scene has existed for decades, resulting in highly professional operations, consistent product quality, and staff experienced with international tourists. Membership is straightforward: many clubs have websites accepting online applications with approvals within hours. As a tourist, you'll find English widely spoken, efficient processes, and a welcoming atmosphere.
        </p>

        <p>
          Beyond cannabis, Barcelona is one of Europe's most captivating cities—Gaudí's architecture, Mediterranean beaches, world-class food, vibrant nightlife, and endless cultural attractions. Cannabis tourism integrates seamlessly into a broader Barcelona experience. Explore neighborhoods, visit museums, eat at Michelin-starred restaurants, party in nightclubs, and visit cannabis clubs as part of your social and cultural experience. For a comprehensive guide, visit our <Link href="/barcelona" className="font-semibold text-green-700 hover:text-green-800">Barcelona cannabis clubs guide</Link>.
        </p>

        <h3>Málaga & Costa del Sol — Beach Cannabis Tourism</h3>

        <p>
          Málaga has become increasingly important for cannabis tourism, offering a different experience from Barcelona: coastal relaxation combined with a well-established club scene. The Costa del Sol's tourism infrastructure means excellent accommodation, restaurants, and beaches. Cannabis clubs in Málaga serve both locals and tourists, with growing English-language services and streamlined membership processes.
        </p>

        <p>
          Málaga appeals to travelers who want to combine cannabis consumption with beach lifestyle: mornings at the beach, afternoons exploring the historic city, and evenings at cannabis clubs socializing or relaxing. The climate is warm year-round, making it appealing in winter when Barcelona is cool. Prices are slightly higher than Barcelona but remain reasonable. For detailed information, see our <Link href="/malaga" className="font-semibold text-green-700 hover:text-green-800">Málaga cannabis clubs guide</Link>.
        </p>

        <h3>Valencia — Modern Spanish Culture</h3>

        <p>
          Valencia offers cannabis tourism with a distinctly modern Spanish character. The city's famous City of Arts and Sciences, beach areas, and less touristy atmosphere (compared to Barcelona) appeal to travelers seeking authentic Spain without overwhelming crowds. The cannabis club scene is growing, with increasing numbers of clubs and improving English-language services.
        </p>

        <p>
          Valencia is ideal for travelers interested in Spanish culture, architecture, and cuisine alongside cannabis consumption. It's less saturated than Barcelona, meaning less crowded clubs and sometimes fresher local atmosphere. For information on Valencia's scene, visit our <Link href="/valencia" className="font-semibold text-green-700 hover:text-green-800">Valencia cannabis clubs guide</Link>.
        </p>

        <h3>Seville & Andalusia — Historical Cannabis Tourism</h3>

        <p>
          Seville, the capital of Andalusia, represents southern Spanish culture at its most authentic: flamenco, tapas, historic architecture, and vibrant street culture. The cannabis club scene is growing in Seville, with clubs serving both locals and tourists. The city's warm climate, rich cultural heritage, and laid-back atmosphere create a different cannabis tourism experience—less about club-hopping and more about integrating cannabis consumption into immersive Spanish cultural experiences.
        </p>

        <p>
          Andalusia as a region (including nearby cities like Granada, Córdoba) has growing cannabis club presence. These cities appeal to travelers who prioritize Spanish cultural immersion over cannabis consumption volume. For information, visit our <Link href="/seville" className="font-semibold text-green-700 hover:text-green-800">Seville cannabis clubs guide</Link>.
        </p>

        <h3>Ibiza — Party and Cannabis Culture</h3>

        <p>
          Ibiza combines world-famous nightlife with established cannabis clubs. The island has a robust club scene serving tourists, and cannabis consumption is woven into the island's social culture. Ibiza appeals to travelers seeking cannabis tourism integrated into party atmosphere, beach clubs, electronic music, and Mediterranean nightlife.
        </p>

        <p>
          Ibiza's cannabis clubs differ from mainland equivalents—they're more integrated with the party scene, hosting events and gatherings. The island is significantly more expensive than mainland cities but offers a unique combination of nightlife and cannabis culture. For more details, visit our <Link href="/ibiza" className="font-semibold text-green-700 hover:text-green-800">Ibiza cannabis clubs guide</Link>.
        </p>

        <h2>What to Expect at a Cannabis Club</h2>

        <p>
          Understanding the cannabis club experience removes anxiety and allows you to navigate clubs confidently. Here's what your first visit typically looks like:
        </p>

        <p>
          You'll enter a nondescript entrance (clubs often don't advertise prominently) and ring a bell or go to a reception area. You'll meet staff who verify your ID—your passport must be valid and you must be 18+ (sometimes 21+ depending on the club). The registration process is straightforward: you'll provide your name, age, contact information, and sometimes a temporary address (your hostel or hotel address is fine). You'll sign an agreement acknowledging club rules. This process typically takes 15–30 minutes.
        </p>

        <p>
          Once registered, you become a member—at least temporarily as a tourist. You'll be given basic house rules: no dealing, no disruptive behavior, respect other members, consumption is for members only in designated areas. The staff will often give you a tour or explanation of the club layout.
        </p>

        <p>
          The club itself varies widely. Some are intimate lounges with couches, others are bustling social spaces with bars and games, still others are sleek modern establishments with careful design. Most have ventilation, comfortable seating, and social areas. Staff will show you available products with strain names, THC/CBD percentages, prices, and descriptions. You can examine the product (smell, appearance) before purchasing. Prices are displayed clearly.
        </p>

        <p>
          You'll purchase cannabis by weight (grams, eighths) or as pre-rolls/joints. Staff will prepare your order. Most clubs have on-site consumption spaces where you can smoke immediately or take your purchase elsewhere. Many clubs provide rolling papers, tips, or vaporizers. The atmosphere is typically casual and social—people chatting, playing games, watching sports on screens, or relaxing.
        </p>

        <p>
          As a first-time visitor, staff will be accommodating and patient. They're accustomed to international tourists unfamiliar with the system. Don't hesitate to ask questions about products, strains, potency levels, or anything else. The club experience is social and welcoming by design.
        </p>

        <h2>Cannabis Club Etiquette & Rules</h2>

        <p>
          Cannabis clubs maintain strict house rules to operate successfully in Spain's legal gray zone. Understanding and respecting these rules is essential for a positive experience and continued access.
        </p>

        <p>
          First, clubs are explicitly not retail shops. Do not attempt to negotiate prices, demand refunds, or treat the club as a commercial transaction. The club is a private association—you're joining a community, not shopping. Treat pricing as fixed and be respectful if something isn't available.
        </p>

        <p>
          Second, consumption is strictly for club spaces or private residences. Do not consume cannabis on the street, in parks, on beaches, or in any public space. Public consumption is illegal and will result in fines. This is the most critical rule: stay within private spaces.
        </p>

        <p>
          Third, respect other members and club staff. Cannabis clubs are social spaces—be friendly, be respectful, follow house rules about noise and behavior. Don't be disruptive or make others uncomfortable. If you're intoxicated or uncomfortable, it's better to leave quietly than cause issues.
        </p>

        <p>
          Fourth, do not attempt to sell, distribute, or share cannabis with non-members. The private consumption framework depends on clubs remaining member-only. Bringing unauthorized people or distributing product violates club rules and local law.
        </p>

        <p>
          Fifth, protect your physical items and valuables. Clubs vary in safety culture—some are very secure, others are casual community spaces. Don't leave expensive items unattended. Like any social space with strangers, standard urban safety awareness applies.
        </p>

        <p>
          Sixth, follow consumption norms. In Barcelona and tourist-friendly cities, on-site consumption is normal and expected. In less liberal cities, consumption may be more discreet. Pay attention to what other members are doing and follow the club's culture.
        </p>

        <p>
          Finally, respect the club's relationship with local authorities. Clubs operate in a legal gray zone and maintain this status through discretion and professional operation. Don't bring unwanted attention or behave in ways that jeopardize the club's status.
        </p>

        <h2>Transport & Accommodation for Cannabis Tourists</h2>

        <p>
          Practical logistics matter significantly for cannabis tourism. Choosing accommodation near club areas and understanding public transport will shape your experience.
        </p>

        <p>
          In Barcelona, choose accommodation in El Raval, Eixample, Sant Antoni, or nearby areas with good metro access to club neighborhoods. These areas are centrally located, well-connected, and have numerous clubs nearby. Hostels and budget hotels are plentiful; mid-range accommodation is excellent; high-end options are abundant. Being near clubs means you can walk or take a quick metro ride, making the experience convenient.
        </p>

        <p>
          Public transport in major Spanish cities is excellent and affordable. Barcelona's metro is efficient and cheap (€11 for 10 journeys). Málaga, Valencia, and Seville have good transit networks. Using public transport is safer than driving—you'll be less concerned about alcohol consumption at clubs or driving under the influence. Most tourists choose public transit for convenience.
        </p>

        <p>
          For cannabis consumption, be aware that hotels have varying policies. Some tolerate consumption within rooms (especially if you use vaporizers), others strictly prohibit it. Check your hotel's policies. The safest approach is consuming at the club or ensuring your room has good ventilation. Never consume cannabis in shared spaces (hallways, common areas, balconies).
        </p>

        <p>
          Accommodation booking platforms (Booking.com, Airbnb, Hostels.com) have extensive options. For cannabis tourists, I recommend booking in club-dense areas and reading reviews from previous guests about house rules and neighborhood characteristics.
        </p>

        <h2>Budgeting Your Cannabis Tourism Trip</h2>

        <p>
          Cannabis tourism costs vary significantly based on city, consumption level, and travel style. Understanding budget categories helps you plan appropriately.
        </p>

        <p>
          Club membership and registration fees range from €0 to €60 depending on the city and club. Barcelona clubs often have minimal fees (€0–€30); regional cities may charge €20–€60. These are one-time or annual fees.
        </p>

        <p>
          Cannabis product costs are relatively consistent across Spain: €5–€12 per gram for quality flower depending on strain and club. Budget flower costs €5–€7/gram; quality mid-range is €8–€10/gram; premium is €10–€15/gram. If you consume daily, budget €30–€60 per week for cannabis. Light consumption (2–3 grams per week) costs €15–€35.
        </p>

        <p>
          Accommodation varies dramatically: budget hostels €20–€40/night, mid-range hotels €50–€100/night, upscale €100+/night. For a week, budget €140–€560 for accommodation depending on your preferences.
        </p>

        <p>
          Food in Spain is affordable compared to northern Europe. Budget travelers spend €15–€25 daily on food; mid-range travelers €30–€50 daily; upscale diners €60+. Public transport passes are cheap: Barcelona €11 for 10 journeys, daily passes €8–€10.
        </p>

        <p>
          A weekly cannabis tourism trip budget: budget tourist (hostels, street food, light cannabis consumption) €250–€350; mid-range (decent accommodation, good food, moderate consumption) €450–€650; upscale (nice hotels, fine dining, premium cannabis clubs) €800–€1,200.
        </p>

        <h2>Seasonal Considerations for Cannabis Tourism</h2>

        <p>
          Spain's climate and tourism seasons significantly affect your cannabis tourism experience.
        </p>

        <p>
          Summer (June–August) offers warm weather but brings peak tourism. Cities are crowded, accommodation prices spike, and clubs can feel busier and less intimate. Barcelona in August is extremely hot (28–30°C) and packed with tourists. However, there's an energetic atmosphere, more social activity, and longer daylight hours for exploring.
        </p>

        <p>
          Spring (March–May) and fall (September–October) are ideal. Weather is pleasant, crowds are moderate, prices are reasonable, and club atmospheres are social without being overwhelming. Spring offers fresh atmosphere; fall offers warm-but-not-hot weather and the unique post-summer local culture.
        </p>

        <p>
          Winter (November–February) is quiet and affordable, especially in smaller cities. Barcelona gets cool (8–12°C) but rarely cold or snowy. Málaga and southern cities remain warm (15–18°C) and pleasant. Winter attracts fewer tourists, clubs have local character, and prices are lowest. Some clubs may reduce hours during slower periods.
        </p>

        <p>
          For optimal cannabis tourism, avoid August (extreme heat, peak crowds) and December–January (some clubs have reduced hours during holidays). Spring, early fall, and winter are excellent seasons.
        </p>

        <h2>Safety & Legal Considerations for Cannabis Tourists</h2>

        <p>
          Understanding legal risks and practical safety measures prevents problems during your cannabis tourism trip.
        </p>

        <p>
          First, understand Spain's legal framework. Private consumption in private spaces (homes, clubs) is decriminalized. Public consumption is illegal and results in €300–€600 fines. Selling, dealing, or trafficking cannabis is a serious criminal offense with imprisonment risk. Possession near schools or in front of minors carries enhanced penalties. Never attempt these activities; they destroy the legal protection that makes tourism possible.
        </p>

        <p>
          Second, always carry your passport. Police can request identification in cannabis-related contexts. Never travel without a valid passport. A photocopy is insufficient if police stop you.
        </p>

        <p>
          Third, never attempt to transport cannabis across borders. Bringing cannabis onto flights or into other countries is illegal and results in criminal charges, imprisonment, and deportation. All cannabis consumption must occur within Spain.
        </p>

        <p>
          Fourth, be aware that some countries have laws prohibiting cannabis consumption abroad. Check your home country's policies before traveling. Some governments restrict cannabis use even in countries where it's legal, which could affect your passport or employment.
        </p>

        <p>
          Fifth, use basic urban safety awareness. Clubs vary in neighborhood safety—stay aware of your surroundings, don't carry large amounts of cash, don't display valuables, and travel in groups when possible. Standard travel safety applies; cannabis tourism doesn't increase physical risk beyond normal city travel.
        </p>

        <p>
          Sixth, be cautious with substances outside of clubs. Street dealers and informal sources are illegal and dangerous. Purchase only at established clubs. Street dealers increase legal risk and may offer dangerous or low-quality products.
        </p>

        <p>
          For comprehensive legal information, see our <Link href="/cannabis-laws-spain" className="font-semibold text-green-700 hover:text-green-800">cannabis laws guide</Link>.
        </p>

        <h2>Integrating Cannabis Tourism with Spanish Culture</h2>

        <p>
          The best cannabis tourism experiences integrate cannabis consumption with genuine Spanish cultural experiences. Cannabis tourism isn't about cannabis alone—it's about experiencing Spain through the lens of cannabis culture while engaging with local hospitality, food, art, and lifestyle.
        </p>

        <p>
          In Barcelona, visit cannabis clubs in El Raval, which is historically the city's bohemian and multicultural heart. Explore the neighborhood's narrow medieval streets, street art, vintage shops, and local bars. Understand that cannabis clubs are part of Barcelona's bohemian character, not separate from it. Eat at local tapas bars, visit the Picasso Museum, walk along the Gothic Quarter, and experience clubs as social spaces within this cultural context.
        </p>

        <p>
          In Málaga, combine beach culture with cannabis tourism. Spend mornings on the beach, afternoons exploring the Alcázar fortress or visiting art museums, evenings at cannabis clubs socializing with locals. Málaga's cannabis tourism integrates with Mediterranean lifestyle—it's not a vice but part of social relaxation and hospitality.
        </p>

        <p>
          In Seville, immerse yourself in flamenco culture, historic neighborhoods, and the Guadalquivir riverside. Cannabis clubs are secondary to experiencing Seville's architectural majesty and cultural traditions. Attend flamenco performances, explore the Alcázar Palace, eat at traditional restaurants, and visit clubs as social spaces alongside these experiences.
        </p>

        <p>
          Throughout Spain, cannabis tourism works best when integrated with Spanish culture's core values: hospitality, social connection, food enjoyment, and leisurely living. Clubs themselves are social spaces—they're not consumption-only venues but gathering places where Spanish social values are expressed. Approach cannabis tourism as cultural tourism; the cannabis is an element, not the entirety.
        </p>

        <h2>How to Join Cannabis Clubs — The Practical Process</h2>

        <p>
          Joining a cannabis club as a tourist is straightforward but involves specific steps. Understanding the process removes uncertainty and allows you to plan efficiently.
        </p>

        <p>
          Most major clubs have websites where you can submit membership requests. These requests ask for basic information: name, age, contact email, and optional address. Submit these requests 2–3 days before your trip. Most clubs respond within 24 hours with approval confirmation and instructions.
        </p>

        <p>
          Upon arrival in Spain, you'll visit the club with your passport. Registration involves completing an in-person form (usually simple, requiring age verification and ID check), paying any registration fee (typically €5–€25), and agreeing to house rules. This process takes 15–30 minutes. You're then a member and can immediately access the club.
        </p>

        <p>
          If you haven't pre-applied online, you can walk into clubs directly and request membership on-site. Tourist-friendly clubs typically approve tourist memberships within 30 minutes to an hour. Always bring your passport; it's non-negotiable for membership verification.
        </p>

        <p>
          Some clubs offer temporary tourist memberships (valid for a few days) or limited memberships (valid for your stay). These can be less expensive than annual memberships but serve the same function. Clarify membership terms when applying.
        </p>

        <p>
          For detailed membership guidance specific to each city, see our <Link href="/how-to-join" className="font-semibold text-green-700 hover:text-green-800">complete guide to joining cannabis clubs</Link>.
        </p>

        <FAQSection faqs={faqs} title="Frequently Asked Questions About Cannabis Tourism in Spain" />

        <h2>Final Thoughts on Cannabis Tourism in Spain</h2>

        <p>
          Cannabis tourism in Spain represents a unique travel experience—one that combines cannabis consumption culture with genuine Spanish hospitality, diverse urban environments, and rich cultural traditions. Spain's decriminalization of private consumption, combined with the established cannabis club infrastructure, creates opportunities for travelers to experience cannabis culture responsibly and safely.
        </p>

        <p>
          Success in cannabis tourism depends on respecting local laws, understanding club culture, integrating cannabis with broader Spanish experiences, and prioritizing safety and discretion. When approached thoughtfully, cannabis tourism in Spain is accessible, welcoming, and compatible with experiencing some of Europe's most captivating cities.
        </p>

        <p>
          Whether you're exploring Barcelona's bohemian neighborhoods, relaxing on Málaga's beaches, or experiencing Seville's historic culture, Spain's cannabis tourism infrastructure welcomes travelers. Plan thoughtfully, respect local customs and law, and you'll discover that cannabis consumption in Spain is woven into social culture rather than separated from it—a characteristic that defines the entire experience.
        </p>

        <CTA variant="guide" />
      </ArticleLayout>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";
import ClubDirectory from "@/components/ClubDirectory";
import CityStats from "@/components/CityStats";
import FAQSection from "@/components/FAQSection";
import { malagaClubs, cityMeta } from "@/data/clubs";

export const metadata: Metadata = {
  title: "Cannabis Clubs in Málaga & Costa del Sol — Guide 2026",
  description: "Discover the best cannabis clubs in Málaga and Costa del Sol. Tourist-friendly clubs, prices, how to join, and tips for the Mediterranean coast.",
};

export default function MalagaPage() {
  const faqs = [
    {
      question: "Can tourists visit cannabis clubs in Málaga?",
      answer:
        "Yes, cannabis clubs in Málaga and Costa del Sol are tourist-friendly. Most require either an invitation from a member, online pre-registration via platforms like Weedestiny, or direct phone contact. Age requirements (usually 21+) are strict and enforced. Bring a passport or EU ID card for verification.",
    },
    {
      question: "What's the age requirement in Costa del Sol clubs?",
      answer:
        "Most clubs in the Málaga and Costa del Sol region require members to be 21+ years old. Some exclusive clubs may have slightly different requirements, but 21 is the standard. You will be asked to provide valid ID at the door.",
    },
    {
      question: "How do I access clubs if I'm not a member?",
      answer:
        "Most Costa del Sol clubs offer three main ways to access: (1) Direct phone contact to arrange a visit and discuss membership, (2) Online pre-registration through Weedestiny or the club's website, or (3) Invitation from an existing member. MagZ in Torremolinos is particularly known for being accessible via direct phone contact: +34 623 40 48 60.",
    },
    {
      question: "Are there clubs that operate 24/7 in Málaga?",
      answer:
        "Yes. MagZ Social Weed Club in Torremolinos operates 24/7, making it uniquely accessible for tourists on any schedule. This is one of the Costa del Sol's distinctive features — round-the-clock availability for international visitors.",
    },
    {
      question: "What's the best club to visit as a first-timer in Costa del Sol?",
      answer:
        "Social Club Amsterdam in Fuengirola is an excellent choice for first-time visitors. It has a perfect 5.0-star rating with 2.2K+ reviews, making it one of the most reliable and established clubs on the coast. Contact: +34 602 40 17 80. Alternatively, MagZ in Torremolinos operates 24/7 and specializes in welcoming international visitors.",
    },
    {
      question: "What should I know about cannabis laws in Andalusia?",
      answer:
        "Private cannabis consumption is decriminalized in Spain, and cannabis clubs operate in a legal gray area as private membership associations. They're not illegal, but they operate under strict conditions: they're private, membership-based, non-commercial (officially), and limited to personal consumption. Public use, selling, or trafficking remains illegal. Clubs are tolerated by local authorities when they operate responsibly.",
    },
    {
      question: "How far is it between clubs on the Costa del Sol?",
      answer:
        "The Costa del Sol stretches about 160km from Málaga to Estepona. Málaga (airport) to Torremolinos: 15 mins. Torremolinos to Benalmádena: 10 mins. Benalmádena to Fuengirola: 15 mins. Fuengirola to Marbella: 30 mins. Marbella to Estepona: 30 mins. Renting a car or using taxis/Uber is recommended for club hopping.",
    },
    {
      question: "Do clubs accept card payments or cash only?",
      answer:
        "Most clubs primarily accept cash for discretion reasons, though some accept card payments. It's always best to call ahead and ask. Budget €15–€30 for membership registration and €5–€15 per gram depending on quality and strain.",
    },
  ];

  return (
    <ArticleLayout
      title="Cannabis Clubs in Málaga & Costa del Sol"
      description="Your guide to the Mediterranean's most accessible cannabis scene. Tourist-friendly clubs, beach culture, and expat community."
      heroImage="https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_1600,h_900,c_fill/cannabis-clubs-spain/city-malaga"
      heroAlt="Cannabis clubs in Málaga and Costa del Sol, Spain"
      breadcrumb={[{ name: "Málaga", href: "/malaga" }]}
      ctaVariant="invitation"
      publishDate="2026-03-09"
    >
      <CityStats meta={cityMeta.malaga} />

      <h2>Introduction to Málaga & Costa del Sol Cannabis Scene</h2>

      <p>
        Málaga and the Costa del Sol represent something unique in the Spanish cannabis landscape: a thriving tourist-oriented
        cannabis culture where Mediterranean beach life intersects with cannabis social clubs. Unlike Barcelona's historical scene or Madrid's
        urban sprawl, Costa del Sol clubs cater specifically to tourists, expats, and seasonal visitors looking to integrate cannabis into a
        holiday experience.
      </p>

      <p>
        The region stretches 160 kilometers along Andalusia's coast, from the cosmopolitan port city of Málaga through the package-tour towns
        of Torremolinos and Benalmádena, the family-friendly Fuengirola, the luxury destination of Marbella, and the quieter upscale enclave
        of Estepona. Each town has its own character and cannabis club ecosystem, united by proximity to the airport, year-round Mediterranean
        weather, and a international population.
      </p>

      <p>
        What sets Costa del Sol apart is its 21+ age requirement across most clubs (higher than Barcelona's 18+), professional tourist-facing
        operations, and direct accessibility for visitors. Many clubs here aren't hiding—they're openly marketed through WhatsApp, phone contact,
        and platforms like <strong>Weedestiny</strong>, a Spanish cannabis club booking system. MagZ in Torremolinos even operates 24/7,
        recognizing the international tourism market.
      </p>

      <h2>Clubs Along the Costa del Sol Corridor</h2>

      <p>
        The Costa del Sol isn't a single city—it's a linear string of beach towns, each with its own vibe and club offerings. Understanding
        the geography helps you plan visits or find clubs that match your preferred atmosphere.
      </p>

      <h3>Málaga City (The Gateway)</h3>

      <p>
        Málaga is Andalusia's main port and the Costa del Sol's entry point. It's a working city with historic charm (Roman theater, Picasso museum)
        and a young, modern vibe. DogRoom operates in central Málaga, offering a relaxed atmosphere with pool tables and billiards in a discreet,
        safe environment. Hours: 12:00–23:00 (Friday–Saturday until midnight). Direct contact via Weedestiny.
      </p>

      <h3>Torremolinos (The Package-Tour Classic)</h3>

      <p>
        Torremolinos is the quintessential Costa del Sol package-holiday destination—high-rise hotels, British pubs, 24-hour beach bars. MagZ
        Social Weed Club operates here, and uniquely, it's open 24/7. This isn't coincidental; MagZ specifically targets tourists and maintains
        a modern bohemian aesthetic combining community, art, and relaxation. The club emphasizes an international community and is accessible
        via direct phone contact (+34 623 40 48 60). Perfect for jet-lagged arrivals or late-night plans.
      </p>

      <h3>Benalmádena (The Family Beach Town)</h3>

      <p>
        Benalmádena sits between Torremolinos and Fuengirola, known for the Benalmádena Pueblo (a whitewashed hilltop village) and more family-oriented
        beach culture. Frank Weed Club operates here, positioned as a unique, responsible, and authentic space in a major tourist area. Hours:
        12:00–midnight. Access via Weedestiny invitation system. The club emphasizes secure environment and discreet operations.
      </p>

      <h3>Fuengirola (The Established Hub)</h3>

      <p>
        Fuengirola is arguably the Costa del Sol's best cannabis club destination, home to <strong>Social Club Amsterdam</strong>, one of Spain's
        highest-rated clubs. Perfect 5.0 rating with 2.2K+ reviews. Hours: open until 01:00. Direct phone contact (+34 602 40 17 80) makes access straightforward.
        The club's professional operation and excellent reputation make it the safest recommendation for first-time Costa del Sol visitors.
      </p>

      <h3>Marbella (The Luxury Destination)</h3>

      <p>
        Marbella is Spain's answer to Monaco—luxury villas, celebrity nightlife, exclusive restaurants, and a price tag to match. Weedland operates
        in the heart of Marbella, explicitly positioned as an exclusive cannabis social club emphasizing community, style, and conscious consumption.
        Hours: 12:00–midnight. Access via Weedestiny registration. The club attracts a upscale demographic and offers a different experience compared
        to the more casual tourist clubs further north.
      </p>

      <h3>Estepona (The Quieter Alternative)</h3>

      <p>
        At the western edge, Estepona is where the coast becomes less touristy—fishing village charm, whitewashed streets, fewer high-rises. Munchies CSC
        operates here with strong 4.9-star ratings. Address: Av. Luis Braille, 19, Local 19. Hours: open until 21:30. Phone: +34 663 28 78 53.
        The club is professional and reliable, ideal if you prefer a quieter, less-touristy experience.
      </p>

      <h2>Andalusia's Cannabis Regulations</h2>

      <p>
        Understanding Spain's legal framework is essential before visiting any cannabis club. Unlike some countries where cannabis clubs operate in
        outright legal limbo, Spain has a more defined, though still nuanced, regulatory approach.
      </p>

      <p>
        <strong>Cannabis is decriminalized for private consumption</strong> in Spain. This means that personal use in private settings is not prosecuted.
        The law distinguishes between production/trafficking (serious crime) and personal consumption (decriminalized). Cannabis clubs exist in the space
        between: they're technically private membership associations, not commercial businesses, and members theoretically are "sharing" rather than buying.
      </p>

      <p>
        <strong>Club tolerance</strong> is local. Andalusia and its municipalities tolerate cannabis clubs when they operate responsibly—meaning membership-based,
        non-public, limited to personal consumption, and discreet. Local police and government generally don't raid established clubs; they only intervene if
        clubs become criminal hubs or operate openly as retail outlets. The Málaga region has a pragmatic approach, especially around tourism corridors.
      </p>

      <p>
        <strong>What's illegal:</strong> Public consumption, selling cannabis outside clubs, producing/trafficking, and operating without membership structures.
        Tourist plates and obvious consumption draw attention.
      </p>

      <p>
        For more detailed legal information, see our guide on <Link href="/cannabis-laws-spain" className="text-[var(--color-forest)] font-semibold">Spain's Cannabis Laws</Link>.
      </p>

      <h2>Cannabis Club Directory — Costa del Sol & Málaga</h2>

      <ClubDirectory clubs={malagaClubs} title="Top Clubs: Málaga & Costa del Sol" />

      <h2>Getting Around the Costa del Sol</h2>

      <p>
        The Costa del Sol is long and linear, not compact. Planning transportation is important when visiting multiple clubs or exploring the region.
      </p>

      <p>
        <strong>Málaga–Costa del Sol Airport (AGP)</strong> is Spain's fifth-busiest airport, serving most European capitals and many direct routes.
        It's 8 km from Málaga city and 15 km from Torremolinos. Car rentals, taxis, and buses are readily available. Budget €20–€30 for a taxi to Torremolinos.
      </p>

      <p>
        <strong>Public Transport:</strong> The Cercanías train connects Málaga–Torremolinos–Benalmádena–Fuengirola in about 1 hour (€3–€5 one-way).
        Buses (Alsa, local operators) serve the full coast (frequent but slower). Trains and buses are cheap but can be crowded in summer.
      </p>

      <p>
        <strong>Car Rental:</strong> Best for flexibility. Cheap daily rates (€25–€50) and straightforward driving along the A-7 coastal highway.
        Parking can be tight in tourist centers but is available. Apps like Parkwhiz help find spots.
      </p>

      <p>
        <strong>Distances Between Clubs:</strong>
      </p>
      <ul style={{ listStyleType: "disc", paddingLeft: "1.5em" }}>
        <li>Málaga (airport) → Torremolinos: 15 mins by car</li>
        <li>Torremolinos → Benalmádena: 10 mins</li>
        <li>Benalmádena → Fuengirola: 15 mins</li>
        <li>Fuengirola → Marbella: 30 mins</li>
        <li>Marbella → Estepona: 30 mins</li>
      </ul>

      <p>
        Uber and Bolt operate throughout the coast and are reliable alternatives to taxis. For club hopping, coordinate a driver or arrange multiple visits on
        different days based on location clusters.
      </p>

      <h2>Tourist Tips for Costa del Sol Cannabis Clubs</h2>

      <p>
        <strong>Age Requirement:</strong> 21+ is standard. Bring your passport or EU ID card. Clubs strictly enforce this—no exceptions.
      </p>

      <p>
        <strong>Membership Registration:</strong> Most clubs charge €15–€30 for membership. This is a one-time or annual fee. Some clubs (like those on Weedestiny)
        pre-register members online; others require in-person registration. Call ahead.
      </p>

      <p>
        <strong>Payment Methods:</strong> Cash is preferred for discretion. Many clubs operate on a cash-only basis. Some accept card payments.
        Budget €30–€50 for a membership + initial purchase.
      </p>

      <p>
        <strong>Weedestiny Platform:</strong> Weedestiny is Spain's cannabis club booking platform. Several Costa del Sol clubs (Weedland in Marbella,
        Frank Weed in Benalmádena, DogRoom in Málaga) use it. Pre-register on their app, and you'll receive an invitation code to present at the club.
        This is one of the easiest methods for tourists.
      </p>

      <p>
        <strong>Phone Contact is Key:</strong> Many clubs don't heavily advertise online. Direct phone contact is often the fastest way to visit.
        MagZ (+34 623 40 48 60) and Social Club Amsterdam (+34 602 40 17 80) are explicitly tourist-friendly and phone-accessible. Have a local SIM card
        or use WhatsApp to call.
      </p>

      <p>
        <strong>Best Clubs for First-Timers:</strong> Start with Social Club Amsterdam (Fuengirola) or MagZ (Torremolinos). Both are established,
        professional, highly-rated, and accustomed to tourists. Avoid smaller neighborhood clubs on your first visit; larger, tourist-oriented venues are
        more straightforward.
      </p>

      <p>
        <strong>Summer vs. Winter:</strong> Summer (June–September) is peak tourist season with packed clubs and longer waits. Winter (November–March)
        is quieter and easier to access. Clubs maintain full hours year-round. Expect higher prices during summer.
      </p>

      <p>
        <strong>Discreetness:</strong> Although cannabis clubs are tolerated, avoid public consumption or obvious signage. Respect club rules,
        keep visits discreet, and don't flaunt purchases. This maintains the club's standing with local authorities.
      </p>

      <h2>Pricing & Quality in Costa del Sol Clubs</h2>

      <p>
        Cannabis pricing in Málaga and Costa del Sol varies by club and quality. Tourist-oriented clubs price competitively but not cheaply.
        See our <Link href="/prices" className="text-[var(--color-forest)] font-semibold">Cannabis Pricing Guide for Spain</Link> for detailed breakdowns.
      </p>

      <p>
        <strong>Average Costs:</strong>
      </p>
      <ul style={{ listStyleType: "disc", paddingLeft: "1.5em" }}>
        <li>Membership: €15–€30 (one-time or annual)</li>
        <li>Cannabis: €5–€15/gram depending on quality and strain</li>
        <li>Premium/imported strains: €10–€20/gram</li>
        <li>Edibles/hash: €8–€25</li>
      </ul>

      <p>
        Most clubs stock standard Spanish genetics and popular import strains. Marbella and Estepona clubs lean toward premium positioning and higher prices.
        Fuengirola and Torremolinos offer better value for budget-conscious visitors.
      </p>

      <h2>Why Visit Cannabis Clubs in Málaga?</h2>

      <p>
        Cannabis clubs in Málaga and Costa del Sol serve a unique niche: they allow international tourists and expats to legally and safely consume cannabis
        in a Mediterranean setting without criminal risk. The scene is mature, professional, and geared toward tourism. Clubs are English-friendly, situated near
        beaches and restaurants, and integrated into the holiday experience rather than hidden away.
      </p>

      <p>
        Unlike Barcelona (where clubs are dense but less tourism-oriented) or Amsterdam (where cannabis culture is normalized to the point of invisibility),
        Costa del Sol clubs occupy a middle ground: openly available, explicitly welcoming to tourists, yet still discreet and membership-based.
      </p>

      <p>
        Whether you're planning a cannabis-friendly beach holiday, combining club visits with coastal exploration, or simply curious about Spain's evolving
        cannabis culture, Málaga and Costa del Sol offer accessible, professional entry points.
      </p>

      <FAQSection faqs={faqs} title="Cannabis Clubs in Málaga & Costa del Sol — FAQ" />
    </ArticleLayout>
  );
}

import Link from 'next/link';
import { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Is Weed Legal in Spain? Cannabis Laws Explained (2026)',
  description: 'Complete guide to cannabis laws in Spain, including private consumption rights, cannabis social clubs, regional differences, and what tourists need to know.',
};

export default function CannabisLawsPage() {
  const faqs = [
    {
      question: 'Is cannabis legal in Spain?',
      answer: 'Cannabis is not fully legal in Spain, but private consumption is decriminalized. Growing, possession for personal use, and consumption in private spaces are legal under specific conditions. Buying, selling, and public consumption remain illegal.',
    },
    {
      question: 'What is the private consumption rule?',
      answer: 'Spanish law does not penalize private consumption of cannabis. This means adults can legally consume cannabis in private homes or private spaces. However, public consumption remains a legal gray area with potential fines, and selling or distributing cannabis is illegal.',
    },
    {
      question: 'Are cannabis social clubs legal in Spain?',
      answer: 'Cannabis social clubs exist in a legal gray zone. They operate as private associations where members can consume cannabis together. While not explicitly illegal, they are not officially regulated. Most operate without interference from authorities as long as they maintain privacy and don\'t sell to the public.',
    },
    {
      question: 'Do cannabis laws differ by region in Spain?',
      answer: 'Yes. Catalonia and some other regions have more liberal attitudes toward cannabis clubs. Andalusia and other regions enforce stricter policies. Always research local regulations in your specific region, as enforcement varies significantly.',
    },
    {
      question: 'What are the penalties for public cannabis use in Spain?',
      answer: 'Public consumption can result in fines ranging from €300 to €600. Selling or trafficking cannabis carries much harsher penalties, including potential imprisonment. Private consumption for personal use is not penalized.',
    },
    {
      question: 'Can tourists join cannabis clubs in Spain?',
      answer: 'Yes, many clubs welcome international tourists with valid ID (passport). Most require a membership application or invitation. Tourist-friendly clubs often facilitate quick entry for visitors. Always verify the specific club\'s requirements before visiting.',
    },
    {
      question: 'How does Spain\'s cannabis law compare to the Netherlands?',
      answer: 'Both countries have decriminalized private consumption, but the Netherlands has tolerated commercial coffee shops selling cannabis, while Spain has not legalized retail sales. Spain\'s cannabis clubs are member-only associations rather than licensed businesses.',
    },
    {
      question: 'What documents do tourists need to join a cannabis club?',
      answer: 'A valid passport or ID proving you are 18+ (or 21+ depending on the club) is typically required. Some clubs may ask for proof of residence. Most tourist-friendly clubs have streamlined processes to minimize documentation requirements.',
    },
  ];

  return (
    <ArticleLayout
      title="Is Weed Legal in Spain? Cannabis Laws Explained (2026)"
      description="Comprehensive guide to Spanish cannabis laws: private consumption rights, cannabis social clubs, regional regulations, and tourist information."
      heroImage="https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_1600,h_900,c_fill/cannabis-clubs-spain/hero-laws"
      heroAlt="Spanish flag with cannabis leaves"
      breadcrumb={[{ name: 'Cannabis Laws', href: '/cannabis-laws-spain' }]}
    >
      <h2>Is Cannabis Legal in Spain?</h2>
      <p>
        Cannabis exists in a unique legal position in Spain. It is neither fully legal nor completely prohibited. The Spanish legal system decriminalizes private consumption and personal cultivation while maintaining prohibition on commercial sale and public use. This distinction has created a thriving cannabis social club culture that operates in a legal gray zone accepted by authorities.
      </p>
      <p>
        Since 1992, Spanish courts have consistently ruled that private consumption of cannabis does not constitute a criminal offense. This protection extends to small-scale personal cultivation and consumption in private spaces. However, the law remains clear: producing cannabis for sale, distributing it, or consuming it publicly are all illegal activities subject to criminal penalties.
      </p>

      <h2>The Private Consumption Rule</h2>
      <p>
        The cornerstone of Spanish cannabis law is the protection of private consumption. Article 368 of the Spanish Penal Code explicitly states that penalties do not apply to cultivation, possession, or consumption of cannabis conducted exclusively for personal use in private spaces. This legal protection is so well-established that it forms the foundation of the entire cannabis social club system.
      </p>
      <p>
        "Private" in this context means consumption in spaces not accessible to the general public. Your home, a private apartment, or a members-only club qualify. Cannabis consumed in parks, streets, beaches, or any public space is illegal and subject to fines. The distinction between private and public is critical to understanding Spanish cannabis law.
      </p>
      <p>
        Possession limits for private consumption are not strictly defined in law, but courts generally accept small quantities (typically under 100g) as evidence of personal use rather than trafficking. Cultivation rights are similarly protected—growing cannabis for personal use is not criminal, though exact plant limits vary by regional interpretation.
      </p>

      <h2>Cannabis Social Clubs — The Legal Framework</h2>
      <p>
        Cannabis social clubs (clubes sociales de cannabis) emerged as a creative legal solution to enable shared consumption in Spain. These clubs operate as private membership associations where adults can collectively consume cannabis in designated member spaces. They exist in a regulatory gray zone—not explicitly legal but not explicitly illegal.
      </p>
      <p>
        The operational model is consistent across clubs: members pay membership fees, apply for admission, and consume cannabis exclusively within the club's private spaces. Clubs do not sell cannabis; instead, they source product from member growers or operate internal cultivation operations that supply members. This model theoretically keeps clubs within the private consumption framework.
      </p>
      <p>
        Most clubs operate without official licensing and answer to no regulatory body. However, they generally accept that they must maintain strict privacy, limit advertising, prevent sales to non-members, and avoid attracting law enforcement attention. Police tolerance varies by city and region, with some areas being significantly more permissive than others.
      </p>

      <h2>Regional Differences: Catalonia, Andalusia, Valencia, and Beyond</h2>
      <p>
        While cannabis law is set at the national level, regional enforcement varies dramatically. Catalonia has become the de facto capital of Spain's cannabis club culture, with Barcelona hosting the highest concentration of clubs and the most liberal enforcement. The Catalan government has proposed regulated frameworks for cannabis clubs, signaling openness to the industry.
      </p>
      <p>
        Andalusia presents a mixed picture. Cities like Málaga, Seville, and Granada have growing cannabis club scenes, but enforcement is less predictable than in Catalonia. Clubs operate successfully but with greater awareness that local police can crack down if they deem it necessary. Coastal tourist areas (Málaga, Costa del Sol) tend to be more club-friendly due to tourism industry influence.
      </p>
      <p>
        Valencia has a growing cannabis scene with multiple established clubs, though less developed than Barcelona. The regional government has not taken as strong a stance as Catalonia, resulting in moderate enforcement and increasing club operations. Balearic Islands (Ibiza, Mallorca) are highly tourist-friendly with well-established club scenes.
      </p>
      <p>
        Madrid and other central regions are less developed for cannabis clubs, with enforcement varying significantly by neighborhood. Some neighborhoods tolerate clubs while others actively discourage them. The national capital's conservative politics can make club operations more politically fraught.
      </p>

      <h2>What Tourists Need to Know</h2>
      <p>
        Spain welcomes cannabis tourists, and many clubs actively encourage international visitors. As a tourist, you have essentially the same legal protections as Spanish residents: private consumption is decriminalized, and joining a cannabis social club is not illegal. However, there are important practical considerations.
      </p>
      <p>
        First, carry your passport at all times. Cannabis clubs will not admit you without valid ID proving age (18+ or 21+ depending on the club). Police may also request identification if they stop you in a cannabis-related context. Never attempt entry with a fake ID or someone else's identification.
      </p>
      <p>
        Second, understand that while consumption is protected in private clubs, any consumption outside a private space is illegal. Do not smoke cannabis in public spaces, streets, beaches, or parks under any circumstances. Fines for public consumption can reach €600, and you may face deportation if the offense is serious or you have other legal issues.
      </p>
      <p>
        Third, respect club rules about quantity and behavior. While clubs permit consumption, they maintain standards about discretion and member conduct. Do not attempt to buy cannabis outside a club or engage with street dealers. This crosses into illegal trafficking territory and carries severe penalties.
      </p>
      <p>
        Finally, be aware of your embassy's stance on cannabis. While Spanish law is permissive, your home country may have issues with cannabis consumption abroad. Some countries have laws against cannabis use even in places where it's legal, which could affect your passport status or employment.
      </p>

      <h2>Penalties for Public Use</h2>
      <p>
        Public consumption of cannabis in Spain results in administrative fines, not criminal prosecution. First-time offenses typically incur fines between €300 and €600. Repeat offenses can result in higher fines and potentially criminal charges. Police may also confiscate cannabis found during public use.
      </p>
      <p>
        Public consumption near schools, youth facilities, or in front of minors may result in enhanced penalties. Similarly, consumption while driving or operating machinery can lead to additional charges beyond just cannabis possession.
      </p>
      <p>
        Selling, trafficking, or distributing cannabis carries far harsher penalties than consumption. Penalties start at 3 years imprisonment for distribution and can reach 9 years for trafficking large quantities. Even small-scale informal sales can result in criminal charges and imprisonment.
      </p>

      <h2>Comparing Spain to the Netherlands</h2>
      <p>
        Spain and the Netherlands are often compared as Europe's two most cannabis-tolerant countries, but their legal frameworks are quite different. The Netherlands' famous "tolerance policy" allows licensed coffee shops to sell cannabis to customers, making commercial sales legal. Spain has no such system; all commercial sales remain illegal.
      </p>
      <p>
        Spain's cannabis clubs represent a different model: private consumption associations rather than licensed retail. This gives Spain a more informal, less regulated market compared to the Netherlands' official coffee shop system. Both countries protect private consumption, but only the Netherlands has legalized and regulated commercial sales.
      </p>
      <p>
        In practice, tourists often find Spanish cannabis clubs more accessible and affordable than Dutch coffee shops. Spanish clubs operate more informally, with lower membership fees (€10–€50 typically) and less bureaucratic entry requirements. However, the Dutch model offers more certainty and consistent quality due to regulation.
      </p>
      <p>
        Both countries' approaches represent significant departures from global cannabis prohibition, but Spain's gray-zone approach differs fundamentally from the Netherlands' regulated tolerance.
      </p>

      <h2>Related Resources</h2>
      <p>
        For practical guidance on joining clubs and understanding the membership process, see our <Link href="/how-to-join" className="font-semibold text-green-700 hover:text-green-800">complete guide to joining cannabis clubs</Link>.
      </p>
      <p>
        For pricing information and cost comparisons by city, visit our <Link href="/prices" className="font-semibold text-green-700 hover:text-green-800">guide to cannabis club prices in Spain</Link>.
      </p>
      <p>
        For city-specific club recommendations, explore our guides to <Link href="/barcelona" className="font-semibold text-green-700 hover:text-green-800">Barcelona</Link> and <Link href="/madrid" className="font-semibold text-green-700 hover:text-green-800">Madrid</Link> cannabis clubs.
      </p>

      <FAQSection faqs={faqs} title="Frequently Asked Questions About Cannabis Laws" />
    </ArticleLayout>
  );
}

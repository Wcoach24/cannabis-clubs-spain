import Link from 'next/link';
import { Metadata } from 'next';
import ArticleLayout from '@/components/ArticleLayout';
import FAQSection from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'How to Join a Cannabis Club in Spain — Step-by-Step Guide 2026',
  description: 'Complete step-by-step guide to joining Spanish cannabis clubs: membership process, requirements, fees by city, and tips for first-time visitors.',
};

export default function HowToJoinPage() {
  const faqs = [
    {
      question: 'How long does it take to join a cannabis club?',
      answer: 'For locals, the process typically takes 1–7 days after submitting your application. Tourist-friendly clubs can approve visitors within hours or same-day with an invitation system. Tourist clubs often prioritize fast approval to accommodate short-term visitors.',
    },
    {
      question: 'Do I need a sponsor to join a cannabis club?',
      answer: 'Some clubs require a current member sponsor, while others accept direct applications. Tourist-friendly clubs typically don\'t require sponsors and accept direct applications from visitors with valid ID. Always check the specific club\'s requirements in advance.',
    },
    {
      question: 'What happens after I get approved for membership?',
      answer: 'Once approved, you receive your membership details (usually by email or WhatsApp). You can then visit the club during operating hours. Most clubs don\'t require advance notice for visits, though some tourist clubs prefer booking. Show your ID at entry.',
    },
    {
      question: 'Can tourists get multiple memberships in different cities?',
      answer: 'Yes, many tourists join clubs in multiple cities during their Spain trip. Each club has its own independent membership, so you can join Barcelona clubs, Valencia clubs, and Costa del Sol clubs separately. Most clubs welcome tourists across different cities.',
    },
    {
      question: 'What\'s the difference between tourist and resident memberships?',
      answer: 'Tourist memberships are typically valid for 30–90 days and designed for temporary visitors. Resident memberships are annual and for Spanish residents or long-term visitors. Tourist memberships often have faster approval but may cost slightly more per day.',
    },
    {
      question: 'Is there an age limit beyond 18 or 21?',
      answer: 'Most clubs have no upper age limit beyond legal adulthood. Some upscale clubs may target adults 25+ but generally welcome older members. Age requirements exist only for the legal minimum (18+ or 21+), not maximums.',
    },
  ];

  return (
    <ArticleLayout
      title="How to Join a Cannabis Club in Spain — Step-by-Step Guide 2026"
      description="Learn the complete process: from researching clubs to getting approved for membership, plus what you'll need and practical tips for first-timers."
      heroImage="https://res.cloudinary.com/dhuc2wmhp/image/upload/f_auto,q_auto,w_1600,h_900,c_fill/cannabis-clubs-spain/hero-how-to-join"
      heroAlt="Cannabis club lounge in Spain"
      breadcrumb={[{ name: 'How to Join', href: '/how-to-join' }]}
    >
      <h2>What Are Cannabis Social Clubs?</h2>
      <p>
        Cannabis social clubs in Spain are private member associations where adults gather to consume cannabis in designated indoor spaces. They are not shops or bars—members pay annual or monthly fees to access a community space where cannabis consumption is permitted within private club boundaries. Clubs source cannabis from member growers or internal cultivation rather than operating as commercial retailers.
      </p>
      <p>
        These clubs became popular in Spain because they operate within the legal framework of private consumption. By keeping consumption exclusive to members in private spaces, clubs remain outside the commercial sales prohibition. Most clubs emphasize community values: responsible consumption, social interaction, and avoiding public visibility.
      </p>
      <p>
        Today, Spain has hundreds of cannabis clubs across major cities. Barcelona leads with 50+ clubs, while secondary cities like Valencia, Seville, and Málaga have 10–50 clubs each. Clubs range from intimate gatherings (10–20 members) to large professional establishments (100+ members) with premium amenities.
      </p>

      <h2>Step-by-Step Process for Joining a Cannabis Club</h2>

      <h3>Step 1: Research Clubs in Your Target City</h3>
      <p>
        Start by identifying clubs in the city you're visiting. Use online resources, social media (Instagram, Google reviews), or ask locals. Look for clubs that explicitly welcome tourists if you're a visitor. Read recent reviews to assess reputation, membership fees, and member experience. Tourist-friendly clubs typically advertise their openness to visitors.
      </p>
      <p>
        For Barcelona, see our <Link href="/barcelona" className="font-semibold text-green-700 hover:text-green-800">complete Barcelona cannabis clubs guide</Link>. For other cities, check club websites and social media profiles for contact information and membership requirements.
      </p>

      <h3>Step 2: Contact the Club</h3>
      <p>
        Reach out to your chosen club via their preferred contact method—typically WhatsApp, email, phone, or their website. Be clear about whether you're a tourist or resident. Tourist inquiries often get prioritized for faster processing. Provide basic information: name, age, nationality (if non-Spanish), and visit dates.
      </p>
      <p>
        Have specific questions ready: membership fee, approval timeline, required documentation, age requirements, and house rules. Professional clubs respond within 24 hours. Smaller clubs may take 1–2 days. If a club doesn't respond, move to your next choice.
      </p>

      <h3>Step 3: Complete the Membership Application</h3>
      <p>
        Clubs will provide an application form—typically a simple online form or WhatsApp questionnaire. You'll be asked for: name, date of birth, nationality, contact information, and sometimes reason for joining. Some clubs ask about your cannabis experience or substance use history.
      </p>
      <p>
        If a club requires a sponsor (current member reference), they'll ask you to provide a sponsor's name or contact. Many tourist-friendly clubs skip this requirement. Spanish language clubs may have forms in Spanish, but tourist clubs usually offer English versions.
      </p>

      <h3>Step 4: Wait for Verification and Approval</h3>
      <p>
        The club will review your application and verify information. This typically takes 24–72 hours for residents, and as little as a few hours for tourists. Some clubs offer instant approval for tourists with valid ID. You'll receive approval notification via email, WhatsApp, or text.
      </p>
      <p>
        Approval confirmation usually includes: membership details, club address, opening hours, your assigned membership number (if applicable), and house rules. Some clubs send a membership card; others just provide membership information.
      </p>

      <h3>Step 5: Complete Payment and Make Your First Visit</h3>
      <p>
        Most clubs request payment upon arrival or via bank transfer/PayPal before your first visit. Bring your approved membership details and valid ID to your first visit. Arrive during posted operating hours—don't show up outside hours expecting entry.
      </p>
      <p>
        At the door, present your membership confirmation and ID. The staff will verify you in their system and grant access. First visits typically include a brief orientation about house rules: consumption areas, guest policies, payment methods, and operational guidelines. Many clubs offer new member tours.
      </p>

      <h2>What You'll Need: Documentation Requirements</h2>
      <p>
        <strong>Valid ID (mandatory):</strong> Passport, national ID card, or driver's license proving your identity and age (18+ or 21+ depending on club). Clubs will not admit you without this.
      </p>
      <p>
        <strong>Age confirmation (18+ or 21+):</strong> Your ID must clearly show your date of birth. Some upscale clubs require 21+; most accept 18+. This is non-negotiable.
      </p>
      <p>
        <strong>Proof of residence (sometimes):</strong> Some clubs ask for a recent utility bill, lease agreement, or residency certificate. This is more common for resident memberships than tourist memberships. Tourist clubs rarely require this.
      </p>
      <p>
        <strong>Payment method:</strong> Have cash, debit card, or credit card ready. Most clubs accept all three. Some tourist clubs prefer cash to simplify transactions.
      </p>
      <p>
        <strong>Contact information:</strong> A valid phone number and email address. Clubs use this for confirmations, house rule updates, and occasional promotions.
      </p>

      <h2>Membership Fees by City: Price Comparison Table</h2>
      <table className="w-full border-collapse my-6 text-sm">
        <thead>
          <tr className="border-b-2 border-gray-300">
            <th className="text-left py-3 px-4 font-bold">City</th>
            <th className="text-left py-3 px-4 font-bold">Annual Membership</th>
            <th className="text-left py-3 px-4 font-bold">Tourist (30–90 days)</th>
            <th className="text-left py-3 px-4 font-bold">Entry Fee (if applicable)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4">Barcelona</td>
            <td className="py-3 px-4">€20–€50</td>
            <td className="py-3 px-4">€20–€40</td>
            <td className="py-3 px-4">None (included in membership)</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4">Valencia</td>
            <td className="py-3 px-4">€20–€50</td>
            <td className="py-3 px-4">€20–€40</td>
            <td className="py-3 px-4">€5–€10 per visit (some clubs)</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4">Málaga & Costa del Sol</td>
            <td className="py-3 px-4">€15–€30</td>
            <td className="py-3 px-4">€15–€25</td>
            <td className="py-3 px-4">€5 per visit (some clubs)</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4">Seville</td>
            <td className="py-3 px-4">€25–€30</td>
            <td className="py-3 px-4">€25–€30</td>
            <td className="py-3 px-4">None (included in registration)</td>
          </tr>
          <tr>
            <td className="py-3 px-4">Ibiza</td>
            <td className="py-3 px-4">€10–€20</td>
            <td className="py-3 px-4">€10–€20</td>
            <td className="py-3 px-4">None</td>
          </tr>
        </tbody>
      </table>

      <p>
        <em>Note: Prices vary significantly by individual club. Premium clubs may charge 2–3x these ranges. Tourist-friendly clubs often offer discounted rates for short-term visitors. Always confirm pricing before applying.</em>
      </p>

      <h2>Tips for First-Timers</h2>
      <p>
        <strong>Arrive prepared mentally:</strong> Your first club visit might feel unfamiliar. Clubs vary in atmosphere—some are casual lounges, others are social hubs with games or events. Observe house rules and respect member boundaries. Most clubs are welcoming to newcomers; regulars understand first-time nervousness.
      </p>
      <p>
        <strong>Go during busy hours:</strong> Visit during afternoon or evening hours (typically 18:00–22:00) when clubs are active. You'll meet other members, get better orientation, and feel less uncomfortable. Visiting alone at odd hours can feel isolating.
      </p>
      <p>
        <strong>Bring cash:</strong> Many clubs accept cards, but cash is safest. Some smaller clubs only accept cash. €50–€100 is typically sufficient for membership, purchases, and any incidental costs.
      </p>
      <p>
        <strong>Ask about house rules immediately:</strong> Cannabis consumption areas, guest policies, photography policies, and behavioral expectations. Most clubs have posted rules, but asking staff clarifies any ambiguity.
      </p>
      <p>
        <strong>Don't bring your own cannabis:</strong> Most clubs prohibit outside consumption materials. Club policies focus on consuming products sourced within the club. Bringing outside cannabis can result in ejection or membership revocation.
      </p>
      <p>
        <strong>Respect the community:</strong> Cannabis clubs are communities, not just transaction points. Being respectful to staff and other members improves your experience significantly. Many clubs feature regular members and events; building relationships enhances your visits.
      </p>
      <p>
        <strong>Use the club's cannabis, not street sources:</strong> Never attempt to buy cannabis outside the club or from street dealers. This crosses into illegal trafficking and carries severe penalties. Clubs exist specifically to provide legal consumption alternatives.
      </p>

      <h2>Tourist vs. Resident Memberships</h2>
      <p>
        <strong>Tourist memberships</strong> are designed for visitors planning to stay 1–3 months in Spain. These memberships typically cost €15–€50 for 30–90 days of access. Most tourist clubs don't require residency proof, sponsor references, or complex applications. Approval is usually instant or within 24 hours. These are ideal for anyone visiting Spain for holidays or short-term travel.
      </p>
      <p>
        <strong>Resident memberships</strong> are annual memberships for Spanish residents or long-term visitors (typically requiring a residence permit or proof of Spanish address). These cost €20–€60 annually. Approval may take 3–7 days as clubs verify residency. Residents often get member discounts, access to exclusive events, and priority booking at premium clubs.
      </p>
      <p>
        Some clubs offer month-to-month memberships for extended visitors staying 3–12 months. These bridge tourist and resident memberships with flexible terms. Choose based on your visa status and intended stay duration.
      </p>

      <h2>Related Resources</h2>
      <p>
        Learn about cannabis laws protecting your consumption: <Link href="/cannabis-laws-spain" className="font-semibold text-green-700 hover:text-green-800">Complete guide to Spanish cannabis laws</Link>.
      </p>
      <p>
        Compare prices and costs across cities: <Link href="/prices" className="font-semibold text-green-700 hover:text-green-800">Cannabis club prices in Spain by city</Link>.
      </p>
      <p>
        Explore clubs in top cities: <Link href="/barcelona" className="font-semibold text-green-700 hover:text-green-800">Barcelona cannabis clubs</Link> and <Link href="/madrid" className="font-semibold text-green-700 hover:text-green-800">Madrid cannabis clubs</Link>.
      </p>

      <FAQSection faqs={faqs} title="Frequently Asked Questions About Joining Clubs" />
    </ArticleLayout>
  );
}

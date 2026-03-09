import type { Club } from "@/data/clubs";

function ClubCard({ club }: { club: Club }) {
  return (
    <div className="border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-gold)]/50 transition-colors bg-[var(--color-bg-card)]">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="font-[family-name:var(--font-fraunces)] text-xl font-bold text-[var(--color-text-primary)]">
            {club.name}
          </h3>
          <p className="text-sm text-[var(--color-text-muted)]">
            {club.neighborhood ? `${club.neighborhood}, ` : ""}{club.city}
          </p>
        </div>
        {club.rating && (
          <div className="flex-shrink-0 text-right">
            <div className="flex items-center gap-1">
              <span className="text-[var(--color-gold)] text-lg">★</span>
              <span className="font-bold text-[var(--color-text-primary)]">{club.rating}</span>
            </div>
            {club.reviewCount && (
              <p className="text-xs text-[var(--color-text-muted)]">{club.reviewCount} reviews</p>
            )}
          </div>
        )}
      </div>

      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
        {club.description}
      </p>

      {club.highlight && (
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-[var(--color-gold)]/10 text-[var(--color-gold)] text-xs font-semibold rounded-full border border-[var(--color-gold)]/20">
            {club.highlight}
          </span>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 text-sm">
        {club.hours && (
          <div>
            <span className="text-[var(--color-text-muted)] block text-xs uppercase tracking-wide">Hours</span>
            <span className="text-[var(--color-text-primary)] font-medium">{club.hours}</span>
          </div>
        )}
        <div>
          <span className="text-[var(--color-text-muted)] block text-xs uppercase tracking-wide">Age</span>
          <span className="text-[var(--color-text-primary)] font-medium">{club.ageRequirement}</span>
        </div>
        <div>
          <span className="text-[var(--color-text-muted)] block text-xs uppercase tracking-wide">Access</span>
          <span className="text-[var(--color-text-primary)] font-medium">{club.accessMethod}</span>
        </div>
        <div>
          <span className="text-[var(--color-text-muted)] block text-xs uppercase tracking-wide">Type</span>
          <span className="text-[var(--color-text-primary)] font-medium">{club.type}</span>
        </div>
      </div>

      {club.amenities && club.amenities.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {club.amenities.map((a) => (
            <span key={a} className="px-2 py-0.5 bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] text-xs rounded-full">
              {a}
            </span>
          ))}
        </div>
      )}

      {(club.phone || club.website) && (
        <div className="mt-4 pt-4 border-t border-[var(--color-border)] flex flex-wrap gap-3">
          {club.phone && (
            <a href={`tel:${club.phone}`} className="text-sm font-semibold text-[var(--color-forest)] dark:text-[var(--color-gold)] hover:underline">
              📞 {club.phone}
            </a>
          )}
          {club.website && (
            <a href={club.website} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[var(--color-forest)] dark:text-[var(--color-gold)] hover:underline">
              🌐 Website
            </a>
          )}
          {club.instagram && (
            <span className="text-sm text-[var(--color-text-muted)]">
              📷 {club.instagram}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// JSON-LD for each club (LocalBusiness schema)
function ClubSchema({ club }: { club: Club }) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: club.name,
    description: club.description,
    ...(club.address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: club.address,
        addressLocality: club.city,
        addressCountry: "ES",
      },
    }),
    ...(club.phone && { telephone: club.phone }),
    ...(club.website && { url: club.website }),
    ...(club.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: club.rating,
        bestRating: 5,
        ...(club.reviewCount && { reviewCount: club.reviewCount.replace(/[^0-9]/g, "") || "10" }),
      },
    }),
    ...(club.hours && {
      openingHours: club.hours,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ClubDirectoryProps {
  clubs: Club[];
  title?: string;
  showSchema?: boolean;
}

export default function ClubDirectory({ clubs, title, showSchema = true }: ClubDirectoryProps) {
  return (
    <section>
      {showSchema && clubs.map((club) => (
        <ClubSchema key={club.id} club={club} />
      ))}
      {title && (
        <h2 className="font-[family-name:var(--font-fraunces)] text-3xl font-bold mb-8">
          {title}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clubs.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </div>
    </section>
  );
}

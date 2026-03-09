import type { CityMeta } from "@/data/clubs";

export default function CityStats({ meta }: { meta: CityMeta }) {
  const stats = [
    { label: "Estimated Clubs", value: meta.clubCount },
    { label: "Avg. Membership", value: meta.avgMembership },
    { label: "Min. Age", value: meta.ageReq },
    { label: "Best For", value: meta.bestFor },
    { label: "Region", value: meta.region },
  ];

  return (
    <div className="bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-2xl p-6 mb-10 not-prose">
      <h3 className="font-[family-name:var(--font-fraunces)] text-lg font-bold mb-4 text-[var(--color-text-primary)]">
        Quick Facts — {meta.name}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div key={s.label}>
            <span className="text-xs uppercase tracking-wide text-[var(--color-text-muted)] block">{s.label}</span>
            <span className="text-sm font-semibold text-[var(--color-text-primary)]">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

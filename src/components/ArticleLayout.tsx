import Image from "next/image";
import Link from "next/link";
import { ArticleSchema, BreadcrumbSchema } from "./SchemaMarkup";
import CTA from "./CTA";

interface ArticleLayoutProps {
  title: string;
  description: string;
  heroImage: string;
  heroAlt: string;
  breadcrumb: { name: string; href: string }[];
  children: React.ReactNode;
  ctaVariant?: "invitation" | "guide" | "join";
  publishDate?: string;
}

export default function ArticleLayout({
  title,
  description,
  heroImage,
  heroAlt,
  breadcrumb,
  children,
  ctaVariant = "guide",
  publishDate = "2026-03-09",
}: ArticleLayoutProps) {
  const url = `https://cannabisclubsspain.com${breadcrumb[breadcrumb.length - 1]?.href || ""}`;
  const breadcrumbItems = [
    { name: "Home", url: "https://cannabisclubsspain.com" },
    ...breadcrumb.map((b) => ({
      name: b.name,
      url: `https://cannabisclubsspain.com${b.href}`,
    })),
  ];

  return (
    <>
      <ArticleSchema
        title={title}
        description={description}
        url={url}
        datePublished={publishDate}
        dateModified={publishDate}
        image={heroImage}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      {/* Hero */}
      <div className="relative h-[50vh] min-h-[400px] max-h-[600px] overflow-hidden">
        <Image
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-forest-dark)] via-[var(--color-forest-dark)]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--color-cream-dark)]/70 mb-4">
            <Link href="/" className="hover:text-[var(--color-gold)] transition-colors">
              Home
            </Link>
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                <Link href={b.href} className="hover:text-[var(--color-gold)] transition-colors">
                  {b.name}
                </Link>
              </span>
            ))}
          </nav>
          <h1 className="font-[family-name:var(--font-fraunces)] text-3xl md:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>
          <p className="mt-3 text-lg text-[var(--color-cream-dark)]/80 max-w-2xl">
            {description}
          </p>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="prose prose-lg max-w-none
          prose-headings:font-[family-name:var(--font-fraunces)]
          prose-headings:text-[var(--color-text-primary)]
          prose-p:text-[var(--color-text-secondary)]
          prose-p:leading-relaxed
          prose-a:text-[var(--color-forest)] prose-a:font-semibold prose-a:no-underline hover:prose-a:text-[var(--color-gold)]
          prose-strong:text-[var(--color-text-primary)]
          prose-li:text-[var(--color-text-secondary)]
        ">
          {children}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <CTA variant={ctaVariant} />
        </div>
      </article>
    </>
  );
}

import { Container } from "@/components/ui/container";

/** Gecentreerde sectiekop met eyebrow + titel + optionele subtitel. */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className ?? ""}`}>
      {eyebrow && (
        <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-600">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-brand-600">{subtitle}</p>
      )}
    </div>
  );
}

/** Donkere hero-kop voor binnenpagina's. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent-400/15 blur-3xl" />
      <Container className="relative py-16 lg:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-400">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 font-heading text-4xl font-bold leading-tight sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-200">
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}

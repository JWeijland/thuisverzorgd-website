import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/section";

export type LegalSection = { heading: string; body: string[] };

/** Opmaak voor juridische pagina's (privacy, voorwaarden, cookies). */
export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow="Juridisch" title={title} subtitle={intro} />
      <section className="py-16 lg:py-20">
        <Container className="max-w-3xl">
          <div className="rounded-2xl border border-accent-200 bg-accent-50 p-5 text-sm text-accent-700">
            Let op: dit is voorbeeldtekst voor het concept van Thuisverzorgd. Laat
            de definitieve teksten vóór livegang juridisch controleren.
          </div>
          <div className="mt-10 space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="font-heading text-xl font-bold text-brand-900">
                  {s.heading}
                </h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-brand-600">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

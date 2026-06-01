import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeader } from "@/components/ui/section";
import { IconCheck, IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Voor zorgorganisaties",
  description:
    "Werk samen met Thuisverzorgd. Zet flexibele, gecertificeerde buddies in voor lichte zorg en schaal eenvoudig op wanneer dat nodig is.",
};

export default function ZorgorganisatiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Voor zorgorganisaties"
        title="Flexibele capaciteit, zonder gedoe"
        subtitle="Zet via Thuisverzorgd gecertificeerde buddies in voor lichte zorg. Wij regelen matching en registratie — u houdt de regie."
      >
        <Button href="/contact" variant="accent" size="lg">
          Plan een kennismaking <IconArrowRight className="h-5 w-5" />
        </Button>
      </PageHero>

      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Voordelen"
            title="Waarom samenwerken met Thuisverzorgd"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                t: "Snel opschalen",
                d: "Een flexibele pool van buddies vangt pieken en personeelstekorten op.",
              },
              {
                t: "Gecertificeerd & veilig",
                d: "Buddies worden geverifieerd en ingedeeld op niveau, afgeleid van de Wet BIG.",
              },
              {
                t: "Eén aanspreekpunt",
                d: "Korte lijnen en duidelijke afspraken — u heeft altijd één vast contactpunt.",
              },
              {
                t: "WMO, PGB & WLZ",
                d: "Naadloze ondersteuning van verschillende financieringsvormen.",
              },
              {
                t: "Eén platform",
                d: "Aanvraag, match, uitvoering en verantwoording op één plek.",
              },
              {
                t: "Kwaliteit meetbaar",
                d: "Beoordelingen na elke taak geven continu inzicht in de kwaliteit.",
              },
            ].map((b) => (
              <div
                key={b.t}
                className="rounded-3xl border border-brand-100 bg-white p-7 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
                  <IconCheck className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-brand-900">
                  {b.t}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-600">
                  {b.d}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-brand-900 py-16 text-white">
        <Container className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="font-heading text-2xl font-bold">
              Benieuwd wat we voor uw organisatie kunnen betekenen?
            </h2>
            <p className="mt-2 text-brand-200">
              We denken graag mee. Mail naar partners@thuisverzorgd.nl.
            </p>
          </div>
          <Button href="/contact" variant="accent" size="lg" className="shrink-0">
            Neem contact op
          </Button>
        </Container>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeader } from "@/components/ui/section";
import { IconHeart, IconUsers, IconShield, IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Thuisverzorgd verbindt ouderen met buddies in de buurt. Lees over onze missie: meer mensen in de zorg, op een moderne en flexibele manier, met behoud van kwaliteit.",
};

export default function OverOnsPage() {
  return (
    <>
      <PageHero
        eyebrow="Over ons"
        title="Zorg dichterbij, voor iedereen"
        subtitle="De vraag naar zorg groeit hard, terwijl er steeds minder handen zijn. Thuisverzorgd brengt vraag en aanbod slim samen — flexibel, lokaal en met gewaarborgde kwaliteit."
      />

      <section className="py-20 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-600">
              Onze missie
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
              Meer mensen in de zorg, op een moderne manier
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-600">
              Naar verwachting stijgt de zorgvraag fors de komende jaren, terwijl
              het personeel krimpt. Wij maken het voor een nieuwe generatie
              aantrekkelijk om in de zorg te stappen: laagdrempelig, flexibel en
              betaald, met de mogelijkheid om door te groeien.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-brand-600">
              Zo helpen we ouderen langer en prettiger thuis te wonen, en geven we
              buddies waardevolle ervaring en inkomsten.
            </p>
          </div>
          <div className="grid gap-5">
            {[
              {
                icon: IconHeart,
                t: "Menselijk",
                d: "Echte aandacht en gezelschap staan centraal — geen anonieme zorg.",
              },
              {
                icon: IconUsers,
                t: "Lokaal",
                d: "Buddies helpen mensen bij hen in de buurt. Korte lijntjes, vertrouwde gezichten.",
              },
              {
                icon: IconShield,
                t: "Kwaliteit voorop",
                d: "Niveaus, verificatie en beoordelingen borgen veilige, goede zorg.",
              },
            ].map((v) => (
              <div
                key={v.t}
                className="flex gap-4 rounded-3xl border border-brand-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
                  <v.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-brand-900">{v.t}</h3>
                  <p className="mt-1 text-sm text-brand-600">{v.d}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-muted py-16">
        <Container className="text-center">
          <SectionHeader
            title="Word onderdeel van de beweging"
            subtitle="Of je nu wilt helpen of hulp nodig hebt — samen maken we de zorg toekomstbestendig."
          />
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/word-buddy" variant="accent" size="lg">
              Word buddy <IconArrowRight className="h-5 w-5" />
            </Button>
            <Button href="/hulp-aanvragen" variant="outline" size="lg">
              Hulp aanvragen
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}

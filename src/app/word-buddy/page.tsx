import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeader } from "@/components/ui/section";
import {
  IconEuro,
  IconClock,
  IconGraduation,
  IconMapPin,
  IconCheck,
  IconArrowRight,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Word buddy",
  description:
    "Meld je aan als buddy bij Thuisverzorgd. Verdien geld met flexibel werk, bouw zorgervaring op en help ouderen bij jou in de buurt.",
};

export default function WordBuddyPage() {
  return (
    <>
      <PageHero
        eyebrow="Voor buddies"
        title="Word buddy en verdien met zorg die ertoe doet"
        subtitle="Help ouderen bij jou in de buurt, op de momenten die jóu uitkomen. Perfect naast je studie of als bijbaan in de zorg."
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="#aanmelden" variant="accent" size="lg">
            Direct aanmelden <IconArrowRight className="h-5 w-5" />
          </Button>
          <Button
            href="/#kwaliteit"
            size="lg"
            className="bg-white/10 text-white hover:bg-white/20"
          >
            Bekijk de niveaus
          </Button>
        </div>
      </PageHero>

      {/* Voordelen */}
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Waarom buddy worden"
            title="Werk dat zich aanpast aan jouw leven"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: IconEuro,
                title: "Eerlijk verdienen",
                text: "Een vaste vergoeding per taak. Vooraf zie je precies wat je krijgt.",
              },
              {
                icon: IconClock,
                title: "Jij kiest je uren",
                text: "Stel je beschikbaarheid in en accepteer alleen wat past.",
              },
              {
                icon: IconGraduation,
                title: "Groei in de zorg",
                text: "Volg cursussen, stijg in niveau en bouw certificaten op.",
              },
              {
                icon: IconMapPin,
                title: "Altijd dichtbij",
                text: "Alleen taken binnen jouw zelfgekozen reisafstand.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-brand-900">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-600">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stappenplan */}
      <section className="bg-muted py-20 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Aanmelden"
            title="Zo word je buddy"
            subtitle="Binnen een paar stappen klaar om je eerste taak aan te nemen."
          />
          <ol className="mx-auto mt-14 max-w-2xl space-y-5">
            {[
              {
                t: "Meld je aan",
                d: "Vul je gegevens in en vertel ons wat je aanspreekt. Duurt een paar minuten.",
              },
              {
                t: "Verifieer je identiteit",
                d: "Een korte identiteitscheck zorgt dat cliënten je kunnen vertrouwen.",
              },
              {
                t: "Volg de Basis-Buddy cursus",
                d: "Leer de basis van veilige, prettige zorg. Daarna kun je direct starten.",
              },
              {
                t: "Neem je eerste taak aan",
                d: "Ontvang meldingen van hulpvragen dichtbij en pak op wat past.",
              },
            ].map((s, i) => (
              <li
                key={s.t}
                className="flex gap-5 rounded-2xl border border-brand-100 bg-white p-6 shadow-sm"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-700 font-heading font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-brand-900">
                    {s.t}
                  </h3>
                  <p className="mt-1 text-brand-600">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Aanmeldformulier */}
      <section id="aanmelden" className="py-20 lg:py-24">
        <Container className="max-w-2xl">
          <SectionHeader
            eyebrow="Aanmelden"
            title="Start jouw aanmelding"
            subtitle="Laat je gegevens achter — we nemen binnen één werkdag contact met je op."
          />
          <BuddyForm />
        </Container>
      </section>
    </>
  );
}

/* Eenvoudig aanmeldformulier (nog zonder backend-koppeling). */
function BuddyForm() {
  return (
    <form className="mt-10 space-y-5 rounded-3xl border border-brand-100 bg-white p-8 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Voornaam" name="voornaam" />
        <Field label="Achternaam" name="achternaam" />
      </div>
      <Field label="E-mailadres" name="email" type="email" />
      <Field label="Telefoonnummer" name="telefoon" type="tel" />
      <Field label="Woonplaats" name="woonplaats" />

      <div>
        <label className="block font-heading text-sm font-semibold text-brand-900">
          Wat spreekt je aan? (optioneel)
        </label>
        <textarea
          name="motivatie"
          rows={4}
          className="mt-2 w-full rounded-2xl border border-brand-200 px-4 py-3 text-brand-900 outline-none transition-colors focus:border-brand-500"
          placeholder="Bijv. ik studeer verpleegkunde en wil graag praktijkervaring opdoen…"
        />
      </div>

      <Button type="submit" variant="accent" size="lg" className="w-full">
        Verstuur aanmelding <IconCheck className="h-5 w-5" />
      </Button>
      <p className="text-center text-xs text-brand-400">
        Door te versturen ga je akkoord met onze voorwaarden en privacyverklaring.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-heading text-sm font-semibold text-brand-900"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-2 w-full rounded-2xl border border-brand-200 px-4 py-3 text-brand-900 outline-none transition-colors focus:border-brand-500"
      />
    </div>
  );
}

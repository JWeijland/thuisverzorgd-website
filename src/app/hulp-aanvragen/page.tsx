import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeader } from "@/components/ui/section";
import { FaqList } from "@/components/faq-list";
import { clientFaqs } from "@/lib/faqs";
import {
  IconHeart,
  IconShield,
  IconClock,
  IconCheck,
  IconArrowRight,
  IconUsers,
  IconIdCard,
  IconCamera,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Hulp aanvragen",
  description:
    "Vraag eenvoudig hulp aan voor jezelf of een naaste. Een betrouwbare buddy uit de buurt staat snel voor je klaar — met gegarandeerde kwaliteit.",
};

const taken = [
  "Gezelschap & een praatje",
  "Boodschappen doen",
  "Medicatie herinneren",
  "Hulp bij opstaan & aankleden",
  "Een maaltijd bereiden",
  "Samen wandelen",
  "Opruimen in huis",
  "Begeleiding naar een afspraak",
];

const screening = [
  {
    icon: IconIdCard,
    t: "Identiteit geverifieerd",
    d: "Bij aanmelding uploadt iedere buddy een geldig identiteitsbewijs. Zo weet u zeker dat de persoon voor uw deur ook écht is wie hij of zij zegt te zijn.",
  },
  {
    icon: IconShield,
    t: "VOG verplicht",
    d: "Geen enkele buddy gaat aan de slag zonder geldige Verklaring Omtrent het Gedrag (VOG). De overheid toetst zo of iemands verleden zorgwerk in de weg staat.",
  },
  {
    icon: IconCamera,
    t: "In- en uitchecken met selfie",
    d: "Bij aankomst en vertrek maakt de buddy een selfie in de app. U en uw familie zien precies wie er is geweest en hoe lang — volledige transparantie bij elk bezoek.",
  },
];

export default function HulpAanvragenPage() {
  return (
    <>
      <PageHero
        eyebrow="Voor cliënten & familie"
        title="Snel een vertrouwde buddy uit de buurt"
        subtitle="Of het nu gaat om gezelschap, boodschappen of hulp in huis — een grondig gescreende buddy staat vaak binnen tien minuten voor u klaar. Elke buddy is gecontroleerd met ID en VOG, en checkt bij elk bezoek in en uit met een selfie. Vaak (deels) vergoed via de Wmo."
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button href="#aanvraag" variant="accent" size="lg">
            Hulp aanvragen <IconArrowRight className="h-5 w-5" />
          </Button>
          <Button
            href="#veiligheid"
            size="lg"
            className="bg-white/10 text-white hover:bg-white/20"
          >
            <IconShield className="h-5 w-5" /> Zo screenen wij buddies
          </Button>
        </div>
      </PageHero>

      {/* Hoe het werkt */}
      <section className="py-20 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Zo werkt het"
            title="In een paar tikken geregeld"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: IconHeart,
                t: "Vertel wat u nodig heeft",
                d: "Kies een taak, het tijdstip en eventueel hoe vaak. U of een familielid doet de aanvraag.",
              },
              {
                icon: IconUsers,
                t: "Wij matchen een buddy",
                d: "Een passende, beschikbare buddy uit de buurt krijgt direct een melding en neemt de taak aan.",
              },
              {
                icon: IconClock,
                t: "Hulp staat voor de deur",
                d: "U ontvangt de naam en aankomsttijd. Na afloop kunt u de buddy beoordelen.",
              },
            ].map((s) => (
              <div
                key={s.t}
                className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-brand-900">
                  {s.t}
                </h3>
                <p className="mt-2 leading-relaxed text-brand-600">{s.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Taken */}
      <section className="bg-muted py-20 lg:py-24">
        <Container>
          <SectionHeader
            eyebrow="Waarmee kunnen we helpen?"
            title="Hulp voor elk moment van de dag"
            subtitle="Van een gezellig kopje koffie tot praktische ondersteuning in huis."
          />
          <ul className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
            {taken.map((t) => (
              <li
                key={t}
                className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-white px-5 py-4 shadow-sm"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-100 text-accent-700">
                  <IconCheck className="h-4 w-4" />
                </span>
                <span className="font-medium text-brand-800">{t}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Veiligheid & screening */}
      <section
        id="veiligheid"
        className="relative scroll-mt-24 overflow-hidden bg-brand-900 py-20 text-white lg:py-24"
      >
        <div className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent-400/15 blur-3xl" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-400">
              Veiligheid voorop
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
              Elke buddy is grondig gescreend
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-200">
              U laat iemand toe in uw huis, of dat van een naaste. Daarom screenen
              we elke buddy streng vóór de eerste taak — en blijven we meekijken bij
              elk bezoek.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {screening.map((s) => (
              <div
                key={s.t}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-500/20 text-accent-300">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-heading text-xl font-bold text-white">
                  {s.t}
                </h3>
                <p className="mt-2 leading-relaxed text-brand-200">{s.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Vergoeding / Wmo */}
      <section className="py-20 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-600">
              Vergoeding
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
              Vaak vergoed via de Wmo
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-600">
              In veel gevallen wordt hulp aan huis (deels) vergoed via de Wet
              maatschappelijke ondersteuning (Wmo) van uw gemeente. U hoeft het
              niet zelf uit te zoeken: onze app begeleidt u stap voor stap door de
              aanvraag, zodat u snel weet waar u recht op heeft.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Vaak (deels) vergoed via de Wmo",
                "De app helpt u bij de aanvraag, stap voor stap",
                "Ook mogelijk via pgb of particulier",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-700">
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="#aanvraag" variant="primary" size="lg">
                Hulp aanvragen <IconArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl shadow-brand-900/10">
            <Image
              src="/images/senior-koffie.jpg"
              alt="Lachende oudere vrouw met een kopje koffie"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {/* Vertrouwen */}
      <section className="py-20 lg:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-600">
              Veilig & betrouwbaar
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
              U bent in goede handen
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-600">
              U laat iemand toe in uw huis, of dat van een naaste. Daarom screenen
              we elke buddy streng vóór de eerste taak — met ID-controle en een
              verplichte VOG — en checkt de buddy bij élk bezoek in en uit met een
              selfie. Zo weet u altijd zeker wie er voor uw deur staat.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Identiteit gecontroleerd via ID-verificatie",
                "Verplichte VOG (Verklaring Omtrent het Gedrag)",
                "In- en uitchecken met selfie bij elk bezoek",
                "Familie kijkt live mee via een koppelcode",
                "Noodknop in de app voor directe hulp",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-brand-700">
                  <IconShield className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div id="aanvraag" className="scroll-mt-24 rounded-3xl bg-brand-900 p-8 text-white sm:p-10">
            <h3 className="font-heading text-2xl font-bold">Vraag hulp aan</h3>
            <p className="mt-2 text-brand-200">
              Laat uw gegevens achter, dan nemen we snel contact op om de juiste
              hulp te regelen.
            </p>
            <form className="mt-6 space-y-4">
              <input
                placeholder="Naam"
                className="w-full rounded-2xl border-0 bg-white/10 px-4 py-3 text-white placeholder:text-brand-300 outline-none focus:bg-white/20"
              />
              <input
                placeholder="Telefoonnummer"
                type="tel"
                className="w-full rounded-2xl border-0 bg-white/10 px-4 py-3 text-white placeholder:text-brand-300 outline-none focus:bg-white/20"
              />
              <input
                placeholder="Postcode"
                className="w-full rounded-2xl border-0 bg-white/10 px-4 py-3 text-white placeholder:text-brand-300 outline-none focus:bg-white/20"
              />
              <textarea
                rows={3}
                placeholder="Waarmee kunnen we helpen?"
                className="w-full rounded-2xl border-0 bg-white/10 px-4 py-3 text-white placeholder:text-brand-300 outline-none focus:bg-white/20"
              />
              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full"
              >
                Aanvraag versturen
              </Button>
            </form>
          </div>
        </Container>
      </section>

      {/* Veelgestelde vragen voor hulpzoekers */}
      <section id="faq" className="bg-muted py-20 lg:py-24">
        <Container className="max-w-3xl">
          <SectionHeader eyebrow="Veelgestelde vragen" title="Goed om te weten" />
          <div className="mt-12">
            <FaqList items={clientFaqs} />
          </div>
        </Container>
      </section>
    </>
  );
}

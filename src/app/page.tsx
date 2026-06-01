import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import {
  IconEuro,
  IconClock,
  IconShield,
  IconHeart,
  IconMapPin,
  IconGraduation,
  IconCheck,
  IconArrowRight,
  IconStar,
} from "@/components/icons";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <HowItWorks />
      <ForBuddies />
      <Quality />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}

/* ---------------------------------- Hero ---------------------------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      {/* Decoratieve gloed */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-700/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-accent-400/20 blur-3xl" />

      <Container className="relative grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-accent-300">
            <IconHeart className="h-4 w-4" /> Zorg uit de buurt, voor de buurt
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Zorg dichtbij,{" "}
            <span className="text-accent-400">voor elkaar geregeld</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-200">
            Zoek je hulp voor jezelf of een naaste? Een vertrouwde buddy uit de
            buurt staat snel voor je klaar. Wil je juist helpen? Word buddy,
            verdien bij en bouw zorgervaring op. Jij bepaalt — wij regelen de rest.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/word-buddy#aanmelden" variant="accent" size="lg">
              Word buddy <IconArrowRight className="h-5 w-5" />
            </Button>
            <Button
              href="/hulp-aanvragen"
              size="lg"
              className="bg-white/10 text-white hover:bg-white/20"
            >
              Ik zoek hulp
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-brand-200">
            <span className="flex items-center gap-1.5">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4 text-accent-400" />
                ))}
              </span>
              4,9 / 5
            </span>
            <span>· 1.200+ buddies actief</span>
          </div>
        </div>

        {/* App-kaartje als visual */}
        <div className="relative mx-auto w-full max-w-sm">
          <TaskCard />
        </div>
      </Container>
    </section>
  );
}

/** Visuele weergave van een binnenkomende taak (zoals in de app). */
function TaskCard() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-brand-900/40">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700">
          Nieuwe taak dichtbij
        </span>
        <span className="text-xs text-brand-400">nu</span>
      </div>

      <h3 className="mt-4 font-heading text-xl font-bold text-brand-900">
        Gezelschap & wandeling
      </h3>
      <p className="mt-1 text-sm text-brand-500">
        Samen koffie en een rondje door het park.
      </p>

      <dl className="mt-5 grid grid-cols-3 gap-3 text-center">
        <div className="rounded-2xl bg-brand-50 p-3">
          <dt className="text-xs text-brand-500">Afstand</dt>
          <dd className="mt-1 font-heading font-bold text-brand-900">1,2 km</dd>
        </div>
        <div className="rounded-2xl bg-brand-50 p-3">
          <dt className="text-xs text-brand-500">Niveau</dt>
          <dd className="mt-1 font-heading font-bold text-brand-900">1</dd>
        </div>
        <div className="rounded-2xl bg-accent-50 p-3">
          <dt className="text-xs text-accent-700">Verdienste</dt>
          <dd className="mt-1 font-heading font-bold text-accent-700">€24</dd>
        </div>
      </dl>

      <button className="mt-5 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent-400 font-heading font-semibold text-brand-900 transition-colors hover:bg-accent-500 hover:text-white">
        <IconCheck className="h-5 w-5" /> Taak aannemen
      </button>
    </div>
  );
}

/* -------------------------------- Trust bar ------------------------------- */

function TrustBar() {
  const stats = [
    { value: "1.200+", label: "actieve buddies" },
    { value: "15.000+", label: "uitgevoerde taken" },
    { value: "4,9/5", label: "gemiddelde beoordeling" },
    { value: "< 10 min", label: "gemiddelde matchtijd" },
  ];
  return (
    <section className="border-b border-brand-100 bg-white">
      <Container className="grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-heading text-3xl font-bold text-brand-700">
              {s.value}
            </div>
            <div className="mt-1 text-sm text-brand-500">{s.label}</div>
          </div>
        ))}
      </Container>
    </section>
  );
}

/* ------------------------------ How it works ------------------------------ */

function HowItWorks() {
  const steps = [
    {
      icon: IconMapPin,
      title: "Hulpvraag verschijnt",
      text: "Een oudere bij jou in de buurt vraagt hulp. Je krijgt direct een melding met afstand, niveau en wat je verdient.",
    },
    {
      icon: IconCheck,
      title: "Jij neemt de taak aan",
      text: "Past het in je agenda? Met één tik accepteer je. De cliënt ziet meteen jouw naam en wanneer je er bent.",
    },
    {
      icon: IconHeart,
      title: "Help & verdien",
      text: "Je verleent de zorg, checkt in en rondt af. Je verdienste en ervaring worden automatisch bijgewerkt.",
    },
  ];
  return (
    <section id="hoe-het-werkt" className="bg-muted py-20 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="Hoe het werkt"
          title="In drie stappen aan de slag"
          subtitle="Geen ingewikkeld sollicitatietraject. Aanmelden, matchen, helpen — zo simpel is het."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-3xl border border-brand-100 bg-white p-8 shadow-sm"
            >
              <span className="absolute right-6 top-6 font-heading text-5xl font-bold text-brand-100">
                {i + 1}
              </span>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
                <step.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-brand-900">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-brand-600">{step.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ For buddies ------------------------------- */

function ForBuddies() {
  const perks = [
    {
      icon: IconEuro,
      title: "Verdien per taak",
      text: "Een eerlijke vergoeding voor elke taak die je oppakt. Direct inzicht in wat je verdient.",
    },
    {
      icon: IconClock,
      title: "Volledig flexibel",
      text: "Jij stelt je beschikbaarheid en maximale afstand in. Werk wanneer het jóu uitkomt.",
    },
    {
      icon: IconGraduation,
      title: "Bouw zorgervaring op",
      text: "Via in-app cursussen groei je door de niveaus en bouw je gecertificeerde ervaring op.",
    },
    {
      icon: IconMapPin,
      title: "Altijd dichtbij",
      text: "Alleen taken bij jou in de buurt, zodat je nooit ver hoeft te reizen.",
    },
  ];
  return (
    <section className="py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-600">
            Voor buddies
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
            Perfect naast je studie zorg & welzijn
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-600">
            Thuisverzorgd is gemaakt voor jonge mensen die iets willen betekenen
            én willen verdienen. Je doet praktijkervaring op die meetelt voor je
            toekomst in de zorg.
          </p>
          <div className="mt-8">
            <Button href="/word-buddy#aanmelden" variant="primary" size="lg">
              Aanmelden als buddy <IconArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                <perk.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-brand-900">
                {perk.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-600">
                {perk.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- Quality --------------------------------- */

function Quality() {
  const levels = [
    { level: "0", name: "Basis Buddy", desc: "Gezelschap, boodschappen, medicatie herinneren" },
    { level: "1", name: "Buddy+", desc: "Helpen met opstaan, aankleden en maaltijden" },
    { level: "2", name: "Zorgondersteuning", desc: "Persoonlijke verzorging en medicatietoezicht" },
    { level: "3", name: "Helpende", desc: "Volledige ADL, medicatie toedienen, wondzorg" },
  ];
  return (
    <section id="kwaliteit" className="bg-brand-900 py-20 text-white lg:py-28">
      <Container className="grid gap-14 lg:grid-cols-2">
        <div>
          <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-400">
            Kwaliteit & vertrouwen
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold sm:text-4xl">
            Buddies weten precies wat ze mogen
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-200">
            Onze niveaus zijn afgeleid van de Wet BIG. Buddies krijgen alleen
            taken die passen bij hun niveau en certificering. Zo weet jij als
            cliënt of familielid zeker dat je in veilige handen bent.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Geverifieerde identiteit van elke buddy",
              "Niveaus gekoppeld aan opleiding & certificaten",
              "Beoordelingen na elke taak",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-brand-100">
                <IconShield className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          {levels.map((l) => (
            <div
              key={l.level}
              className="flex items-center gap-5 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-400 font-heading text-lg font-bold text-brand-900">
                {l.level}
              </div>
              <div>
                <h3 className="font-heading font-bold text-white">{l.name}</h3>
                <p className="text-sm text-brand-200">{l.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ Testimonials ------------------------------ */

function Testimonials() {
  const reviews = [
    {
      quote:
        "Naast mijn opleiding verpleegkunde help ik nu twee ochtenden per week. Ik verdien bij én leer ontzettend veel.",
      name: "Sanne",
      role: "Buddy, 21 jaar",
    },
    {
      quote:
        "Binnen tien minuten stond er een vriendelijke student voor de deur om mijn moeder te helpen. Geweldig geregeld.",
      name: "Mark",
      role: "Zoon van cliënt",
    },
    {
      quote:
        "Eindelijk werk dat zich aanpast aan mijn rooster in plaats van andersom. En het voelt écht nuttig.",
      name: "Yusuf",
      role: "Buddy, 23 jaar",
    },
  ];
  return (
    <section className="bg-muted py-20 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="Ervaringen"
          title="Wat buddies en families zeggen"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-3xl border border-brand-100 bg-white p-7 shadow-sm"
            >
              <div className="flex text-accent-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-5 w-5" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 leading-relaxed text-brand-700">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-brand-100 pt-4">
                <div className="font-heading font-bold text-brand-900">
                  {r.name}
                </div>
                <div className="text-sm text-brand-500">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------- FAQ ----------------------------------- */

function Faq() {
  const faqs = [
    {
      q: "Heb ik een zorgdiploma nodig om buddy te worden?",
      a: "Nee. Na je aanmelding doe je een korte, betaalde inwerkcursus waarin we samen de basisregels en standaarden doornemen — zorg met een hart begint immers bij een goede start. Daarna ga je aan de slag als Basis Buddy met taken zoals gezelschap en boodschappen, en groei je via in-app cursussen door naar hogere niveaus. Heb je al een zorgdiploma? Dan stroom je versneld door.",
    },
    {
      q: "Hoeveel kan ik verdienen?",
      a: "Je verdient per uitgevoerde taak. Bij elke melding zie je vooraf precies wat de taak oplevert, zodat je nooit voor verrassingen komt te staan.",
    },
    {
      q: "Hoe bepaal ik wanneer ik werk?",
      a: "Volledig zelf. Je stelt je beschikbaarheid en maximale reisafstand in. Je krijgt alleen meldingen die daarbinnen passen.",
    },
    {
      q: "Hoe wordt de kwaliteit gewaarborgd?",
      a: "Elke buddy heeft een geverifieerde identiteit en een niveau dat is gekoppeld aan opleiding en certificering. Na elke taak volgt een beoordeling.",
    },
  ];
  return (
    <section id="faq" className="py-20 lg:py-28">
      <Container className="max-w-3xl">
        <SectionHeader eyebrow="Veelgestelde vragen" title="Goed om te weten" />
        <div className="mt-12 space-y-4">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-brand-100 bg-white p-6 shadow-sm"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-heading font-semibold text-brand-900">
                {f.q}
                <span className="ml-4 text-accent-500 transition-transform group-open:rotate-45">
                  <IconArrowRight className="h-5 w-5 rotate-90" />
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-brand-600">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- Final CTA ------------------------------- */

function FinalCta() {
  return (
    <section className="py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-700 px-8 py-14 text-center sm:px-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-400/20 blur-2xl" />
          <h2 className="relative font-heading text-3xl font-bold text-white sm:text-4xl">
            Klaar om het verschil te maken?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-brand-100">
            Word vandaag nog buddy en help iemand bij jou in de buurt. Of vraag
            hulp aan voor jezelf of een naaste.
          </p>
          <div className="relative mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/word-buddy#aanmelden" variant="accent" size="lg">
              Word buddy <IconArrowRight className="h-5 w-5" />
            </Button>
            <Button href="/hulp-aanvragen" variant="white" size="lg">
              Hulp aanvragen
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ Shared bits ------------------------------- */

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-600">
        {eyebrow}
      </span>
      <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-brand-600">{subtitle}</p>
      )}
    </div>
  );
}

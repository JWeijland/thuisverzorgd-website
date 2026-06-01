import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/ui/section";
import { IconPhone, IconMapPin, IconHeart } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Thuisverzorgd. We helpen je graag verder met vragen over buddy worden of hulp aanvragen.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We helpen je graag verder"
        subtitle="Vragen over buddy worden, hulp aanvragen of samenwerken? Neem gerust contact op."
      />

      <section className="py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          {/* Contactgegevens */}
          <div className="space-y-6">
            <ContactItem
              icon={IconPhone}
              title="Telefoon"
              lines={["085 - 000 00 00", "Ma t/m vr, 9:00 – 17:00"]}
            />
            <ContactItem
              icon={IconHeart}
              title="E-mail"
              lines={["hallo@thuisverzorgd.nl", "We reageren binnen één werkdag"]}
            />
            <ContactItem
              icon={IconMapPin}
              title="Werkgebied"
              lines={["Eerst Rotterdam & Amsterdam", "Daarna heel Nederland"]}
            />

            <div className="rounded-3xl bg-muted p-6">
              <h3 className="font-heading font-bold text-brand-900">
                Zorgorganisatie?
              </h3>
              <p className="mt-2 text-sm text-brand-600">
                Wil je als zorgorganisatie samenwerken met Thuisverzorgd? Mail
                ons via{" "}
                <span className="font-medium text-brand-700">
                  partners@thuisverzorgd.nl
                </span>
                .
              </p>
            </div>
          </div>

          {/* Formulier */}
          <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-sm">
            <h2 className="font-heading text-2xl font-bold text-brand-900">
              Stuur een bericht
            </h2>
            <form className="mt-6 space-y-5">
              <Input label="Naam" name="naam" />
              <Input label="E-mailadres" name="email" type="email" />
              <div>
                <label className="block font-heading text-sm font-semibold text-brand-900">
                  Bericht
                </label>
                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-brand-200 px-4 py-3 text-brand-900 outline-none transition-colors focus:border-brand-500"
                />
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Versturen
              </Button>
            </form>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  title,
  lines,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  lines: string[];
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="font-heading font-bold text-brand-900">{title}</h3>
        {lines.map((l) => (
          <p key={l} className="text-brand-600">
            {l}
          </p>
        ))}
      </div>
    </div>
  );
}

function Input({
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

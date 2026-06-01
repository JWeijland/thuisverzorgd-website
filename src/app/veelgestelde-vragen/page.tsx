import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/section";
import { FaqList } from "@/components/faq-list";
import { buddyFaqs, clientFaqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op veelgestelde vragen over Thuisverzorgd — voor buddies én voor cliënten en familie.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Veelgestelde vragen"
        title="Goed om te weten"
        subtitle="Antwoorden voor zowel buddies als hulpzoekers en hun familie. Staat je vraag er niet bij? Neem gerust contact op."
      />

      <section className="py-20 lg:py-24">
        <Container className="max-w-3xl space-y-16">
          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-900">
              Voor buddies
            </h2>
            <div className="mt-6">
              <FaqList items={buddyFaqs} />
            </div>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-brand-900">
              Voor cliënten & familie
            </h2>
            <div className="mt-6">
              <FaqList items={clientFaqs} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

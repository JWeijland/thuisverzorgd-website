import { IconArrowRight } from "@/components/icons";
import type { Faq } from "@/lib/faqs";

/** Accordeon-lijst met veelgestelde vragen. */
export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="space-y-4">
      {items.map((f) => (
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
  );
}

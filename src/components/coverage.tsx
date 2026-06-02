"use client";

import dynamic from "next/dynamic";
import { Container } from "@/components/ui/container";
import { locations } from "@/lib/locations";

// Leaflet werkt alleen in de browser → alleen client-side laden.
const CoverageMap = dynamic(() => import("@/components/coverage-map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-brand-50 text-sm text-brand-400">
      Kaart laden…
    </div>
  ),
});

const totalBuddies = locations.reduce((sum, l) => sum + l.buddies, 0);

const stats = [
  { value: `${locations.length}`, label: "steden" },
  { value: `${(Math.round(totalBuddies / 50) * 50).toLocaleString("nl-NL")}+`, label: "buddies actief" },
  { value: "9", label: "provincies" },
  { value: "wekelijks", label: "nieuwe locaties" },
];

export function Coverage() {
  return (
    <section className="bg-muted py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <span className="font-heading text-sm font-semibold uppercase tracking-wider text-accent-600">
              Waar we actief zijn
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-brand-900 sm:text-4xl">
              Thuisverzorgd bij jou in de buurt
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-600">
              We groeien snel door heel Nederland. Sleep over de kaart om te zien
              waar buddies al actief zijn.
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4 sm:text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-heading text-2xl font-bold text-brand-700">
                  {s.value}
                </dt>
                <dd className="text-sm text-brand-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 h-[400px] overflow-hidden rounded-3xl border border-brand-100 shadow-sm sm:h-[520px]">
          <CoverageMap />
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          {locations.map((l) => (
            <li
              key={l.name}
              className="rounded-full border border-brand-100 bg-white px-4 py-1.5 text-sm font-medium text-brand-700"
            >
              {l.name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

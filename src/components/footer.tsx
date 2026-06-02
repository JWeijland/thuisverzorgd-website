import Link from "next/link";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";
import { StoreBadges } from "@/components/store-badges";

const columns = [
  {
    title: "Platform",
    links: [
      { label: "Hoe het werkt", href: "/#hoe-het-werkt" },
      { label: "Word buddy", href: "/word-buddy" },
      { label: "Hulp aanvragen", href: "/hulp-aanvragen" },
      { label: "Kwaliteit & niveaus", href: "/#kwaliteit" },
    ],
  },
  {
    title: "Over ons",
    links: [
      { label: "Over Thuisverzorgd", href: "/over-ons" },
      { label: "Voor zorgorganisaties", href: "/zorgorganisaties" },
      { label: "Veelgestelde vragen", href: "/veelgestelde-vragen" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Juridisch",
    links: [
      { label: "Privacyverklaring", href: "/privacy" },
      { label: "Algemene voorwaarden", href: "/voorwaarden" },
      { label: "Cookiebeleid", href: "/cookies" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-brand-900 text-brand-100">
      <Container className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo light />
          <p className="max-w-xs text-sm leading-relaxed text-brand-200">
            Het platform dat ouderen en buddies in de buurt verbindt. Flexibele,
            betaalde zorg met gegarandeerde kwaliteit.
          </p>
          <StoreBadges />
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-200 transition-colors hover:text-accent-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-brand-800">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-sm text-brand-300 sm:flex-row">
          <p>© {2026} Thuisverzorgd. Alle rechten voorbehouden.</p>
          <p>Gemaakt met zorg in Nederland 🇳🇱</p>
        </Container>
      </div>
    </footer>
  );
}

import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Cookiebeleid",
  description: "Hoe Thuisverzorgd cookies gebruikt.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookiebeleid"
      intro="Thuisverzorgd gebruikt cookies om de website goed te laten werken en te verbeteren."
      sections={[
        {
          heading: "Wat zijn cookies?",
          body: [
            "Cookies zijn kleine tekstbestanden die op je apparaat worden opgeslagen wanneer je onze website bezoekt.",
          ],
        },
        {
          heading: "Welke cookies gebruiken we?",
          body: [
            "Functionele cookies die nodig zijn om de website te laten werken, en — met jouw toestemming — analytische cookies om de website te verbeteren.",
          ],
        },
        {
          heading: "Cookies beheren",
          body: [
            "Je kunt cookies altijd verwijderen of blokkeren via de instellingen van je browser.",
          ],
        },
      ]}
    />
  );
}

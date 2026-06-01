import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "De voorwaarden voor het gebruik van Thuisverzorgd.",
};

export default function VoorwaardenPage() {
  return (
    <LegalPage
      title="Algemene voorwaarden"
      intro="Deze voorwaarden gelden voor het gebruik van het platform van Thuisverzorgd door cliënten, familieleden en buddies."
      sections={[
        {
          heading: "1. Over het platform",
          body: [
            "Thuisverzorgd is een platform dat hulpvragen van ouderen koppelt aan buddies die lichte zorg verlenen. Thuisverzorgd faciliteert de match en de afhandeling.",
          ],
        },
        {
          heading: "2. Buddies",
          body: [
            "Buddies mogen uitsluitend taken uitvoeren die passen bij hun niveau en certificering. Buddies verbinden zich aan zorgvuldig en respectvol handelen.",
          ],
        },
        {
          heading: "3. Cliënten",
          body: [
            "Cliënten en hun familieleden zorgen voor juiste informatie bij een aanvraag, zodat de juiste hulp geboden kan worden.",
          ],
        },
        {
          heading: "4. Betaling",
          body: [
            "Voor uitgevoerde taken geldt een vooraf inzichtelijke vergoeding. De afhandeling van betalingen verloopt via het platform, of via de aangesloten thuiszorgorganisatie.",
          ],
        },
        {
          heading: "5. Aansprakelijkheid",
          body: [
            "Thuisverzorgd spant zich in voor een veilige en betrouwbare dienst, maar is niet aansprakelijk voor schade behoudens opzet of grove nalatigheid.",
          ],
        },
      ]}
    />
  );
}

import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description: "Hoe Thuisverzorgd omgaat met je persoonsgegevens.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacyverklaring"
      intro="Thuisverzorgd hecht veel waarde aan je privacy. Hieronder lees je welke gegevens we verwerken en waarom."
      sections={[
        {
          heading: "Welke gegevens verwerken we?",
          body: [
            "We verwerken gegevens die je zelf aan ons verstrekt, zoals je naam, contactgegevens en — bij buddies — verificatie- en certificeringsgegevens.",
            "Daarnaast verwerken we gegevens die nodig zijn om hulpvragen en buddies te koppelen, zoals locatie en beschikbaarheid.",
          ],
        },
        {
          heading: "Waarvoor gebruiken we je gegevens?",
          body: [
            "We gebruiken je gegevens om het platform te laten werken: het matchen van hulpvragen, het waarborgen van kwaliteit en het afhandelen van betalingen.",
          ],
        },
        {
          heading: "Hoe lang bewaren we gegevens?",
          body: [
            "We bewaren je gegevens niet langer dan noodzakelijk voor de doelen waarvoor ze zijn verzameld, of zolang de wet ons verplicht.",
          ],
        },
        {
          heading: "Je rechten",
          body: [
            "Je hebt het recht om je gegevens in te zien, te corrigeren of te laten verwijderen. Neem hiervoor contact op via hallo@thuisverzorgd.nl.",
          ],
        },
      ]}
    />
  );
}

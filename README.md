# Thuisverzorgd — website

Marketingwebsite voor **Thuisverzorgd**, het platform dat ouderen en buddies in de
buurt verbindt ("Uber Eats voor lichte zorg"). De site richt zich vooral op jonge
mensen die buddy willen worden, en op cliënten/familie die hulp zoeken.

Gebouwd met **Next.js 16** (App Router), **React 19**, **TypeScript** en
**Tailwind CSS v4**.

## Lokaal draaien

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Beschikbare scripts

| Commando        | Wat het doet                     |
| --------------- | -------------------------------- |
| `npm run dev`   | Ontwikkelserver met hot reload   |
| `npm run build` | Productie-build                  |
| `npm run start` | Draait de productie-build lokaal |
| `npm run lint`  | ESLint                           |

## Structuur

```
src/
├── app/                  # Pagina's (App Router)
│   ├── page.tsx          # Homepage
│   ├── word-buddy/       # Aanmelden als buddy
│   ├── hulp-aanvragen/   # Hulp aanvragen (cliënt/familie)
│   ├── contact/          # Contact
│   ├── over-ons/         # Over ons
│   ├── zorgorganisaties/ # B2B
│   ├── privacy|voorwaarden|cookies/   # Juridisch
│   ├── layout.tsx        # Root layout (header/footer, fonts)
│   ├── globals.css       # Design-systeem (kleuren, fonts)
│   └── icon.svg          # Favicon
└── components/
    ├── header.tsx, footer.tsx, logo.tsx, icons.tsx
    └── ui/               # Button, Container, Section
```

## Huisstijl

- **Navy-blauw** (`--color-brand-*`) en **fris groen** (`--color-accent-*`)
- Koppen: **Montserrat** · Hoofdtekst: **Open Sans**
- Kleuren centraal aanpasbaar in [`src/app/globals.css`](src/app/globals.css)

## Online zetten (Vercel)

1. Push deze map naar een GitHub-repository.
2. Ga naar [vercel.com](https://vercel.com) → **Add New… → Project** → kies de repo.
3. Vercel detecteert Next.js automatisch — klik **Deploy**. Klaar.

> Let op: de contact- en aanmeldformulieren zijn nog niet aan een backend
> gekoppeld (ze versturen nog niets). Dat is een logische volgende stap.

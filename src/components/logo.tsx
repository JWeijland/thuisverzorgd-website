import Link from "next/link";

type LogoProps = {
  /** Toon alleen het icoon zonder tekst */
  iconOnly?: boolean;
  /** Gebruik lichte kleuren (voor donkere achtergrond) */
  light?: boolean;
  className?: string;
};

/**
 * Thuisverzorgd-logo: een huis met daarin een persoon en een hartje.
 * Geïnspireerd op het "huis met persoon"-concept, in navy + groen.
 */
export function Logo({ iconOnly = false, light = false, className }: LogoProps) {
  const navy = light ? "#ffffff" : "#1a4878";
  const green = "#8dc93f";

  return (
    <Link
      href="/"
      aria-label="Thuisverzorgd home"
      className={`inline-flex items-center gap-2.5 ${className ?? ""}`}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        {/* Dak */}
        <path
          d="M6 22 L24 7 L42 22"
          stroke={navy}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Muren */}
        <path
          d="M10 21 V40 H38 V21"
          stroke={navy}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Persoon: hoofd */}
        <circle cx="24" cy="26" r="3.6" fill={navy} />
        {/* Persoon: lichaam */}
        <path
          d="M17.5 40 C17.5 34.5 20.4 31.5 24 31.5 C27.6 31.5 30.5 34.5 30.5 40 Z"
          fill={navy}
        />
        {/* Hartje boven de persoon */}
        <path
          d="M24 19.6 C23 17.6 19.8 18 19.8 20.6 C19.8 22.4 24 25 24 25 C24 25 28.2 22.4 28.2 20.6 C28.2 18 25 17.6 24 19.6 Z"
          fill={green}
        />
      </svg>

      {!iconOnly && (
        <span className="font-heading text-xl font-bold tracking-tight">
          <span style={{ color: navy }}>Thuis</span>
          <span style={{ color: green }}>verzorgd</span>
        </span>
      )}
    </Link>
  );
}

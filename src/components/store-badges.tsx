import Link from "next/link";
import { cn } from "@/lib/utils";

function AppleIcon() {
  return (
    <svg viewBox="0 0 384 512" className="h-7 w-7 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function GooglePlayIcon() {
  return (
    <svg viewBox="0 0 512 512" className="h-7 w-7 shrink-0" aria-hidden="true">
      <path fill="#00D2FF" d="M47 0C34 6.8 26 19.2 26 35.4v441.3c0 16.1 8 28.6 21 35.4l256.6-256L47 0z" />
      <path fill="#00E676" d="M325.3 234.3 47 0l1 .5 280.4 161-3.1 72.8z" />
      <path fill="#FFCE00" d="M385.4 174.4 325.3 234.3l-3.1 21.7 3.1 21.7 60.1 59.9c27.7-15.7 27.7-41.6 1.3-67.1l-1.3-95.8z" />
      <path fill="#FF3D44" d="M325.3 277.7 48 511.5c13 6.7 27.6 6.2 44.9-3.5l292.5-167.9-60.1-62.4z" />
    </svg>
  );
}

/** App Store + Google Play download-badges. */
export function StoreBadges({ className }: { className?: string }) {
  const badge =
    "flex items-center gap-3 rounded-xl bg-black px-4 py-2.5 text-white ring-1 ring-white/15 transition-transform hover:scale-[1.03]";

  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row", className)}>
      <Link href="#download" aria-label="Download in de App Store" className={badge}>
        <AppleIcon />
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-wide text-white/80">
            Download in de
          </span>
          <span className="font-heading text-lg font-semibold">App Store</span>
        </span>
      </Link>

      <Link
        href="#download"
        aria-label="Ontdek het op Google Play"
        className={badge}
      >
        <GooglePlayIcon />
        <span className="flex flex-col leading-tight">
          <span className="text-[10px] uppercase tracking-wide text-white/80">
            Ontdek het op
          </span>
          <span className="font-heading text-lg font-semibold">Google Play</span>
        </span>
      </Link>
    </div>
  );
}

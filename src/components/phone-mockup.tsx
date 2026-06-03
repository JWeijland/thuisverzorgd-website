import Image from "next/image";
import { cn } from "@/lib/utils";

/** Natuurlijke afmetingen van de transparante telefoon-renders. */
const PHONE_W = 1342;
const PHONE_H = 2758;

export type Phone = {
  src: string;
  alt: string;
  /** Kort onderschrift onder de telefoon (optioneel). */
  caption?: string;
};

/** Eén losse, transparante telefoon-render met zachte slagschaduw. */
export function PhoneMockup({
  src,
  alt,
  priority,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={PHONE_W}
      height={PHONE_H}
      priority={priority}
      sizes="(max-width: 640px) 55vw, 240px"
      className={cn(
        "h-auto w-full select-none drop-shadow-2xl",
        className,
      )}
    />
  );
}

/**
 * Showcase van meerdere telefoons in een licht gefande rij.
 * Schuift horizontaal op smalle schermen en centreert wanneer alles past.
 * De middelste telefoon staat iets hoger voor een natuurlijke "fan".
 */
export function PhoneShowcase({
  phones,
  className,
}: {
  phones: Phone[];
  className?: string;
}) {
  const mid = (phones.length - 1) / 2;

  return (
    <div
      className={cn(
        "flex snap-x snap-mandatory items-end gap-6 overflow-x-auto pb-4 sm:justify-center sm:gap-5 lg:gap-8",
        // Schaduwruimte zodat de drop-shadow niet wordt afgekapt
        "-mx-5 px-5 sm:mx-0 sm:px-0",
        className,
      )}
    >
      {phones.map((phone, i) => {
        // Telefoons dichter bij het midden staan iets hoger.
        const lift = Math.round((mid - Math.abs(i - mid)) * 14);
        return (
          <figure
            key={phone.src}
            className="w-40 shrink-0 snap-center sm:w-36 lg:w-44"
            style={{ transform: `translateY(-${lift}px)` }}
          >
            <PhoneMockup src={phone.src} alt={phone.alt} priority={i === 0} />
            {phone.caption && (
              <figcaption className="mt-3 text-center text-sm font-medium text-brand-500">
                {phone.caption}
              </figcaption>
            )}
          </figure>
        );
      })}
    </div>
  );
}

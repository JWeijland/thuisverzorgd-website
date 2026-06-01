/**
 * Combineert classNames en filtert lege/false-waarden eruit.
 */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

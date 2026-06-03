"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { IconMenu, IconClose } from "@/components/icons";

const navLinks = [
  { label: "Hoe het werkt", href: "/#hoe-het-werkt" },
  { label: "Voor buddies", href: "/word-buddy" },
  { label: "Voor cliënten", href: "/hulp-aanvragen" },
  { label: "Kwaliteit", href: "/#kwaliteit" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /**
   * Klik je op een link naar de pagina waar je al bent (zonder #anker),
   * dan navigeert Next.js niet — we scrollen dan zelf netjes naar boven.
   */
  function handleNavClick(href: string) {
    return (e: React.MouseEvent) => {
      setOpen(false);
      if (href === pathname) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
  }

  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white/90 backdrop-blur">
      <Container className="flex h-18 items-center justify-between py-3">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleNavClick(link.href)}
              className="text-sm font-medium text-brand-800 transition-colors hover:text-accent-500"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href="/hulp-aanvragen"
            variant="outline"
            size="md"
            onClick={handleNavClick("/hulp-aanvragen")}
          >
            Hulp aanvragen
          </Button>
          <Button
            href="/word-buddy"
            variant="accent"
            size="md"
            onClick={handleNavClick("/word-buddy")}
          >
            Word buddy
          </Button>
        </div>

        {/* Mobiele toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-brand-800 hover:bg-brand-50 lg:hidden"
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </Container>

      {/* Mobiel menu */}
      {open && (
        <div className="border-t border-brand-100 bg-white lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick(link.href)}
                className="rounded-lg px-3 py-3 text-base font-medium text-brand-800 hover:bg-brand-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3">
              <Button
                href="/hulp-aanvragen"
                variant="outline"
                size="md"
                onClick={handleNavClick("/hulp-aanvragen")}
              >
                Hulp aanvragen
              </Button>
              <Button
                href="/word-buddy"
                variant="accent"
                size="md"
                onClick={handleNavClick("/word-buddy")}
              >
                Word buddy
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

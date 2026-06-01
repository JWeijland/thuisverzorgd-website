import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-28">
      <Container className="max-w-xl text-center">
        <p className="font-heading text-6xl font-bold text-accent-400">404</p>
        <h1 className="mt-4 font-heading text-3xl font-bold text-brand-900">
          Deze pagina bestaat niet
        </h1>
        <p className="mt-3 text-brand-600">
          Mogelijk is de pagina verplaatst of verwijderd. Ga terug naar de
          homepage of neem contact met ons op.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button href="/" variant="primary" size="lg">
            Naar de homepage
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact
          </Button>
        </div>
      </Container>
    </section>
  );
}

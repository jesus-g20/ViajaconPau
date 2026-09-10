import Link from "next/link";
import TripPlanningForm from "@/components/TripPlanningForm";

export default function PlanificaTuViaje() {
  return (
    <main className="min-h-screen px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-semibold text-[var(--teal-dark)] transition hover:text-[var(--teal)]"
        >
          ← Volver al inicio
        </Link>

        <div className="mt-12 text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-[var(--teal)]">
            Empecemos
          </p>

          <h1 className="mt-4 text-4xl font-bold text-[var(--teal-dark)] md:text-5xl">
            Cuentanos sobre tu próximo viaje
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
            No necesitas tener todo decidido. Cuentanos lo que tienes en mente y
            nosotros te ayudamos a darle forma.
          </p>
        </div>
      </div>

      <TripPlanningForm />
    </main>
  );
}
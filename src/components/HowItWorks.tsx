export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-white px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-[var(--teal)]">
            Así de fácil
          </p>

          <h2 className="text-4xl font-bold text-[var(--teal-dark)] md:text-5xl">
            ¿Cómo funciona?
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[var(--foreground)]">
            Vos nos contás qué querés vivir y nosotros nos encargamos de darle
            forma a tu viaje.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--coral)] text-xl font-bold text-white">
              01
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[var(--teal-dark)]">
              Contanos sobre tu viaje
            </h3>

            <p className="mt-4 leading-relaxed text-[var(--foreground)]">
              Nos contás el destino, las fechas, tu presupuesto, tus intereses
              y cómo te gusta viajar.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--teal)] text-xl font-bold text-white">
              02
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[var(--teal-dark)]">
              Diseñamos tu viaje
            </h3>

            <p className="mt-4 leading-relaxed text-[var(--foreground)]">
              Investigamos y organizamos las mejores opciones de vuelos,
              hoteles, actividades y experiencias para vos.
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--gold)] text-xl font-bold text-[var(--foreground)]">
              03
            </div>

            <h3 className="mt-6 text-2xl font-bold text-[var(--teal-dark)]">
              Recibí tu itinerario
            </h3>

            <p className="mt-4 leading-relaxed text-[var(--foreground)]">
              Te entregamos tu viaje organizado para que tengás claro qué hacer,
              dónde ir y cómo aprovechar cada día.
            </p>
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href="/planifica-tu-viaje"
            className="inline-block rounded-full bg-[var(--coral)] px-7 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Empezá a planificar
          </a>
        </div>
      </div>
    </section>
  );
}
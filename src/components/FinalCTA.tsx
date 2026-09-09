export default function FinalCTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl rounded-3xl bg-[var(--teal-dark)] px-8 py-16 text-center">
        <p className="font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">
          Tu próxima aventura
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-bold text-white md:text-5xl">
          Tu próximo viaje empieza acá.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
          Contanos qué tenés en mente y nosotros nos encargamos de darle forma
          a una experiencia hecha para vos.
        </p>

        <a
          href="/planifica-tu-viaje"
          className="mt-8 inline-block rounded-full bg-[var(--coral)] px-8 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Planificá tu viaje
        </a>
      </div>
    </section>
  );
}
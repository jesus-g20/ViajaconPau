export default function Hero() {
  return (
    <section className="flex min-h-[72vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-[var(--teal)]">
        Viajes diseñados para vos
      </p>

      <h1 className="max-w-4xl text-5xl font-bold leading-tight text-[var(--teal-dark)] md:text-6xl">
        Tu viaje, a tu manera.
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--foreground)] md:text-xl">
        Diseñamos experiencias personalizadas según tus gustos, presupuesto y estilo.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="/planifica-tu-viaje"
          className="rounded-full bg-[var(--coral)] px-7 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Planificá tu viaje
        </a>

        <a
          href="#como-funciona"
          className="rounded-full border border-[var(--teal)] px-7 py-3 font-semibold text-[var(--teal-dark)] transition hover:bg-white"
        >
          Cómo funciona
        </a>
      </div>
    </section>
  );
}
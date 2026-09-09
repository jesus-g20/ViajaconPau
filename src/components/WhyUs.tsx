export default function WhyUs() {
  return (
    <section
      id="por-que-nosotros"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-[var(--teal)]">
            ¿Por qué Viaja con Pau?
          </p>

          <h2 className="text-4xl font-bold text-[var(--teal-dark)] md:text-5xl">
            No vendemos paquetes. Diseñamos tu viaje.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[var(--foreground)]">
            Cada viajero es diferente. Por eso creamos tu viaje desde cero
            según tu presupuesto, tus intereses y la forma en que querés viajar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <div className="mb-5 text-3xl text-[var(--coral)]">✦</div>

            <h3 className="text-xl font-bold text-[var(--teal-dark)]">
              100% personalizado
            </h3>

            <p className="mt-3 leading-relaxed">
              Tu itinerario se diseña alrededor de vos, tus gustos y tu manera
              de viajar.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <div className="mb-5 text-3xl text-[var(--coral)]">✦</div>

            <h3 className="text-xl font-bold text-[var(--teal-dark)]">
              A tu presupuesto
            </h3>

            <p className="mt-3 leading-relaxed">
              Buscamos opciones que tengan sentido y te ayuden a
              aprovechar mejor tu presupuesto.
            </p>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
            <div className="mb-5 text-3xl text-[var(--coral)]">✦</div>

            <h3 className="text-xl font-bold text-[var(--teal-dark)]">
              Sin horas de búsqueda
            </h3>

            <p className="mt-3 leading-relaxed">
              Investigamos, comparamos y organizamos los detalles para que
              podás enfocarte en disfrutar el viaje.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
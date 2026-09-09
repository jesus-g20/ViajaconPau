export default function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="max-w-4xl text-5xl font-bold">
        Tu viaje, a tu manera.
      </h1>

      <p className="mt-6 max-w-2xl text-lg">
        Diseñamos viajes personalizados según tus gustos, presupuesto y estilo.
      </p>

      <a
        href="#planifica"
        className="mt-8 rounded-full border px-6 py-3"
      >
        Planificá tu viaje
      </a>
    </section>
  );
}
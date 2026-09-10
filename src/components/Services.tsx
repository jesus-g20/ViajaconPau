export default function Services() {
  const services = [
    {
      icon: "✈️",
      title: "Vuelos",
      description:
        "Buscamos opciones que se adapten a tus fechas, presupuesto y preferencias.",
    },
    {
      icon: "🏨",
      title: "Hospedaje",
      description:
        "Encontramos alojamientos según tu estilo, ubicación y presupuesto.",
    },
    {
      icon: "🗺️",
      title: "Itinerarios",
      description:
        "Organizamos tus días para que aproveches el destino sin sentir que vas corriendo.",
    },
    {
      icon: "🎟️",
      title: "Actividades",
      description:
        "Seleccionamos experiencias y lugares que realmente coincidan con tus intereses.",
    },
    {
      icon: "🚆",
      title: "Transporte",
      description:
        "Te ayudamos a entender cómo moverte entre ciudades y dentro de cada destino.",
    },
    {
      icon: "🍽️",
      title: "Recomendaciones",
      description:
        "Restaurantes, barrios, lugares especiales y consejos para disfrutar mejor tu viaje.",
    },
  ];

  return (
    <section id="servicios" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-semibold uppercase tracking-[0.2em] text-[var(--teal)]">
            Vos elegís hasta dónde llegamos
          </p>

          <h2 className="text-4xl font-bold text-[var(--teal-dark)] md:text-5xl">
            Nos encargamos de los detalles
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[var(--foreground)]">
            Cada viaje es diferente. Te ayudamos con lo que necesitás, desde
            encontrar dónde hospedarte hasta diseñar tu experiencia completa
            día por día.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-black/10 bg-white p-7"
            >
              <span className="text-3xl">{service.icon}</span>

              <h3 className="mt-5 text-xl font-bold text-[var(--teal-dark)]">
                {service.title}
              </h3>

              <p className="mt-3 leading-relaxed text-[var(--foreground)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center text-center">
        <p className="font-semibold text-[var(--teal-dark)]">
            No tenés que elegir un paquete. Cuentanos que necesitas y diseñamos la
            experiencia alrededor de ti.
        </p>

        <a
            href="/planifica-tu-viaje"
            className="mt-6 inline-block rounded-full bg-[var(--coral)] px-7 py-3 font-semibold text-white transition hover:opacity-90"
        >
            Planificá tu viaje
        </a>
        </div>
      </div>
    </section>
  );
}
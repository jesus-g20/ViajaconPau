"use client";

import { useState } from "react";

const travelStyles = [
  "Relax",
  "Aventura",
  "Cultura",
  "Comida",
  "Naturaleza",
  "Vida nocturna",
  "Familiar",
  "Lujo",
];

const helpOptions = [
  "Vuelos",
  "Hospedaje",
  "Transporte",
  "Actividades",
  "Itinerario completo",
  "Recomendaciones",
];

export default function TripPlanningForm() {
  const [formData, setFormData] = useState({
    destination: "",
    departureCity: "",
    departureDate: "",
    returnDate: "",
    travelers: "",
    budget: "",
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [selectedHelp, setSelectedHelp] = useState<string[]>([]);
  const [flexibleDates, setFlexibleDates] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  }

  function toggleItem(
    item: string,
    selected: string[],
    setSelected: React.Dispatch<React.SetStateAction<string[]>>
  ) {
    if (selected.includes(item)) {
      setSelected(selected.filter((value) => value !== item));
    } else {
      setSelected([...selected, item]);
    }
  }

  function validateForm() {
    const newErrors: Record<string, string> = {};

    if (!formData.destination.trim()) {
      newErrors.destination = "Cuentanos a dónde quieres viajar.";
    }

    if (!formData.travelers) {
      newErrors.travelers = "Indica cuántas personas van a viajar.";
    } else if (Number(formData.travelers) < 1) {
      newErrors.travelers = "Debe viajar al menos una persona.";
    }

    if (!formData.name.trim()) {
      newErrors.name = "Ingresa tu nombre.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Ingresa tu correo electrónico.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Ingresa un correo electrónico válido.";
    }

    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "Ingresa tu número de WhatsApp.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    try {
        const response = await fetch("/api/trip-request", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            ...formData,
            flexibleDates,
            selectedStyles,
            selectedHelp,
        }),
        });

        const data = await response.json();

        if (!response.ok) {
        throw new Error(data.message || "Error al enviar la solicitud.");
        }

        console.log("Respuesta del servidor:", data);
    } catch (error) {
        console.error("Error enviando formulario:", error);
    }
    }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto mt-14 max-w-4xl space-y-12"
    >
      {/* TU VIAJE */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--teal-dark)]">
          Tu viaje
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* DESTINO */}
          <div>
            <label className="mb-2 block font-semibold">
              ¿A dónde querés viajar?
            </label>

            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="Ej. Japón, Italia, Colombia..."
              className={`w-full rounded-2xl border bg-white px-4 py-3 outline-none transition ${
                errors.destination
                  ? "border-[var(--coral)]"
                  : "border-black/10 focus:border-[var(--teal)]"
              }`}
            />

            {errors.destination && (
              <p className="mt-2 text-sm font-medium text-[var(--coral)]">
                {errors.destination}
              </p>
            )}
          </div>

          {/* CIUDAD DE SALIDA */}
          <div>
            <label className="mb-2 block font-semibold">
              ¿Desde dónde salen?
            </label>

            <input
              type="text"
              name="departureCity"
              value={formData.departureCity}
              onChange={handleChange}
              placeholder="Ej. San José, Costa Rica"
              className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[var(--teal)]"
            />
          </div>

          {/* FECHA DE SALIDA */}
          <div>
            <label className="mb-2 block font-semibold">
              Fecha de salida {flexibleDates && "(aproximada)"}
            </label>

            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[var(--teal)]"
            />
          </div>

          {/* FECHA DE REGRESO */}
          <div>
            <label className="mb-2 block font-semibold">
              Fecha de regreso {flexibleDates && "(aproximada)"}
            </label>

            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[var(--teal)]"
            />
          </div>

          {/* FECHAS FLEXIBLES */}
          <div className="md:col-span-2">
            <label className="flex cursor-pointer items-center gap-3">
              <input
                type="checkbox"
                checked={flexibleDates}
                onChange={(e) => setFlexibleDates(e.target.checked)}
                className="h-5 w-5 accent-[var(--teal)]"
              />

              <span className="font-medium">
                Soy flexible con las fechas
              </span>
            </label>
          </div>

          {/* VIAJEROS */}
          <div>
            <label className="mb-2 block font-semibold">
              ¿Cuántas personas viajan?
            </label>

            <input
              type="number"
              name="travelers"
              value={formData.travelers}
              onChange={handleChange}
              min="1"
              placeholder="Ej. 2"
              className={`w-full rounded-2xl border bg-white px-4 py-3 outline-none transition ${
                errors.travelers
                  ? "border-[var(--coral)]"
                  : "border-black/10 focus:border-[var(--teal)]"
              }`}
            />

            {errors.travelers && (
              <p className="mt-2 text-sm font-medium text-[var(--coral)]">
                {errors.travelers}
              </p>
            )}
          </div>

          {/* PRESUPUESTO */}
          <div>
            <label className="mb-2 block font-semibold">
              Presupuesto aproximado
            </label>

            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              placeholder="Ej. $2,000 por persona"
              className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[var(--teal)]"
            />
          </div>
        </div>
      </section>

      {/* ESTILO DE VIAJE */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--teal-dark)]">
          ¿Qué tipo de viaje imaginás?
        </h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {travelStyles.map((style) => {
            const isSelected = selectedStyles.includes(style);

            return (
              <button
                key={style}
                type="button"
                onClick={() =>
                  toggleItem(style, selectedStyles, setSelectedStyles)
                }
                className={`rounded-full border px-5 py-2 transition ${
                  isSelected
                    ? "border-[var(--teal)] bg-[var(--teal)] text-white"
                    : "border-black/10 bg-white hover:border-[var(--teal)]"
                }`}
              >
                {style}
              </button>
            );
          })}
        </div>
      </section>

      {/* AYUDA */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--teal-dark)]">
          ¿En qué querés que te ayudemos?
        </h2>

        <p className="mt-2 text-[var(--foreground)]">
          Podés elegir todo lo que necesités.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {helpOptions.map((option) => {
            const isSelected = selectedHelp.includes(option);

            return (
              <button
                key={option}
                type="button"
                onClick={() =>
                  toggleItem(option, selectedHelp, setSelectedHelp)
                }
                className={`rounded-full border px-5 py-2 transition ${
                  isSelected
                    ? "border-[var(--coral)] bg-[var(--coral)] text-white"
                    : "border-black/10 bg-white hover:border-[var(--coral)]"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </section>

      {/* DATOS PERSONALES */}
      <section>
        <h2 className="text-2xl font-bold text-[var(--teal-dark)]">
          Tus datos
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {/* NOMBRE */}
          <div>
            <label className="mb-2 block font-semibold">
              Nombre
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              className={`w-full rounded-2xl border bg-white px-4 py-3 outline-none transition ${
                errors.name
                  ? "border-[var(--coral)]"
                  : "border-black/10 focus:border-[var(--teal)]"
              }`}
            />

            {errors.name && (
              <p className="mt-2 text-sm font-medium text-[var(--coral)]">
                {errors.name}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="mb-2 block font-semibold">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nombre@email.com"
              className={`w-full rounded-2xl border bg-white px-4 py-3 outline-none transition ${
                errors.email
                  ? "border-[var(--coral)]"
                  : "border-black/10 focus:border-[var(--teal)]"
              }`}
            />

            {errors.email && (
              <p className="mt-2 text-sm font-medium text-[var(--coral)]">
                {errors.email}
              </p>
            )}
          </div>

          {/* WHATSAPP */}
          <div className="md:col-span-2">
            <label className="mb-2 block font-semibold">
              WhatsApp
            </label>

            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="+506 8888 8888"
              className={`w-full rounded-2xl border bg-white px-4 py-3 outline-none transition ${
                errors.whatsapp
                  ? "border-[var(--coral)]"
                  : "border-black/10 focus:border-[var(--teal)]"
              }`}
            />

            {errors.whatsapp && (
              <p className="mt-2 text-sm font-medium text-[var(--coral)]">
                {errors.whatsapp}
              </p>
            )}
          </div>

          {/* MENSAJE */}
          <div className="md:col-span-2">
            <label className="mb-2 block font-semibold">
              ¿Hay algo más que querás contarnos?
            </label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Contanos cualquier detalle, idea o preferencia..."
              className="w-full resize-none rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none transition focus:border-[var(--teal)]"
            />
          </div>
        </div>
      </section>

      {/* SUBMIT */}
      <div className="text-center">
        <button
          type="submit"
          className="rounded-full bg-[var(--coral)] px-8 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Enviar mi viaje
        </button>
      </div>
    </form>
  );
}
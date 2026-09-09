import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <a href="/" className="flex items-center">
        <Image
          src="/Viajaconpaulogo.png"
          alt="Viaja con Pau"
          width={90}
          height={90}
          priority
        />
      </a>

      <div className="flex gap-6 text-[var(--foreground)]">
        <a href="#como-funciona">Cómo funciona</a>
        <a href="#destinos">Destinos</a>
        <a href="#nosotros">Nosotros</a>
      </div>

      <a
        href="#planifica"
        className="rounded-full bg-[var(--coral)] px-5 py-2 font-semibold text-white transition hover:opacity-90"
      >
        Planificá tu viaje
      </a>
    </nav>
  );
}
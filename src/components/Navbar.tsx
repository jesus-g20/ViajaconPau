export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5">
      <div className="text-xl font-bold">
        Viaja con Pau
      </div>

      <div className="flex gap-6">
        <a href="#como-funciona">Cómo funciona</a>
        <a href="#planes">Planes</a>
        <a href="#destinos">Destinos</a>
        <a href="#nosotros">Nosotros</a>
      </div>

      <a
        href="#planifica"
        className="rounded-full border px-5 py-2"
      >
        Planificá tu viaje
      </a>
    </nav>
  );
}
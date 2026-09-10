"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative px-6 py-4 md:px-8">
      <div className="flex items-center justify-between">
        <a href="/">
          <Image
            src="/Viajaconpaulogo.png"
            alt="Viaja con Pau"
            width={90}
            height={90}
            priority
            className="h-16 w-16 md:h-[90px] md:w-[90px]"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#como-funciona">Cómo funciona</a>
          <a href="#destinos">Destinos</a>
          <a href="#nosotros">Nosotros</a>

          <a
            href="/planifica-tu-viaje"
            className="rounded-full bg-[var(--coral)] px-5 py-3 font-semibold text-white"
          >
            Planificá tu viaje
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-3xl text-[var(--teal-dark)] md:hidden"
          aria-label="Abrir menú"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="absolute left-0 top-full z-50 flex w-full flex-col gap-5 bg-[var(--cream)] px-6 pb-6 pt-4 shadow-md md:hidden">
          <a href="#como-funciona" onClick={() => setMenuOpen(false)}>
            Cómo funciona
          </a>

          <a href="#destinos" onClick={() => setMenuOpen(false)}>
            Destinos
          </a>

          <a href="#nosotros" onClick={() => setMenuOpen(false)}>
            Nosotros
          </a>

          <a
            href="/planifica-tu-viaje"
            className="w-fit rounded-full bg-[var(--coral)] px-5 py-3 font-semibold text-white"
          >
            Planificá tu viaje
          </a>
        </div>
      )}
    </nav>
  );
}
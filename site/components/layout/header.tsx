"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight, Phone, Calendar } from "lucide-react";
import { siteConfig } from "@/data/site-config";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Exames", href: "/#exames" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Coleta", href: "/#pontos-coleta" },
  { label: "Convênios", href: "/#convenios" },
  { label: "Preparos", href: "/#preparos" },
  { label: "Catálogo", href: "/exames" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-40">
      {/* Top bar - always dark blue */}
      <div className="bg-[#0B1B35] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs text-white/70">
          <span>{siteConfig.horario.diasUteis}: {siteConfig.horario.periodo1} / {siteConfig.horario.periodo2}</span>
          <a href={siteConfig.contato.telefoneLink} className="flex items-center gap-1.5 transition hover:text-white">
            <Phone className="h-3 w-3" />
            {siteConfig.contato.telefone}
          </a>
        </div>
      </div>

      {/* Main nav - white/gray */}
      <div
        className={`border-b transition-all duration-300 ${
          isScrolled
            ? "border-neutral-200 bg-white shadow-sm"
            : "border-neutral-100 bg-white"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Laboratório São Lucas"
              width={180}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav - gray text */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-neutral-500 transition-colors hover:bg-neutral-50 hover:text-neutral-800"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`https://wa.me/${siteConfig.contato.whatsappNumero}?text=${encodeURIComponent("Olá, gostaria de agendar um exame")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg border border-[#0B1B35] px-5 py-2.5 text-sm font-semibold text-[#0B1B35] transition hover:bg-[#0B1B35] hover:text-white"
            >
              <Calendar className="h-4 w-4" />
              Agendar
            </a>
            <a
              href={siteConfig.resultadosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg bg-[#0B1B35] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#243580]"
            >
              Resultados
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-neutral-600 hover:bg-neutral-50 lg:hidden"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-[105px] z-30 bg-white transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <nav className="flex flex-col p-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="border-b border-neutral-100 py-4 text-base font-medium text-neutral-600"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${siteConfig.contato.whatsappNumero}?text=${encodeURIComponent("Olá, gostaria de agendar um exame")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-[#0B1B35] px-6 py-3.5 text-center font-semibold text-[#0B1B35]"
          >
            <Calendar className="h-4 w-4" />
            Agendar Exame
          </a>
          <a
            href={siteConfig.resultadosUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#0B1B35] px-6 py-3.5 text-center font-semibold text-white"
          >
            Ver Resultados
            <ArrowRight className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}

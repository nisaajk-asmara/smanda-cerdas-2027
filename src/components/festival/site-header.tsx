"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { festivalDetails } from "./data";

const MobileNavigation = dynamic(() =>
  import("./mobile-navigation").then((module) => module.MobileNavigation),
);

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#agenda", label: "Agenda" },
  { href: "#kompetisi", label: "Kompetisi" },
  { href: "#pendaftaran", label: "Alur pendaftaran" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link
          aria-label="Festival Smanda Cerdas 2027 — beranda"
          className="wordmark"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <span className="wordmark__symbol" aria-hidden="true">
            S
          </span>
          <span>
            <strong>SMANDA</strong>
            <span>FESTIVAL CERDAS 2027</span>
          </span>
        </Link>

        <button
          aria-controls={menuOpen ? "mobile-navigation" : undefined}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav aria-label="Navigasi utama" className="site-nav site-nav--desktop">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="button button--nav"
            href={festivalDetails.registrationUrl}
            onClick={() => setMenuOpen(false)}
            rel="noreferrer"
            target="_blank"
          >
            Daftar sekarang <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </nav>
        {menuOpen ? (
          <MobileNavigation onNavigate={() => setMenuOpen(false)} />
        ) : null}
      </div>
    </header>
  );
}

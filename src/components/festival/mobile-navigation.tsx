"use client";

import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { MouseEventHandler } from "react";
import { festivalDetails } from "./data";

const links = [
  { href: "#tentang", label: "Tentang" },
  { href: "#agenda", label: "Agenda" },
  { href: "#kompetisi", label: "Kompetisi" },
  { href: "#pendaftaran", label: "Alur pendaftaran" },
];

export function MobileNavigation({
  onNavigate,
}: {
  onNavigate: MouseEventHandler<HTMLAnchorElement>;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.nav
      aria-label="Navigasi utama"
      className="site-nav site-nav--mobile"
      id="mobile-navigation"
      initial={reduceMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {links.map((link) => (
        <a href={link.href} key={link.href} onClick={onNavigate}>
          {link.label}
        </a>
      ))}
      <a
        className="button button--nav"
        href={festivalDetails.registrationFormUrl}
        onClick={onNavigate}
        rel="noreferrer"
        target="_blank"
      >
        Daftar sekarang <ArrowUpRight aria-hidden="true" size={16} />
      </a>
    </motion.nav>
  );
}

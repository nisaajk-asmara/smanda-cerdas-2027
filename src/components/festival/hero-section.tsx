import Image from "next/image";
import { ArrowDown, ArrowRight, CalendarDays, Sparkles } from "lucide-react";
import { BrandMark } from "./brand-mark";
import { festivalDetails } from "./data";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="hero" id="beranda">
      <div className="container hero__container">
        <div
          aria-label="Identitas resmi penyelenggara"
          className="hero__masthead"
          role="group"
        >
          <BrandMark variant="province" />
          <span className="hero__masthead-copy">
            <span>PEMERINTAH PROVINSI SUMATERA SELATAN</span>
            <strong>SMAN 2 KOTA LUBUKLINGGAU</strong>
          </span>
          <BrandMark variant="school" />
        </div>

        <div className="hero__layout">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--gold">
              <Sparkles aria-hidden="true" size={14} />
              Perayaan tahunan prestasi & kebudayaan
            </p>
            <h1 id="hero-title">
              Festival
              <span className="hero__title-highlight">SMANDA CERDAS</span>
              <span className="hero__year">2027</span>
            </h1>
            <p className="hero__description">
              Festival pendidikan, seni, dan kompetisi pelajar tingkat SMP
              se-Kota Lubuklinggau.
            </p>
            <p className="hero__tagline">
              <strong>CERDAS</strong>
              <span>(Cepat, Terampil, Disiplin &amp; Berkualitas)</span>
            </p>
            <p className="hero__date-mobile">
              <CalendarDays aria-hidden="true" size={16} />
              {festivalDetails.date}
              <span aria-hidden="true">·</span>
              Kota Lubuklinggau
            </p>
            <div className="hero__actions">
              <a
                className="button button--gold"
                href={festivalDetails.registrationFormUrl}
                rel="noreferrer"
                target="_blank"
              >
                Daftar sekarang <ArrowRight aria-hidden="true" size={17} />
              </a>
              <a className="button button--outline-light" href="#kompetisi">
                Lihat kompetisi <ArrowDown aria-hidden="true" size={16} />
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__photo-frame">
              <Image
                alt="Siswa berfoto bersama di depan gedung SMAN 2 Kota Lubuklinggau"
                className="hero__photo"
                fill
                priority
                unoptimized
                sizes="(max-width: 767px) 100vw, (max-width: 1279px) 48vw, 570px"
                fetchPriority="high"
                src="/images/smanda-school-event.jpg"
              />
              <div className="hero__photo-shade" />
              <div className="hero__photo-caption">
                <span className="hero__photo-kicker">Satu panggung</span>
                <strong>untuk gagasan besar.</strong>
              </div>
            </div>
            <div className="hero__floating-note">
              <span className="hero__floating-icon">
                <CalendarDays aria-hidden="true" size={18} />
              </span>
              <span>
                <span>Waktu pelaksanaan</span>
                <strong>{festivalDetails.date}</strong>
              </span>
            </div>
          </div>
        </div>

        <a className="hero__scroll" href="#tentang">
          Jelajahi festival <ArrowDown aria-hidden="true" size={15} />
        </a>
      </div>
    </section>
  );
}

import Image from "next/image";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  MapPin,
  Quote,
} from "lucide-react";
import { festivalDetails } from "./data";

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  id,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">
        <span aria-hidden="true" className="eyebrow__dot" />
        {eyebrow}
      </p>
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  );
}

export function EventInformation() {
  return (
    <section aria-labelledby="event-section-title" className="section section--intro" id="tentang">
      <div className="container">
        <SectionHeading
          description="Satu hari penuh pertemuan, ide segar, dan talenta muda di Lubuklinggau."
          eyebrow="Catat tanggalnya"
          id="event-section-title"
          title="Sebuah perayaan, banyak cerita."
        />
        <div className="event-info-grid">
          <article className="event-info-card">
            <span aria-hidden="true" className="event-info-card__icon">
              <CalendarDays size={23} />
            </span>
            <div>
              <p className="card-kicker">Waktu pelaksanaan</p>
              <h3>{festivalDetails.date}</h3>
              <p>Perayaan festival pendidikan dan kompetisi pelajar.</p>
            </div>
          </article>
          <article className="event-info-card">
            <span aria-hidden="true" className="event-info-card__icon event-info-card__icon--blue">
              <MapPin size={23} />
            </span>
            <div>
              <p className="card-kicker">Lokasi acara</p>
              <h3>{festivalDetails.school}</h3>
              <p>{festivalDetails.address}</p>
              <a
                className="text-link"
                href={festivalDetails.mapsUrl}
                rel="noreferrer"
                target="_blank"
              >
                Lihat peta <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function SchoolGallery() {
  return (
    <section aria-labelledby="gallery-section-title" className="section section--gallery">
      <div className="container">
        <SectionHeading
          description="Kenali semangat belajar, berkreasi, dan bertumbuh bersama."
          eyebrow="Cerita dari Smanda"
          id="gallery-section-title"
          title="Ruang tumbuh untuk setiap talenta."
        />
        <div className="gallery-grid">
          <figure className="gallery-card gallery-card--main">
            <Image
              alt="Sekelompok pelajar berfoto bersama setelah kegiatan sekolah"
              className="gallery-card__image"
              fill
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 62vw, 730px"
              src="/images/smanda-students-group.jpg"
            />
            <figcaption className="gallery-card__overlay">
              <span className="image-label">Lingkungan belajar</span>
              <h3>Tempat ide baik bertemu.</h3>
            </figcaption>
          </figure>
          <figure className="gallery-card gallery-card--top">
            <Image
              alt="Barisan siswa mengikuti kegiatan sekolah"
              className="gallery-card__image"
              fill
              loading="lazy"
              sizes="(max-width: 767px) 48vw, (max-width: 1279px) 30vw, 360px"
              src="/images/smanda-students-lineup.jpg"
            />
            <figcaption className="gallery-card__overlay">
              <span className="image-label">Siswa aktif</span>
              <h3>Tumbuh bersama.</h3>
            </figcaption>
          </figure>
          <figure className="gallery-card gallery-card--bottom">
            <Image
              alt="Pelajar mengikuti kegiatan bersama di sekolah"
              className="gallery-card__image"
              fill
              loading="lazy"
              sizes="(max-width: 767px) 48vw, (max-width: 1279px) 30vw, 360px"
              src="/images/smanda-student-activities.jpg"
            />
            <figcaption className="gallery-card__overlay">
              <span className="image-label">Kreativitas</span>
              <h3>Belajar tanpa batas.</h3>
            </figcaption>
          </figure>
        </div>
        <p className="gallery-note">Dokumentasi kegiatan di lingkungan Smanda.</p>
      </div>
    </section>
  );
}

export function PrincipalWelcome() {
  return (
    <section aria-labelledby="principal-title" className="section section--welcome">
      <div className="container">
        <article className="welcome-card">
          <div className="welcome-card__profile">
            <div className="welcome-card__portrait">
              <Image
                alt={`Potret ${festivalDetails.principal}, kepala SMAN 2 Kota Lubuklinggau`}
                className="welcome-card__image"
                fill
                loading="lazy"
                sizes="(max-width: 767px) 112px, 160px"
                src="/images/smanda-principal.jpg"
              />
            </div>
            <p className="welcome-card__photo-note">SMAN 2 Lubuklinggau</p>
            <span className="welcome-card__role">Kepala sekolah</span>
          </div>
          <div className="welcome-card__content">
            <p className="eyebrow">
              <span aria-hidden="true" className="eyebrow__dot" />
              Sepatah kata
            </p>
            <h2 id="principal-title">Sambutan kepala sekolah</h2>
            <p className="welcome-card__name">{festivalDetails.principal}</p>
            <p className="welcome-card__title">{festivalDetails.principalRole}</p>
            <div className="quote-card">
              <Quote aria-hidden="true" className="quote-card__icon" size={23} />
              <p>
                Festival Smanda Cerdas 2027 menjadi ruang sinergi bagi generasi
                penerus untuk menumbuhkan sportivitas, jiwa wirausaha, serta
                kecintaan terhadap seni Nusantara.
              </p>
            </div>
          </div>
          <BookOpen aria-hidden="true" className="welcome-card__decoration" size={92} />
        </article>
      </div>
    </section>
  );
}

export { SectionHeading };

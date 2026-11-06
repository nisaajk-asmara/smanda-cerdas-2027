import Image from "next/image";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { activities, competitions, festivalDetails } from "./data";
import { SectionHeading } from "./information-sections";

export function FestivalAgenda() {
  return (
    <section aria-labelledby="agenda-title" className="section section--agenda" id="agenda">
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            description="Jelajahi keseruan yang disiapkan untuk seluruh pengunjung."
            eyebrow="Agenda utama festival"
            id="agenda-title"
            title="Temukan hal yang kamu suka."
          />
          <span className="section-aside">Terbuka untuk umum</span>
        </div>
        <div className="agenda-grid">
          {activities.map((activity) => {
            const Icon = activity.icon;
            return (
              <article
                className={`agenda-card agenda-card--${activity.accent}`}
                key={activity.title}
              >
                {activity.image ? (
                  <div className="agenda-card__image-wrap">
                    <Image
                      alt={activity.imageAlt ?? ""}
                      className="agenda-card__image"
                      fill
                      loading="lazy"
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 32vw, 400px"
                      src={activity.image}
                    />
                    <span className="agenda-card__image-label">{activity.label}</span>
                  </div>
                ) : (
                  <div className="agenda-card__icon-wrap" aria-hidden="true">
                    <Icon size={23} />
                  </div>
                )}
                <div className="agenda-card__body">
                  <span className="card-kicker">{activity.image ? "Festival Smanda" : activity.label}</span>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                  <Icon aria-hidden="true" className="agenda-card__accent-icon" size={20} />
                </div>
              </article>
            );
          })}
        </div>
        <p className="gallery-note">Dokumentasi kegiatan festival.</p>
      </div>
    </section>
  );
}

function CompetitionCard({
  title,
  description,
  category,
  format,
  accent,
  icon: Icon,
}: {
  title: string;
  description: string;
  category: string;
  format: string;
  accent: string;
  icon: LucideIcon;
}) {
  return (
    <article className={`competition-card competition-card--${accent}`}>
      <div className="competition-card__top">
        <span className="competition-card__category">{category}</span>
        <span aria-hidden="true" className="competition-card__icon">
          <Icon size={19} />
        </span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="competition-card__meta">
        <span>{format}</span>
        <span className="competition-card__prize">Piala & sertifikat</span>
      </div>
    </article>
  );
}

export function StudentCompetitions() {
  return (
    <section
      aria-labelledby="competitions-title"
      className="section section--competitions"
      id="kompetisi"
    >
      <div className="container">
        <div className="section-heading-row">
          <SectionHeading
            description={`Tunjukkan kemampuanmu bersama pelajar ${festivalDetails.audience.toLowerCase()}.`}
            eyebrow="Kompetisi bergengsi siswa"
            id="competitions-title"
            title="Saatnya tampil dan berprestasi."
          />
          <span className="section-aside section-aside--blue">SMP se-Kota Lubuklinggau</span>
        </div>
        <div className="competition-grid">
          {competitions.map((competition) => (
            <CompetitionCard {...competition} key={competition.title} />
          ))}
        </div>
        <a
          className="text-link competitions-link"
          href={festivalDetails.registrationUrl}
          rel="noreferrer"
          target="_blank"
        >
          Tanyakan pendaftaran lomba <ArrowRight aria-hidden="true" size={16} />
        </a>
      </div>
    </section>
  );
}

import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { festivalDetails, registrationSteps } from "./data";
import { SectionHeading } from "./information-sections";

export function RegistrationSteps() {
  return (
    <section
      aria-labelledby="registration-title"
      className="section section--registration"
      id="pendaftaran"
    >
      <div className="container">
        <div className="registration-panel">
          <div className="registration-panel__heading">
            <SectionHeading
              description="Satu langkah pada satu waktu. Panitia siap membantu lewat WhatsApp."
              eyebrow="Informasi penting peserta"
              id="registration-title"
              title="Dari daftar sampai hari festival."
            />
            <a
              className="registration-panel__help"
              href={festivalDetails.registrationUrl}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" size={17} />
              Hubungi panitia
            </a>
          </div>
          <ol className="steps-grid">
            {registrationSteps.map((step, index) => (
              <li className="step-card" key={step.number}>
                <span className="step-card__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < registrationSteps.length - 1 ? (
                  <span aria-hidden="true" className="step-card__check">
                    <Check size={13} />
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
          <p className="registration-panel__note">
            Jadwal rinci dan ketentuan lomba akan diinformasikan oleh panitia.
          </p>
        </div>
      </div>
    </section>
  );
}

export function RegistrationCallout() {
  return (
    <section aria-labelledby="register-cta-title" className="section section--cta">
      <div className="container">
        <div className="cta-panel">
          <div className="cta-panel__copy">
            <span className="cta-panel__label">Pendaftaran resmi dibuka</span>
            <h2 id="register-cta-title">
              Tunjukkan bakatmu.
              <br />
              Jadilah bagian dari perayaan besar.
            </h2>
            <p>
              Ajak teman satu tim, siapkan karya, dan rayakan ide terbaikmu
              bersama Smanda.
            </p>
          </div>
          <a
            className="button button--navy button--large"
            href={festivalDetails.registrationUrl}
            rel="noreferrer"
            target="_blank"
          >
            Daftar via WhatsApp <ArrowRight aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

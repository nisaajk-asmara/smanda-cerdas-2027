import { Camera, MapPin, MessageCircle, School } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { festivalDetails } from "./data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-card">
          <div className="footer-main">
            <div className="footer-brand">
              <span className="footer-brand__symbol" aria-hidden="true">
                S
              </span>
              <div>
                <strong>Festival Smanda Cerdas 2027</strong>
                <p>Kreativitas, prestasi, dan inovasi dalam satu perayaan besar.</p>
              </div>
            </div>

            <div className="footer-contact-list">
              <a
                className="footer-contact"
                href={`https://wa.me/${festivalDetails.whatsapp}`}
                rel="noreferrer"
                target="_blank"
              >
                <span className="footer-contact__icon"><MessageCircle size={19} /></span>
                <span><span>WhatsApp panitia</span><strong>{festivalDetails.whatsappDisplay}</strong></span>
              </a>
              <a
                className="footer-contact"
                href={festivalDetails.instagramUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span className="footer-contact__icon footer-contact__icon--pink"><Camera size={19} /></span>
                <span><span>Instagram resmi</span><strong>@{festivalDetails.instagram}</strong></span>
              </a>
              <a
                className="footer-contact"
                href={festivalDetails.mapsUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span className="footer-contact__icon footer-contact__icon--blue"><MapPin size={19} /></span>
                <span><span>Lokasi sekolah</span><strong>{festivalDetails.address}</strong></span>
              </a>
            </div>

            <div className="footer-qr">
              <div className="footer-qr__code">
                <QRCodeSVG
                  bgColor="#ffffff"
                  fgColor="#0F2347"
                  level="M"
                  marginSize={2}
                  size={136}
                  title="Kode QR untuk menghubungi panitia Festival Smanda Cerdas 2027"
                  value={festivalDetails.registrationUrl}
                />
              </div>
              <strong>Scan untuk bertanya</strong>
              <span>Terhubung langsung ke WhatsApp panitia.</span>
            </div>
          </div>

          <div className="footer-bottom">
            <span><School aria-hidden="true" size={15} /> Penyelenggara: <strong>{festivalDetails.school}</strong></span>
            <span><span aria-hidden="true" className="footer-bottom__dot" /> Peserta: <strong>{festivalDetails.audience}</strong></span>
            <span className="footer-copyright">© Festival Smanda Cerdas 2027</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

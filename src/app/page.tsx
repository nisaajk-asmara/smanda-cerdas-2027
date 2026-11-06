import { EventInformation, PrincipalWelcome, SchoolGallery } from "@/components/festival/information-sections";
import { HeroSection } from "@/components/festival/hero-section";
import { FestivalAgenda, StudentCompetitions } from "@/components/festival/program-sections";
import {
  RegistrationCallout,
  RegistrationSteps,
} from "@/components/festival/registration-sections";
import { SiteFooter } from "@/components/festival/site-footer";
import { SiteHeader } from "@/components/festival/site-header";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Langsung ke konten utama
      </a>
      <SiteHeader />
      <main id="main-content">
        <HeroSection />
        <EventInformation />
        <SchoolGallery />
        <PrincipalWelcome />
        <FestivalAgenda />
        <StudentCompetitions />
        <RegistrationSteps />
        <RegistrationCallout />
      </main>
      <SiteFooter />
    </>
  );
}

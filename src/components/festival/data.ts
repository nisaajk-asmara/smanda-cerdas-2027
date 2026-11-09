import {
  BookOpen,
  Brush,
  Lightbulb,
  Mic2,
  Store,
  type LucideIcon,
} from "lucide-react";

export const festivalDetails = {
  date: "Januari 2027",
  school: "SMAN 2 Kota Lubuklinggau",
  address:
    "Jl. Air Kuti, Kec. Lubuk Linggau Timur I, Kota Lubuklinggau, Sumatera Selatan",
  audience: "Siswa SMP se-Kota Lubuklinggau",
  whatsappDisplay: "+62 800-0000-1111 (Panitia)",
  whatsappContactUrl:
    "https://wa.me/6282285344045?text=Halo%20Panitia%20Festival%20SMANDA%20CERDAS%202027%2C%20saya%20ingin%20bertanya.",
  registrationFormUrl: "https://forms.gle/nsRCHguomxMEU2z37",
  instagram: "sman2_lubuklinggau",
  principal: "Zulkarnain, M.Pd., Mat.",
  principalRole: "Kepala SMA Negeri 2 Kota Lubuklinggau",
  instagramUrl: "https://www.instagram.com/sman2_lubuklinggau/",
  mapsUrl:
    "https://maps.google.com/?q=SMAN+2+Kota+Lubuklinggau+Sumatera+Selatan",
} as const;

export type FestivalActivity = {
  title: string;
  description: string;
  label: string;
  icon: LucideIcon;
  image?: string;
  imageAlt?: string;
  accent: "gold" | "blue" | "teal" | "orange";
};

export const activities: FestivalActivity[] = [
  {
    title: "Bazar SMANDA",
    description:
      "Jelajahi stan kewirausahaan siswa dengan sajian kuliner dan produk kreatif.",
    label: "Kuliner & kreatif",
    icon: Store,
    image: "/images/smanda-bazaar.jpg",
    imageAlt: "Siswa melayani pengunjung di stan bazar SMANDA",
    accent: "gold",
  },
  {
    title: "Creative Expo",
    description:
      "Pameran beragam karya dan inovasi siswa—dari seni hingga teknologi.",
    label: "Pameran kreatif",
    icon: Lightbulb,
    image: "/images/smanda-creative-expo.jpg",
    imageAlt: "Stan pameran kegiatan siswa di lingkungan sekolah",
    accent: "blue",
  },
];

export type FestivalCompetition = {
  title: string;
  description: string;
  category: string;
  format: string;
  accent: "gold" | "blue" | "teal" | "orange";
  icon: LucideIcon;
};

export const competitions: FestivalCompetition[] = [
  {
    title: "Lomba CERDAS Cermat",
    description:
      "Uji wawasan sains, matematika, sosial, dan pengetahuan umum beregu.",
    category: "Sains & nalar",
    format: "Tim (3 orang)",
    accent: "gold",
    icon: Lightbulb,
  },
  {
    title: "Debat Bahasa Indonesia",
    description:
      "Adu argumen kritis berbasis data dengan mosi sosial, teknologi, dan pendidikan.",
    category: "Bahasa & sastra",
    format: "Format parlemen",
    accent: "blue",
    icon: BookOpen,
  },
  {
    title: "English Speech",
    description:
      "Sampaikan gagasan dengan percaya diri dalam pidato berbahasa Inggris.",
    category: "Bahasa internasional",
    format: "Individu",
    accent: "teal",
    icon: Mic2,
  },
  {
    title: "Storytelling",
    description:
      "Hidupkan cerita rakyat Nusantara melalui narasi dan ekspresi.",
    category: "Literasi budaya",
    format: "Individu + properti",
    accent: "orange",
    icon: Brush,
  },
];

export const registrationSteps = [
  {
    number: "01",
    title: "Daftar",
    description:
      "Hubungi panitia untuk memperoleh informasi dan tata cara pendaftaran peserta.",
  },
  {
    number: "02",
    title: "Verifikasi",
    description:
      "Panitia memeriksa data peserta dan mengonfirmasi kelengkapan pendaftaran.",
  },
  {
    number: "03",
    title: "Pengumuman",
    description:
      "Pantau informasi jadwal, ketentuan lomba, dan pengumuman dari panitia.",
  },
  {
    number: "04",
    title: "Pelaksanaan",
    description:
      "Bertemu di SMAN 2 Kota Lubuklinggau dan ramaikan festival bersama.",
  },
] as const;

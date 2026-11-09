# Festival Smanda Cerdas 2027

Website Festival Smanda Cerdas 2027 dibuat dengan Next.js 15 App Router, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, dan Lucide React. Setiap bagian brosur disajikan sebagai section website yang responsif; poster tidak digunakan sebagai gambar halaman.

## Menjalankan aplikasi

```bash
npm install
npm run dev
```

Server development berjalan di [http://localhost:2000](http://localhost:2000).
Untuk produksi, atur `NEXT_PUBLIC_SITE_URL` ke URL publik website agar URL gambar Open Graph sesuai.

## Pemeriksaan

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

Production server juga menggunakan port `2000`.

## Struktur

```text
src/
  app/                    # App Router, metadata, dan stylesheet global
  components/
    festival/             # Hero, agenda, kompetisi, registrasi, navigasi, footer
    ui/                   # Komponen shadcn/ui
  lib/                    # Utilitas bersama
public/
  images/                 # Foto lokal untuk galeri dan kartu acara
```

Foto festival pada starter ini merupakan foto ilustrasi lokal. Ganti dengan dokumentasi resmi sekolah sebelum publikasi. Data acara dan kontak dirangkum dari brosur; detail tanggal pelaksanaan ditampilkan sebagai Januari 2027.

# PRD - Gardabudaya.org

## Product Requirements Document

### 1. Ringkasan
Website resmi **Gardabudaya** (Yayasan Rakai Mataram Agung / RMA Foundation).
Tagline: *"Memperindah Keindahan Dunia – Hamemayu Hayuning Bawono"*

Domain target: **gardabudaya.org**
Deploy awal: **gardabudaya-dev.web.app**
Teknologi: **HTML + CSS + JS murni + Tailwind CSS (CDN)**
Layout: **Multi Page**
Tipe: **Static website** (Firebase Hosting)

---

### 2. Target Audiens
- Masyarakat umum
- Donatur dan calon donatur
- Relawan
- Mitra (pemerintah, LSM, NGO, swasta, akademisi)
- Peserta program pendidikan

---

### 3. Sitemap & Halaman

| # | Halaman | File | Konten Utama |
|---|---------|------|-------------|
| 1 | Beranda | `index.html` | Hero, Nilai Yayasan, Filosofi, Visi-Misi, highlight Program, CTA |
| 2 | Tentang | `tentang.html` | Filosofi lengkap, Visi-Misi, Nilai-nilai, Legalitas, Transparansi |
| 3 | Program | `program.html` | Ekonomi Kreatif, Pertanian Organik, Pendidikan Formal (PAUD/TK), Pendidikan Non Formal (PKBM/Sanggar), Pusat Kajian Sejarah & Filsafat Jawa, LPK (Tata Rias, Busana, Kuliner, Seni Pertunjukan, Industri Kreatif, Media), BIMKER, CSR, RMA Peduli |
| 4 | Kemitraan | `kemitraan.html` | Mitra, Bentuk Kemitraan (Pendanaan, Advokasi, Pengetahuan, Inovasi, Implementasi) |
| 5 | Donasi | `donasi.html` | Pilihan Donasi (Umum, Pendidikan, Budaya, Bedah Rumah, Beasiswa, Pertanian) |
| 6 | Berita | `berita.html` | Berita & Kegiatan (template artikel per kategori) |
| 7 | Galeri | `galeri.html` | Foto, Video, Arsip Budaya |
| 8 | Relawan | `relawan.html` | Pendaftaran Relawan (Pendidikan, Budaya, Sosial, Media) |
| 9 | Kontak | `kontak.html` | Alamat, Email, Telepon, WhatsApp, Media Sosial, Google Maps |
| — | 404 | `404.html` | Halaman tidak ditemukan |

---

### 4. Komponen Global (semua halaman)

#### Header / Navbar
- Logo "Gardabudaya" + "Yayasan Rakai Mataram Agung"
- Navigasi: Beranda | Tentang | Program | Kemitraan | Donasi | Berita | Galeri | Relawan | Kontak
- Tombol "Donasi" (CTA)
- Mobile responsive (hamburger menu)

#### Footer
- Grid link: Tentang Kami, Program, Kemitraan, Relawan, Donasi, Artikel, Galeri, Kontak
- Copyright: © RMA Foundation
- Social media links

---

### 5. Halaman Detail

#### 5.1 Beranda (index.html)
- **Hero Section:** Full-width dengan background, judul "Yayasan Rakai Mataram Agung", tagline, sub-description, CTA buttons (Menjadi Mitra, Program Kami, Donasi)
- **Nilai-Nilai Yayasan:** Cards grid (Budaya, Pendidikan, Kemandirian, Gotong Royong, Inovasi) dengan ikon dan deskripsi
- **Filosofi Yayasan:** Paragraf narasi + list poin
- **Visi & Misi:** Dua kolom (kiri Visi, kanan Misi)
- **Program Unggulan:** Cards preview program dengan link ke halaman Program
- **CTA Section:** Ajak donasi / jadi mitra

#### 5.2 Tentang (tentang.html)
- Filosofi Yayasan (lengkap)
- Visi & Misi
- Nilai-nilai (detail)
- Legalitas: Akta Pendirian, SK Kemenkumham, NPWP, Dokumen Perizinan
- Transparansi: Laporan Tahunan, Laporan Donasi

#### 5.3 Program (program.html)
Program dikelompokkan dalam accordion/tab/seksi:

**A. Ekonomi Kreatif**
- Sub-program: Batik, Kerajinan Tradisional, Souvenir Budaya, Produk UMKM, Industri Rumah Tangga, Pengembangan Brand Lokal
- Tujuan

**B. Pertanian Organik & Ketahanan Pangan**
- Fokus, Nilai Utama

**C. Pendidikan Formal**
- PAUD MATA HATI (karakter, budaya, kreativitas, kemandirian)
- TK MATA HATI (budi pekerti, karakter, kreativitas, kecintaan budaya)

**D. Pendidikan Non Formal**
- PKBM, Kelompok Belajar, Sanggar Budaya, Kursus Keterampilan, Pelatihan Kerja

**E. Pusat Kajian Sejarah & Filsafat Jawa**
- Fokus kajian, program, tujuan

**F. Lembaga Pendidikan Keterampilan (LPK)**
- Tata Rias Tradisional, Busana Tradisional, Kuliner Tradisional, Seni Pertunjukan, Industri Kreatif, Media & Dokumentasi Budaya

**G. Program Bimbingan Kerja (BIMKER)**
- Tujuan, Fasilitas

**H. Program CSR**
- Pengembangan Budaya, Beasiswa Budaya, Rumah Dongeng Budaya, Pojok Kreasi Budaya, Sekolah Budaya Bersubsidi, Pertukaran Budaya

**I. Program RMA Peduli**
- Kegiatan: Bedah Rumah, Bantuan Sosial, Rehabilitasi Rumah, Gotong Royong

#### 5.4 Kemitraan (kemitraan.html)
- **Mitra:** Pemerintah, LSM, NGO, Yayasan, UMKM, Koperasi, Komunitas Budaya, Seniman, Akademisi, Perusahaan Swasta
- **Bentuk Kemitraan:** Dukungan Pendanaan, Advokasi, Berbagi Pengetahuan, Inovasi Bersama, Implementasi Program
- Form pendaftaran mitra

#### 5.5 Donasi (donasi.html)
- Pilihan: Donasi Umum, Pendidikan, Budaya, Bedah Rumah, Beasiswa, Pertanian
- Info rekening / metode pembayaran
- Form donasi

#### 5.6 Berita (berita.html)
- Kategori: Kegiatan Sosial, Pendidikan, Budaya, Seminar, Workshop, Kemitraan, Pertanian, CSR
- Grid artikel (thumbnail, judul, tanggal, kategori, excerpt)
- Pagination

#### 5.7 Galeri (galeri.html)
- **Foto:** Dokumentasi kegiatan
- **Video:** Dokumenter budaya, kegiatan lapangan, testimoni
- **Arsip Budaya:** Naskah, Dokumentasi Sejarah, Koleksi Budaya
- Lightbox preview

#### 5.8 Relawan (relawan.html)
- Pendaftaran: Relawan Pendidikan, Budaya, Sosial, Media
- Form pendaftaran

#### 5.9 Kontak (kontak.html)
- Alamat lengkap
- Email, Telepon, WhatsApp
- Media Sosial (link)
- Google Maps embed
- Form kontak

---

### 6. Elemen UI / Komponen
- Navbar sticky + mobile hamburger
- Cards (program, berita, nilai)
- Accordion / tabs (program detail)
- Buttons (primary, secondary, outline)
- Form styling (donasi, kontak, relawan)
- Hero section (full-width)
- Grid gallery dengan lightbox
- Footer multi-column
- Scroll-to-top button
- Animasi scroll reveal (AOS library via CDN)
- Breadcrumbs (untuk halaman dalam)

---

### 7. Teknologi Stack
| Komponen | Teknologi |
|----------|-----------|
| Markup | HTML5 semantic |
| Styling | Tailwind CSS v3 (CDN) + CSS custom |
| Ikon | Font Awesome (CDN) |
| Font | Google Fonts (Inter / Plus Jakarta Sans) |
| Animasi | AOS (Animate On Scroll) / Tailwind built-in |
| Gallery | SimpleLightbox atau custom |
| Map | Google Maps embed |
| Hosting | Firebase Hosting |
| Container | Docker (Node.js 18 + firebase-tools) |

---

### 8. Struktur File
```
/home/nusa/Project/gardabudaya/
├── public/
│   ├── index.html
│   ├── tentang.html
│   ├── program.html
│   ├── kemitraan.html
│   ├── donasi.html
│   ├── berita.html
│   ├── galeri.html
│   ├── relawan.html
│   ├── kontak.html
│   ├── 404.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
├── Dockerfile
├── docker-compose.yml
├── entrypoint.sh
├── firebase.json
├── package.json
├── content.md
├── todo.md
└── README.md
```

---

### 9. Milestone

#### Milestone 1 — Setup & Struktur
- [x] Docker + Firebase Hosting siap
- [x] Domain planning
- [ ] Buat struktur folder public/
- [ ] Buat template header & footer (HTML partial)

#### Milestone 2 — Halaman Utama
- [ ] index.html (Beranda)
- [ ] tentang.html (Tentang)
- [ ] program.html (Program)
- [ ] CSS global + Tailwind config

#### Milestone 3 — Halaman Pendukung
- [ ] kemitraan.html
- [ ] donasi.html
- [ ] berita.html
- [ ] galeri.html
- [ ] relawan.html
- [ ] kontak.html

#### Milestone 4 — Polish
- [ ] Responsive design
- [ ] Animasi & interaksi
- [ ] SEO meta tags
- [ ] 404 page

#### Milestone 5 — Deploy
- [ ] Deploy ke gardabudaya-dev.web.app
- [ ] Testing semua halaman
- [ ] Setup domain gardabudaya.org

---

### 10. Catatan
- Semua halaman menggunakan komponen header & footer yang konsisten
- Tailwind via CDN (tidak perlu build step)
- Konten diambil dari `content.md`
- Gambar placeholder menggunakan placeholder service (picsum.photos / via.placeholder.com)
- Font: Inter untuk body, Playfair Display untuk heading (opsional)
- Domain gardabudaya.org akan diurus setelah website selesai

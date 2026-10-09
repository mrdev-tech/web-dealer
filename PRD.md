# Product Requirements Document (PRD)
**Project Name:** Toyota Dealer Website & Lead Management System (LMS)
**Platform:** Responsive Web Application (Desktop & Mobile)
**Tech Stack:** Next.js (App Router), Tailwind CSS, Prisma ORM, MySQL, NextAuth.js

## 1. Ringkasan Eksekutif
Sistem ini adalah platform digital *end-to-end* untuk dealer Toyota yang memadukan etalase virtual pelanggan (Front-End) dengan operasional manajemen prospek dan penjualan (Back-End). Sistem menggunakan pendekatan **Single Customer ID** untuk melacak riwayat pelanggan dari klik pertama, interaksi *Sales*, hingga layanan *Aftersales*.

## 2. Arsitektur & Teknologi
- **Front-End:** Next.js dengan Tailwind CSS (UI/UX mengadopsi standar warna Toyota Red `#EB0A1E`, Putih, dan Abu-abu). Animasi transisi menggunakan Framer Motion.
- **Back-End & Database:** MySQL (Relational DB), Prisma ORM, dan NextAuth.js untuk *Authentication* (OTP/Credential & RBAC). *Storage* aset gambar menggunakan Local Server Storage.
- **Infrastruktur & Deployment:** VPS Niagahoster (KVM 2) menggunakan OS Ubuntu & aaPanel. Next.js di-deploy menggunakan Node.js (PM2) untuk performa *Server-Side Rendering* (SSR) dan SEO yang optimal.

## 3. Fitur Utama: Customer-Facing (Front-End)
Antarmuka publik dirancang menyerupai pengalaman di `toyota.astra.co.id`.

### 3.1. Homepage
- **Hero Banner:** *Slider* promosi layar penuh yang dinamis.
- **Quick Actions:** Baris navigasi cepat (Kalkulator Kredit, Booking Test Drive, Booking Service, Pricelist).
- **Vehicle Catalog:** *Grid* responsif dengan *client-side filtering* (Kategori: MPV, SUV, Sedan, dll). Menampilkan gambar, nama model, dan harga mulai dari.
- **Floating Action Button (FAB):** Tombol WhatsApp *sticky* di sudut kanan bawah layar.

### 3.2. Vehicle Detail Page (VDP)
- **Sub-Nav (Sticky):** Tautan cepat ke Overview, Color, Features, Price, Specifications.
- **Color Visualizer:** Komponen interaktif di mana klik pada *color swatches* (titik warna) akan mengubah gambar mobil utama.
- **Feature Highlights:** *Carousel* gambar untuk eksterior, interior, dan fitur keamanan.
- **Pricelist Accordion:** Tabel harga OTR per varian dengan tombol CTA (Minta Penawaran / Simulasi).

### 3.3. Interaksi & Transaksi
- **Kalkulator Simulasi Kredit:** Form dinamis (Pilih Model -> Varian -> Persentase DP -> Tenor) yang menghasilkan estimasi cicilan per bulan secara *real-time*.
- **Booking Forms:** Formulir *Test Drive* dan *Booking Service* yang terintegrasi langsung ke database LMS.
- **Formulir Konsultasi Pembelian:** Form khusus untuk mengumpulkan preferensi pembelian individu/fleet, data produk incaran, beserta persetujuan privasi.
- **Formulir Trade-In (Tukar Tambah):** Pengumpulan data kendaraan lama dan incaran baru yang otomatis menyusun pesan format WhatsApp ke PIC Dealer.

### 3.4. Navigasi Cerdas (Smart Navigation)
- **Shop Now Mega Menu:** Dropdown navigasi layar penuh yang mengelompokkan pintasan penting (Pricelist interaktif, Spektakuler, E-Brosur, Bandingkan Mobil).
- **Tautan Ekosistem Toyota:** Tautan eksternal yang di-embed langsung ke *Navbar* (Toyota Electrified, Gazoo Racing).

## 4. Fitur Utama: LMS & Operasional (Back-End)
Panel admin internal dengan *Role-Based Access Control* (RBAC) untuk Admin, Supervisor, dan Sales.

### 4.1. Lead Management System (LMS)
- **Lead Capture:** Semua *submit form* dan interaksi WhatsApp otomatis terpusat menjadi data `Lead`.
- **Multi-Level Routing:** Prospek digital masuk ke *dashboard* Supervisor untuk kemudian di- *assign* ke Sales yang tersedia.
- **Sales Pipeline:** Pelacakan status prospek dengan alur kerja operasional dealer yang ketat:
  1. `New Lead`
  2. `Follow-Up`
  3. `Visit / Test Drive`
  4. `SPK` (Surat Pesanan Kendaraan)
  5. `DO / Invoicing` (Delivery Order)
  6. **`DEC` (Delivery Explanation to Customer)** - *Penjelasan unit saat penyerahan ke pelanggan.*
  7. `Closed` (Won/Lost)
- **Trade-In Pipeline:** Pemisahan *dashboard* khusus untuk manajemen prospek tukar tambah (Status: *New Request, Sedang Appraisal, Penawaran Diberikan, Deal, Batal*).

### 4.2. Content Management System (CMS)
- **Manajemen Kendaraan & Pricelist:** CRUD data master mobil, varian, warna, dan harga OTR interaktif.
- **Manajemen Promo:** Modul unggah *banner* dengan penjadwalan otomatis (tayang/turun sesuai tanggal).
- **Manajemen Artikel:** Modul pengelolaan konten editorial, berita, dan tips untuk section "Discover the Latest".

## 5. Struktur Database (MySQL / Prisma)

### Tabel `users`
- `id` (uuid, PK)
- `role` (enum: 'admin', 'supervisor', 'sales', 'customer')
- `full_name` (varchar)
- `email` (varchar, unique)
- `phone` (varchar, unique) - *Kunci untuk Single Customer ID*

### Tabel `vehicles`
- `id` (uuid, PK)
- `name` (varchar)
- `category` (varchar)
- `thumbnail_url` (text)
- `is_active` (boolean)

### Tabel `vehicle_variants`
- `id` (uuid, PK)
- `vehicle_id` (uuid, FK ke vehicles.id)
- `variant_name` (varchar)
- `price_otr` (numeric)
- `features` (jsonb)

### Tabel `leads`
- `id` (uuid, PK)
- `customer_id` (uuid, FK ke users.id)
- `assigned_to` (uuid, FK ke users.id)
- `vehicle_id` (uuid, FK ke vehicles.id)
- `source` (varchar)
- `status` (enum: 'new', 'follow_up', 'visit', 'spk', 'do', 'dec', 'closed_won', 'closed_lost')
- `created_at` (timestamptz)

### Tabel `lead_activities`
- `id` (uuid, PK)
- `lead_id` (uuid, FK ke leads.id)
- `user_id` (uuid, FK ke users.id) - *Admin/Sales yang melakukan aktivitas*
- `activity_type` (varchar) - *e.g., 'call', 'whatsapp', 'visit', 'status_change'*
- `notes` (text)
- `created_at` (timestamptz)

### Tabel `vehicle_colors`
- `id` (uuid, PK)
- `vehicle_id` (uuid, FK ke vehicles.id)
- `color_name` (varchar)
- `hex_code` (varchar)
- `image_url` (text) - *Gambar mobil dengan warna spesifik*

### Tabel `promos`
- `id` (uuid, PK)
- `title` (varchar)
- `image_url` (text)
- `start_date` (timestamptz)
- `end_date` (timestamptz)
- `is_active` (boolean)

### Tabel `service_bookings`
- `id` (uuid, PK)
- `customer_id` (uuid, FK ke users.id)
- `vehicle_model` (varchar)
- `police_number` (varchar)
- `booking_date` (timestamptz)
- `status` (enum: 'pending', 'confirmed', 'completed', 'cancelled')
- `notes` (text)
- `created_at` (timestamptz)

### Tabel `articles` (NEW)
- `id` (uuid, PK)
- `title` (varchar)
- `slug` (varchar, unique)
- `content` (text)
- `image_url` (text)
- `published_at` (timestamptz)
- `created_at` (timestamptz)

## 6. Tahapan Implementasi (Milestones)
- **Fase 1:** Setup *repository* Next.js, instalasi Prisma ORM & MySQL, konfigurasi NextAuth.js, dan pembuatan *layout* global (Navbar & Footer).
- **Fase 2:** Pembangunan Front-End (Homepage, Katalog Mobil, Vehicle Detail Page dengan Color Visualizer, Kalkulator Kredit).
- **Fase 3:** Pembangunan Back-End & CMS (Dashboard Admin, CRUD Kendaraan & Promo).
- **Fase 4:** Pembangunan LMS (Multi-level routing, Sales Pipeline Dashboard).
- **Fase 5:** Setup VPS Niagahoster KVM 2 (aaPanel, Node.js, PM2), UAT, dan Final Deployment.
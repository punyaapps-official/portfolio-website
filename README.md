# Portfolio Website — Bryan Yusuf Pranata

Website portofolio pribadi yang dibangun dengan **React + Vite**, menampilkan pengalaman kerja, keahlian, dan daftar project sebagai WordPress Developer & Automation Specialist. Dilengkapi mode gelap/terang (dark/light mode) dan tampilan yang responsif di semua ukuran layar.

**Live demo:** https://portfolio-website-punya-apps.vercel.app

---

## ✨ Fitur

- **Mode gelap & terang** — tombol toggle di navbar, preferensi tersimpan otomatis di browser dan mengikuti pengaturan sistem saat pertama kali dibuka.
- **Desain hitam-putih (monokrom)** — tampilan bersih dan profesional tanpa warna aksen.
- **Responsif penuh** — dioptimalkan untuk HP, tablet, dan desktop, termasuk bagian Hero yang sebelumnya bermasalah di layar kecil.
- **Menu mobile** — navbar dengan menu hamburger yang bisa dibuka/tutup di layar kecil.
- **Showcase project** — menampilkan detail lengkap tiap project: klien, peran, tahun, teknologi yang dipakai, dan dampak/hasil kerja.
- **Animasi halus** — menggunakan Framer Motion untuk transisi dan efek hover.

---

## 🛠️ Teknologi yang Digunakan

| Kategori | Teknologi |
|---|---|
| Framework | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS v4 |
| Animasi | Framer Motion |
| Ikon | Lucide React, React Icons |
| Deployment | Vercel |

---

## 📁 Struktur Folder

```
portfolio-website/
├── public/                     # Aset statis (foto, CV, favicon)
│   ├── CV_Bryan_YP.pdf
│   ├── profile2.png
│   └── projects/                # Foto-foto project (lihat panduan di bawah)
├── src/
│   ├── assets/                  # Aset yang di-import langsung ke komponen
│   ├── components/               # Komponen kecil yang dipakai berulang
│   │   ├── Badge/
│   │   ├── Button/
│   │   ├── Container/
│   │   ├── Footer/
│   │   ├── Heading/
│   │   ├── Navbar/
│   │   ├── ProjectCard/
│   │   ├── Section/
│   │   ├── StatCard/
│   │   ├── TechBadge/
│   │   └── ThemeToggle/          # Tombol dark/light mode
│   ├── data/
│   │   └── projects.js           # Data seluruh project (judul, deskripsi, teknologi, dll.)
│   ├── sections/                 # Bagian-bagian utama halaman (dipasang di App.jsx)
│   │   ├── Hero/
│   │   ├── TrustedTechnologies/
│   │   ├── About/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── WorkflowAutomation/
│   │   ├── TechStack/
│   │   └── Contact/
│   ├── App.jsx                    # Menyusun urutan semua section
│   ├── index.css                  # Import Tailwind + konfigurasi dark mode
│   └── main.jsx                   # Entry point React
└── README.md
```

> **Catatan:** ada beberapa komponen duplikat yang **tidak lagi dipakai** (`src/components/Hero`, `src/components/Header`, `src/components/Projects`) — sisa dari eksperimen awal. Aman untuk dihapus kapan saja karena `App.jsx` hanya memakai versi di dalam folder `src/sections/`.

---

## 🚀 Menjalankan Secara Lokal

Pastikan sudah terinstall **Node.js** (versi 18 ke atas disarankan).

```bash
# 1. Clone repository
git clone https://github.com/punyaapps-official/portfolio-website.git
cd portfolio-website

# 2. Install dependencies
npm install

# 3. Jalankan server development
npm run dev
```

Buka `http://localhost:5173` di browser.

Untuk build versi produksi:

```bash
npm run build     # hasil build ada di folder dist/
npm run preview   # preview hasil build secara lokal
```

---

## 🖼️ Cara Menambahkan Foto Project

Data project sudah disiapkan di `src/data/projects.js`, masing-masing sudah punya path foto (misalnya `/projects/helpscout.jpg`). Kamu hanya perlu:

1. Siapkan foto/screenshot project dengan spesifikasi berikut:

   | Ketentuan | Rekomendasi |
   |---|---|
   | Rasio | **16:9** (landscape) |
   | Resolusi | **1280 × 720 px** (atau 1600 × 900 px untuk layar retina/HD) |
   | Format | JPG atau WebP |
   | Ukuran file | Idealnya di bawah **300–400 KB** per foto (kompres dulu supaya loading cepat) |

2. Simpan foto ke folder `public/projects/` dengan nama file yang **sama persis** seperti yang tertulis di `src/data/projects.js`, contoh:

   ```
   public/projects/
   ├── helpscout.jpg
   ├── java-legal.jpg
   ├── master-tour.jpg
   ├── momentku.jpg
   ├── smarttravelism.jpg
   ├── automation.jpg
   ├── menara.jpg
   ├── nekomo.jpg
   ├── gis.jpg
   ├── kradio.jpg
   └── gijas.jpg
   ```

3. Kalau belum ada fotonya, kartu project akan otomatis menampilkan placeholder "Project Preview — 16:9 Screenshot" — jadi tidak akan error meskipun foto belum di-upload.

**Untuk foto profil di Hero** (`/profile2.png`): tampil dalam bingkai potret rasio kira-kira 3:4. Disarankan resolusi minimal **720 × 940 px**, orientasi potret, dengan wajah/subjek berada di tengah karena foto akan otomatis di-crop mengisi bingkai.

---

## 🎨 Menambahkan Project Baru

Untuk menambah project baru ke halaman, edit `src/data/projects.js` dan tambahkan objek baru ke dalam array `projects`:

```js
{
  id: 12,
  title: "Nama Project",
  category: "Kategori Project",
  client: "Nama Klien",
  company: "Nama Perusahaan/Freelance",
  year: "2026",
  role: "Peran Kamu",
  image: "/projects/nama-file.jpg",
  description: "Deskripsi singkat project.",
  technologies: ["Tech A", "Tech B"],
  impact: ["Hasil/dampak 1", "Hasil/dampak 2"],
  live: "https://link-demo.com",   // kosongkan "" jika tidak ada
  github: "https://github.com/...", // kosongkan "" jika tidak ada
},
```

---

## 📤 Deployment

Project ini sudah terhubung dengan **Vercel** dan akan otomatis ter-deploy ulang setiap kali ada push ke branch `main`.

```bash
git add .
git commit -m "Update: perbaikan responsif, dark mode, dan README"
git push origin main
```

---

## 📬 Kontak

- **Email:** galerimasiyan@gmail.com
- **WhatsApp:** [wa.me/6287856437290](https://wa.me/6287856437290)
- **LinkedIn:** _(lengkapi link LinkedIn kamu di `src/sections/Contact/Contact.jsx`)_
- **GitHub:** _(lengkapi link GitHub kamu di `src/sections/Contact/Contact.jsx`)_

> Catatan: link LinkedIn dan GitHub di bagian Contact saat ini masih placeholder (`YOUR_USERNAME`) — jangan lupa diganti dengan akun kamu yang sebenarnya.

---

## 📄 Lisensi

Kode ini bersifat pribadi (personal portfolio). Silakan gunakan sebagai referensi, tapi mohon tidak menyalin identik dengan konten pribadi (nama, foto, data project) yang ada di dalamnya.

# AkademiHub Landing Page

Landing page company profile untuk **AkademiHub** (domain: akamedihub.id) - Solusi Manajemen Sekolah Terintegrasi.

## 🚀 Teknologi

- **React** v18.3.1 - Library UI
- **React Router** v7.13.0 - Routing
- **Styled Components** v6.1.8 - CSS-in-JS styling
- **Vite** v5.4.1 - Build tool & dev server

## 📁 Struktur Folder

```
akademihub/
├── public/
│   └── index.html          # HTML entry point
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation header
│   │   └── Footer.jsx      # Footer dengan copyright
│   ├── pages/
│   │   ├── Home.jsx        # Hero banner + "Kenapa Memilih Kami?"
│   │   ├── Pillars.jsx     # 7 Pilar AkademiHub
│   │   ├── TechStack.jsx   # Daftar teknologi
│   │   └── Contact.jsx     # Informasi kontak & form
│   ├── routes/
│   │   └── AppRoutes.jsx   # Konfigurasi routing
│   ├── App.jsx             # Layout dengan Outlet
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 📋 Menu Navigasi

1. **Beranda** (`/`) - Hero banner & value proposition
2. **7 Pilar** (`/pillars`) - 7 pilar utama sistem:
   - Manajemen & Master
   - Akademik Digital
   - Keuangan (SPP)
   - Bimbingan Konseling (BK)
   - Perpustakaan Digital
   - PPDB Online
   - SPK (Decision Support)
3. **Tech Stack** (`/techstack`) - Teknologi yang digunakan
4. **Kontak** (`/contact`) - Email, telepon, alamat & form

## 🛠️ Instalasi & Menjalankan

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`

### 3. Build untuk Produksi

```bash
npm run build
```

Output build akan ada di folder `dist/`

### 4. Preview Build

```bash
npm run preview
```

## 🌐 Deployment

### Deploy ke Domain akamedihub.id

1. **Build aplikasi:**
   ```bash
   npm run build
   ```

2. **Upload folder `dist/` ke server:**
   - Gunakan FTP/SFTP ke hosting
   - Atau deploy ke Vercel, Netlify, atau Cloudflare Pages

3. **Konfigurasi server (untuk SPA routing):**
   
   **Apache (.htaccess):**
   ```apache
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```
   
   **Nginx:**
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

## 🎨 Fitur

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations & transitions
- ✅ SEO-friendly meta tags
- ✅ Styled-components untuk styling
- ✅ React Router v7 dengan Outlet pattern
- ✅ 404 Not Found page
- ✅ Contact form dengan validasi
- ✅ Modern gradient design

## 📝 License

© 2024 AkademiHub. Hak Cipta Dilindungi.

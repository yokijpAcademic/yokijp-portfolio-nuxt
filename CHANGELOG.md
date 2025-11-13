# Portfolio Website Updates

## Perubahan yang Dilakukan

### 1. Toggle Bahasa Indonesia/Inggris
- Ditambahkan composable `useLanguage.js` untuk manajemen bahasa
- Toggle bahasa ditambahkan di Navbar dengan icon bendera
- Semua text di website sudah support multi-bahasa

### 2. Tech Stack dengan Dropdown
- Dibuat komponen `TechStackDropdown.vue` untuk menampilkan tech stack dalam dropdown
- Tech stack sekarang tersembunyi dan bisa dibuka dengan klik button

### 3. Hapus Section Logo Perusahaan
- `ClientsSection.vue` dihapus dari halaman index
- Import `ClientsSection` dihapus dari pages/index.vue

### 4. Fungsikan Tombol Download Resume
- Tombol download resume sekarang functional
- Link ke `/public/resume.pdf`
- File placeholder resume sudah dibuat di `/public/resume.pdf`
- **CATATAN**: Ganti file `resume.pdf` dengan CV asli Anda

## Cara Menggunakan

### Toggle Bahasa
Klik tombol di navbar yang menampilkan icon bendera dan kode bahasa (ID/EN).

### Upload Resume
1. Siapkan file CV Anda dalam format PDF
2. Ganti file `/public/resume.pdf` dengan CV Anda
3. Nama file download akan otomatis menjadi "Yoki_J_Perkasa_Resume.pdf"

### Tech Stack Dropdown
Klik button "Tech Stack" pada setiap project untuk melihat teknologi yang digunakan.

## File yang Dibuat/Diubah

### File Baru:
- `composables/useLanguage.js` - Composable untuk multi-language
- `components/TechStackDropdown.vue` - Dropdown component untuk tech stack
- `components/ProjectTechStack.vue` - Component helper untuk project dengan tech stack
- `components/sections/ProjectsSectionsNew.vue` - Versi baru projects section dengan dropdown
- `public/resume.pdf` - Placeholder untuk resume (HARUS DIGANTI)

### File Diubah:
- `components/Navbar.vue` - Ditambah toggle bahasa
- `components/sections/HeroSection.vue` - Multi-language + functional download button
- `components/sections/AboutMeSection.vue` - Multi-language
- `components/sections/ServicesSection.vue` - Multi-language
- `components/sections/CtaSection.vue` - Multi-language
- `components/sections/BlogSection.vue` - Multi-language
- `pages/index.vue` - Hapus ClientsSection import

## Catatan Penting

1. **Resume PDF**: Jangan lupa ganti file `public/resume.pdf` dengan CV asli Anda
2. **ProjectsSection**: Masih menggunakan versi simplified. Jika ingin menambah lebih banyak project, edit file `components/sections/ProjectsSectionsNew.vue`
3. **Bahasa Default**: Bahasa default adalah Indonesia (id). Bisa diubah di `composables/useLanguage.js`

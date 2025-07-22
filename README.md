# Portofolio Website

Sebuah website portofolio modern dan responsif yang dibuat menggunakan HTML, CSS, dan JavaScript vanilla.

## Fitur

### Desain Modern
- **Minimalisme yang Berani**: Desain bersih dengan fokus pada konten utama
- **Elemen Berlapis**: Penggunaan lapisan untuk menambah kedalaman visual
- **Gradien dan Animasi**: Efek visual yang menarik dan smooth
- **Dark Mode**: Toggle untuk beralih antara mode terang dan gelap

### Interaktivitas
- **Smooth Scrolling**: Navigasi yang halus antar bagian
- **Animasi Scroll**: Elemen muncul dengan animasi saat di-scroll
- **Hover Effects**: Efek interaktif pada tombol dan kartu proyek
- **Typing Effect**: Animasi mengetik pada judul hero
- **Ripple Effect**: Efek gelombang pada tombol saat diklik

### Responsif
- **Mobile-First Design**: Optimized untuk semua ukuran layar
- **Flexible Grid**: Layout yang adaptif menggunakan CSS Grid dan Flexbox
- **Touch-Friendly**: Elemen yang mudah diakses di perangkat mobile

### Fitur Tambahan
- **Form Validation**: Validasi email dan field yang diperlukan
- **Notification System**: Sistem notifikasi untuk feedback pengguna
- **Loading Animation**: Animasi loading saat website dimuat
- **Parallax Effect**: Efek parallax pada gambar hero

## Struktur File

```
portfolio_website/
├── index.html          # File HTML utama
├── style.css           # Stylesheet dengan desain modern
├── script.js           # JavaScript untuk interaktivitas
├── README.md           # Dokumentasi ini
└── assets/
    ├── profile_picture.jpg      # Foto profil
    ├── project_placeholder_1.png # Gambar proyek 1
    └── project_placeholder_2.png # Gambar proyek 2
```

## Cara Menggunakan

1. **Personalisasi Konten**:
   - Ganti `[Nama Anda]` dengan nama Anda di `index.html`
   - Ganti `[Profesi Anda]` dengan profesi Anda
   - Ganti `[Bidang Minat Anda]` dengan bidang minat Anda
   - Update bagian "Tentang Saya" dengan informasi pribadi Anda

2. **Ganti Gambar**:
   - Ganti `assets/profile_picture.jpg` dengan foto profil Anda
   - Ganti gambar placeholder proyek dengan screenshot proyek Anda
   - Pastikan ukuran gambar sesuai untuk performa optimal

3. **Update Proyek**:
   - Tambah atau edit proyek di bagian `#projects`
   - Sertakan deskripsi, teknologi yang digunakan, dan link ke proyek

4. **Kustomisasi Warna**:
   - Edit variabel warna di `style.css` untuk menyesuaikan dengan brand Anda
   - Warna utama saat ini: `#3498db` (biru)

## Teknologi yang Digunakan

- **HTML5**: Struktur semantik dan modern
- **CSS3**: 
  - Flexbox dan Grid untuk layout
  - CSS Variables untuk konsistensi warna
  - Animations dan Transitions
  - Media Queries untuk responsivitas
- **JavaScript ES6+**:
  - Intersection Observer API untuk animasi scroll
  - Event Listeners untuk interaktivitas
  - Form validation
  - Local Storage (untuk dark mode preference)

## Browser Support

Website ini mendukung semua browser modern:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Optimasi Performa

- **Lazy Loading**: Gambar dimuat saat diperlukan
- **Minified Assets**: CSS dan JS dioptimalkan untuk ukuran file
- **Responsive Images**: Gambar yang sesuai untuk berbagai ukuran layar
- **Efficient Animations**: Menggunakan `transform` dan `opacity` untuk performa terbaik

## Customization Tips

### Mengubah Skema Warna
```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-secondary-color;
  --accent-color: #your-accent-color;
}
```

### Menambah Proyek Baru
```html
<div class="project-item">
    <img src="assets/your-project.jpg" alt="Project Name">
    <h3>Project Name</h3>
    <p>Project description...</p>
    <a href="#" class="btn-small">Lihat Detail</a>
</div>
```

### Mengubah Animasi
Sesuaikan durasi dan easing di `style.css`:
```css
.element {
    transition: all 0.3s ease;
}
```

## Deployment

Website ini dapat di-deploy ke:
- **GitHub Pages**: Upload ke repository GitHub dan aktifkan Pages
- **Netlify**: Drag & drop folder ke Netlify
- **Vercel**: Connect repository atau upload folder
- **Web Hosting**: Upload semua file ke public_html

## Lisensi

Bebas digunakan untuk keperluan pribadi dan komersial.

## Kontribusi

Jika Anda menemukan bug atau ingin menambah fitur, silakan buat issue atau pull request.

---

Dibuat dengan ❤️ menggunakan HTML, CSS, dan JavaScript vanilla.


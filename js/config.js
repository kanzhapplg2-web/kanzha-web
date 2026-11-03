/* ================================================================
   ✏️  CONFIG.JS — FILE KONFIGURASI PORTOFOLIO
   ================================================================
   Halo! File ini adalah SATU-SATUNYA file yang perlu kamu ubah.
   Ikuti petunjuk di setiap bagian, lalu simpan dan refresh browser.
   Jangan ubah file lain kecuali kamu sudah paham JavaScript.
   ================================================================ */


/* ----------------------------------------------------------------
   👤 PROFIL UTAMA
   Ubah nama, tagline, deskripsi, dan info pribadimu di sini.
   ---------------------------------------------------------------- */
const CONFIG_PROFILE = {
    name: "Kanzha Ariesna Rahmadhany",   // Nama lengkap kamu
    initials: "KNZ",                  // 2 huruf inisial (untuk logo & avatar)
    tagline: "Front End Development ", // Kalimat singkat di bawah nama
    greeting: "Halo, saya",          // Kata sapaan sebelum nama besar
    bio: [
        // Paragraf pertama tentang kamu (boleh diedit bebas)
        `Saya adalah siswa kelas XI SMK Brantas Karangkates, jurusan <strong>Rekayasa Perangkat Lunak (RPL)</strong>. Saya memiliki minat di bidang pengembangan perangkat lunak dan ingin terus memperluas pengalaman serta kemampuan saya di bidang teknologi. saya ingin menambah pengalaman serta mengembangkan keterampilan saya di bidang Rekayasa Perangkat Lunak.`,
        // Paragraf kedua (teknologi yang kamu pakai)
        `Dalam mengembangkan website, saya menggunakan <strong>HTML dan CSS</strong> untuk membuat struktur serta tampilan website yang menarik dan terorganisir. Saya menerapkan desain responsif agar website dapat tampil dengan maksimal pada berbagai ukuran layar dan perangkat. Saya juga terus mengembangkan kemampuan dalam bidang web development, khususnya dalam membuat tampilan yang rapi, sederhana, responsif, dan nyaman digunakan oleh pengguna.`,
    ],

    // Info detail di kartu about
    location: "Malang, Jawa Timur",
    education: "SMK Brantas Karangkates",
    focus: "RPL",
    languages: "Indonesia",

    // Status badge di hero & about (ganti teks sesuai kondisimu)
    status: "Sedang Sekolah",   // contoh: "Sedang Sekolah" / "Open to Projects"
    statusOpen: true,    // true = titik hijau (aktif), false = titik merah

    // Link tombol "Unduh CV" — ganti dengan path file CV kamu
    cvLink: "file/cv.pdf",     // contoh: "file/cv-rizky.pdf"
};


/* ----------------------------------------------------------------
   📊 STATISTIK HERO
   Angka yang muncul di bagian bawah hero dengan animasi counter.
   ---------------------------------------------------------------- */
const CONFIG_STATS = [
    { number: 4, label: "Proyek" },
    { number: 0, label: "Tahun pengalaman" },
    { number: 0, label: "Klien" },
];


/* ----------------------------------------------------------------
   🔗 SOSIAL MEDIA & KONTAK
   Ganti nilai "url" dengan link profilmu. Kosongkan ("") untuk sembunyi.
   ---------------------------------------------------------------- */
const CONFIG_SOCIAL = {
    email: "kanzha.pplg2@gmail.com",
    instagram: "https://www.instagram.com/knzacca?igsh=Y2kxN241eTJzZXRt.dev",   // kosongkan "" untuk sembunyikan
    github: "",
    linkedin: "www.linkedin.com/in/kanzha-ariesna-01a372384",
    twitter: "",   // kosongkan "" untuk sembunyikan
};


/* ----------------------------------------------------------------
   🛠️  KEAHLIAN (SKILLS)
   Tambah / hapus skill sesuai kemampuanmu.
   Skill bar: nilai 0–100 (persentase kemampuan).
   ---------------------------------------------------------------- */
const CONFIG_SKILLS = {
    categories: [
        {
            icon: "fa-solid fa-desktop",
            title: "Frontend",
            tags: ["HTML", "CSS"],
        },
        {
             icon: "fa-solid fa-server",
            title: "Backend",
            tags: ["MySQL", "PHP"],
        },
        {
            icon: "fa-solid fa-wrench",
            title: "Tools & Others",
            tags: ["VS Code", "Canva", "Figma"],
        },
    ],

    bars: [
        { name: "UI / UX Design", pct: 90 },
        { name: "Frontend Development", pct: 80 },
    ],
};


/* ----------------------------------------------------------------
   💼 PROYEK
   Tambah proyek baru dengan menambah blok { ... } di bawah.
   category harus salah satu dari: "Web App" / "Mobile" / "Game" / "Web"
   ---------------------------------------------------------------- */
const CONFIG_PROJECTS = [
    {
        title: "Website Universitas Sebelas Maret",
        desc: "Website informasi Universitas Sebelas Maret yang menampilkan profil, informasi akademik, dan berbagai informasi kampus.",
        tags: ["HTML"],
        category: "Web App",
        image: "img/uns.jpg",
        link: "https://drive.google.com/drive/folders/1AEQguemB0qkKEN6ohlL0v747mCIHMD3-?usp=drive_link",
    },

    {
        title: "Web Toko Online Wardah",
        desc: "Website toko online produk Wardah dengan tampilan katalog produk yang menarik dan mudah digunakan.",
        tags: ["HTML", "CSS"],
        category: "Web App",
        image: "img/wardahlogo.jpg",
        link: "https://drive.google.com/drive/folders/1UotAsUUCON7D76E6SZh5DGiDKKAi0ER7?usp=drive_link",
    },

    {
        title: "Praktikum HTML",
        desc: "Kumpulan latihan dan praktikum HTML untuk mempelajari struktur dasar halaman web, elemen, tabel, form, dan berbagai komponen HTML.",
        tags: ["HTML", "CSS"],
        category: "Web App",
        image: "img/html.jpg",
        link: "https://drive.google.com/drive/folders/1z3K2_jvQxL82DZ5d39vihxlFtLm3SUiC?usp=drive_link",
    },

    {
        title: "Explore Malang",
        desc: "Desain UI/UX bertema Explore Malang yang menampilkan berbagai informasi dan rekomendasi tempat menarik di Malang.",
        tags: ["Figma", "UI/UX", "Design"],
        category: "Web App",
        image: "img/explore.jpg",
        link: "https://www.figma.com/design/fVXyJVJErgUALC6xx3Fxzi/EXPLORE-MALANG?m=auto&t=2ZfHMwEfFgBUx24N-6",
    },
];


/* ----------------------------------------------------------------
   🎨 WARNA TEMA  (opsional — skip jika tidak mau ubah)
   Ganti kode warna hex sesuai selera.
   ---------------------------------------------------------------- */
const CONFIG_THEME = {
    accent: "#40629e",   // warna utama (ungu)
    accent2: "rgb(233, 236, 242)",   // warna kedua (pink)
};
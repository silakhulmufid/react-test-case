# React News App - Frontend Challenge

Aplikasi berita modern yang dibangun dengan React, TypeScript, dan Ant Design. Aplikasi ini mengintegrasikan NewsAPI untuk menampilkan artikel berita terkini dengan fitur pencarian dan detail artikel.

## 🚀 Fitur Utama

- ✅ **List View**: Menampilkan daftar artikel berita dengan infinite scroll
- ✅ **Detail View**: Halaman detail artikel dengan informasi lengkap
- ✅ **Search**: Fitur pencarian artikel berdasarkan keyword
- ✅ **Responsive Design**: UI yang responsif untuk berbagai ukuran layar
- ✅ **State Management**: Menggunakan Redux Toolkit dengan Redux Saga
- ✅ **Testing**: Unit testing dengan Vitest dan Testing Library
- ✅ **Clean Architecture**: Implementasi clean architecture pattern

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 dengan TypeScript
- **UI Library**: Ant Design 5.x
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit + Redux Saga
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Testing**: Vitest + Testing Library
- **Code Quality**: ESLint + Prettier

## 📁 Struktur Project

```
react-test-case/
├── algorithm/                 # Solusi algoritma challenge
│   ├── countDiagonalMatric.ts
│   ├── countQuery.ts
│   ├── longest.ts
│   └── reverse.ts
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, fonts, dan static files
│   ├── components/           # Reusable components
│   │   ├── cards/           # Card components
│   │   ├── infinite-scroll/ # Infinite scroll component
│   │   ├── loader/          # Loading components
│   │   ├── meta/            # SEO meta components
│   │   └── navigation-handler/
│   ├── constant/            # Application constants
│   ├── hooks/               # Custom React hooks
│   ├── layouts/             # Layout components
│   ├── pages/               # Page components
│   │   ├── article/         # Article detail page
│   │   ├── home/            # Home page
│   │   ├── not-found/       # 404 page
│   │   └── search/          # Search page
│   ├── routes/              # Routing configuration
│   ├── store/               # Redux store setup
│   │   ├── news/            # News slice
│   │   ├── hooks.ts         # Typed hooks
│   │   ├── rootReducer.ts   # Root reducer
│   │   └── rootSaga.ts      # Root saga
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   └── main.tsx             # Application entry point
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🚀 Instalasi dan Setup

### Prerequisites

- Node.js (versi 18 atau lebih tinggi)
- pnpm (package manager yang direkomendasikan)

### Langkah Instalasi

1. **Clone repository**

   ```bash
   git clone https://github.com/silakhulmufid/react-test-case.git
   cd react-test-case
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Setup Environment Variables**

   ```bash
   # Copy file environment
   cp local.env .env

   # Edit file .env dan uncomment VITE_NEWS_API_KEY
   # VITE_NEWS_API_KEY=your_newsapi_key_here
   ```

4. **Dapatkan API Key dari NewsAPI**
   - Kunjungi [NewsAPI.org](https://newsapi.org/)
   - Daftar untuk mendapatkan API key gratis
   - Masukkan API key ke file `.env`

5. **Jalankan aplikasi**

   ```bash
   pnpm dev
   ```

   Aplikasi akan berjalan di `http://localhost:5173`

## 📝 Available Scripts

```bash
# Development
pnpm dev          # Menjalankan development server
pnpm build        # Build aplikasi untuk production
pnpm preview      # Preview build production

# Testing
pnpm test         # Menjalankan unit tests

# Code Quality
pnpm lint         # Menjalankan ESLint
pnpm format       # Format code dengan Prettier
```

## 🧪 Testing

Project ini menggunakan Vitest untuk unit testing:

```bash
# Menjalankan semua tests
pnpm test

# Menjalankan tests dalam watch mode
pnpm test --watch

# Menjalankan tests dengan coverage
pnpm test --coverage
```

## 🏗️ Architecture

Aplikasi ini mengimplementasikan **Clean Architecture** dengan pemisahan yang jelas antara:

- **Presentation Layer**: Components, Pages, Layouts
- **Business Logic Layer**: Redux Store, Sagas
- **Data Layer**: API calls, Types

### State Management

- **Redux Toolkit**: Untuk state management yang efisien
- **Redux Saga**: Untuk handling side effects dan async operations
- **Typed Hooks**: Custom hooks dengan TypeScript support

## 📱 Fitur Aplikasi

### Home Page

- Menampilkan artikel berita terbaru
- Infinite scroll untuk loading artikel tambahan
- Card design yang responsive

### Search Page

- Pencarian artikel berdasarkan keyword
- Real-time search results
- Pagination support

### Article Detail

- Halaman detail artikel dengan informasi lengkap
- SEO optimized dengan meta tags
- Responsive image handling

## 🔍 Algoritma Challenge

Folder `algorithm/` berisi solusi untuk 4 soal algoritma:

### 1. String Reverse (reverse.ts)

Reverse alphabet dalam string dengan angka tetap di akhir

```typescript
reverseString("NEGIE1") // "EIGEN1"
```

### 2. Longest Word (longest.ts)

Mencari kata terpanjang dalam kalimat

```typescript
longest("Saya sangat senang mengerjakan soal algoritma")
// "mengerjakan: 11 character"
```

### 3. Query Counter (countQuery.ts)

Menghitung kemunculan kata dalam array

```typescript
INPUT = ["xc", "dz", "bbb", "dz"]
QUERY = ["bbb", "ac", "dz"]
OUTPUT = [1, 0, 2]
```

### 4. Diagonal Matrix (countDiagonalMatric.ts)

Menghitung selisih diagonal matrix

```typescript
Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
]
// diagonal pertama = 1 + 5 + 9 = 15
// diagonal kedua = 0 + 5 + 7 = 12
// hasil = 15 - 12 = 3
```

## 🚀 Deployment

Aplikasi ini sudah dikonfigurasi untuk deployment di Vercel:

1. **Build aplikasi**

   ```bash
   pnpm build
   ```

2. **Deploy ke Vercel**
   - Connect repository ke Vercel
   - Set environment variables di Vercel dashboard
   - Deploy otomatis akan berjalan

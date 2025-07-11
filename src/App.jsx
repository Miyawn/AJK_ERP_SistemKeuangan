import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Impor Layout dan Halaman
import DashboardLayout from '@/components/layout/DashboardLayout';
import UserDashboard from './pages/UserDashboard';
// import MarketplacePage from '@/pages/MarketplacePage'; // Contoh untuk halaman lain

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Semua rute di dalam sini akan menggunakan DashboardLayout */}
        <Route element={<DashboardLayout />}>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/tracking" element={<UserDashboard />} />
          {/* Contoh menambahkan rute baru:
            1. Buat file MarketplacePage.jsx di folder pages
            2. Impor di sini
            3. Tambahkan baris di bawah:
            <Route path="/marketplace" element={<MarketplacePage />} />
          */}
        </Route>
        
        {/* Anda bisa menambahkan rute lain di luar layout di sini, contoh: halaman login */}
        {/* <Route path="/login" element={<LoginPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

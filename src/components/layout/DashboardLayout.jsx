import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

// Komponen ini akan menjadi layout dasar untuk semua halaman di dalam dashboard
function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        {/* Konten halaman dinamis akan dirender di sini */}
        <main className="p-6 bg-gray-50/50 flex-1 overflow-y-auto">
            <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;

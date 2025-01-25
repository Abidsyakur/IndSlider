// src/app/components/Navbar/Navbar.tsx
"use client"; // Karena menggunakan useState

import HamburgerMenu from './HamburgerMenu';

export default function Navbar() {
  const tabs = ["О школе", "Курсы", "Библиотека"];

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo dan Teks */}
      <div className="flex items-center space-x-2">
        {/* Gambar Logo */}
        <img
          src="/images/logo.png" // Ganti dengan path gambar logo Anda
          alt="Logo"
          className="w-10 h-10" // Sesuaikan ukuran logo
        />
        {/* Teks STEMPS */}
        <div className="text-xl font-bold text-black">
          STEMPS
        </div>
      </div>

      {/* Menu Tengah (Desktop) */}
      <div className="hidden md:flex space-x-6">
        {tabs.map((tab, index) => (
          <a
            key={index}
            href="#" // Ganti dengan link yang sesuai
            className="px-4 py-2 text-gray-700 hover:text-purple-500"
          >
            {tab}
          </a>
        ))}
      </div>

      {/* Hamburger Menu (Mobile) */}
      <HamburgerMenu tabs={tabs} />

      {/* Teks Logout */}
      <div className="flex items-center space-x-2">
   <a
        href="#" // Ganti dengan link yang sesuai
        className="text-black"
      >
        Вход
      </a>
       <img
          src="/images/logout.png" // Ganti dengan path gambar logo Anda
          alt="Logo"
          className="w- h-5" // Sesuaikan ukuran logo
        />
      </div>
   
    </nav>
  );
}
// src/app/components/Navbar/HamburgerMenu.tsx
"use client"; // Karena menggunakan useState

import { useState } from 'react';

interface HamburgerMenuProps {
  tabs: string[];
}

export default function HamburgerMenu({ tabs }: HamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* Tombol Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
          {tabs.map((tab, index) => (
            <a
              key={index}
              href="#" // Ganti dengan link yang sesuai
              onClick={() => setIsOpen(false)} // Tutup dropdown setelah memilih menu
              className="block w-full px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
            >
              {tab}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
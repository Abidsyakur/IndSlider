// src/app/components/HeroSection.tsx
"use client"; // Karena menggunakan useState

import CardSlider from './CardSlider';

export default function HeroSection() {
  const cards = [
    { 
      id: 1, 
      image: "/images/1.png", // Ganti dengan URL gambar yang sesuai
      content: "Анализ текущего состояния карьеры" 
    },
    { 
      id: 2, 
      image: "/images/2.png", // Ganti dengan URL gambar yang sesuai
      content: "Поиск работы" 
    },
    { 
      id: 3, 
      image: "/images/3.png", // Ganti dengan URL gambar yang sesuai
      content: "Сопроводительные письма и резюме" 
    },
    { 
      id: 4, 
      image: "/images/4.png", // Ganti dengan URL gambar yang sesuai
      content: "Тренинг по презентации личного бренда" 
    },
    { 
      id: 5, 
      image: "/images/5.png", // Ganti dengan URL gambar yang sesuai
      content: "Подготовка собеседованию" 
    },
    { 
      id: 6, 
      image: "/images/6.png", // Ganti dengan URL gambar yang sesuai
      content: "Рекомендация по базе STEMPS Career" 
    },
  ];

  return (
    <div className="pt-16 p-4 md:p-8 text-black bg-gray-100"> {/* Tambahkan pt-16 untuk padding-top */}
      <h1 className="text-2xl md:text-3xl text-purple-500 font-bold text-center mb-4 md:mb-8">Наши услуги</h1>
      <CardSlider cards={cards} />
    </div>
  );
}
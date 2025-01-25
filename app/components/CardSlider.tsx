// src/app/components/CardSlider.tsx
"use client"; // Karena menggunakan useState dan framer-motion

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';

interface Card {
  id: number;
  image: string; // URL gambar
  content: string;
}

interface CardSliderProps {
  cards: Card[];
}

export default function CardSlider({ cards }: CardSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fungsi untuk menampilkan 1 card di mobile dan 3 card di desktop
  const visibleCards = cards.slice(currentIndex, currentIndex + (window.innerWidth < 768 ? 1 : 3));

  // Fungsi untuk mengubah slide berdasarkan index
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Slider Content */}
      <div className="flex space-x-4 overflow-hidden">
        <AnimatePresence initial={false}>
          {visibleCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: 50 }} // Animasi awal
              animate={{ opacity: 1, x: 0 }} // Animasi saat muncul
              exit={{ opacity: 0, x: -50 }} // Animasi saat menghilang
              transition={{ duration: 0.5 }} // Durasi animasi
              className="w-full md:w-1/3 flex-shrink-0"
            >
              <Card image={card.image} content={card.content} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {cards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
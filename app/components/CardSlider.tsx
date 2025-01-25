"use client"; // Убедитесь, что компонент выполняется на стороне клиента

import { useState, useEffect } from 'react'; // Добавьте useEffect
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card';

interface Card {
  id: number;
  image: string; // URL изображения
  content: string;
}

interface CardSliderProps {
  cards: Card[];
}

export default function CardSlider({ cards }: CardSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Состояние для определения мобильного устройства

  // Используйте useEffect для работы с window
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Определяем, является ли устройство мобильным
    };

    handleResize(); // Установите начальное значение
    window.addEventListener('resize', handleResize); // Следите за изменением размера окна

    return () => {
      window.removeEventListener('resize', handleResize); // Очистите слушатель при размонтировании
    };
  }, []);

  // Функция для отображения видимых карточек
  const visibleCards = cards.slice(currentIndex, currentIndex + (isMobile ? 1 : 3));

  // Функция для перехода к следующему слайду
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + (isMobile ? 1 : 3)) % cards.length);
  };

  // Функция для перехода к предыдущему слайду
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - (isMobile ? 1 : 3) + cards.length) % cards.length);
  };

  // Функция для перехода к конкретному слайду
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      {/* Слайдер */}
      <div className="flex space-x-4 overflow-hidden">
        <AnimatePresence initial={false}>
          {visibleCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: 50 }} // Анимация появления
              animate={{ opacity: 1, x: 0 }} // Анимация при появлении
              exit={{ opacity: 0, x: -50 }} // Анимация при исчезновении
              transition={{ duration: 0.5 }} // Длительность анимации
              className="w-full md:w-1/3 flex-shrink-0"
            >
              <Card image={card.image} content={card.content} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Пагинация */}
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

      {/* Кнопки навигации (опционально) */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
}
// src/app/components/Card.tsx
interface CardProps {
  image: string; // URL gambar
  content: string;
}

export default function Card({ image, content }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-48 flex flex-col ">
      {/* Gambar */}
      <img src={image} alt="Card Image" className="w-16 h-16 mb-4" /> {/* Sesuaikan ukuran gambar */}
      
      {/* Konten */}
      <p className="text-sm md:text-base " style={{ fontSize: '30px' }}> {/* Debugging: tambahkan style inline */}
        {content}
      </p>
    </div>
  );
}
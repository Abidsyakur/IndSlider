// src/app/page.tsx
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
    </main>
  );
}
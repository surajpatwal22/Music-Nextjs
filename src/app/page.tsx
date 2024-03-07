'use client'
import HeroSection from '@/Components/HeroSection';
import FeaturedSection from '@/Components/FeaturedSection';


export default function Home() {
  return (
   <div className="min-h-screen bg-black/20 antialiased bg-grid-white/[]">
    <HeroSection />
    <FeaturedSection />
   </div>
  );
}

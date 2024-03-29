'use client'
import HeroSection from '@/Components/HeroSection';
import FeaturedSection from '@/Components/FeaturedSection';
import WhychooseUse from '@/Components/WhychooseUse';
import MusicTestimonail from '@/Components/MusicTestimonail';
import UpcomingWebinars from '@/Components/UpcomingWebinars';



export default function Home() {
  return (
   <div className="min-h-screen bg-black/20 antialiased bg-grid-white/[]">
    <HeroSection />
    <FeaturedSection />
    <WhychooseUse />
    <MusicTestimonail />
    <UpcomingWebinars />
   </div>
  );
}

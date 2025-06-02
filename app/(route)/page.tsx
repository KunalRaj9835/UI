import React from 'react';
import type { Metadata } from 'next';
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import VideoSection from "@/components/VideoSection";
import FAQSection from "@/components/FAQSection";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Frontpage',
  description: 'Description',
}

const BackgroundAnimation: React.FC = () => {
  return (
    <>
      {/* Background gradient elements */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        {/* Top Right Corner */}
        <div 
          className="absolute top-0 right-0 w-[483px] h-[473px] rounded-full blur-[60px] pointer-events-none"
          style={{
            background: 'linear-gradient(175deg, rgba(155, 236, 0, 0.05), rgba(148, 200, 50, 0.05))'
          }} 
        />
        
        {/* Center of Hero Section */}
        <div 
          className="absolute top-[200px] left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[60px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(155, 236, 0, 0.1), transparent 70%)'
          }} 
        />
        
        {/* Tools Section Left */}
        <div 
          className="absolute top-[1000px] -left-[100px] w-[400px] h-[400px] rounded-full blur-[60px] pointer-events-none"
          style={{
            background: 'linear-gradient(180deg, rgba(155, 236, 0, 0.08), transparent)'
          }} 
        />
        
        {/* Footer Section Left Start */}
        <div 
          className="absolute bottom-[50px] left-0 w-[350px] h-[350px] rounded-full blur-[60px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(88, 134, 0, 0.1), transparent 70%)'
          }} 
        />
        
        {/* Beside FAQ Section */}
        <div 
          className="absolute top-[1800px] right-[50px] w-[400px] h-[400px] rounded-full blur-[60px] pointer-events-none"
          style={{
            background: 'linear-gradient(145deg, rgba(148, 200, 50, 0.10), transparent)'
          }} 
        />
        
        {/* Darker background behind 'Join Waitlist' button */}
        <div 
          className="absolute top-[270px] left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] rounded-full blur-[60px] pointer-events-none z-[1]"
          style={{
            background: 'radial-gradient(circle, rgba(88, 134, 0, 0.25), transparent 70%)'
          }} 
        />

        {/* Animated blobs - these will be handled by global CSS */}
        <div className="blob-left" />
        <div className="blob-right" />
      </div>
    </>
  );
};


export default function HomePage() {
  return (
    <>
      <BackgroundAnimation />
      {/* Your homepage content goes here */}
      <main>
        <Navbar />
     
          <Hero />
          {/* Hero content */}
   
         <ProductCard />
        <VideoSection />
        <FAQSection />
        <Footer />
        {/* Other homepage sections */}
      </main>
    </>
  );
}
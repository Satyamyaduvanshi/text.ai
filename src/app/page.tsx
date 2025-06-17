"use client";

import NavBar from "@/components/navBar";
import HeroSection from "@/components/landing/heroSection";
import SecondSection from "@/components/landing/2ndSection";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import FifthSection from "@/components/5section";
import MSecondSection from "@/components/secondSection";

export default function Home() {
  useEffect(() => {
    // Ensure the page starts at the top and prevent any initial scroll
    window.scrollTo(0, 0);
    //document.body.style.overflow = "auto";
    
    // Add a minimum height to ensure proper scrolling
    document.documentElement.style.minHeight = "200vh";
  }, []);

  // return (
  //   <main className="relative w-full min-h-[200vh] overflow-x-hidden">
  //     <div className="relative w-full">
  //       <NavBar />
  //       <HeroSection />
  //       <SecondSection />
  //       <FifthSection/>
  //       <div>
  //       <Footer />
  //       </div>
  //     </div>
  //   </main>
  // );

  return (
    <main className="relative">
      <div className="relative">
      <NavBar />
      <HeroSection />
      <MSecondSection/>
      </div>
    </main>
  );
}

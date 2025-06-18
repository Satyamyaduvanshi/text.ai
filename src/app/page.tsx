"use client";

import NavBar from "@/components/navBar";
import HeroSection from "@/components/landing/heroSection";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import FifthSection from "@/components/5section";
import MSecondSection from "@/components/secondSection";
import ThirdSection from "@/components/3rdSection";

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
    <main className="">
      <div className="">
      <NavBar />
      <HeroSection />
      <MSecondSection/>
      <ThirdSection/>
      <FifthSection/>
      <Footer/>

      <div className="fixed bottom-0 left-0 w-full h-[90px] z-[200]">
      <div 
        className="w-full h-full"
        style={{
      background: 'linear-gradient(0deg, rgba(43,43,43,1) -200%, rgba(43,43,43,0) 80%)'
      }}
      />
      </div>

{/* For responsive design, add this in your CSS file or style tag: */}
<style>{`
  @media (min-width: 810px) and (max-width: 1199px) {
    .fixed > div {
      height: 80px;
    }
  }
`}</style>
     
      </div>
    </main>
  );
}

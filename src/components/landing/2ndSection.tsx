"use client";

import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedIcon from "@/lib/AnimationIcon";

export default function SecondSection() {
  const sectionRef = useRef(null);
  const phoneRef = useRef(null);
  const swapRef = useRef(null);
  const iconsRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Listen for initial scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced scroll-based animations with adjusted trigger points - much slower
  const translateY = useTransform(scrollYProgress, [0, 0.7], ["100vh", "0vh"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [0.95, 1]);

  // Icons animation based on scroll - slower and smoother
  const iconsOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  const iconsScale = useTransform(scrollYProgress, [0.7, 0.85], [0.8, 1]);

  // Screen 2 animation based on scroll - slower and smoother
  const screen2Opacity = useTransform(scrollYProgress, [0.85, 1], [0, 1]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ 
        translateY: hasScrolled ? translateY : "100vh",
        opacity: hasScrolled ? opacity : 0,
        scale: hasScrolled ? scale : 0.95,
      }}
      className="fixed w-full h-screen z-20 overflow-hidden pointer-events-non"
    >
      {/* Sticky Phone */}
      <div className="h-full w-full pt-32 flex items-center justify-center sticky top-0 z-10 pointer-events-none bg-gradient-to-b from-gray-700 to-black">
        <motion.div
          className="relative w-[411px] h-[800px] pointer-events-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ 
            opacity: hasScrolled ? 1 : 0,
            y: hasScrolled ? 0 : 100
          }}
          transition={{ 
            duration: 3,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          {/* Phone Frame */}
          <img
            src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb544_iPhone14Pro.png"
            alt="Phone Frame"
            className="absolute w-full z-20"
          />

          {/* Screen 1 */}
          <motion.img
            style={{
              opacity: hasScrolled ? 1 : 0
            }}
            transition={{ 
              duration: 2.5,
              ease: [0.4, 0, 0.2, 1]
            }}
            src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/67fb7b8357845eeb8b19fb00_New%20Hiking1%20Group%20Chat.png"
            alt="Screen 1"
            className="absolute w-[329px] top-9 left-10 z-10"
          />

          {/* Screen 2 */}
          <motion.img
            style={{
              opacity: screen2Opacity
            }}
            transition={{ 
              duration: 3,
              ease: [0.4, 0, 0.2, 1]
            }}
            src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/67fb7b83db493a47b863a8fb_New%20Hiking2%20Group%20Chat.png"
            alt="Screen 2"
            className="absolute w-[329px] top-9 left-10 z-10"
          />

          {/* Animated Icons */}
          <div ref={iconsRef}>
            <AnimatedIcon src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb541_swatch.svg" className="top-[120px] left-[-100px]" delay={1.2} size={70} controls={iconsOpacity} />
            <AnimatedIcon src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb528_photo.svg" className="top-[40%] right-[-130px]" delay={1.4} size={70} controls={iconsOpacity} />
            <AnimatedIcon src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb526_sparkles.svg" className="bottom-[20%] left-[-50px]" delay={1.6} size={70} controls={iconsOpacity} />
            <AnimatedIcon src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb540_fire.svg" className="top-[0%] left-[90%]" delay={1.8} size={70} controls={iconsOpacity} />
            <AnimatedIcon src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb527_code-bracket-square.svg" className="bottom-[20%] right-[-15%]" delay={2.0} size={70} controls={iconsOpacity} />
            <AnimatedIcon src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb542_folder.svg" className="top-[45%] left-[-120px]" delay={2.2} size={70} controls={iconsOpacity} />
          </div>
        </motion.div>
      </div>

      {/* Scroll Triggers - Adjusted positions */}
      <div ref={phoneRef} className="absolute bottom-[30%] h-1 w-full" />
      <div ref={swapRef} className="absolute top-[85%] h-1 w-full" />
    </motion.section>
  );
}


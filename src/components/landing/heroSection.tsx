"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const words = ["Telegram.", "WhatsApp.", "SMS."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [badgeVisible, setBadgeVisible] = useState(false);
  const [visibleImages, setVisibleImages] = useState(1);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll();

  const blur = useTransform(scrollYProgress, [0, 0.2], ["0px", "20px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typeSpeed = isDeleting ? 50 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setCurrentText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1500);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentWordIndex]);

  useEffect(() => {
    const timer = setTimeout(() => setBadgeVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let count = 1;
    const interval = setInterval(() => {
      count++;
      if (count > 4) clearInterval(interval);
      else setVisibleImages(count);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const getImageStyle = (index: number) => {
    return index < visibleImages
      ? {
          opacity: 1,
          transform: "scale(1)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }
      : {
          opacity: 0,
          transform: "scale(0.5)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        };
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
          body {
            font-family: 'Open Sans', sans-serif;
          }
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s step-start 0s infinite;
          }
          .spin-slow {
            animation: spin 3s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div>
      <section className="relative w-full min-h-screen bg-black overflow-hidden font-sans z-10">
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} 
            transition={{duration:0.5}}
            className="absolute z-[1] w-full min-h-screen bg-black overflow-hidden font-sans">

          {/* Background Circle */}
          <motion.img
            style={{ filter: `blur(${blur})`, opacity, scale }}
            src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb543_CircleBg.webp"
            alt="Circle Background"
            className="absolute top-5 left-5 translate-x-[-250px] translate-y-[-240px] sm:translate-x-[-600px] sm:translate-y-[-550px] md:translate-x-[-700px] md:translate-y-[-700px] scale-100 sm:scale-125 md:scale-150 transition-transform duration-500 ease-in-out spin-slow z-0"
          />

          {/* Backed By Badge */}
          <motion.div
            style={{ filter: `blur(${blur})`, opacity, scale }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`absolute top-28 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2 text-center text-white/60 text-xs border border-gray-600 rounded-lg p-1 pointer-events-none select-none sm:scale-75 md:scale-90 lg:scale-100 ${badgeVisible ? "opacity-100" : "opacity-0"}`}
          >
            <span>Backed by</span>
            <div className="mt-[2px]">
              <img src="/ycom.svg" alt="Y Combinator Logo" className="h-[10px] sm:h-[12px] md:h-[15px] lg:h-[18px]" />
            </div>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            style={{ filter: `blur(${blur})`, opacity, scale }}
            className="absolute top-[160px] px-4 w-full"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-white font-semibold leading-snug text-3xl sm:text-2xl md:text-3xl lg:text-4xl">
                Collaborative AI,
                <br />
                just a message away
                <br />
                <div className="inline-flex items-center">
                  <span className="whitespace-nowrap"></span>
                  <span className="relative inline-block min-w-[9ch]">
                    {(() => {
                      const colors = ["#0062ff", "#22c55e", "#f97316", "#e11d48", "#a855f7"];
                      const color = colors[currentWordIndex % colors.length];

                      return (
                        <>
                          <span style={{ color }} className="transition-all duration-700 ease-in-out">
                            {currentText}
                          </span>
                          <span style={{ color }} className="inline-block animate-blink text-white">|</span>
                        </>
                      );
                    })()}
                  </span>
                </div>
              </h1>

              <h1 className="text-white justify-center items-center text-center font-extrabold text-7xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[9rem] leading-tight mt-[-12px]">
                text.ai
              </h1>

              <div className="text-white text-sm sm:text-base md:text-lg lg:text-2xl space-y-[0.3px]">
                <h3>Discover local eats.</h3>
                <h3>Plan group events.</h3>
                <h3>Settle debates.</h3>
              </div>
            </div>
          </motion.div>

          <div className="relative top-[460px] sm:top-[490px] md:top-[540px] lg:top-[650px]">

            {/* Buttons */}
            <motion.div
              style={{ filter: `blur(${blur})`, opacity, scale }}
              className="flex absolute left-1/2 transform -translate-x-1/2 gap-4 flex-wrap justify-center px-4 w-full max-w-4xl"
            >
              {["Start SMS Chat", "Try on WhatsApp", "Add to Telegram", "Add to group chat"].map((text, i) => (
                <div
                  key={i}
                  className={`${
                    i === 3 ? "flex items-center justify-center bg-gray-100 text-black hover:bg-gray-300/90" : "bg-[#0062ff] text-white hover:bg-[#0062ff]/70"
                  } rounded-2xl px-5 py-2 sm:px-6 sm:py-3 font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap text-center text-sm sm:text-base`}
                >
                  {text}
                </div>
              ))}
            </motion.div>

            {/* Profile Pictures + Message Count */}
            <motion.div
              style={{ filter: `blur(${blur})`, opacity, scale }}
              className="absolute mt-28 md:mt-32 lg:mt-20 left-1/2 transform -translate-x-1/2 flex justify-center flex-wrap items-center space-x-[-10px] z-40 sm:flex-nowrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {[
                "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb5af_Ellipse%2012.webp",
                "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb5b0_Ellipse%2013.webp",
                "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb5b1_Ellipse%2015.webp",
                "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb5b2_Ellipse%2014.webp",
              ].map((src, i) => (
                <motion.div
                  key={i}
                  className="w-15 h-15 sm:w-12 sm:h-12 md:w-14 md:h-14 overflow-hidden rounded-full border-4 border-white"
                  style={getImageStyle(i)}
                  initial={i === 0 ? { opacity: 0 } : { x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: i === 0 ? 0 : 0.3 + i * 0.2,
                    ease: "easeOut",
                  }}
                >
                  <img loading="lazy" src={src} alt={`Profile ${i + 1}`} className="object-cover w-full h-full" />
                </motion.div>
              ))}

              <div className="ml-6 mt-2 sm:mt-0 whitespace-nowrap text-white text-sm sm:text-base md:text-lg">
                2 Million+ <span className="text-gray-400">Messages Served</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
      </div>
    </>
  );
}

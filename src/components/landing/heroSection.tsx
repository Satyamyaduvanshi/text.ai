"use client";
import { useState, useEffect } from "react";
import Button from "../button";

export default function HeroSection() {
  const words = ["WhatsApp.", "Telegram.", "SMS."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [badgeVisible, setBadgeVisible] = useState(false);
  const [visibleImages, setVisibleImages] = useState(1);

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

      <section>
        <div className="relative w-full min-h-screen bg-black overflow-hidden font-sans">
          {/* Background Circle */}
          <img
            src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb543_CircleBg.webp"
            alt="Circle Background"
            className="fixed top-5 left-5 translate-x-[-250px] translate-y-[-240px] sm:translate-x-[-600px] sm:translate-y-[-550px] md:translate-x-[-700px] md:translate-y-[-700px] scale-100 sm:scale-125 md:scale-150 transition-transform duration-500 ease-in-out spin-slow z-0"
          />

          {/* Backed By Badge */}
          <div
            className={`fixed top-26 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-2 text-center text-white/60 text-xs border border-gray-600 rounded-lg p-1 pointer-events-none select-none transition-all duration-300 sm:scale-75 md:scale-90 lg:scale-100 ${badgeVisible ? "opacity-100" : "opacity-0"}`}
          >
            <span>Backed by</span>
            <div className="mt-[2px]">
              <img src="/ycom.svg" alt="Y Combinator Logo" className="h-[10px] sm:h-[18px] md:h-[20px] lg:h-[25px]" />
            </div>
          </div>

          {/* Hero Text */}
          <div className="absolute top-[160px] sm:top-[160px] md:top-[170px] px-4 w-full">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-white font-semibold leading-snug text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Collaborative AI, 
                <br/>
                just a message away
                <br/>
                <div className="inline-flex items-center">
                  <span className="whitespace-nowrap"></span>
                  <span className="relative inline-block min-w-[9ch]">
                    <span className="text-blue-300 transition-all duration-700 ease-in-out">
                      {currentText}
                    </span>
                    <span className="inline-block animate-blink text-blue-300">|</span>
                  </span>
                </div>
              </h1>

              <h1 className="text-white justify-center items-center text-center font-extrabold text-7xl sm:text-6xl md:text-7xl lg:text-9xl xl:text-[9rem] leading-tight">
                text.ai
              </h1>

              <div className="text-white text-sm sm:text-base md:text-lg lg:text-2xl space-y-1">
                <h3>Discover local eats.</h3>
                <h3>Plan group events.</h3>
                <h3>Settle debates.</h3>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex absolute top-[510px] sm:top-[500px] md:top-[590px] lg:top-[690px] left-1/2 transform -translate-x-1/2 gap-4 flex-wrap justify-center px-4 w-full max-w-4xl">
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
          </div>

          {/* Profile Pictures + Message Count */}
          <div className="absolute top-[670px] sm:top-[670px] md:top-[715px] lg:top-[770px] left-1/2 transform -translate-x-1/2 flex justify-center flex-wrap items-center space-x-[-10px] z-40 sm:flex-nowrap">
            {[
              "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb5af_Ellipse%2012.webp",
              "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb5b0_Ellipse%2013.webp",
              "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb5b1_Ellipse%2015.webp",
              "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb5b2_Ellipse%2014.webp",
            ].map((src, i) => (
              <div
                key={i}
                className="w-15 h-15 sm:w-12 sm:h-12 md:w-14 md:h-14 overflow-hidden rounded-full border-4 border-white"
                style={getImageStyle(i)}
              >
                <img loading="lazy" src={src} alt={`Profile ${i + 1}`} className="object-cover w-full h-full" />
              </div>
            ))}

            <div className="ml-6 mt-2 sm:mt-0 whitespace-nowrap text-white text-sm sm:text-base md:text-lg">
              1.5 Million+ <span className="text-gray-400">Messages Served</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

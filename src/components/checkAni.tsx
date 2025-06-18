import { motion, useAnimationControls, AnimationControls } from "framer-motion";
import { useRef, useEffect } from "react";


const peoples = [
  {
    name: "Cole",
    img: "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb567_memoji-6.webp",
    bio: "A Great Hubby",
    text: `TextAI helped me plan the perfect surprise date night. It understood my partner's preferences and gave me amazing, personalized recommendations.`,
  },
  {
    name: "Nora",
    img: "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb56b_memoji-3.webp",
    bio: "That One Friend",
    text: "TextAI is helping hold my friend group together. We use it to plan trips, get restaurant recommendations, and even settle debates.",
  },
  {
    name: "Sofie",
    img: "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb569_memoji-5.webp",
    bio: "The Smarty Pants",
    text: `Our study group feels like a supercharged learning machine since we added TextAI. It explains complex topics and helps us understand.`,
  },
  {
    name: "Olivia",
    img: "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb56a_memoji-7.webp",
    bio: "The Picky Friend",
    text: "TextAI saved our movie nights! It suggests films based on streaming availability and syncs start times. Monthly nights are back!",
  },
  {
    name: "Emma",
    img: "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb568_memoji-1.webp",
    bio: "The Supermom",
    text: "TextAI is a game-changer for my family. We use it to settle debates, get homework help, and plan trips.",
  },
  {
    name: "Oliver",
    img: "https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb566_memoji-2.webp",
    bio: "The Planner",
    text: "TextAI saved Friday night! 8 diets, one restaurant, and happy friends. It's our go-to app now.",
  },
];


export default function TestimonialsCarousel() {
  const firstRowRef = useRef(null);
  const secondRowRef = useRef(null);
  const firstRowControls = useAnimationControls();
  const secondRowControls = useAnimationControls();

  // Duplicate the array 3 times for seamless looping
  const duplicatedPeoples = [...peoples, ...peoples, ...peoples];

  // Card config
  const cardWidth = 330;
  const gap = 24;
  const singleLoopWidth = (cardWidth + gap) * peoples.length;

  useEffect(() => {
    // First row animation (left to right)
    firstRowControls.start({
      x: [0, -singleLoopWidth],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });

    // Second row animation (right to left) - starts from the end
    // Calculate starting position (2 full loops worth)
    const secondRowStartX = singleLoopWidth * 2;
    secondRowControls.set({ x: secondRowStartX });
    
    secondRowControls.start({
      x: [secondRowStartX, secondRowStartX + singleLoopWidth],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });

    return () => {
      firstRowControls.stop();
      secondRowControls.stop();
    };
  }, [firstRowControls, secondRowControls, singleLoopWidth]);

  const config = {
    gap: 24,
    cardWidth: 330,
    cardHeight: 200,
    scaleOnHover: 1.03,
    textColor: "rgba(255, 255, 255, 0.6)",
    nameColor: "rgba(255, 255, 255, 1)",
    maskFade: 10,
    rowSpacing: 8,
    secondRowScale: 0.9,
  };

  return (
    <div 
      className="relative w-full overflow-hidden top-[-20px] md:top-0 md:py-2 scale-95 sm:scale-100"
      style={{
        maskImage: `linear-gradient(to right, transparent 0%, black ${config.maskFade}%, black ${100 - config.maskFade}%, transparent 100%)`,
      }}
    >
      {/* First Row */}
      <motion.div
        ref={firstRowRef}
        className="flex gap-6 w-max"
        animate={firstRowControls}
        style={{ gap: `${config.gap}px` }}
      >
        {duplicatedPeoples.map((person, index) => (
          <motion.div
            key={`first-${person.name}-${index}`}
            className="flex-shrink-0 p-6 rounded-lg border-2 border-white/10 flex flex-col"
            whileHover={{ 
              scale: config.scaleOnHover,
              transition: { duration: 0.3 }
            }}
            style={{
              width: `${config.cardWidth}px`,
              height: `${config.cardHeight}px`,
            }}
          >
            <p className="text-sm mb-4 flex-grow" style={{ color: config.textColor }}>{person.text}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={person.img} 
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-medium truncate" style={{ color: config.nameColor }}>{person.name}</p>
                <p className="text-xs truncate" style={{ color: config.textColor }}>{person.bio}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
}

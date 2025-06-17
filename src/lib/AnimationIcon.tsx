"use client";

import { motion, MotionValue } from "framer-motion";

interface AnimatedIconProps {
  src: string;
  className: string;
  delay: number;
  size: number;
  controls: MotionValue<number>;
}

const AnimatedIcon = ({
  src,
  className,
  delay,
  size,
  controls
}: AnimatedIconProps) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      style={{
        opacity: controls,
        scale: controls
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      <img
        src={src}
        alt="Icon"
        className="w-full h-full object-contain z-10"
        style={{ width: size, height: size }}
      />
    </motion.div>
  );
};

export default AnimatedIcon;

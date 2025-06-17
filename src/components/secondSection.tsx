import AnimatedIcon from "@/lib/AnimationIcon";
import {motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState,useEffect } from "react"

export default function MSecondSection(){

    const iconsRef = useRef(null);
    const scrollref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: scrollref,
        offset: ["start end", "end start"],
    });

    const secondImage = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
    const iconsOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
     



    return(
        <div className="relative">
            <div ref={scrollref} className="relative min-h-[100vh] w-full flex items-center justify-center bg-black">
              <motion.div
                className="relative w-[411px] h-[800px] pointer-events-auto"
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb544_iPhone14Pro.png"
                  alt="Phone Frame"
                  className="absolute z-20"
                />
                <motion.img
                  src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/67fb7b8357845eeb8b19fb00_New%20Hiking1%20Group%20Chat.png"
                  alt="Screen 1"
                  className="absolute w-[325px] top-9 left-11 z-10"
                />
                <motion.img
                  initial={{opacity:0}}
                  transition={{
                    duration: 1,
                    delay: 2,
                    ease: [0.4, 0, 0.2, 1]
                  }}

                  src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/67fb7b83db493a47b863a8fb_New%20Hiking2%20Group%20Chat.png"
                  alt="Screen 2"
                  className="absolute w-[325px] top-9 left-11 z-10"
                  style={{ opacity: secondImage }}
                />
              </motion.div>

              <div ref={iconsRef}>
            <AnimatedIcon src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb541_swatch.svg" className="top-[180px] left-[500px]" delay={1} size={80} controls={iconsOpacity} />
            <AnimatedIcon src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb528_photo.svg" className="top-[40%] right-[550px]" delay={1} size={80} controls={iconsOpacity} />
            <AnimatedIcon src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb526_sparkles.svg" className="bottom-[20%] left-[550px]" delay={1} size={80} controls={iconsOpacity} />
            <AnimatedIcon src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb540_fire.svg" className="top-[10%] left-[62%]" delay={1} size={80} controls={iconsOpacity} />
            <AnimatedIcon src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb527_code-bracket-square.svg" className="bottom-[20%] right-[35%]" delay={1} size={80} controls={iconsOpacity} />
            <AnimatedIcon src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb542_folder.svg" className="top-[45%] left-[450px]" delay={1} size={80} controls={iconsOpacity} />
          </div>
            </div>

        </div>
    )
}
import {motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function MSecondSection(){

    const scrollref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: scrollref
    });
    const isInview = useInView(scrollref)

    const translateY = useTransform(scrollYProgress,[0,0.7],["100vh","0vh"])
    const secondImage = useTransform(scrollYProgress,[0.68,1],[0,1])






    return(
        <div>
        <div 
        ref={scrollref} 
        style={{}}
        className=" min-h-[100vh] w-full  flex items-center justify-center bg-amber-700">
            

            {isInview && <motion.div className="relative w-[411px] h-[800px] pointer-events-auto"
            initial={{opacity:0, scale:0.6}}
            whileInView={{opacity:1, scale: 1}}
            transition={{duration:1}}

            >

            <img
            style={{ }}
            src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/6734183dc3243e10a47bb544_iPhone14Pro.png"
            alt="Phone Frame"
            className="absolute  z-20"
            />


            <motion.img

            src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/67fb7b8357845eeb8b19fb00_New%20Hiking1%20Group%20Chat.png"
            alt="Screen 1"
            className="absolute w-[329px] top-9 left-10 z-10"
            />

            <motion.img
            style={{opacity:secondImage}}
            src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/67fb7b83db493a47b863a8fb_New%20Hiking2%20Group%20Chat.png"
            alt="Screen 2"
            className="absolute w-[329px] top-9 left-10 z-10"
          />

            
            </motion.div>}
        </div>
        </div>
    )
}
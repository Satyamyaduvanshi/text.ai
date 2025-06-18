'use client';


export default function ThirdSection(){

    // return(
    //     <motion.div 
    //     className="relative my-20 flex justify-center items-center w-full "
    //     initial={{opacity:0.2}}
    //     animate={{opacity:1}}
    //     // whileInView={{opacity:1}}
    //     // transition={{
    //     //     duration:2,
    //     //     delay:1 
    //     // }}
        
    //     >
    //       <div className="text-6xl bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
    //         Live search assistant in your conversations.
    //       </div>
    //     </motion.div>

    // )

    return(
        <div className='relative my-10 w-full  sm:mb-28 md:mb-24 mt-[-40px] sm:mt-[-50px] md:mt-[-60px]'>
            <div className='flex bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent
            text-2xl text-center tracking-tighter  justify-center sm:text-3xl md:text-4xl lg:text-5xl '>
            Live search
            <span>
            <GradualSpacing text=' assistant in your conversations.'/>    
            </span>
            

            </div>
        </div>
    )

}

 
import { AnimatePresence, motion, useInView } from 'framer-motion';
import * as React from 'react';
 
export function GradualSpacing({ text = 'Gradual Spacing' }: { text: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, {  });
  return (
    <div className="flex justify-center">
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.1, delay: i * 0.02 }}
            className="text-center  tracking-tighter 
            
            "
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}
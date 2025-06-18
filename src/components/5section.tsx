
import TestimonialsCarousel from "./checkAni"
import Faq from "./Faq"



export default function FifthSection(){


    return(
        <section className="relative min-h-screen ">
            <div className="w-full ">
            <div className="w-full relative flex justify-center items-center">
              {/* Blurred border behind */}
              <div className="absolute z-0">
                <div className="border border-[#ffffff99] py-2 px-4 rounded-lg blur-md opacity-40 scale-105" />
              </div>

              {/* Sharp visible border */}
              <div className="relative z-10">
                <div className="border border-[#ffffff99] py-2 px-4 rounded-lg">
                  <p className="text-[#ffffff99] font-semibold text-sm tracking-wide">
                    Wall of love
                  </p>
                </div>
              </div>
            </div>



            <div className="mt-3">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className=" font-medium text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">What People Are Saying</h2>

                    <div className=" flex justify-center items-center mb-12 mt-1 sm:mt-3">
                      <p className="text-[12px] md:text-[15px] text-white/60">
                      Experience the Future of Chatting with Text.ai
                      </p>

                    </div>

                    {/* <motion.div
                    className=""
                    >
                      {
                        peoples.map((person,i)=>(
                          <div key={i} className="">
                            <div>
                              <div className="">
                                <p className="text-white/60">
                                  {person.text}
                                </p>
                              </div>

                              <img 
                              src={person.img} 
                              alt={person.name} 
                              className=""
                              />

                              <div>
                                <h3 className="text-white">
                                  {person.name}
                                </h3>
                                <p className="text-white/60">
                                  {person.bio}
                                </p>
                              </div>
                            </div>

                          </div>
                        ))
                      }

                    </motion.div> */}
                    <TestimonialsCarousel/>
                  </div>
                </div>
            </div>

            <div className="w-full mt-18 ">
            <div className="flex justify-center">
              <div className="border border-[#ffffff99]  py-2 px-4 rounded-lg scale-85">
                <p className="text-[#ffffff99] font-semibold text-sm tracking-wide ">
                FAQs
                </p>
              </div>
            </div>


            <div className="mt-3">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className=" font-medium text-center text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl ">Frequently asked questions</h2>

                    <div className=" flex justify-center items-center mb-12 mt-1 sm:mt-3">
                      <p className="text-[12px] md:text-[15px] text-white/60">
                      Everything You Need to Know.
                      </p>

                    </div>
                    <Faq/>
        
                  </div>
                </div>
            </div>
        </section>
    )
}
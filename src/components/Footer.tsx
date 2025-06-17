import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaX } from "react-icons/fa6";

const links = [
    {
        href: "https://www.linkedin.com/in/satyam-yadav-868375203/",
        icon: <FaLinkedin />,
        label: "LinkedIn",
      },
    {
      href: "https://x.com/ysatyaa",
      icon: <FaX />,
      label: "Twitter",
    },
    
  ];


export default function Footer() {

    return (
        <footer className=" relative bg-black py-68">

            {/* Gradient glow from bottom */}
                <div className=" absolute bottom-[-20px] left-0 w-full h-[80px] opacity-30 z-10">
                  <div
                    className="w-full h-full"
                    style={{
                      background: "radial-gradient(100% 100% at 50% 50%, #0ea5e9 0%, #33ffff 40%, #0f172a 100%)",
                      filter: "blur(90px)",
                    }}
                  />
                </div>

            <div className="">
            <div className="relative mt-20 flex flex-col items-center">
              <img
                src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/67fb5a778e1e98a1698c969e_text.ai (1).png"
                alt="Logo"
                className="w-[190px] sm:w-[300px] md:w-[729px] lg:w-[729px] h-[124px] object-contain opacity-10"
              />
              <div className="bg-gradient-to-r from-black/80 via-white/60 to-black/80 h-[3px] w-[800px] opacity-20 mt-1" />
            </div>

            <div className="relative top-[60px] ">
                
                <div className=" absolute left-[400px] ">
                <img
                  src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/67fb5a778e1e98a1698c969e_text.ai (1).png"
                  alt="Logo"
                  className="w-[85px] h-[20px] object-contain"
                />
                <p className="text-white/50 mt-[15px] ml-1">
                Text once, solve everything.
                <br/>
                 From dinner suggestions to coordinating
                 <br/> your entire friend group.
                </p>
                <div className="flex mt-4 ml-2 gap-4">
                    {links.map((link, i)=>(
                        <a
                        key={i}
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="rounded-full text-white/70 hover:text-white/40 transition-all duration-200 transform scale-150"
                        >
                            {link.icon}
                        </a>
                    ))}

                </div>

                </div>

                <div className="flex absolute right-[350px] gap-16">

                   <div className="grid">
                   <h1 className="text-white text-[20px] font-semibold ">
                    Quick Link
                    </h1>
                    <a href="#"
                    className="text-white/50 hover:text-white/90 transition-all duration-200 transform"
                    >
                        Contact Us
                    </a>
                    
                    <a href="#"
                    className="text-white/50 hover:text-white/90 transition-all duration-200 transform"
                    >
                        FAQ
                    </a>
                   </div>


                   <div className=" grid">
                   <h1 className="text-white text-[20px] font-semibold ">
                    Legal
                   </h1>
                   <a href="#"
                    className="text-white/50 hover:text-white/90 transition-all duration-200 transform"
                    >
                       Privacy Policy
                    </a>
                    <a href="#"
                    className="text-white/50 hover:text-white/90 transition-all duration-200 transform ease-in-out"
                    >
                        Terms and Conditions
                    </a>

                   </div>

                </div>

                <div className=" relative flex  top-[200px] left-[405px]">
                    <a href=""
                    className=" font-semibold text-[11px] text-white/80"
                    >
                    © 2025 TextAI Corporation. All rights reserved.
                    <br/>
                    Made with 💙 in California 🌴.
                    </a>

                </div>

            </div>
            </div>

        </footer>
    );
}



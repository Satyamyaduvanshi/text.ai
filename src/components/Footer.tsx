import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaX } from "react-icons/fa6";

const links = [
  {
    href: "https://www.linkedin.com/in/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
  {
    href: "https://x.com/",
    icon: <FaX />,
    label: "Twitter",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-black w-full overflow-hidden px-6 py-1 text-white  md:mt-7 ">
      
      <div className="flex flex-col items-center text-center">
       
        <img
          src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/67fb5a778e1e98a1698c969e_text.ai%20(1).png"
          alt="Logo"
          className="w-[190px] sm:w-[300px] md:w-[729px] h-[124px] object-contain opacity-10"
        />
        <div className="bg-gradient-to-r from-black/80 via-white/60 to-black/80 h-[1px] w-full max-w-4xl opacity-20 mt-[-36px] sm:mt-[-25px] md:mt-[1px]  " />
  
      </div>

      <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center max-w-6xl mx-auto gap-1">
       
        <div className="flex-1">
          <img
            src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/67fb5a778e1e98a1698c969e_text.ai%20(1).png"
            alt="Small Logo"
            className="w-[85px] h-[20px] object-contain"
          />
          <p className="text-white/50 mt-4 text-sm leading-relaxed">
            Text once, solve everything.
            <br />
            From dinner suggestions to coordinating
            <br />
            your entire friend group.
          </p>

          <div className="flex mt-4 gap-4">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-white/70 hover:text-white/40 transition-transform duration-200 text-xl"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

       
        <div className="flex flex-col sm:flex-row gap-4 md:gap-12 mt-6">
          <div className="grid gap-2">
            <h1 className="text-lg font-semibold">Quick Links</h1>
            <a href="#" className="text-white/50 hover:text-white transition">
              Contact Us
            </a>
            <a href="#" className="text-white/50 hover:text-white transition">
              FAQ
            </a>
          </div>

          <div className="grid gap-2">
            <h1 className="text-lg font-semibold">Legal</h1>
            <a href="#" className="text-white/50 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-white transition">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>

     
      <div className="mt-14 text-center text-white/70 text-xs">
        © 2025 TextAI Corporation. All rights reserved.
        <br />
        Made with 💙 in California 🌴.
      </div>
    </footer>
  );
}

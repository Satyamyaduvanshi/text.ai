"use client"
import { useState, useEffect, useRef } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function NavBar() {
  const [isDropdownActive, setIsDropdownActive] = useState(false)

  const toggleMenu = () => setIsDropdownActive(prev => !prev)
  const closeMenu = () => setIsDropdownActive(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 989) {
        closeMenu()
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed top-2 left-1/2 transform -translate-x-1/2
      z-50 w-full max-w-[1243px] bg-[#2b2b2b]/10 lg:rounded-full px-1 lg:border-l-[2px] lg:border-r-[2px] border-white backdrop-blur-sm ">
      <header className="w-full">
        <nav
          className="
            flex items-center justify-between p-2
            w-full
            max-w-[1243px] mx-auto
          "
        >
          <div className="flex justify-center items-center">
            {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="hover:transition hover:duration-200 hover:ease-in-out hover:scale-110 p-2"
          >
            <img
              src="https://cdn.prod.website-files.com/6734183dc3243e10a47bb402/67fb5a778e1e98a1698c969e_text.ai (1).png"
              alt="Logo"
              className="w-[95px] h-[22.91px] object-contain"
            />
          </Link>

          </div>
          

          {/* Nav Links (Tablet/Desktop only) */}
          <div className="hidden [@media(min-width:989px)]:flex left-1/2  justify-center items-center text-sm font-medium">
  <a
    href="#"
    className="transition duration-400 ease-in-out px-3 py-1.5 rounded-lg text-[#0062ff]/80 hover:bg-[#0062ff]/10 hover:text-white active:font-semibold"
  >
    Try on SMS
  </a>
  <a
    href="#"
    className="transition duration-400 ease-in-out px-3 py-1.5 rounded-lg text-[#0062ff]/80 hover:bg-[#0062ff]/10 hover:text-white active:font-semibold"
  >
    Try on WhatsApp
  </a>
  <a
    href="#"
    className="transition duration-400 ease-in-out px-3 py-1.5 rounded-lg text-[#0062ff]/80 hover:bg-[#0062ff]/10 hover:text-white active:font-semibold"
  >
    Save Contact
  </a>
</div>

<div className="hidden [@media(min-width:989px)]:flex gap-3 justify-center items-center text-sm font-medium">
  <a
    href="/"
    className="transition duration-400 ease-in-out px-3 py-1.5 rounded-lg text-white/50 hover:bg-white/20 hover:text-white active:font-semibold"
  >
    Home
  </a>
  <a
    href="/faq"
    className="transition duration-400 ease-in-out px-3 py-1.5 rounded-lg text-white/50 hover:bg-white/20 hover:text-white active:font-semibold"
  >
    FAQ
  </a>
  <a
    href="/contact us"
    className="transition duration-400 ease-in-out px-3 py-1.5 rounded-lg text-white/50 hover:bg-white/20 hover:text-white active:font-semibold"
  >
    Contact Us
  </a>
</div>


          {/* Hamburger (Mobile only) */}
          <div className="[@media(min-width:989px)]:hidden flex justify-center items-center">
            <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white">
              {isDropdownActive ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown */}
        {isDropdownActive && (
          <div className="[@media(min-width:989px)]:hidden flex flex-col relative bg-black/95 text-white px-6 py-5 space-y-3 rounded-xl border border-white/10 shadow-xl fade-in-dropdown ">
            {[
              { label: "Try on SMS", href: "#" },
              { label: "Try on WhatsApp", href: "#" },
              { label: "Save Contact", href: "#" },
              { label: "Home", href: "/" },
              { label: "FAQ", href: "/faq" },
              { label: "Contact Us", href: "/contact us" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="hover:text-[#0062ff] left-3 transition-colors duration-300 text-lg font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

      </header>
    </div>
  )
}

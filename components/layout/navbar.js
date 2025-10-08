import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "About Us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  return (
    <div className="text-[#0f0f0f] font-nunito w-full">
      <header
        className="flex items-center justify-between flex-row flex-nowrap gap-[24px] h-[120px] max-w-[1440px] mx-auto overflow-visible px-4 sm:px-6 lg:px-10 py-[30px] relative w-full"
        style={{ flex: "1 0 0px" }}
      >
        {/* Logo on the left */}
        <div className="flex items-center">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={60}
            height={60}
            className="h-auto rounded-tl-none rounded-full"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex flex-row font-normal items-center leading-relaxed justify-end gap-[78px] list-none text-[18px] m-0 p-0">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="transition-colors font-normal hover:text-[#f06517]"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-50 pt-24 px-6">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-4xl text-black"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <nav>
            <ul className="flex flex-col gap-6 list-none text-[24px] font-normal">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="block py-3 transition-colors hover:text-[#f06517]"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;

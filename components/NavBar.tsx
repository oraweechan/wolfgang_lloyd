"use client"
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for hamburger and close

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 px-4 pt-4">
      <nav className=" mx-auto flex justify-between items-center px-8 py-5 max-w-screen-lg gap-4 md:gap-24 bg-white/80 border-2 border-black rounded-md">
        <div className="text-3xl font-bold">
          <Link href="/" aria-label="Homepage">
            WL
          </Link>
        </div>

        {/* Hamburger Menu for Smaller Screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            className="focus:outline-none"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Full Navigation for Larger Screens */}
        <ul className={`hidden md:flex gap-6 text-base font-medium`}>
          <li>
            <Link href="/" className="hover:text-gray-700 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-gray-700 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/works"
              className="hover:text-gray-700 transition-colors"
            >
              Works
            </Link>
          </li>
        </ul>

        <Link href="/contact" className="hidden md:block">
          <button className="button-56">Contact</button>
        </Link>

        {/* Dropdown Menu for Smaller Screens */}
        {isOpen && (
          <div className="md:hidden absolute top-full right-4 rounded-md  bg-white/90 shadow-lg">
            <ul className="flex flex-col items-end px-16 md:items-center gap-6 py-4">
              <li>
                <Link href="/" className="hover:text-gray-700 transition-colors" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-gray-700 transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  className="hover:text-gray-700 transition-colors"
                  onClick={toggleMenu}
                >
                  Works
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-700 transition-colors" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;

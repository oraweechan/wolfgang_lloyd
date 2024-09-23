"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for hamburger and close

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null); // Create a ref with type HTMLDivElement

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Close the dropdown if a click is detected outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 left-0 w-full z-50 px-4 pt-4">
      <nav className="mx-auto flex justify-between items-center px-8 py-5 max-w-screen-lg gap-4 md:gap-24 bg-white/80 border-2 border-black rounded-md">
        <div className="text-3xl font-bold">
          <Link
            href="/"
            aria-label="Homepage"
            className="hover:text-accentBlue transition-colors"
          >
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
        <ul className={`hidden md:flex gap-6 text-lg font-medium`}>
          <li>
            <Link
              href="/works"
              className="hover:text-accentBlue transition-colors"
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="hover:text-accentBlue transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-accentBlue transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Dropdown Menu for Smaller Screens */}
        {isOpen && (
          <div
            ref={menuRef} // Attach the ref to the dropdown container
            className="md:hidden absolute top-full right-4 rounded-md bg-white/90 shadow-lg"
          >
            <ul className="flex flex-col px-16 md:items-center text-center gap-6 py-4">
              <li>
                <Link
                  href="/works"
                  className="hover:text-accentBlue transition-colors"
                  onClick={toggleMenu}
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-accentBlue transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accentBlue transition-colors"
                  onClick={toggleMenu}
                >
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

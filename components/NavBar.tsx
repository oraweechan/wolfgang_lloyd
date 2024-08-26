import Link from "next/link";

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 pt-4">
      <nav className="container mx-auto flex justify-between items-center px-8 py-5 max-w-screen-lg gap-4 md:gap-24 bg-white/80 border-2 border-black rounded-md">
        <div className="text-3xl font-bold">
          <Link href="/" aria-label="Homepage">
            WL
          </Link>
        </div>
        <ul className="flex gap-6 text-base font-medium">
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
        <Link href="/contact" >
        <button className="button-56">
        Contact
        </button>
    
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;

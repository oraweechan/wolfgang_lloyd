import Link from "next/link";

const NavBar = () => {
  return (
    <header className="sticky top-0 left-0 w-full bg-white z-50 border-b-4 border-black">
      <nav className="container mx-auto flex justify-between items-center px-6 py-5 ">
        <div className="text-3xl font-bold">
          <Link href="/" aria-label="Homepage">
            WL
          </Link>
        </div>
        <ul className="flex gap-6 text-base font-medium">
          <li>
            <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-700 transition-colors">About</Link>
          </li>
          <li>
            <Link href="/works" className="hover:text-gray-700 transition-colors">Works</Link>
          </li>
        </ul>
        <Link href="/contact" className="button-56">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default NavBar;

import Link from "next/link";

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="flex flex-row justify-between container-padding py-5">
        <p>WL</p>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/works">Works</Link>
          </li>
        </ul>
        <div className="border-2 px-7 rounded-full bg-black text-cyan-50">
          <button>
            <Link href="/contact">Contact</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

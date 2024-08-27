import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 bg-accentTeal flex p-4 md:justify-center w-full">
      <div className=" md:min-w-[1024px]">
  

        <Link href="/contact">
          <div className="flex justify-between items-center md:max-w-screen-lg ">
            <h2 className="text-4xl md:text-8xl font-black	">Start a project</h2>
            <span className="text-4xl md:text-9xl font-black	ml-8">→</span>
          </div>
        </Link>
        </div>

    </footer>
  );
};

export default Footer;

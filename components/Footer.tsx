import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" container-padding py-10 bg-accentTeal ">
      <Link href="/contact">
      <div className="flex justify-between items-center w-full">

      <h2 className="text-4xl md:text-9xl font-black	">
        Start a project
      </h2>
      <span className="text-4xl md:text-9xl font-black	">
        →
      </span>
      </div>
        </Link>
  
    </footer>
  );
};

export default Footer;

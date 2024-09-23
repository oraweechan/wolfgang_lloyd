import Link from "next/link";
import Image from "next/image";
import { Divider } from '@mantine/core';

import { instagram, facebook } from "../utils";

const Footer = () => {
  return (
    <footer className="py-16 bg-accentTeal flex-center p-4 md:justify-center w-full">
      <div className="md:min-w-[1024px] flex-col flex-center">
            
        <Link href="/contact">
            <div className="flex">
              <h2 className="text-4xl md:text-9xl font-black uppercase">Get in touch</h2>
              <span className="text-3xl md:text-7xl font-black ml-2 md:ml-8 self-center">→</span>
            </div>
        </Link>
        <Divider 
          my="lg" 
          size="md" 
          color="black"  
          className="w-full pb-2 md:pb-9"
        />
        <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={instagram.src}
                  alt={instagram.alt}
                  width={24} // Default width for small screens
                  height={24} // Default height for small screens
                  className="md:w-10 md:h-10  lg:w-12 lg:h-12"
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={facebook.src}
                  alt={facebook.alt}
                  width={24} // Default width for small screens
                  height={24} // Default height for small screens
                  className="md:w-10 md:h-10 lg:w-12 lg:h-12"
                />
              </a>
            </div>
      </div>
    </footer>
  );
};

export default Footer;

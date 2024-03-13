import Link from "next/link";
import { TbPlant2 } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="bg-coral p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl font-bold  font-serif text-white grid place-content-center mb-2 md:mb-0">
          <Link
            href="/"
            className="text-white/90 no-underline hover:rosequartz"
          >
            Brissy's Botox
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-2xl lg:text-3xl">
          <div className="flex flex-row justify-center text-3xl sm:justify-evenly align-middle gap-10 pr-20">
            <Link
              className="text-white/90  font-serif hover:rosequartz"
              href="/about"
            >
              About
            </Link>
            <Link
              className="text-white/90  font-serif hover:rosequartz"
              href="/blog"
            >
              Blog
            </Link>
          </div>

          <Link target="_blank" rel="noopener noreferrer"
            className="text-white/90 hover:text-rosequartz"
            href="https://www.instagram.com"
          >
            <IoLogoInstagram />
          </Link>
          <Link target="_blank" rel="noopener noreferrer"
            className="text-white/90 hover:rosequartz"
            href="https://www.facebook.com"
          >
            <FaFacebookF />
          </Link>
          <Link target="_blank" rel="noopener noreferrer"
            className="text-white/90 hover:rosequartz"
            href="https://luxemedspatyler.com"
          >
            <TbPlant2 />
          </Link>
        </div>
      </div>
    </nav>
  );
}
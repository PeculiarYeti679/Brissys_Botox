import Link from "next/link";
import { TbPlant2 } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

export default function Footer() {
  return (
    <nav className="bg-coral p-4 fixed inset-x-0 bottom-0 drop-shadow-xl z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center text-white">
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-lg font-bold font-serif mb-2">
            <Link href="/" >
              <p className="text-white/90 no-underline hover:text-rosequartz">Brissys Botox</p>
            </Link>
          </h1>
          <p className="text-sm font-serif text-center sm:text-left">
            Copyright 2024 Brissys Botox, all rights reserved.
          </p>
        </div>
        <div className="text-sm font-serif text-center">
          7054 Highlands Ln Tyler TX 75703
        </div>
        <div className="flex justify-center sm:justify-end gap-4 text-2xl lg:text-3xl">
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

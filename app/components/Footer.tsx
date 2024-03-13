import Link from "next/link";
import { TbPlant2 } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

export default function Footer() {
  return (
<nav className="bg-coral p-4 sticky top-0 drop-shadow-xl z-10">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
    <div className="flex flex-col items-center sm:items-start pl-0 sm:pl-4">
      <h1 className="text-lg font-bold font-serif text-white mb-2">
        <Link href="/" className="text-white/90 no-underline hover:text-rosequartz">
          Brissys Botox
        </Link>
      </h1>
      <p className="text-sm font-serif text-white text-center sm:text-left">
        Copyright © 2024 Brissys Botox, all rights reserved.
      </p>
    </div>
    <div className="text-sm font-serif text-white text-center">
      7054 Highlands Ln, Tyler, TX 75703
    </div>
    <div className="flex justify-center sm:justify-end gap-4 text-white text-2xl lg:text-3xl pr-0 sm:pr-4">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/90 hover:text-rosequartz"
        href="https://www.instagram.com"
      >
        <IoLogoInstagram />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/90 hover:text-rosequartz"
        href="https://www.facebook.com"
      >
        <FaFacebookF />
      </Link>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/90 hover:text-rosequartz"
        href="https://luxemedspatyler.com"
      >
        <TbPlant2 />
      </Link>
    </div>
  </div>
</nav>

  );
}

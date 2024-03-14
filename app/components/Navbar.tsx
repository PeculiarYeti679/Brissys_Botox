import Link from "next/link";
import { TbPlant2 } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-coral sticky top-0 drop-shadow-xl z-10">
  <div className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
    <a href="/" className="flex items-center">
      <img src="/Brissy_Logo-removebg-preview.png" className="h-8" alt="Brissys Botox Logo" />
      <span className="self-center text-xl font-bold text-white ml-3">Brissys Botox</span>
    </a>
    <div className="hidden md:flex md:items-center">
      <a href="/about" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-rosequartz">About</a>
      <a href="/blog" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-rosequartz">Blog</a>
      <a href="/faqs" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:text-rosequartz">FAQs</a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-white hover:text-rosequartz">
        <IoLogoInstagram className="text-2xl"/>
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-white hover:text-rosequartz">
        <FaFacebookF className="text-2xl"/>
      </a>
      <a href="https://luxemedspatyler.com" target="_blank" rel="noopener noreferrer" className="px-3 py-2 text-white hover:text-rosequartz">
        <TbPlant2 className="text-2xl"/>
      </a>
    </div>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 text-white rounded-lg md:hidden hover:text-rosequartz">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
    </button>
  </div>
</nav>

  );
}

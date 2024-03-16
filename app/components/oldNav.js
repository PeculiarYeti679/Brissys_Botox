import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes, FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { TbPlant2 } from "react-icons/tb";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "/about", text: "About" },
    { id: 2, link: "/blog", text: "Blog" },
    { id: 3, link: "/faqs", text: "FAQs" },
    { id: 4, link: "/experience", text: "Experience" },
    { id: 5, link: "/contact", text: "Contact" },
    // Directly adding social media as null-rendered in the main menu, handled separately.
  ];

  const socialLinks = [
    { id: 1, href: "https://www.instagram.com", icon: <IoLogoInstagram />, ariaLabel: "Instagram" },
    { id: 2, href: "https://www.facebook.com", icon: <FaFacebookF />, ariaLabel: "Facebook" },
    { id: 3, href: "https://luxemedspatyler.com", icon: <TbPlant2 />, ariaLabel: "Website" },
  ];

  return (
    <div className="sticky top-0 z-10 flex items-center justify-between w-full h-20 px-4 text-white bg-coral drop-shadow-xl">
      <div>
        <h1 className="ml-2 text-5xl font-signature">
          <Link href="/" className="text-white/90 no-underline hover:rosequartz">
            <Image src="/Brissy_Logo-removebg-preview.png" width={50} height={50} alt="Brissy's Logo" />
          </Link>
        </h1>
      </div>

      <ul className="items-center hidden md:flex">
        {links.map(({ id, link, text }) => (
          <li key={id} className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200">
            <Link href={link}>{text || link}</Link>
          </li>
        ))}
        {socialLinks.map(({ id, href, icon, ariaLabel }) => (
          <li key={id} className="px-4">
            <Link href={href} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-rosequartz">
              {icon}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="z-10 cursor-pointer text-white md:hidden pr-4">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="absolute flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-coral to-rosequartz text-white">
          {links.map(({ id, link, text }) => (
            <li key={id} className="px-4 py-6 text-4xl capitalize cursor-pointer">
              <Link href={link} onClick={() => setNav(!nav)}>
                {text || link}
              </Link>
            </li>
          ))}
          {/* Separate section for social icons in mobile menu */}
          <div className="flex justify-center mt-4">
            {socialLinks.map(({ id, href, icon, ariaLabel }) => (
              <a key={id} href={href} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer" className="mx-2 text-4xl text-white hover:text-rosequartz">
                {icon}
              </a>
            ))}
          </div>
        </ul>
      )}
    </div>
  );
}

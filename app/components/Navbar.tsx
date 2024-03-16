'use client'
import Link from "next/link";
import { TbPlant2 } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import Image from "next/image";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [nav, setNav] = useState(false);

const links = [
  {
    id: 1,
    link: "about",
  },
  {
    id: 2,
    link: "blog",
  },
  {
    id: 3,
    link: "faqs",
  },
  {
    id: 4,
    link: "experience",
  },
  {
    id: 5,
    link: "contact",
  },
];

const socialLinks = [
  { id: 1, href: "https://www.instagram.com", icon: <IoLogoInstagram />, ariaLabel: "Instagram" },
  { id: 2, href: "https://www.facebook.com", icon: <FaFacebookF />, ariaLabel: "Facebook" },
  { id: 3, href: "https://luxemedspatyler.com", icon: <TbPlant2 />, ariaLabel: "Website" },
];

return (
  <div className="sticky flex justify-between items-center w-full h-20 px-4 text-white bg-coral top-0 drop-shadow-xl z-10">
    <div>
      {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
      <h1 className="text-5xl font-signature ml-2">
      <Link
            href="/"
            className="text-white/90 no-underline hover:rosequartz"
          >
             <Image
      src="/Brissy_Logo-removebg-preview.png"
      width={50}
      height={50}
      alt="Picture of the author"
    />
          </Link>
      </h1>
    </div>
    

    <ul className="hidden md:flex">
      {links.map(({ id, link }) => (
        <li
          key={id}
          className="nav-links px-4 cursor-pointer capitalize font-medium text-whitehover:scale-105 duration-200 link-underline"
        >
          <Link href={link}>{link}</Link>
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
    

    <div
      onClick={() => setNav(!nav)}
      className="cursor-pointer pr-4 z-10 text-white md:hidden"
    >
      {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
    </div>

    {nav && (
      <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-coral to-rosequartz text-white">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize py-6 text-4xl"
          >
            <Link onClick={() => setNav(!nav)} href={link}>
              {link}
            </Link>

          </li> 
        ))}
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

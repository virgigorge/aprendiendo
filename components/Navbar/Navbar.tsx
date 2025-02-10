"use client";
import Link from "next/link";
import { useState } from "react";

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className="w-6 h-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {isOpen ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 18L18 6M6 6l12 12"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    )}
  </svg>
);

const links = [
  { href: "/boletines", text: "BOLETINES" },
  { href: "/fallos", text: "FALLOS DEL HTP" },
  { href: "/designaciones", text: "DESIGNACIONES" },
  { href: "/formularios", text: "FORMULARIOS" },
  { href: "/institucion", text: "INSTITUCION" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cyan-950 text-white flex items-center justify-between px-4 h-16">
      <div className="container mx-auto flex justify-between items-center">
        <a href="http://localhost:3000" className="text-2xl font-bold">
          Virginia Gorge
        </a>

        <div
          className={`${
            isOpen ? "flex top-16 bg-cyan-950 w-full absolute" : "hidden"
          } left-0 flex-col md:flex md:flex-row px-2 py-2 gap-4`}
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="mx-2 font-bold hover:text-gray-300"
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon isOpen={isOpen} />
          </button>
        </div>
      </div>
    </nav>
  );
};

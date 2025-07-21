'use client'; // if you're using App Router

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: use any icon lib

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link href="/" className="hover:underline">Home</Link>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/experience" className="hover:underline">Experience</Link>
          <Link href="/skills" className="hover:underline">Skills</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/resume" className="hover:underline">Resume</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-3 bg-white text-gray-700 font-medium">
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/experience" onClick={() => setMenuOpen(false)}>Experience</Link>
          <Link href="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/resume" onClick={() => setMenuOpen(false)}>Resume</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

'use client'; 

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
    { href: "/#resume", label: "Resume" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="w-full bg-primary-dark/80 backdrop-blur-sm sticky top-0 z-50 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary-text">
          <Link href="/" className="hover:text-accent-blue transition-colors">Vishishta</Link>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-secondary-text font-medium">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-accent-blue transition-colors duration-300">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-primary-text"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col space-y-4 bg-primary-dark text-secondary-text font-medium">
          {navLinks.map(link => (
             <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="hover:text-accent-blue transition-colors duration-300">
              {link.label}
            </Link>
          ))}
        </div>
      )}
      {/* Animated Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-purple bg-[length:400%_400%] animate-gradient-animation"></div>
    </nav>
  );
}

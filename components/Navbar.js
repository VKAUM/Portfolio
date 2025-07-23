'use client'; 

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { motion, AnimatePresence } from "framer-motion";

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

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { opacity: 0, y: "-100%", transition: { duration: 0.4, ease: "easeInOut" } }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <>
      <nav className="w-full bg-primary-dark/80 backdrop-blur-sm sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-primary-text z-50">
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
            className="md:hidden text-primary-text z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Animated Gradient Line */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-blue via-accent-indigo to-accent-purple bg-[length:400%_400%] animate-gradient-animation"></div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 bg-primary-dark/95 backdrop-blur-lg flex flex-col items-center justify-center z-40"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} custom={i} variants={linkVariants} initial="hidden" animate="visible">
                  <Link 
                    href={link.href} 
                    onClick={() => setMenuOpen(false)} 
                    className="text-3xl font-semibold text-primary-text hover:text-accent-blue transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Win
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <Link href="/" className="text-black">Home</Link>
          <Link href="/about" className="text-black">About</Link>
          <Link href="/services" className="text-black">Services</Link>
          <Link href="/testimonials" className="text-black">Testimonials</Link>
          <Link href="/contact" className="text-black">Contact</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <X className="h-6 w-6 text-black" />
            ) : (
              <Menu className="h-6 w-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2 pb-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block text-black">
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block text-black"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={() => setMenuOpen(false)}
            className="block text-black"
          >
            Services
          </Link>
          <Link
            href="/testimonials"
            onClick={() => setMenuOpen(false)}
            className="block text-black"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block text-black"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

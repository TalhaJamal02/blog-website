"use client"; 

import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-black text-white py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-3xl font-bold">
          Bloggr
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link href="/categories" className="hover:text-gray-400">
            Categories
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-black text-white px-6 py-4 space-y-4">
          <Link href="/" className="block hover:text-gray-400" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link href="/about" className="block hover:text-gray-400" onClick={toggleMobileMenu}>
            About
          </Link>
          <Link href="/categories" className="block hover:text-gray-400" onClick={toggleMobileMenu}>
            Categories
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

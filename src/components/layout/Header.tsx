"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`w-full sticky top-0 z-50 rounded-b-lg overflow-hidden transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent shadow-none"
      }`}
    >
      {/* Blue line at the top */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{ backgroundColor: "var(--color-primary)" }}
      ></div>
      <div className="container mx-auto px-8 sm:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Projix Logo"
            width={440}
            height={440}
            className="h-8 w-auto"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-16">
          <Link
            href="/"
            className="relative transition-all duration-300 group"
            style={{ color: "var(--color-gray-700)" }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--color-primary)]">
              Accueil
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/a-propos"
            className="relative transition-all duration-300 group"
            style={{ color: "var(--color-gray-700)" }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--color-primary)]">
              À propos
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/services"
            className="relative transition-all duration-300 group"
            style={{ color: "var(--color-gray-700)" }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--color-primary)]">
              Services
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/projets"
            className="relative transition-shadow duration-300 group"
            style={{ color: "var(--color-gray-700)" }}
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--color-primary)]">
              Projets
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Contact Button */}
        <button className="px-6 py-2 rounded-lg text-white transition-colors bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]">
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;



"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrolled = (scrollY / docHeight) * 100;
      setScrollPercent(scrolled);
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 z-50">
        <div
          className="h-full bg-yellow-500 transition-all duration-150"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/images/logo.webp" alt="Logo" width={60} />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium relative">
            <li>
              <Link
                href="/"
                className={isScrolled ? "text-gray-800" : "text-white"}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className={isScrolled ? "text-gray-800" : "text-white"}
              >
                About Us
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">
              <span
                className={`cursor-pointer flex items-center gap-1  ${
                  isScrolled ? "text-gray-800" : "text-white "
                }`}
              >
                Services
              </span>

              <ul className="absolute top-full left-0 mt-3 w-56 bg-white shadow-lg rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <li>
                  <Link
                    href="/services/civil-engineering"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Civil Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/engineering-services"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Engineering Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/commercial-cleaning"
                    className="block px-5 py-3 hover:bg-gray-100"
                  >
                    Commercial Cleaning
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                href="/projects"
                className={isScrolled ? "text-gray-800" : "text-white"}
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={isScrolled ? "text-gray-800" : "text-white"}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className={`hidden md:inline-block px-5 py-2 rounded font-semibold transition-colors duration-300 ${
              isScrolled
                ? "bg-blue-900 text-white"
                : "bg-white text-blue-900"
            }`}
          >
            Get a Quote
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-8 h-6 flex flex-col justify-between z-50"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-0.5 w-full transition-all duration-300 ${
                isScrolled ? "bg-gray-800" : "bg-white"
              } ${open ? "rotate-45 translate-y-2.5" : ""}`}
            />
            <span
              className={`h-0.5 w-full transition-all duration-300 ${
                isScrolled ? "bg-gray-800" : "bg-white"
              } ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-full transition-all duration-300 ${
                isScrolled ? "bg-gray-800" : "bg-white"
              } ${open ? "-rotate-45 -translate-y-2.5" : ""}`}
            />
          </button>
        </nav>

        {/* Mobile Drop-down Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white ${
            open ? "max-h-150 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-6 px-6 py-8 text-lg font-medium text-gray-800">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>

            {/* Mobile Services */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="text-left font-semibold"
            >
              Services
            </button>

            {servicesOpen && (
              <div className="ml-4 flex flex-col gap-4 text-base">
                <Link href="/services/civil-engineering" onClick={() => setOpen(false)}>
                  Civil Engineering
                </Link>
                <Link href="/services/engineering-services" onClick={() => setOpen(false)}>
                  Engineering Services
                </Link>
                <Link href="/services/commercial-cleaning" onClick={() => setOpen(false)}>
                  Commercial Cleaning
                </Link>
              </div>
            )}

            <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block bg-amber-800 text-white px-6 py-3 rounded text-center"
            >
              Get a Quote
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Calendar, User, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isAdmin = pathname.startsWith("/admin");
  const isHome = pathname === "/";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="group">
            <Logo light={!scrolled && isHome} />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {!isAdmin ? (
              <>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`font-medium transition-colors ${
                      !scrolled && isHome ? "text-white/80 hover:text-white" : "text-primary-light hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link href="/book" className={`btn-primary py-2 px-6 ${!scrolled && isHome ? "bg-white text-primary hover:bg-white/90" : ""}`}>
                  Book Now
                </Link>
              </>
            ) : (
              <Link href="/" className="text-secondary font-medium hover:text-secondary-dark">
                Exit Admin
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`transition-colors ${!scrolled && isHome ? "text-white" : "text-primary"}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-4 pb-6 space-y-4">
            {!isAdmin ? (
              <>
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-primary-light hover:text-primary font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="/book"
                  className="block btn-primary text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </Link>
              </>
            ) : (
              <Link
                href="/"
                className="block text-center text-secondary font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                Exit Admin
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

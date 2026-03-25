import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-organic-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="block mb-6">
              <Logo light />
            </Link>
            <p className="text-organic-leaf mb-6">
              Empowering local communities through responsible tourism in South-West Rwanda.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></Link>
              <Link href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 italic">Quick Links</h4>
            <ul className="space-y-4 text-organic-leaf">
              <li><Link href="/services" className="hover:text-white transition-colors">Tourism Services</Link></li>
              <li><Link href="/book" className="hover:text-white transition-colors">Online Booking</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link href="/admin/login" className="hover:text-white transition-colors">Staff Login</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-lg font-bold mb-6 italic">Get In Touch</h4>
            <div className="space-y-4 text-organic-leaf">
              <div className="flex items-start gap-3">
                <Mail className="text-accent mt-1" size={18} />
                <span>ivomosustainabletourism@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-accent mt-1" size={18} />
                <div>
                  <p>(+250) 788 605 163</p>
                  <p>(+250) 788 352 568</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-accent mt-1" size={18} />
                <span>Gisakura, Nyamasheke District, Western Province, Rwanda</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-light mt-16 pt-8 text-center text-organic-leaf text-sm">
          <p>© {new Date().getFullYear()} IVOMO Access System. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

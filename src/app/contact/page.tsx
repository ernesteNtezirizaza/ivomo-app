"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Globe, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-organic-white">
      <Navbar />
      
      {/* Redesigned Header to match Services page */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-subtitle">Get In Touch</span>
            <h1 className="section-title">Contact IVOMO</h1>
            <p className="text-gray-600">
              Have questions about our tours or want to plan a custom community stay? 
              Our team is ready to welcome you and share our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="flex gap-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest mb-1">Email Us</h4>
                    <p className="font-medium text-primary break-all">ivomosustainabletourism@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest mb-1">Call Us</h4>
                    <div className="font-medium text-primary space-y-1">
                      <p>(+250) 788 605 163</p>
                      <p>(+250) 788 352 568</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 bg-accent/10 text-accent rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-400 uppercase text-xs tracking-widest mb-1">Location</h4>
                    <p className="font-medium text-primary">
                      Gisakura, Nyamasheke District, Western Province, Rwanda
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-primary rounded-3xl text-white shadow-xl relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2 italic">
                    <Clock size={20} className="text-accent-light" />
                    Opening Hours
                  </h3>
                  <div className="space-y-2 text-organic-leaf">
                    <p className="flex justify-between"><span>Monday - Friday</span> <span>08:00 - 18:00</span></p>
                    <p className="flex justify-between"><span>Saturday</span> <span>09:00 - 16:00</span></p>
                    <p className="flex justify-between text-white/40"><span>Sunday</span> <span>By appointment</span></p>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform">
                  <Globe size={160} />
                </div>
              </div>
            </div>

            {/* Redesigned Contact Form */}
            <div className="bg-white rounded-[2rem] shadow-xl border border-gray-100 p-8 md:p-12 relative">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary text-white rounded-2xl flex items-center justify-center shadow-lg rotate-12">
                <Send size={20} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-8 italic">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase">First Name</label>
                    <input type="text" className="w-full px-4 py-4 bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-2xl transition-all outline-none" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 uppercase">Last Name</label>
                    <input type="text" className="w-full px-4 py-4 bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-2xl transition-all outline-none" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase">Email Address</label>
                  <input type="email" className="w-full px-4 py-4 bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-2xl transition-all outline-none" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase">Message</label>
                  <textarea rows={5} className="w-full px-4 py-4 bg-gray-50 border-2 border-transparent focus:border-primary focus:bg-white rounded-2xl transition-all outline-none resize-none" placeholder="How can we help you?" />
                </div>
                <button type="button" className="w-full btn-primary py-4 text-lg shadow-lg hover:shadow-primary/30">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;

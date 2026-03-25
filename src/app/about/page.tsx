"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Heart, ShieldCheck, MapPin, Trees as Tree } from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-organic-white">
      <Navbar />
      
      {/* Redesigned Header to match Services page */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-subtitle">Our Story</span>
            <h1 className="section-title">About IVOMO</h1>
            <p className="text-gray-600">
              Empowering local communities through responsible tourism in the South-West of Rwanda. 
              We believe in fetching from each other's cultures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                <Image 
                  src="/images/community.png" 
                  alt="Ivomo Community" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-primary text-white rounded-3xl flex items-center justify-center shadow-xl rotate-3">
                <Tree size={64} />
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4 italic">What IVOMO Means</h2>
                <p className="text-gray-600 leading-relaxed">
                  IVOMO is a Rwandan word that means <span className="font-bold text-primary italic">“source of water”</span> or <span className="font-bold text-primary italic">“place to fetch”</span>. 
                  We believe that through community interaction and culture sharing, we fetch from each other and from each other’s culture. 
                  We do all with and for the people, the reason for us to BE.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4 italic">Our Social Enterprise</h2>
                <p className="text-gray-600 leading-relaxed">
                  IVOMO is a social enterprise created with a purpose of improving community livelihoods through community-based tourism. 
                  We promote inclusive tourism which prevails social inclusion and gender equality, primarily in the Nyamasheke & Rusizi districts.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                    <Users size={20} />
                  </div>
                  <h4 className="font-bold text-primary mb-2">Community First</h4>
                  <p className="text-sm text-gray-400">We put people at the center of everything we do.</p>
                </div>
                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-4">
                    <Heart size={20} />
                  </div>
                  <h4 className="font-bold text-secondary mb-2">Heritage</h4>
                  <p className="text-sm text-gray-400">Conservation of heritage and nature is our priority.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision/Mission Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-100 p-10 rounded-3xl relative group shadow-sm hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-primary mb-4 italic">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To build sustainably responsible tourism in Rwanda that benefits the environment and the local community equally.
              </p>
              <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                <ShieldCheck size={48} />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-100 p-10 rounded-3xl relative group shadow-sm hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-secondary mb-4 italic">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To offer a professional cultural and community-based tourism experience and involve communities for sustainability in tourism and conservation.
              </p>
              <div className="absolute top-6 right-6 text-secondary/10 group-hover:text-secondary/20 transition-colors">
                <MapPin size={48} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;

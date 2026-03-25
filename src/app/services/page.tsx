"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "@/lib/data";

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-organic-white">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="section-subtitle">Experience Rwanda</span>
            <h1 className="section-title">Our Tourism Services</h1>
            <p className="text-gray-600">
              Explore the heart of Rwanda through our carefully curated community activities. 
              Each experience is designed to connect you deeply with our culture, nature, and people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image 
                    src={service.image} 
                    alt={service.name} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className={`absolute top-4 left-4 w-12 h-12 ${service.color} text-white rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform`}>
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <Link 
                    href={`/book?service=${encodeURIComponent(service.name)}`}
                    className="flex items-center gap-2 text-secondary font-bold hover:gap-4 transition-all"
                  >
                    Book Now
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesPage;

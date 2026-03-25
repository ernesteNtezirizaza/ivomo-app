import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowRight, MapPin, Users, Heart, ShieldCheck, Trees as Tree } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 z-10" />
          <Image 
            src="/images/hero.png" 
            alt="Ivomo Landscape" 
            fill 
            className="object-cover"
            priority
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-white">
          <div className="max-w-2xl animate-in fade-in slide-in-from-left duration-1000">
            <span className="inline-block px-4 py-1 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full text-accent-light font-medium mb-6">
              Welcome to Nyamasheke & Rusizi
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              Sharing Culture, <br />
              <span className="text-accent-light">Coming Together.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed font-light">
              IVOMO is a Rwandan word that means <span className="italic font-normal">“source of water”</span>. 
              We believe that through community interaction and culture sharing, we fetch from each other.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services" className="btn-primary py-4 px-8 text-lg">
                Explore Services
                <ArrowRight size={20} />
              </Link>
              <Link href="/book" className="btn-secondary py-4 px-8 text-lg bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20">
                Book Your Visit
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 bg-white/50 rounded-full h-2" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-organic-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative">
                <Image 
                  src="/images/community.png" 
                  alt="Ivomo Community" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="text-primary italic font-medium leading-relaxed">
                  "Our palette: Clean, natural, and simple organic colors. Open, honest, and humble."
                </p>
              </div>
            </div>
            
            <div>
              <span className="section-subtitle">Our Purpose</span>
              <h2 className="section-title">Rooted in Community</h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                IVOMO is a social enterprise created with a purpose of improving community livelihoods 
                through community-based tourism. We empower local communities through responsible 
                tourism in the South-West of Rwanda.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Inclusive</h4>
                    <p className="text-sm text-gray-500">Promoting social inclusion and gender equality.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary shrink-0">
                    <Heart size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Passionate</h4>
                    <p className="text-sm text-gray-500">A household of dedicated leaders putting people first.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent shrink-0">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Responsible</h4>
                    <p className="text-sm text-gray-500">Conservation of heritage and nature is our priority.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-organic-clay/10 rounded-xl flex items-center justify-center text-organic-clay shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Sustainable</h4>
                    <p className="text-sm text-gray-500">Building sustainably responsible tourism in Rwanda.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <div className="flex gap-4 items-center">
                  <div className="w-1 bg-primary h-12 rounded-full" />
                  <p className="text-primary font-medium italic">
                    “We do all with and for the people, the reason for us to BE.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </main>
  );
}

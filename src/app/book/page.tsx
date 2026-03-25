"use client";
import React, { useState, useEffect, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useSearchParams, useRouter } from "next/navigation";
import { useStore, ServiceAction } from "@/store/useStore";
import { CheckCircle2, Calendar, Users, Globe, Phone, Mail, User, MessageSquare, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const BookingFormContent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const addBooking = useStore((state) => state.addBooking);
  const selectedServiceParam = searchParams.get("service") as ServiceAction;

  const [formData, setFormData] = useState({
    visitorName: "",
    contact: "",
    service: selectedServiceParam || "Cultural Tours" as ServiceAction,
    date: "",
    numVisitors: 1,
    nationality: "",
    specialRequest: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const services: ServiceAction[] = [
    "Cultural Tours", "Nature Walks", "Tea Time", "Hiking", 
    "Biking", "Gastronomy", "Pottery", "Blacksmith", "Events"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const ref = `IVM-${Math.floor(1000 + Math.random() * 9000)}`;
    addBooking(formData);
    
    setBookingRef(ref);
    setIsSubmitting(false);
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-12 text-center border border-gray-100"
      >
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-3xl font-bold text-primary mb-4">Booking Successful!</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Thank you, <span className="font-bold text-primary">{formData.visitorName}</span>. 
          Your request for <span className="font-bold text-secondary">{formData.service}</span> has been received.
        </p>
        
        <div className="bg-gray-50 rounded-2xl p-6 mb-10 border border-dashed border-gray-300">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-bold">Booking Reference</p>
          <p className="text-4xl font-mono font-bold text-primary">{bookingRef}</p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <button 
            onClick={() => window.print()}
            className="btn-secondary bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white"
          >
            Save Confirmation
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Form Side */}
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500 uppercase flex items-center gap-2">
                <User size={14} /> Full Name
              </label>
              <input 
                required
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-gray-50 border-transparent border-2 focus:border-primary focus:bg-white rounded-xl transition-all outline-none"
                value={formData.visitorName}
                onChange={(e) => setFormData({...formData, visitorName: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500 uppercase flex items-center gap-2">
                <Mail size={14} /> Contact info
              </label>
              <input 
                required
                type="text"
                placeholder="Phone or Email"
                className="w-full px-4 py-3 bg-gray-50 border-transparent border-2 focus:border-primary focus:bg-white rounded-xl transition-all outline-none"
                value={formData.contact}
                onChange={(e) => setFormData({...formData, contact: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500 uppercase flex items-center gap-2">
                <Calendar size={14} /> Service
              </label>
              <select 
                className="w-full px-4 py-3 bg-gray-50 border-transparent border-2 focus:border-primary focus:bg-white rounded-xl transition-all outline-none appearance-none"
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value as ServiceAction})}
              >
                {services.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500 uppercase flex items-center gap-2">
                <Calendar size={14} /> Preferred Date
              </label>
              <input 
                required
                type="date"
                className="w-full px-4 py-3 bg-gray-50 border-transparent border-2 focus:border-primary focus:bg-white rounded-xl transition-all outline-none"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500 uppercase flex items-center gap-2">
                <Users size={14} /> Number of Visitors
              </label>
              <input 
                required
                type="number"
                min="1"
                className="w-full px-4 py-3 bg-gray-50 border-transparent border-2 focus:border-primary focus:bg-white rounded-xl transition-all outline-none"
                value={formData.numVisitors}
                onChange={(e) => setFormData({...formData, numVisitors: parseInt(e.target.value)})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500 uppercase flex items-center gap-2">
                <Globe size={14} /> Nationality
              </label>
              <input 
                required
                type="text"
                placeholder="Rwandan, American, etc."
                className="w-full px-4 py-3 bg-gray-50 border-transparent border-2 focus:border-primary focus:bg-white rounded-xl transition-all outline-none"
                value={formData.nationality}
                onChange={(e) => setFormData({...formData, nationality: e.target.value})}
              />
            </div>

            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-gray-500 uppercase flex items-center gap-2">
                <MessageSquare size={14} /> Special Requests
              </label>
              <textarea 
                rows={4}
                className="w-full px-4 py-3 bg-gray-50 border-transparent border-2 focus:border-primary focus:bg-white rounded-xl transition-all outline-none resize-none"
                placeholder="Include any dietary requirements or accessibility needs..."
                value={formData.specialRequest}
                onChange={(e) => setFormData({...formData, specialRequest: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full mt-10 btn-primary py-4 text-lg ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4m2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing Booking...
              </span>
            ) : "Confirm Booking"}
          </button>
        </form>
      </div>

      {/* Info Side */}
      <div className="space-y-8">
        <div className="bg-primary rounded-3xl p-8 text-white shadow-lg">
          <h3 className="text-xl font-bold mb-4 italic">Booking Policy</h3>
          <ul className="space-y-4 text-organic-leaf text-sm leading-relaxed">
            <li className="flex gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
              Bookings should be made at least 24 hours in advance.
            </li>
            <li className="flex gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
              Payment is typically made on arrival or via mobile money.
            </li>
            <li className="flex gap-2">
              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 shrink-0" />
              Cancellations within 12 hours may incur a small fee.
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-primary mb-4 italic">Need Help?</h3>
          <div className="space-y-4 text-gray-500">
            <div className="flex items-center gap-3">
              <Phone className="text-secondary" size={18} />
              <span>(+250) 788 605 163</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-secondary" size={18} />
              <span className="text-xs break-all">ivomosustainabletourism@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingPage = () => {
  return (
    <main className="min-h-screen bg-organic-white">
      <Navbar />
      
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/services" className="inline-flex items-center gap-2 text-primary hover:text-secondary mb-8 transition-colors font-medium">
            <ArrowLeft size={18} />
            Back to Services
          </Link>
          
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-primary mb-2">Book Your Experience</h1>
            <p className="text-gray-500 font-medium">Secure your spot for an authentic community adventure.</p>
          </div>

          <Suspense fallback={<div className="text-center py-20">Loading Booking System...</div>}>
            <BookingFormContent />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BookingPage;

"use client";
import React, { useState } from "react";
import { useStore } from "@/store/useStore";
import { Search, User, Phone, MapPin, History, Filter, ChevronDown } from "lucide-react";

const GuestsPage = () => {
  const guests = useStore(state => state.guests);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGuests = guests.filter(g => 
    g.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    g.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2 italic">Guest Management</h1>
        <p className="text-gray-500">Track returning visitors and their booking history.</p>
      </div>

      {/* Global Search */}
      <div className="relative max-w-xl">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input 
          type="text" 
          placeholder="Search by name, email or phone..."
          className="w-full pl-16 pr-8 py-5 bg-white shadow-sm border border-gray-100 rounded-3xl transition-all outline-none focus:ring-2 focus:ring-primary/20"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Guests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredGuests.length > 0 ? filteredGuests.map((guest, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light text-white rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg group-hover:rotate-6 transition-transform">
                {guest.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">{guest.name}</h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                  <Phone size={14} /> {guest.contact}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <History size={14} /> Booking History
                </p>
                <div className="flex flex-wrap gap-2">
                  {guest.servicesBooked.map((service, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 bg-organic-white border border-primary/10 rounded-full text-xs font-semibold text-primary">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-50 flex justify-between items-center text-sm">
                <span className="text-gray-400">Last Visit</span>
                <span className="font-bold text-secondary italic">
                  {new Date(guest.lastVisit).toLocaleDateString()}
                </span>
              </div>
            </div>
            
            <button className="w-full mt-8 py-3 bg-gray-50 hover:bg-primary hover:text-white rounded-2xl text-gray-500 font-bold text-sm transition-all">
              View Full Profile
            </button>
          </div>
        )) : (
          <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-gray-200">
            <User className="mx-auto mb-4 opacity-10" size={80} />
            <p className="text-xl font-bold text-gray-300 italic">No guest records found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuestsPage;

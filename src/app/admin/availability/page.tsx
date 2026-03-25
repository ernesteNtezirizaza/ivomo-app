"use client";
import React from "react";
import { useStore } from "@/store/useStore";
import { CheckCircle, XCircle, AlertCircle, RefreshCcw } from "lucide-react";

const AvailabilityPage = () => {
  const { servicesStatus, setServiceStatus } = useStore();

  const services = Object.entries(servicesStatus);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-primary mb-2 italic">Availability Management</h1>
          <p className="text-gray-500">Toggle service transparency to prevent double bookings.</p>
        </div>
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-xl text-amber-700 text-sm font-medium border border-amber-100">
          <AlertCircle size={16} />
          Changes take effect immediately on public site
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(([name, status]) => (
          <div key={name} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center group">
            <div className={`
              w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500
              ${status === 'Available' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}
            `}>
              {status === 'Available' ? <CheckCircle size={40} /> : <XCircle size={40} />}
            </div>
            
            <h3 className="text-xl font-bold text-primary mb-2 italic">{name}</h3>
            <p className={`text-sm font-bold uppercase tracking-widest mb-8 ${status === 'Available' ? 'text-green-500' : 'text-red-500'}`}>
              {status}
            </p>

            <button
              onClick={() => setServiceStatus(name, status === 'Available' ? 'Fully Booked' : 'Available')}
              className={`
                w-full py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3
                ${status === 'Available' 
                  ? 'bg-red-50 text-red-600 hover:bg-red-600 hover:text-white' 
                  : 'bg-green-50 text-green-600 hover:bg-green-600 hover:text-white'}
              `}
            >
              <RefreshCcw size={18} />
              Set as {status === 'Available' ? 'Fully Booked' : 'Available'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailabilityPage;

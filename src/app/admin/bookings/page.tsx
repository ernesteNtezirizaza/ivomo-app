"use client";
import React, { useState } from "react";
import { useStore, Booking } from "@/store/useStore";
import { 
  Search, 
  Filter, 
  MoreVertical, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Calendar,
  User,
  Trash2,
  ChevronDown
} from "lucide-react";

const BookingsPage = () => {
  const { bookings, updateBookingStatus, deleteBooking } = useStore();
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filteredBookings = bookings.filter(b => {
    const matchesSearch = b.visitorName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         b.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "All" || b.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2 italic">Booking Management</h1>
        <p className="text-gray-500">Manage, confirm, and track all visitor requests.</p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-3xl shadow-sm border border-gray-100">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by name or ID..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-transparent border-2 focus:border-primary focus:bg-white rounded-2xl transition-all outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <select 
              className="pl-12 pr-10 py-3 bg-gray-50 border-transparent border-2 focus:border-primary focus:bg-white rounded-2xl transition-all outline-none appearance-none font-medium text-gray-600 w-full"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
          </div>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 border-b border-gray-100">
                <th className="px-8 py-5 text-gray-400 font-bold text-xs uppercase tracking-widest">ID & Guest</th>
                <th className="px-8 py-5 text-gray-400 font-bold text-xs uppercase tracking-widest">Service</th>
                <th className="px-8 py-5 text-gray-400 font-bold text-xs uppercase tracking-widest">Date & Size</th>
                <th className="px-8 py-5 text-gray-400 font-bold text-xs uppercase tracking-widest">Status</th>
                <th className="px-8 py-5 text-gray-400 font-bold text-xs uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredBookings.length > 0 ? filteredBookings.map((booking) => (
                <tr key={booking.id} className="group hover:bg-gray-50/80 transition-all">
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold">
                        {booking.visitorName.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-primary uppercase text-xs mb-1 tracking-tighter">#{booking.id}</p>
                        <p className="font-medium text-gray-800">{booking.visitorName}</p>
                        <p className="text-xs text-gray-400">{booking.contact}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                      {booking.service}
                    </span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                        <Calendar size={14} /> {new Date(booking.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <User size={14} /> {booking.numVisitors} visitors
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`
                      inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold
                      ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-600' : 
                        booking.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 
                        'bg-blue-100 text-blue-600'}
                    `}>
                      <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${
                        booking.status === 'Confirmed' ? 'bg-green-500' : 
                        booking.status === 'Pending' ? 'bg-amber-500' : 
                        'bg-blue-500'
                      }`} />
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {booking.status === 'Pending' && (
                        <button 
                          onClick={() => updateBookingStatus(booking.id, 'Confirmed')}
                          className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors"
                          title="Confirm Booking"
                        >
                          <CheckCircle size={20} />
                        </button>
                      )}
                      {booking.status === 'Confirmed' && (
                        <button 
                          onClick={() => updateBookingStatus(booking.id, 'Completed')}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                          title="Mark as Completed"
                        >
                          <Calendar size={20} />
                        </button>
                      )}
                      <button 
                        onClick={() => deleteBooking(booking.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete Booking"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={5} className="px-8 py-20 text-center text-gray-400">
                    <Clock className="mx-auto mb-4 opacity-20" size={64} />
                    <p className="text-lg font-medium">No bookings found</p>
                    <p className="text-sm">Try adjusting your search or filters.</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BookingsPage;

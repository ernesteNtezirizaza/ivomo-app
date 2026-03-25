"use client";
import React from "react";
import { useStore } from "@/store/useStore";
import { 
  Users, 
  CalendarCheck, 
  TrendingUp, 
  Activity,
  ArrowUpRight,
  Clock
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const AdminDashboard = () => {
  const bookings = useStore(state => state.bookings);
  const guests = useStore(state => state.guests);

  const stats = [
    { name: "Total Bookings", value: bookings.length, icon: <CalendarCheck />, color: "bg-blue-500" },
    { name: "Total Guests", value: guests.length, icon: <Users />, color: "bg-green-500" },
    { name: "Confirmed", value: bookings.filter(b => b.status === "Confirmed").length, icon: <Activity />, color: "bg-amber-500" },
    { name: "Pending", value: bookings.filter(b => b.status === "Pending").length, icon: <Clock />, color: "bg-purple-500" },
  ];

  // Data for charts
  const serviceCounts = bookings.reduce((acc, b) => {
    acc[b.service] = (acc[b.service] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = Object.entries(serviceCounts).map(([name, value]) => ({ name, value }));
  
  const COLORS = ['#2D4B2A', '#8B5E3C', '#4682B4', '#D2691E', '#8FBC8F', '#D97706', '#92400E', '#27272A', '#E11D48'];

  const recentBookings = bookings.slice(0, 5);

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2 italic">Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} text-white rounded-2xl flex items-center justify-center shadow-lg`}>
                {stat.icon}
              </div>
              <span className="text-green-500 flex items-center text-sm font-bold">
                +12% <ArrowUpRight size={14} />
              </span>
            </div>
            <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider">{stat.name}</h3>
            <p className="text-3xl font-bold text-primary mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Popular Services Chart */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-primary mb-8 italic">Most Booked Services</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData.length > 0 ? chartData : [{ name: "No Data", value: 1 }]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Weekly Bookings (Simulated) */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-primary mb-8 italic">Booking Trends</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { day: 'Mon', bookings: 4 },
                { day: 'Tue', bookings: 7 },
                { day: 'Wed', bookings: 5 },
                { day: 'Thu', bookings: 9 },
                { day: 'Fri', bookings: 12 },
                { day: 'Sat', bookings: 15 },
                { day: 'Sun', bookings: 10 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
                <Tooltip cursor={{fill: '#F9FAFB'}} contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} />
                <Bar dataKey="bookings" fill="#2D4B2A" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-primary mb-6 italic">Recent Bookings</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-gray-50">
                <th className="pb-4 text-gray-400 font-bold text-xs uppercase tracking-widest">Guest</th>
                <th className="pb-4 text-gray-400 font-bold text-xs uppercase tracking-widest">Service</th>
                <th className="pb-4 text-gray-400 font-bold text-xs uppercase tracking-widest">Date</th>
                <th className="pb-4 text-gray-400 font-bold text-xs uppercase tracking-widest text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentBookings.length > 0 ? recentBookings.map((booking) => (
                <tr key={booking.id} className="group hover:bg-gray-50 transition-colors">
                  <td className="py-4 font-medium text-primary">{booking.visitorName}</td>
                  <td className="py-4 text-gray-500">{booking.service}</td>
                  <td className="py-4 text-gray-500">{new Date(booking.date).toLocaleDateString()}</td>
                  <td className="py-4 text-right">
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-bold
                      ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-600' : 
                        booking.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 
                        'bg-blue-100 text-blue-600'}
                    `}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={4} className="py-10 text-center text-gray-400">No recent bookings</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

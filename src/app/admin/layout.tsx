"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  Calendar, 
  BarChart3, 
  LogOut, 
  TreePine,
  Menu,
  X
} from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} />, href: "/admin/dashboard" },
    { name: "Bookings", icon: <BookOpen size={20} />, href: "/admin/bookings" },
    { name: "Guests", icon: <Users size={20} />, href: "/admin/guests" },
    { name: "Availability", icon: <Calendar size={20} />, href: "/admin/availability" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    router.push("/admin/login");
  };

  return (
    <>
      {/* Mobile Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-72 bg-white border-r border-gray-100 transition-transform duration-300 transform
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
              <TreePine size={24} />
            </div>
            <span className="text-2xl font-bold text-primary italic">IVOMO Admin</span>
          </div>

          <nav className="flex-grow space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-4 px-4 py-3.5 rounded-2xl font-medium transition-all
                    ${isActive 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : "text-gray-500 hover:bg-gray-50 hover:text-primary"}
                  `}
                >
                  {item.icon}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-6 border-t border-gray-100">
            <button 
              onClick={handleLogout}
              className="flex items-center gap-4 px-4 py-3.5 w-full text-red-500 hover:bg-red-50 rounded-2xl font-medium transition-all"
            >
              <LogOut size={20} />
              Sign Out
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (pathname !== "/admin/login") {
      const auth = localStorage.getItem("adminAuth");
      if (!auth) {
        router.push("/admin/login");
      } else {
        setIsAuth(true);
      }
    }
  }, [pathname, router]);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (!isAuth) return null;

  return (
    <div className="min-h-screen bg-organic-white flex">
      <Sidebar />
      <main className="flex-grow lg:ml-72 min-h-screen p-4 md:p-8 lg:p-12">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

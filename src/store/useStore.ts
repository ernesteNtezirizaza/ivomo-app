import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type ServiceAction = 
  | 'Cultural Tours' 
  | 'Nature Walks' 
  | 'Tea Time' 
  | 'Hiking' 
  | 'Biking' 
  | 'Gastronomy' 
  | 'Pottery' 
  | 'Blacksmith' 
  | 'Events';

export interface Booking {
  id: string;
  visitorName: string;
  contact: string;
  service: ServiceAction;
  date: string;
  numVisitors: number;
  nationality: string;
  specialRequest?: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
  createdAt: string;
}

export interface Guest {
  name: string;
  contact: string;
  servicesBooked: string[];
  lastVisit: string;
}

interface AppState {
  bookings: Booking[];
  guests: Guest[];
  servicesStatus: Record<string, 'Available' | 'Fully Booked'>;
  addBooking: (booking: Omit<Booking, 'id' | 'status' | 'createdAt'>) => void;
  updateBookingStatus: (id: string, status: Booking['status']) => void;
  deleteBooking: (id: string) => void;
  setServiceStatus: (service: string, status: 'Available' | 'Fully Booked') => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      bookings: [],
      guests: [],
      servicesStatus: {
        'Cultural Tours': 'Available',
        'Nature Walks': 'Available',
        'Tea Time': 'Available',
        'Hiking': 'Available',
        'Biking': 'Available',
        'Gastronomy': 'Available',
        'Pottery': 'Available',
        'Blacksmith': 'Available',
        'Events': 'Available',
      },
      addBooking: (bookingData) => set((state) => {
        const id = `IVM-${Math.floor(1000 + Math.random() * 9000)}`;
        const newBooking: Booking = {
          ...bookingData,
          id,
          status: 'Pending',
          createdAt: new Date().toISOString(),
        };
        
        // Update guests list
        const existingGuestIndex = state.guests.findIndex(g => g.contact === bookingData.contact);
        let updatedGuests = [...state.guests];
        if (existingGuestIndex >= 0) {
          updatedGuests[existingGuestIndex].servicesBooked.push(bookingData.service);
          updatedGuests[existingGuestIndex].lastVisit = bookingData.date;
        } else {
          updatedGuests.push({
            name: bookingData.visitorName,
            contact: bookingData.contact,
            servicesBooked: [bookingData.service],
            lastVisit: bookingData.date
          });
        }

        return { 
          bookings: [newBooking, ...state.bookings],
          guests: updatedGuests
        };
      }),
      updateBookingStatus: (id, status) => set((state) => ({
        bookings: state.bookings.map(b => b.id === id ? { ...b, status } : b)
      })),
      deleteBooking: (id) => set((state) => ({
        bookings: state.bookings.filter(b => b.id !== id)
      })),
      setServiceStatus: (service, status) => set((state) => ({
        servicesStatus: { ...state.servicesStatus, [service]: status }
      })),
    }),
    {
      name: 'ivomo-storage',
    }
  )
);

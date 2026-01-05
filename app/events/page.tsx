"use client";

import React, { useState } from 'react';
import { MapPin, Calendar, ArrowRight, Grid3X3, List } from 'lucide-react';
import { motion } from 'framer-motion';
import EventDetailModal from '@/components/EventDetailModal';

const events = [
    {
        date: { day: "15", month: "OCT", time: "10:00 AM" },
        title: "Student Leadership & Academic Summit",
        location: "Accra Bureau HQ / Virtual",
        description: "Promoting learning, leadership, and global engagement. Join our authorized advisors for a deep dive into global citizenship forums.",
        focus: "Leadership & Academic Growth"
    },
    {
        date: { day: "22", month: "NOV", time: "09:00 AM" },
        title: "Global Education & Study-Abroad Fair",
        location: "Accra, Ghana",
        description: "Connect with accredited institutions globally. We facilitate admission into appropriate programs securely, efficiently, and transparently.",
        focus: "Global Mobility"
    },
    {
        date: { day: "10", month: "DEC", time: "02:00 PM" },
        title: "Corporate Education & Training Seminar",
        location: "Hybrid / Virtual",
        description: "Tailored training for young professionals seeking academic advancement and professional global exposure.",
        focus: "Professional Development"
    },
    {
        date: { day: "15", month: "JAN", time: "11:00 AM" },
        title: "Scholarship & Pathway Workshop",
        location: "Accra, Ghana",
        description: "Comprehensive advisory on International Foundation and Pre-Master's programs, including scholarship and funding guidance.",
        focus: "Funding & Pathways"
    },
    {
        date: { day: "05", month: "FEB", time: "01:00 PM" },
        title: "Visa Compliance & Immigration Forum",
        location: "Main Auditorium",
        description: "Expert guidance on international student visa protocols and compliance for various global destinations.",
        focus: "Legal Compliance"
    },
    {
        date: { day: "18", month: "MAR", time: "09:30 AM" },
        title: "Alumni Excellence Gala",
        location: "Movenpick Hotel, Accra",
        description: "Celebrating the achievements of UPED alumni and fostering networking between current students and professionals.",
        focus: "Networking"
    }
];

export default function EventsPage() {
    const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleEventClick = (event: typeof events[0]) => {
        setSelectedEvent(event);
        setIsModalOpen(true);
    };

    return (
        <div className="bg-white min-h-screen font-body pt-32 pb-40">
            <EventDetailModal
                event={selectedEvent}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            <div className="container-custom px-6">
                {/* Clean Header */}
                <header className="max-w-3xl mb-24 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-blue-accent"></div>
                        <span className="text-blue-accent font-heading font-bold text-xs uppercase tracking-[0.4em]">Official Registry</span>
                    </div>
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-navy uppercase tracking-tighter leading-[0.9]">
                            Bureau <br /> <span className="text-blue-accent">Engagements</span>
                        </h1>
                        <p className="text-gray-400 font-light text-lg md:text-xl max-w-2xl leading-relaxed">
                            Curated conferences and seminars designed to promote leadership, global mobility, and institutional excellence.
                        </p>
                    </div>
                </header>

                {/* Event Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            onClick={() => handleEventClick(event)}
                            className="group cursor-pointer bg-gray-50 border border-gray-100 p-8 md:p-10 flex flex-col justify-between hover:bg-white hover:shadow-[0_20px_60px_-15px_rgba(10,24,63,0.1)] hover:border-blue-accent/20 transition-all duration-500 min-h-[400px]"
                        >
                            <div className="space-y-8">
                                <div className="flex justify-between items-start">
                                    <div className="flex flex-col">
                                        <span className="text-4xl font-heading font-extrabold text-navy leading-none">{event.date.day}</span>
                                        <span className="text-[11px] font-heading font-bold tracking-widest text-blue-accent uppercase mt-1">{event.date.month}</span>
                                    </div>
                                    <div className="bg-white border border-gray-200 px-3 py-1 rounded-full group-hover:bg-blue-accent group-hover:border-blue-accent transition-colors">
                                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-white transition-colors">{event.focus}</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-xl md:text-2xl font-heading font-extrabold text-navy uppercase tracking-tight leading-tight group-hover:text-blue-primary transition-colors">
                                        {event.title}
                                    </h2>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <MapPin size={12} className="text-blue-accent" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">{event.location}</span>
                                    </div>
                                    <p className="text-gray-500 font-light text-sm line-clamp-3 leading-relaxed">
                                        {event.description}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-100 flex items-center justify-between">
                                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
                                    View Brief <ArrowRight size={14} className="text-blue-accent" />
                                </span>
                                <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-navy group-hover:border-navy transition-all">
                                    <ArrowRight size={14} className="text-gray-300 group-hover:text-white" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Quote */}
                <footer className="mt-32 pt-20 border-t border-gray-100 text-center">
                    <p className="text-sm font-heading font-bold text-gray-400 uppercase tracking-[0.4em] mb-4">Institutional Network</p>
                    <p className="text-2xl md:text-4xl font-heading font-light italic text-navy/40 max-w-4xl mx-auto leading-relaxed">
                        "Fostering global citizenship through authorized educational engagement and shared academic vision."
                    </p>
                </footer>
            </div>
        </div>
    );
}

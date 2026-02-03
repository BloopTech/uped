"use client";

import React, { useState } from "react";
import { X, Calendar, MapPin, Clock, ArrowRight, CheckCircle2, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EventDetailModalProps {
    event: {
        title: string;
        date: { day: string; month: string; time?: string };
        location: string;
        description: string;
        longDescription?: string;
        focus?: string;
    } | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function EventDetailModal({ event, isOpen, onClose }: EventDetailModalProps) {
    const [showForm, setShowForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    if (!event) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleClose = () => {
        setShowForm(false);
        setSubmitted(false);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-navy/60 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-4xl max-h-[90vh] bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row rounded-sm"
                    >
                        {/* Left Side: Info */}
                        <div className="md:w-5/12 bg-navy p-8 md:p-12 text-white flex flex-col justify-between overflow-y-auto">
                            <div className="space-y-8">
                                <button
                                    onClick={handleClose}
                                    className="md:hidden absolute top-4 right-4 text-white/60 hover:text-white"
                                >
                                    <X size={24} />
                                </button>

                                <div className="space-y-2">
                                    <span className="text-blue-accent font-heading font-bold text-[10px] uppercase tracking-[0.4em]">Programs Registry</span>
                                    <h2 className="text-3xl font-heading font-extrabold uppercase leading-tight tracking-tight">
                                        {event.title}
                                    </h2>
                                </div>

                                <div className="space-y-6 pt-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-sm bg-blue-accent/20 flex items-center justify-center shrink-0">
                                            <Calendar size={18} className="text-blue-accent" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-accent">Schedule</p>
                                            <p className="text-sm font-light text-gray-300">{event.date.day} {event.date.month}, 2024 • {event.date.time || "09:00 AM"}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-sm bg-blue-accent/20 flex items-center justify-center shrink-0">
                                            <MapPin size={18} className="text-blue-accent" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-accent">Venue</p>
                                            <p className="text-sm font-light text-gray-300">{event.location}</p>
                                        </div>
                                    </div>

                                    {event.focus && (
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-sm bg-blue-accent/20 flex items-center justify-center shrink-0">
                                                <Info size={18} className="text-blue-accent" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] font-bold uppercase tracking-widest text-blue-accent">Focus Area</p>
                                                <p className="text-sm font-light text-gray-300">{event.focus}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="pt-12 border-t border-white/10 hidden md:block">
                                <p className="text-[9px] text-gray-400 uppercase tracking-widest leading-relaxed">
                                    UPED Global Compliance Network | ID: {event.title.substring(0, 3).toUpperCase()}-2024-REG
                                </p>
                            </div>
                        </div>

                        {/* Right Side: content/form */}
                        <div className="md:w-7/12 bg-white flex flex-col p-8 md:p-12 overflow-y-auto">
                            <button
                                onClick={handleClose}
                                className="hidden md:block self-end mb-4 text-navy/40 hover:text-navy hover:bg-gray-100 p-2 rounded-full transition-all"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex-1">
                                {!showForm ? (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="space-y-8"
                                    >
                                        <div className="space-y-4">
                                            <h3 className="text-sm font-heading font-extrabold text-navy uppercase tracking-widest border-b border-gray-100 pb-2">Event Brief</h3>
                                            <p className="text-gray-600 font-light leading-relaxed">
                                                {event.description}
                                            </p>
                                            <p className="text-gray-500 font-light text-sm italic py-4 border-l-2 border-blue-accent pl-6">
                                                "Our mission is to foster a network of excellence through shared knowledge and institutional collaboration."
                                            </p>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-sm font-heading font-extrabold text-navy uppercase tracking-widest">Key Objectives</h3>
                                            <ul className="space-y-3">
                                                {["Academic Excellence Integration", "Global Networking Protocol", "Strategic Career Mapping"].map((item, i) => (
                                                    <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-light">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-accent" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-8">
                                            <button
                                                onClick={() => setShowForm(true)}
                                                className="w-full bg-navy text-white py-5 font-heading font-extrabold uppercase tracking-widest text-[10px] rounded-sm hover:bg-blue-accent transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                                            >
                                                Proceed to Registry <ArrowRight size={14} />
                                            </button>
                                        </div>
                                    </motion.div>
                                ) : submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12"
                                    >
                                        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-heading font-extrabold text-navy uppercase">Registry Confirmed</h3>
                                            <p className="text-gray-500 font-light text-sm italic max-w-xs mx-auto">
                                                Your participation request has been successfully recorded within the Programs registry.
                                            </p>
                                        </div>
                                        <button
                                            onClick={handleClose}
                                            className="text-[10px] font-heading font-bold uppercase tracking-widest text-blue-accent underline underline-offset-4"
                                        >
                                            Return to Events
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="space-y-8"
                                    >
                                        <div>
                                            <button
                                                onClick={() => setShowForm(false)}
                                                className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy/40 hover:text-navy mb-4 block"
                                            >
                                                ← Back to Brief
                                            </button>
                                            <h3 className="text-xl font-heading font-extrabold text-navy uppercase tracking-tight">Participant Data</h3>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1">
                                                    <label className="text-[9px] font-heading font-bold uppercase tracking-[0.2em] text-navy/40">First Name</label>
                                                    <input required type="text" className="w-full bg-gray-50 border-b border-gray-200 focus:border-blue-accent p-3 text-sm font-light outline-none transition-all" />
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[9px] font-heading font-bold uppercase tracking-[0.2em] text-navy/40">Last Name</label>
                                                    <input required type="text" className="w-full bg-gray-50 border-b border-gray-200 focus:border-blue-accent p-3 text-sm font-light outline-none transition-all" />
                                                </div>
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[9px] font-heading font-bold uppercase tracking-[0.2em] text-navy/40">Email Address</label>
                                                <input required type="email" className="w-full bg-gray-50 border-b border-gray-200 focus:border-blue-accent p-3 text-sm font-light outline-none transition-all" />
                                            </div>

                                            <div className="space-y-1">
                                                <label className="text-[9px] font-heading font-bold uppercase tracking-[0.2em] text-navy/40">Inquiry Nature</label>
                                                <select className="w-full bg-gray-50 border-b border-gray-200 focus:border-blue-accent p-3 text-sm font-light outline-none appearance-none text-gray-500">
                                                    <option>Standard Registration</option>
                                                    <option>Scholarship Inquiry</option>
                                                    <option>Corporate Sponsorship</option>
                                                    <option>Speaker/Exhibitor</option>
                                                </select>
                                            </div>

                                            <div className="pt-4">
                                                <button type="submit" className="w-full bg-navy text-white py-5 font-heading font-extrabold uppercase tracking-widest text-[10px] rounded-sm hover:bg-blue-accent transition-all duration-300">
                                                    Validate Registry Entry
                                                </button>
                                            </div>
                                        </form>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

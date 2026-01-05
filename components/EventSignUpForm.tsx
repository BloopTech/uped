"use client";

import React, { useState } from "react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EventSignUpFormProps {
    eventTitle: string;
    isOpen: boolean;
    onClose: () => void;
}

export default function EventSignUpForm({ eventTitle, isOpen, onClose }: EventSignUpFormProps) {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Simulate API call
        setTimeout(() => {
            // onSuccess logic
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-end">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
                    />

                    {/* Sidebar Form */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-lg h-full bg-white shadow-2xl flex flex-col"
                    >
                        <div className="p-8 border-b border-gray-100 flex justify-between items-center">
                            <div>
                                <span className="text-blue-accent font-heading font-bold text-[10px] uppercase tracking-[0.3em]">Event Registration</span>
                                <h2 className="text-xl font-heading font-extrabold text-navy uppercase tracking-tight">Registry Entry</h2>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-navy"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-8 lg:p-12">
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-20 space-y-6"
                                >
                                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-heading font-extrabold text-navy uppercase">Registration Received</h3>
                                        <p className="text-gray-500 font-light text-sm italic">
                                            Your inquiry for <span className="font-bold text-navy">"{eventTitle}"</span> has been authenticated. Our advisors will contact you shortly.
                                        </p>
                                    </div>
                                    <button
                                        onClick={onClose}
                                        className="btn-institutional bg-navy text-white hover:bg-blue-accent w-full mt-8"
                                    >
                                        Close Registry
                                    </button>
                                </motion.div>
                            ) : (
                                <div className="space-y-10">
                                    <div className="bg-gray-50 p-6 border-l-4 border-blue-accent">
                                        <p className="text-[10px] text-navy/40 uppercase font-bold tracking-widest mb-1">Selected Event</p>
                                        <p className="text-sm font-heading font-extrabold text-navy uppercase">{eventTitle}</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2 group">
                                                <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy group-focus-within:text-blue-accent transition-colors">First Name</label>
                                                <input required type="text" className="w-full bg-gray-light border-b-2 border-transparent focus:border-blue-accent p-3 text-sm font-light outline-none transition-all" placeholder="Kwame" />
                                            </div>
                                            <div className="space-y-2 group">
                                                <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy group-focus-within:text-blue-accent transition-colors">Last Name</label>
                                                <input required type="text" className="w-full bg-gray-light border-b-2 border-transparent focus:border-blue-accent p-3 text-sm font-light outline-none transition-all" placeholder="Mensah" />
                                            </div>
                                        </div>

                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy group-focus-within:text-blue-accent transition-colors">Institutional Email</label>
                                            <input required type="email" className="w-full bg-gray-light border-b-2 border-transparent focus:border-blue-accent p-3 text-sm font-light outline-none transition-all" placeholder="k.mensah@example.com" />
                                        </div>

                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy group-focus-within:text-blue-accent transition-colors">Academic Level / Profession</label>
                                            <select className="w-full bg-gray-light border-b-2 border-transparent focus:border-blue-accent p-3 text-sm font-light outline-none transition-all appearance-none text-gray-400">
                                                <option>Select Status</option>
                                                <option>High School Student</option>
                                                <option>Undergraduate Student</option>
                                                <option>Postgraduate Student</option>
                                                <option>Young Professional</option>
                                                <option>Corporate Representative</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2 group">
                                            <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy group-focus-within:text-blue-accent transition-colors">Message / Inquiry</label>
                                            <textarea rows={4} className="w-full bg-gray-light border-b-2 border-transparent focus:border-blue-accent p-3 text-sm font-light outline-none transition-all resize-none" placeholder="How can we assist you with this event?"></textarea>
                                        </div>

                                        <div className="pt-6">
                                            <button type="submit" className="w-full bg-navy text-white py-5 font-heading font-extrabold uppercase tracking-widest text-[10px] rounded-sm hover:bg-blue-accent transition-all duration-300 shadow-xl flex items-center justify-center gap-3">
                                                Confirm Participation Inquiry <ArrowRight size={14} />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>

                        <div className="p-8 bg-gray-50 border-t border-gray-100 italic">
                            <p className="text-[9px] text-gray-400 uppercase tracking-[0.2em] leading-relaxed text-center">
                                Registration for UPED events requires valid institutional identification upon entry.
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

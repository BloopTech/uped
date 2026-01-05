"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SignupPage() {
    return (
        <div className="bg-white min-h-screen font-body pt-20">
            <div className="container-custom px-6 pt-12 pb-40 lg:pt-24 lg:pb-80">
                <div className="flex flex-col lg:flex-row bg-white shadow-[0_30px_100px_rgba(10,24,63,0.1)] rounded-sm overflow-hidden min-h-[700px]">

                    {/* Left Side: Information & Vision */}
                    <div className="lg:w-1/2 relative p-10 lg:p-20 flex flex-col justify-center bg-navy text-white overflow-hidden">
                        <Image
                            src="/hero3.png"
                            alt="The Future of Education"
                            fill
                            className="object-cover opacity-30 mix-blend-overlay"
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-navy via-navy/90 to-blue-primary/40"></div>

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 space-y-10"
                        >
                            <div className="space-y-4">
                                <span className="text-blue-accent font-heading font-bold text-xs uppercase tracking-[0.4em]">Advisory Portal</span>
                                <h1 className="text-4xl md:text-6xl font-heading font-extrabold tracking-tighter leading-[0.9] uppercase">
                                    Where Your <br /> <span className="text-blue-accent">Future</span> Begins.
                                </h1>
                                <div className="w-16 h-1 bg-blue-accent"></div>
                            </div>

                            <p className="text-gray-300 font-light text-lg leading-relaxed max-w-md">
                                Registering for our global inquiry system is your first authorized step toward a world-class academic legacy.
                            </p>

                            <div className="space-y-6 pt-4">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-blue-accent/20 flex items-center justify-center group-hover:bg-blue-accent transition-colors">
                                        <CheckCircle size={16} className="text-blue-accent group-hover:text-white" />
                                    </div>
                                    <span className="text-sm font-light text-gray-200">Priority Admission Liaison Access</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-blue-accent/20 flex items-center justify-center group-hover:bg-blue-accent transition-colors">
                                        <CheckCircle size={16} className="text-blue-accent group-hover:text-white" />
                                    </div>
                                    <span className="text-sm font-light text-gray-200">Global Scholarship Registry Tools</span>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-blue-accent/20 flex items-center justify-center group-hover:bg-blue-accent transition-colors">
                                        <CheckCircle size={16} className="text-blue-accent group-hover:text-white" />
                                    </div>
                                    <span className="text-sm font-light text-gray-200">Authorized Visa Compliance Support</span>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/10">
                                <p className="text-[10px] text-gray-400 uppercase tracking-widest leading-relaxed">
                                    Join 15,000+ students from African descent who have transitioned to global academic excellence through UPED.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: The Form */}
                    <div className="lg:w-1/2 p-10 lg:p-20 flex flex-col justify-center bg-white">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="max-w-md w-full mx-auto space-y-12"
                        >
                            <div className="space-y-2">
                                <h2 className="text-2xl font-heading font-extrabold text-navy uppercase tracking-tight">Institutional Inquiry</h2>
                                <p className="text-gray-500 font-light text-sm italic">Please provide your academic credentials to commence advisory.</p>
                            </div>

                            <form className="space-y-8">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy group-focus-within:text-blue-accent transition-colors">First Name</label>
                                        <input type="text" className="w-full bg-gray-light border-b-2 border-transparent focus:border-blue-accent p-3 text-sm font-light outline-none transition-all" placeholder="Kwame" />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy group-focus-within:text-blue-accent transition-colors">Last Name</label>
                                        <input type="text" className="w-full bg-gray-light border-b-2 border-transparent focus:border-blue-accent p-3 text-sm font-light outline-none transition-all" placeholder="Mensah" />
                                    </div>
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy group-focus-within:text-blue-accent transition-colors">Institutional Email</label>
                                    <input type="email" className="w-full bg-gray-light border-b-2 border-transparent focus:border-blue-accent p-3 text-sm font-light outline-none transition-all" placeholder="k.mensah@example.com" />
                                </div>

                                <div className="space-y-2 group">
                                    <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy group-focus-within:text-blue-accent transition-colors">Primary Service Interest</label>
                                    <select className="w-full bg-gray-light border-b-2 border-transparent focus:border-blue-accent p-3 text-sm font-light outline-none transition-all appearance-none text-gray-400">
                                        <option>Select Bureau Service</option>
                                        <option>J-1 Summer Work & Travel</option>
                                        <option>College & University Placement</option>
                                        <option>Corporate & Student Conferences</option>
                                        <option>High School Placement</option>
                                        <option>General Student Consultancy</option>
                                    </select>
                                </div>

                                <div className="space-y-6 pt-4">
                                    <button type="submit" className="w-full bg-navy text-white py-5 font-heading font-extrabold uppercase tracking-widest text-[10px] rounded-sm hover:bg-blue-accent transition-all duration-300 shadow-xl flex items-center justify-center gap-3">
                                        Initiate Advisory Account <ArrowRight size={14} />
                                    </button>

                                    <div className="text-center">
                                        <Link href="/contact" className="text-[10px] font-heading font-bold uppercase tracking-widest text-gray-400 hover:text-navy transition-colors">
                                            Have an existing inquiry? <span className="text-blue-accent underline underline-offset-4">Authenticate Here</span>
                                        </Link>
                                    </div>
                                </div>
                            </form>

                            <div className="pt-8 text-center">
                                <p className="text-[9px] text-gray-300 uppercase tracking-[0.2em] leading-relaxed">
                                    All data is processed securely through the UPED Global Compliance Network.
                                    Inquiry ID: UPED-2024-REG-011
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, ShieldCheck, Globe2, MessageSquare, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen font-body pt-20 overflow-x-hidden">
            {/* Contact Header - Matching Institutional Banner Style */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/campus.png"
                    alt="Contact UPED Bureau Accra"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-navy/85 backdrop-blur-[2px]"></div>

                <div className="container-custom px-6 relative z-10 text-center space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tighter uppercase text-white">
                            Direct <span className="text-blue-accent">Correspondence</span>
                        </h1>
                        <div className="w-20 h-1.5 bg-blue-accent mx-auto rounded-full mt-4"></div>
                        <p className="text-gray-100 font-light text-sm md:text-lg uppercase tracking-[0.4em] max-w-3xl mx-auto mt-6">
                            Official Headquarters — Accra, Ghana.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Persuasive Connection Section */}
            <section className="py-24 bg-white relative">
                <div className="container-custom px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-stretch">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-1 space-y-6 flex flex-col justify-center"
                        >
                            <span className="text-blue-accent font-heading font-bold text-xs uppercase tracking-[0.4em]">Connect With Us</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-navy leading-none tracking-tight uppercase">
                                The Accra <br /> <span className="text-blue-accent">Headquarters.</span>
                            </h2>
                            <p className="text-gray-500 font-light text-base leading-relaxed">
                                Established in 2018, our primary bureau in Accra serves as the central hub for our global institutional network and student mobility operations.
                            </p>
                        </motion.div>

                        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <ValueCard
                                icon={ShieldCheck}
                                title="Ethical Advisory"
                                desc="Reliable and student-centered guidance tailored to your specific academic and professional goals."
                            />
                            <ValueCard
                                icon={Globe2}
                                title="Global Mobility"
                                desc="Expert visa and documentation guidance facilitating secure transitions to institutions worldwide."
                            />
                            <ValueCard
                                icon={MessageSquare}
                                title="Institutional Network"
                                desc="Direct liaison with accredited colleges and universities through our extensive established partnerships."
                            />
                            <div className="bg-navy p-8 text-white flex flex-col justify-center space-y-4">
                                <h4 className="font-heading font-extrabold text-blue-accent text-sm uppercase tracking-widest text-center">Contact Hub</h4>
                                <div className="space-y-2 text-center">
                                    <p className="text-xl text-white font-heading font-extrabold leading-relaxed tracking-tight">
                                        +233 265 185 337<br />
                                        +233 592 083 063
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-32 bg-gray-50/50 border-y border-gray-100">
                <div className="container-custom px-6 text-center mb-20 space-y-4">
                    <h2 className="text-3xl font-heading font-extrabold text-navy uppercase tracking-tighter">Transmit Professional Request</h2>
                    <div className="w-12 h-1 bg-blue-accent mx-auto"></div>
                </div>
                <div className="container-custom px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                        {/* Form Side */}
                        <div className="lg:col-span-7 space-y-16">
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-3 text-left">
                                    <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy ml-1">Full Name</label>
                                    <input type="text" className="w-full bg-white border border-gray-100 shadow-sm p-5 text-sm font-light outline-none focus:border-blue-accent transition-all duration-300" placeholder="e.g. Samuel Adeyemi" />
                                </div>
                                <div className="space-y-3 text-left">
                                    <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy ml-1">Institutional Email</label>
                                    <input type="email" className="w-full bg-white border border-gray-100 shadow-sm p-5 text-sm font-light outline-none focus:border-blue-accent transition-all duration-300" placeholder="samuel.a@example.com" />
                                </div>
                                <div className="md:col-span-2 space-y-3 text-left">
                                    <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy ml-1">Inquiry Category</label>
                                    <div className="relative">
                                        <select className="w-full bg-white border border-gray-100 shadow-sm p-5 text-sm font-light outline-none focus:border-blue-accent transition-all duration-300 appearance-none text-gray-500 font-light">
                                            <option>Select Preferred Department</option>
                                            <option>J-1 Exchange Visitor Programs</option>
                                            <option>College & University Placements</option>
                                            <option>Corporate & Student Conferences</option>
                                            <option>High School Placements</option>
                                            <option>General Student Consultancy</option>
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-blue-accent scale-75">
                                            <ArrowRight size={20} className="rotate-90" />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:col-span-2 space-y-3 text-left">
                                    <label className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy ml-1">Inquiry Details</label>
                                    <textarea rows={6} className="w-full bg-white border border-gray-100 shadow-sm p-5 text-sm font-light outline-none focus:border-blue-accent transition-all duration-300" placeholder="Describe your educational or professional requirements..."></textarea>
                                </div>
                                <button type="submit" className="md:col-span-2 btn-institutional bg-navy text-white text-center py-6 shadow-xl hover:shadow-navy/20 hover:bg-blue-accent transition-all group overflow-hidden relative">
                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Initiate Registry Dialogue <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                                    </span>
                                </button>
                            </form>
                        </div>

                        {/* Information Side - Minimalist & Glassy */}
                        <div className="lg:col-span-5 space-y-12">
                            <div className="bg-navy p-12 text-white space-y-16 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-accent/10 rounded-full translate-x-32 -translate-y-32 blur-2xl"></div>

                                <div className="space-y-4 relative z-10 text-left">
                                    <h3 className="text-2xl font-heading font-extrabold tracking-tight uppercase">Accra Bureau</h3>
                                    <div className="w-12 h-1 bg-blue-accent"></div>
                                </div>

                                <div className="space-y-12 relative z-10 text-left">
                                    <ContactHubItem
                                        icon={MapPin}
                                        title="Primary Location"
                                        value="C68/2 Castle Road, Accra, Ghana"
                                    />
                                    <ContactHubItem
                                        icon={Phone}
                                        title="HQ Hotlines"
                                        value="+233 265 185 337 | +233 592 083 063"
                                    />
                                    <ContactHubItem
                                        icon={Mail}
                                        title="Registry Email"
                                        value="advisory@upedbureau.org"
                                    />
                                    <ContactHubItem
                                        icon={Clock}
                                        title="Bureau Hours"
                                        value="Monday — Friday | 09:00 - 18:00"
                                    />
                                </div>

                                <div className="pt-8 border-t border-white/5 relative z-10 text-left">
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest italic group-hover:text-blue-accent transition-colors duration-500">
                                        Accredited since 2018 | GH-00233
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ValueCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="p-8 border border-gray-100 hover:border-blue-accent/20 hover:shadow-xl transition-all duration-500 bg-white group h-full text-left"
        >
            <div className="w-12 h-12 bg-navy/5 flex items-center justify-center rounded-sm mb-6 group-hover:bg-blue-accent transition-colors duration-500">
                <Icon size={20} className="text-blue-accent group-hover:text-white transition-colors" />
            </div>
            <h4 className="font-heading font-extrabold text-navy text-sm uppercase tracking-widest mb-3">{title}</h4>
            <p className="text-gray-400 font-light text-[13px] leading-relaxed italic">{desc}</p>
        </motion.div>
    );
}

function ContactHubItem({ icon: Icon, title, value }: { icon: any, title: string, value: string }) {
    return (
        <div className="flex items-start space-x-6 group">
            <div className="p-3 bg-white/5 rounded-sm group-hover:bg-blue-accent/20 transition-colors">
                <Icon size={18} className="text-blue-accent" />
            </div>
            <div className="space-y-1">
                <h4 className="text-[10px] uppercase font-bold tracking-widest text-gray-500 group-hover:text-blue-accent transition-colors">{title}</h4>
                <p className="text-sm font-light tracking-wide">{value}</p>
            </div>
        </div>
    );
}

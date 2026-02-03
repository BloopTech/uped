"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Home, User, Briefcase, Users, UserPlus, Phone, Menu, X, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Services", url: "/services", icon: Briefcase },
    { name: "Events", url: "/events", icon: Calendar },
    { name: "Team", url: "/team", icon: Users },
    { name: "Signup", url: "/signup", icon: UserPlus },
    { name: "Contact", url: "/contact", icon: Phone },
];

export default function Navbar() {
    const [activeTab, setActiveTab] = useState(navItems[0].name);
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
                isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-gray-100" : "bg-white py-4 border-transparent"
            )}
        >
            <div className="container-custom flex justify-between items-center px-6">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group shrink-0 ml-10">
                    <div className="relative h-24 w-80 transition-transform group-hover:scale-105">
                        <Image
                            src="/uped-branding-logo.jpg"
                            alt="UPED Programs Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation with TubeLight effect */}
                <nav className="hidden lg:flex items-center gap-2">
                    {navItems.map((item) => {
                        const isActive = activeTab === item.name;
                        return (
                            <Link
                                key={item.name}
                                href={item.url}
                                onClick={() => setActiveTab(item.name)}
                                className={cn(
                                    "relative cursor-pointer text-[12px] font-heading font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-colors",
                                    isActive ? "text-blue-primary" : "text-navy/60 hover:text-navy"
                                )}
                            >
                                <span className="relative z-10">{item.name}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="tubelight-lamp"
                                        className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-primary z-0"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 30,
                                        }}
                                    >
                                        <div className="absolute w-full h-4 bg-blue-primary/10 -top-4 rounded-full blur-md" />
                                    </motion.div>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Action Button */}
                <div className="flex items-center space-x-4">
                    <Link
                        href="/signup"
                        className="hidden sm:inline-block text-[11px] font-heading font-bold uppercase tracking-widest bg-navy text-white px-6 py-3 rounded-sm hover:bg-blue-primary transition-colors"
                    >
                        Start Inquiry
                    </Link>
                    <button
                        className="lg:hidden text-navy p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl p-6 z-40"
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.url}
                                    onClick={() => {
                                        setActiveTab(item.name);
                                        setMobileMenuOpen(false);
                                    }}
                                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                >
                                    <item.icon size={18} className="text-blue-primary" />
                                    <span className="text-sm font-heading font-bold uppercase tracking-widest text-navy">{item.name}</span>
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="w-full text-center text-[10px] font-heading font-bold uppercase tracking-widest bg-navy text-white px-6 py-4 rounded-sm"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Start Inquiry
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

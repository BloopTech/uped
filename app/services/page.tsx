"use client";

import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Plane, Globe, BookOpen, Briefcase, Users, School, Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
    return (
        <div className="bg-white min-h-screen font-body pt-20">
            {/* Services Header - Enhanced with Background Image & Reduced Opacity Overlay */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/campus.png"
                    alt="UPED Bureau Services Banner"
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
                            Core Services & <span className="text-blue-accent">Programs</span>
                        </h1>
                        <div className="w-20 h-1.5 bg-blue-accent mx-auto rounded-full mt-4"></div>
                        <p className="text-gray-100 font-light text-sm md:text-lg uppercase tracking-[0.4em] max-w-3xl mx-auto mt-6">
                            Authorized student mobility and educational advisory.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section - Updated with Official Bio */}
            <section className="py-24">
                <div className="container-custom px-6 flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-navy tracking-tight leading-none uppercase">
                            Trusted Guidance for <br /><span className="text-blue-primary italic">Global impact.</span>
                        </h2>
                        <div className="w-12 h-1 bg-blue-accent"></div>
                        <p className="text-gray-500 font-light leading-relaxed">
                            UPED Bureau ensures that clients gain admission into appropriate programs securely, efficiently, and transparently. Our consultancy services cover the entire student mobility lifecycle, from academic and career counselling to pre-departure orientation and settlement support.
                        </p>
                    </div>
                    <div className="md:w-1/2 relative h-[400px] w-full rounded-sm overflow-hidden shadow-2xl group">
                        <Image
                            src="/hero2.png"
                            alt="Authorized Advisory"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-navy/10 group-hover:bg-transparent transition-colors duration-700"></div>
                    </div>
                </div>
            </section>

            {/* Services Grid - 5 Major Services */}
            <section className="py-24 bg-gray-light border-y border-gray-100">
                <div className="container-custom px-6 text-center mb-16">
                    <h2 className="text-3xl font-heading font-extrabold text-navy uppercase tracking-widest">Our Specialties</h2>
                    <div className="w-12 h-1 bg-blue-accent mx-auto mt-4"></div>
                </div>
                <div className="container-custom px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={Globe}
                            title="J-1 Exchange Programs"
                            desc="Facilitating cultural exchange, skills development, and international exposure through the J-1 Exchange Visitor Programs."
                            features={[
                                "Summer Work & Travel",
                                "Internship & Trainee Placements",
                                "Program Compliance Guidance",
                                "Documentation Support"
                            ]}
                            image="/hero3.png"
                        />
                        <ServiceCard
                            icon={GraduationCap}
                            title="University Placements"
                            desc="Assisting students in gaining admission into accredited institutions globally, from Foundation to PhD levels."
                            features={[
                                "Pre-Master's & Foundation",
                                "Bachelor's, Master's & PhD",
                                "Course & Institution Matching",
                                "Application Processing"
                            ]}
                            image="/hero1.png"
                        />
                        <ServiceCard
                            icon={Users}
                            title="Conferences & Fairs"
                            desc="Organizing and supporting conferences that promote learning, leadership, and global engagement."
                            features={[
                                "Student Leadership Summits",
                                "Study-Abroad & Education Fairs",
                                "Corporate Training Seminars",
                                "Global Citizenship Forums"
                            ]}
                            image="/hero2.png"
                        />
                        <ServiceCard
                            icon={School}
                            title="High School Placements"
                            desc="Placement services for students seeking local and international high school education with academic pathway planning."
                            features={[
                                "International & Local Schools",
                                "Boarding & Day school options",
                                "Academic Pathway Planning",
                                "Guardian & Welfare Guidance"
                            ]}
                            image="/campus.png"
                        />
                        <ServiceCard
                            icon={Briefcase}
                            title="Student Consultancy"
                            desc="Covering the entire mobility lifecycle with academic, career, and scholarship advisory services."
                            features={[
                                "Career & Pathway Advice",
                                "Visa & Documentation Guidance",
                                "Scholarship & Funding Advisory",
                                "Settlement & Transition Support"
                            ]}
                            image="/hero2.png"
                        />
                        <div className="bg-navy p-10 flex flex-col justify-center text-white space-y-6 lg:h-full relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-accent/5 rounded-full translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="flex items-center gap-4 relative z-10">
                                <Sparkles className="text-blue-accent animate-pulse" />
                                <h3 className="text-xl font-heading font-extrabold uppercase tracking-tight">Value-Added</h3>
                            </div>
                            <ul className="space-y-4 relative z-10">
                                <li className="text-[11px] font-bold uppercase tracking-widest flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-blue-accent rounded-full"></span>
                                    SOP & Motivation Letter guidance
                                </li>
                                <li className="text-[11px] font-bold uppercase tracking-widest flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-blue-accent rounded-full"></span>
                                    CV & Profile Development
                                </li>
                                <li className="text-[11px] font-bold uppercase tracking-widest flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-blue-accent rounded-full"></span>
                                    Interview Preparation
                                </li>
                                <li className="text-[11px] font-bold uppercase tracking-widest flex items-center gap-3">
                                    <span className="w-1.5 h-1.5 bg-blue-accent rounded-full"></span>
                                    Institutional follow-up
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-32 bg-white">
                <div className="container-custom px-6 text-center space-y-16">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-heading font-extrabold text-navy uppercase tracking-widest leading-none">Our Engagement Process</h2>
                        <div className="w-16 h-1 bg-blue-accent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <ProcessStep
                            number="01"
                            title="Initial Profile Review"
                            desc="A deep audit of your academic history and professional aspirations."
                        />
                        <ProcessStep
                            number="02"
                            title="Strategic Pathfinding"
                            desc="Mapping your strengths to world-class institutional requirements."
                        />
                        <ProcessStep
                            number="03"
                            title="Authorized Filing"
                            desc="Submission of credentials through our priority advisory channels."
                        />
                        <ProcessStep
                            number="04"
                            title="Success Integration"
                            desc="On-ground support as you transition into your new academic landscape."
                        />
                    </div>

                    {/* Added CTA Button after Engagement Process */}
                    <div className="pt-12 text-center">
                        <Link href="/signup" className="group inline-flex items-center gap-4 px-12 py-6 bg-navy text-white font-heading font-extrabold uppercase tracking-widest text-[11px] rounded-sm hover:bg-blue-accent transition-all duration-300 shadow-2xl">
                            Initiate Your Process Today <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-navy text-white text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-accent to-transparent opacity-30"></div>
                <div className="container-custom px-6 space-y-10 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tighter leading-none uppercase">Ready for Professional Advisory?</h2>
                    <p className="text-gray-400 font-light text-lg max-w-2xl mx-auto italic">
                        Empowering students and young professionals since 2018.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link href="/signup" className="w-full sm:w-auto px-12 py-5 bg-white text-navy font-heading font-extrabold uppercase tracking-widest text-[10px] rounded-sm hover:bg-blue-accent hover:text-white transition-all shadow-xl">
                            Initiate Account
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto px-12 py-5 border border-white/20 text-white font-heading font-extrabold uppercase tracking-widest text-[10px] rounded-sm hover:bg-white/5 transition-all">
                            Speak with Accra HQ
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ServiceCard({ icon: Icon, title, desc, features, image }: { icon: any, title: string, desc: string, features: string[], image: string }) {
    return (
        <div className="bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 group flex flex-col h-full text-left">
            <div className="relative h-64 w-full overflow-hidden">
                <Image src={image} alt={title} fill className="object-cover group-hover:scale-110 transition-transform duration-1000 opacity-80" />
                <div className="absolute inset-0 bg-navy/40 group-hover:bg-navy/0 transition-all duration-700"></div>
                <div className="absolute top-6 left-6 bg-blue-accent p-4 text-white">
                    <Icon size={24} />
                </div>
            </div>
            <div className="p-10 flex-1 space-y-6">
                <h3 className="text-xl font-heading font-extrabold text-navy uppercase tracking-tight">{title}</h3>
                <p className="text-gray-500 font-light text-xs leading-relaxed">{desc}</p>
                <ul className="space-y-3 pt-4 border-t border-gray-50">
                    {features.map((f, i) => (
                        <li key={i} className="flex items-center text-[9px] uppercase font-bold tracking-widest text-navy gap-3">
                            <span className="w-1 h-1 bg-blue-accent rounded-full"></span>
                            {f}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function ProcessStep({ number, title, desc }: { number: string, title: string, desc: string }) {
    return (
        <div className="space-y-6 relative group">
            <span className="text-6xl font-heading font-extrabold text-gray-100 group-hover:text-blue-accent/10 transition-colors duration-500 shrink-0">{number}</span>
            <div className="space-y-4">
                <h4 className="font-heading font-extrabold text-navy text-sm uppercase tracking-wider">{title}</h4>
                <p className="text-gray-500 font-light text-[13px] leading-relaxed px-4">{desc}</p>
            </div>
        </div>
    );
}

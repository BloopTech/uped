"use client";

import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Globe2, Trophy, Heart, Users, Target } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen font-body pt-20">
            {/* Header Section */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/campus.png"
                    alt="UPED Programs Headquarters"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-navy/80 backdrop-blur-[2px]"></div>

                <div className="container-custom px-6 relative z-10 text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tighter uppercase text-white">
                        About UPED Programs
                    </h1>
                    <div className="w-20 h-1 bg-blue-accent mx-auto"></div>
                    <p className="text-gray-100 font-light text-sm md:text-lg uppercase tracking-[0.4em] max-w-3xl mx-auto">
                        Excellence. Integrity. Social Impact.
                    </p>
                </div>
            </section>

            {/* Narrative Section - The Official Story */}
            <section className="py-24">
                <div className="container-custom px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-blue-accent font-heading font-bold text-xs uppercase tracking-[0.4em]">Organization Overview</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-navy leading-none tracking-tight">
                                Empowering Global <br /><span className="text-blue-accent">Trajectories since 2018.</span>
                            </h2>
                            <div className="w-12 h-1 bg-blue-accent"></div>
                        </div>
                        <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                            <p>
                                UPED Programs is an established education advisory and student consultancy agency dedicated to supporting students and young professionals to access quality educational and international mobility opportunities.
                            </p>
                            <p>
                                Since its founding in 2018 in Accra, Ghana, UPED Programs has provided reliable, ethical, and student-centered guidance to individuals seeking academic advancement, professional exposure, and global experiences.
                            </p>
                            <p>
                                Through strong institutional networks, experienced counsellors, and a commitment to social impact, we ensure that clients gain admission into appropriate programs securely, efficiently, and transparently.
                            </p>
                        </div>
                        <div className="flex space-x-4">
                            <div className="bg-gray-light p-6 rounded-sm border-t-4 border-navy flex-1">
                                <span className="block text-3xl font-heading font-extrabold text-navy text-center">Accra</span>
                                <span className="block text-[10px] font-heading font-bold uppercase tracking-widest text-blue-accent text-center">Headquarters</span>
                            </div>
                            <div className="bg-gray-light p-6 rounded-sm border-t-4 border-blue-accent flex-1">
                                <span className="block text-3xl font-heading font-extrabold text-navy text-center">Est. 2018</span>
                                <span className="block text-[10px] font-heading font-bold uppercase tracking-widest text-blue-accent text-center">Founding Year</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative h-[600px] shadow-2xl rounded-sm overflow-hidden group">
                        <Image
                            src="/hero1.png"
                            alt="The Official UPED Story"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                        />
                        <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-700"></div>
                        <div className="absolute inset-x-0 bottom-0 bg-navy/95 p-8 text-white">
                            <h4 className="font-heading font-extrabold text-blue-accent text-xs uppercase tracking-[0.2em] mb-2">Our Foundation</h4>
                            <p className="text-xs italic font-light leading-relaxed">"Dedicated to supporting students and young professionals seeking academic advancement and global experiences."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision - Institutional Focus */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="container-custom px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="bg-white p-12 shadow-xl border-l-4 border-navy space-y-6">
                        <div className="w-12 h-12 bg-navy text-blue-accent flex items-center justify-center rounded-sm">
                            <Target size={24} />
                        </div>
                        <h3 className="text-2xl font-heading font-extrabold text-navy uppercase tracking-tight">Our Mission</h3>
                        <p className="text-gray-500 font-light leading-relaxed">
                            To empower students and young professionals with trusted educational guidance and global opportunities that foster academic excellence, employability, and social impact.
                        </p>
                    </div>
                    <div className="bg-white p-12 shadow-xl border-l-4 border-blue-accent space-y-6">
                        <div className="w-12 h-12 bg-blue-accent text-white flex items-center justify-center rounded-sm">
                            <Globe2 size={24} />
                        </div>
                        <h3 className="text-2xl font-heading font-extrabold text-navy uppercase tracking-tight">Our Vision</h3>
                        <p className="text-gray-500 font-light leading-relaxed">
                            To become a leading education advisory bureau recognized for integrity, excellence, and transformative impact in international education and student mobility.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values - Official Listing */}
            <section className="py-24 bg-navy text-white relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-primary/10 rounded-full blur-[100px]"></div>
                <div className="container-custom px-6 text-center space-y-16 relative z-10">
                    <div className="space-y-4">
                        <span className="text-blue-accent font-heading font-bold text-xs uppercase tracking-[0.4em]">The Programs Standard</span>
                        <h2 className="text-3xl font-heading font-extrabold tracking-tight uppercase">Core Values</h2>
                        <div className="w-16 h-1 bg-blue-accent mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
                        <ValueCard
                            icon={ShieldCheck}
                            title="Integrity"
                            desc="Integrity and transparency in every student dialogue."
                        />
                        <ValueCard
                            icon={Users}
                            title="Student-Centered"
                            desc="Services tailored to individual goals and success."
                        />
                        <ValueCard
                            icon={Trophy}
                            title="Excellence"
                            desc="Excellence and professionalism in all placements."
                        />
                        <ValueCard
                            icon={Heart}
                            title="Responsibility"
                            desc="Social responsibility and meaningful impact."
                        />
                        <ValueCard
                            icon={Globe2}
                            title="Engagement"
                            desc="Global engagement across institutional networks."
                        />
                    </div>
                </div>
            </section>

            {/* Why Choose Section - Official Content */}
            <section className="py-32 bg-white">
                <div className="container-custom px-6">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="w-full lg:w-1/2 relative h-[500px] border-[15px] border-gray-50 shadow-2xl overflow-hidden group">
                            <Image
                                src="/hero3.png"
                                alt="Why Choose UPED"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-navy/20"></div>
                        </div>
                        <div className="w-full lg:w-1/2 space-y-10">
                            <div className="space-y-4">
                                <span className="text-blue-accent font-heading font-bold text-xs uppercase tracking-[0.4em]">The Distinction</span>
                                <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-navy tracking-tight uppercase">
                                    Why Choose <br /><span className="text-blue-accent">UPED Programs</span>
                                </h2>
                                <div className="w-16 h-1 bg-navy"></div>
                            </div>

                            <ul className="space-y-6">
                                <FeatureItem text="Established and experienced education advisory service" />
                                <FeatureItem text="Personalized counselling tailored to individual goals" />
                                <FeatureItem text="Ethical recruitment and transparent processes" />
                                <FeatureItem text="Strong institutional and international networks" />
                                <FeatureItem text="Commitment to long-term student success" />
                            </ul>

                            <div className="pt-6">
                                <Link href="/signup" className="btn-institutional bg-navy text-white hover:bg-blue-accent transition-colors">Initiate Professional Inquiry</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Reach Section */}
            <section className="py-24 bg-gray-light border-y border-gray-100">
                <div className="container-custom px-6 text-center space-y-8">
                    <p className="text-gray-500 font-light italic leading-relaxed max-w-3xl mx-auto">
                        "UPED Programs ensures that clients gain admission into appropriate programs securely, efficiently, and transparently through its commitment to educational excellence."
                    </p>
                    <div className="flex justify-center space-x-12 pt-4">
                        <div className="text-center">
                            <span className="block text-2xl font-heading font-extrabold text-navy uppercase">Travel</span>
                            <span className="text-[10px] text-blue-accent font-bold uppercase tracking-widest">Specialty</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-2xl font-heading font-extrabold text-navy uppercase">Education</span>
                            <span className="text-[10px] text-blue-accent font-bold uppercase tracking-widest">Specialty</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-2xl font-heading font-extrabold text-navy uppercase">Social Change</span>
                            <span className="text-[10px] text-blue-accent font-bold uppercase tracking-widest">Specialty</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ValueCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="space-y-6 group">
            <div className="mx-auto w-16 h-16 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-blue-accent group-hover:border-blue-accent transition-all duration-500">
                <Icon size={24} className="text-white" />
            </div>
            <div className="space-y-3">
                <h4 className="font-heading font-extrabold text-sm uppercase tracking-widest">{title}</h4>
                <p className="text-gray-400 text-[11px] font-light leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

function FeatureItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-4 text-gray-600 font-light text-sm">
            <div className="w-1.5 h-1.5 bg-blue-accent rounded-full shrink-0"></div>
            {text}
        </li>
    );
}

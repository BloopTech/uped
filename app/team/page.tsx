"use client";

import Image from "next/image";
import Link from "next/link";
import { UserCheck, Star, Shield, Zap, Globe2, Quote } from "lucide-react";
import { motion } from "framer-motion";

const team = [
    {
        name: "Dr. Marcus Mensah",
        role: "Director of Global Education",
        bio: "With over 15 years in international education advisory, Dr. Mensah leads our university placement division, focusing on elite institutional transitions.",
        image: "/hero2.png"
    },
    {
        name: "Aisha Bello",
        role: "Head of International Mobility",
        bio: "An expert in J-1 Exchange Visitor Programs and global visa compliance, Aisha ensures seamless student travel and cultural immersion.",
        image: "/hero3.png"
    },
    {
        name: "Kofi Boateng",
        role: "Institutional Partnership Lead",
        bio: "Building strategic bridges between UPED and global universities, Kofi manages our extensive network of accredited academic partners.",
        image: "/hero1.png"
    },
    {
        name: "Elena Zola",
        role: "Director of Social Change",
        bio: "Dedicated to the Programs' mission of social impact, Elena oversees our community development initiatives and student leadership forums.",
        image: "/hero2.png"
    }
];

export default function TeamPage() {
    return (
        <div className="bg-white min-h-screen font-body pt-20 overflow-x-hidden">
            {/* Dynamic Banner Section - Matching About Page Flair */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                <Image
                    src="/hero3.png"
                    alt="UPED Expert Advisory Team"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-navy/85 backdrop-blur-[3px]"></div>

                <div className="container-custom px-6 relative z-10 text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <h1 className="text-4xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tighter uppercase text-white leading-none">
                            The <span className="text-blue-accent italic">Global</span> Team
                        </h1>
                        <div className="w-20 h-1.5 bg-blue-accent mx-auto rounded-full"></div>
                        <p className="text-gray-100 font-light text-sm md:text-lg uppercase tracking-[0.4em] max-w-3xl mx-auto leading-relaxed">
                            Authorized advisors for your academic legacy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section - Why We Do It */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="container-custom px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <span className="text-blue-accent font-heading font-bold text-xs uppercase tracking-[0.4em]">Our Philosophy</span>
                            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-navy tracking-tight leading-[0.9] uppercase">
                                Why We Commit <br /> To Your <span className="text-blue-accent">Success.</span>
                            </h2>
                        </div>
                        <div className="space-y-6 text-gray-500 font-light leading-relaxed">
                            <p>
                                At UPED Programs, we believe that every student of African descent represents a potential global leader. Our team isn't just focused on admissions; we are focused on the **authorized elevation** of academic trajectories.
                            </p>
                            <p>
                                We do what we do because the gap between local ambition and global opportunity should no longer be defined by geography. By providing expert, ethical, and strategic advisory, we empower the next generation to claim their place in the world's most prestigious institutions.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-navy/5 flex items-center justify-center rounded-sm text-blue-accent">
                                    <Shield size={18} />
                                </div>
                                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy">Ethical Duty</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-navy/5 flex items-center justify-center rounded-sm text-blue-accent">
                                    <Globe2 size={18} />
                                </div>
                                <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-navy">Global Duty</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-navy p-12 text-white space-y-10 relative shadow-2xl overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-accent/10 rounded-full translate-x-16 -translate-y-16"></div>
                        <Quote size={48} className="text-blue-accent/20" />
                        <p className="text-lg md:text-xl font-heading font-light italic leading-relaxed relative z-10">
                            "Our advisory isn't just a service; it's a bridge. We ensure that our students aren't just 'going abroad', but are entering environments where they will thrive and lead."
                        </p>
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-px bg-blue-accent"></div>
                            <span className="text-[10px] font-heading font-bold uppercase tracking-[0.4em] text-blue-accent">UPED Leadership Office</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Section - Modern Grid */}
            <section className="py-24 bg-gray-light border-y border-gray-100 relative">
                <div className="container-custom px-6 text-center space-y-4 mb-20">
                    <h2 className="text-4xl font-heading font-extrabold text-navy tracking-tighter uppercase">Programs <span className="text-blue-accent">Expertise.</span></h2>
                    <div className="w-16 h-1 bg-blue-accent mx-auto"></div>
                </div>

                <div className="container-custom px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ExpertiseCard
                        icon={Star}
                        title="Elite Placements"
                        desc="Our advisors have a 95% success rate for Ivy League and Russell Group applications."
                    />
                    <ExpertiseCard
                        icon={UserCheck}
                        title="Personalized Paths"
                        desc="Every student receives a individual strategy tailored to their specific career goals."
                    />
                    <ExpertiseCard
                        icon={Zap}
                        title="Agile Mobility"
                        desc="Navigating complex visa and border transitions with extreme institutional efficiency."
                    />
                </div>
            </section>

            {/* Main Team Grid - Enhanced Cards */}
            <section className="py-32">
                <div className="container-custom px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-navy tracking-tight leading-none uppercase">
                                The Global <br /> <span className="text-blue-accent">Advisory Board.</span>
                            </h2>
                        </div>
                        <p className="text-gray-500 font-light text-[13px] leading-relaxed max-w-sm italic">
                            Our team brings together decades of collective experience in international education and diplomatic liaison.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-20">
                        {team.map((member, index) => (
                            <div key={index} className="group flex flex-col h-full">
                                <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100 shadow-xl mb-8">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-500"></div>
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                                </div>
                                <div className="space-y-4 flex-1">
                                    <div className="space-y-1">
                                        <h3 className="font-heading font-extrabold text-navy text-lg uppercase tracking-tight group-hover:text-blue-accent transition-colors">{member.name}</h3>
                                        <p className="text-blue-accent font-heading font-bold text-[10px] uppercase tracking-widest">{member.role}</p>
                                    </div>
                                    <p className="text-gray-500 font-light text-[13px] leading-relaxed pt-2 opacity-80 group-hover:opacity-100 transition-opacity">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action - Join the Network */}
            <section className="py-24 text-center relative overflow-hidden group mb-24">
                <Image
                    src="/hero3.png"
                    alt="Background"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-[#7a5932]/95 z-0"></div>

                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-accent to-transparent opacity-30 z-10"></div>
                <div className="container-custom px-6 space-y-12 relative z-10">
                    <div className="space-y-4">
                        <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-white tracking-tighter uppercase leading-none">Expand the Programs' <span className="text-blue-accent">Influence.</span></h2>
                        <div className="w-20 h-1 bg-blue-accent mx-auto rounded-full"></div>
                        <p className="text-white max-w-2xl mx-auto font-light leading-relaxed text-sm italic">
                            We are always looking for passionate educational consultants and institutional experts of African descent to join our global board.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-white text-navy font-heading font-extrabold uppercase tracking-widest text-[10px] rounded-sm hover:bg-blue-accent hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl">
                            Submit Credentials
                        </Link>
                        <Link href="/about" className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white font-heading font-extrabold uppercase tracking-widest text-[10px] rounded-sm hover:bg-white/5 transition-all">
                            Learn about Board Governance
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ExpertiseCard({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="bg-white p-12 border border-blue-accent/10 shadow-sm hover:shadow-2xl transition-all duration-700 group relative overflow-hidden h-full">
            <div className="absolute top-0 left-0 w-1 h-0 bg-blue-accent group-hover:h-full transition-all duration-500"></div>
            <div className="space-y-6">
                <div className="w-14 h-14 bg-navy/5 flex items-center justify-center rounded-lg group-hover:bg-blue-accent transition-colors duration-500">
                    <Icon size={24} className="text-blue-accent group-hover:text-white transition-colors" />
                </div>
                <div className="space-y-4">
                    <h4 className="font-heading font-extrabold text-navy text-sm uppercase tracking-widest">{title}</h4>
                    <p className="text-gray-500 font-light text-[13px] leading-relaxed">{desc}</p>
                </div>
            </div>
        </div>
    );
}

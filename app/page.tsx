"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Globe, GraduationCap, Briefcase, School, Users, ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "/hero1.png",
      title: "Global Education Bureau",
      subtitle: "Established in 2018 | Accra, Ghana",
    },
    {
      image: "/hero2.png",
      title: "J-1 Exchange Experts",
      subtitle: "Skills Development & International Exposure",
    },
    {
      image: "/hero3.png",
      title: "Secure Your Future",
      subtitle: "Authorized Academic & Professional Placements",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white font-body">
      {/* Hero Slider */}
      <section className="relative h-[85vh] w-full bg-navy">
        <div className="absolute inset-0 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
                }`}
              style={{ transitionProperty: "opacity, transform" }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover brightness-[0.4]"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <div className="container-custom relative h-full flex flex-col justify-center items-center text-center text-white z-10 px-6 pt-12">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-3 bg-blue-accent/20 backdrop-blur-sm px-6 py-2 rounded-full border border-blue-accent/30 animate-in fade-in slide-in-from-top-4 duration-1000">
              <span className="w-2 h-2 bg-blue-accent rounded-full animate-pulse"></span>
              <span className="text-[10px] font-heading font-extrabold uppercase tracking-[0.4em] text-blue-accent">Authorized Advisory Bureau</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-heading font-extrabold leading-[0.9] tracking-tighter drop-shadow-2xl uppercase animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              {slides[currentSlide].title}
            </h1>

            <p className="text-sm md:text-xl font-heading font-light uppercase tracking-[0.5em] text-gray-300 animate-in fade-in duration-1000 delay-700">
              {slides[currentSlide].subtitle}
            </p>
          </div>
        </div>

        {/* Hero Bottom Cards - Elevated Z-index to z-40 to stay in front */}
        <div className="absolute bottom-0 left-0 w-full z-40 translate-y-1/2 hidden md:block">
          <div className="container-custom grid grid-cols-3 gap-0 px-6">
            <HeroCard
              title="Education"
              desc="Global University Placements"
              color="bg-navy"
              href="/services"
            />
            <HeroCard
              title="Travel"
              desc="J-1 Exchange Programs"
              color="bg-blue-primary"
              href="/services"
            />
            <HeroCard
              title="Impact"
              desc="Empowering Young Professionals"
              color="bg-blue-accent"
              href="/about"
            />
          </div>
        </div>
      </section>

      {/* Spacer for overlapping cards */}
      <div className="h-48 md:h-32"></div>

      {/* Corporate Overview Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="w-12 h-1 bg-blue-accent"></div>
                <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-navy tracking-tighter leading-none uppercase">
                  Trusted Guidance. <br /><span className="text-blue-accent italic">Global Success.</span>
                </h2>
                <p className="text-gray-500 font-light text-lg leading-relaxed italic">
                  "Dedicated to supporting students and young professionals seeking academic advancement and global experiences since 2018."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <FeatureItem
                  icon={Globe}
                  title="International Mobility"
                  text="Facilitating secure and efficient admission into accredited institutions worldwide."
                />
                <FeatureItem
                  icon={ShieldCheck}
                  title="Ethical Advisory"
                  text="Founded on principles of integrity, transparency, and student-centered service."
                  isNew
                />
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link href="/about" className="group flex items-center gap-4 text-[11px] font-heading font-extrabold uppercase tracking-widest text-navy hover:text-blue-accent transition-colors">
                  Learn About The Bureau <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="bg-navy p-12 text-white space-y-10 rounded-sm shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-accent/5 rounded-full translate-x-32 -translate-y-32"></div>
              <div className="space-y-4 relative z-10">
                <span className="text-blue-accent font-heading font-bold text-[10px] uppercase tracking-[0.5em]">2018 Founding</span>
                <h2 className="text-3xl font-heading font-extrabold tracking-tight uppercase">Accra Headquarters</h2>
                <div className="w-12 h-1 bg-blue-accent"></div>
              </div>

              <p className="text-gray-300 text-sm font-light leading-relaxed relative z-10">
                UPED Bureau is an established education advisory and student consultancy agency dedicated to supporting students and young professionals to access quality educational and international mobility opportunities. We ensure that clients gain admission into appropriate programs securely, efficiently, and transparently.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/10 relative z-10">
                <div className="space-y-1">
                  <span className="text-blue-accent font-heading font-bold text-xl uppercase tracking-tighter tracking-tighter">Accra</span>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest">Global HQ</p>
                </div>
                <div className="space-y-1">
                  <span className="text-blue-accent font-heading font-bold text-xl uppercase tracking-tighter">Est. 2018</span>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Impact Section */}
      <section className="py-24 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-accent via-transparent to-transparent"></div>
        </div>
        <div className="container-custom px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 divide-x divide-white/10">
            <div className="flex flex-col items-center text-center space-y-4 pl-0 md:pl-8">
              <span className="text-4xl md:text-6xl font-heading font-extrabold text-blue-accent tracking-tighter">15,000+</span>
              <span className="text-[10px] uppercase font-heading font-bold tracking-[0.3em] text-gray-400">Inquiries Processed</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 pl-8">
              <span className="text-4xl md:text-6xl font-heading font-extrabold text-blue-accent tracking-tighter">250+</span>
              <span className="text-[10px] uppercase font-heading font-bold tracking-[0.3em] text-gray-400">Institutional Partners</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 pl-8">
              <span className="text-4xl md:text-6xl font-heading font-extrabold text-blue-accent tracking-tighter">100%</span>
              <span className="text-[10px] uppercase font-heading font-bold tracking-[0.3em] text-gray-400">Compliance Rating</span>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 pl-8">
              <span className="text-4xl md:text-6xl font-heading font-extrabold text-blue-accent tracking-tighter">6+</span>
              <span className="text-[10px] uppercase font-heading font-bold tracking-[0.3em] text-gray-400">Years of Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Institutional Network - Looping Marquee */}
      <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
        <div className="container-custom px-6 mb-12 text-center">
          <span className="text-[10px] font-heading font-bold uppercase tracking-[0.4em] text-gray-400">Trusted by Global Institutions</span>
        </div>
        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex whitespace-nowrap gap-20 py-4 items-center"
            animate={{ x: [0, -1920] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            <UniversityLogo name="Yale University" />
            <UniversityLogo name="Harvard University" />
            <UniversityLogo name="University of British Columbia" />
            <UniversityLogo name="UC Berkeley" />
            <UniversityLogo name="George Brown College" />
            <UniversityLogo name="University of Toronto" />
            <UniversityLogo name="LSE London" />
            <UniversityLogo name="Georgia Tech" />
            <UniversityLogo name="University of Sheffield" />
            {/* Duplicate for seamless loop */}
            <UniversityLogo name="Yale University" />
            <UniversityLogo name="Harvard University" />
            <UniversityLogo name="University of British Columbia" />
            <UniversityLogo name="UC Berkeley" />
            <UniversityLogo name="George Brown College" />
            <UniversityLogo name="University of Toronto" />
            <UniversityLogo name="LSE London" />
            <UniversityLogo name="Georgia Tech" />
            <UniversityLogo name="University of Sheffield" />
          </motion.div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-24 bg-gray-light border-y border-gray-100">
        <div className="container-custom px-6 text-center space-y-4 mb-20 max-w-2xl mx-auto">
          <span className="text-blue-accent font-heading font-bold text-xs uppercase tracking-[0.4em]">Our Coverage</span>
          <h2 className="text-4xl font-heading font-extrabold text-navy uppercase tracking-tighter leading-none">Specialized Portfolios</h2>
          <div className="w-16 h-1 bg-blue-accent mx-auto mt-4"></div>
        </div>

        <div className="container-custom px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <PortfolioCard title="J-1 Exchange" desc="Work & Travel / Internships" icon={Globe} href="/services" />
          <PortfolioCard title="University" desc="Bachelor's / Master's / PhD" icon={GraduationCap} href="/services" />
          <PortfolioCard title="Conferences" desc="Leadership & Global Citizenship" icon={Users} href="/services" />
          <PortfolioCard title="High School" desc="International & Local Placements" icon={School} href="/services" />
        </div>
      </section>

      {/* Voices of Excellence Section - Refined Split Layout */}
      <section className="py-12 bg-white relative overflow-hidden">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12">
            {/* Left Side: Title & Description */}
            <div className="lg:col-span-4 space-y-6 lg:pr-12 lg:border-r lg:border-gray-100">
              <div className="space-y-4">
                <span className="text-blue-accent font-heading font-bold text-[10px] uppercase tracking-[0.4em]">Success Stories</span>
                <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-navy uppercase tracking-tighter leading-none">
                  Voices of <br /><span className="text-blue-accent italic">Excellence.</span>
                </h2>
              </div>
              <p className="text-gray-500 font-light text-sm leading-relaxed italic">
                Hear from the students and professionals who have transitioned through our Bureau to prestigious global platforms.
              </p>
            </div>

            {/* Right Side: Smaller Looping Marquee */}
            <div className="lg:col-span-8 relative overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{ x: [0, -1200] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                {[
                  {
                    name: "Bismark Appiah",
                    role: "Exchange Alumnus, 2022",
                    text: "The J-1 program transformed my perspective on global media. UPED Bureau handled every detail with precision.",
                    icon: Globe
                  },
                  {
                    name: "Sarah Mensah",
                    role: "Master's Candidate, London",
                    text: "Securing admission into a UK Russell Group university seemed daunting until I engaged the Bureau's expert pathfinding.",
                    icon: GraduationCap
                  },
                  {
                    name: "David Okoro",
                    role: "Foundation Student, Toronto",
                    text: "The Bureau's guidance on scholarship applications was life-changing. I am now pursuing my dream in Canada.",
                    icon: School
                  },
                  // Duplicates for loop
                  {
                    name: "Bismark Appiah",
                    role: "Exchange Alumnus, 2022",
                    text: "The J-1 program transformed my perspective on global media. UPED Bureau handled every detail with precision.",
                    icon: Globe
                  },
                  {
                    name: "Sarah Mensah",
                    role: "Master's Candidate, London",
                    text: "Securing admission into a UK Russell Group university seemed daunting until I engaged the Bureau's expert pathfinding.",
                    icon: GraduationCap
                  }
                ].map((t, i) => (
                  <div key={i} className="min-w-[320px] bg-gray-light p-8 space-y-5 rounded-sm group hover:bg-navy transition-all duration-700">
                    <Quote className="text-blue-accent w-6 h-6 group-hover:text-white transition-colors" />
                    <p className="text-gray-600 font-light leading-relaxed text-[13px] italic group-hover:text-gray-300 transition-colors">
                      "{t.text}"
                    </p>
                    <div className="pt-4 border-t border-gray-200 group-hover:border-white/10 flex items-center justify-between">
                      <div>
                        <h4 className="font-heading font-extrabold text-navy uppercase tracking-tight text-[11px] group-hover:text-white transition-colors">{t.name}</h4>
                        <p className="text-[9px] text-blue-primary font-bold uppercase tracking-widest group-hover:text-blue-accent transition-colors">{t.role}</p>
                      </div>
                      <t.icon size={16} className="text-blue-accent group-hover:text-white" />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Visionary Banner - Redesigned & Thinner Profile */}
      <section className="relative py-16 overflow-hidden group">
        <Image
          src="/hero2.png"
          alt="Bureau Visionary"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-navy/60 backdrop-blur-[1px]"></div>
        <div className="container-custom px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
            <div className="space-y-3">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-none tracking-tighter uppercase">
                Your Future <span className="text-blue-accent">Starts Here.</span>
              </h2>
              <p className="text-gray-200 text-[10px] md:text-xs font-heading font-bold uppercase tracking-[0.4em]">
                Authorized Educational Advisory & Global Mobility
              </p>
            </div>
            <Link href="/signup" className="px-10 py-5 bg-blue-accent text-white font-heading font-extrabold uppercase tracking-widest text-[10px] rounded-sm hover:bg-white hover:text-navy transition-all shadow-2xl shrink-0">
              Initiate Professional Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function UniversityLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center space-x-3 opacity-40 hover:opacity-100 transition-opacity duration-500 cursor-default grayscale hover:grayscale-0">
      <div className="w-8 h-8 bg-navy/10 flex items-center justify-center rounded-sm">
        <School size={16} className="text-navy" />
      </div>
      <span className="font-heading font-bold text-sm uppercase tracking-widest text-navy">{name}</span>
    </div>
  );
}

function HeroCard({ title, desc, color, href }: { title: string, desc: string, color: string, href: string }) {
  const isAccentBg = color === "bg-blue-accent";

  return (
    <Link
      href={href}
      className={`${color} p-10 text-white h-48 flex flex-col justify-center gap-2 group hover:brightness-110 transition-all duration-300 relative overflow-hidden`}
    >
      <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-125 transition-transform duration-700">
        <Globe size={180} />
      </div>
      <span className={`text-xs font-heading font-extrabold uppercase tracking-[0.3em] ${isAccentBg ? 'text-white' : 'text-blue-accent'} relative z-10 block`}>
        {title}
      </span>
      <span className="text-sm md:text-lg font-heading font-light relative z-10 leading-tight block">
        {desc}
      </span>
    </Link>
  );
}

function FeatureItem({ icon: Icon, title, text, isNew = false }: { icon: any, title: string, text: string, isNew?: boolean }) {
  return (
    <div className="flex items-start space-x-6 group">
      <div className="w-14 h-14 bg-navy/5 flex items-center justify-center rounded-sm shrink-0 group-hover:bg-blue-accent transition-colors duration-500">
        <Icon size={24} className="text-blue-accent group-hover:text-white transition-colors" />
      </div>
      <div className="space-y-2">
        <h4 className="font-heading font-extrabold text-navy text-sm uppercase tracking-wider flex items-center gap-2">
          {title}
          {isNew && <span className="text-[8px] bg-blue-accent text-white px-2 py-0.5 rounded-full animate-pulse">Core Value</span>}
        </h4>
        <p className="text-gray-400 font-light text-[13px] leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

function PortfolioCard({ title, desc, icon: Icon, href }: { title: string, desc: string, icon: any, href: string }) {
  return (
    <Link href={href} className="bg-white p-10 border border-gray-100 hover:border-blue-accent/20 hover:shadow-2xl transition-all duration-700 group flex flex-col items-center text-center space-y-6">
      <div className="w-16 h-16 bg-navy text-blue-accent flex items-center justify-center rounded-sm transform group-hover:rotate-12 transition-transform">
        <Icon size={28} />
      </div>
      <div className="space-y-2">
        <h4 className="font-heading font-extrabold text-navy text-sm uppercase tracking-widest underline decoration-blue-accent/30 underline-offset-4">{title}</h4>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-light">{desc}</p>
      </div>
    </Link>
  )
}

function ShieldCheck({ size = 24, className = "" }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-navy text-white pt-24 pb-12 border-t border-white/5">
            <div className="container-custom px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative h-14 w-48 transition-transform group-hover:scale-105">
                                <Image
                                    src="/uped-branding-logo.jpg"
                                    alt="UPED Programs Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </Link>
                        <p className="text-white font-light leading-relaxed text-[14px] font-body max-w-xs italic border-l-2 border-blue-accent/30 pl-6">
                            "Authorized educational advisory bureau dedicated to ethical student mobility and prestigious academic placements worldwide."
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-accent mb-8 font-heading">Advisory Portal</h4>
                        <ul className="space-y-4 font-body">
                            <li><Link href="/about" className="text-white hover:text-white transition-colors text-sm font-light tracking-wide">Organization Profile</Link></li>
                            <li><Link href="/services" className="text-white hover:text-white transition-colors text-sm font-light tracking-wide">Advisory Solutions</Link></li>
                            <li><Link href="/team" className="text-white hover:text-white transition-colors text-sm font-light tracking-wide">Global Team</Link></li>
                            <li><Link href="/events" className="text-white hover:text-white transition-colors text-sm font-light tracking-wide">Academic Events</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-accent mb-8 font-heading">Global Logistics</h4>
                        <ul className="space-y-4 font-body">
                            <li><Link href="/services" className="text-white hover:text-white transition-colors text-sm font-light tracking-wide">J-1 Exchange Compliance</Link></li>
                            <li><Link href="/services" className="text-white hover:text-white transition-colors text-sm font-light tracking-wide">University Admissions</Link></li>
                            <li><Link href="/services" className="text-white hover:text-white transition-colors text-sm font-light tracking-wide">Pre-Departure Briefs</Link></li>
                            <li><Link href="/contact" className="text-white hover:text-white transition-colors text-sm font-light tracking-wide">Accra HQ Support</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-8">
                        <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-blue-accent mb-1 font-heading">Connect Overseas</h4>
                        <p className="text-[12px] text-white font-light leading-relaxed">
                            C68/2 Castle Road, Accra, Ghana<br />
                            +233 265 185 337 | +233 592 083 063
                        </p>
                        <div className="flex border-b border-white/20 pb-2">
                            <input type="email" placeholder="Institutional Email" className="bg-transparent text-sm font-light outline-none flex-1 placeholder:text-white/50" />
                            <button className="text-[11px] font-extrabold uppercase tracking-widest text-blue-accent hover:text-white transition-colors">Join</button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/70 font-heading uppercase tracking-[0.2em]">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center text-center md:text-left">
                        <p>© {new Date().getFullYear()} UPED Programs — Est. 2018 | Accra, Ghana</p>
                        <span className="hidden md:block w-px h-3 bg-white/10"></span>
                        <p className="text-white/50">Specializing in Education, Travel, and Social Change</p>
                    </div>
                    <div className="flex space-x-8 mt-6 md:mt-0">
                        <Link href="/" className="hover:text-blue-accent transition-colors">Privacy & Data</Link>
                        <a href="https://www.bloopglobal.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-accent transition-colors">Built by Bloop Global LLC</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}




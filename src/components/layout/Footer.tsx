import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black/60 border-t border-gold/20 text-cream pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="font-playfair text-3xl text-gold mb-4">Al Siraj Jewellery</h2>
                        <p className="text-sm opacity-80 leading-relaxed max-w-xs mx-auto md:mx-0">
                            Abu Dhabi&apos;s trusted destination for exquisite gold craftsmanship since 1999. Where tradition meets timeless elegance.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h3 className="font-playfair text-xl text-gold mb-6">Explore</h3>
                        <ul className="space-y-3 text-sm tracking-wide opacity-80">
                            <li><Link href="#collections" className="hover:text-gold transition-colors">Collections</Link></li>
                            <li><Link href="#about" className="hover:text-gold transition-colors">Our Legacy</Link></li>
                            <li><Link href="#showrooms" className="hover:text-gold transition-colors">Showrooms</Link></li>
                            <li><Link href="#contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-right">
                        <h3 className="font-playfair text-xl text-gold mb-6">Contact Us</h3>
                        <div className="flex flex-col items-center md:items-end space-y-4 text-sm opacity-80">
                            <a href="tel:+97126347640" className="flex items-center gap-2 hover:text-gold transition-colors">
                                <span>02-6347640</span>
                                <Phone size={16} />
                            </a>
                            <a href="mailto:alsirajjewellery@gmail.com" className="flex items-center gap-2 hover:text-gold transition-colors">
                                <span>alsirajjewellery@gmail.com</span>
                                <Mail size={16} />
                            </a>
                            <div className="flex items-start justify-end gap-2 text-right">
                                <span>Madina Zayed, Abu Dhabi, UAE</span>
                                <MapPin size={16} className="mt-1" />
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="flex justify-center md:justify-end gap-6 mt-8 text-gold">
                            <Link href="#" className="hover:text-white transition-transform hover:scale-110"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-white transition-transform hover:scale-110"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-white transition-transform hover:scale-110"><Twitter size={20} /></Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-xs opacity-50 uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} Al Siraj Jewellery WLL. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

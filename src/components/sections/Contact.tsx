"use client";

import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-transparent relative">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <div className="w-full max-w-5xl">
                        <span className="text-gold tracking-[0.2em] text-xs uppercase block mb-3">Get in Touch</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-cream mb-8">Visit Our Showrooms</h2>
                        <p className="text-cream/70 mb-16 leading-relaxed max-w-2xl mx-auto">
                            Experience our latest collections in person or contact us for custom designs and inquiries.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            {/* Head Office */}
                            <div className="bg-black/40 border border-white/5 p-8 rounded-sm hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 group">
                                <div className="w-12 h-12 bg-black/60 border border-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <MapPin className="text-gold" />
                                </div>
                                <h4 className="font-playfair text-lg text-gold mb-3">Head Office</h4>
                                <p className="text-cream/70 text-sm leading-relaxed">Madina Zayed, Opp Madina Zayed Shopping Center,<br />Abu Dhabi, UAE</p>
                            </div>

                            {/* Call Us */}
                            <div className="bg-black/40 border border-white/5 p-8 rounded-sm hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 group">
                                <div className="w-12 h-12 bg-black/60 border border-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Phone className="text-gold" />
                                </div>
                                <h4 className="font-playfair text-lg text-gold mb-3">Call Us</h4>
                                <div className="space-y-1">
                                    <p className="text-cream/70 text-sm hover:text-gold transition-colors">
                                        <a href="tel:+97126347640">02-6347640</a>
                                    </p>
                                    <p className="text-cream/70 text-sm hover:text-gold transition-colors">
                                        <a href="tel:+971543355779">054-3355779</a>
                                    </p>
                                </div>
                            </div>

                            {/* Email Us */}
                            <div className="bg-black/40 border border-white/5 p-8 rounded-sm hover:border-gold/30 transition-all duration-300 hover:-translate-y-1 group">
                                <div className="w-12 h-12 bg-black/60 border border-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <Mail className="text-gold" />
                                </div>
                                <h4 className="font-playfair text-lg text-gold mb-3">Email Us</h4>
                                <p className="text-cream/70 text-sm hover:text-gold transition-colors">
                                    <a href="mailto:alsirajjewellery@gmail.com">alsirajjewellery@gmail.com</a>
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 text-center">
                            <a 
                                href="https://wa.me/97126347640" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block"
                            >
                                <Button 
                                    variant="outline" 
                                    size="lg" 
                                    className="flex items-center justify-center gap-3 px-6 md:px-10 group whitespace-nowrap"
                                >
                                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                    Chat on WhatsApp
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

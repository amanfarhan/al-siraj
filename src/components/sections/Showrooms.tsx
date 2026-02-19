"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { MapPin, Clock } from "lucide-react";

const showrooms = [
    {
        name: "Dalma Mall",
        location: "Musaffah, Abu Dhabi",
        hours: "10:00 AM - 10:00 PM",
        image: "https://loremflickr.com/800/600/store,interior,luxury/all"
    },
    {
        name: "Madinat Zayed",
        location: "Opp. Lulu, Abu Dhabi",
        hours: "09:30 AM - 10:30 PM",
        image: "https://loremflickr.com/800/600/jewelry,shop/all"
    },
    {
        name: "World Trade Center",
        location: "Abu Dhabi",
        hours: "10:00 AM - 10:00 PM",
        image: "https://loremflickr.com/800/600/mall,luxury/all"
    },
];

export function Showrooms() {
    return (
        <section id="showrooms" className="py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-gold tracking-[0.2em] text-xs uppercase block mb-3">Visit Us</span>
                    <h2 className="font-playfair text-4xl md:text-5xl text-cream">Our Showrooms</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {showrooms.map((showroom, index) => (
                        <motion.div
                            key={showroom.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group bg-black/20 border border-white/5 hover:border-gold/30 overflow-hidden text-center"
                        >
                            {/* Image */}
                            <div className="h-64 w-full relative overflow-hidden">
                                <Image
                                    src={showroom.image}
                                    alt={showroom.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center">
                                    <MapPin className="text-gold w-8 h-8 drop-shadow-lg" />
                                </div>
                            </div>

                            <div className="p-8 relative">
                                <h3 className="font-playfair text-2xl text-gold mb-2">{showroom.name}</h3>
                                <p className="text-cream/70 text-sm mb-4 flex items-center justify-center gap-2">
                                    <MapPin size={14} /> {showroom.location}
                                </p>
                                <div className="border-t border-white/10 my-4 pt-4 text-xs text-cream/50 tracking-widest flex items-center justify-center gap-2">
                                    <Clock size={12} /> {showroom.hours}
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

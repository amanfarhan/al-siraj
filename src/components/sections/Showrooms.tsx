"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Clock, X, ChevronLeft, ChevronRight } from "lucide-react";

interface Showroom {
    name: string;
    location: string;
    hours: string;
    image: string;
    gallery?: string[];
}

const showrooms: Showroom[] = [
    {
        name: "Dalma Mall",
        location: "Musaffah, Abu Dhabi",
        hours: "10:00 AM - 10:00 PM",
        image: "/images/showroom/dalma/dalma1.jpeg",
        gallery: [
            "/images/showroom/dalma/dalma1.jpeg",
            "/images/showroom/dalma/dalma2.jpeg",
            "/images/showroom/dalma/dalma3.jpeg",
            "/images/showroom/dalma/dalma4.jpeg",
            "/images/showroom/dalma/dalma6.jpeg"
        ]
    },
    {
        name: "Madinat Zayed",
        location: "Opp. Lulu, Abu Dhabi",
        hours: "09:30 AM - 10:30 PM",
        image: "/images/showroom/madina/str1.jpeg",
        gallery: [
            "/images/showroom/madina/str1.jpeg",
            "/images/showroom/madina/madina5.jpeg",
            "/images/showroom/madina/madina4.jpeg",
            "/images/showroom/madina/madina3.jpeg",
            "/images/showroom/madina/madina2.jpeg"
        ]
    },
    {
        name: "World Trade Center",
        location: "Abu Dhabi",
        hours: "10:00 AM - 10:00 PM",
        image: "/images/showroom/Whisk_15033bff455c9599d0d49209daf27d84dr.png",
        gallery: [
            "/images/showroom/Whisk_15033bff455c9599d0d49209daf27d84dr.png",
            "/images/showroom/Whisk_a46d4af6e727cc0a1cd4a7eaf52be76bdr.png",
            "/images/showroom/Whisk_d98462a4cb645ada2284cbedfeacc255dr.png"
        ]
    },
];

export function Showrooms() {
    const [selectedShowroom, setSelectedShowroom] = useState<Showroom | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openGallery = (showroom: Showroom) => {
        if (showroom.gallery && showroom.gallery.length > 0) {
            setSelectedShowroom(showroom);
            setCurrentImageIndex(0);
        }
    };

    const closeGallery = () => {
        setSelectedShowroom(null);
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedShowroom?.gallery) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedShowroom.gallery!.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedShowroom?.gallery) {
            setCurrentImageIndex((prev) => (prev - 1 + selectedShowroom.gallery!.length) % selectedShowroom.gallery!.length);
        }
    };

    return (
        <section id="showrooms" className="py-24 bg-transparent relative">
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
                            onClick={() => openGallery(showroom)}
                            className={`group bg-black/20 border border-white/5 hover:border-gold/30 overflow-hidden text-center ${showroom.gallery ? 'cursor-pointer' : ''}`}
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

            {/* Gallery Modal */}
            <AnimatePresence>
                {selectedShowroom && selectedShowroom.gallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-transparent backdrop-blur-sm"
                        onClick={closeGallery}
                    >
                        <button 
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
                            onClick={closeGallery}
                        >
                            <X size={32} />
                        </button>

                        <div className="relative w-full max-w-5xl h-[80vh] flex items-center justify-center px-4" onClick={(e) => e.stopPropagation()}>
                            {selectedShowroom.gallery.length > 1 && (
                                <button 
                                    className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-2 bg-black/50 hover:bg-black/80 rounded-full z-10"
                                    onClick={prevImage}
                                >
                                    <ChevronLeft size={32} />
                                </button>
                            )}

                            <div className="relative w-full h-full flex items-center justify-center">
                                <motion.div 
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative w-full h-full max-h-[80vh]"
                                >
                                    <Image
                                        src={selectedShowroom.gallery[currentImageIndex]}
                                        alt={`${selectedShowroom.name} gallery image ${currentImageIndex + 1}`}
                                        fill
                                        className="object-contain"
                                    />
                                </motion.div>
                            </div>

                            {selectedShowroom.gallery.length > 1 && (
                                <button 
                                    className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-2 bg-black/50 hover:bg-black/80 rounded-full z-10"
                                    onClick={nextImage}
                                >
                                    <ChevronRight size={32} />
                                </button>
                            )}
                            
                            {/* Indicators */}
                            {selectedShowroom.gallery.length > 1 && (
                                <div className="absolute bottom-[-40px] left-0 right-0 flex justify-center gap-2 items-center">
                                    {selectedShowroom.gallery.map((_, idx) => (
                                        <div 
                                            key={idx} 
                                            className={`rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'w-3 h-3 bg-gold' : 'w-2 h-2 bg-white/30 cursor-pointer hover:bg-white/50'}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentImageIndex(idx);
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

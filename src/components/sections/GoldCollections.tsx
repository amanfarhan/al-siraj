"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const collections = [
    {
        title: "24KT Pure Gold",
        description: "Experience the unmatched purity and radiance of our finest 24 Karat gold collection.",
        image: "/images/24kt.png"
    },
    {
        title: "22KT Traditional",
        description: "Timeless designs that celebrate heritage and culture, crafted in classic 22 Karat gold.",
        image: "/images/22kt.png"
    },
    {
        title: "18KT Contemporary",
        description: "Modern elegance meets everyday luxury in our sophisticated 18 Karat gold selection.",
        image: "/images/18kt.png"
    }
];

export function GoldCollections() {
    return (
        <section id="collections" className="py-24 bg-transparent relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-gold tracking-[0.3em] text-xs uppercase block mb-3">Our Masterpieces</span>
                    <h2 className="font-playfair text-4xl md:text-5xl text-cream mb-6">Signature Gold Collections</h2>
                    <p className="text-cream/70 max-w-xl mx-auto leading-relaxed">
                        Discover our exclusive range of gold jewellery, meticulously crafted to perfection.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {collections.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="group relative bg-black/20 backdrop-blur-sm border border-white/5 p-8 text-center hover:border-gold/30 transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                {/* Jewellery Image */}
                                <div className="w-full h-64 relative mb-8 flex items-center justify-center border border-white/5 group-hover:border-gold/20 transition-colors overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <h3 className="font-playfair text-2xl text-gold mb-3 lining-nums">{item.title}</h3>
                                <p className="text-sm text-cream/70 leading-relaxed mb-8 min-h-[60px]">
                                    {item.description}
                                </p>

                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="w-full border-white/10 group-hover:border-gold group-hover:bg-gold group-hover:text-velvet"
                                    onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    View Collection
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = [
    { name: "Bridal Sets", col: "md:col-span-2", image: "https://loremflickr.com/800/600/bridal,jewelry,gold/all" },
    { name: "Necklaces", col: "md:col-span-1", image: "https://loremflickr.com/800/600/necklace,gold/all" },
    { name: "Earrings", col: "md:col-span-1", image: "https://loremflickr.com/800/600/earrings,gold/all" },
    { name: "Bangles & Bracelets", col: "md:col-span-2", image: "https://loremflickr.com/800/600/bangles,gold/all" },
    { name: "Rings", col: "md:col-span-1", image: "https://loremflickr.com/800/600/ring,diamond,gold/all" },
    { name: "Men's Jewellery", col: "md:col-span-1", image: "https://loremflickr.com/800/600/mens,jewelry/all" },
    { name: "Children's Collection", col: "md:col-span-1", image: "https://loremflickr.com/800/600/child,jewelry/all" },
    { name: "Custom Designs", col: "md:col-span-3", image: "https://loremflickr.com/800/600/jewelry,design/all" },
];

export function ProductCategories() {
    return (
        <section className="py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-gold tracking-[0.2em] text-xs uppercase block mb-3">Our Collections</span>
                    <h2 className="font-playfair text-4xl md:text-5xl text-cream">Exquisite Categories</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group overflow-hidden border border-white/5 hover:border-gold/30 transition-colors ${cat.col}`}
                        >
                            <div className="absolute inset-0">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="font-playfair text-2xl text-cream mb-2">{cat.name}</h3>
                                <Link href="#" className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    Explore <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const categories = [
    { name: "Bridal Sets", col: "md:col-span-2", image: "/images/Our-Collections/Bridal-Sets.png" },
    { name: "Necklaces", col: "md:col-span-1", image: "/images/Our-Collections/Necklaces.png" },
    { name: "Earrings", col: "md:col-span-1", image: "/images/Our-Collections/Earrings.png" },
    { name: "Bangles & Bracelets", col: "md:col-span-2", image: "/images/Our-Collections/Bangles.png" },
    { name: "Rings", col: "md:col-span-1", image: "/images/Our-Collections/Rings.png" },
    { name: "Men's Jewellery", col: "md:col-span-1", image: "/images/Our-Collections/Men's.png" },
    { name: "Children's Collection", col: "md:col-span-1", image: "/images/Our-Collections/Children's.png" },
    { name: "Custom Designs", col: "md:col-span-3", image: "/images/Our-Collections/Custom.png" },
];

function CategoryCard({ cat, index }: { cat: typeof categories[0]; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

    const whatsappMessage = `Hello, I would like to enquire about the ${cat.name} collection. Please share the details and available designs.`;
    const whatsappLink = `https://wa.me/97126347640?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative group overflow-hidden border border-white/5 hover:border-gold/30 transition-colors ${cat.col}`}
        >
            {/* Image — pops/scales when scrolled into view on mobile, hover on desktop */}
            <div className="absolute inset-0">
                <motion.div
                    className="w-full h-full"
                    animate={isInView ? { scale: 1.08 } : { scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                >
                    <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-cover md:transition-transform md:duration-700 md:group-hover:scale-110"
                    />
                </motion.div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content panel */}
            <div className="absolute bottom-0 left-0 w-full p-8 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-playfair text-2xl text-cream mb-2">{cat.name}</h3>

                {/* Enquire Now — pops up on scroll (mobile) / hover (desktop) */}
                <div className="mt-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:delay-100">
                    <Link
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-widest"
                    >
                        Enquire Now <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

export function ProductCategories() {
    return (
        <section id="categories" className="py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-gold tracking-[0.2em] text-xs uppercase block mb-3">Our Collections</span>
                    <h2 className="font-playfair text-4xl md:text-5xl text-cream">Exquisite Categories</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {categories.map((cat, index) => (
                        <CategoryCard key={cat.name} cat={cat} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

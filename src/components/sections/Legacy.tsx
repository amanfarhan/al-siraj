"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Legacy() {
    return (
        <section id="about" className="py-24 bg-transparent relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-gold tracking-[0.2em] text-xs uppercase block mb-3">Since 1999</span>
                        <h2 className="font-playfair text-4xl md:text-5xl text-cream mb-8">Our Legacy of Excellence</h2>

                        <div className="space-y-6 text-cream/80 leading-loose font-light">
                            <p>
                                Established in the heart of Abu Dhabi, <strong>Al Siraj Jewellery</strong> began with a vision to bring the finest gold craftsmanship to the discerning clientele of the UAE.
                            </p>
                            <p>
                                Founded by our visionary CEO, <span className="text-gold">Eruvathu Kizhakkethody Srajutty</span>, the brand was built on the pillars of trust, integrity, and uncompromising quality.
                            </p>
                            <p>
                                For over two decades, we have been more than just a jewellery retailer; we have been a part of your celebrations, milestones, and family traditions.
                            </p>
                        </div>

                        <div className="mt-10 border-l-2 border-gold pl-6">
                            <p className="font-playfair italic text-xl text-gold/80">
                                &quot;Jewellery is not just an ornament; it is an emotion, a legacy passed down through generations.&quot;
                            </p>
                        </div>
                    </motion.div>

                    {/* Image/Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative max-w-md mx-auto w-full md:ml-auto"
                    >
                        <div className="aspect-[4/5] bg-[#3a0a13] border border-gold/10 relative overflow-hidden group rounded-sm shadow-xl">
                            {/* Founder Image */}
                            <Image 
                                src="/images/ceo.png" 
                                alt="Eruvathu Kizhakkethody Srajutty - Founder & CEO" 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2a070e] via-[#2a070e]/40 to-transparent opacity-80 z-0">
                                {/* Gradient for text readability */}
                            </div>
                            
                            <div className="absolute inset-0 flex items-center justify-center text-gold/10 font-playfair text-8xl opacity-30 pointer-events-none z-0">
                                1999
                            </div>
                            
                            <div className="absolute bottom-8 left-8 right-8 text-center border-t border-gold/40 pt-4 z-10 backdrop-blur-sm bg-black/20 md:backdrop-blur-none md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none">
                                <span className="text-gold uppercase tracking-widest text-xs drop-shadow-md">Eruvathu Kizhakkethody Srajutty</span>
                                <span className="text-cream/90 text-[10px] block mt-1 drop-shadow-md">Founder & CEO</span>
                            </div>
                        </div>

                        {/* Gold Frame Effect */}
                        <div className="absolute -inset-4 border border-gold/20 -z-10" />
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

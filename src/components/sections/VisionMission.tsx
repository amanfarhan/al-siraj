"use client";

import { motion } from "framer-motion";

export function VisionMission() {
    return (
        <section className="py-24 bg-transparent text-cream relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row relative">

                    {/* Divider Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/40 to-transparent transfrom -translate-x-1/2" />

                    {/* Vision */}
                    <motion.div
                        className="md:w-1/2 md:pr-16 text-right flex flex-col items-center md:items-end mb-16 md:mb-0"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="font-playfair text-3xl text-gold mb-6 relative inline-block">
                            Our Vision
                            <span className="absolute -bottom-2 right-0 w-12 h-[2px] bg-gold" />
                        </h3>
                        <p className="text-lg leading-relaxed font-light italic opacity-90 max-w-sm">
                            &quot;To become a globally recognized jewellery retail brand that represents the pinnacle of luxury, heritage, and trust.&quot;
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        className="md:w-1/2 md:pl-16 flex flex-col items-center md:items-start"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="font-playfair text-3xl text-gold mb-6 relative inline-block">
                            Our Mission
                            <span className="absolute -bottom-2 left-0 w-12 h-[2px] bg-gold" />
                        </h3>
                        <ul className="space-y-6 text-left">
                            {[
                                "Unmatched Product Quality (18KT - 24KT)",
                                "Exceptional Value & Integrity",
                                "Customer-Centric Service",
                                "Continuous Innovation in Design"
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="flex items-center gap-4 text-cream/80"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

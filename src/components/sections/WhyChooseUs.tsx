"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CircleDollarSign, Gem, Headphones, CreditCard, PenTool } from "lucide-react";

const reasons = [
    { icon: ShieldCheck, title: "Certified Quality", desc: "100% Hallmarked Jewellery" },
    { icon: CircleDollarSign, title: "Transparent Pricing", desc: "Fair and honest gold rates" },
    { icon: Gem, title: "Expert Guidance", desc: "25+ Years of Experience" },
    { icon: Headphones, title: "After-Sales Service", desc: "Lifetime maintenance support" },
    { icon: CreditCard, title: "Flexible Payment", desc: "Easy installment plans available" },
    { icon: PenTool, title: "Custom Design", desc: "Bring your dream jewellery to life" },
];

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-transparent relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-gold tracking-[0.2em] text-xs uppercase block mb-3">The Al Siraj Promise</span>
                    <h2 className="font-playfair text-4xl md:text-5xl text-cream">Why Choose Us</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 border border-white/5 bg-white/5 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 rounded-sm text-center"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                                <item.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-playfair text-xl text-gold mb-3">{item.title}</h3>
                            <p className="text-cream/70 text-sm font-light tracking-wide">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

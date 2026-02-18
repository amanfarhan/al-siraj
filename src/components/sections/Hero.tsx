"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroImageSlider } from "@/components/ui/HeroImageSlider";

export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent py-20 lg:py-0">
            {/* Floating Elements (Subtle Gold Dust) */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-[100px]"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, 20, 0],
                    y: [0, -20, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="container relative z-10 px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Column: Text Content */}
                    <motion.div
                        className="text-center lg:text-left order-2 lg:order-1"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    >
                        <span className="text-gold tracking-[0.5em] text-xs md:text-sm uppercase mb-4 block drop-shadow-md">
                            Since 1999
                        </span>
                        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-cream mb-6 leading-tight drop-shadow-2xl">
                            Al Siraj <span className="text-gold block mt-2 drop-shadow-lg">Jewellery</span>
                        </h1>
                        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto lg:mx-0 mb-8 shadow-[0_0_10px_#D4AF37]" />
                        <p className="font-montserrat text-cream/90 text-sm md:text-base max-w-2xl mx-auto lg:mx-0 leading-loose tracking-wide mb-10 drop-shadow-md font-light">
                            Where Tradition Meets Timeless Elegance. For over two decades, Al Siraj Jewellery has been Abu Dhabi’s trusted destination for exquisite gold craftsmanship.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                            <Button variant="primary" size="lg" className="shadow-[0_4px_20px_rgba(212,175,55,0.3)]">
                                Explore Our Legacy
                            </Button>
                            <Button variant="outline" size="lg" className="backdrop-blur-sm bg-black/20 border-white/20">
                                View Collections
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Image Slider */}
                    <motion.div
                        className="relative flex justify-center lg:justify-end order-1 lg:order-2"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                    >
                        {/* Enlarged Container for "Perfect Fit" */}
                        <div className="w-full max-w-full lg:max-w-4xl xl:max-w-5xl relative">
                            <HeroImageSlider />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/50 flex flex-col items-center gap-2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-[10px] uppercase tracking-widest drop-shadow-sm">Scroll</span>
                <motion.div
                    className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent shadow-[0_0_5px_#D4AF37]"
                    animate={{ height: [0, 48, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </section>
    );
}

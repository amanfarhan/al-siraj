"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroImageSlider } from "@/components/ui/HeroImageSlider";

export function Hero() {
    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-transparent pt-16 lg:py-0">
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

            <div className="container mx-auto relative z-10 px-6 w-full">
                <h1 className="sr-only">Luxury Gold Jewellery in Abu Dhabi</h1>

                {/* ── MOBILE LAYOUT (hidden on lg+) ── */}
                <div className="flex flex-col items-center lg:hidden">
                    {/* 1. Heading */}
                    <motion.div
                        className="text-center w-full mb-2 sm:mb-6"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
                    >
                        <div className="text-gold tracking-[0.2em] sm:tracking-[0.3em] font-medium text-[10px] sm:text-xs uppercase mb-2 sm:mb-3 block drop-shadow-md">
                            Premium Gold & Diamond Jewellery Abu Dhabi
                        </div>
                        <div className="font-playfair text-6xl sm:text-7xl md:text-7xl text-cream mb-0 leading-tight drop-shadow-2xl">
                            Al Siraj <span className="text-gold block mt-1 drop-shadow-lg">Jewellery</span>
                        </div>
                    </motion.div>

                    {/* 2. Image Slider */}
                    <motion.div
                        className="w-full"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    >
                        <HeroImageSlider />
                    </motion.div>

                    {/* 3. Description & Buttons */}
                    <motion.div
                        className="text-center w-full mt-4 sm:mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    >
                        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4 sm:mb-5 shadow-[0_0_10px_#D4AF37]" />
                        <p className="font-montserrat text-cream/90 text-xs sm:text-sm max-w-[300px] sm:max-w-md mx-auto leading-relaxed tracking-wide mb-6 sm:mb-8 drop-shadow-md font-light">
                            Where Tradition Meets Timeless Elegance. For over two decades, Al Siraj Jewellery has been Abu Dhabi&apos;s trusted destination for exquisite gold craftsmanship.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
                            <Button
                                variant="primary"
                                size="lg"
                                className="shadow-[0_4px_20px_rgba(212,175,55,0.3)] w-full sm:w-auto"
                                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Our Legacy
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="backdrop-blur-sm bg-black/20 border-white/20 w-full sm:w-auto"
                                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Collections
                            </Button>
                        </div>
                    </motion.div>
                </div>

                {/* ── DESKTOP LAYOUT (hidden below lg) ── */}
                <div className="hidden lg:grid grid-cols-2 gap-16 items-center">
                    {/* Left Column: Full Text */}
                    <motion.div
                        className="text-left pl-20"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="text-gold tracking-[0.3em] font-medium text-sm uppercase mb-4 block drop-shadow-md">
                            Premium Gold & Diamond Jewellery Abu Dhabi
                        </div>
                        <div className="font-playfair text-7xl xl:text-8xl text-cream mb-6 leading-tight drop-shadow-2xl">
                            Al Siraj <span className="text-gold block mt-2 drop-shadow-lg">Jewellery</span>
                        </div>
                        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent mb-8 shadow-[0_0_10px_#D4AF37]" />
                        <p className="font-montserrat text-cream/90 text-base max-w-2xl leading-loose tracking-wide mb-10 drop-shadow-md font-light">
                            Where Tradition Meets Timeless Elegance. For over two decades, Al Siraj Jewellery has been Abu Dhabi&apos;s trusted destination for exquisite gold craftsmanship.
                        </p>
                        <div className="flex items-center justify-start gap-6">
                            <Button
                                variant="primary"
                                size="lg"
                                className="shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Our Legacy
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="backdrop-blur-sm bg-black/20 border-white/20"
                                onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Collections
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Image Slider */}
                    <motion.div
                        className="relative flex justify-end"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                    >
                        <div className="w-full max-w-4xl xl:max-w-5xl relative">
                            <HeroImageSlider />
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/50 flex-col items-center gap-2 z-10"
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

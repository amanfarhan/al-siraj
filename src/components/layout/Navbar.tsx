"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "#collections" },
    { name: "About", href: "#about" },
    { name: "Showrooms", href: "#showrooms" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent",
                scrolled ? "bg-black/60 backdrop-blur-md border-white/5 py-3 shadow-xl" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="font-playfair text-2xl md:text-3xl text-gold tracking-widest uppercase flex flex-col items-center md:items-start group">
                    <span>Al Siraj</span>
                    <span className="text-[10px] md:text-xs tracking-[0.6em] text-cream group-hover:text-gold transition-colors -mt-1 block">Jewellery</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-xs uppercase tracking-[0.2em] text-cream hover:text-gold transition-colors group py-2"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#D4AF37]" />
                        </Link>
                    ))}
                    <Button variant="outline" size="sm" className="ml-4">
                        Enquire Now
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gold hover:text-cream transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full bg-velvet border-b border-gold/20 overflow-hidden md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col space-y-4 p-8 items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm text-cream hover:text-gold uppercase tracking-[0.25em] py-2 w-full text-center border-b border-white/5 last:border-0"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Button variant="primary" size="sm" onClick={() => setIsOpen(false)}>
                                    Enquire Now
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

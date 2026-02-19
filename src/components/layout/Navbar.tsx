"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collections", href: "#collections" },
    { name: "About", href: "#about" },
    { name: "Showrooms", href: "#showrooms" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="absolute top-0 left-0 w-full z-50 border-b border-transparent flex items-center bg-transparent py-4">
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="block relative h-12 md:h-16 w-auto transition-transform hover:scale-105 flex items-center">
                    <Image
                        src="/images/Al_Siraj_Logo_v3.png"
                        alt="Al Siraj Jewellery"
                        width={160}
                        height={64}
                        className="object-contain w-auto h-full"
                        priority
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative text-sm uppercase tracking-[0.2em] text-cream hover:text-gold transition-colors group py-3"
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-1 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full shadow-[0_0_10px_#D4AF37]" />
                        </Link>
                    ))}

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

                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

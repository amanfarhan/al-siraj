"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center rounded-sm font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

        const variants = {
            primary: "bg-gold text-velvet hover:bg-cream hover:text-velvet hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] border border-gold",
            outline: "bg-transparent border border-gold text-gold hover:bg-gold hover:text-velvet transition-colors duration-300",
            ghost: "bg-transparent text-gold hover:text-cream hover:bg-white/5",
        };

        const sizes = {
            sm: "h-9 px-4 text-xs tracking-wider",
            md: "h-11 px-8 text-sm tracking-[0.2em] uppercase",
            lg: "h-14 px-10 text-base tracking-[0.25em] uppercase",
        };

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };

"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

const IMAGES = ["/images/image1.png", "/images/image2.png", "/images/image3.png"];
const ROTATION_INTERVAL = 5000;

export function HeroImageSlider() {
    // 3 images = 120 degrees apart
    // continuous rotation
    // "No image distortion or scaling inconsistency" -> strict width/height
    // "Equal spacing" -> 120 deg
    // "Rotation pivot is exactly at the center" -> transform-origin centered

    const ROTATION_DURATION = 25; // 25 seconds for a full elegant spin

    // Calculate translateZ. 
    // For an equilateral triangle of items (3 items), 
    // r = (width / 2) / tan(180/n) 
    // n=3, tan(60) ≈ 1.732.
    // If item width is ~300px, r ≈ 150 / 1.732 ≈ 86px (too small for 3 items to not overlap heavily if they are wide)
    // Actually we want them spaced out. Let's use a larger radius.
    const TRANSLATE_Z = 400; // Adjusted for visual balance

    return (
        <div className="relative w-full h-[60vh] lg:h-[80vh] flex items-center justify-center perspective-[1200px] overflow-visible">
            {/* 
                Rotating Container 
                - transform-style: preserve-3d is CRITICAL
            */}
            <motion.div
                className="relative w-full h-full flex items-center justify-center"
                style={{ transformStyle: "preserve-3d" }}
                animate={{ rotateY: [0, 360] }}
                transition={{
                    duration: ROTATION_DURATION,
                    repeat: Infinity,
                    ease: "linear" // "smooth natural... not jerky"
                }}
            >
                {IMAGES.map((src, index) => {
                    const rotation = index * 120; // 0, 120, 240 degrees

                    return (
                        <div
                            key={index}
                            className="absolute inset-0 flex items-center justify-center backface-visible"
                            style={{
                                transform: `rotateY(${rotation}deg) translateZ(${TRANSLATE_Z}px)`,
                                transformStyle: "preserve-3d", // Ensure children (like shadow) move correctly if needed
                            }}
                        >
                            {/* Container for Image + Shadow/Reflection */}
                            <div className="relative w-[300px] md:w-[400px] aspect-square flex flex-col items-center justify-center transition-transform hover:scale-110 duration-500">
                                <img
                                    src={src}
                                    alt={`Jewellery Display ${index + 1}`}
                                    className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]"
                                    draggable={false}
                                />

                                {/* Simple Reflection/Shadow */}
                                <div className="absolute -bottom-8 w-3/4 h-4 bg-black/30 blur-xl rounded-[100%]" />
                            </div>
                        </div>
                    );
                })}
            </motion.div>

            {/* Global Subtle glow fixed behind the ring */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent_70%)] pointer-events-none -z-10" />
        </div>
    );
}

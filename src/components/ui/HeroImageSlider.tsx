"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const IMAGES = ["/images/image1.png", "/images/image2.png", "/images/image3.png"];
const ROTATION_INTERVAL = 4000;

export function HeroImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, ROTATION_INTERVAL);

        return () => clearInterval(timer);
    }, []);

    // 3 items distributed on a circle
    const theta = 360 / IMAGES.length; // 120 degrees
    const radius = 350; // Distance from center

    return (
        <div className="relative w-full h-[60vh] lg:h-[80vh] flex items-center justify-center perspective-[2000px] overflow-visible">
            {/* 3D Orbiting Container */}
            <motion.div
                className="relative flex items-center justify-center transform-style-3d"
                style={{
                    transformStyle: "preserve-3d",
                    width: "100%",
                    height: "100%",
                }}
                animate={{
                    rotateY: currentIndex * -theta,
                }}
                transition={{
                    duration: 1.5,
                    ease: [0.25, 0.1, 0.25, 1.0], // Luxurious cubic-bezier
                }}
            >
                {IMAGES.map((src, index) => {
                    const itemRotation = index * theta;

                    // Calculate if this item is currently the "front" one
                    // We need to normalize the currentIndex to 0-2 range to compare, OR
                    // simpler: check if the net rotation makes it face 0deg.
                    // Net Angle = itemRotation + (currentIndex * -theta)
                    // We want Net Angle % 360 === 0 for FRONT.

                    // Actually, let's use a simpler derived state for styling:
                    const relativeIndex = (index - (currentIndex % IMAGES.length) + IMAGES.length) % IMAGES.length;
                    const isFront = relativeIndex === 0;

                    return (
                        <motion.div
                            key={index}
                            className="absolute flex flex-col items-center justify-center"
                            style={{
                                transformStyle: "preserve-3d",
                                // Place item on the circle
                                transform: `rotateY(${itemRotation}deg) translateZ(${radius}px)`,
                            }}
                        >
                            {/* 
                                Counter-rotate to face viewer (Billboarding)
                                We animate this counter-rotation to match the container's rotation.
                                Formula: - (itemRotation + containerRotation)
                                containerRotation = currentIndex * -theta
                                So: -(itemRotation - currentIndex * theta) = (currentIndex * theta) - itemRotation
                            */}
                            <motion.div
                                className="relative flex flex-col items-center justify-center"
                                animate={{
                                    rotateY: (currentIndex * theta) - itemRotation,
                                    scale: isFront ? 1 : 0.85,
                                    opacity: isFront ? 1 : 0.6,
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: [0.25, 0.1, 0.25, 1.0],
                                }}
                            >
                                <motion.div
                                    className="relative w-[300px] md:w-[450px] aspect-square flex flex-col items-center justify-center cursor-pointer"
                                    whileHover={{ scale: isFront ? 1.05 : 0.85 }} // Only slight hover if front
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <img
                                        src={src}
                                        alt={`Jewellery Display ${index + 1}`}
                                        className="w-full h-full object-contain"
                                        draggable={false}
                                    />

                                    {/* Dynamic Reflection/Shadow */}
                                    {/* Enhanced shadow for depth perception */}
                                    <div className="absolute -bottom-10 w-2/3 h-6 bg-black/40 blur-2xl rounded-[100%]" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>


        </div>
    );
}

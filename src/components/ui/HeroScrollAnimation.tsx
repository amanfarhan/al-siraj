"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 240;
const IMAGES_PATH = "/images/hero-sequence/ezgif-frame-";

interface HeroScrollAnimationProps {
    sectionRef: React.RefObject<HTMLElement | null>;
}

export function HeroScrollAnimation({ sectionRef }: HeroScrollAnimationProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Map scroll progress (0 to 1) to frame index (0 to 239)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Preload Images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            // Pad current frame number with leading zeros (001, 002, ... 240)
            const paddedIndex = i.toString().padStart(3, "0");
            img.src = `${IMAGES_PATH}${paddedIndex}.jpg`;

            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setIsLoaded(true);
                }
            };
            imgArray.push(img);
        }
        setImages(imgArray);
    }, []);

    // Draw frame on canvas
    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        const img = images[index];

        if (canvas && ctx && img) {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw image - "contain" logic
            const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
    };

    // React to scroll changes and draw
    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (isLoaded) {
            const index = Math.min(Math.floor(latest), FRAME_COUNT - 1);
            requestAnimationFrame(() => renderFrame(index));
        }
    });

    // Initial draw once loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoaded]);

    return (
        <div className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center">
            {/* Loading State */}
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center text-gold/50 font-playfair animate-pulse">
                    Loading Luxury Experience...
                </div>
            )}

            <canvas
                ref={canvasRef}
                width={1080} // Set internal resolution high
                height={1080}
                className={`w-full h-full object-contain transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
            />

            {/* Premium decorative elements around the frame */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none" />
        </div>
    );
}

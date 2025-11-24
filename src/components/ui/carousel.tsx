"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselProps {
    images: string[];
    aspectRatio?: "video" | "square";
}

export function Carousel({ images, aspectRatio = "video" }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [direction, setDirection] = React.useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        }),
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = images.length - 1;
            if (nextIndex >= images.length) nextIndex = 0;
            return nextIndex;
        });
    };

    return (
        <div className={cn(
            "relative w-full overflow-hidden rounded-xl bg-muted",
            aspectRatio === "video" ? "aspect-video" : "aspect-square"
        )}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="absolute h-full w-full"
                >
                    <Image
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        fill
                        className="object-cover"
                        priority={currentIndex === 0}
                    />
                </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none z-10">

                <button
                    className="p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-sm hover:bg-background transition-colors pointer-events-auto"
                    onClick={() => paginate(-1)}
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    className="p-2 rounded-full bg-background/80 backdrop-blur-sm shadow-sm hover:bg-background transition-colors pointer-events-auto"
                    onClick={() => paginate(1)}
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">

                {images.map((_, index) => (
                    <button
                        key={index}
                        className={cn(
                            "w-2 h-2 rounded-full transition-all",
                            index === currentIndex
                                ? "bg-primary w-4"
                                : "bg-primary/30 hover:bg-primary/50"
                        )}
                        onClick={() => {
                            setDirection(index > currentIndex ? 1 : -1);
                            setCurrentIndex(index);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

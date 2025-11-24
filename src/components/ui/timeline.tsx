"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface TimelineItemProps {
    year: string;
    title: string;
    company: string;
    description: string;
    logo?: string;
    isLast?: boolean;
}

function TimelineItem({ year, title, company, description, logo, isLast }: TimelineItemProps) {
    return (
        <div className="relative pl-16 pb-12 last:pb-0">
            {/* Line */}
            {!isLast && (
                <div className="absolute left-[26px] top-[50px] bottom-0 w-[2px] bg-border" />
            )}

            {/* Logo */}
            <div className="absolute left-0 top-0 h-14 w-14 rounded-full border-2 border-border bg-background overflow-hidden">
                <Image
                    src={logo || "/company-placeholder.png"}
                    alt={company}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col gap-1 pt-1">
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <span className="text-sm font-medium text-foreground">{company}</span>
                    <span className="hidden sm:inline text-muted-foreground">•</span>
                    <span className="text-sm text-muted-foreground">{year}</span>
                </div>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

export function Timeline({ items }: { items: Omit<TimelineItemProps, "isLast">[] }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const displayedItems = isExpanded ? items : items.slice(0, 3);

    return (
        <div className="flex flex-col">
            <div className="flex flex-col">
                {displayedItems.map((item, index) => (
                    <TimelineItem
                        key={index}
                        {...item}
                        isLast={index === displayedItems.length - 1}
                    />
                ))}
            </div>

            {items.length > 3 && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-8 flex items-center justify-center gap-2 text-sm font-medium text-primary hover:underline focus:outline-none"
                >
                    {isExpanded ? (
                        <>
                            Show Less <ChevronUp className="h-4 w-4" />
                        </>
                    ) : (
                        <>
                            See {items.length - 3} more experiences <ChevronDown className="h-4 w-4" />
                        </>
                    )}
                </button>
            )}
        </div>
    );
}


"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
    const { setTheme, theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className={cn(
                    "inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring opacity-50 cursor-not-allowed",
                    className
                )}
                disabled
            >
                <Sun className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle theme</span>
            </button>
        );
    }

    return (
        <button
            className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                className
            )}
            onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}

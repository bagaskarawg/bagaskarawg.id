"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Portfolio", href: "/portfolio" },
];

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-primary">BWG</span>
                            <span className="hidden sm:inline-block text-xl font-bold text-foreground">/ Bagaskara</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === item.href
                                        ? "text-foreground"
                                        : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <ThemeToggle />
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-4 md:hidden">
                        <ThemeToggle />
                        <button
                            className="p-2 text-muted-foreground hover:text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-border/40 bg-background"
                    >
                        <Container className="py-4">
                            <nav className="flex flex-col gap-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={cn(
                                            "text-sm font-medium transition-colors hover:text-primary",
                                            pathname === item.href
                                                ? "text-foreground"
                                                : "text-muted-foreground"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </nav>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/systems", label: "Systems" },
    { href: "/frontend", label: "Frontend" },
    { href: "/notes", label: "Notes" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
];

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="border-b border-white/10">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                <span className="font-mono text-sm">abhishekvisen.dev</span>

                {/* Desktop Navigation */}
                <div className="hidden md:flex gap-6 text-sm">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-sky-400 transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 -mr-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <XMarkIcon className="w-6 h-6" />
                    ) : (
                        <Bars3Icon className="w-6 h-6" />
                    )}
                </button>
            </nav>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-white/10 bg-[#0B0F14]">
                    <div className="px-4 py-4 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block py-3 px-4 text-base hover:text-sky-400 hover:bg-white/5 rounded-lg transition-colors min-h-[44px] flex items-center"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};
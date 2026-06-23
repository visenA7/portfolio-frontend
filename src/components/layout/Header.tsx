import { useState } from "react";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/systems", label: "Systems" },
    { href: "/frontend", label: "Frontend" },
    { href: "/notes", label: "Notes" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
];

interface HeaderProps {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export const Header = ({ theme, toggleTheme }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="border-b border-border-custom bg-background transition-colors duration-300">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
                <a href="/" className="font-mono text-sm font-bold text-text-heading hover:text-sky-500 transition-colors">
                    abhishekvisen.dev
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6 text-sm">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-text-muted hover:text-sky-500 transition-colors font-medium"
                        >
                            {link.label}
                        </a>
                    ))}
                    
                    {/* Theme Toggle Button Desktop */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 ml-2 rounded-lg bg-card border border-border-custom text-text-muted hover:text-sky-500 transition-all shadow-sm hover:scale-105 min-h-[38px] min-w-[38px] flex items-center justify-center cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        {theme === "light" ? (
                            <MoonIcon className="w-5 h-5" />
                        ) : (
                            <SunIcon className="w-5 h-5 text-yellow-400" />
                        )}
                    </button>
                </div>

                {/* Mobile Icons Group */}
                <div className="flex items-center gap-2 md:hidden">
                    {/* Theme Toggle Button Mobile */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-card border border-border-custom text-text-muted hover:text-sky-500 transition-all shadow-sm min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
                        aria-label="Toggle theme"
                    >
                        {theme === "light" ? (
                            <MoonIcon className="w-5 h-5" />
                        ) : (
                            <SunIcon className="w-5 h-5 text-yellow-400" />
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 min-h-[40px] min-w-[40px] flex items-center justify-center text-text-muted hover:text-sky-500 transition-colors cursor-pointer"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <XMarkIcon className="w-6 h-6" />
                        ) : (
                            <Bars3Icon className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-border-custom bg-background transition-colors duration-300">
                    <div className="px-4 py-4 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block py-3 px-4 text-base font-medium text-text-muted hover:text-sky-500 hover:bg-card-hover rounded-lg transition-colors min-h-[44px] flex items-center"
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
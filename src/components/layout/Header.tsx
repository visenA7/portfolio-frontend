import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/systems", label: "Systems Architecture" },
    { href: "/frontend", label: "Frontend" },
    { href: "/projects", label: "Projects" },
    { href: "/notes", label: "Engineering Notes" },
    { href: "/resume", label: "Resume" },
];

interface HeaderProps {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export const Header = ({ theme, toggleTheme }: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-border-custom bg-background/90 backdrop-blur-md transition-colors duration-200">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex justify-between items-center" aria-label="Main navigation">
                {/* Brand / Logo */}
                <Link 
                    to="/" 
                    className="flex items-center gap-2.5 font-mono text-sm font-bold text-text-heading hover:opacity-80 transition-opacity group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1 py-0.5"
                >
                    <span className="relative flex h-2 w-2" title="Available for opportunities">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    <span className="tracking-tight font-heading text-base text-text-heading">
                        abhishekvisen<span className="text-accent">.dev</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1.5 text-sm font-medium">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.href}
                            to={link.href}
                            end={link.href === "/"}
                            className={({ isActive }) =>
                                `px-3.5 py-1.5 rounded-lg transition-all duration-150 cursor-pointer text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                                    isActive
                                        ? "bg-badge text-badge-text font-semibold border border-badge-border shadow-xs"
                                        : "text-text-muted hover:text-text-heading hover:bg-card-hover"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}

                    <div className="h-4 w-[1px] bg-border-custom mx-1.5" />

                    {/* Quick Contact Link */}
                    <a
                        href="mailto:abhishekvisen7@gmail.com"
                        className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-text-muted hover:text-accent hover:bg-card-hover transition-colors flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none cursor-pointer"
                    >
                        <span>Contact</span>
                        <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" aria-hidden="true" />
                    </a>

                    {/* Theme Toggle Button Desktop */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 ml-1 rounded-lg bg-card border border-border-custom text-text-muted hover:text-accent hover:border-card-hover-border transition-all shadow-xs min-h-[38px] min-w-[38px] flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                    >
                        {theme === "light" ? (
                            <MoonIcon className="w-4 h-4" aria-hidden="true" />
                        ) : (
                            <SunIcon className="w-4 h-4 text-accent" aria-hidden="true" />
                        )}
                    </button>
                </div>

                {/* Mobile Icons Group */}
                <div className="flex items-center gap-2 md:hidden">
                    {/* Theme Toggle Button Mobile */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg bg-card border border-border-custom text-text-muted hover:text-accent transition-all shadow-xs min-h-[44px] min-w-[44px] flex items-center justify-center cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                    >
                        {theme === "light" ? (
                            <MoonIcon className="w-5 h-5" aria-hidden="true" />
                        ) : (
                            <SunIcon className="w-5 h-5 text-accent" aria-hidden="true" />
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 min-h-[44px] min-w-[44px] rounded-lg border border-border-custom bg-card flex items-center justify-center text-text-muted hover:text-accent transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                        ) : (
                            <Bars3Icon className="w-6 h-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-border-custom bg-background/95 backdrop-blur-lg transition-all duration-200">
                    <div className="px-4 py-4 space-y-1.5">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.href}
                                to={link.href}
                                end={link.href === "/"}
                                className={({ isActive }) =>
                                    `block py-2.5 px-4 text-base font-medium rounded-lg transition-colors min-h-[44px] flex items-center cursor-pointer ${
                                        isActive
                                            ? "bg-badge text-badge-text font-semibold border border-badge-border"
                                            : "text-text-muted hover:text-accent hover:bg-card-hover"
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        ))}

                        <div className="pt-2 border-t border-border-custom mt-2">
                            <a
                                href="mailto:abhishekvisen7@gmail.com"
                                className="block py-2.5 px-4 text-sm font-mono text-text-heading hover:bg-card-hover rounded-lg min-h-[44px] flex items-center gap-2 cursor-pointer"
                                onClick={() => setIsOpen(false)}
                            >
                                <span>abhishekvisen7@gmail.com</span>
                                <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

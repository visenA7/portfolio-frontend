import { resumeData } from "../../data/resume";
import { EnvelopeIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

export const Footer = () => {
    const { basics } = resumeData;
    return (
        <footer className="border-t border-border-custom mt-16 md:mt-28 bg-card/60 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Left: Identity & Status */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
                        <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>System Operational</span>
                        </div>
                        <span className="text-sm text-text-muted">
                            © {new Date().getFullYear()} <span className="font-semibold text-text-heading">{basics.name}</span> · {basics.title}
                        </span>
                    </div>

                    {/* Right: Connect Links */}
                    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm font-medium">
                        <a
                            href={`mailto:${basics.contact.email}`}
                            className="flex items-center gap-1.5 text-text-muted hover:text-text-heading transition-colors py-1 px-2 rounded-md hover:bg-card-hover cursor-pointer"
                            title="Send an email"
                        >
                            <EnvelopeIcon className="w-4 h-4 text-text-muted" aria-hidden="true" />
                            <span>{basics.contact.email}</span>
                        </a>

                        <a
                            href={`https://${basics.contact.linkedin}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-text-muted hover:text-text-heading transition-colors py-1 px-2 rounded-md hover:bg-card-hover cursor-pointer"
                            title="LinkedIn Profile"
                        >
                            <svg className="w-4 h-4 fill-current text-text-muted" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            <span>LinkedIn</span>
                        </a>

                        <a
                            href={`https://${basics.contact.portfolio}`}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 text-text-muted hover:text-text-heading transition-colors py-1 px-2 rounded-md hover:bg-card-hover cursor-pointer"
                            title="Original Portfolio"
                        >
                            <CodeBracketIcon className="w-4 h-4 text-text-muted" aria-hidden="true" />
                            <span>Portfolio Netlify</span>
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border-custom flex flex-col sm:flex-row justify-between items-center text-xs text-text-muted gap-2">
                    <p>Designed with High-Contrast Engineering Precision • Linear & Swiss Architectural Principles</p>
                    <p className="font-mono">React 19 • TypeScript • Tailwind v4 • Vite</p>
                </div>
            </div>
        </footer>
    );
};

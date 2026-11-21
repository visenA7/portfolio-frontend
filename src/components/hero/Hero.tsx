import { Container } from "../layout/Container";
import { ArchitectureSlider } from "./ArchitectureSlider";
import { resumeData } from "../../data/resume";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export const Hero = () => {
    const { basics } = resumeData;

    return (
        <section className="py-12 md:py-24 border-b border-border-custom relative overflow-hidden transition-colors duration-300">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 items-center relative z-10">

                    {/* LEFT: Text */}
                    <div>
                        <span className="px-3 py-1 bg-badge text-badge-text rounded-full text-xs font-mono border border-badge-border inline-block mb-4 animate-pulse">
                            { "Available for Opportunities"}
                        </span>
                        
                        <h1 className="text-4xl md:text-6xl font-extrabold text-text-heading tracking-tight leading-none">
                            Hi, I'm <br />
                            <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent bg-gradient-animate">
                                {basics.name}
                            </span>
                        </h1>

                        <p className="mt-4 text-xl md:text-2xl text-text-heading font-bold leading-relaxed">
                            {basics.title}
                        </p>

                        <p className="mt-4 text-text-muted max-w-xl text-sm md:text-base leading-relaxed">
                            {basics.summary}
                        </p>

                        {/* Contacts & Social links */}
                        <div className="mt-6 flex flex-wrap gap-4 items-center">
                            <a
                                href={`mailto:${basics.contact.email}`}
                                className="flex items-center gap-2 text-sm text-text-muted hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                            >
                                <EnvelopeIcon className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                                <span className="font-medium">{basics.contact.email}</span>
                            </a>
                            <span className="text-border-custom">|</span>
                            <a
                                href={`https://${basics.contact.linkedin}`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-sm text-text-muted hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                            >
                                <svg className="w-5 h-5 fill-current text-sky-600 dark:text-sky-400" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                <span className="font-medium">LinkedIn</span>
                            </a>
                        </div>

                        {/* Navigation Links */}
                        <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                            <a
                                href="/systems"
                                className="px-6 py-3 min-h-[44px] rounded-lg bg-card border border-border-custom text-text-heading font-bold hover:bg-sky-600 dark:hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all text-sm uppercase tracking-wide backdrop-blur-sm text-center shadow-sm hover:shadow-md cursor-pointer"
                            >
                                Systems
                            </a>
                            <a
                                href="/frontend"
                                className="px-6 py-3 min-h-[44px] rounded-lg bg-card border border-border-custom text-text-heading font-bold hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all text-sm uppercase tracking-wide backdrop-blur-sm text-center shadow-sm hover:shadow-md cursor-pointer"
                            >
                                Frontend
                            </a>
                            <a
                                href="/projects"
                                className="px-6 py-3 min-h-[44px] rounded-lg bg-card border border-border-custom text-text-heading font-bold hover:bg-purple-600 dark:hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-all text-sm uppercase tracking-wide backdrop-blur-sm text-center shadow-sm hover:shadow-md cursor-pointer"
                            >
                                Projects
                            </a>
                        </div>

                        {/* Stats Row */}
                        <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border-custom pt-6">
                            <div>
                                <div className="text-2xl md:text-3xl font-extrabold text-text-heading">5+ Yrs</div>
                                <div className="text-xs text-text-muted font-semibold font-mono mt-1 uppercase tracking-wider">Experience</div>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-extrabold text-text-heading">10K+</div>
                                <div className="text-xs text-text-muted font-semibold font-mono mt-1 uppercase tracking-wider">Active Users</div>
                            </div>
                            <div>
                                <div className="text-2xl md:text-3xl font-extrabold text-text-heading">500K+</div>
                                <div className="text-xs text-text-muted font-semibold font-mono mt-1 uppercase tracking-wider">Daily Requests</div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Scrollable Architecture */}
                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                        <div className="relative">
                            <ArchitectureSlider />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};
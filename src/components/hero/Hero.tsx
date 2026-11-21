import { Container } from "../layout/Container";
import { ArchitectureSlider } from "./ArchitectureSlider";
import { resumeData } from "../../data/resume";
import { EnvelopeIcon, ArrowRightIcon, DocumentTextIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const Hero = () => {
    const { basics } = resumeData;

    return (
        <section className="py-12 md:py-20 border-b border-border-custom relative overflow-hidden transition-colors duration-200">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">

                    {/* LEFT COLUMN: Profile & Value Prop (7 cols) */}
                    <div className="lg:col-span-7 space-y-6">
                        {/* Live Status Pill */}
                        <div className="inline-flex flex-wrap items-center gap-2.5">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-badge border border-badge-border text-text-heading text-xs font-mono font-medium">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>
                                {basics.notice_period || "Available for Opportunities"}
                            </span>

                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-border-custom text-text-muted text-xs font-mono">
                                <MapPinIcon className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                                {basics.location.city}, {basics.location.country}
                            </span>
                        </div>

                        {/* Heading with Understated Architectural Typography */}
                        <div>
                            <p className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-widest text-accent mb-2">
                                System Architect & Full Stack Engineer
                            </p>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-heading tracking-tight leading-[1.08]">
                                Hi, I'm{" "}
                                <span className="text-text-heading underline decoration-accent/60 decoration-2 underline-offset-8">
                                    {basics.name}
                                </span>
                            </h1>
                            <p className="mt-3 text-lg sm:text-xl font-bold text-text-heading/90">
                                {basics.title}
                            </p>
                        </div>

                        {/* Concise Value Proposition */}
                        <p className="text-text-muted text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                            Architecting resilient multi-tenant enterprise platforms and microservices using{" "}
                            <strong className="text-text-heading font-semibold">React, Node.js, ASP.NET Core</strong>, and{" "}
                            <strong className="text-text-heading font-semibold">PostgreSQL</strong>. Proven track record handling{" "}
                            <span className="font-semibold font-mono text-text-heading">500K+ daily requests</span> with{" "}
                            <span className="text-accent font-semibold font-mono">sub-50ms latency</span> and slashing CPU utilization by 50%.
                        </p>

                        {/* Primary CTAs - Bespoke Accent & Surface Actions */}
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <Link
                                to="/systems"
                                className="px-5 py-3 rounded-xl bg-[#A77C42] hover:bg-[#936c37] text-white dark:bg-[#C49A5A] dark:hover:bg-[#b2884a] dark:text-[#191713] font-semibold text-sm transition-all shadow-xs flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            >
                                <span>Explore Systems</span>
                                <ArrowRightIcon className="w-4 h-4" aria-hidden="true" />
                            </Link>

                            <Link
                                to="/frontend"
                                className="px-5 py-3 rounded-xl bg-card border border-border-custom hover:bg-card-hover hover:border-accent text-text-heading font-semibold text-sm transition-all shadow-xs flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            >
                                <span>Frontend Architecture</span>
                            </Link>

                            <Link
                                to="/resume"
                                className="px-4 py-3 rounded-xl bg-transparent hover:bg-card-hover text-text-muted hover:text-text-heading border border-border-custom font-semibold text-sm transition-all flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                            >
                                <DocumentTextIcon className="w-4 h-4 text-accent" aria-hidden="true" />
                                <span>Resume</span>
                            </Link>
                        </div>

                        {/* Contacts & Social links */}
                        <div className="pt-2 flex flex-wrap gap-4 items-center text-sm border-t border-border-custom">
                            <a
                                href={`mailto:${basics.contact.email}`}
                                className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors cursor-pointer"
                            >
                                <EnvelopeIcon className="w-4 h-4 text-accent" aria-hidden="true" />
                                <span className="font-mono text-xs sm:text-sm">{basics.contact.email}</span>
                            </a>
                            <span className="text-border-custom">|</span>
                            <a
                                href={`https://${basics.contact.linkedin}`}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 text-text-muted hover:text-accent transition-colors cursor-pointer"
                            >
                                <svg className="w-4 h-4 fill-current text-accent" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                <span className="font-medium text-xs sm:text-sm">LinkedIn</span>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Interactive Architecture Studio (5 cols) */}
                    <div className="lg:col-span-5 relative">
                        <ArchitectureSlider />
                    </div>

                </div>
            </Container>
        </section>
    );
};

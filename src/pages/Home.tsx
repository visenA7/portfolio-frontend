import { Hero } from "../components/hero/Hero";
import { SystemSnapshot } from "../components/snapshot/SystemSnapshot";
import { SystemsSection } from "../components/systems/SystemsSection";
import { FrontendSection } from "../components/frontend/FrontendSection";
import { EngineeringSkills } from "../components/skills/EngineeringSkills";
import { NotesSection } from "../components/notes/NotesSection";
import { Container } from "../components/layout/Container";
import { Link } from "react-router-dom";
import { EnvelopeIcon, DocumentArrowDownIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const Home = () => {
    return (
        <div className="relative">
            <Hero />
            <SystemSnapshot />
            <SystemsSection />
            <FrontendSection />
            <EngineeringSkills />
            <NotesSection />

            {/* Bottom Contact / Collaboration Bento Banner */}
            <section className="py-16 sm:py-24 relative overflow-hidden transition-colors duration-200">
                <Container>
                    <div className="bento-card rounded-3xl p-8 sm:p-12 relative overflow-hidden text-center sm:text-left border border-card-border shadow-2xl">
                        {/* Ambient glow in card */}
                        <div className="absolute -top-24 -right-24 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-badge text-badge-text border border-badge-border text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>Immediate Joiner • Open to High-Impact Roles</span>
                                </span>
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-text-heading tracking-tight leading-tight">
                                    Let's build scalable, resilient platforms together.
                                </h2>
                                <p className="mt-3 text-text-muted text-base sm:text-lg leading-relaxed">
                                    Whether you need to architect a new microservice from scratch, scale database query performance, or modernize complex client interfaces, I'd love to chat.
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                                <a
                                    href="mailto:abhishekvisen7@gmail.com"
                                    className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all shadow-md shadow-sky-600/20 hover:shadow-sky-500/30 flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                >
                                    <EnvelopeIcon className="w-4 h-4" aria-hidden="true" />
                                    <span>abhishekvisen7@gmail.com</span>
                                </a>

                                <Link
                                    to="/resume"
                                    className="px-5 py-3.5 rounded-xl bg-card border border-border-custom hover:border-sky-500/50 hover:bg-card-hover text-text-heading font-semibold text-sm transition-all shadow-xs flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                                >
                                    <DocumentArrowDownIcon className="w-4 h-4 text-sky-500" aria-hidden="true" />
                                    <span>View Resume</span>
                                    <ArrowRightIcon className="w-3.5 h-3.5 text-text-muted" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

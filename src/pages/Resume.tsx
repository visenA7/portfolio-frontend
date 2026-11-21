import { Container } from "../components/layout/Container";
import { resumeData } from "../data/resume";
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon,
    ArrowDownTrayIcon,
    StarIcon,
    CheckCircleIcon,
    SparklesIcon,
    AcademicCapIcon,
    LanguageIcon,
    BriefcaseIcon,
    CodeBracketSquareIcon
} from "@heroicons/react/24/outline";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumeDocument } from "../components/resume/ResumeDocument";

export const Resume = () => {
    const { basics, skills, experience, projects, education, achievements, languages } = resumeData;

    const skillClusters = [
        { title: "AI / GenAI & Agents", items: skills.ai_genai, highlight: true },
        { title: "Backend & Distributed Systems", items: skills.backend, highlight: true },
        { title: "Frontend & Spatial Visualization", items: skills.frontend, highlight: false },
        { title: "Databases, Caching & Messaging", items: skills.databases_and_messaging, highlight: false },
        { title: "Architecture & Security", items: skills.architecture_and_security, highlight: false },
        { title: "Cloud, DevOps & Containers", items: skills.cloud_and_devops, highlight: false },
        { title: "Programming Languages", items: skills.programming, highlight: false },
        { title: "Engineering Tools & Profiling", items: skills.tools, highlight: false },
    ];

    return (
        <section className="py-10 md:py-16 print:py-0 transition-colors duration-200">
            <Container>
                {/* Action Bar / Download Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12 print:hidden">
                    <div>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-badge text-badge-text border border-badge-border text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                            CURRICULUM VITAE • 2-PAGE EXECUTIVE EDITION
                        </span>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-text-heading">Professional Resume</h1>
                        <p className="text-text-muted text-sm md:text-base font-medium mt-1">
                            Verified enterprise production experience, distributed architectures, and technical competencies
                        </p>
                    </div>

                    <PDFDownloadLink
                        document={<ResumeDocument data={resumeData} />}
                        fileName={`Resume_${basics.name.replace(' ', '_')}.pdf`}
                        className="flex items-center gap-2 px-5 py-3 min-h-[44px] bg-[#A77C42] hover:bg-[#936c37] text-white dark:bg-[#C49A5A] dark:hover:bg-[#b2884a] dark:text-[#191713] rounded-xl transition-all font-semibold shadow-xs text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shrink-0"
                    >
                        {({ loading }) =>
                            loading ? (
                                <span className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>
                                    <span>Compiling 2-Page PDF...</span>
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <ArrowDownTrayIcon className="w-4 h-4" aria-hidden="true" />
                                    <span>Download Resume PDF</span>
                                </span>
                            )
                        }
                    </PDFDownloadLink>
                </div>

                {/* Main Resume Canvas */}
                <div className="max-w-5xl mx-auto bento-card border border-card-border p-6 sm:p-10 md:p-12 rounded-3xl text-text-muted transition-colors duration-200 shadow-xl print:bg-white print:text-black print:max-w-none print:w-full print:p-0 print:border-none print:shadow-none space-y-10 md:space-y-12">

                    {/* Section 1: Header & Bio */}
                    <header className="border-b border-border-custom pb-8 print:border-gray-300">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                            <div className="space-y-3">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-heading print:text-black leading-tight">
                                    {basics.name}
                                </h1>
                                <p className="text-base sm:text-lg md:text-xl text-accent font-bold pt-1 leading-snug">
                                    {basics.title}
                                </p>
                            </div>

                            <div className="text-xs sm:text-sm space-y-2 text-text-muted print:text-gray-600 md:text-right font-medium">
                                <div className="flex items-center md:justify-end gap-2">
                                    <span>{basics.location.city}, {basics.location.country}</span>
                                    <MapPinIcon className="w-4 h-4 text-accent print:text-gray-500 shrink-0" aria-hidden="true" />
                                </div>
                                <div className="flex items-center md:justify-end gap-2">
                                    <a href={`mailto:${basics.contact.email}`} className="hover:text-accent transition-colors print:text-black">
                                        {basics.contact.email}
                                    </a>
                                    <EnvelopeIcon className="w-4 h-4 text-accent print:text-gray-500 shrink-0" aria-hidden="true" />
                                </div>
                                <div className="flex items-center md:justify-end gap-2">
                                    <span>{basics.contact.phone}</span>
                                    <PhoneIcon className="w-4 h-4 text-accent print:text-gray-500 shrink-0" aria-hidden="true" />
                                </div>
                                <div className="flex items-center md:justify-end gap-2">
                                    <a href={`https://${basics.contact.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-accent transition-colors print:text-black">
                                        {basics.contact.linkedin}
                                    </a>
                                    <svg className="w-4 h-4 text-accent print:text-gray-500 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </div>
                                {basics.notice_period && (
                                    <div className="flex items-center md:justify-end gap-2 pt-1">
                                        <span className="px-2.5 py-0.5 bg-badge text-badge-text rounded-md text-xs font-semibold border border-badge-border font-mono print:bg-gray-100 print:text-black print:border-gray-300">
                                            {basics.notice_period}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Executive Summary Card */}
                        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-card-hover/50 border border-border-custom text-sm sm:text-base text-text-heading/90 leading-relaxed font-normal">
                            <span className="font-bold text-accent font-mono text-xs uppercase tracking-wider block mb-1">
                                Executive Summary
                            </span>
                            {basics.summary}
                        </div>
                    </header>

                    {/* Section 2: Technical Skills Matrix */}
                    <section>
                        <div className="flex items-center gap-2 pb-2 mb-6 border-b border-border-custom print:border-gray-300">
                            <SparklesIcon className="w-5 h-5 text-accent print:hidden" aria-hidden="true" />
                            <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-text-heading print:text-black">
                                Technical Competencies
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {skillClusters.map(cluster => (
                                <div
                                    key={cluster.title}
                                    className={`p-4 rounded-xl border transition-all ${
                                        cluster.highlight
                                            ? "bg-card-hover border-accent/40 shadow-xs"
                                            : "bg-card-hover/40 border-border-custom"
                                    }`}
                                >
                                    <h3 className="font-bold text-xs uppercase tracking-wider font-mono text-accent mb-2.5">
                                        {cluster.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-1.5">
                                        {cluster.items.map(s => (
                                            <span
                                                key={s}
                                                className={`px-2 py-0.5 rounded text-xs font-medium border ${
                                                    cluster.highlight
                                                        ? "bg-accent/15 text-text-heading border-accent/25"
                                                        : "bg-card text-text-muted border-border-custom print:bg-gray-100 print:text-black"
                                                }`}
                                            >
                                                {s}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 3: Professional Experience */}
                    <section>
                        <div className="flex items-center gap-2 pb-2 mb-6 border-b border-border-custom print:border-gray-300">
                            <BriefcaseIcon className="w-5 h-5 text-accent print:hidden" aria-hidden="true" />
                            <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-text-heading print:text-black">
                                Professional Experience
                            </h2>
                        </div>

                        <div className="space-y-8 print:space-y-6">
                            {experience.map((job, idx) => (
                                <div key={idx} className="relative pl-6 md:pl-8 border-l-2 border-border-custom print:border-l-2 print:border-gray-200 ml-2">
                                    <div className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-card print:bg-gray-400"></div>

                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
                                        <h3 className="text-base sm:text-lg font-bold text-text-heading print:text-black">
                                            {job.role}
                                        </h3>
                                        <span className="text-xs sm:text-sm font-mono text-accent font-semibold">
                                            {job.start_date} – {job.end_date}
                                        </span>
                                    </div>

                                    <div className="text-text-muted font-medium mb-3 text-xs sm:text-sm">
                                        <strong className="text-text-heading font-semibold">{job.company}</strong> | {job.location}
                                    </div>

                                    <ul className="space-y-2 text-text-muted text-xs sm:text-sm leading-relaxed print:text-gray-800">
                                        {job.responsibilities.map((resp, rIdx) => (
                                            <li key={rIdx} className="flex items-start gap-2.5">
                                                <span className="text-accent text-sm shrink-0 mt-0.5 print:hidden">▹</span>
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 4: Key Projects & Systems */}
                    <section>
                        <div className="flex items-center gap-2 pb-2 mb-6 border-b border-border-custom print:border-gray-300">
                            <CodeBracketSquareIcon className="w-5 h-5 text-accent print:hidden" aria-hidden="true" />
                            <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-text-heading print:text-black">
                                Key Projects & Production Architectures
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 print:grid-cols-1">
                            {projects.map((proj, idx) => (
                                <div key={idx} className="bg-card-hover/40 rounded-2xl p-5 sm:p-6 border border-border-custom flex flex-col justify-between hover:border-accent/50 transition-colors">
                                    <div>
                                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1">
                                            <h3 className="text-base font-bold text-text-heading print:text-black">
                                                {proj.name}
                                            </h3>
                                            {proj.duration && (
                                                <span className="text-xs text-text-muted font-mono print:text-gray-600">
                                                    {proj.duration}
                                                </span>
                                            )}
                                        </div>

                                        {proj.technologies && (
                                            <div className="text-xs font-mono text-accent mb-3 font-semibold p-2 rounded-lg bg-card border border-border-custom">
                                                {proj.technologies}
                                            </div>
                                        )}

                                        <ul className="space-y-2 text-text-muted text-xs sm:text-sm leading-relaxed print:text-gray-800">
                                            {proj.description.map((desc, dIdx) => (
                                                <li key={dIdx} className="flex items-start gap-2">
                                                    <CheckCircleIcon className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5 print:hidden" aria-hidden="true" />
                                                    <span>{desc}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 5: Bottom 3-Column Grid (Education, Achievements, Languages) */}
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-border-custom print:border-gray-300">

                        {/* Education */}
                        <div className="p-5 rounded-2xl bg-card-hover/30 border border-border-custom">
                            <div className="flex items-center gap-2 mb-3">
                                <AcademicCapIcon className="w-4 h-4 text-accent" aria-hidden="true" />
                                <h3 className="text-sm font-bold uppercase tracking-wider text-text-heading print:text-black font-mono">
                                    Education
                                </h3>
                            </div>
                            {education.map((edu, idx) => (
                                <div key={idx} className="space-y-1">
                                    <div className="font-bold text-text-heading text-sm print:text-black">
                                        {edu.degree}
                                    </div>
                                    {edu.field && (
                                        <div className="text-text-muted text-xs">
                                            {edu.field}
                                        </div>
                                    )}
                                    <div className="text-accent text-xs font-semibold">
                                        {edu.institution}
                                    </div>
                                    <div className="text-text-muted text-xs font-mono pt-1">
                                        {edu.duration}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Achievements */}
                        <div className="p-5 rounded-2xl bg-card-hover/30 border border-border-custom md:col-span-2">
                            <div className="flex items-center gap-2 mb-3">
                                <StarIcon className="w-4 h-4 text-accent" aria-hidden="true" />
                                <h3 className="text-sm font-bold uppercase tracking-wider text-text-heading print:text-black font-mono">
                                    Honors & Key Achievements
                                </h3>
                            </div>
                            <ul className="space-y-2.5">
                                {achievements.map((ach, idx) => (
                                    <li key={idx} className="text-xs sm:text-sm text-text-muted leading-relaxed print:text-gray-800 flex gap-2 font-medium">
                                        <span className="text-accent text-sm shrink-0 mt-0.5">★</span>
                                        <span>{ach}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Languages Inline */}
                            <div className="mt-4 pt-3 border-t border-border-custom flex items-center justify-between text-xs">
                                <span className="font-semibold text-text-heading flex items-center gap-1.5 font-mono">
                                    <LanguageIcon className="w-3.5 h-3.5 text-accent" />
                                    Languages:
                                </span>
                                <span className="text-text-muted">
                                    {languages.map(l => `${l.language} (${l.proficiency.split(' ')[0]})`).join(" • ")}
                                </span>
                            </div>
                        </div>

                    </section>

                </div>
            </Container>
        </section>
    );
};

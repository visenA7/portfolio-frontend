import { Container } from "../components/layout/Container";
import { resumeData } from "../data/resume";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowDownTrayIcon, StarIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumeDocument } from "../components/resume/ResumeDocument";

export const Resume = () => {
    const { basics, skills, experience, projects, education, achievements, languages } = resumeData;

    return (
        <section className="py-10 md:py-16 print:py-0 transition-colors duration-200">
            <Container>
                {/* Print Button Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-10 print:hidden">
                    <div>
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-badge text-badge-text border border-badge-border text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                            CURRICULUM VITAE
                        </span>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-text-heading">Professional Resume</h1>
                        <p className="text-text-muted text-sm md:text-base font-medium mt-1">Verified production engineering experience, system ownership, and competencies</p>
                    </div>

                    <PDFDownloadLink
                        document={<ResumeDocument data={resumeData} />}
                        fileName={`Resume_${basics.name.replace(' ', '_')}.pdf`}
                        className="flex items-center gap-2 px-5 py-3 min-h-[44px] bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 rounded-xl transition-all font-semibold shadow-sm text-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                    >
                        {({ loading }) =>
                            loading ? (
                                <span className="flex items-center gap-2">
                                    <div className="w-4 h-4 border-2 border-neutral-400 border-t-white rounded-full animate-spin"></div>
                                    <span>Generating PDF...</span>
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <ArrowDownTrayIcon className="w-4 h-4" aria-hidden="true" />
                                    <span>Download Official PDF</span>
                                </span>
                            )
                        }
                    </PDFDownloadLink>
                </div>

                {/* Resume Content - Card wrapper on web / resets on print */}
                <div className="max-w-4xl mx-auto bento-card border border-card-border p-6 sm:p-10 md:p-12 rounded-3xl text-text-muted transition-colors duration-200 shadow-xl print:bg-white print:text-black print:max-w-none print:w-full print:p-0 print:border-none print:shadow-none">

                    {/* Header */}
                    <header className="border-b border-border-custom pb-6 md:pb-8 mb-6 md:mb-8 print:border-gray-300">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6">
                            <div>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-heading print:text-black">
                                    {basics.name}
                                </h1>
                                <p className="text-lg md:text-xl text-text-heading font-bold mt-2">
                                    {basics.title}
                                </p>
                            </div>
                            <div className="text-sm space-y-1.5 text-text-muted print:text-gray-600 md:text-right font-medium">
                                <div className="flex items-center md:justify-end gap-2">
                                    <span>{basics.location.city}, {basics.location.country}</span>
                                    <MapPinIcon className="w-4 h-4 text-text-muted print:text-gray-500" aria-hidden="true" />
                                </div>
                                <div className="flex items-center md:justify-end gap-2">
                                    <a href={`mailto:${basics.contact.email}`} className="hover:text-text-heading transition-colors print:text-black">
                                        {basics.contact.email}
                                    </a>
                                    <EnvelopeIcon className="w-4 h-4 text-text-muted print:text-gray-500" aria-hidden="true" />
                                </div>
                                <div className="flex items-center md:justify-end gap-2">
                                    <span>{basics.contact.phone}</span>
                                    <PhoneIcon className="w-4 h-4 text-text-muted print:text-gray-500" aria-hidden="true" />
                                </div>
                                <div className="flex items-center md:justify-end gap-2">
                                    <a href={`https://${basics.contact.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-text-heading transition-colors print:text-black">
                                        {basics.contact.linkedin}
                                    </a>
                                    <svg className="w-4 h-4 text-text-muted print:text-gray-500 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </div>
                                {basics.notice_period && (
                                    <div className="flex items-center md:justify-end gap-2 pt-1">
                                        <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-md text-xs font-semibold border border-emerald-500/20 font-mono print:bg-gray-100 print:text-black print:border-gray-300">
                                            {basics.notice_period}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <p className="mt-4 md:mt-6 text-sm sm:text-base text-text-muted leading-relaxed max-w-3xl print:text-gray-700 font-normal">
                            {basics.summary}
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 print:grid-cols-3 print:gap-8">

                        {/* Main Content Column */}
                        <div className="lg:col-span-2 space-y-8 md:space-y-10 order-1">

                            {/* Experience Section */}
                            <section>
                                <h2 className="text-base md:text-lg font-bold uppercase tracking-wider text-text-heading border-b border-border-custom pb-2 mb-4 md:mb-6 flex items-center gap-2 print:text-black print:border-gray-300">
                                    <span className="font-mono text-text-muted print:hidden">/</span> Experience
                                </h2>
                                <div className="space-y-6 md:space-y-8 print:space-y-6">
                                    {experience.map((job, idx) => (
                                        <div key={idx} className="relative pl-4 md:pl-6 border-l-2 border-border-custom print:border-l-2 print:border-gray-200 ml-1">
                                            <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-neutral-900 dark:bg-white print:bg-gray-400"></div>
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                                <h3 className="text-base md:text-lg font-bold text-text-heading print:text-black">
                                                    {job.role}
                                                </h3>
                                                <span className="text-xs md:text-sm font-mono text-text-muted print:text-gray-600">
                                                    {job.start_date} - {job.end_date}
                                                </span>
                                            </div>
                                            <div className="text-text-heading font-semibold mb-2 md:mb-3 text-sm">
                                                {job.company} | {job.location}
                                            </div>
                                            <ul className="space-y-2 text-text-muted text-xs sm:text-sm leading-relaxed print:text-gray-800">
                                                {job.responsibilities.map((resp, rIdx) => (
                                                    <li key={rIdx} className="flex items-start gap-2">
                                                        <span className="text-text-muted text-xs shrink-0 mt-0.5 print:hidden">▹</span>
                                                        <span>{resp}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Projects Section */}
                            <section>
                                <h2 className="text-base md:text-lg font-bold uppercase tracking-wider text-text-heading border-b border-border-custom pb-2 mb-4 md:mb-6 flex items-center gap-2 print:text-black print:border-gray-300">
                                    <span className="font-mono text-text-muted print:hidden">/</span> Key Projects
                                </h2>
                                <div className="space-y-4 md:space-y-6 print:space-y-6">
                                    {projects.map((proj, idx) => (
                                        <div key={idx} className="bg-card-hover/60 rounded-xl p-4 md:p-6 border border-border-custom print:bg-transparent print:p-0 print:border-none">
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1">
                                                <h3 className="text-base font-bold text-text-heading print:text-black">
                                                    {proj.name}
                                                </h3>
                                                <span className="text-xs text-text-muted font-mono print:text-gray-600">
                                                    {proj.duration}
                                                </span>
                                            </div>
                                            <ul className="space-y-1.5 text-text-muted text-xs sm:text-sm leading-relaxed print:text-gray-800">
                                                {proj.description.map((desc, dIdx) => (
                                                    <li key={dIdx} className="flex items-start gap-2">
                                                        <CheckCircleIcon className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 shrink-0 mt-0.5 print:hidden" aria-hidden="true" />
                                                        <span>{desc}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>

                        {/* Sidebar Column */}
                        <div className="space-y-8 md:space-y-10 order-2">

                            {/* Skills Section */}
                            <section>
                                <h2 className="text-base md:text-lg font-bold uppercase tracking-wider text-text-heading border-b border-border-custom pb-2 mb-4 md:mb-6 print:text-black print:border-gray-300">
                                    Skills
                                </h2>
                                <div className="space-y-4 md:space-y-5">
                                    <div>
                                        <h3 className="font-bold text-text-heading text-xs uppercase tracking-wider mb-2 font-mono">Frontend</h3>
                                        <div className="flex flex-wrap gap-1.5">
                                            {skills.frontend.map(s => (
                                                <span key={s} className="bg-card-hover px-2.5 py-1 rounded-md text-xs text-text-muted border border-border-custom print:bg-gray-100 print:text-black print:border-gray-200 font-medium">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-text-heading text-xs uppercase tracking-wider mb-2 font-mono">Backend</h3>
                                        <div className="flex flex-wrap gap-1.5">
                                            {skills.backend.map(s => (
                                                <span key={s} className="bg-card-hover px-2.5 py-1 rounded-md text-xs text-text-muted border border-border-custom print:bg-gray-100 print:text-black print:border-gray-200 font-medium">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-text-heading text-xs uppercase tracking-wider mb-2 font-mono">Testing & Tools</h3>
                                        <div className="flex flex-wrap gap-1.5">
                                            {[...skills.testing_and_optimization, ...skills.tools_and_platforms].map(s => (
                                                <span key={s} className="bg-card-hover px-2.5 py-1 rounded-md text-xs text-text-muted border border-border-custom print:bg-gray-100 print:text-black print:border-gray-200 font-medium">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Education Section */}
                            <section>
                                <h2 className="text-base md:text-lg font-bold uppercase tracking-wider text-text-heading border-b border-border-custom pb-2 mb-4 md:mb-6 print:text-black print:border-gray-300">
                                    Education
                                </h2>
                                <div className="space-y-4">
                                    {education.map((edu, idx) => (
                                        <div key={idx} className="p-3 rounded-xl bg-card-hover/40 border border-border-custom">
                                            <div className="font-bold text-text-heading text-sm print:text-black">
                                                {edu.degree}
                                            </div>
                                            {edu.field && (
                                                <div className="text-text-muted text-xs mt-0.5 print:text-gray-700">
                                                    {edu.field}
                                                </div>
                                            )}
                                            <div className="text-text-heading text-xs font-semibold mt-1">
                                                {edu.institution}
                                            </div>
                                            <div className="text-text-muted text-[11px] font-mono mt-1 print:text-gray-600">
                                                {edu.duration}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Achievements Section */}
                            <section>
                                <h2 className="text-base md:text-lg font-bold uppercase tracking-wider text-text-heading border-b border-border-custom pb-2 mb-4 md:mb-6 print:text-black print:border-gray-300">
                                    Achievements
                                </h2>
                                <ul className="space-y-2">
                                    {achievements.map((ach, idx) => (
                                        <li key={idx} className="text-xs sm:text-sm text-text-muted leading-relaxed print:text-gray-800 flex gap-2 font-medium">
                                            <StarIcon className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5 print:hidden" aria-hidden="true" />
                                            <span>{ach}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Languages Section */}
                            <section>
                                <h2 className="text-base md:text-lg font-bold uppercase tracking-wider text-text-heading border-b border-border-custom pb-2 mb-4 md:mb-6 print:text-black print:border-gray-300">
                                    Languages
                                </h2>
                                <div className="space-y-2">
                                    {languages.map((lang, idx) => (
                                        <div key={idx} className="flex justify-between items-center border-b border-border-custom pb-2 print:border-gray-100">
                                            <span className="text-xs sm:text-sm font-semibold text-text-heading print:text-black">{lang.language}</span>
                                            <span className="text-xs font-mono text-text-muted">{lang.proficiency}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

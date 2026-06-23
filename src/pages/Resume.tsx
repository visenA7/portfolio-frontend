import { Container } from "../components/layout/Container";
import { resumeData } from "../data/resume";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumeDocument } from "../components/resume/ResumeDocument";

export const Resume = () => {
    const { basics, skills, experience, projects, education, achievements, languages } = resumeData;

    return (
        <section className="py-12 md:py-24 print:py-0 transition-colors duration-300">
            <Container>
                {/* Print Button Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12 print:hidden">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-text-heading mb-2">Resume</h1>
                        <p className="text-text-muted text-sm md:text-base font-medium">Professional experience and skills overview</p>
                    </div>

                    <PDFDownloadLink
                        document={<ResumeDocument data={resumeData} />}
                        fileName={`Resume_${basics.name.replace(' ', '_')}.pdf`}
                        className="flex items-center gap-2 px-4 py-3 min-h-[44px] bg-sky-600 hover:bg-sky-500 text-white rounded-lg transition-colors font-bold shadow-lg hover:shadow-sky-500/20 text-sm md:text-base cursor-pointer"
                    >
                        {({ loading }) =>
                            loading ? (
                                <span className="flex items-center gap-2">
                                    Loading...
                                </span>
                            ) : (
                                <span className="flex items-center gap-2">
                                    <ArrowDownTrayIcon className="w-5 h-5" />
                                    Download PDF
                                </span>
                            )
                        }
                    </PDFDownloadLink>
                </div>

                {/* Resume Content - Card wrapper on web / resets on print */}
                <div className="max-w-4xl mx-auto bg-card border border-card-border p-6 md:p-10 rounded-3xl text-text-muted transition-colors duration-300 print:bg-white print:text-black print:max-w-none print:w-full print:p-0 print:border-none print:shadow-none">

                    {/* Header */}
                    <header className="border-b border-border-custom pb-6 md:pb-8 mb-6 md:mb-8 print:border-gray-300">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-text-heading print:text-black">
                                    {basics.name}
                                </h1>
                                <p className="text-xl md:text-2xl text-sky-600 dark:text-sky-400 font-bold mt-2 print:text-sky-700">
                                    {basics.title}
                                </p>
                            </div>
                            <div className="text-sm space-y-2 text-text-muted print:text-gray-600 md:text-right font-medium">
                                <div className="flex items-center md:justify-end gap-2">
                                    <span>{basics.location.city}, {basics.location.country}</span>
                                    <MapPinIcon className="w-4 h-4 text-sky-500 print:text-gray-500" />
                                </div>
                                <div className="flex items-center md:justify-end gap-2">
                                    <a href={`mailto:${basics.contact.email}`} className="hover:text-sky-500 transition-colors print:text-black">
                                        {basics.contact.email}
                                    </a>
                                    <EnvelopeIcon className="w-4 h-4 text-sky-500 print:text-gray-500" />
                                </div>
                                <div className="flex items-center md:justify-end gap-2">
                                    <span>{basics.contact.phone}</span>
                                    <PhoneIcon className="w-4 h-4 text-sky-500 print:text-gray-500" />
                                </div>
                                <div className="flex items-center md:justify-end gap-2">
                                    <a href={`https://${basics.contact.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors print:text-black">
                                        {basics.contact.linkedin}
                                    </a>
                                    <svg className="w-4 h-4 text-sky-500 print:text-gray-500 fill-current" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </div>
                                {basics.notice_period && (
                                    <div className="flex items-center md:justify-end gap-2 pt-1">
                                        <span className="px-2 py-0.5 bg-badge text-badge-text rounded text-xs font-semibold border border-badge-border font-mono print:bg-gray-100 print:text-black print:border-gray-300">
                                            {basics.notice_period}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <p className="mt-4 md:mt-6 text-base md:text-lg text-text-muted leading-relaxed max-w-3xl print:text-gray-700 font-medium">
                            {basics.summary}
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 print:grid-cols-3 print:gap-8">

                        {/* Main Content Column */}
                        <div className="lg:col-span-2 space-y-8 md:space-y-10 order-1">

                            {/* Experience Section */}
                            <section>
                                <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-text-heading border-b border-border-custom pb-2 mb-4 md:mb-6 flex items-center gap-2 print:text-black print:border-gray-300">
                                    <span className="text-sky-500 print:hidden">▹</span> Experience
                                </h2>
                                <div className="space-y-6 md:space-y-8 print:space-y-6">
                                    {experience.map((job, idx) => (
                                        <div key={idx} className="relative pl-4 md:pl-6 border-l border-border-custom print:border-l-2 print:border-gray-200 ml-2">
                                            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-sky-500 print:bg-gray-400"></div>
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                                <h3 className="text-base md:text-lg font-bold text-text-heading print:text-black">
                                                    {job.role}
                                                </h3>
                                                <span className="text-xs md:text-sm font-mono text-text-muted opacity-80 print:text-gray-600">
                                                    {job.start_date} - {job.end_date}
                                                </span>
                                            </div>
                                            <div className="text-sky-600 dark:text-sky-400 font-semibold mb-2 md:mb-3 text-sm md:text-base print:text-sky-700">
                                                {job.company} | {job.location}
                                            </div>
                                            <ul className="list-disc list-outside ml-4 space-y-1.5 md:space-y-2 text-text-muted text-sm leading-relaxed print:text-gray-800 font-medium">
                                                {job.responsibilities.map((resp, rIdx) => (
                                                    <li key={rIdx}>{resp}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Projects Section */}
                            <section>
                                <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-text-heading border-b border-border-custom pb-2 mb-4 md:mb-6 flex items-center gap-2 print:text-black print:border-gray-300">
                                    <span className="text-sky-500 print:hidden">▹</span> Key Projects
                                </h2>
                                <div className="space-y-6 md:space-y-8 print:space-y-6">
                                    {projects.map((proj, idx) => (
                                        <div key={idx} className="bg-background rounded-xl p-4 md:p-6 border border-border-custom print:bg-transparent print:p-0 print:border-none">
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1">
                                                <h3 className="text-base md:text-lg font-bold text-text-heading print:text-black">
                                                    {proj.name}
                                                </h3>
                                                <span className="text-xs text-text-muted font-mono print:text-gray-600">
                                                    {proj.duration}
                                                </span>
                                            </div>
                                            <ul className="list-disc list-inside space-y-1 text-text-muted text-sm leading-relaxed print:text-gray-800 font-medium">
                                                {proj.description.map((desc, dIdx) => (
                                                    <li key={dIdx}>{desc}</li>
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
                                <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-text-heading border-b border-border-custom pb-2 mb-4 md:mb-6 print:text-black print:border-gray-300">
                                    Skills
                                </h2>
                                <div className="space-y-4 md:space-y-6">
                                    <div>
                                        <h3 className="font-bold text-sky-600 dark:text-sky-400 text-sm mb-2 print:text-sky-700">Frontend</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.frontend.map(s => (
                                                <span key={s} className="bg-background px-2 md:px-3 py-1 rounded text-xs text-text-muted border border-border-custom print:bg-gray-100 print:text-black print:border-gray-200 font-medium">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sky-600 dark:text-sky-400 text-sm mb-2 print:text-sky-700">Backend</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.backend.map(s => (
                                                <span key={s} className="bg-background px-2 md:px-3 py-1 rounded text-xs text-text-muted border border-border-custom print:bg-gray-100 print:text-black print:border-gray-200 font-medium">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-sky-600 dark:text-sky-400 text-sm mb-2 print:text-sky-700">Testing & Tools</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {[...skills.testing_and_optimization, ...skills.tools_and_platforms].map(s => (
                                                <span key={s} className="bg-background px-2 md:px-3 py-1 rounded text-xs text-text-muted border border-border-custom print:bg-gray-100 print:text-black print:border-gray-200 font-medium">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Education Section */}
                            <section>
                                <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-text-heading border-b border-border-custom pb-2 mb-4 md:mb-6 print:text-black print:border-gray-300">
                                    Education
                                </h2>
                                <div className="space-y-4 md:space-y-6">
                                    {education.map((edu, idx) => (
                                        <div key={idx}>
                                            <div className="font-bold text-text-heading text-sm md:text-base print:text-black">
                                                {edu.degree}
                                            </div>
                                            {edu.field && (
                                                <div className="text-text-muted text-sm mt-0.5 print:text-gray-700 font-medium">
                                                    {edu.field}
                                                </div>
                                            )}
                                            <div className="text-sky-600 dark:text-sky-400 text-sm font-semibold mt-1 print:text-sky-700">
                                                {edu.institution}
                                            </div>
                                            <div className="text-text-muted opacity-80 text-xs mt-1 print:text-gray-600">
                                                {edu.duration}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Achievements Section */}
                            <section>
                                <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-text-heading border-b border-border-custom pb-2 mb-4 md:mb-6 print:text-black print:border-gray-300">
                                    Achievements
                                </h2>
                                <ul className="space-y-2 md:space-y-3">
                                    {achievements.map((ach, idx) => (
                                        <li key={idx} className="text-sm text-text-muted leading-relaxed print:text-gray-800 flex gap-2 font-medium">
                                            <span className="text-sky-500 flex-shrink-0">★</span>
                                            <span>{ach}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Languages Section */}
                            <section>
                                <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-text-heading border-b border-border-custom pb-2 mb-4 md:mb-6 print:text-black print:border-gray-300">
                                    Languages
                                </h2>
                                <div className="space-y-2 md:space-y-3">
                                    {languages.map((lang, idx) => (
                                        <div key={idx} className="flex justify-between items-center border-b border-border-custom pb-2 print:border-gray-100">
                                            <span className="text-sm font-bold text-text-heading print:text-black">{lang.language}</span>
                                            <span className="text-xs text-text-muted font-medium">{lang.proficiency}</span>
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

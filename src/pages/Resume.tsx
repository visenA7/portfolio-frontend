import { Container } from "../components/layout/Container";
import { resumeData } from "../data/resume";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumeDocument } from "../components/resume/ResumeDocument";

export const Resume = () => {
    const { basics, skills, experience, projects, education, achievements, languages } = resumeData;

    return (
        <section className="py-12 md:py-24 print:py-0">
            <Container>
                {/* Print Button */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12 print:hidden">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Resume</h1>
                        <p className="text-gray-400 text-sm md:text-base">Professional experience and skills overview</p>
                    </div>

                    <PDFDownloadLink
                        document={<ResumeDocument data={resumeData} />}
                        fileName={`Resume_${basics.name.replace(' ', '_')}.pdf`}
                        className="flex items-center gap-2 px-4 py-3 min-h-[44px] bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-semibold shadow-lg shadow-sky-900/20 text-sm md:text-base"
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

                {/* Resume Content - Dark Mode Display / White Print Mode */}
                <div className="max-w-4xl mx-auto bg-[#0B0F14] text-gray-300 print:bg-white print:text-black print:max-w-none print:w-full">

                    {/* Header */}
                    <header className="border-b border-white/10 pb-6 md:pb-8 mb-6 md:mb-8 print:border-gray-300">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-6">
                            <div>
                                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white print:text-black">
                                    {basics.name}
                                </h1>
                                <p className="text-xl md:text-2xl text-sky-400 font-semibold mt-2 print:text-sky-700">
                                    {basics.title}
                                </p>
                            </div>
                            <div className="text-sm space-y-2 text-gray-400 print:text-gray-600 md:text-right">
                                <div className="flex items-center md:justify-end gap-2">
                                    <span>{basics.location.city}, {basics.location.country}</span>
                                    <MapPinIcon className="w-4 h-4 text-sky-500 print:text-gray-500" />
                                </div>
                                <div className="flex items-center md:justify-end gap-2">
                                    <a href={`mailto:${basics.contact.email}`} className="hover:text-sky-400 transition-colors print:text-black">
                                        {basics.contact.email}
                                    </a>
                                    <EnvelopeIcon className="w-4 h-4 text-sky-500 print:text-gray-500" />
                                </div>
                                <div className="flex items-center md:justify-end gap-2">
                                    <span>{basics.contact.phone}</span>
                                    <PhoneIcon className="w-4 h-4 text-sky-500 print:text-gray-500" />
                                </div>
                            </div>
                        </div>
                        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl print:text-gray-700">
                            {basics.summary}
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 print:grid-cols-3 print:gap-8">

                        {/* Main Content Column */}
                        <div className="lg:col-span-2 space-y-8 md:space-y-10 order-1">

                            {/* Experience Section */}
                            <section>
                                <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2 mb-4 md:mb-6 flex items-center gap-2 print:text-black print:border-gray-300">
                                    <span className="text-sky-500 print:hidden">▹</span> Experience
                                </h2>
                                <div className="space-y-6 md:space-y-8 print:space-y-6">
                                    {experience.map((job, idx) => (
                                        <div key={idx} className="relative pl-4 md:pl-6 border-l border-white/10 print:border-l-2 print:border-gray-200 ml-2">
                                            <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-sky-500 print:bg-gray-400"></div>
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                                                <h3 className="text-base md:text-lg font-bold text-white print:text-black">
                                                    {job.role}
                                                </h3>
                                                <span className="text-xs md:text-sm font-mono text-gray-500 print:text-gray-600">
                                                    {job.start_date} - {job.end_date}
                                                </span>
                                            </div>
                                            <div className="text-sky-400 font-medium mb-2 md:mb-3 text-sm md:text-base print:text-sky-700">
                                                {job.company} | {job.location}
                                            </div>
                                            <ul className="list-disc list-outside ml-4 space-y-1.5 md:space-y-2 text-gray-400 text-sm leading-relaxed print:text-gray-800">
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
                                <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2 mb-4 md:mb-6 flex items-center gap-2 print:text-black print:border-gray-300">
                                    <span className="text-sky-500 print:hidden">▹</span> Key Projects
                                </h2>
                                <div className="space-y-6 md:space-y-8 print:space-y-6">
                                    {projects.map((proj, idx) => (
                                        <div key={idx} className="bg-white/5 rounded-xl p-4 md:p-6 border border-white/5 print:bg-transparent print:p-0 print:border-none">
                                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2 gap-1">
                                                <h3 className="text-base md:text-lg font-bold text-white print:text-black">
                                                    {proj.name}
                                                </h3>
                                                <span className="text-xs text-gray-500 font-mono print:text-gray-600">
                                                    {proj.duration}
                                                </span>
                                            </div>
                                            <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm leading-relaxed print:text-gray-800">
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
                                <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2 mb-4 md:mb-6 print:text-black print:border-gray-300">
                                    Skills
                                </h2>
                                <div className="space-y-4 md:space-y-6">
                                    <div>
                                        <h3 className="font-semibold text-sky-400 text-sm mb-2 print:text-sky-700">Frontend</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.frontend.map(s => (
                                                <span key={s} className="bg-white/5 px-2 md:px-3 py-1 rounded text-xs text-gray-300 border border-white/10 print:bg-gray-100 print:text-black print:border-gray-200">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sky-400 text-sm mb-2 print:text-sky-700">Backend</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skills.backend.map(s => (
                                                <span key={s} className="bg-white/5 px-2 md:px-3 py-1 rounded text-xs text-gray-300 border border-white/10 print:bg-gray-100 print:text-black print:border-gray-200">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-sky-400 text-sm mb-2 print:text-sky-700">Testing & Tools</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {[...skills.testing_and_optimization, ...skills.tools_and_platforms].map(s => (
                                                <span key={s} className="bg-white/5 px-2 md:px-3 py-1 rounded text-xs text-gray-300 border border-white/10 print:bg-gray-100 print:text-black print:border-gray-200">
                                                    {s}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* Education Section */}
                            <section>
                                <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2 mb-4 md:mb-6 print:text-black print:border-gray-300">
                                    Education
                                </h2>
                                <div className="space-y-4 md:space-y-6">
                                    {education.map((edu, idx) => (
                                        <div key={idx}>
                                            <div className="font-bold text-white text-sm md:text-base print:text-black">
                                                {edu.degree}
                                            </div>
                                            {edu.field && (
                                                <div className="text-gray-400 text-sm mt-0.5 print:text-gray-700">
                                                    {edu.field}
                                                </div>
                                            )}
                                            <div className="text-sky-400 text-sm font-medium mt-1 print:text-sky-700">
                                                {edu.institution}
                                            </div>
                                            <div className="text-gray-500 text-xs mt-1 print:text-gray-600">
                                                {edu.duration}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Achievements Section */}
                            <section>
                                <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2 mb-4 md:mb-6 print:text-black print:border-gray-300">
                                    Achievements
                                </h2>
                                <ul className="space-y-2 md:space-y-3">
                                    {achievements.map((ach, idx) => (
                                        <li key={idx} className="text-sm text-gray-400 leading-relaxed print:text-gray-800 flex gap-2">
                                            <span className="text-sky-500 flex-shrink-0">★</span>
                                            {ach}
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Languages Section */}
                            <section>
                                <h2 className="text-lg md:text-xl font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2 mb-4 md:mb-6 print:text-black print:border-gray-300">
                                    Languages
                                </h2>
                                <div className="space-y-2 md:space-y-3">
                                    {languages.map((lang, idx) => (
                                        <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-2 print:border-gray-100">
                                            <span className="text-sm font-semibold text-gray-300 print:text-black">{lang.language}</span>
                                            <span className="text-xs text-gray-500">{lang.proficiency}</span>
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

import { Container } from "../components/layout/Container";

export const Resume = () => {
    return (
        <section className="py-24">
            <Container>
                <h1 className="text-4xl font-bold text-white mb-8">Resume</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-gray-400 mb-8">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 hover:text-sky-300 underline"
                        >
                            Download PDF Version
                        </a>
                    </p>

                    <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-4">Abhishek Visen</h2>
                        <p className="text-gray-300 mb-6">Fullstack Engineer specializing in Node.js and React systems.</p>

                        <h3 className="text-xl font-bold text-white mb-2">Experience</h3>
                        <div className="mb-6">
                            <h4 className="font-bold text-gray-200">Senior Software Engineer</h4>
                            <p className="text-sm text-gray-400">2023 - Present</p>
                            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                                <li>Architected event-driven systems handling 1M+ events.</li>
                                <li>Optimized React performance for heavy-load applications.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

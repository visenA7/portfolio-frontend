import type { FrontendCaseStudyProps } from "../../types/frontend";
import { Container } from "../layout/Container";

export const FrontendCaseStudy = ({
    title,
    subtitle,
    metrics,
    sections,
}: FrontendCaseStudyProps) => {
    return (
        <section className="py-20">
            <Container>
                {/* Header */}
                <header className="max-w-3xl">
                    <h1 className="text-3xl font-bold text-white">{title}</h1>
                    <p className="mt-4 text-gray-400">{subtitle}</p>
                </header>

                {/* Metrics */}
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {metrics.map((m) => (
                        <div
                            key={m.label}
                            className="border border-white/10 rounded-lg p-4 bg-black/30"
                        >
                            <p className="text-sm text-gray-400">{m.label}</p>
                            <p className="mt-1 text-lg font-mono text-white">
                                {m.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Sections */}
                <div className="mt-16 space-y-14 max-w-4xl">
                    {sections.map((section) => (
                        <div key={section.title}>
                            <h2 className="text-xl font-semibold text-white mb-4">
                                {section.title}
                            </h2>

                            <div className="space-y-4 text-gray-300 leading-relaxed">
                                {section.content.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};
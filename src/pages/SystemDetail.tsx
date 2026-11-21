import { useParams, Navigate, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { MermaidDiagram } from "../components/common/MermaidDiagram";
import { useState, useEffect } from "react";
import { systems } from "../components/systems/systems.data";
import { ArrowLeftIcon, ServerStackIcon } from "@heroicons/react/24/outline";

export const SystemDetail = () => {
    const { id } = useParams();
    const system = systems.find(s => s.id === id);
    const [content, setContent] = useState<string>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!system) return;

        const loadContent = async () => {
            setLoading(true);
            try {
                const module = await import(`../content/systems/${system.id}.mdx?raw`);
                setContent(module.default);
            } catch (error) {
                console.error("Failed to load content", error);
                setContent("Failed to load system documentation. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        loadContent();
    }, [system]);

    if (!system) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16 transition-colors duration-200">
            {/* Back Navigation */}
            <div className="mb-6">
                <Link
                    to="/systems"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-medium text-text-muted hover:text-accent transition-colors py-1 px-2 rounded-md hover:bg-card-hover cursor-pointer"
                >
                    <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
                    <span>Back to Systems</span>
                </Link>
            </div>

            {/* Header */}
            <header className="mb-8 md:mb-12 border-b border-border-custom pb-6 md:pb-8">
                <div className="flex items-center gap-2 mb-3">
                    <span className="p-1.5 rounded-lg bg-card-hover text-accent border border-border-custom">
                        <ServerStackIcon className="w-4 h-4" aria-hidden="true" />
                    </span>
                    <span className="text-accent font-semibold font-mono text-xs uppercase tracking-wider">
                        Production Architecture Deep Dive
                    </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-heading tracking-tight mb-4">
                    {system.title}
                </h1>

                <p className="text-base sm:text-lg text-text-muted mb-6 leading-relaxed">
                    {system.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                    {system.highlights.map(h => (
                        <span key={h} className="text-xs bg-badge text-badge-text px-3 py-1.5 rounded-full border border-badge-border font-medium font-mono">
                            {h}
                        </span>
                    ))}
                </div>
            </header>

            {/* Markdown Body */}
            {loading ? (
                <div className="py-20 flex justify-center items-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-accent border-t-transparent"></div>
                </div>
            ) : (
                <article className="bento-card rounded-3xl p-6 sm:p-10 border border-card-border shadow-md">
                    <div className="prose dark:prose-invert max-w-none text-text-color leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:text-text-heading [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:text-text-heading [&_p]:mb-4 [&_p]:text-text-muted [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1.5 [&_ul]:mb-4 [&_li]:text-text-muted [&_pre]:bg-background/80 [&_pre]:border [&_pre]:border-border-custom [&_pre]:rounded-xl [&_pre]:p-4 [&_code]:font-mono [&_code]:text-xs sm:[&_code]:text-sm">
                        <ReactMarkdown
                            components={{
                                code(props) {
                                    const { children, className, ...rest } = props;
                                    const match = /language-(\w+)/.exec(className || "");
                                    const isMermaid = match && match[1] === "mermaid";

                                    if (isMermaid) {
                                        return (
                                            <div className="my-6 p-4 rounded-2xl bg-background/60 border border-border-custom overflow-x-auto">
                                                <MermaidDiagram code={String(children).replace(/\n$/, "")} />
                                            </div>
                                        );
                                    }

                                    return (
                                        <code className={className} {...rest}>
                                            {children}
                                        </code>
                                    );
                                },
                            }}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                </article>
            )}
        </div>
    );
};

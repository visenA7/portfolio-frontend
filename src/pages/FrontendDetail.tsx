import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { MermaidDiagram } from "../components/common/MermaidDiagram";
import { useState, useEffect } from "react";
import { frontendTopics } from "../components/frontend/frontend.data";

export const FrontendDetail = () => {
    const { id } = useParams();
    const topic = frontendTopics.find(t => t.id === id);
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        if (!topic) return;

        const loadContent = async () => {
            try {
                // Dynamic import of markdown content using vite's ?raw
                const module = await import(`../content/frontend/${topic.id}.mdx?raw`);
                setContent(module.default);
            } catch (error) {
                console.error("Failed to load content", error);
                setContent("Failed to load documentation. Please try again later.");
            }
        };

        loadContent();
    }, [topic]);

    if (!topic) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <header className="mb-12 border-b border-white/10 pb-8">
                <span className="text-sky-400 font-mono text-sm mb-3 block">
                    Frontend Architecture
                </span>
                <h1 className="text-4xl font-bold text-white mb-6">
                    {topic.title}
                </h1>

                <div className="flex flex-wrap gap-2">
                    {topic.metrics.map(m => (
                        <span key={m.label} className="text-xs bg-sky-500/10 text-sky-300 px-3 py-1.5 rounded-full border border-sky-500/20">
                            {m.label}: {m.value}
                        </span>
                    ))}
                </div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown
                    components={{
                        code(props) {
                            const { children, className, node, ...rest } = props;
                            // Check if the code block language is mermaid
                            const match = /language-(\w+)/.exec(className || "");
                            const isMermaid = match && match[1] === "mermaid";

                            if (isMermaid) {
                                // Render the MermaidDiagram component
                                return <MermaidDiagram code={String(children).replace(/\n$/, "")} />;
                            }

                            // Default behavior for other code blocks
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
        </div>
    );
};

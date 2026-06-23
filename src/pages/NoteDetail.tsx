import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { MermaidDiagram } from "../components/common/MermaidDiagram";
import { useState, useEffect } from "react";
import { notes } from "../components/notes/notes.data";

export const NoteDetail = () => {
    const { id } = useParams();
    const note = notes.find(n => n.id === id);
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        if (!note) return;

        const loadContent = async () => {
            try {
                // Dynamic import of markdown content using vite's ?raw
                const module = await import(`../content/notes/${note.id}.mdx?raw`);
                setContent(module.default);
            } catch (error) {
                console.error("Failed to load content", error);
                setContent("Failed to load note content. Please try again later.");
            }
        };

        loadContent();
    }, [note]);

    if (!note) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 transition-colors duration-300">
            <header className="mb-8 md:mb-12 border-b border-border-custom pb-6 md:pb-8">
                <div className="flex gap-3 text-sm text-sky-600 dark:text-sky-400 font-semibold font-mono mb-2 md:mb-3">
                    <span>{note.date}</span>
                    <span>/</span>
                    <span>Engineering Note</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-extrabold text-text-heading mb-4 md:mb-6">
                    {note.title}
                </h1>

                <div className="flex flex-wrap gap-2">
                    {note.tags.map(tag => (
                        <span key={tag} className="text-xs bg-badge text-badge-text px-3 py-1.5 rounded-full border border-badge-border font-medium">
                            #{tag}
                        </span>
                    ))}
                </div>
            </header>

            <div className="prose dark:prose-invert prose-lg max-w-none text-text-muted transition-colors duration-300">
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

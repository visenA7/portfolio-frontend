import { useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import { systems } from "../components/systems/systems.data";

export const SystemDetail = () => {
    const { id } = useParams();
    const system = systems.find(s => s.id === id);
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        if (!system) return;

        const loadContent = async () => {
            try {
                // Dynamic import of markdown content using vite's ?raw
                const module = await import(`../content/systems/${system.id}.mdx?raw`);
                setContent(module.default);
            } catch (error) {
                console.error("Failed to load content", error);
                setContent("Failed to load system documentation. Please try again later.");
            }
        };

        loadContent();
    }, [system]);

    if (!system) {
        return <Navigate to="/404" replace />;
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-3xl font-bold text-white mb-6">
                System: {system.title}
            </h1>

            <div className="prose prose-invert prose-lg max-w-none">
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </div>
    );
};
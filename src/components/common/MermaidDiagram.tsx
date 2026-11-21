import { useEffect, useRef, useId } from "react";
import mermaid from "mermaid";

type Props = {
    code: string;
};

export const MermaidDiagram = ({ code }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const uniqueId = useId().replace(/:/g, "mmd_");

    useEffect(() => {
        if (!containerRef.current) return;

        const isDark = document.documentElement.classList.contains("dark");

        mermaid.initialize({
            startOnLoad: false,
            theme: isDark ? "dark" : "neutral",
            themeVariables: isDark ? {
                darkMode: true,
                background: "#111827",
                primaryColor: "#38bdf8",
                primaryTextColor: "#f8fafc",
                lineColor: "#94a3b8",
                secondaryColor: "#818cf8",
                tertiaryColor: "#1e293b",
            } : {
                darkMode: false,
                background: "#ffffff",
                primaryColor: "#0284c7",
                primaryTextColor: "#0f172a",
                lineColor: "#64748b",
                secondaryColor: "#6366f1",
                tertiaryColor: "#f1f5f9",
            },
            securityLevel: "loose",
        });

        const renderDiagram = async () => {
            try {
                const elementId = `diagram_${uniqueId}_${Date.now()}`;
                const { svg } = await mermaid.render(elementId, code);
                if (containerRef.current) {
                    containerRef.current.innerHTML = svg;
                }
            } catch (err) {
                console.error("Mermaid rendering failed:", err);
                if (containerRef.current) {
                    containerRef.current.innerHTML = `<pre class="text-xs text-red-500 font-mono p-4">${code}</pre>`;
                }
            }
        };

        renderDiagram();
    }, [code, uniqueId]);

    return (
        <div
            ref={containerRef}
            className="overflow-x-auto flex justify-center py-2 min-h-[160px] items-center text-text-heading"
        />
    );
};

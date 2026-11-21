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
                background: "#14161C",
                primaryColor: "#E2E8F0",
                primaryTextColor: "#F5F5F7",
                lineColor: "#717684",
                secondaryColor: "#272A34",
                tertiaryColor: "#1B1E26",
            } : {
                darkMode: false,
                background: "#FFFFFF",
                primaryColor: "#18181B",
                primaryTextColor: "#111215",
                lineColor: "#717684",
                secondaryColor: "#F4F4F1",
                tertiaryColor: "#EAEAEA",
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

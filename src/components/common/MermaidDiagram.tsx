import { useEffect, useRef } from "react";
import mermaid from "mermaid";

type Props = {
    code: string;
};

export const MermaidDiagram = ({ code }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        mermaid.initialize({
            startOnLoad: false,
            theme: "dark",
            securityLevel: "loose", // REQUIRED for Vite + SVG
        });

        // Inject mermaid code as <pre class="mermaid">
        containerRef.current.innerHTML = `
      <pre class="mermaid">
${code}
      </pre>
    `;

        // Let mermaid scan & render
        mermaid.run({
            nodes: containerRef.current.querySelectorAll(".mermaid"),
        });
    }, [code]);

    return (
        <div
            ref={containerRef}
            className="overflow-x-auto"
        />
    );
};
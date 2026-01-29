import { MermaidDiagram } from "../common/MermaidDiagram";
import { frontendDiagram } from "../hero/frontend.mmd";

export const FrontendArchitectureVisual = () => {
    return (
        <div>
            <h3 className="text-sm font-mono text-gray-400 mb-3">
                Frontend Architecture
            </h3>
            <MermaidDiagram code={frontendDiagram} />
        </div>
    );
};
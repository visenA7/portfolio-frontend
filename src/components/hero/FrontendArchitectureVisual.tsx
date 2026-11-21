import { MermaidDiagram } from "../common/MermaidDiagram";
import { frontendDiagram } from "./frontend.mmd";

export const FrontendArchitectureVisual = () => {
    return (
        <div className="w-full">
            <MermaidDiagram code={frontendDiagram} />
        </div>
    );
};

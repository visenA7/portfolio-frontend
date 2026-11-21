import { MermaidDiagram } from "../common/MermaidDiagram";
import { backendDiagram } from "./backend.mmd";

export const BackendArchitectureVisual = () => {
    return (
        <div className="w-full">
            <MermaidDiagram code={backendDiagram} />
        </div>
    );
};

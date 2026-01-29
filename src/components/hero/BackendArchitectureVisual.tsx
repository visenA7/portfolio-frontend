import { MermaidDiagram } from "../common/MermaidDiagram";
import { backendDiagram } from "./backend.mmd";

export const BackendArchitectureVisual = () => {
  return (
    <div>
      <h3 className="text-sm font-mono text-gray-400 mb-3">
        Backend Architecture
      </h3>
      <MermaidDiagram code={backendDiagram} />
    </div>
  );
};
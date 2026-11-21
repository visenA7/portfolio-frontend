import { MermaidDiagram } from "../common/MermaidDiagram";
import { propEquityDiagram } from "./propequity.mmd";

export const PropEquityArchitectureVisual = () => {
    return (
        <div className="w-full">
            <MermaidDiagram code={propEquityDiagram} />
        </div>
    );
};

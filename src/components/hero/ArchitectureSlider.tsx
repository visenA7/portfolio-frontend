import { useState } from "react";
import { BackendArchitectureVisual } from "./BackendArchitectureVisual";
import { FrontendArchitectureVisual } from "./FrontendArchitectureVisual";

const PANELS = [
    { id: "backend", label: "Backend", Component: BackendArchitectureVisual },
    { id: "frontend", label: "Frontend", Component: FrontendArchitectureVisual },
];

export const ArchitectureSlider = () => {
    const [index, setIndex] = useState(0);

    const prev = () => setIndex((i) => Math.max(i - 1, 0));
    const next = () => setIndex((i) => Math.min(i + 1, PANELS.length - 1));

    return (
        <div className="relative">
            {/* Slider Window */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black/40">
                <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {PANELS.map(({ id, Component }) => (
                        <div key={id} className="min-w-full p-6">
                            <Component />
                        </div>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <div className="mt-4 flex items-center justify-between">
                <button
                    onClick={prev}
                    disabled={index === 0}
                    className="px-3 py-1 text-sm border border-white/10 rounded disabled:opacity-30"
                >
                    ← Backend
                </button>

                <span className="text-xs font-mono text-gray-400">
                    {PANELS[index].label} Architecture
                </span>

                <button
                    onClick={next}
                    disabled={index === PANELS.length - 1}
                    className="px-3 py-1 text-sm border border-white/10 rounded disabled:opacity-30"
                >
                    Frontend →
                </button>
            </div>
        </div>
    );
};
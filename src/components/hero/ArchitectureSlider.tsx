import { useState } from "react";
import { BackendArchitectureVisual } from "./BackendArchitectureVisual";
import { FrontendArchitectureVisual } from "./FrontendArchitectureVisual";
import { ServerStackIcon, ComputerDesktopIcon } from "@heroicons/react/24/outline";

const PANELS = [
    {
        id: "backend",
        label: "Distributed Backend Architecture",
        shortLabel: "Backend (.NET + Node.js)",
        icon: ServerStackIcon,
        Component: BackendArchitectureVisual,
        subtext: "ASP.NET Core Web API • Node.js WebSocket • Redis Pub/Sub • PostgreSQL"
    },
    {
        id: "frontend",
        label: "High-Performance Frontend Flow",
        shortLabel: "Frontend (React 19)",
        icon: ComputerDesktopIcon,
        Component: FrontendArchitectureVisual,
        subtext: "Virtualized Rendering • Optimistic UI • Real-time Sockets • Web Workers"
    },
];

export const ArchitectureSlider = () => {
    const [activeTab, setActiveTab] = useState<"backend" | "frontend">("backend");
    const currentPanel = PANELS.find(p => p.id === activeTab) || PANELS[0];
    const ActiveComponent = currentPanel.Component;

    return (
        <div className="bento-card rounded-2xl overflow-hidden border border-card-border shadow-xl">
            {/* Terminal / Studio Window Header */}
            <div className="px-4 py-3 bg-card-hover border-b border-border-custom flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-xs font-mono font-medium text-text-muted ml-2 hidden sm:inline">
                        architecture_topology.v2
                    </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center p-1 bg-background rounded-xl border border-border-custom">
                    {PANELS.map((panel) => {
                        const Icon = panel.icon;
                        const isActive = activeTab === panel.id;
                        return (
                            <button
                                key={panel.id}
                                onClick={() => setActiveTab(panel.id as "backend" | "frontend")}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer min-h-[32px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 ${
                                    isActive
                                        ? "bg-sky-600 text-white shadow-xs font-semibold"
                                        : "text-text-muted hover:text-text-heading"
                                }`}
                                aria-pressed={isActive}
                            >
                                <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                                <span>{panel.shortLabel}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Architecture Canvas */}
            <div className="p-4 sm:p-6 bg-background/50">
                <div className="mb-3 flex items-center justify-between">
                    <div>
                        <h3 className="text-sm font-bold text-text-heading flex items-center gap-2">
                            <span>{currentPanel.label}</span>
                        </h3>
                        <p className="text-xs text-text-muted font-mono mt-0.5">
                            {currentPanel.subtext}
                        </p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-badge text-badge-text border border-badge-border">
                        Live Topology
                    </span>
                </div>

                <div className="rounded-xl bg-card border border-border-custom p-3 sm:p-4 min-h-[260px] flex items-center justify-center">
                    <ActiveComponent />
                </div>
            </div>

            {/* Bottom Insight Footer */}
            <div className="px-4 py-2.5 bg-card-hover/60 border-t border-border-custom text-xs font-mono text-text-muted flex items-center justify-between">
                <span>Interactive Mermaid Visualizer</span>
                <span className="text-emerald-500 font-medium">99.9% Uptime Design</span>
            </div>
        </div>
    );
};

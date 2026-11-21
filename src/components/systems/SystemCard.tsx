import type { System } from "../../types/system";
import { Link } from "react-router-dom";
import {
    ServerStackIcon,
    CpuChipIcon,
    ChatBubbleLeftRightIcon,
    CommandLineIcon,
    ArrowRightIcon,
    CheckCircleIcon
} from "@heroicons/react/24/outline";

const iconMap: Record<string, typeof ServerStackIcon> = {
    hrms: ServerStackIcon,
    attendance: CpuChipIcon,
    chat: ChatBubbleLeftRightIcon,
    "node-internals": CommandLineIcon,
};

export const SystemCard = ({ system }: { system: System }) => {
    const Icon = iconMap[system.id] || ServerStackIcon;

    return (
        <div className="bento-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300">
            <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-500 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-badge text-badge-text border border-badge-border">
                        Architecture Study
                    </span>
                </div>

                <h3 className="text-xl font-bold text-text-heading group-hover:text-sky-500 transition-colors tracking-tight">
                    {system.title}
                </h3>

                <p className="mt-2.5 text-text-muted text-sm leading-relaxed">
                    {system.summary}
                </p>

                {/* Highlights List */}
                <div className="mt-5 pt-4 border-t border-border-custom/80 space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-text-muted font-semibold">
                        Key Architectural Pillars
                    </div>
                    <ul className="space-y-1.5">
                        {system.highlights.map(h => (
                            <li key={h} className="flex items-center gap-2 text-xs sm:text-sm text-text-muted">
                                <CheckCircleIcon className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden="true" />
                                <span>{h}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Deep Dive Action */}
            <div className="mt-6 pt-4 border-t border-border-custom">
                <Link
                    to={`/systems/${system.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-400 group-hover:text-sky-500 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md py-1"
                >
                    <span>Explore Deep Dive & Topology</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
            </div>
        </div>
    );
};

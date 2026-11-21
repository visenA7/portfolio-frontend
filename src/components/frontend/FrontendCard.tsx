import type { FrontendTopic } from "../../types/frontend";
import { Link } from "react-router-dom";
import {
    ChatBubbleBottomCenterTextIcon,
    MapIcon,
    BuildingOffice2Icon,
    ArrowRightIcon,
    ChartBarIcon
} from "@heroicons/react/24/outline";

const iconMap: Record<string, typeof ChatBubbleBottomCenterTextIcon> = {
    "chat-ui": ChatBubbleBottomCenterTextIcon,
    "gis-ui": MapIcon,
    "hrms-ui": BuildingOffice2Icon,
};

export const FrontendCard = ({ topic }: { topic: FrontendTopic }) => {
    const Icon = iconMap[topic.id] || ChartBarIcon;

    return (
        <div className="bento-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 h-full">
            <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-card-hover border border-border-custom text-accent">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-badge text-badge-text border border-badge-border">
                        Client Performance
                    </span>
                </div>

                <h3 className="text-xl font-bold text-text-heading group-hover:text-accent transition-colors tracking-tight">
                    {topic.title}
                </h3>

                <p className="mt-2.5 text-text-muted text-sm leading-relaxed">
                    {topic.summary}
                </p>

                {/* Metrics Grid */}
                <div className="mt-5 grid grid-cols-3 gap-2">
                    {topic.metrics.slice(0, 3).map((m) => (
                        <div
                            key={m.label}
                            className="bg-card-hover/80 p-2.5 rounded-xl border border-border-custom text-center"
                        >
                            <div className="text-[10px] text-text-muted uppercase tracking-wider font-semibold font-mono">
                                {m.label}
                            </div>
                            <div className="text-text-heading text-xs font-bold font-mono mt-1 truncate" title={m.value}>
                                {m.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Deep Dive Action */}
            <div className="mt-6 pt-4 border-t border-border-custom">
                <Link
                    to={`/frontend/${topic.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-80 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1"
                >
                    <span>Read Architectural Breakdown</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
            </div>
        </div>
    );
};

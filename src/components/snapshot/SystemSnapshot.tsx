import {
    RocketLaunchIcon,
    ClockIcon,
    CpuChipIcon,
    ArrowTrendingUpIcon,
    UserGroupIcon,
    ShieldCheckIcon,
    SparklesIcon,
    ServerStackIcon
} from "@heroicons/react/24/outline";

const snapshotMetrics = [
    {
        icon: RocketLaunchIcon,
        metric: "500K+",
        label: "Daily API Requests",
        color: "text-sky-500",
        bg: "bg-sky-500/10",
        border: "border-sky-500/20"
    },
    {
        icon: ClockIcon,
        metric: "<50ms",
        label: "Delivery Latency",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
    {
        icon: CpuChipIcon,
        metric: "90% → <40%",
        label: "CPU Optimization",
        color: "text-indigo-500",
        bg: "bg-indigo-500/10",
        border: "border-indigo-500/20"
    },
    {
        icon: ArrowTrendingUpIcon,
        metric: "30%",
        label: "Load Time Speedup",
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
        border: "border-cyan-500/20"
    },
    {
        icon: UserGroupIcon,
        metric: "15,000+",
        label: "Active Workforce",
        color: "text-purple-500",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        icon: ShieldCheckIcon,
        metric: "30%",
        label: "Fewer Deploy Failures",
        color: "text-teal-500",
        bg: "bg-teal-500/10",
        border: "border-teal-500/20"
    },
    {
        icon: SparklesIcon,
        metric: "AI-Powered",
        label: "HRMS Assistant",
        color: "text-amber-500",
        bg: "bg-amber-500/10",
        border: "border-amber-500/20"
    },
    {
        icon: ServerStackIcon,
        metric: "React & .NET",
        label: "Microservices",
        color: "text-rose-500",
        bg: "bg-rose-500/10",
        border: "border-rose-500/20"
    }
];

export const SystemSnapshot = () => (
    <section className="py-8 md:py-10 border-b border-border-custom bg-card/40 backdrop-blur-xs transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-sky-500"></span>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-text-muted">
                    Production Performance & Engineering Benchmarks
                </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
                {snapshotMetrics.map((item) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={item.label}
                            className="bento-card p-3 rounded-xl flex flex-col justify-between group hover:border-sky-500/30 transition-all cursor-default"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className={`p-1.5 rounded-lg ${item.bg} ${item.border} border`}>
                                    <Icon className={`w-4 h-4 ${item.color}`} aria-hidden="true" />
                                </div>
                            </div>
                            <div>
                                <div className="text-sm md:text-base font-extrabold font-mono text-text-heading group-hover:text-sky-500 transition-colors">
                                    {item.metric}
                                </div>
                                <div className="text-[11px] text-text-muted font-medium leading-tight mt-0.5 truncate" title={item.label}>
                                    {item.label}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

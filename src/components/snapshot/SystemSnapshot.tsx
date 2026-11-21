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
    },
    {
        icon: ClockIcon,
        metric: "<50ms",
        label: "Delivery Latency",
    },
    {
        icon: CpuChipIcon,
        metric: "90% → <40%",
        label: "CPU Optimization",
    },
    {
        icon: ArrowTrendingUpIcon,
        metric: "30%",
        label: "Load Time Speedup",
    },
    {
        icon: UserGroupIcon,
        metric: "15,000+",
        label: "Active Workforce",
    },
    {
        icon: ShieldCheckIcon,
        metric: "30%",
        label: "Fewer Deploy Failures",
    },
    {
        icon: SparklesIcon,
        metric: "AI-Powered",
        label: "HRMS Assistant",
    },
    {
        icon: ServerStackIcon,
        metric: "React & .NET",
        label: "Microservices",
    }
];

export const SystemSnapshot = () => (
    <section className="py-8 md:py-10 border-b border-border-custom bg-card/40 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-emerald-600 dark:bg-emerald-400"></span>
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
                            className="bento-card p-3 rounded-xl flex flex-col justify-between group hover:border-card-hover-border transition-all cursor-default"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="p-1.5 rounded-lg bg-card-hover border border-border-custom text-text-muted group-hover:text-text-heading transition-colors">
                                    <Icon className="w-4 h-4" aria-hidden="true" />
                                </div>
                            </div>
                            <div>
                                <div className="text-sm md:text-base font-extrabold font-mono text-text-heading">
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

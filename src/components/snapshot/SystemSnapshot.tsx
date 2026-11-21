import {
    RocketLaunchIcon,
    ClockIcon,
    CpuChipIcon,
    SparklesIcon,
    UserGroupIcon,
    ServerStackIcon,
    ShieldCheckIcon,
    CircleStackIcon
} from "@heroicons/react/24/outline";

const snapshotMetrics = [
    {
        icon: SparklesIcon,
        metric: "NL-to-SQL",
        label: "Governed via MCP",
    },
    {
        icon: ServerStackIcon,
        metric: "29 Topics",
        label: "~30 Kafka Consumers",
    },
    {
        icon: UserGroupIcon,
        metric: "10K+",
        label: "Concurrent Sessions",
    },
    {
        icon: ClockIcon,
        metric: "<50ms",
        label: "Delivery Latency",
    },
    {
        icon: RocketLaunchIcon,
        metric: "500K+",
        label: "Daily API Requests",
    },
    {
        icon: CpuChipIcon,
        metric: "90% → <40%",
        label: "CPU Optimization",
    },
    {
        icon: CircleStackIcon,
        metric: "Hybrid AI",
        label: "Qdrant + Elasticsearch",
    },
    {
        icon: ShieldCheckIcon,
        metric: "AES-256",
        label: "PII Encryption & Audit",
    }
];

export const SystemSnapshot = () => (
    <section className="py-8 md:py-10 border-b border-border-custom bg-card/40 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-2 mb-4">
                <span className="flex h-2 w-2 rounded-full bg-accent"></span>
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
                            className="bento-card p-3 rounded-xl flex flex-col justify-between group hover:border-accent transition-all cursor-default"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="p-1.5 rounded-lg bg-card-hover border border-border-custom text-accent group-hover:scale-105 transition-transform">
                                    <Icon className="w-4 h-4" aria-hidden="true" />
                                </div>
                            </div>
                            <div>
                                <div className="text-sm md:text-base font-extrabold font-mono text-text-heading group-hover:text-accent transition-colors">
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

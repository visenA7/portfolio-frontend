import { FrontendCaseStudy } from "../components/frontend/FrontendCaseStudy";

export const Frontend = () => {
    return (
        <div className="space-y-12 pb-20">
            <FrontendCaseStudy
                title="Enterprise HRMS Dashboards"
                subtitle="Complex, data-dense interfaces for managing workforce operations."
                metrics={[
                    { label: "Data Rows", value: "5000+ Virtualized" },
                    { label: "Form Fields", value: "50+ per wizard" },
                    { label: "Role Types", value: "RBAC Driven" },
                    { label: "Re-renders", value: "Strictly Optimized" }
                ]}
                sections={[
                    {
                        title: "Complex Forms & Wizards",
                        content: [
                            "Payroll processing involves a 4-step wizard with deep validation.",
                            "Managed complex state using robust form libraries to prevent UI lag during typing."
                        ]
                    },
                    {
                        title: "High-Performance Tables",
                        content: [
                            "Attendance logs for 1000+ employees rendered using virtualization.",
                            "Implemented custom filtering and sorting without blocking the main thread."
                        ]
                    },
                    {
                        title: "Role-Based UI (RBAC)",
                        content: [
                            "Dynamic UI rendering based on granular permissions (e.g., 'approve_leave' vs 'view_leave').",
                            "Abstracted permission logic into custom hooks for maintainability."
                        ]
                    }
                ]}
            />

            <FrontendCaseStudy
                title="Real-Time Chat UI Engineering"
                subtitle="Designing a high-performance React UI for real-time messaging under heavy load."
                metrics={[
                    { label: "Messages per thread", value: "10k+" },
                    { label: "Render strategy", value: "Virtualized lists" },
                    { label: "Latency target", value: "<100ms UI update" },
                    { label: "State sync", value: "WebSocket + REST" },
                ]}
                sections={[
                    {
                        title: "Problem Statement",
                        content: [
                            "The UI needed to handle long chat histories, real-time updates, and unreliable network conditions without degrading user experience.",
                        ],
                    },
                    {
                        title: "Rendering Strategy",
                        content: [
                            "Rendering thousands of messages caused DOM thrashing and frame drops.",
                            "I implemented windowed rendering to ensure only visible messages were mounted in the DOM.",
                        ],
                    },
                    {
                        title: "State Management",
                        content: [
                            "Server state was synchronized via WebSocket, while local optimistic updates ensured instant UI feedback.",
                            "Conflicts were resolved using message IDs and server reconciliation.",
                        ],
                    },
                    {
                        title: "Performance Optimizations",
                        content: [
                            "Memoized message rows to avoid unnecessary re-renders.",
                            "Isolated scroll state from message state to prevent cascading updates.",
                        ],
                    },
                ]}
            />
        </div>
    );
};
import { FrontendCaseStudy } from "../components/frontend/FrontendCaseStudy";

export const Frontend = () => {
    return (
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
                {
                    title: "What I’d Improve at 10× Scale",
                    content: [
                        "Introduce background message chunking.",
                        "Move heavy formatting logic to Web Workers.",
                    ],
                },
            ]}
        />
    );
};
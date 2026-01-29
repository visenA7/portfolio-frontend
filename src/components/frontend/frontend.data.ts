import type { FrontendTopic } from "../../types/frontend";

export const frontendTopics: FrontendTopic[] = [
    {
        id: "chat-ui",
        title: "Real-Time Chat UI",
        summary: "High-performance interface for 1-to-1 and group messaging.",
        metrics: [
            { label: "Messages", value: "Virtual List" },
            { label: "Updates", value: "Optimistic" },
            { label: "State", value: "Zustand" }
        ]
    },
    {
        id: "gis-ui",
        title: "GIS & Maps Dashboard",
        summary: "Interactive map visualization for spatial data analytics.",
        metrics: [
            { label: "Map Engine", value: "Mapbox GL" },
            { label: "Data Points", value: "100k+" },
            { label: "Layers", value: "Dynamic" }
        ]
    },
    {
        id: "hrms-ui",
        title: "Enterprise HRMS UI",
        summary: "Complex forms and data grids for workforce management.",
        metrics: [
            { label: "Forms", value: "React Hook Form" },
            { label: "Grids", value: "AG Grid" },
            { label: "Accessibility", value: "WCAG 2.1" }
        ]
    }
];

import type { Note } from "../../types/note";

export const notes: Note[] = [
    {
        id: "event-loop",
        title: "Node.js Event Loop Deep Dive",
        summary: "Understanding phases, microtasks, and common blocking pitfalls.",
        date: "2023-10-15",
        tags: ["Node.js", "Performance", "Internals"]
    },
    {
        id: "ef-core-tuning",
        title: "EF Core Query & Performance Tuning",
        summary: "Optimizing Entity Framework Core query executions, preventing N+1 problems, and configuring DbContext pool scaling.",
        date: "2023-11-20",
        tags: [".NET Core", "C#", "Database", "Performance"]
    },
    {
        id: "redis-queues",
        title: "Scaling with Redis Queues",
        summary: "Patterns for reliable background job processing using BullMQ.",
        date: "2023-11-02",
        tags: ["System Design", "Redis", "Backend"]
    }
];

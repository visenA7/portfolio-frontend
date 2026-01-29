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
        id: "redis-queues",
        title: "Scaling with Redis Queues",
        summary: "Patterns for reliable background job processing using BullMQ.",
        date: "2023-11-02",
        tags: ["System Design", "Redis", "Backend"]
    }
];

import { notes } from "./notes.data";
import { NoteCard } from "./NoteCard";
import { Container } from "../layout/Container";
import { SectionHeading } from "../common/SectionHeading";

export const NotesSection = () => (
    <section className="py-14 sm:py-20 border-b border-border-custom relative transition-colors duration-200">
        <Container>
            <SectionHeading
                eyebrow="TECHNICAL ESSAYS & LAB NOTES"
                title="Engineering Deep Dives & Lessons"
                description="Practical technical explorations covering Node.js event-loop internals, high-performance EF Core patterns, and Redis queue distributed strategies."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {notes.map((n) => (
                    <NoteCard key={n.id} note={n} />
                ))}
            </div>
        </Container>
    </section>
);

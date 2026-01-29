import { notes } from "./notes.data";
import { NoteCard } from "./NoteCard";
import { Container } from "../layout/Container";

export const NotesSection = () => (
    <section className="py-20">
        <Container>
            <h2 className="text-2xl font-bold text-white mb-8">
                Engineering Notes
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                {notes.map((n) => (
                    <NoteCard key={n.id} note={n} />
                ))}
            </div>
        </Container>
    </section>
);

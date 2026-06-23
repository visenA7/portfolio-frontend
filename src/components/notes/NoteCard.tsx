import type { Note } from "../../types/note";

export const NoteCard = ({ note }: { note: Note }) => {
    return (
        <div className="bg-card border border-card-border rounded-xl p-5 md:p-6 hover:border-sky-500 hover:bg-card-hover transition-all duration-300 shadow-sm hover:shadow-md flex flex-col h-full">
            <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold">{note.date}</span>
            </div>

            <h3 className="text-lg font-bold text-text-heading mb-2">
                {note.title}
            </h3>

            <p className="text-text-muted text-sm mb-4 flex-grow leading-relaxed">
                {note.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {note.tags.map(tag => (
                    <span key={tag} className="text-xs bg-background border border-border-custom px-2 py-1 rounded text-text-muted transition-colors duration-300 font-medium">
                        #{tag}
                    </span>
                ))}
            </div>

            <a
                href={`/notes/${note.id}`}
                className="inline-flex items-center mt-auto py-2 text-sky-600 dark:text-sky-400 text-sm font-bold min-h-[44px] hover:text-sky-500 hover:underline transition-colors"
            >
                → Read Note
            </a>
        </div>
    );
};

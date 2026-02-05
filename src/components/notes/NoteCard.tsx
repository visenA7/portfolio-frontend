import type { Note } from "../../types/note";

export const NoteCard = ({ note }: { note: Note }) => {
    return (
        <div className="border border-white/10 rounded-xl p-5 md:p-6 hover:border-sky-400 transition flex flex-col h-full">
            <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-mono text-sky-400">{note.date}</span>
            </div>

            <h3 className="text-lg font-semibold text-white mb-2">
                {note.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4 flex-grow">
                {note.summary}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {note.tags.map(tag => (
                    <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">
                        #{tag}
                    </span>
                ))}
            </div>

            <a
                href={`/notes/${note.id}`}
                className="inline-flex items-center mt-auto py-2 text-sky-400 text-sm min-h-[44px] hover:text-sky-300 hover:underline transition-colors"
            >
                → Read Note
            </a>
        </div>
    );
};

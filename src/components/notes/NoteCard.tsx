import type { Note } from "../../types/note";
import { Link } from "react-router-dom";
import { BookOpenIcon, ArrowRightIcon, CalendarDaysIcon } from "@heroicons/react/24/outline";

export const NoteCard = ({ note }: { note: Note }) => {
    return (
        <div className="bento-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300 h-full">
            <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                        <CalendarDaysIcon className="w-3.5 h-3.5 text-accent" aria-hidden="true" />
                        <span>{note.date}</span>
                    </span>
                    <span className="p-1.5 rounded-lg bg-card-hover border border-border-custom text-accent">
                        <BookOpenIcon className="w-4 h-4" aria-hidden="true" />
                    </span>
                </div>

                <h3 className="text-xl font-bold text-text-heading group-hover:text-accent transition-colors tracking-tight">
                    {note.title}
                </h3>

                <p className="mt-2.5 text-text-muted text-sm leading-relaxed">
                    {note.summary}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                    {note.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-mono bg-card-hover px-2.5 py-1 rounded-md border border-border-custom text-text-muted"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Read Action */}
            <div className="mt-6 pt-4 border-t border-border-custom">
                <Link
                    to={`/notes/${note.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:opacity-80 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md py-1"
                >
                    <span>Read Engineering Note</span>
                    <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
            </div>
        </div>
    );
};

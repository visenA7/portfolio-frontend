import { Container } from "../components/layout/Container";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export const NotFound = () => {
    return (
        <section className="py-24 sm:py-36 text-center">
            <Container>
                <div className="max-w-md mx-auto bento-card rounded-3xl p-8 sm:p-12 border border-card-border shadow-xl">
                    <span className="text-xs font-mono font-bold text-sky-500 uppercase tracking-widest px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 inline-block mb-4">
                        404 ERROR
                    </span>
                    <h1 className="text-6xl font-extrabold text-text-heading tracking-tight mb-3">404</h1>
                    <p className="text-lg text-text-muted mb-8 leading-relaxed">
                        The requested engineering document or route does not exist.
                    </p>
                    <Link
                        to="/"
                        className="px-6 py-3.5 min-h-[44px] rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold shadow-md shadow-sky-600/20 hover:shadow-sky-500/30 transition-all text-sm inline-flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                    >
                        <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
                        <span>Return to Home</span>
                    </Link>
                </div>
            </Container>
        </section>
    );
};

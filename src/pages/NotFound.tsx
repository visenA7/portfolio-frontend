import { Container } from "../components/layout/Container";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export const NotFound = () => {
    return (
        <section className="py-24 sm:py-36 text-center">
            <Container>
                <div className="max-w-md mx-auto bento-card rounded-3xl p-8 sm:p-12 border border-card-border shadow-xl">
                    <span className="text-xs font-mono font-bold text-accent uppercase tracking-widest px-3 py-1 rounded-full bg-badge border border-badge-border inline-block mb-4">
                        404 ERROR
                    </span>
                    <h1 className="text-6xl font-extrabold text-text-heading tracking-tight mb-3">404</h1>
                    <p className="text-lg text-text-muted mb-8 leading-relaxed">
                        The requested engineering document or route does not exist.
                    </p>
                    <Link
                        to="/"
                        className="px-6 py-3.5 min-h-[44px] rounded-xl bg-[#A77C42] hover:bg-[#936c37] text-white dark:bg-[#C49A5A] dark:hover:bg-[#b2884a] dark:text-[#191713] font-bold shadow-xs transition-all text-sm inline-flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    >
                        <ArrowLeftIcon className="w-4 h-4" aria-hidden="true" />
                        <span>Return to Home</span>
                    </Link>
                </div>
            </Container>
        </section>
    );
};

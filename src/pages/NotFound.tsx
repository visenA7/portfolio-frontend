import { Container } from "../components/layout/Container";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <section className="py-20 md:py-32 text-center">
            <Container>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 md:mb-4">404</h1>
                <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8">Page not found</p>
                <Link
                    to="/"
                    className="px-6 py-3 min-h-[44px] rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wide inline-flex items-center justify-center"
                >
                    Go Back Home
                </Link>
            </Container>
        </section>
    );
};

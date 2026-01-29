import { Container } from "../components/layout/Container";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <section className="py-32 text-center">
            <Container>
                <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                <p className="text-xl text-gray-400 mb-8">Page not found</p>
                <Link
                    to="/"
                    className="px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wide inline-block"
                >
                    Go Back Home
                </Link>
            </Container>
        </section>
    );
};

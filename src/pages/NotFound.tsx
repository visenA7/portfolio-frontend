import { Container } from "../components/layout/Container";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <section className="py-32 text-center">
            <Container>
                <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                <p className="text-xl text-gray-400 mb-8">Page not found</p>
                <Link to="/" className="btn-primary inline-block">
                    Go Back Home
                </Link>
            </Container>
        </section>
    );
};

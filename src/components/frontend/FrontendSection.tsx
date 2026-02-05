import { frontendTopics } from "./frontend.data";
import { FrontendCard } from "./FrontendCard";
import { Container } from "../layout/Container";

export const FrontendSection = () => (
    <section className="py-20">
        <Container>
            <h2 className="text-2xl font-bold text-white mb-8">
                Frontend Architecture Topics
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {frontendTopics.map((topic) => (
                    <FrontendCard key={topic.id} topic={topic} />
                ))}
            </div>
        </Container>
    </section>
);

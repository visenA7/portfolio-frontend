import { frontendTopics } from "./frontend.data";
import { FrontendCard } from "./FrontendCard";
import { Container } from "../layout/Container";
import { SectionHeading } from "../common/SectionHeading";

export const FrontendSection = () => (
    <section className="py-14 sm:py-20 border-b border-border-custom relative transition-colors duration-200">
        <Container>
            <SectionHeading
                eyebrow="MODERN FRONTEND ARCHITECTURE"
                title="Sub-Frame Client Performance & Complex Interfaces"
                description="Handling 100k+ coordinate rendering, virtualized high-frequency messaging lists, and strict WCAG 2.1 AA accessible workflows without layout shifts."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {frontendTopics.map((topic) => (
                    <FrontendCard key={topic.id} topic={topic} />
                ))}
            </div>
        </Container>
    </section>
);

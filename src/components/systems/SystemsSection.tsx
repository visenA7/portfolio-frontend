import { systems } from "./systems.data";
import { SystemCard } from "./SystemCard";
import { Container } from "../layout/Container";
import { SectionHeading } from "../common/SectionHeading";

export const SystemsSection = () => (
    <section className="py-14 sm:py-20 border-b border-border-custom relative transition-colors duration-200">
        <Container>
            <SectionHeading
                eyebrow="DISTRIBUTED SYSTEMS ARCHITECTURE"
                title="Systems I've Architected & Shipped to Production"
                description="End-to-end design of high-concurrency event-driven backends, microservices, and database tuning that serve over 15,000+ employees and millions of operations."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {systems.map((s) => (
                    <SystemCard key={s.id} system={s} />
                ))}
            </div>
        </Container>
    </section>
);

import { systems } from "./systems.data";
import { SystemCard } from "./SystemCard";
import { Container } from "../layout/Container";

export const SystemsSection = () => (
    <section className="py-20">
        <Container>
            <h2 className="text-2xl font-bold text-white mb-8">
                Systems I’ve Designed
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {systems.map((s) => (
                    <SystemCard key={s.id} system={s} />
                ))}
            </div>
        </Container>
    </section>
);